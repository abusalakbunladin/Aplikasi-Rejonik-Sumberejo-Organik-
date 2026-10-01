# Test Case - Fitur & Aturan Baru
**Proyek:** Aplikasi Rejonik Sumberejo Organik
**Area:** Rate Limiting, CAPTCHA, Order Kedaluwarsa, wa_link
**Tester:** -
**Terakhir diupdate:** 1 Oktober 2026

---

## A. Rate Limiting - Endpoint POST /login (maks 10 percobaan/menit per IP)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 1 | Percobaan login ke-1 s.d. ke-10 dalam 1 menit (password salah) | Kirim 10x POST /login dengan password salah berturut-turut dalam < 1 menit | `{"username": "admin", "password": "salah"}` | Semua 10 percobaan diproses normal (401, bukan diblokir) | 401 Unauthorized untuk ke-10nya | **Pass** | - |
| 2 | Percobaan login ke-11 dalam window 1 menit yang sama | Kirim 1x POST /login lagi (percobaan ke-11, password salah) | `{"username": "admin", "password": "salah"}` | Ditolak (429 Too Many Requests), ada header Retry-After, pesan menyebut "Terlalu banyak" | 429 Too Many Requests, header Retry-After ada, pesan sesuai | **Pass** | - |
| 3 | Login dengan password BENAR saat masih kena limit | Kirim 1x POST /login dengan username & password yang benar, saat limit masih aktif | `{"username": "admin", "password": "<benar>"}` | Tetap ditolak (429), walau kredensialnya benar — ini pelindung brute-force | 429 Too Many Requests | **Pass** | Membuktikan proteksi bekerja di level request, bukan di level validasi kredensial |

## B. Rate Limiting - Endpoint POST /order (maks 10 request/menit per IP)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 4 | Order ke-1 s.d. ke-10 dalam 1 menit | Kirim 10x POST /order berturut-turut dalam < 1 menit, stok mencukupi | items valid | Semua 10 diterima (200) | 200 OK untuk ke-10nya | **Pass** | - |
| 5 | Order ke-11 dalam window 1 menit yang sama | Kirim 1x POST /order lagi | items valid | Ditolak (429), ada header Retry-After | 429 Too Many Requests | **Pass** | - |
| 6 | Order ke-12 (masih dalam periode blokir) | Kirim 1x POST /order lagi | items valid | Masih ditolak (429) | 429 Too Many Requests | **Pass** | - |
| 7 | Stok TIDAK berkurang untuk order yang diblokir rate limit | Cek stok varian setelah percobaan #11 dan #12 yang diblokir | - | Stok tetap sama seperti setelah 10 order sukses saja (tidak ikut berkurang untuk yang diblokir) | Stok sesuai 10 order yang berhasil (contoh: stok awal 50, tersisa 40 setelah 10 order qty 1) | **Pass** | - |

**Catatan konfigurasi:** limiter login dan limiter order **terpisah** (jatahnya sendiri-sendiri), jadi menghabiskan limit salah satunya tidak memengaruhi yang lain. Limit ini diatur lewat `.env`: `RATE_LIMIT_AKTIF` (default true), `RATE_LIMIT_LOGIN_MAKS` dan `RATE_LIMIT_ORDER_MAKS` (default 10, per 60 detik). **Catatan penting untuk testing:** hitungan limit berlaku akumulatif untuk SEMUA percobaan ke endpoint yang sama dalam 1 menit terakhir, termasuk percobaan dari sesi/folder test case lain — kalau regression test rutin ingin dijalankan cepat tanpa terganggu limit ini, set `RATE_LIMIT_AKTIF=false` khusus di `.env` environment testing.

