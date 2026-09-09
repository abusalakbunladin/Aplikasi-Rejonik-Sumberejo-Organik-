from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload

from app.deps import get_db, get_current_user
from app.models import ProdukVarian, Order, OrderItem
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
        varian = db.query(ProdukVarian).filter(ProdukVarian.id == item.produk_varian_id).first()
        if not varian:
            raise HTTPException(status_code=404, detail=f"Varian produk id {item.produk_varian_id} tidak ditemukan")
        if varian.stok < item.jumlah:
            raise HTTPException(status_code=400, detail=f"Stok {varian.produk.nama} ({varian.berat}kg) tidak cukup (sisa {varian.stok})")
        varian.stok -= item.jumlah
        total += varian.harga * item.jumlah
        db.add(OrderItem(order_id=order.id, produk_varian_id=varian.id, jumlah=item.jumlah, harga_saat_itu=varian.harga))

    if data.uang_dibayar is not None and data.uang_dibayar < total:
        raise HTTPException(
            status_code=400,
            detail=f"Uang yang dibayarkan kurang. Total belanja Rp{total}, dibayar Rp{data.uang_dibayar}, kurang Rp{total - data.uang_dibayar}"
        )

    order.total = total
    order.uang_dibayar = data.uang_dibayar
    db.commit()
    db.refresh(order)
    return order