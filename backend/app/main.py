import asyncio
import contextlib
import os
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.kedaluwarsa import loop_kedaluwarsa
from app.routers import auth, kategori, produk, produk_varian, pemasok, produksi, order, laporan, penyesuaian_stok

@asynccontextmanager
async def lifespan(app: FastAPI):
    tugas = asyncio.create_task(loop_kedaluwarsa())
    yield
    tugas.cancel()
    with contextlib.suppress(asyncio.CancelledError):
        await tugas

_produksi = os.getenv("APP_ENV", "development").lower() == "production"

app = FastAPI(
    title="Rejonik - Main",
    lifespan=lifespan,
    docs_url=None if _produksi else "/docs",
    redoc_url=None if _produksi else "/redoc",
    openapi_url=None if _produksi else "/openapi.json",
)

@app.exception_handler(RequestValidationError)
async def validation_error_handler(request: Request, exc: RequestValidationError):
    errors = [{"loc": list(e["loc"]), "msg": e["msg"], "type": e["type"]} for e in exc.errors()]
    return JSONResponse(status_code=422, content={"detail": errors})

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