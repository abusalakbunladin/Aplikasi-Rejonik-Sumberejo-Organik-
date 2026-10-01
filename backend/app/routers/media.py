from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.deps import get_db, get_current_user
from app.models import Media, Produk, KontenSitus
from app.schemas import MediaResponse
from app.storage import simpan_gambar, hapus_file

router = APIRouter(prefix="/media", tags=["Media"])

def pastikan_media_ada(db: Session, media_id: int | None):
    if media_id is not None and not db.query(Media.id).filter(Media.id == media_id).first():
        raise HTTPException(status_code=404, detail=f"Media id {media_id} tidak ditemukan")

@router.get("", response_model=list[MediaResponse])
def list_media(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(Media).order_by(Media.tanggal.desc()).all()

@router.post("", response_model=MediaResponse)
def upload_media(
    file: UploadFile = File(...),
    alt_text: str | None = Form(None),
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user),
):
    alt_text = (alt_text or "").strip() or None
    if alt_text and len(alt_text) > 255:
        raise HTTPException(status_code=422, detail="alt_text maksimal 255 karakter")

    nama_file, mime, ukuran = simpan_gambar(file)
    try:
        media = Media(
            nama_file=nama_file,
            nama_asli=file.filename[:255] if file.filename else None,
            mime=mime,
            ukuran_byte=ukuran,
            alt_text=alt_text,
        )
        db.add(media)
        db.commit()
    except Exception:
        db.rollback()
        hapus_file(nama_file)
        raise
    db.refresh(media)
    return media


@router.delete("/{media_id}")
def delete_media(media_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    media = db.query(Media).filter(Media.id == media_id).first()
    if not media:
        raise HTTPException(status_code=404, detail="Media tidak ditemukan")

    jumlah_produk = db.query(Produk).filter(Produk.gambar_id == media_id).count()
    if jumlah_produk > 0:
        raise HTTPException(status_code=400, detail=f"Gambar ini masih dipakai oleh {jumlah_produk} produk, ganti gambar produknya dulu")

    jumlah_konten = db.query(KontenSitus).filter(KontenSitus.gambar_id == media_id).count()
    if jumlah_konten > 0:
        raise HTTPException(status_code=400, detail=f"Gambar ini masih dipakai oleh {jumlah_konten} konten situs, ganti atau hapus kontennya dulu")

    nama_file = media.nama_file
    db.delete(media)
    db.commit()
    hapus_file(nama_file)
    return {"pesan": "Gambar berhasil dihapus"}

