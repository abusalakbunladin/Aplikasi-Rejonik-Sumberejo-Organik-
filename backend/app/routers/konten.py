from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, selectinload

from app.deps import get_db, get_current_user
from app.models import KontenSitus
from app.routers.media import pastikan_media_ada
from app.schemas import HalamanSitus, KontenCreate, KontenResponse

router = APIRouter(prefix="/konten", tags=["Konten Situs"])


def _query_urut(db: Session):
    return (
        db.query(KontenSitus)
        .options(selectinload(KontenSitus.gambar))
        .order_by(KontenSitus.halaman, KontenSitus.bagian, KontenSitus.urutan, KontenSitus.id)
    )


@router.get("", response_model=list[KontenResponse])
def list_konten(halaman: HalamanSitus | None = None, bagian: str | None = None, db: Session = Depends(get_db)):
    """Publik. Hanya konten yang aktif."""
    query = _query_urut(db).filter(KontenSitus.aktif.is_(True))
    if halaman is not None:
        query = query.filter(KontenSitus.halaman == halaman)
    if bagian is not None:
        query = query.filter(KontenSitus.bagian == bagian)
    return query.all()


@router.get("/semua", response_model=list[KontenResponse])
def list_semua_konten(
    halaman: HalamanSitus | None = None,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user),
):
    """Admin. Termasuk konten yang dinonaktifkan."""
    query = _query_urut(db)
    if halaman is not None:
        query = query.filter(KontenSitus.halaman == halaman)
    return query.all()


@router.post("", response_model=KontenResponse)
def create_konten(data: KontenCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    pastikan_media_ada(db, data.gambar_id)
    konten = KontenSitus(**data.model_dump())
    db.add(konten)
    db.commit()
    db.refresh(konten)
    return konten


@router.put("/{konten_id}", response_model=KontenResponse)
def update_konten(konten_id: int, data: KontenCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    konten = db.query(KontenSitus).filter(KontenSitus.id == konten_id).first()
    if not konten:
        raise HTTPException(status_code=404, detail="Konten tidak ditemukan")
    pastikan_media_ada(db, data.gambar_id)
    for field, value in data.model_dump().items():
        setattr(konten, field, value)
    db.commit()
    db.refresh(konten)
    return konten


@router.delete("/{konten_id}")
def delete_konten(konten_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    konten = db.query(KontenSitus).filter(KontenSitus.id == konten_id).first()
    if not konten:
        raise HTTPException(status_code=404, detail="Konten tidak ditemukan")
    db.delete(konten)
    db.commit()
    return {"pesan": "Konten berhasil dihapus"}