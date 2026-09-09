from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import ProdukVarian, PenyesuaianStok
from app.schemas import PenyesuaianStokCreate, PenyesuaianStokResponse

router = APIRouter(prefix="/penyesuaian-stok", tags=["Penyesuaian Stok"])

@router.get("", response_model=list[PenyesuaianStokResponse])
def list_penyesuaian(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(PenyesuaianStok).order_by(PenyesuaianStok.tanggal.desc()).all()

@router.post("", response_model=PenyesuaianStokResponse)
def create_penyesuaian(data: PenyesuaianStokCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    varian = db.query(ProdukVarian).filter(ProdukVarian.id == data.produk_varian_id).first()
    if not varian:
        raise HTTPException(status_code=404, detail="Varian produk tidak ditemukan")
    if varian.stok < data.jumlah:
        raise HTTPException(status_code=400, detail=f"Stok tidak cukup untuk dikurangi (sisa {varian.stok})")

    varian.stok -= data.jumlah
    penyesuaian = PenyesuaianStok(**data.model_dump())
    db.add(penyesuaian)
    db.commit()
    db.refresh(penyesuaian)
    return penyesuaian