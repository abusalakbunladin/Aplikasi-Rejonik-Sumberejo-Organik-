from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Kategori
from app.schemas import KategoriCreate, KategoriResponse

router = APIRouter(prefix="/kategori", tags=["katalog - Kategori"])

@router.get("", response_model=list[KategoriResponse])
def list_kategori(db: Session = Depends(get_db)):
    return db.query(Kategori).all()

@router.post("", response_model=KategoriResponse)
def create_kategori(data: KategoriCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    kategori = Kategori(**data.model_dump())
    db.add(kategori)
    db.commit()
    db.refresh(kategori)
    return kategori

@router.delete("/{kategori_id}")
def delete_kategori(kategori_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    kategori = db.query(Kategori).filter(kategori.id == kategori_id).first()
    if not kategori:
        raise HTTPException(status_code=404, detail="Kategori tidak ditemukan")
    db.delete(kategori)
    db.commit()
    return {"pesan": "Kategori berhasil dihapus"}