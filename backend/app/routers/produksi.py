from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import (
    Pemasok,
    Produk,
    ProdukVarian,
    PenerimaanBahanBaku,
    Penggilingan,
    Pengemasan,
)
from app.schemas import (
    PenerimaanCreate,
    PenerimaanMutuUpdate,
    PenerimaanResponse,
    PenggilinganCreate,
    PenggilinganResponse,
    PengemasanCreate,
    PengemasanResponse,
    HasilGilingResponse,
)

TOLERANSI = 1e-6
RENDEMEN_MIN = 0.45
RENDEMEN_MAX = 0.80

def get_sisa_hasil_giling(db: Session, produk_id: int) -> float:
    total_hasil = (
        db.query(func.sum(Penggilingan.berat_hasil_kg))
        .join(PenerimaanBahanBaku, Penggilingan.penerimaan_id == PenerimaanBahanBaku.id)
        .filter(PenerimaanBahanBaku.produk_id == produk_id)
        .scalar()
    ) or 0.0
    total_kemas = (
        db.query(func.sum(Pengemasan.jumlah_pcs * ProdukVarian.berat))
        .join(ProdukVarian, Pengemasan.produk_varian_id == ProdukVarian.id)
        .filter(ProdukVarian.produk_id == produk_id)
        .scalar()
    ) or 0.0
    return total_hasil - total_kemas


penerimaan_router = APIRouter(prefix="/penerimaan", tags=["Produksi - Penerimaan bahan baku"])


@penerimaan_router.get("", response_model=list[PenerimaanResponse])
def list_penerimaan(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(PenerimaanBahanBaku).order_by(PenerimaanBahanBaku.tanggal.desc()).all()


@penerimaan_router.post("", response_model=PenerimaanResponse)
def create_penerimaan(
    data: PenerimaanCreate,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user),
):
    if not db.query(Pemasok).filter(Pemasok.id == data.pemasok_id).first():
        raise HTTPException(status_code=404, detail=f"Pemasok id {data.pemasok_id} tidak ditemukan")
    if not db.query(Produk).filter(Produk.id == data.produk_id).first():
        raise HTTPException(status_code=404, detail=f"Produk id {data.produk_id} tidak ditemukan")

    penerimaan = PenerimaanBahanBaku(**data.model_dump())
    db.add(penerimaan)
    db.commit()
    db.refresh(penerimaan)
    return penerimaan


@penerimaan_router.patch("/{penerimaan_id}/mutu", response_model=PenerimaanResponse)
def update_mutu(
    penerimaan_id: int,
    data: PenerimaanMutuUpdate,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user),
):
    penerimaan = db.query(PenerimaanBahanBaku).filter(PenerimaanBahanBaku.id == penerimaan_id).first()
    if not penerimaan:
        raise HTTPException(status_code=404, detail="Penerimaan tidak ditemukan")
    if penerimaan.penggilingan:
        raise HTTPException(
            status_code=400,
            detail="Status mutu tidak bisa diubah karena bahan baku ini sudah mulai digiling",
        )

    penerimaan.status_mutu = data.status_mutu
    if data.catatan is not None:
        penerimaan.catatan = data.catatan
    db.commit()
    db.refresh(penerimaan)
    return penerimaan


penggilingan_router = APIRouter(prefix="/penggilingan", tags=["Produksi - Penggilingan"])


