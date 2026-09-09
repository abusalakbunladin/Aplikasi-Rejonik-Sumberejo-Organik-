from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Produk, ProdukVarian
from app.schemas import ProdukVarianCreate, ProdukVarianResponse

router = APIRouter(prefix="/produk-varian", tags=["Katalog - Varian Produk"])

@router.get("", response_model=list[ProdukVarianResponse])
def list_varian(produk_id: int | None = None, db: Session = Depends(get_db)):
    query = db.query(ProdukVarian)
    if produk_id:
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
    db.delete(varian)
    db.commit()
    return {"pesan": "Varian berhasil dihapus"}