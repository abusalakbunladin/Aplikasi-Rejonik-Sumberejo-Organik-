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
    harga = Column(Integer, nullable=False)
    stok = Column(Integer, default=0)
    kategori_id = Column(Integer, ForeignKey("kategori.id"), nullable=True)

    kategori = relationship("Kategori", back_populates="produk")

class Pemasok(Base):
    __tablename__ = "pemasuk"
    id = Column(Integer, primary_key=True, index=True)
    nama = Column(String(150), nullable=False)
    kontak = Column(String(100), nullable=False)

class Pasokan(Base):
    __tablename__ = "pasokan"
    id = Column(Integer, primary_key=True, index=True)
    produk_id = Column(Integer, ForeignKey("produk.id"), nullable=False)
    pemasok_id = Column(Integer, ForeignKey("pemasuk.id"), nullable=False)
    jumlah = Column(Integer, nullable=False)
    tanggal = Column(DateTime, default=lambda: datetime.now(UTC))

    produk = relationship("Produk")
    pemasok = relationship("Pemasok")

class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    nama_pembeli = Column(String(100), nullable=False)
    tanggal = Column(DateTime, default=lambda: datetime.now(UTC))
    total = Column(int, default=0)

    items = relationship("OrderItem", back_populates="order", cascade="all, delete-orphan")

class OrderItem(Base):
    __tablename__ = "order_items"
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"), nullable=False)
    produk_id = Column(Integer, ForeignKey("produk.id"), nullable=False)
    jumlah = Column(Integer, nullable=False)
    harga_saat_itu = Column(Integer, nullable=False)

    order = relationship("Order", back_populates="items")
    produk = relationship("Produk")

