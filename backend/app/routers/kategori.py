from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Kategori, Produk
from app.schemas import KategoriCreate, KategoriResponse

router = APIRouter(prefix="/kategori", tags=["katalog - Kategori"])

@router.get("", response_model=list[KategoriResponse])
def list_kategori(db: Session = Depends(get_db)):
    return db.query(Kategori).all()

@router.post("", response_model=KategoriResponse)
def create_kategori(data: KategoriCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    sudah_ada = db.query(Kategori).filter(Kategori.nama == data.nama).first()
    if sudah_ada:
        raise HTTPException(status_code=400, detail=f"Kategori '{data.nama}' sudah ada")
    kategori = Kategori(**data.model_dump())
    db.add(kategori)
    db.commit()
    db.refresh(kategori)
    return kategori

@router.delete("/{kategori_id}")
def delete_kategori(kategori_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    kategori = db.query(Kategori).filter(Kategori.id == kategori_id).first()
    if not kategori:
        raise HTTPException(status_code=404, detail="Kategori tidak ditemukan")

    jumlah_produk = db.query(Produk).filter(Produk.kategori_id == kategori_id).count()
    if jumlah_produk > 0:
        raise HTTPException(
            status_code=400,
            detail=f"Kategori masih dipakai oleh {jumlah_produk} produk, pindahkan atau hapus produknya dulu",
        )

    db.delete(kategori)
    db.commit()
    return {"pesan": "Kategori berhasil dihapus"}