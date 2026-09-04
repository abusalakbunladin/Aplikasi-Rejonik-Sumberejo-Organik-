from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Produk, Pasokan
from app.schemas import PasokanCreate, PasokanResponse

router = APIRouter(prefix="/pasokan", tags=["Katalog - Pasokan"])

@router.get("", response_model=list[PasokanResponse])
def list_pasokan(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(Pasokan).all()

@router.post("", response_model=PasokanResponse)
def create_pasokan(data: PasokanCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    produk = db.query(Produk).filter(Produk.id == data.produk_id).first()
    if not produk:
        raise HTTPException(status_code=404, detail="Produk tidak ditemukan")
    pasokan = Pasokan(**data.model_dump)
    produk.stok += data.jumlah
    db.add(pasokan)
    db.commit()
    db.refresh(pasokan)
    return pasokan