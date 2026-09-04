from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.deps import get_db, get_current_user
from app.models import Produk, OrderItem
from app.schemas import LaporanPenjualanItem, LaporanStokRendah

router = APIRouter(prefix="/laporan", tags=["Laporan"])

@router.get("/penjualan", response_model=list[LaporanPenjualanItem])
def laporan_penjualan(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return (
        db.query(
            Produk.id.label("produk_id"),
            Produk.nama.label("nama_produk"),
            func.sum(OrderItem.jumlah).label("total_terjual"),
            func.sum(OrderItem.jumlah * OrderItem.harga_saat_itu).label("total_pendapatan"),
        )
        .join(OrderItem, OrderItem.produk_id == Produk.id)
        .group_by(Produk.id)
        .all()
    )

@router.get("/stok-rendah", response_model=list[LaporanStokRendah])
def laporan_stok_rendah(batas: int = Query(5, description="Batas stok dianggap rendah"), db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return db.query(Produk).filter(Produk.stok <= batas).all()
