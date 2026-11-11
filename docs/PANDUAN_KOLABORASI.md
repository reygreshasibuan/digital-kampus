# Panduan Simulasi Kolaborasi Dua Akun GitHub

## Akun dan peran simulasi

- Pemilik repository: `reygreshasibuan` — Product Owner dan Operations.
- Akun kolaborator: `dikycandrasitumeang-blip` — Developer A.
- Developer B / reviewer dan Tester / QA dapat diperankan bergantian oleh salah satu akun untuk latihan. Untuk alur dua akun yang paling sederhana, pemilik repository menjadi reviewer dan kolaborator menjadi developer.

## A. Persiapan oleh pemilik repository

1. Login ke akun `reygreshasibuan`.
2. Buat repository `digital-kampus` (boleh Public untuk latihan).
3. Unggah semua isi paket proyek ke branch `main`, termasuk folder tersembunyi `.github`.
4. Buka Settings → Collaborators / Manage access.
5. Undang akun `dikycandrasitumeang-blip` sebagai collaborator.
6. Akun kolaborator menerima undangan.
7. Buat branch `develop` dari `main` melalui menu Branches atau terminal:

```bash
git switch main
git pull origin main
git switch -c develop
git push -u origin develop
```

## B. Pekerjaan oleh akun kolaborator (Developer A)

Di komputer kolaborator, clone repository:

```bash
git clone https://github.com/reygreshasibuan/digital-kampus.git
cd digital-kampus
git switch develop
git pull origin develop
git switch -c feature/cetak-krs
```

Buka `krs.html`, `assets/css/style.css`, atau `assets/js/app.js` untuk membuat perubahan demonstrasi. Contoh: ubah teks deskripsi, tambahkan mata kuliah contoh, atau perbaiki tampilan halaman.

Kirim perubahan:

```bash
git add .
git commit -m "feat: perbarui halaman cetak KRS"
git push -u origin feature/cetak-krs
```

## C. Membuat Pull Request

1. Buka repository di GitHub menggunakan akun kolaborator.
2. Pilih Pull requests → New pull request.
3. Pilih **base: `develop`** dan **compare: `feature/cetak-krs`**.
4. Isi judul, ringkasan, langkah pengujian, serta nomor Issue jika ada.
5. Buat Pull Request.

## D. Review oleh pemilik repository

1. Pemilik membuka Pull Request.
2. Periksa tab Files changed.
3. Berikan komentar bila perlu; pilih Request changes untuk meminta revisi.
4. Jika perubahan benar, pilih Approve (pastikan menggunakan akun reviewer yang berbeda dari pembuat PR apabila ingin mensimulasikan review independen).
5. Pastikan workflow **CI Digital Kampus** berstatus berhasil.
6. Merge Pull Request ke `develop`.

## E. Pengujian dan rilis simulasi

1. Tester memeriksa `krs.html` di browser dan mencoba tombol Cetak KRS.
2. Jika ditemukan bug, buat Issue dengan template Laporan bug.
3. Developer membuat branch `bugfix/nama-bug`, memperbaiki bug, lalu mengajukan Pull Request ke `develop`.
4. Setelah perubahan dinyatakan siap, buat Pull Request dari `develop` ke `main`.
5. Pemilik repository memeriksa dan menyetujui rilis.
6. Setelah merge ke `main`, buat Release dengan tag contoh `v1.1.0`.

## F. Bukti screenshot untuk laporan

Ambil screenshot dari repository milik kelompok sendiri:

- Halaman repository `digital-kampus`.
- Halaman Collaborators yang menunjukkan anggota.
- Daftar branch `main`, `develop`, dan `feature/cetak-krs`.
- Issue fitur cetak KRS.
- Commit dari akun kolaborator.
- Pull Request menuju `develop`.
- Review / persetujuan pemilik repository.
- Tab Actions yang menunjukkan CI berhasil.
- Issue bug dan Pull Request perbaikannya (jika dilakukan).
- Pull Request `develop` ke `main` dan Release.

## Catatan penting

- Jangan menaruh password akun, token GitHub, API key, data mahasiswa asli, atau informasi pembayaran asli di repository.
- Nomor Issue dan Pull Request ditentukan otomatis oleh GitHub; gunakan nomor aktual, jangan memaksakan nomor tertentu dari contoh makalah.
- Workflow CI di paket ini hanya melakukan pemeriksaan dasar file dan teks HTML. Ini bukan pengujian keamanan, pengujian beban, atau deployment ke cloud.
- Halaman KRS adalah demonstrasi front-end statis. Belum ada backend, database, login, validasi KRS nyata, atau integrasi layanan akademik.
