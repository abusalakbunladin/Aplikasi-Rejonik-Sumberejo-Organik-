# Test Case - Laporan
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Laporan Penjualan, Stok Rendah, dan Laporan Produksi (Panen, Giling, Hasil Akhir Beras)
**Tester:** -
**Terakhir diupdate:** 21 September 2026

---

## A. Laporan Penjualan - Endpoint GET /laporan/penjualan (Admin, perlu login)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 1 | Laporan hanya menghitung order yang sudah dikonfirmasi | 1. POST /order (buat order baru, **JANGAN dikonfirmasi**)<br>2. GET /laporan/penjualan<br>3. Pastikan order yang belum dikonfirmasi tidak muncul | Order baru dibuat tanpa PATCH konfirmasi | Order yang belum dikonfirmasi tidak ikut terhitung | 200 OK — hanya menampilkan order yang sudah dikonfirmasi, order baru yang belum dikonfirmasi tidak muncul | **Pass** | - |
| 2 | Akses laporan tanpa login | 1. GET /laporan/penjualan tanpa Bearer Token | Auth type: No Auth | Sistem menolak (401) | 401 Unauthorized — pesan: "Not authenticated" | **Pass** | - |

## B. Laporan Stok Rendah - Endpoint GET /laporan/stok-rendah (Admin, perlu login)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 3 | Parameter batas diisi angka negatif | 1. GET /laporan/stok-rendah?batas=-5 | `?batas=-5` | Idealnya divalidasi, atau minimal tidak menampilkan data salah | 200 OK — hasil kosong `[]`, tidak crash tapi tidak ada validasi format nilai batas | **Minor** | Perlu dikonfirmasi ke tim |
| 4 | Parameter batas diisi huruf (bukan angka) | 1. GET /laporan/stok-rendah?batas=abc | `?batas=abc` | Sistem menolak (validasi tipe data) | 422 Unprocessable Entity | **Pass** | - |

---

## C. Penerimaan Bahan Baku / Gabah (Laporan Panen) - Endpoint POST/GET /penerimaan

**Catatan:** Sebelum fitur ini bisa dites, sempat terjadi error 500 "Table 'rejonik.penerimaan_bahan_baku' doesn't exist" — ternyata migrasi Alembic untuk tabel produksi (penerimaan_bahan_baku, penggilingan, pengemasan) belum dibuat oleh tim backend. Setelah dikonfirmasi dan dibuatkan migrasinya, testing baru bisa dilanjutkan.

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 5 | Penerimaan bahan baku berhasil dibuat (happy path) | 1. Login sebagai admin<br>2. POST /penerimaan dengan data valid | `{"pemasok_id": 1, "produk_id": 4, "berat_kg": 100, "harga_per_kg": 8000, "catatan": "Panen musim ini"}` | Data tersimpan, status_mutu default "menunggu" | 200 OK — data tersimpan dengan id: 1, status_mutu otomatis "menunggu", berat_sisa_kg: 100.0 | **Pass** | - |
| 6 | Berat bahan baku negatif | 1. POST /penerimaan dengan berat_kg negatif | `{"pemasok_id": 1, "produk_id": 4, "berat_kg": -10, "harga_per_kg": 8000}` | Sistem menolak (422) | 422 Unprocessable Entity — berat_kg harus lebih besar dari 0 | **Pass** | - |
| 7 | pemasok_id tidak ada di database | 1. POST /penerimaan dengan pemasok_id tidak valid | `{"pemasok_id": 9999, "produk_id": 4, "berat_kg": 100, "harga_per_kg": 8000}` | Sistem menolak (404) | 404 Not Found — pemasok tidak ditemukan | **Pass** | - |
| 8 | produk_id tidak ada di database | 1. POST /penerimaan dengan produk_id tidak valid | `{"pemasok_id": 1, "produk_id": 9999, "berat_kg": 100, "harga_per_kg": 8000}` | Sistem menolak (404) | 404 Not Found — produk tidak ditemukan | **Pass** | - |
| 9 | harga_per_kg negatif | 1. POST /penerimaan dengan harga_per_kg negatif | `{"pemasok_id": 1, "produk_id": 4, "berat_kg": 100, "harga_per_kg": -500}` | Sistem menolak (422) | 422 Unprocessable Entity — harga_per_kg tidak boleh negatif | **Pass** | - |
| 10 | Daftar penerimaan tampil dengan benar | 1. GET /penerimaan | - | Data yang sudah dibuat muncul di daftar | 200 OK — data penerimaan id: 1 muncul lengkap dengan berat_sudah_digiling dan berat_sisa_kg | **Pass** | - |

