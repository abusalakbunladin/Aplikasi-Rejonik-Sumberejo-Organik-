from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class KategoriCreate(BaseModel):
    nama: str

class KategoriResponse(BaseModel):
    id: int
    nama: str
    class Config:
        from_attributes = True


class ProdukCreate(BaseModel):
    nama: str
    harga: int
    stok: int = 0
    kategori_id: Optional[int] = None

class ProdukResponse(BaseModel):
    id: int
    nama: str
    harga: int
    stok: int
    kategori_id: Optional[int]
    class Config:
        from_attributes = True


class PemasokCreate(BaseModel):
    nama: str
    kontak: str

class PemasokResponse(BaseModel):
    id: int
    nama: str
    kontak: str
    class Config:
        from_attributes = True


class PasokanCreate(BaseModel):
    produk_id: int
    pemasok_id: int
    jumlah: int

class PasokanResponse(BaseModel):
    id: int
    produk_id: int
    pemasok_id: int
    jumlah: int
    tanggal: datetime
    class Config:
        from_attributes = True


class OrderItemCreate(BaseModel):
    produk_id: int
    jumlah: int

class OrderItemResponse(BaseModel):
    id: int
    produk_id: int
    jumlah: int
    harga_saat_itu: int
    class Config:
        from_attributes = True

class OrderCreate(BaseModel):
    nama_pembeli: str
    items: list[OrderItemCreate]

class OrderResponse(BaseModel):
    id: int
    nama_pembeli: str
    tanggal: datetime
    total: int
    items: list[OrderItemResponse]
    class Config:
        from_attributes = True


class LaporanPenjualanItem(BaseModel):
    produk_id: int
    nama_produk: str
    total_terjual: int
    total_pendapatan: int
    class Config:
        from_attributes = True

class LaporanStokRendah(BaseModel):
    id: int
    nama: str
    stok: int
    class Config:
        from_attributes = True
