# Status Tayang — Website TK Taman Indria Jetis

Dokumen ini mencatat apa yang sudah diverifikasi dan apa yang masih
menunggu data resmi. Diperbarui: 29 September 2026.

---

## Ringkasan

Secara teknis, program ini sudah berjalan. Yang belum ada adalah data
resmi: nama orang, alamat, telepon, foto, dan berita. Logo sudah terpasang.

**Situs ini belum boleh tayang.** Pita peringatan placeholder masih
aktif secara sengaja.

---

## Yang sudah diverifikasi

Pemeriksaan dijalankan dengan `npm run verify` lalu `npm run build`.

| Pemeriksaan                     | Hasil                                    |
| ------------------------------- | ---------------------------------------- |
| `npm run check:teks`            | Bersih                                   |
| `npm run lint`                  | Bersih                                   |
| `npm run typecheck`             | Bersih                                   |
| `npm run build`                 | Sukses, tanpa warning                    |
| Jumlah halaman statis           | 33 (12 halaman + 16 berita + sisanya)    |

Pemeriksaan dilakukan lewat browser sungguhan, bukan hanya dengan
membaca kode:

| Yang diperiksa                          | Hasil                          |
| --------------------------------------- | ------------------------------ |
| Semua 12 halaman merespons 200           | Ya                             |
| Tepat satu `h1` per halaman             | Ya, 12 dari 12                 |
| Lompatan level heading                  | Tidak ada                      |
| Gambar tanpa `alt`                      | Tidak ada                      |
| Tautan tanpa nama yang bisa dibaca      | Tidak ada                      |
| Luapan horizontal di 1024/1280/1440px   | Tidak ada                      |
| Sub-navigasi lengket                    | Menempel di bawah header       |
| Menu mobile buka dan tutup              | Berfungsi                     |
| Tombol Escape menutup menu              | Fokus kembali ke tombol        |
| `/sitemap.xml`                          | 28 URL                         |
| `/robots.txt`                           | Ada                            |
| `/manifest.webmanifest`                 | Ada                            |
| Data terstruktur JSON-LD                | Ada di semua halaman           |

---

## Yang masih perlu diisi

### Wajib, tanpa ini situs tidak boleh tayang

- [ ] **Domain resmi** — `data/site.ts` → `url`. Sekarang masih
      `https://tk-taman-indria-jetis.vercel.app`. Dipakai oleh
      `metadataBase`, sitemap, robots, Open Graph, dan JSON-LD.
- [ ] **Alamat, telepon, surel** — `data/site.ts`. Sekarang disalin dari
      web SMP Taman Dewasa Jetis di kompleks yang sama, jadi kemungkinan
      besar salah.
- [ ] **Nama dan jabatan kepala TK** — `data/profil.ts`. Sekarang
      "Sarmiati, S.Pd." sebagai contoh.
- [ ] **Struktur organisasi** — `data/profil.ts`. Empat nama masih contoh.
- [ ] **Prestasi** — `data/profil.ts`. Tiga prestasi masih contoh.
- [ ] **Logo resmi** — `public/images/logo/`. Logo yang tampil sekarang
      adalah logo asli Taman Indria Jetis (dipotong dari gambar hasil
      pencarian Google, latar hitam sudah dihilangkan). Kalau sekolah punya
      berkas logo resmi dengan latar transparan, ganti `logo.png`,
      `logo-mark.png`, dan `app/icon.png` untuk kualitas cetak yang lebih
      baik.
- [ ] **Foto kepala TK, guru, kelas** — `public/images/`.
- [ ] **Kalender dan tanggal PPDB** — `data/tahun-ajar.ts`.
- [ ] **Berita resmi** — `data/berita.generated.ts` masih berisi posting
      dari akun Instagram SMP Taman Dewasa Jetis.

### Sebaiknya diisi

- [ ] Foto kegiatan untuk galeri. `data/galeri.ts` sudah punya sembilan
      keterangan kegiatan, kolom `gambar` masih `null`.
- [ ] Sertifikat akreditasi, dipakai di `data/site.ts` → `akreditasi`.

---

## Setelah semua data diganti

1. Ganti isi file di `data/` sesuai daftar di atas.
2. Taruh foto di `public/images/`, lalu perbarui nama berkas di `data/`.
3. Ubah `data/content-status.ts`:

   ```ts
   export const usingPlaceholder = false;
   ```

4. Jalankan `npm run verify`.
5. Jalankan `npm run build`.
6. Deploy, lalu periksa ulang `/sitemap.xml` dan `/robots.txt` memakai
   domain resmi.

---

## Catatan teknis yang perlu diketahui

### Tahun ajaran punya satu sumber

Semua angka tahun berasal dari `data/tahun-ajar.ts`. Web SMP pernah
memiliki tanggal berita 2026, PPDB 2024/2025, dan kalender akademik
2023-2024 karena ketiganya ditulis di tempat berbeda. Sistem ini
mencegah hal itu berulang: ganti satu berkas, seluruh situs berubah.

### Alamat ditulis per bagian

`site.alamat` di `data/site.ts` menyimpan jalan, kelurahan, kecamatan,
kota, provinsi, dan kode pos secara terpisah, bukan satu kalimat
panjang. Alamat yang ditampilkan dan data terstruktur JSON-LD keduanya
diturunkan dari objek yang sama, jadi tidak mungkin berbeda.

### Pemeriksa teks bukan pemeriksa ejaan

`npm run check:teks` menangkap karakter asing, campuran bahasa Inggris,
dan pola camelCase. Proyek ini pernah memuat teks seperti `rasaasu`,
`sedang Diajar`, `AnakHacienda`, dan `menguncit` yang lolos typecheck
dan lint. Pemeriksa teks dibuat karena itu.

Batasnya: pemeriksa ini **tidak** memeriksa ejaan. Kalimat yang
salah eja atau tidak masuk akal tetap harus dibaca manusia sebelum
tayang. Berkas yang tidak diperiksa: `*.generated.ts` dan `README.md`.

### Galeri dirender di server per permintaan

Halaman `/galeri` memakai `searchParams` untuk saringan kategori, jadi
halaman ini bukan static. Sisa halaman seluruhnya static HTML.

---

## Berkas yang perlu diketahui

| Berkas                    | Isi                                              |
| ------------------------- | ------------------------------------------------ |
| `data/site.ts`            | Identitas, kontak, alamat, menu, tahun PPDB       |
| `data/tahun-ajar.ts`      | Satu-satunya sumber angka tahun                    |
| `data/profil.ts`          | Sambutan, visi misi, sejarah, sarana, struktur, prestasi |
| `data/metode.ts`          | Empat metode belajar                              |
| `data/kelas.ts`           | Kelompok usia, rombel, suasana kelas              |
| `data/kegiatan.ts`        | Jadwal sehari, kokurikuler                        |
| `data/rapor.ts`           | Aspek penilaian rapor                             |
| `data/contoh-rapor.ts`    | Contoh kalimat rapor yang baik dan yang dihindari |
| `data/ppdb.ts`            | Syarat, tahapan, FAQ pendaftaran                  |
| `data/kemitraan.ts`       | Bentuk kerja sama dengan orang tua                |
| `data/galeri.ts`          | Daftar kegiatan untuk galeri                      |
| `data/berita.generated.ts`| Posting Instagram, **dari akun SMP**              |
| `data/content-status.ts`  | Sakelar tampilan placeholder                      |