## C. wa_link Nullable Saat ADMIN_WA_NUMBER Tidak Terisi

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 8 | Buat order saat ADMIN_WA_NUMBER kosong di .env | 1. Pastikan ADMIN_WA_NUMBER kosong di .env<br>2. POST /order dengan data valid | - | Order tetap berhasil dibuat (200), field wa_link bernilai `null` (bukan link rusak seperti `https://wa.me/?text=...`) | 200 OK, `"wa_link": null` | **Pass** | Dulu bug (link rusak tanpa nomor tujuan), sudah di fix |
| 9 | Buat order saat ADMIN_WA_NUMBER terisi nomor valid | 1. Isi ADMIN_WA_NUMBER dengan nomor valid di .env, restart server<br>2. POST /order dengan data valid | - | wa_link terbentuk normal berformat `https://wa.me/<nomor>?text=...`, pesan memuat Order ID dan nama pembeli | (perlu diuji ulang setelah ADMIN_WA_NUMBER diisi) | - | - |

## D. Order Otomatis Kedaluwarsa (butuh waktu/konfigurasi .env khusus)

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 10 | Struktur status_konfirmasi valid mencakup nilai "kedaluwarsa" | GET /order, cek field status_konfirmasi tiap order | - | Semua order punya status_konfirmasi salah satu dari: menunggu, dikonfirmasi, ditolak, kedaluwarsa | 200 OK, struktur valid | **Pass** | - |
| 11 | Order "menunggu" otomatis jadi "kedaluwarsa" setelah ORDER_KEDALUWARSA_JAM | 1. Set ORDER_KEDALUWARSA_JAM ke nilai kecil (misal 0.02 jam ~ 1 menit) di .env environment testing, restart server<br>2. Buat 1 order baru, JANGAN dikonfirmasi/ditolak<br>3. Tunggu beberapa menit<br>4. GET /order lagi | - | Status order itu berubah otomatis jadi "kedaluwarsa", dan stok variannya kembali seperti semula | **Belum diuji** — butuh koordinasi dengan tim backend untuk ubah ORDER_KEDALUWARSA_JAM di environment testing | **Belum diuji** | Minta tim backend bantu set env khusus untuk pengujian ini |

## E. CAPTCHA Opsional (Cloudflare Turnstile) pada POST /order

| No | Test Case | Langkah Pengujian | Data Uji | Expected Result | Actual Result | Status | Keterangan |
|----|-----------|--------------------|----------|------------------|----------------|--------|------------|
| 12 | Order tanpa header X-Captcha-Token saat CAPTCHA_AKTIF=false (default) | POST /order tanpa header X-Captcha-Token | - | Diterima normal (200), captcha tidak diwajibkan | 200 OK | **Pass** | - |
| 13 | Order tanpa header X-Captcha-Token saat CAPTCHA_AKTIF=true | (Perlu CAPTCHA_AKTIF=true di .env) POST /order tanpa header X-Captcha-Token | - | Ditolak (400), pesan "Verifikasi CAPTCHA diperlukan" | **Belum diuji** — CAPTCHA masih nonaktif di environment saat ini | **Belum diuji** | Uji ulang kalau tim backend mengaktifkan CAPTCHA_AKTIF di environment testing |
| 14 | Order dengan X-Captcha-Token asal/sembarangan saat CAPTCHA_AKTIF=true | POST /order dengan header X-Captcha-Token berisi string sembarangan | `X-Captcha-Token: abc123` | Ditolak (400), pesan "Verifikasi CAPTCHA gagal" | **Belum diuji** | **Belum diuji** | - |

---
**Catatan kolom Keterangan:**
- **Sudah di fix** — bug ditemukan, dilaporkan, dan sudah diverifikasi ulang (regression test) hasilnya sesuai harapan.
- **Belum di fix** — bug ditemukan dan dilaporkan, tapi perbaikan dari tim backend belum tersedia/belum diverifikasi ulang.
- **Belum diuji** — test case butuh kondisi/konfigurasi khusus yang belum tersedia di environment testing saat ini.
- **Status Pass** Tidak ada bug sama sekali (perfect).