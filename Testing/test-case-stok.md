# Test Case - Validasi Stok
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Validasi Data Produk & Stok
**Tester:** -
**Terakhir diupdate:** 8 September 2026

---

## A. Validasi Data Produk (Master Data) - Endpoint POST /produk

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 1 | Input harga & stok negatif | 1. Login sebagai admin<br>2. POST /produk dengan harga dan stok bernilai negatif | `{"nama": "Test Produk Minus", "harga": -50000, "stok": -10, "kategori_id": 1}` | Sistem menolak (validasi error) | Sistem menerima (200 OK), data tersimpan dengan harga: -50000 dan stok: -10 (id: 6) | **BUG** | Sudah di fix |
| 2 | Input harga & stok berupa huruf/teks (bukan angka) | 1. Login sebagai admin<br>2. POST /produk dengan harga dan stok diisi teks, bukan angka | `{"nama": "Test Produk Huruf", "harga": "Terjangkau", "stok": "banyak", "kategori_id": 1}` | Sistem menolak (validasi tipe data) | 422 Unprocessable Entity — pesan: "Input should be a valid integer, unable to parse string as an integer" untuk field harga dan stok | **Pass** | - |
| 3 | Field nama dikosongkan (string kosong) | 1. Login sebagai admin<br>2. POST /produk dengan nama diisi string kosong "" | `{"nama": "", "harga": 50000, "stok": 30, "kategori_id": 1}` | Sistem menolak (nama tidak boleh kosong) | Sistem menerima (200 OK), produk tersimpan dengan nama: "" (id: 7, id: 8) | **BUG** | Sudah di fix |
| 4 | kategori_id yang tidak ada di database (sebelum perbaikan) | 1. Login sebagai admin<br>2. POST /produk dengan kategori_id yang tidak pernah dibuat (misal 9999) | `{"nama": "Test Kategori Invalid", "harga": 50000, "stok": 10, "kategori_id": 9999}` | Sistem menolak dengan pesan jelas (misal 404/422 "kategori tidak ditemukan") | 500 Internal Server Error — pesan generik "InternalServerError", tidak ada penjelasan penyebab | **BUG** | Sudah di fix |
| 5 | Harga = 0 dan stok = 0 (batas minimum) | 1. Login sebagai admin<br>2. POST /produk dengan harga = 0 dan stok = 0 | `{"nama": "Test Harga Stok Nol", "harga": 0, "stok": 0, "kategori_id": 1}` | harga ditolak (harus > 0, tidak masuk akal produk gratis), stok diterima (boleh = 0, artinya stok habis) | 422 Unprocessable Entity — hanya field harga yang ditolak ("Input should be greater than 0"), stok = 0 tidak muncul sebagai error (diterima) | **Pass** | - |
| 6 | kategori_id yang tidak ada di database (setelah perbaikan/regression test) | 1. Backend melakukan perbaikan<br>2. `git pull` update terbaru<br>3. `python -m alembic upgrade head` (ada tabel baru: produk_varian)<br>4. Restart server<br>5. Ulangi POST /produk dengan kategori_id: 9999 | `{"nama": "Test Kategori Id Satu Normal", "harga": 50000, "stok": 10, "kategori_id": 9999}` | Sistem menolak dengan pesan jelas | 404 Not Found — pesan: "Kategori id 9999 tidak ditemukan" | **Pass** | Sudah di fix |
| 7 | Field nama dihapus total (tidak dikirim sama sekali) | 1. Login sebagai admin<br>2. POST /produk tanpa field nama sama sekali | `{"harga": 50000, "stok": 10, "kategori_id": 4}` | Sistem menolak (field wajib) | 422 Unprocessable Entity — pesan: "Field required" untuk field nama | **Pass** | - |


---
**Catatan kolom Keterangan:**
- **Sudah di fix** — bug ditemukan, dilaporkan, dan sudah diverifikasi ulang (regression test) hasilnya sesuai harapan.
- **Belum di fix** — bug ditemukan dan dilaporkan, tapi perbaikan dari tim backend belum tersedia/belum diverifikasi ulang.
- **-** — bukan bug (status Pass), jadi kolom ini tidak relevan.