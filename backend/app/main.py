import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import auth, kategori, produk, produk_varian, pemasok, produksi, order, laporan, penyesuaian_stok

app = FastAPI(title="Rejonik - Main")

default_origins = "http://localhost:5173,http://127.0.0.1:5173"
origins = [o.strip() for o in os.getenv("CORS_ORIGINS", default_origins).split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(kategori.router)
app.include_router(produk.router)
app.include_router(produk_varian.router)
app.include_router(pemasok.router)
app.include_router(produksi.penerimaan_router)
app.include_router(produksi.penggilingan_router)
app.include_router(produksi.hasil_giling_router)
app.include_router(produksi.pengemasan_router)
app.include_router(order.router)
app.include_router(laporan.router)
app.include_router(penyesuaian_stok.router)