## D. Update Status Mutu - Endpoint PATCH /penerimaan/{id}/mutu

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 11 | Set status mutu jadi "lolos" | 1. PATCH /penerimaan/{id}/mutu dengan status valid | `{"status_mutu": "lolos", "catatan": "Kualitas baik"}` | Status berhasil diperbarui | 200 OK — status_mutu berubah menjadi "lolos" | **Pass** | - |
| 12 | Status mutu diisi nilai tidak valid | 1. PATCH /penerimaan/{id}/mutu dengan status di luar pilihan yang ada | `{"status_mutu": "oke_banget"}` | Sistem menolak (422) | 422 Unprocessable Entity — status_mutu hanya menerima "lolos" atau "retur" | **Pass** | - |
| 13 | Ubah status mutu setelah bahan baku sudah pernah digiling | 1. Lakukan penggilingan dari penerimaan tsb (lihat No. 14)<br>2. PATCH status mutu lagi | `{"status_mutu": "retur"}` | Sistem menolak (400), tidak boleh diubah setelah pernah digiling | 400 Bad Request — status mutu tidak bisa diubah karena sudah ada proses penggilingan terkait | **Pass** | - |

## E. Penggilingan (Laporan Giling) - Endpoint POST/GET /penggilingan

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 14 | Penggilingan berhasil dari penerimaan berstatus "lolos" | 1. POST /penggilingan dengan penerimaan_id yang sudah lolos mutu | `{"penerimaan_id": 1, "berat_masuk_kg": 50, "berat_hasil_kg": 32}` | Data tersimpan, rendemen terhitung otomatis (±0.64) | 200 OK — data tersimpan, rendemen otomatis terhitung 0.64 (32÷50) | **Pass** | - |
| 15 | Penggilingan dari penerimaan yang belum lolos mutu (masih "menunggu") | 1. POST /penggilingan dengan penerimaan_id berstatus "menunggu" | `{"penerimaan_id": 2, "berat_masuk_kg": 10, "berat_hasil_kg": 6}` | Sistem menolak (400) | 400 Bad Request — bahan baku harus berstatus "lolos" sebelum bisa digiling | **Pass** | - |
| 16 | berat_hasil_kg lebih besar dari berat_masuk_kg | 1. POST /penggilingan dengan hasil > masuk | `{"penerimaan_id": 1, "berat_masuk_kg": 10, "berat_hasil_kg": 20}` | Sistem menolak (400) | 400 Bad Request — berat hasil tidak boleh melebihi berat masuk | **Pass** | - |
| 17 | berat_masuk_kg melebihi sisa bahan baku yang tersedia | 1. POST /penggilingan dengan berat_masuk_kg > sisa | `{"penerimaan_id": 1, "berat_masuk_kg": 9999, "berat_hasil_kg": 100}` | Sistem menolak (400) | 400 Bad Request — berat masuk melebihi sisa bahan baku yang belum digiling | **Pass** | - |
| 18 | Rendemen 100% (berat masuk = berat hasil, tanpa penyusutan) | 1. POST /penggilingan dengan berat_masuk_kg = berat_hasil_kg | `{"penerimaan_id": 1, "berat_masuk_kg": 20, "berat_hasil_kg": 20}` | Sistem menolak — secara fisik gabah digiling jadi beras pasti ada penyusutan (kulit/sekam), rendemen 100% tidak realistis | **BUG (sebelum fix):** 200 OK, sistem menerima rendemen 100% tanpa validasi batas wajar.<br>**Setelah dilaporkan & diperbaiki tim backend:** 400 Bad Request, rendemen 100% berhasil ditolak | **Bug** | Sudah di fix |
| 19 | penerimaan_id tidak ada di database | 1. POST /penggilingan dengan penerimaan_id tidak valid | `{"penerimaan_id": 9999, "berat_masuk_kg": 10, "berat_hasil_kg": 6}` | Sistem menolak (404) | 404 Not Found — penerimaan tidak ditemukan | **Pass** | - |
| 20 | Daftar penggilingan tampil dengan benar | 1. GET /penggilingan | - | Data yang sudah dibuat muncul di daftar | 200 OK — data penggilingan id: 1 muncul dengan rendemen 0.64 | **Pass** | - |

