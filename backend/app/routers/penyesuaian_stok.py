from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Produk, PenyesuaianStok
from app.schemas import PenyesuaianStokCreate, PenyesuaianStokResponse

router = APIRouter(prefix="/penyesuaian-stok", tags=["Penyesuaian Stok"])

@router.get("", response_model=list[PenyesuaianStokResponse])
def list_penyesuaian(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(PenyesuaianStok).order_by(PenyesuaianStok.tanggal.desc()).all()

@router.post("", response_model=PenyesuaianStokResponse)
def create_penyesuaian(data: PenyesuaianStokCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    produk = db.query(Produk).filter(Produk.id == data.produk_id).first()
    if not produk:
        raise HTTPException(status_code=404, detail="Produk tidak ditemukan")
    if produk.stok < data.jumlah:
        raise HTTPException(status_code=400, detail=f"Stok {produk.nama} tidak cukup untuk dikurangi (sisa {produk.stok})")

    produk.stok -= data.jumlah
    penyesuaian = PenyesuaianStok(**data.model_dump())
    db.add(penyesuaian)
    db.commit()
    db.refresh(penyesuaian)
    return penyesuaian