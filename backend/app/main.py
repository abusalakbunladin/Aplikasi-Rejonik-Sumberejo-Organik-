from fastapi import FastAPI

from app.routers import auth, kategori, produk, pemasok, pasokan, order, laporan

app = FastAPI(title="Rejonik - Main")

app.include_router(auth.router)
app.include_router(kategori.router)
app.include_router(produk.router)
app.include_router(pemasok.router)
app.include_router(pasokan.router)
app.include_router(order.router)
app.include_router(laporan.router)