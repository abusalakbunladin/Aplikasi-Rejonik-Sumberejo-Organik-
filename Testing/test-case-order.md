# Test Case - Alur Order
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Order (Public - buat order, Admin - konfirmasi order)
**Tester:** -
**Terakhir diupdate:** 16 September 2026

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
| 10 | Stok dikembalikan saat order ditolak | 1. Cek stok varian<br>2. POST /order (stok berkurang)<br>3. PATCH /order/{id}/konfirmasi dengan status "ditolak"<br>4. Cek stok lagi | `{"status_konfirmasi": "ditolak", "ongkir": 0}` | Stok kembali ke jumlah semula setelah order ditolak | Stok kembali sesuai jumlah yang di-order | **Pass** | - |
| 11 | Konfirmasi order yang SUDAH berstatus dikonfirmasi (double-confirm) | 1. Konfirmasi order<br>2. Konfirmasi order yang sama lagi | `{"status_konfirmasi": "dikonfirmasi", "ongkir": 0}` | Ditolak (400), tidak boleh dikonfirmasi dua kali | 400 Bad Request | **Pass** | - |
| 12 | Tolak order yang SUDAH berstatus dikonfirmasi | PATCH order yang sudah dikonfirmasi, status diganti "ditolak" | `{"status_konfirmasi": "ditolak", "ongkir": 0}` | Ditolak (400) | 400 Bad Request | **Pass** | - |
| 13 | Tolak order yang SUDAH ditolak (double-reject), stok tidak boleh nambah 2x | 1. Tolak order (stok balik)<br>2. Tolak order yang sama lagi | `{"status_konfirmasi": "ditolak", "ongkir": 0}` | Ditolak (400), dan stok TIDAK bertambah lagi untuk percobaan kedua | 400 Bad Request, stok tidak bertambah dobel | **Pass** | - |
| 14 | Konfirmasi order yang sudah ditolak | PATCH order yang sudah "ditolak", status diganti "dikonfirmasi" | `{"status_konfirmasi": "dikonfirmasi", "ongkir": 0}` | Ditolak (400) | 400 Bad Request | **Pass** | - |
| 15 | Harga order tersimpan sebagai snapshot (harga_saat_itu) | 1. Buat order dengan harga varian saat itu<br>2. Ubah harga varian<br>3. GET /order, cek item order lama | - | `harga_saat_itu` di item order TIDAK ikut berubah walau harga varian sekarang sudah beda | Terkonfirmasi: harga_saat_itu tetap harga lama | **Pass** | - |

---

## C. Validasi Format & Panjang Field Alamat - Endpoint POST /order (Publik, tanpa login)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 16 | Order dengan kode_pos berisi huruf (bukan angka) | 1. POST /order tanpa Bearer Token<br>2. Isi kode_pos dengan huruf | `"kode_pos": "abcde"` (field lain valid) | Sistem menolak (422), kode pos harus berupa angka | 422 Unprocessable Entity | **BUG** | Sudah di fix |
| 17 | Order dengan nama_pembeli melebihi batas panjang kolom (101 karakter) | 1. POST /order tanpa Bearer Token<br>2. Isi nama_pembeli dengan 101 karakter | `"nama_pembeli": "A x 101"` (field lain valid) | Sistem menolak (422) | 422 Unprocessable Entity | **BUG** | Sudah di fix |

## D. Fitur Baru - kode_pos Wajib Persis 5 Digit Angka

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 18 | kode_pos kurang dari 5 digit (4 digit) | POST /order, kode_pos: "6729" | `"kode_pos": "6729"` | Ditolak (422) | 422 Unprocessable Entity | **Pass** | - |
| 19 | kode_pos lebih dari 5 digit (6 digit) | POST /order, kode_pos: "672910" | `"kode_pos": "672910"` | Ditolak (422) | 422 Unprocessable Entity | **Pass** | - |
| 20 | kode_pos campur huruf (5 karakter) | POST /order, kode_pos: "1234a" | `"kode_pos": "1234a"` | Ditolak (422) | 422 Unprocessable Entity | **Pass** | - |
| 21 | kode_pos ada spasi di tengah | POST /order, kode_pos: "123 45" | `"kode_pos": "123 45"` | Ditolak (422) | 422 Unprocessable Entity | **Pass** | - |
| 22 | kode_pos persis 5 digit angka | POST /order, kode_pos: "67291" | `"kode_pos": "67291"` | Diterima (200) | 200 OK | **Pass** | - |

## E. Fitur Baru - Rate Limiting POST /order (maks 10 request/menit per IP)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 23 | Order ke-1 sampai ke-10 dalam 1 menit | Kirim 10x POST /order berturut-turut dalam < 1 menit | items valid, stok cukup | Semua 10 diterima (200) | 200 OK untuk ke-10nya | **Pass** | - |
| 24 | Order ke-11 dalam window 1 menit yang sama | Kirim 1x POST /order lagi (percobaan ke-11) | items valid | Ditolak (429 Too Many Requests), ada header Retry-After | 429 Too Many Requests, header Retry-After ada | **Pass** | - |
| 25 | Order ke-12 (masih dalam periode blokir) | Kirim 1x POST /order lagi | items valid | Masih ditolak (429) | 429 Too Many Requests | **Pass** | - |
| 26 | Stok TIDAK berkurang untuk order yang diblokir rate limit | Cek stok varian setelah percobaan #11 dan #12 yang diblokir | - | Stok sama seperti setelah 10 order sukses (tidak berkurang lagi untuk yang #11, #12) | Stok sesuai 10 order yang berhasil saja | **Pass** | - |

---
**Catatan struktur:**
- `POST /order` sengaja tidak memerlukan login karena merupakan form order publik (client/reseller mengisi sendiri dari halaman web).
- `GET /order` dan `PATCH /order/{id}/konfirmasi` memerlukan login admin.
- Field alamat (`nama_pembeli`, `no_telepon`, `provinsi`, `kota`, `kecamatan`, `kode_pos`, `nama_jalan`) sudah memiliki validasi lengkap, termasuk panjang maksimum dan format.
- `items` pada order wajib minimal 1 item, dan `jumlah` per item harus lebih dari 0.
- **Rate limiting** (RATE_LIMIT_ORDER_MAKS di .env, default 10/60 detik) dan **CAPTCHA opsional** (CAPTCHA_AKTIF, default mati) ditambahkan sebagai lapisan keamanan baru di endpoint ini. Lihat test-case-fitur-baru.md untuk detail CAPTCHA & order kedaluwarsa.

**Catatan kolom Keterangan:**
- **Sudah di fix** — bug ditemukan, dilaporkan, dan sudah diverifikasi ulang (regression test) hasilnya sesuai harapan.
- **Belum di fix** — bug ditemukan dan dilaporkan, tapi perbaikan dari tim backend belum tersedia/belum diverifikasi ulang.
- **Status Pass** Tidak ada bug sama sekali (perfect).