@penggilingan_router.get("", response_model=list[PenggilinganResponse])
def list_penggilingan(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(Penggilingan).order_by(Penggilingan.tanggal.desc()).all()


@penggilingan_router.post("", response_model=PenggilinganResponse)
def create_penggilingan(
    data: PenggilinganCreate,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user),
):
    penerimaan = db.query(PenerimaanBahanBaku).filter(PenerimaanBahanBaku.id == data.penerimaan_id).first()
    if not penerimaan:
        raise HTTPException(status_code=404, detail=f"Penerimaan id {data.penerimaan_id} tidak ditemukan")

    if penerimaan.status_mutu != "lolos":
        raise HTTPException(
            status_code=400,
            detail=f"Bahan baku belum lolos pemeriksaan mutu (status sekarang: {penerimaan.status_mutu})",
        )

    if data.berat_hasil_kg > data.berat_masuk_kg + TOLERANSI:
        raise HTTPException(
            status_code=400,
            detail="Berat hasil giling tidak mungkin lebih besar dari berat bahan baku yang masuk",
        )

    if data.berat_masuk_kg > penerimaan.berat_sisa_kg + TOLERANSI:
        raise HTTPException(
            status_code=400,
            detail=f"Bahan baku yang tersisa tinggal {penerimaan.berat_sisa_kg} kg",
        )

    rendemen = data.berat_hasil_kg / data.berat_masuk_kg if data.berat_masuk_kg else 0
    if rendemen > RENDEMEN_MAX:
        raise HTTPException(
            status_code=400,
            detail=(
                f"Rendemen {rendemen:.0%} kelihatannya kurang wajar (maksimal sekitar "
                f"{RENDEMEN_MAX:.0%}) — gabah pasti kehilangan sekam & dedak saat digiling. "
                f"Cek lagi berat masuk/hasilnya, siapa tahu salah ketik."
            ),
        )
    if rendemen < RENDEMEN_MIN:
        raise HTTPException(
            status_code=400,
            detail=(
                f"Rendemen cuma {rendemen:.0%}, kelihatannya terlalu rendah (biasanya "
                f"minimal sekitar {RENDEMEN_MIN:.0%}). Cek lagi berat masuk/hasilnya, "
                f"siapa tahu salah ketik."
            ),
        )

    giling = Penggilingan(**data.model_dump())
    db.add(giling)
    db.commit()
    db.refresh(giling)
    return giling


hasil_giling_router = APIRouter(prefix="/hasil-giling", tags=["Produksi - Hasil giling"])


@hasil_giling_router.get("", response_model=list[HasilGilingResponse])
def list_hasil_giling(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    hasil_per_produk = dict(
        db.query(PenerimaanBahanBaku.produk_id, func.sum(Penggilingan.berat_hasil_kg))
        .join(Penggilingan, Penggilingan.penerimaan_id == PenerimaanBahanBaku.id)
        .group_by(PenerimaanBahanBaku.produk_id)
        .all()
    )
    if not hasil_per_produk:
        return []

    kemas_per_produk = dict(
        db.query(ProdukVarian.produk_id, func.sum(Pengemasan.jumlah_pcs * ProdukVarian.berat))
        .join(Pengemasan, Pengemasan.produk_varian_id == ProdukVarian.id)
        .filter(ProdukVarian.produk_id.in_(hasil_per_produk.keys()))
        .group_by(ProdukVarian.produk_id)
        .all()
    )

    nama_produk = dict(
        db.query(Produk.id, Produk.nama).filter(Produk.id.in_(hasil_per_produk.keys())).all()
    )

    return [
        HasilGilingResponse(
            produk_id=pid,
            nama_produk=nama_produk[pid],
            total_digiling_kg=total,
            sudah_dikemas_kg=kemas_per_produk.get(pid, 0.0),
            sisa_kg=total - kemas_per_produk.get(pid, 0.0),
        )
        for pid, total in hasil_per_produk.items()
    ]


pengemasan_router = APIRouter(prefix="/pengemasan", tags=["Produksi - Pengemasan"])


@pengemasan_router.get("", response_model=list[PengemasanResponse])
def list_pengemasan(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(Pengemasan).order_by(Pengemasan.tanggal.desc()).all()


@pengemasan_router.post("", response_model=PengemasanResponse)
def create_pengemasan(
    data: PengemasanCreate,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user),
):
    varian = db.query(ProdukVarian).filter(ProdukVarian.id == data.produk_varian_id).first()
    if not varian:
        raise HTTPException(status_code=404, detail="Varian produk tidak ditemukan")

    berat_dibutuhkan = data.jumlah_pcs * varian.berat
    sisa = get_sisa_hasil_giling(db, varian.produk_id)
    if berat_dibutuhkan > sisa + TOLERANSI:
        raise HTTPException(
            status_code=400,
            detail=(
                f"Butuh {berat_dibutuhkan} kg, tapi hasil giling produk ini yang belum "
                f"dikemas cuma {sisa} kg"
            ),
        )

    kemasan = Pengemasan(produk_varian_id=data.produk_varian_id, jumlah_pcs=data.jumlah_pcs)
    varian.stok += data.jumlah_pcs
    db.add(kemasan)
    db.commit()
    db.refresh(kemasan)
    return kemasan