# Test Case - Laporan
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Laporan Penjualan, Stok Rendah, dan Laporan Produksi (Panen, Giling, Hasil Akhir Beras)
**Tester:** -
**Terakhir diupdate:** 1 Oktober 2026

---

## A. Laporan Penjualan - Endpoint GET /laporan/penjualan (Admin, perlu login)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 1 | Laporan hanya menghitung order yang sudah dikonfirmasi | 1. POST /order (buat order baru, **JANGAN dikonfirmasi**)<br>2. GET /laporan/penjualan<br>3. Pastikan order yang belum dikonfirmasi tidak muncul | Order baru dibuat tanpa PATCH konfirmasi | Order yang belum dikonfirmasi tidak ikut terhitung | 200 OK — hanya menampilkan order yang sudah dikonfirmasi | **Pass** | - |
| 2 | Akses laporan tanpa login | 1. GET /laporan/penjualan tanpa Bearer Token | Auth type: No Auth | Sistem menolak (401) | 401 Unauthorized | **Pass** | - |
| 3 | Order yang ditolak tidak ikut terhitung di laporan | 1. Buat order, lalu tolak (PATCH status "ditolak")<br>2. GET /laporan/penjualan | - | Order yang ditolak tidak menambah total_terjual/total_pendapatan | Terkonfirmasi: hanya order "dikonfirmasi" yang menambah angka laporan | **Pass** | - |
| 4 | Laporan memakai harga_saat_itu (snapshot), bukan harga varian sekarang | 1. Buat & konfirmasi order dengan harga lama<br>2. Ubah harga varian<br>3. GET /laporan/penjualan | - | total_pendapatan dihitung pakai harga saat order dibuat, bukan harga terbaru | Terkonfirmasi sesuai | **Pass** | - |

## B. Laporan Stok Rendah - Endpoint GET /laporan/stok-rendah (Admin, perlu login)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 5 | Parameter batas diisi angka negatif | 1. GET /laporan/stok-rendah?batas=-5 | `?batas=-5` | Idealnya divalidasi, atau minimal tidak menampilkan data salah | 200 OK — hasil kosong `[]`, tidak crash tapi tidak ada validasi format nilai batas | **Bug** | Sudah di fix |
| 6 | Parameter batas diisi huruf (bukan angka) | 1. GET /laporan/stok-rendah?batas=abc | `?batas=abc` | Sistem menolak (validasi tipe data) | 422 Unprocessable Entity | **Pass** | - |

## C. Penerimaan Bahan Baku / Gabah (Laporan Panen) - Endpoint POST/GET /penerimaan

**Catatan:** Sebelum fitur ini bisa dites, sempat terjadi error 500 "Table 'rejonik.penerimaan_bahan_baku' doesn't exist" — ternyata migrasi Alembic untuk tabel produksi (penerimaan_bahan_baku, penggilingan, pengemasan) belum dibuat oleh tim backend. Setelah dikonfirmasi dan dibuatkan migrasinya, testing baru bisa dilanjutkan.

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 7 | Penerimaan bahan baku berhasil dibuat (happy path) | 1. Login sebagai admin<br>2. POST /penerimaan dengan data valid | `{"pemasok_id": 1, "produk_id": 4, "berat_kg": 100, "harga_per_kg": 8000, "catatan": "Panen musim ini"}` | Data tersimpan, status_mutu default "menunggu" | 200 OK — status_mutu otomatis "menunggu", berat_sisa_kg: 100.0 | **Pass** | - |
| 8 | Berat bahan baku negatif | POST /penerimaan dengan berat_kg negatif | `{"pemasok_id": 1, "produk_id": 4, "berat_kg": -10, "harga_per_kg": 8000}` | Sistem menolak (422) | 422 Unprocessable Entity | **Pass** | - |
| 9 | pemasok_id tidak ada di database | POST /penerimaan dengan pemasok_id tidak valid | `{"pemasok_id": 9999, "produk_id": 4, "berat_kg": 100, "harga_per_kg": 8000}` | Sistem menolak (404) | 404 Not Found | **Pass** | - |
| 10 | produk_id tidak ada di database | POST /penerimaan dengan produk_id tidak valid | `{"pemasok_id": 1, "produk_id": 9999, "berat_kg": 100, "harga_per_kg": 8000}` | Sistem menolak (404) | 404 Not Found | **Pass** | - |
| 11 | harga_per_kg negatif | POST /penerimaan dengan harga_per_kg negatif | `{"pemasok_id": 1, "produk_id": 4, "berat_kg": 100, "harga_per_kg": -500}` | Sistem menolak (422) | 422 Unprocessable Entity | **Pass** | - |
| 12 | Daftar penerimaan tampil dengan benar | GET /penerimaan | - | Data yang sudah dibuat muncul di daftar | 200 OK, lengkap dengan berat_sudah_digiling dan berat_sisa_kg | **Pass** | - |

