import os
from urllib.parse import quote

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload

from app.deps import get_db, get_current_user
from app.models import ProdukVarian, Order, OrderItem
from app.schemas import OrderCreate, OrderCreateResponse, OrderKonfirmasiUpdate, OrderResponse

router = APIRouter(prefix="/order", tags=["Order"])

ADMIN_WA_NUMBER = os.getenv("ADMIN_WA_NUMBER", "")


def _format_rupiah(angka: int) -> str:
    return f"Rp{angka:,.0f}".replace(",", ".")


def _buat_pesan_wa(order: Order, daftar_item_pesan: list[str]) -> str:
    alamat = ", ".join(
        bagian for bagian in [
            order.nama_jalan,
            order.detail_lainnya,
            order.kecamatan,
            order.kota,
            order.provinsi,
            order.kode_pos,
        ] if bagian
    )

    return (
        "Halo Admin Rejonik, saya mau konfirmasi pesanan berikut:\n\n"
        f"Order ID: #{order.id}\n"
        f"Nama: {order.nama_pembeli}\n"
        f"No. HP: {order.no_telepon}\n\n"
        f"Alamat: {alamat}\n\n"
        "Pesanan:\n" + "\n".join(daftar_item_pesan) + "\n\n"
        f"Total: {_format_rupiah(order.total)}\n\n"
        "Mohon dikonfirmasi ya, terima kasih."
    )


@router.get("", response_model=list[OrderResponse])
def list_orders(db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    return db.query(Order).options(joinedload(Order.items)).order_by(Order.tanggal.desc()).all()


@router.post("", response_model=OrderCreateResponse)
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
    daftar_item_pesan = []
    for item in data.items:
        varian = db.query(ProdukVarian).filter(ProdukVarian.id == item.produk_varian_id).first()
        if not varian:
            raise HTTPException(status_code=404, detail=f"Varian produk id {item.produk_varian_id} tidak ditemukan")
        if varian.stok < item.jumlah:
            raise HTTPException(status_code=400, detail=f"Stok {varian.produk.nama} ({varian.berat}kg) tidak cukup (sisa {varian.stok})")
        varian.stok -= item.jumlah
        subtotal = varian.harga * item.jumlah
        total += subtotal
        db.add(OrderItem(order_id=order.id, produk_varian_id=varian.id, jumlah=item.jumlah, harga_saat_itu=varian.harga))

        daftar_item_pesan.append(f"- {varian.produk.nama} ({varian.berat}kg) x{item.jumlah} = {_format_rupiah(subtotal)}")

    order.total = total
    db.commit()
    db.refresh(order)

    pesan = _buat_pesan_wa(order, daftar_item_pesan)
    order.wa_link = f"https://wa.me/{ADMIN_WA_NUMBER}?text={quote(pesan)}"

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

    if order.status_konfirmasi != "menunggu":
        raise HTTPException(
            status_code=400,
            detail=f"Pesanan ini sudah berstatus '{order.status_konfirmasi}', tidak bisa dikonfirmasi/ditolak ulang",
        )

    if data.status_konfirmasi == "ditolak":
        for item in order.items:
            varian = db.query(ProdukVarian).filter(ProdukVarian.id == item.produk_varian_id).first()
            if varian:
                varian.stok += item.jumlah

    order.status_konfirmasi = data.status_konfirmasi
    order.ongkir = data.ongkir
    db.commit()
    db.refresh(order)
    return order