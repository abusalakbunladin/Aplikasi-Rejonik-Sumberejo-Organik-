# Test Case - Alur Order
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Order (Client/Reseller & Admin Dashboard)
**Tester:** -
**Terakhir diupdate:** -

---

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Status |
|----|-----------|--------------------|----------|------------------|--------|
| 1 | Order berhasil dibuat dengan data valid (client) | 1. Buka form order di public web<br>2. Isi produk, qty, data pemesan, alamat<br>3. Submit order | Semua field diisi valid | Order tersimpan, muncul notifikasi sukses, order muncul di dashboard admin | Belum dites |
| 2 | Order gagal jika field wajib kosong | 1. Buka form order<br>2. Kosongkan salah satu field wajib (misal nama/alamat)<br>3. Submit | Field wajib dikosongkan | Sistem menolak submit, muncul pesan error/validasi | Belum dites |
| 3 | Order dengan qty 0 | 1. Isi form order<br>2. Set qty = 0<br>3. Submit | Qty = 0 | Order ditolak, muncul pesan error qty tidak valid | Belum dites |
| 4 | Order dengan qty negatif | 1. Isi form order<br>2. Set qty = -1<br>3. Submit | Qty = -1 | Order ditolak, muncul pesan error | Belum dites |
| 5 | Order dengan qty melebihi stok tersedia | 1. Cek stok produk saat ini<br>2. Isi qty lebih besar dari stok<br>3. Submit | Qty > stok | Order ditolak / muncul warning stok tidak cukup | Belum dites |
| 6 | Order dari reseller vs client (jika beda alur/harga) | 1. Buat order sebagai client<br>2. Buat order sebagai reseller<br>3. Bandingkan hasil | Role client & reseller | Alur/harga sesuai ketentuan masing-masing role | Belum dites |
| 7 | Perubahan status order oleh admin | 1. Login admin dashboard<br>2. Ubah status order: pending → diproses → selesai | Order yang sudah masuk | Status berubah sesuai urutan, histori status tercatat | Belum dites |
| 8 | Order dibatalkan (dari pending) | 1. Buat order<br>2. Batalkan order sebelum diproses | Order status pending | Order berubah jadi "dibatalkan", stok yang sempat tertahan (jika ada) kembali normal | Belum dites |
| 9 | Order dibatalkan di tengah proses | 1. Ubah status order jadi "diproses"<br>2. Batalkan order | Order status diproses | Sistem menangani pembatalan dengan benar, stok & laporan ikut ter-update | Belum dites |
| 10 | Order ganda/bersamaan (concurrent) untuk produk & stok sama | 1. Simulasikan 2 order masuk hampir bersamaan untuk produk dengan stok terbatas | 2 order, total qty > stok | Sistem tidak mengizinkan stok minus; salah satu order ditolak/antre | Belum dites |
| 11 | Order dengan format data tidak valid | 1. Isi field dengan format salah (misal nomor HP huruf, email tanpa "@") | Data format salah | Sistem menolak dan menampilkan pesan validasi format | Belum dites |
| 12 | Riwayat order tampil dengan benar di dashboard admin | 1. Buat beberapa order<br>2. Cek list order di admin dashboard | Beberapa order dengan status berbeda | Semua order tampil lengkap dengan status & detail yang akurat | Belum dites |
| 13 | Order tidak bisa diubah/dihapus sembarangan setelah selesai | 1. Selesaikan sebuah order<br>2. Coba edit/hapus order tsb | Order status selesai | Sistem membatasi perubahan pada order yang sudah selesai | Belum dites |
