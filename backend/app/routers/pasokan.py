from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import ProdukVarian, Pemasok, Pasokan
from app.schemas import PasokanCreate, PasokanResponse

router = APIRouter(prefix="/pasokan", tags=["Katalog - Pasokan"])

@router.get("", response_model=list[PasokanResponse])
def list_pasokan(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(Pasokan).all()

@router.post("", response_model=PasokanResponse)
def create_pasokan(data: PasokanCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    varian = db.query(ProdukVarian).filter(ProdukVarian.id == data.produk_varian_id).first()
    if not varian:
        raise HTTPException(status_code=404, detail="Varian produk tidak ditemukan")
    pemasok = db.query(Pemasok).filter(Pemasok.id == data.pemasok_id).first()
    if not pemasok:
        raise HTTPException(status_code=404, detail=f"Pemasok id {data.pemasok_id} tidak ditemukan")

    pasokan = Pasokan(**data.model_dump())
    varian.stok += data.jumlah
    db.add(pasokan)
    db.commit()
    db.refresh(pasokan)
    return pasokan