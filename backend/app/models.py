from datetime import datetime, UTC
from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=False)

class Kategori(Base):
    __tablename__ = "kategori"
    id = Column(Integer, primary_key=True, index=True)
    nama = Column(String(100), unique=True, nullable=False)

    produk = relationship("Produk", back_populates="kategori")

class Produk(Base):
    __tablename__ = "produk"
    id = Column(Integer, primary_key=True, index=True)
    nama = Column(String(150), nullable=False)
    kategori_id = Column(Integer, ForeignKey("kategori.id"), nullable=True)

    kategori = relationship("Kategori", back_populates="produk")
    varian = relationship("ProdukVarian", back_populates="produk", cascade="all, delete-orphan")

class ProdukVarian(Base):
    __tablename__ = "produk_varian"
    id = Column(Integer, primary_key=True, index=True)
    produk_id = Column(Integer, ForeignKey("produk.id"), nullable=False)
    berat = Column(Float, nullable=False)
    harga = Column(Integer, nullable=False)
    stok = Column(Integer, default=0)

    produk = relationship("Produk", back_populates="varian")

class Pemasok(Base):
    __tablename__ = "pemasok"
    id = Column(Integer, primary_key=True, index=True)
    nama = Column(String(150), nullable=False)
    kontak = Column(String(100), nullable=False)

class PenerimaanBahanBaku(Base):
    """Bahan baku (gabah) yang masuk dari pemasok, dicatat dalam kg."""
    __tablename__ = "penerimaan_bahan_baku"
    id = Column(Integer, primary_key=True, index=True)
    pemasok_id = Column(Integer, ForeignKey("pemasok.id"), nullable=False)
    produk_id = Column(Integer, ForeignKey("produk.id"), nullable=False)
    berat_kg = Column(Float, nullable=False)
    harga_per_kg = Column(Integer, nullable=True)
    status_mutu = Column(String(20), nullable=False, default="menunggu", server_default="menunggu")
    catatan = Column(String(255), nullable=True)
    tanggal = Column(DateTime, default=lambda: datetime.now(UTC))

    pemasok = relationship("Pemasok")
    produk = relationship("Produk")
    penggilingan = relationship("Penggilingan", back_populates="penerimaan", cascade="all, delete-orphan")

    @property
    def berat_sudah_digiling(self) -> float:
        return sum(g.berat_masuk_kg for g in self.penggilingan)

    @property
    def berat_sisa_kg(self) -> float:
        return self.berat_kg - self.berat_sudah_digiling

class Penggilingan(Base):
    __tablename__ = "penggilingan"
    id = Column(Integer, primary_key=True, index=True)
    penerimaan_id = Column(Integer, ForeignKey("penerimaan_bahan_baku.id"), nullable=False)
    berat_masuk_kg = Column(Float, nullable=False)
    berat_hasil_kg = Column(Float, nullable=False)
    tanggal = Column(DateTime, default=lambda: datetime.now(UTC))

    penerimaan = relationship("PenerimaanBahanBaku", back_populates="penggilingan")

    @property
    def susut_kg(self) -> float:
        return self.berat_masuk_kg - self.berat_hasil_kg

    @property
    def rendemen(self) -> float:
        if not self.berat_masuk_kg:
            return 0.0
        return self.berat_hasil_kg / self.berat_masuk_kg

class Pengemasan(Base):
    __tablename__ = "pengemasan"
    id = Column(Integer, primary_key=True, index=True)
    produk_varian_id = Column(Integer, ForeignKey("produk_varian.id"), nullable=False)
    jumlah_pcs = Column(Integer, nullable=False)
    tanggal = Column(DateTime, default=lambda: datetime.now(UTC))

    varian = relationship("ProdukVarian")

    @property
    def berat_terpakai_kg(self) -> float:
        return self.jumlah_pcs * self.varian.berat

class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    nama_pembeli = Column(String(100), nullable=False)
    no_telepon = Column(String(20), nullable=True)

    provinsi = Column(String(100), nullable=True)
    kota = Column(String(100), nullable=True)
    kecamatan = Column(String(100), nullable=True)
    kode_pos = Column(String(10), nullable=True)
    nama_jalan = Column(String(255), nullable=True)
    detail_lainnya = Column(String(255), nullable=True)

    tanggal = Column(DateTime, default=lambda: datetime.now(UTC))
    total = Column(Integer, default=0)

    status_konfirmasi = Column(String(20), nullable=False, default="menunggu", server_default="menunggu")

    ongkir = Column(Integer, nullable=False, default=0, server_default="0")

    items = relationship("OrderItem", back_populates="order", cascade="all, delete-orphan")

class OrderItem(Base):
    __tablename__ = "order_items"
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"), nullable=False)
    produk_varian_id = Column(Integer, ForeignKey("produk_varian.id"), nullable=False)
    jumlah = Column(Integer, nullable=False)
    harga_saat_itu = Column(Integer, nullable=False)

    order = relationship("Order", back_populates="items")
    varian = relationship("ProdukVarian")

class PenyesuaianStok(Base):
    __tablename__ = "penyesuaian_stok"
    id = Column(Integer, primary_key=True, index=True)
    produk_varian_id = Column(Integer, ForeignKey("produk_varian.id"), nullable=False)
    jumlah = Column(Integer, nullable=False)
    alasan = Column(String(50), nullable=False)
    keterangan = Column(String(255), nullable=True)
    tanggal = Column(DateTime, default=lambda: datetime.now(UTC))

    varian = relationship("ProdukVarian")