## D. Update Status Mutu - Endpoint PATCH /penerimaan/{id}/mutu

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 13 | Set status mutu jadi "lolos" | PATCH /penerimaan/{id}/mutu | `{"status_mutu": "lolos", "catatan": "Kualitas baik"}` | Status berhasil diperbarui | 200 OK | **Pass** | - |
| 14 | Status mutu diisi nilai tidak valid | PATCH dengan status di luar pilihan yang ada | `{"status_mutu": "oke_banget"}` | Sistem menolak (422) | 422 Unprocessable Entity | **Pass** | - |
| 15 | Ubah status mutu setelah bahan baku sudah pernah digiling | Lakukan penggilingan, lalu PATCH status mutu lagi | `{"status_mutu": "retur"}` | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 16 | PATCH mutu "menunggu" (tidak boleh diset balik) | PATCH status_mutu ke "menunggu" (nilai awal) | `{"status_mutu": "menunggu"}` | Ditolak (422), bukan pilihan valid untuk diset manual | 422 Unprocessable Entity | **Pass** | - |
| 17 | PATCH ganti status tanpa mengirim field catatan | PATCH status_mutu saja, catatan tidak dikirim | `{"status_mutu": "lolos"}` | Catatan yang sudah ada sebelumnya TIDAK hilang/kosong | Catatan lama tetap tersimpan | **Pass** | - |

## E. Penggilingan (Laporan Giling) - Endpoint POST/GET /penggilingan

