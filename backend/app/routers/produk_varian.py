from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Produk, ProdukVarian, OrderItem, Pengemasan, PenyesuaianStok
from app.schemas import ProdukVarianCreate, ProdukVarianResponse

router = APIRouter(prefix="/produk-varian", tags=["Katalog - Varian Produk"])

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
    varian = ProdukVarian(**data.model_dump())
    db.add(varian)
    db.commit()
    db.refresh(varian)
    return varian

@router.put("/{varian_id}", response_model=ProdukVarianResponse)
def update_varian(varian_id: int, data: ProdukVarianCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    varian = db.query(ProdukVarian).filter(ProdukVarian.id == varian_id).first()
    if not varian:
        raise HTTPException(status_code=404, detail="Varian tidak ditemukan")
    for field, value in data.model_dump().items():
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