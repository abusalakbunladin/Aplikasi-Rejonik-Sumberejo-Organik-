from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field, field_validator


class KategoriCreate(BaseModel):
    nama: str = Field(..., min_length=1, description="Nama kategori tidak boleh kosong")

    @field_validator("nama")
    @classmethod
    def nama_tidak_boleh_kosong(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Nama kategori tidak boleh kosong atau hanya berisi spasi")
        return v

class KategoriResponse(BaseModel):
    id: int
    nama: str
    class Config:
        from_attributes = True


class ProdukCreate(BaseModel):
    nama: str = Field(..., min_length=1, description="Nama produk tidak boleh kosong")
    harga: int = Field(..., gt=0, description="Harga harus lebih dari 0")
    stok: int = Field(0, ge=0, description="Stok tidak boleh negatif")
    kategori_id: Optional[int] = None

    @field_validator("nama")
    @classmethod
    def nama_tidak_boleh_kosong(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Nama produk tidak boleh kosong atau hanya berisi spasi")
        return v

class ProdukResponse(BaseModel):
    id: int
    nama: str
    harga: int
    stok: int
    kategori_id: Optional[int]
    class Config:
        from_attributes = True


class PemasokCreate(BaseModel):
    nama: str = Field(..., min_length=1, description="Nama pemasok tidak boleh kosong")
    kontak: str = Field(..., min_length=1, description="Kontak tidak boleh kosong")

    @field_validator("nama")
    @classmethod
    def nama_tidak_boleh_kosong(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Nama pemasok tidak boleh kosong atau hanya berisi spasi")
        return v

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
    nama_pembeli: str = Field(..., min_length=1, description="Nama pembeli tidak boleh kosong")
    items: list[OrderItemCreate] = Field(..., min_length=1, description="Order harus punya minimal 1 item")

    @field_validator("nama_pembeli")
    @classmethod
    def nama_pembeli_tidak_boleh_kosong(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Nama pembeli tidak boleh kosong atau hanya berisi spasi")
        return v

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
    alasan: str = Field(..., min_length=1, description="Contoh: rusak, expired, hilang, lainnya")
    keterangan: Optional[str] = None

    @field_validator("alasan")
    @classmethod
    def alasan_tidak_boleh_kosong(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Alasan tidak boleh kosong atau hanya berisi spasi")
        return v

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