**Catatan:** rentang rendemen wajar yang diterima sistem adalah **45% - 80%**.

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 18 | Penggilingan berhasil dari penerimaan berstatus "lolos" | POST /penggilingan dengan penerimaan_id yang sudah lolos mutu | `{"penerimaan_id": 1, "berat_masuk_kg": 50, "berat_hasil_kg": 32}` | Data tersimpan, rendemen terhitung otomatis | 200 OK, rendemen 0.64 | **Pass** | - |
| 19 | Penggilingan dari penerimaan yang belum lolos mutu | POST /penggilingan dengan penerimaan_id berstatus "menunggu" | `{"penerimaan_id": 2, "berat_masuk_kg": 10, "berat_hasil_kg": 6}` | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 20 | Penggilingan dari penerimaan berstatus "retur" | POST /penggilingan dengan penerimaan_id berstatus "retur" | - | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 21 | berat_hasil_kg lebih besar dari berat_masuk_kg | POST /penggilingan dengan hasil > masuk | `{"penerimaan_id": 1, "berat_masuk_kg": 10, "berat_hasil_kg": 20}` | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 22 | berat_masuk_kg melebihi sisa bahan baku yang tersedia | POST /penggilingan dengan berat_masuk_kg > sisa | `{"penerimaan_id": 1, "berat_masuk_kg": 9999, "berat_hasil_kg": 100}` | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 23 | berat_masuk_kg tepat sama dengan sisa bahan baku (batas) | POST /penggilingan dengan berat_masuk_kg = sisa persis | - | Diterima (200) | 200 OK | **Pass** | - |
| 24 | Sisa bahan baku sudah 0, digiling lagi | POST /penggilingan setelah sisa bahan baku habis | - | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 25 | Rendemen 100% (berat masuk = berat hasil, tanpa penyusutan) | 1. POST /penggilingan dengan berat_masuk_kg = berat_hasil_kg | `{"penerimaan_id": 1, "berat_masuk_kg": 20, "berat_hasil_kg": 20}` | Sistem menolak — secara fisik gabah digiling jadi beras pasti ada penyusutan (kulit/sekam), rendemen 100% tidak realistis | 200 OK, sistem menerima rendemen 100% tanpa validasi batas wajar.<br>**Setelah dilaporkan & diperbaiki tim backend:** 400 Bad Request, rendemen 100% berhasil ditolak | **Bug** | Sudah di fix |
| 26 | Rendemen 30% (terlalu rendah, di bawah 45%) | - | berat_hasil_kg menghasilkan rendemen 30% | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 27 | Rendemen 85% (terlalu tinggi, di atas 80%) | - | berat_hasil_kg menghasilkan rendemen 85% | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 28 | Rendemen tepat 80% (batas atas rentang wajar) | - | berat_hasil_kg menghasilkan rendemen persis 80% | Diterima (200) | 200 OK, rendemen 0.8 | **Pass** | - |
| 29 | Rendemen tepat 45% (batas bawah rentang wajar) | - | berat_hasil_kg menghasilkan rendemen persis 45% | Diterima (200) | 200 OK, rendemen 0.45 | **Pass** | - |
| 30 | penerimaan_id tidak ada di database | POST /penggilingan dengan penerimaan_id tidak valid | `{"penerimaan_id": 9999, "berat_masuk_kg": 10, "berat_hasil_kg": 6}` | Sistem menolak (404) | 404 Not Found | **Pass** | - |
| 31 | Daftar penggilingan tampil dengan benar | GET /penggilingan | - | Data yang sudah dibuat muncul di daftar | 200 OK | **Pass** | - |

## F. Hasil Giling (Laporan Hasil Akhir) - Endpoint GET /hasil-giling

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 32 | Laporan hasil giling menampilkan data sesuai akumulasi penggilingan (sebelum ada pengemasan) | GET /hasil-giling setelah beberapa proses penggilingan, belum ada pengemasan | - | total_digiling_kg sesuai akumulasi, sudah_dikemas_kg = 0, sisa_kg = total_digiling_kg | Terkonfirmasi sesuai | **Pass** | - |
| 33 | Laporan hasil giling setelah sebagian dikemas | GET /hasil-giling setelah sebagian hasil giling dikemas | - | sudah_dikemas_kg bertambah sesuai yang dikemas, sisa_kg berkurang sesuai | Terkonfirmasi sesuai | **Pass** | - |
| 34 | Laporan hasil giling setelah SEMUA sisa dikemas habis | GET /hasil-giling setelah sisa hasil giling dikemas sampai 0 | - | sisa_kg = 0, sudah_dikemas_kg = total_digiling_kg | Terkonfirmasi sesuai | **Pass** | - |
| 35 | Akses tanpa login | GET /hasil-giling tanpa Bearer Token | - | Sistem menolak (401) | 401 Unauthorized | **Pass** | - |

