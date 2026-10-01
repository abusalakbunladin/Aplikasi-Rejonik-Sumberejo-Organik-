# Test Case - Validasi Stok
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Validasi Data Produk & Stok
**Tester:** -
**Terakhir diupdate:** 01 Oktober 2026

---

## A. Validasi Data Produk (Master Data) - Endpoint POST /produk

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 1 | Input harga & stok negatif | 1. Login sebagai admin<br>2. POST /produk dengan harga dan stok bernilai negatif | `{"nama": "Test Produk Minus", "harga": -50000, "stok": -10, "kategori_id": 1}` | Sistem menolak (validasi error) | Sistem menerima (200 OK), data tersimpan dengan harga: -50000 dan stok: -10 (id: 6) | **BUG** | Sudah di fix |
| 2 | Input harga & stok berupa huruf/teks (bukan angka) | 1. Login sebagai admin<br>2. POST /produk dengan harga dan stok diisi teks, bukan angka | `{"nama": "Test Produk Huruf", "harga": "Terjangkau", "stok": "banyak", "kategori_id": 1}` | Sistem menolak (validasi tipe data) | 422 Unprocessable Entity — pesan: "Input should be a valid integer, unable to parse string as an integer" untuk field harga dan stok | **Pass** | - |
| 3 | Field nama dikosongkan (string kosong) | 1. Login sebagai admin<br>2. POST /produk dengan nama diisi string kosong "" | `{"nama": "", "harga": 50000, "stok": 30, "kategori_id": 1}` | Sistem menolak (nama tidak boleh kosong) | Sistem menerima (200 OK), produk tersimpan dengan nama: "" (id: 7, id: 8) | **BUG** | Sudah di fix |
| 4 | kategori_id yang tidak ada di database (sebelum perbaikan) | 1. Login sebagai admin<br>2. POST /produk dengan kategori_id yang tidak pernah dibuat (misal 9999) | `{"nama": "Test Kategori Invalid", "harga": 50000, "stok": 10, "kategori_id": 9999}` | Sistem menolak dengan pesan jelas (misal 404/422 "kategori tidak ditemukan") | 500 Internal Server Error — pesan generik "InternalServerError", tidak ada penjelasan penyebab | **BUG** | Sudah di fix |
| 5 | Harga = 0 dan stok = 0 (batas minimum) | 1. Login sebagai admin<br>2. POST /produk dengan harga = 0 dan stok = 0 | `{"nama": "Test Harga Stok Nol", "harga": 0, "stok": 0, "kategori_id": 1}` | harga ditolak (harus > 0, tidak masuk akal produk gratis), stok diterima (boleh = 0, artinya stok habis) | 422 Unprocessable Entity — hanya field harga yang ditolak ("Input should be greater than 0"), stok = 0 tidak muncul sebagai error (diterima) | **Pass** | - |
| 6 | kategori_id yang tidak ada di database (setelah perbaikan/regression test) | 1. Backend melakukan perbaikan<br>2. `git pull` update terbaru<br>3. `python -m alembic upgrade head` (ada tabel baru: produk_varian)<br>4. Restart server<br>5. Ulangi POST /produk dengan kategori_id: 9999 | `{"nama": "Test Kategori Id Satu Normal", "harga": 50000, "stok": 10, "kategori_id": 9999}` | Sistem menolak dengan pesan jelas | 404 Not Found — pesan: "Kategori id 9999 tidak ditemukan" | **Pass** | - 
| 7 | Field nama dihapus total (tidak dikirim sama sekali) | 1. Login sebagai admin<br>2. POST /produk tanpa field nama sama sekali | `{"harga": 50000, "stok": 10, "kategori_id": 4}` | Sistem menolak (field wajib) | 422 Unprocessable Entity — pesan: "Field required" untuk field nama | **Pass** | - |
| 8 | Hapus produk yang ada (by ID) | 1. Login sebagai admin<br>2. DELETE /produk/{id} dengan id yang valid<br>3. Verifikasi dengan GET /produk | DELETE /produk/15 | Produk terhapus dari database, tidak muncul lagi di GET /produk | 200 OK — pesan: "Produk berhasil dihapus". Terverifikasi via GET /produk, id 15 sudah tidak ada di daftar | **Pass** | - |

