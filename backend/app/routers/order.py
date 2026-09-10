from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload

from app.deps import get_db, get_current_user
from app.models import ProdukVarian, Order, OrderItem
from app.schemas import OrderCreate, OrderKonfirmasiUpdate, OrderResponse

router = APIRouter(prefix="/order", tags=["Order"])


@router.get("", response_model=list[OrderResponse])
def list_orders(db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    return db.query(Order).options(joinedload(Order.items)).order_by(Order.tanggal.desc()).all()


@router.post("", response_model=OrderResponse)
def create_order(data: OrderCreate, db: Session = Depends(get_db)):
    order = Order(
        nama_pembeli=data.nama_pembeli,
        no_telepon=data.no_telepon,
        provinsi=data.provinsi,
        kota=data.kota,
        kecamatan=data.kecamatan,
        kode_pos=data.kode_pos,
        nama_jalan=data.nama_jalan,
        detail_lainnya=data.detail_lainnya,
        total=0,
    )
    db.add(order)
    db.flush()

    total = 0
    for item in data.items:
        varian = db.query(ProdukVarian).filter(ProdukVarian.id == item.produk_varian_id).first()
        if not varian:
            raise HTTPException(status_code=404, detail=f"Varian produk id {item.produk_varian_id} tidak ditemukan")
        if varian.stok < item.jumlah:
            raise HTTPException(status_code=400, detail=f"Stok {varian.produk.nama} ({varian.berat}kg) tidak cukup (sisa {varian.stok})")
        varian.stok -= item.jumlah
        total += varian.harga * item.jumlah
        db.add(OrderItem(order_id=order.id, produk_varian_id=varian.id, jumlah=item.jumlah, harga_saat_itu=varian.harga))

    order.total = total
    db.commit()
    db.refresh(order)
    return order


@router.patch("/{order_id}/konfirmasi", response_model=OrderResponse)
def konfirmasi_order(
    order_id: int,
    data: OrderKonfirmasiUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    order = db.query(Order).options(joinedload(Order.items)).filter(Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Pesanan tidak ditemukan")

    order.status_konfirmasi = data.status_konfirmasi
    order.ongkir = data.ongkir
    db.commit()
    db.refresh(order)
    return order