## G. Pengemasan (Kemas Hasil Giling Jadi Produk Jadi) - Endpoint POST/GET /pengemasan

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 36 | Pengemasan berhasil sesuai sisa hasil giling (happy path) | POST /pengemasan dengan jumlah_pcs yang tidak melebihi sisa hasil giling | `{"produk_varian_id": 1, "jumlah_pcs": 6}` | Data tersimpan, stok varian bertambah sesuai jumlah_pcs | 200 OK, stok bertambah | **Pass** | - |
| 37 | Pengemasan melebihi sisa hasil giling yang tersedia | POST /pengemasan dengan jumlah_pcs yang beratnya melebihi sisa hasil giling | `{"produk_varian_id": 1, "jumlah_pcs": 999}` | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 38 | Pengemasan tepat sebesar sisa hasil giling (batas) | POST /pengemasan dengan jumlah_pcs yang beratnya persis sama dengan sisa | - | Diterima (200), sisa jadi 0 | 200 OK | **Pass** | - |
| 39 | Pengemasan saat sisa hasil giling sudah 0 | POST /pengemasan setelah sisa hasil giling habis | - | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 40 | Pengemasan dua varian berbeda berbagi sisa hasil giling yang sama | Kemas varian A (sebagian sisa), lalu kemas varian B dari produk yang sama (sisa yang tersisa) | - | Keduanya sukses selama totalnya tidak melebihi sisa gabungan | Terkonfirmasi sesuai | **Pass** | - |
| 41 | Pengemasan produk yang belum pernah digiling sama sekali | POST /pengemasan untuk produk yang belum ada riwayat penggilingan | - | Sistem menolak (400) | 400 Bad Request | **Pass** | - |
| 42 | produk_varian_id tidak ada di database | POST /pengemasan dengan produk_varian_id tidak valid | `{"produk_varian_id": 9999, "jumlah_pcs": 1}` | Sistem menolak (404) | 404 Not Found | **Pass** | - |
| 43 | jumlah_pcs 0 atau negatif | POST /pengemasan dengan jumlah_pcs = 0 | `{"produk_varian_id": 1, "jumlah_pcs": 0}` | Sistem menolak (422) | 422 Unprocessable Entity | **Pass** | - |
| 44 | Verifikasi stok bertambah & daftar pengemasan tampil benar | GET /pengemasan dan GET /produk-varian | - | Data pengemasan muncul, stok varian terupdate sesuai jumlah yang dikemas | 200 OK, stok terkonfirmasi bertambah | **Pass** | - |

---

## H. Validasi Panjang Teks Penerimaan Bahan Baku - Endpoint POST /penerimaan

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 45 | Catatan penerimaan melebihi batas panjang kolom (256 karakter) | POST /penerimaan dengan catatan 256 karakter | `{"pemasok_id": 1, "produk_id": 4, "berat_kg": 5, "catatan": "A x 256"}` | Sistem menolak (422) | 422 Unprocessable Entity | **BUG** | Sudah di fix |

---
**Catatan struktur:**
- `POST /penerimaan` mencatat bahan baku (gabah) yang masuk dari pemasok.
- `PATCH /penerimaan/{id}/mutu` menentukan apakah bahan baku "lolos" atau "retur" — bahan baku harus berstatus "lolos" sebelum bisa digiling, dan tidak bisa diubah lagi setelah pernah digiling.
- `POST /penggilingan` mengubah gabah (dari penerimaan yang lolos) menjadi beras. Rendemen wajib dalam rentang **45% - 80%**; berat hasil tidak boleh melebihi berat masuk; berat masuk tidak boleh melebihi sisa bahan baku yang tersedia.
- `GET /hasil-giling` merangkum total hasil giling dikurangi yang sudah dikemas.
- `POST /pengemasan` mengemas hasil giling (beras curah) menjadi produk jadi siap jual sesuai varian berat, dan menambah stok varian produk tersebut.
- Endpoint lama `POST /pasokan` sudah **dihapus** dari backend, digantikan alur produksi lengkap ini (penerimaan → penggilingan → pengemasan).

**Catatan kolom Keterangan:**
- **Sudah di fix** — bug ditemukan, dilaporkan, dan sudah diverifikasi ulang (regression test) hasilnya sesuai harapan.
- **Belum di fix** — bug ditemukan dan dilaporkan, tapi perbaikan dari tim backend belum tersedia/belum diverifikasi ulang.
- **Status Pass** Tidak ada bug sama sekali (perfect).