## F. Hasil Giling (Laporan Hasil Akhir) - Endpoint GET /hasil-giling

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 21 | Laporan hasil giling menampilkan data sesuai akumulasi penggilingan | 1. GET /hasil-giling setelah beberapa proses penggilingan dilakukan | - | Menampilkan total_digiling_kg dan sisa_kg per produk sesuai data penggilingan yang tersimpan | 200 OK — produk id 4 muncul dengan total_digiling_kg sesuai akumulasi penggilingan, sisa_kg masih penuh karena belum ada pengemasan | **Pass** | - |

## G. Pengemasan (Kemas Hasil Giling Jadi Produk Jadi) - Endpoint POST/GET /pengemasan
 
| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 22 | Pengemasan berhasil sesuai sisa hasil giling (happy path) | 1. POST /pengemasan dengan jumlah_pcs yang tidak melebihi sisa hasil giling | `{"produk_varian_id": 1, "jumlah_pcs": 6}` | Data tersimpan, stok varian bertambah sesuai jumlah_pcs | 200 OK — data pengemasan tersimpan, stok varian id 1 bertambah 6 | **Pass** | - |
| 23 | Pengemasan melebihi sisa hasil giling yang tersedia | 1. POST /pengemasan dengan jumlah_pcs yang beratnya melebihi sisa hasil giling | `{"produk_varian_id": 1, "jumlah_pcs": 999}` | Sistem menolak (400) | 400 Bad Request — berat yang dibutuhkan melebihi sisa hasil giling yang tersedia | **Pass** | - |
| 24 | produk_varian_id tidak ada di database | 1. POST /pengemasan dengan produk_varian_id tidak valid | `{"produk_varian_id": 9999, "jumlah_pcs": 1}` | Sistem menolak (404) | 404 Not Found — varian produk tidak ditemukan | **Pass** | - |
| 25 | jumlah_pcs 0 atau negatif | 1. POST /pengemasan dengan jumlah_pcs = 0 | `{"produk_varian_id": 1, "jumlah_pcs": 0}` | Sistem menolak (422) | 422 Unprocessable Entity — jumlah_pcs harus lebih besar dari 0 | **Pass** | - |
| 26 | Verifikasi stok bertambah & daftar pengemasan tampil benar | 1. GET /pengemasan (cek No. 22 muncul)<br>2. GET /produk-varian (cek stok varian id 1 bertambah sesuai No. 22) | - | Data pengemasan muncul, stok varian terupdate sesuai jumlah yang dikemas | 200 OK — data pengemasan No. 22 muncul di daftar, stok varian id 1 terkonfirmasi bertambah 6 sesuai jumlah yang dikemas | **Pass** | - |

---
**Catatan struktur:**
- `POST /penerimaan` mencatat bahan baku (gabah) yang masuk dari pemasok.
- `PATCH /penerimaan/{id}/mutu` menentukan apakah bahan baku "lolos" atau "retur" — bahan baku harus berstatus "lolos" sebelum bisa digiling, dan tidak bisa diubah lagi setelah pernah digiling.
- `POST /penggilingan` mengubah gabah (dari penerimaan yang lolos) menjadi beras. Sistem memvalidasi bahwa berat hasil tidak boleh melebihi berat masuk, dan berat masuk tidak boleh melebihi sisa bahan baku yang tersedia.
- `GET /hasil-giling` merangkum total hasil giling dikurangi yang sudah dikemas.
- `POST /pengemasan` mengemas hasil giling (beras curah) menjadi produk jadi siap jual sesuai varian berat, dan menambah stok varian produk tersebut.
- Endpoint lama `POST /pasokan` (cara lama menambah stok langsung dari pemasok) sudah **dihapus** dari backend, digantikan alur produksi lengkap ini (penerimaan → penggilingan → pengemasan). Test case terkait `/pasokan` di file test-case-stok.md sudah tidak berlaku lagi.

**Catatan kolom Keterangan:**
- **Sudah di fix** — bug ditemukan, dilaporkan, dan sudah diverifikasi ulang (regression test) hasilnya sesuai harapan.
- **Belum di fix** — bug ditemukan dan dilaporkan, tapi perbaikan dari tim backend belum tersedia/belum diverifikasi ulang.
- **Status Pass** Tidak ada bug sama sekali (perfect).