import json
import logging
import os
import urllib.parse
import urllib.request

from fastapi import Header, HTTPException, Request

logger = logging.getLogger(__name__)

URL_VERIFIKASI = "https://challenges.cloudflare.com/turnstile/v0/siteverify"


def _captcha_aktif() -> bool:
    return os.getenv("CAPTCHA_AKTIF", "false").lower() == "true"

if _captcha_aktif() and not os.getenv("TURNSTILE_SECRET_KEY"):
    raise RuntimeError(
        "CAPTCHA_AKTIF=true tapi TURNSTILE_SECRET_KEY belum di-set di file .env "
        "(ambil dari dashboard Cloudflare Turnstile, bagian Secret Key)."
    )


def _tanya_cloudflare(token: str, ip: str | None) -> dict:
    data = {"secret": os.getenv("TURNSTILE_SECRET_KEY", ""), "response": token}
    if ip:
        data["remoteip"] = ip
    permintaan = urllib.request.Request(
        URL_VERIFIKASI,
        data=urllib.parse.urlencode(data).encode(),
        method="POST",
    )
    with urllib.request.urlopen(permintaan, timeout=5) as jawaban:
        return json.loads(jawaban.read().decode())


def wajib_captcha(request: Request, x_captcha_token: str | None = Header(default=None)):
    if not _captcha_aktif():
        return

    if not x_captcha_token:
        raise HTTPException(status_code=400, detail="Verifikasi CAPTCHA diperlukan")

    ip = request.client.host if request.client else None
    try:
        hasil = _tanya_cloudflare(x_captcha_token, ip)
    except Exception:
        logger.exception("Gagal menghubungi layanan verifikasi CAPTCHA")
        raise HTTPException(
            status_code=503,
            detail="Layanan verifikasi CAPTCHA sedang bermasalah, coba lagi sebentar",
        )

    if not hasil.get("success"):
        logger.info("CAPTCHA ditolak: %s", hasil.get("error-codes"))
        raise HTTPException(status_code=400, detail="Verifikasi CAPTCHA gagal, silakan coba lagi")