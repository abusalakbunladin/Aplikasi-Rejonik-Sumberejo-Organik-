from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload

from app.deps import get_db, get_current_user
from app.models import Produk, Order, OrderItem
from app.schemas import OrderCreate, OrderResponse

router = APIRouter(prefix="/order", tags=["Order"])

@router.get("", response_model=list[OrderResponse])
def list_orders(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return db.query(Order).options(joinedload(Order.items)).order_by(Order.tanggal.desc()).all()

@router.post("", response_model=OrderResponse)
def create_order(data: OrderCreate, db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    order = Order(nama_pembeli=data.nama_pembeli, total=0)
    db.add(order)
    db.flush()

    total = 0
    for item in data.items:
        produk = db.query(Produk).filter(Produk.id == item.produk_id).first()
        if not produk:
            raise HTTPException(status_code=404, detail=f"Produk id {item.produk_id} tidak ditemukan")
        if produk.stok < item.jumlah:
            raise HTTPException(status_code=400, detail=f"Stok {produk.nama} tidak cukup (sisa {produk.stok})")
        produk.stok -= item.jumlah
        total += produk.harga * item.jumlah
        db.add(OrderItem(order_id=order.id, produk_id=produk.id,
                          jumlah=item.jumlah, harga_saat_itu=produk.harga))

    order.total = total
    db.commit()
    db.refresh(order)
    return order