---

## B. Validasi Stok melalui Varian Produk, Pasokan, dan Penyesuaian Stok

**Catatan struktur:** Sejak migrasi "produk sekarang punya varian berat", field `harga` dan `stok` dipindahkan dari `/produk` ke endpoint `/produk-varian`. Stok bertambah lewat `/pasokan` (dari pemasok) dan berkurang lewat `/penyesuaian-stok` (misal karena rusak/hilang).

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 9 | Alur normal: buat varian → tambah stok via pasokan → kurangi stok via penyesuaian | 1. POST /produk-varian (buat varian dengan stok awal)<br>2. POST /pemasok (buat data pemasok)<br>3. POST /pasokan (tambah stok dari pemasok)<br>4. POST /penyesuaian-stok (kurangi stok dengan alasan) | Varian: `{"produk_id": 4, "berat": 5.0, "harga": 75000, "stok": 50}`<br>Pasokan: `{"produk_varian_id": 1, "pemasok_id": 1, "jumlah": 20}` | Varian berhasil dibuat (stok awal 50), pasokan menambah stok jadi 70 | Semua berhasil (200 OK). Varian id: 1 dibuat, stok bertambah dari 50 menjadi 70 setelah pasokan (terverifikasi lewat percobaan pengurangan berikutnya) | **Pass** | - |
| 10 | Penyesuaian stok dengan jumlah melebihi stok tersedia | 1. Cek stok varian saat ini (70)<br>2. POST /penyesuaian-stok dengan jumlah lebih besar dari stok tersedia | `{"produk_varian_id": 1, "jumlah": 9999, "alasan": "rusak", "keterangan": "Test kurangi stok berlebihan"}` | Sistem menolak (stok tidak cukup) | 400 Bad Request — pesan: "Stok tidak cukup untuk dikurangi (sisa 70)" | **Pass** | - |
| 11 | Pasokan dengan jumlah negatif | 1. Login sebagai admin<br>2. POST /pasokan dengan jumlah bernilai negatif | `{"produk_varian_id": 1, "pemasok_id": 1, "jumlah": -20}` | Sistem menolak (pasokan seharusnya hanya menambah stok, tidak boleh negatif) | 422 Unprocessable Entity | **Pass** | - |
| 12 | Pasokan dengan produk_varian_id yang tidak ada | 1. Login sebagai admin<br>2. POST /pasokan dengan produk_varian_id yang tidak pernah dibuat | `{"produk_varian_id": 9999, "pemasok_id": 1, "jumlah": 10}` | Sistem menolak dengan pesan jelas (varian tidak ditemukan) | 404 Not Found | **Pass** | - |
| 13 | Update (PUT) harga varian yang sudah ada | 1. Login sebagai admin<br>2. PUT /produk-varian/{id} dengan harga baru | PUT /produk-varian/1: `{"produk_id": 4, "berat": 5.0, "harga": 80000, "stok": 70}` | Harga varian berhasil diperbarui | 200 OK, harga berhasil diubah dari 75000 menjadi 80000 | **Pass** | - |
| 14 | Satu produk memiliki lebih dari satu varian berat | 1. Login sebagai admin<br>2. POST /produk-varian kedua untuk produk_id yang sama dengan berat berbeda | `{"produk_id": 4, "berat": 1.0, "harga": 20000, "stok": 100}` (produk_id 4 sudah punya varian 5kg sebelumnya) | Varian baru berhasil dibuat, produk_id 4 kini memiliki 2 varian (1kg dan 5kg) | 200 OK, varian baru berhasil dibuat dengan produk_id yang sama | **Pass** | - |
| 15 | Update (PUT) varian dengan produk_id yang tidak ada | 1. Login sebagai admin<br>2. PUT /produk-varian/{id} dengan produk_id yang tidak pernah dibuat | PUT /produk-varian/{id}: `{"produk_id": 999999, "berat": 1.0, "harga": 20000, "stok": 10}` | Sistem menolak dengan pesan jelas (404 "produk tidak ditemukan", atau minimal 422) | 500 Internal Server Error — pesan generik, tidak ada penjelasan penyebab (kode tidak mengecek produk_id sebelum update, ditolak oleh foreign key database) | **Bug** | Sudah di fix |
| 16 | Nama kategori melebihi batas panjang kolom (101 karakter) | 1. Login sebagai admin<br>2. POST /kategori dengan nama 101 karakter | `{"nama": "A x 101"}` | Sistem menolak (422), karena kolom database maksimal 100 karakter | [isi] — tidak ditolak dengan 422 (skema tidak punya max_length) | **Bug** | Sudah di fix  |
| 17 | Nama produk melebihi batas panjang kolom (151 karakter) | 1. Login sebagai admin<br>2. POST /produk dengan nama 151 karakter | `{"nama": "A x 151", "kategori_id": 1}` | Sistem menolak (422), karena kolom database maksimal 150 karakter | [isi] — tidak ditolak dengan 422 (skema tidak punya max_length) | **Bug** | Sudah di fix |
| 18 | Kontak pemasok hanya berisi spasi | 1. Login sebagai admin<br>2. POST /pemasok dengan kontak diisi spasi saja | `{"nama": "QA Kontak Spasi", "kontak": "   "}` | Sistem menolak (422), kontak tidak boleh kosong/spasi | 200 OK — kontak spasi diterima dan tersimpan (validasi hapus-spasi hanya dipasang di field nama, tidak di kontak) | **Bug** | Sudah di fix |
| 19 | Kontak pemasok melebihi batas panjang kolom (101 karakter) | 1. Login sebagai admin<br>2. POST /pemasok dengan kontak 101 karakter | `{"nama": "QA Kontak Panjang", "kontak": "A x 101"}` | Sistem menolak (422), karena kolom database maksimal 100 karakter | [isi] — tidak ditolak dengan 422 (skema tidak punya max_length) | **Bug** | Sudah di fix |
| 20 | Alasan penyesuaian stok melebihi batas panjang kolom (51 karakter) | 1. Login sebagai admin<br>2. POST /penyesuaian-stok dengan alasan 51 karakter | `{"produk_varian_id": 1, "jumlah": 1, "alasan": "A x 51"}` | Sistem menolak (422), karena kolom database maksimal 50 karakter | [isi] — tidak ditolak dengan 422 (skema tidak punya max_length) | **Bug** | Sudah di fix |


