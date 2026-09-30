import math

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Produk, ProdukVarian, OrderItem, Pengemasan, PenyesuaianStok
from app.schemas import ProdukVarianCreate, ProdukVarianResponse

router = APIRouter(prefix="/produk-varian", tags=["Katalog - Varian Produk"])

def _cek_varian_kembar(db: Session, produk_id: int, berat: float, kecuali_id: int | None = None):
    for lain in db.query(ProdukVarian).filter(ProdukVarian.produk_id == produk_id).all():
        if lain.id != kecuali_id and math.isclose(lain.berat, berat, rel_tol=1e-6):
            raise HTTPException(status_code=400, detail=f"Produk ini sudah punya varian {berat} kg")
        
@router.get("", response_model=list[ProdukVarianResponse])
def list_varian(produk_id: int | None = None, db: Session = Depends(get_db)):
    query = db.query(ProdukVarian)
    if produk_id is not None:
        query = query.filter(ProdukVarian.produk_id == produk_id)
    return query.all()

@router.post("", response_model=ProdukVarianResponse)
def create_varian(data: ProdukVarianCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    produk = db.query(Produk).filter(Produk.id == data.produk_id).first()
    if not produk:
        raise HTTPException(status_code=404, detail="Produk tidak ditemukan")
    _cek_varian_kembar(db, data.produk_id, data.berat)
    varian = ProdukVarian(**data.model_dump())
    db.add(varian)
    db.commit()
    db.refresh(varian)
    return varian

@router.put("/{varian_id}", response_model=ProdukVarianResponse)
def update_varian(varian_id: int, data: ProdukVarianCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    varian = db.query(ProdukVarian).filter(ProdukVarian.id == varian_id).with_for_update().first()
    if not varian:
        raise HTTPException(status_code=404, detail="Varian tidak ditemukan")
    
    produk_berubah = data.produk_id != varian.produk_id
    berat_berubah = not math.isclose(data.berat, varian.berat, rel_tol=1e-6)

    if produk_berubah and not db.query(Produk).filter(Produk.id == data.produk_id).first():
        raise HTTPException(status_code=404, detail=f"Produk id {data.produk_id} tidak ditemukan")

    if produk_berubah or berat_berubah:
        dipakai = (
            db.query(OrderItem).filter(OrderItem.produk_varian_id == varian_id).count()
            + db.query(Pengemasan).filter(Pengemasan.produk_varian_id == varian_id).count()
        )
        if dipakai > 0:
            raise HTTPException(
                status_code=400,
                detail="Berat/produk varian tidak bisa diubah karena sudah dipakai di order atau pengemasan. "
                       "Buat varian baru dengan berat yang diinginkan.",
            )
        _cek_varian_kembar(db, data.produk_id, data.berat, kecuali_id=varian_id)
    for field, value in data.model_dump(exclude={"stok"}).items():
        setattr(varian, field, value)
    db.commit()
    db.refresh(varian)
    return varian

@router.delete("/{varian_id}")
def delete_varian(varian_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    varian = db.query(ProdukVarian).filter(ProdukVarian.id == varian_id).first()
    if not varian:
        raise HTTPException(status_code=404, detail="Varian tidak ditemukan")

    jumlah_order = db.query(OrderItem).filter(OrderItem.produk_varian_id == varian_id).count()
    if jumlah_order > 0:
        raise HTTPException(
            status_code=400,
            detail=f"Varian ini sudah dipakai di {jumlah_order} item order, tidak bisa dihapus",
        )

    jumlah_kemasan = db.query(Pengemasan).filter(Pengemasan.produk_varian_id == varian_id).count()
    if jumlah_kemasan > 0:
        raise HTTPException(
            status_code=400,
            detail=f"Varian ini sudah dipakai di {jumlah_kemasan} data pengemasan, tidak bisa dihapus",
        )

    jumlah_penyesuaian = db.query(PenyesuaianStok).filter(PenyesuaianStok.produk_varian_id == varian_id).count()
    if jumlah_penyesuaian > 0:
        raise HTTPException(
            status_code=400,
            detail=f"Varian ini sudah dipakai di {jumlah_penyesuaian} penyesuaian stok, tidak bisa dihapus",
        )

    db.delete(varian)
    db.commit()
    return {"pesan": "Varian berhasil dihapus"}