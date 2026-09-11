# Test Case - Alur Order
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Order (Public - buat order, Admin - konfirmasi order)
**Tester:** -
**Terakhir diupdate:** 10 September 2026

---

## A. Membuat Order - Endpoint POST /order (Publik, tanpa login)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 1 | Order berhasil dibuat dengan data valid (tanpa login) | 1. POST /order tanpa Bearer Token (endpoint publik)<br>2. Isi semua field alamat + minimal 1 item | `{"nama_pembeli": "Budi Santoso", "no_telepon": "081234567890", "provinsi": "Jawa Timur", "kota": "Probolinggo", "kecamatan": "Sumberejo", "kode_pos": "67291", "nama_jalan": "Jl. Raya Sumberejo No. 10", "detail_lainnya": "Dekat masjid", "items": [{"produk_varian_id": 1, "jumlah": 2}]}` | Order berhasil dibuat, stok varian berkurang sesuai jumlah, tidak perlu login | 200 OK, order tersimpan | **Pass** | - |
| 2 | Order dengan jumlah melebihi stok tersedia | 1. POST /order dengan jumlah item lebih besar dari stok varian yang ada | items: `[{"produk_varian_id": 1, "jumlah": 9999}]` | Order ditolak, stok tidak berkurang | 400 Bad Request — pesan stok tidak cukup | **Pass** | - |
| 3 | Order dengan salah satu field wajib dikosongkan (string kosong) | 1. POST /order dengan salah satu field wajib (nama_pembeli/alamat) diisi string kosong "" | Salah satu field alamat/nama_pembeli diisi "" | Sistem menolak (field tidak boleh kosong) | 422 Unprocessable Entity | **Pass** | - |
| 4 | Order dengan produk_varian_id yang tidak ada | 1. POST /order dengan produk_varian_id yang tidak pernah dibuat | items: `[{"produk_varian_id": 9999, "jumlah": 1}]` | Sistem menolak dengan pesan jelas (varian tidak ditemukan) | 404 Not Found | **Pass** | - |
| 5 | Order dengan items kosong (tanpa produk sama sekali) | 1. POST /order dengan items berupa array kosong | `"items": []` | Sistem menolak (order harus punya minimal 1 item) | 422 Unprocessable Entity | **Pass** | - |
| 6 | Order dengan qty = 0 | 1. POST /order dengan jumlah item = 0 | items: `[{"produk_varian_id": 1, "jumlah": 0}]` | Sistem menolak (jumlah harus lebih dari 0) | 422 Unprocessable Entity | **Pass** | - |
| 7 | Order dengan qty negatif | 1. POST /order dengan jumlah item bernilai negatif | items: `[{"produk_varian_id": 1, "jumlah": -5}]` | Sistem menolak (jumlah harus lebih dari 0) | 422 Unprocessable Entity | **Pass** | - |
| 8 | Order dengan no_telepon berisi huruf (bukan angka) | 1. POST /order dengan no_telepon diisi huruf, bukan angka | `"no_telepon": "abcde"` | Sistem menolak (format nomor telepon tidak valid) | 200 OK — sistem menerima "abcde" sebagai nomor telepon yang valid, tidak ada validasi format | **BUG** | Sudah di fix |

## B. Konfirmasi Order - Endpoint PATCH /order/{order_id}/konfirmasi (Admin, perlu login)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 9 | Admin konfirmasi order yang masuk | 1. Login sebagai admin (dapatkan token)<br>2. PATCH /order/{id}/konfirmasi dengan status "dikonfirmasi" dan ongkir | `{"status_konfirmasi": "dikonfirmasi", "ongkir": 15000}` | Status order berubah jadi "dikonfirmasi", ongkir tersimpan | 200 OK, status dan ongkir berhasil diperbarui | **Pass** | - |

---
**Catatan struktur:**
- `POST /order` sengaja tidak memerlukan login karena merupakan form order publik (client/reseller mengisi sendiri dari halaman web).
- `GET /order` dan `PATCH /order/{id}/konfirmasi` memerlukan login admin.
- Field alamat (`nama_pembeli`, `no_telepon`, `provinsi`, `kota`, `kecamatan`, `kode_pos`, `nama_jalan`) sudah memiliki validasi tidak boleh kosong/spasi sejak awal (field_validator), berbeda dari kasus bug "nama kosong" yang ditemukan di endpoint /produk sebelumnya.
- `items` pada order wajib minimal 1 item, dan `jumlah` per item harus lebih dari 0 (validasi `gt=0` sudah ada di skema).

**Catatan kolom Keterangan:**
- **Sudah di fix** — bug ditemukan, dilaporkan, dan sudah diverifikasi ulang (regression test) hasilnya sesuai harapan.
- **Belum di fix** — bug ditemukan dan dilaporkan, tapi perbaikan dari tim backend belum tersedia/belum diverifikasi ulang.
- **-** — bukan bug (status Pass), jadi kolom ini tidak relevan.