## C. Fitur Baru - Nama Produk Harus Unik (POST & PUT /produk)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 18 | Buat produk dengan nama yang sudah ada | 1. POST /produk dengan nama X<br>2. POST /produk lagi dengan nama X persis sama | `{"nama": "QA Unik", "kategori_id": 1}` (dikirim 2x) | Permintaan kedua ditolak (400) | 400 Bad Request — "Produk dengan nama 'QA Unik' sudah ada" | **Pass** | - |
| 19 | Buat produk dengan nama sama tapi beda huruf besar/kecil | 1. POST /produk nama "QA Unik"<br>2. POST /produk nama "qa unik" | `{"nama": "qa unik", "kategori_id": 1}` | (perilaku dikonfirmasi lewat pengujian) | 400 Bad Request — pengecekan duplikat TIDAK case-sensitive, "qa unik" dianggap sama dengan "QA Unik" | **Pass** | Perilaku sudah dikonfirmasi: validasi nama duplikat tidak case-sensitive (lebih ketat, bukan bug) |
| 20 | PUT ubah nama produk jadi nama yang sudah dipakai produk lain | 1. Buat 2 produk beda nama<br>2. PUT produk kedua, ganti namanya jadi sama dengan produk pertama | `{"nama": "<nama produk pertama>", "kategori_id": 1}` | Ditolak (400) | 400 Bad Request — "sudah ada" | **Pass** | - |

