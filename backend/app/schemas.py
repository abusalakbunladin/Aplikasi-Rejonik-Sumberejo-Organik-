import re
from datetime import datetime
from typing import Literal, Optional
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


class ProdukVarianCreate(BaseModel):
    produk_id: int
    berat: float = Field(..., gt=0, description="Berat dalam kg, misal 1.0, 2.5, 5.0")
    harga: int = Field(..., gt=0, description="Harga harus lebih dari 0")
    stok: int = Field(0, ge=0, description="Stok tidak boleh negatif")

class ProdukVarianResponse(BaseModel):
    id: int
    produk_id: int
    berat: float
    harga: int
    stok: int
    class Config:
        from_attributes = True


class ProdukCreate(BaseModel):
    nama: str = Field(..., min_length=1, description="Nama produk tidak boleh kosong")
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
    kategori_id: Optional[int]
    varian: list[ProdukVarianResponse] = []
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


class PenerimaanCreate(BaseModel):
    pemasok_id: int
    produk_id: int = Field(..., description="Produk jadi yang akan dihasilkan dari bahan baku ini")
    berat_kg: float = Field(..., gt=0, description="Berat bahan baku yang diterima, dalam kg")
    harga_per_kg: Optional[int] = Field(None, ge=0, description="Harga beli per kg, opsional")
    catatan: Optional[str] = None

class PenerimaanMutuUpdate(BaseModel):
    status_mutu: Literal["lolos", "retur"]
    catatan: Optional[str] = None

class PenerimaanResponse(BaseModel):
    id: int
    pemasok_id: int
    produk_id: int
    berat_kg: float
    harga_per_kg: Optional[int]
    status_mutu: str
    catatan: Optional[str]
    tanggal: datetime
    berat_sudah_digiling: float
    berat_sisa_kg: float
    class Config:
        from_attributes = True


class PenggilinganCreate(BaseModel):
    penerimaan_id: int
    berat_masuk_kg: float = Field(..., gt=0, description="Berat bahan baku yang digiling, dalam kg")
    berat_hasil_kg: float = Field(..., gt=0, description="Berat hasil giling, dalam kg")

class PenggilinganResponse(BaseModel):
    id: int
    penerimaan_id: int
    berat_masuk_kg: float
    berat_hasil_kg: float
    tanggal: datetime
    susut_kg: float
    rendemen: float
    class Config:
        from_attributes = True


class PengemasanCreate(BaseModel):
    produk_varian_id: int
    jumlah_pcs: int = Field(..., gt=0, description="Jumlah kemasan yang dihasilkan")

class PengemasanResponse(BaseModel):
    id: int
    produk_varian_id: int
    jumlah_pcs: int
    tanggal: datetime
    berat_terpakai_kg: float
    class Config:
        from_attributes = True


class HasilGilingResponse(BaseModel):
    produk_id: int
    nama_produk: str
    total_digiling_kg: float
    sudah_dikemas_kg: float
    sisa_kg: float


class OrderItemCreate(BaseModel):
    produk_varian_id: int
    jumlah: int = Field(..., gt=0, description="Jumlah order harus lebih dari 0")

class OrderItemResponse(BaseModel):
    id: int
    produk_varian_id: int
    jumlah: int
    harga_saat_itu: int
    class Config:
        from_attributes = True

class OrderCreate(BaseModel):
    nama_pembeli: str = Field(..., min_length=1, description="Nama pembeli tidak boleh kosong")
    no_telepon: str = Field(..., min_length=1, description="Nomor telepon tidak boleh kosong")

    provinsi: str = Field(..., min_length=1)
    kota: str = Field(..., min_length=1)
    kecamatan: str = Field(..., min_length=1)
    kode_pos: str = Field(..., min_length=1)
    nama_jalan: str = Field(..., min_length=1)
    detail_lainnya: Optional[str] = Field(None, description="Opsional, misal patokan/blok/no rumah")

    items: list[OrderItemCreate] = Field(..., min_length=1, description="Order harus punya minimal 1 item")

    @field_validator("nama_pembeli", "no_telepon", "provinsi", "kota", "kecamatan", "kode_pos", "nama_jalan")
    @classmethod
    def tidak_boleh_kosong(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Field ini tidak boleh kosong atau hanya berisi spasi")
        return v

    @field_validator("no_telepon")
    @classmethod
    def no_telepon_harus_nomor_indonesia(cls, v: str) -> str:
        v = v.replace(" ", "").replace("-", "")
        if not re.fullmatch(r"(\+62|62|0)8[1-9][0-9]{6,10}", v):
            raise ValueError("Nomor HP/WA harus nomor Indonesia yang valid, contoh: 081234567890 atau +6281234567890")
        return v

class OrderKonfirmasiUpdate(BaseModel):
    status_konfirmasi: Literal["dikonfirmasi", "ditolak"]
    ongkir: int = Field(0, ge=0, description="Ongkos kirim, isi 0 kalau pembeli ambil sendiri")

class OrderResponse(BaseModel):
    id: int
    nama_pembeli: str
    no_telepon: Optional[str]
    provinsi: Optional[str]
    kota: Optional[str]
    kecamatan: Optional[str]
    kode_pos: Optional[str]
    nama_jalan: Optional[str]
    detail_lainnya: Optional[str]
    tanggal: datetime
    total: int
    status_konfirmasi: str
    ongkir: int
    items: list[OrderItemResponse]
    class Config:
        from_attributes = True

class OrderCreateResponse(OrderResponse):
    wa_link: str

class PenyesuaianStokCreate(BaseModel):
    produk_varian_id: int
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
    produk_varian_id: int
    jumlah: int
    alasan: str
    keterangan: Optional[str]
    tanggal: datetime
    class Config:
        from_attributes = True


class LaporanPenjualanItem(BaseModel):
    produk_varian_id: int
    nama_produk: str
    berat: float
    total_terjual: int
    total_pendapatan: int
    class Config:
        from_attributes = True

class LaporanStokRendah(BaseModel):
    id: int
    nama: str
    berat: float
    stok: int
    status: Literal["habis", "rendah"]
    class Config:
        from_attributes = True