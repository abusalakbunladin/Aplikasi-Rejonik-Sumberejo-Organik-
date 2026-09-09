from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.deps import get_db, get_current_user
from app.models import Produk, ProdukVarian, OrderItem
from app.schemas import LaporanPenjualanItem, LaporanStokRendah

router = APIRouter(prefix="/laporan", tags=["Laporan"])

@router.get("/penjualan", response_model=list[LaporanPenjualanItem])
def laporan_penjualan(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return (
        db.query(
            ProdukVarian.id.label("produk_varian_id"),
            Produk.nama.label("nama_produk"),
            ProdukVarian.berat.label("berat"),
            func.sum(OrderItem.jumlah).label("total_terjual"),
            func.sum(OrderItem.jumlah * OrderItem.harga_saat_itu).label("total_pendapatan"),
        )
        .join(OrderItem, OrderItem.produk_varian_id == ProdukVarian.id)
        .join(Produk, Produk.id == ProdukVarian.produk_id)
        .group_by(ProdukVarian.id, Produk.nama, ProdukVarian.berat)
        .all()
    )

@router.get("/stok-rendah", response_model=list[LaporanStokRendah])
def laporan_stok_rendah(batas: int = Query(5, description="Batas stok dianggap rendah"), db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return (
        db.query(
            ProdukVarian.id.label("id"),
            Produk.nama.label("nama"),
            ProdukVarian.berat.label("berat"),
            ProdukVarian.stok.label("stok"),
        )
        .join(Produk, Produk.id == ProdukVarian.produk_id)
        .filter(ProdukVarian.stok <= batas)
        .all()
    )