from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Produk
from app.schemas import ProdukCreate, ProdukResponse

router = APIRouter(prefix="/produk", tags=["Katalog - Produk"])

@router.get("", response_model=list[ProdukResponse])
def list_produk(kategori_id: int | None = None, db: Session = Depends(get_db)):
    query = db.query(Produk)
    if kategori_id:
        query = query.filter(Produk.kategori_id == kategori_id)
    return query.all()

@router.get("/{produk_id}", response_model=ProdukResponse)
def get_produk(produk_id: int, db: Session = Depends(get_db)):
    produk = db.query(Produk).filter(Produk.id == produk_id).first()
    if not produk:
        raise HTTPException(status_code=404, detail="Produk tidak ditemukan")
    return produk

@router.post("", response_model=ProdukResponse)
def create_produk(data: ProdukCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    produk = Produk(**data.model_dump())
    db.add(produk)
    db.commit()
    db.refresh(produk)
    return produk

@router.put("/{produk_id}", response_model=ProdukResponse)
def update_produk(produk_id: int, data: ProdukCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    produk = db.query(Produk).filter(Produk.id == produk_id).first()
    if not produk:
        raise HTTPException(status_code=404, detail="Produk tidak ditemukan")
    for field, value in data.model_dump().items():
        setattr(produk, field, value)
    db.commit()
    db.refresh(produk)
    return produk

@router.delete("/{produk_id}")
def delete_produk(produk_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    produk = db.query(Produk).filter(Produk.id == produk_id).first()
    if not produk:
        raise HTTPException(status_code=404, detail="Produk tidak ditemukan")
    db.delete(produk)
    db.commit()
    return {"pesan": "Produk berhasil dihapus"}
