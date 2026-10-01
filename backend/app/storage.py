import os
import uuid
from pathlib import Path

from fastapi import HTTPException, UploadFile

UPLOAD_DIR = Path(os.getenv("UPLOAD_DIR") or "uploads").resolve()
URL_PREFIX = "/uploads"
UKURAN_CHUNK = 1024 * 1024

def _maks_mb() -> float:
    try:
        return float(os.getenv("UPLOAD_MAKS_MB", "5"))
    except ValueError:
        return 5.0

def url_media(nama_file: str) -> str:
    base = os.getenv("MEDIA_BASE_URL", "").rstrip("/")
    return f"{base}{URL_PREFIX}/{nama_file}"

def _deteksi_format(header: bytes) -> tuple[str, str] | None:
    if header.startswith(b"\x89PNG\r\n\x1a\n"):
        return "image/png", ".png"
    if header.startswith(b"\xff\xd8\xff"):
        return "image/jpeg", ".jpg"
    if header[:4] == b"RIFF" and header[8:12] == b"WEBP":
        return "image/webp", ".webp"
    return None

def simpan_gambar(upload: UploadFile) -> tuple[str, str, int]:
    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

    header = upload.file.read(12)
    jenis = _deteksi_format(header)
    if jenis is None:
        raise HTTPException(status_code=400, detail="Format file tidak didukung. Gunakan PNG, JPG, atau WebP.")
    mime, ekstensi = jenis

    maks_mb = _maks_mb()
    maks_bytes = int(maks_mb * 1024 * 1024)
    nama_file = f"{uuid.uuid4().hex}{ekstensi}"
    tujuan = UPLOAD_DIR / nama_file
    ukuran = len(header)

    try:
        with open(tujuan, "wb") as keluar:
            keluar.write(header)
            while chunk := upload.file.read(UKURAN_CHUNK):
                ukuran += len(chunk)
                if ukuran > maks_bytes:
                    raise HTTPException(status_code=413, detail=f"Ukuran file maksimal {maks_mb:g} MB")
                keluar.write(chunk)
    except Exception:
        tujuan.unlink(missing_ok=True)
        raise

    return nama_file, mime, ukuran

def hapus_file(nama_file: str) -> None:
    (UPLOAD_DIR / nama_file).unlink(missing_ok=True)