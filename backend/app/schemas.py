from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field


class KategoriCreate(BaseModel):
    nama: str

class KategoriResponse(BaseModel):
    id: int
    nama: str
    class Config:
        from_attributes = True


class ProdukCreate(BaseModel):
    nama: str
    harga: int = Field(..., gt=0, description="Harga harus lebih dari 0")
    stok: int = Field(0, ge=0, description="Stok tidak boleh negatif")
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
    jumlah: int = Field(..., gt=0, description="Jumlah pasokan harus lebih dari 0")

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
    jumlah: int = Field(..., gt=0, description="Jumlah order harus lebih dari 0")

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


class PenyesuaianStokCreate(BaseModel):
    produk_id: int
    jumlah: int = Field(..., gt=0, description="Jumlah barang yang dikurangi dari stok")
    alasan: str = Field(..., description="Contoh: rusak, expired, hilang, lainnya")
    keterangan: Optional[str] = None

class PenyesuaianStokResponse(BaseModel):
    id: int
    produk_id: int
    jumlah: int
    alasan: str
    keterangan: Optional[str]
    tanggal: datetime
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