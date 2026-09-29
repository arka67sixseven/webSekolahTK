# Website TK Taman Indria Jetis

Situs resmi TK Taman Indria Jetis — Perguruan Tamansiswa, Jetis, Yogyakarta.

Dibangun dengan Next.js App Router, TypeScript, dan Tailwind CSS v4.

---

## Menjalankan secara lokal

Butuh Node.js 20 atau lebih baru.

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

Untuk menjalankan seperti produksi:

```bash
npm run build
npm run start
```

---

## Perintah yang tersedia

| Perintah              | Fungsi                                                        |
| --------------------- | ------------------------------------------------------------- |
| `npm run dev`         | Server pengembangan dengan hot reload                         |
| `npm run build`       | Build produksi, menghasilkan static HTML untuk semua halaman  |
| `npm run start`       | Menjalankan hasil build produksi                             |
| `npm run lint`        | ESLint, flat config Next.js                                   |
| `npm run typecheck`   | TypeScript tanpa emit, memastikan tidak ada tipe yang salah   |
| `npm run check:teks`  | Memeriksa teks Indonesia dari karakter asing dan kalimat rusak |
| `npm run verify`      | Menjalankan `check:teks`, `lint`, dan `typecheck` sekaligus   |
| `npm run sync:berita` | Mengambil posting Instagram dan menyimpan thumbnail-nya       |

`check:teks` dibuat karena proyek ini pernah mengandung teks korup dari
hasil generasi otomatis, misalnya `rasaasu`, `sedang Diajar`, dan
`AnakHacienda`. Pemeriksa ini menolak perubahan yang mengandung pola
seperti itu, tetapi **bukan** pemeriksa ejaan. Kalimat yang salah eja
tetap harus dibaca manusia.

---

## Struktur

```
app/
  page.tsx              Beranda
  profil/               Profil sekolah, sambutan, visi misi, prestasi
  metode/               Metode belajar
  kelas/                Kelompok usia, rombel, suasana kelas
  guru/                 Daftar guru dan pamong
  kegiatan/             Jadwal sehari, kokurikuler, manungsi
  rapor/                Rapor deskriptif dan contoh penulisan
  berita/               Daftar berita
  berita/[slug]/        Detail berita, dibangun saat build
  galeri/               Galeri kegiatan, bisa disaring per kategori
  kemitraan/            Bentuk kerja sama dengan orang tua
  kontak/               Alamat, telepon, jam buka
  ppdb/                 Pendaftaran peserta didik baru
  layout.tsx            Root layout, metadata, JSON-LD
  sitemap.ts robots.ts manifest.ts icon.png

components/             Komponen UI yang dipakai ulang
data/                   Semua isi halaman, dipisah dari komponen
scripts/                Perkakas pemeriksaan dan sinkronisasi
public/images/          Logo, foto, thumbnail berita
```

Aturan yang dipegang: `data/` hanya berisi data, `app/` dan
`components/` hanya berisi tampilan. Tidak ada kalimat yang ditulis
langsung di dalam komponen kecuali dari data.

---

## Mengganti data placeholder

**Situs ini belum siap tayang.** Banyak isi masih data sementara.

Sentinel-nya ada di `data/content-status.ts`:

```ts
export const usingPlaceholder = true;
```

Selama `usingPlaceholder` bernilai `true`, situs menampilkan pita
peringatan di setiap halaman. Untuk menyembunyikan pita tersebut
saat masih develops:

```bash
SHOW_PLACEHOLDER=0 npm run dev
```

Yang wajib diganti sebelum tayang:

| Isi                            | Berkas                    |
| ------------------------------ | ------------------------- |
| Domain resmi                   | `data/site.ts` → `url`    |
| Alamat, telepon, surel         | `data/site.ts` → `alamat`, `telepon`, `email` |
| Nama dan jabatan kepala TK     | `data/profil.ts`          |
| Nama guru dan struktur         | `data/profil.ts`          |
| Prestasi                       | `data/profil.ts`          |
| Kalender dan tanggal PPDB      | `data/tahun-ajar.ts`      |
| Foto kepala TK, guru, kelas    | `public/images/`          |
| Logo resmi                     | `public/images/logo/`     |
| Posting berita resmi           | `data/berita.generated.ts` |

Setelah semuanya diganti, ubah `usingPlaceholder` menjadi `false`.

### Peringatan tentang berita

`data/berita.generated.ts` berisi posting dari akun Instagram
**SMP Taman Dewasa Jetis**, bukan TK Taman Indria Jetis. Isinya masih
sekadar contoh struktur. Ganti dengan berita resmi TK sebelum tayang,
dan hapus baris `*.generated.ts` dari pengecualian di
`scripts/check-teks.mjs` supaya isinya ikut diperiksa.

---

## Tahun ajaran

Semua angka tahun berasal dari satu berkas, `data/tahun-ajar.ts`.
Web SMP punya masalah yang harus dihindari: tanggal berita, PPDB, dan
kalender akademik menulis tahun yang berbeda karena berasal dari tempat
yang berbeda.

Ganti satu tempat, seluruh situs ikut berubah.

---

## Sebelum deploy

1. `npm run verify`
2. `npm run build`
3. Ganti semua data placeholder di tabel di atas
4. Arahkan `data/site.ts` → `url` ke domain resmi
5. Jalankan ulang `npm run build` supaya sitemap dan Open Graph memakai domain yang benar
6. Deploy ke Vercel, atau host lain yang mendukung Next.js

Setelah deploy, periksa:

- `/sitemap.xml` dan `/robots.txt` memakai domain resmi
- `/manifest.webmanifest` memuat logo resmi
- Tautan WhatsApp dan peta membuka alamat yang benar
- Pita peringatan placeholder sudah tidak muncul
