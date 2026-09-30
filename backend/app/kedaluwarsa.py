import asyncio
import logging
import os
from datetime import datetime, timedelta, UTC

from app.database import SessionLocal
from app.models import Order, ProdukVarian

logger = logging.getLogger(__name__)

INTERVAL_DETIK = 600

def _jam_kedaluwarsa() -> float:
    try:
        return float(os.getenv("ORDER_KEDALUWARSA_JAM", "24"))
    except ValueError:
        return 24.0

def batalkan_order_kedaluwarsa(jam: float | None = None) -> int:
    jam = _jam_kedaluwarsa() if jam is None else jam
    batas = (datetime.now(UTC) - timedelta(hours=jam)).replace(tzinfo=None)
    dibatalkan = 0

    with SessionLocal() as db:
        ids = [
            order_id
            for (order_id,) in db.query(Order.id)
            .filter(Order.status_konfirmasi == "menunggu", Order.tanggal < batas)
            .all()
        ]
        for order_id in ids:
            order = db.query(Order).filter(Order.id == order_id).with_for_update().first()
            if order is None or order.status_konfirmasi != "menunggu":
                db.rollback()
                continue

            for item in sorted(order.items, key=lambda i: i.produk_varian_id):
                varian = (
                    db.query(ProdukVarian)
                    .filter(ProdukVarian.id == item.produk_varian_id)
                    .with_for_update()
                    .first()
                )
                if varian:
                    varian.stok += item.jumlah

            order.status_konfirmasi = "kedaluwarsa"
            db.commit()
            dibatalkan += 1

    return dibatalkan

async def loop_kedaluwarsa():
    while True:
        try:
            jumlah = await asyncio.to_thread(batalkan_order_kedaluwarsa)
            if jumlah:
                logger.info("%s order kedaluwarsa dibatalkan, stok dikembalikan", jumlah)
        except Exception:
            logger.exception("Gagal membatalkan order kedaluwarsa")
        await asyncio.sleep(INTERVAL_DETIK)