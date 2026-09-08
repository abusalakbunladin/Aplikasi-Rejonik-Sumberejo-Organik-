# Test Case - Validasi Stok
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Validasi Data Produk & Stok
**Tester:** -
**Terakhir diupdate:** 8 September 2026

---

## A. Validasi Data Produk (Master Data) - Endpoint POST /produk

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status |
|----|-----------|--------------------|----------|------------------|----------------|--------|
| 2 | Input harga & stok negatif (sebelum perbaikan) | 1. Login sebagai admin<br>2. POST /produk dengan harga dan stok bernilai negatif | `{"nama": "Test Produk Minus", "harga": -50000, "stok": -10, "kategori_id": 1}` | Sistem menolak (validasi error) | Sistem menerima (200 OK), data tersimpan dengan harga: -50000 dan stok: -10 (id: 6) | **BUG** (sudah dilaporkan) |