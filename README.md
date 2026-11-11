# Digital Kampus — Simulasi Kolaborasi GitHub & DevOps

Repository contoh untuk simulasi pengembangan aplikasi layanan akademik universitas. Fokus demonstrasi awal adalah halaman **Kartu Rencana Studi (KRS)** dan alur kolaborasi GitHub: Issue → Branch → Commit → Pull Request → Code Review → GitHub Actions → Merge.

> **Catatan:** Ini adalah proyek demonstrasi front-end statis. Data mahasiswa dan mata kuliah adalah data contoh, belum terhubung ke database, autentikasi, sistem KRS kampus, payment gateway, ataupun layanan cloud produksi.

## Isi repository

- `index.html` — halaman utama untuk GitHub Pages.
- `krs.html` — halaman contoh KRS (alamat alternatif).
- `assets/css/style.css` — tampilan responsif untuk laptop, tablet, dan ponsel serta gaya cetak.
- `assets/js/app.js` — interaksi tombol cetak dan perhitungan total SKS.
- `.github/workflows/ci.yml` — pemeriksaan otomatis struktur dan konten halaman menggunakan GitHub Actions.
- `.github/ISSUE_TEMPLATE/` — template permintaan fitur dan laporan bug.
- `.github/PULL_REQUEST_TEMPLATE.md` — template Pull Request.
- `docs/PANDUAN_KOLABORASI.md` — langkah simulasi dua akun GitHub.

## Menjalankan secara lokal

1. Unduh atau clone repository.
2. Buka folder proyek di Visual Studio Code.
3. Buka `index.html` melalui browser (atau gunakan ekstensi Live Server).
4. Coba tombol **Cetak KRS**. Browser akan membuka dialog cetak; pilih **Save as PDF** untuk menyimpan PDF.

## Menyiapkan GitHub

Pemilik repository: `reygreshasibuan`  
Akun kolaborator: `dikycandrasitumeang-blip`

1. Buat repository bernama `digital-kampus` di akun pemilik.
2. Unggah seluruh isi folder proyek ini ke branch `main`.
3. Tambahkan akun `dikycandrasitumeang-blip` melalui **Settings → Collaborators** (atau **Collaborators and teams / Manage access**, sesuai tampilan GitHub).
4. Akun kolaborator menerima undangan.
5. Buat branch `develop` dari `main`.
6. Ikuti `docs/PANDUAN_KOLABORASI.md` untuk mengerjakan fitur melalui branch dan Pull Request.

## Branch yang digunakan

- `main` — versi utama/release.
- `develop` — integrasi perubahan yang akan diuji.
- `feature/nama-fitur` — pekerjaan fitur.
- `bugfix/nama-perbaikan` — pekerjaan perbaikan bug.

## Pemeriksaan otomatis

Workflow `CI Digital Kampus` berjalan saat Pull Request menuju `develop` atau `main`, dan saat push ke `main`. Workflow memeriksa apakah file KRS, CSS, dan JavaScript tersedia serta memeriksa beberapa penanda dasar pada halaman.

Lihat hasilnya pada tab **Actions** di repository GitHub.

## Mempublikasikan website dengan GitHub Pages

1. Pastikan `index.html`, `assets/css/style.css`, dan `assets/js/app.js` berada di root/struktur folder repository seperti pada paket ini.
2. Pada repository GitHub, buka **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
5. Tunggu proses deployment selesai. Buka kembali **Settings → Pages** dan klik **Visit site**.

Untuk repository bernama `digital-kampus` pada akun `reygreshasibuan`, alamat project site umumnya `https://reygreshasibuan.github.io/digital-kampus/`.

> GitHub Pages hanya meng-host konten statis HTML, CSS, dan JavaScript. File PHP dan koneksi MySQL tidak dijalankan oleh GitHub Pages. Website ini adalah demo front-end dengan data contoh, bukan aplikasi akademik dinamis. Jangan unggah password, token, data mahasiswa asli, atau rahasia lainnya ke repository publik.
