# Test Case - Validasi Stok
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Stok (mencakup alur Pasokan: batch, panen, giling → stok beras jadi)
**Tester:** -
**Terakhir diupdate:** -

---

## A. Stok dari Alur Pasokan (Batch, Panen, Giling)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Status |
|----|-----------|--------------------|----------|------------------|--------|
| 1 | Input data panen dengan batch number baru | 1. Login admin<br>2. Input data panen baru dengan batch number unik | Data panen valid | Data tersimpan, batch baru muncul di sistem | Belum dites |
| 2 | Input batch number duplikat | 1. Input panen dengan batch number yang sudah ada | Batch number duplikat | Sistem menolak / memberi peringatan duplikasi | Belum dites |
| 3 | Proses giling mengurangi stok gabah & menambah stok beras | 1. Proses giling dari batch panen tertentu<br>2. Cek stok gabah dan stok beras jadi | Batch panen dengan jumlah tertentu | Stok gabah berkurang sesuai proses, stok beras bertambah sesuai hasil giling (rendemen) | Belum dites |
| 4 | Hasil akhir giling tercatat lengkap (jumlah, tanggal, batch asal) | 1. Selesaikan proses giling<br>2. Cek detail hasil di sistem | Data giling selesai | Hasil giling tercatat dengan batch asal yang bisa ditelusuri (traceability) | Belum dites |
| 5 | Batch dengan data giling tidak lengkap | 1. Coba proses giling tanpa isi field wajib (misal jumlah hasil) | Field wajib kosong | Sistem menolak proses, muncul validasi | Belum dites |

## B. Stok Produk Jadi (Beras) terhadap Order

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Status |
|----|-----------|--------------------|----------|------------------|--------|
| 6 | Stok berkurang otomatis setelah order berhasil | 1. Cek stok awal<br>2. Buat order dengan qty tertentu<br>3. Order berhasil diproses | Order valid | Stok berkurang sesuai qty order | Belum dites |
| 7 | Stok kembali setelah order dibatalkan | 1. Buat order<br>2. Batalkan order | Order dibatalkan | Stok kembali ke jumlah semula | Belum dites |
| 8 | Order dengan qty melebihi stok tersedia ditolak | 1. Cek stok tersedia<br>2. Buat order dengan qty > stok | Qty > stok | Order ditolak/muncul warning, stok tidak berkurang | Belum dites |
| 9 | Stok tidak boleh minus dalam kondisi apapun | 1. Lakukan beberapa order secara berurutan/bersamaan mendekati batas stok | Total qty order = / > stok | Stok berhenti di 0, tidak pernah minus | Belum dites |
| 10 | Update stok manual oleh admin langsung tersinkron | 1. Admin ubah jumlah stok secara manual di dashboard<br>2. Cek tampilan stok di public web & saat proses order | Perubahan stok manual | Perubahan tersinkron real-time/near real-time ke semua bagian sistem | Belum dites |
| 11 | Stok per varian/jenis produk terpisah dengan benar | 1. Cek stok untuk beberapa jenis/varian beras berbeda | Beberapa produk berbeda | Stok masing-masing produk tercatat & terupdate independen, tidak tercampur | Belum dites |
| 12 | Notifikasi/indikator stok menipis atau habis | 1. Kurangi stok hingga mendekati/mencapai 0<br>2. Cek dashboard admin & tampilan produk di public web | Stok rendah/habis | Muncul indikator "stok menipis"/"habis" di admin dan/atau katalog publik | Belum dites |

---
**Catatan:** Test case bagian A akan lebih detail lagi setelah alur "proses giling" dan rumus rendemen (gabah → beras) dikonfirmasi ke tim backend/frontend.
