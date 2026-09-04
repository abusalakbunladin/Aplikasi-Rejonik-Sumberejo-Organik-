from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Pemasok
from app.schemas import PemasokCreate, PemasokResponse

router = APIRouter(prefix="/pemasok", tags=["Katalog - Pemasok"])

@router.get("", response_model=list[PemasokResponse])
def list_pemasok(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(Pemasok).all()

@router.post("", response_model=PemasokResponse)
def create_pemasok(data: PemasokCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    pemasok = Pemasok(**data.model_dump())
    db.add(pemasok)
    db.commit()
    db.refresh(pemasok)
    return pemasok