## D. Fitur Baru - Varian Kembar (satu produk tidak boleh 2 varian berat sama)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 21 | Buat varian dengan berat yang sudah ada di produk yang sama | 1. POST /produk-varian berat 3.0 kg<br>2. POST /produk-varian lagi berat 3.0 kg, produk sama | `{"produk_id": X, "berat": 3.0, "harga": 99999, "stok": 1}` | Ditolak (400) | 400 Bad Request — "Produk ini sudah punya varian 3.0 kg" | **Pass** | - |
| 22 | Buat varian dengan berat beda sangat tipis (floating point) | POST /produk-varian berat 3.0000001 kg, produk sudah punya varian 3.0 kg | `{"produk_id": X, "berat": 3.0000001, ...}` | Ditolak (400), dianggap sama (toleransi pembulatan) | 400 Bad Request | **Pass** | - |
| 23 | Varian berat sama tapi di PRODUK BERBEDA | POST /produk-varian berat 3.0 kg untuk produk lain (produk_id beda) | `{"produk_id": Y, "berat": 3.0, ...}` | Diterima (200), karena produk berbeda | 200 OK | **Pass** | - |
| 24 | PUT ubah berat varian jadi sama dengan varian lain di produk yang sama | PUT varian A (misal 3.1kg), ganti beratnya jadi 3.0kg padahal varian B (3.0kg) sudah ada di produk sama | `{"produk_id": X, "berat": 3.0, ...}` | Ditolak (400) | 400 Bad Request — "sudah punya varian 3.0 kg" | **Pass** | - |

## E. Fitur Baru - PUT /produk-varian: Stok Terkunci, Berat/Produk Terkunci Setelah Dipakai

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 25 | PUT varian, kirim field stok dengan nilai berbeda | PUT /produk-varian/{id} dengan stok diisi angka baru (misal 999) | `{"produk_id": X, "berat": 1.0, "harga": 10000, "stok": 999}` | Diterima (200), tapi stok TIDAK berubah (field diabaikan, stok cuma berubah lewat order/pengemasan/penyesuaian-stok) | 200 OK — stok di response tetap nilai lama, bukan 999 | **Pass** | Behavior baru: stok tidak lagi bisa diubah langsung lewat PUT |
| 26 | PUT varian ganti harga saja (tanpa ganti stok/berat/produk) | PUT /produk-varian/{id} dengan harga baru | `{"produk_id": X, "berat": 1.0, "harga": 12000, "stok": 1}` | Diterima (200), harga berubah | 200 OK | **Pass** | - |
| 27 | PUT ganti BERAT varian yang sudah pernah dipakai di order | 1. Buat order memakai varian tsb<br>2. PUT varian, ganti field berat | `{"produk_id": X, "berat": 2.5, "harga": ..., "stok": ...}` | Ditolak (400) | 400 Bad Request — "sudah dipakai di order atau pengemasan" | **Pass** | - |
| 28 | PUT ganti PRODUK_ID varian yang sudah pernah dipakai di order | PUT varian yang sudah dipakai order, ganti produk_id ke produk lain yang valid | `{"produk_id": <produk lain>, "harga": ..., "stok": ..., "berat": <tetap sama>}` | Ditolak (400) | 400 Bad Request — "sudah dipakai di order atau pengemasan" | **Pass** | - |
| 29 | PUT varian yang sudah dipakai, TAPI berat & produk_id tidak diubah | PUT varian yang sudah dipakai order, hanya ganti harga (berat & produk_id tetap sama) | `{"produk_id": X (tetap), "berat": 1.0 (tetap), "harga": 13000, "stok": 1}` | Diterima (200), karena berat & produk_id tidak berubah | 200 OK, harga berubah | **Pass** | - |
 

---
**Catatan kolom Keterangan:**
- **Sudah di fix** — bug ditemukan, dilaporkan, dan sudah diverifikasi ulang (regression test) hasilnya sesuai harapan.
- **Belum di fix** — bug ditemukan dan dilaporkan, tapi perbaikan dari tim backend belum tersedia/belum diverifikasi ulang.
- **Status Pass** Tidak ada bug sama sekali (perfect).  
