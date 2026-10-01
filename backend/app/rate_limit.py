import os
import threading
import time
from collections import defaultdict, deque

from fastapi import HTTPException, Request

class BatasPermintaan:
    def __init__(self, maks: int, detik: int):
        self.maks = maks
        self.detik = detik
        self._catatan: dict[str, deque] = defaultdict(deque)
        self._kunci = threading.Lock()

    def __call__(self, request: Request):
        if os.getenv("RATE_LIMIT_AKTIF", "true").lower() != "true":
            return

        ip = request.client.host if request.client else "tidak-diketahui"
        sekarang = time.monotonic()

        with self._kunci:
            riwayat = self._catatan[ip]
            while riwayat and sekarang - riwayat[0] > self.detik:
                riwayat.popleft()

            if len(riwayat) >= self.maks:
                tunggu = int(self.detik - (sekarang - riwayat[0])) + 1
                raise HTTPException(
                    status_code=429,
                    detail=f"Terlalu banyak permintaan. Coba lagi dalam {tunggu} detik.",
                    headers={"Retry-After": str(tunggu)},
                )
            riwayat.append(sekarang)

            if len(self._catatan) > 5000:
                for kunci in [k for k, v in self._catatan.items() if not v or sekarang - v[-1] > self.detik]:
                    del self._catatan[kunci]

def _angka_env(nama: str, bawaan: int) -> int:
    try:
        return int(os.getenv(nama, bawaan))
    except ValueError:
        return bawaan

batasi_order = BatasPermintaan(maks=_angka_env("RATE_LIMIT_ORDER_MAKS", 10), detik=60)
batasi_login = BatasPermintaan(maks=_angka_env("RATE_LIMIT_LOGIN_MAKS", 10), detik=60)         