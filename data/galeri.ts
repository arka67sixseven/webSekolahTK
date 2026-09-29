/**
 * GALERI KEGIATAN
 * ===============
 *
 * Daftar kegiatan untuk galeri. Berkas gambarnya belum tersedia,
 * jadi galeri memakai PlaceholderFoto sampai foto asli masuk.
 * Masih data sementara. Ganti sebelum situs tayang.
 */

export type KategoriGaleri = "Bermain" | "Seni" | "Kokurikuler" | "Ruang Kelas";

export type FotoGaleri = {
  id: string;
  judul: string;
  kategori: KategoriGaleri;
  /** Path berkas asli. null selama foto belum tersedia. */
  gambar: string | null;
  keterangan: string;
};

export const kategoriGaleri: KategoriGaleri[] = [
  "Bermain",
  "Seni",
  "Kokurikuler",
  "Ruang Kelas",
];

export const galeri: FotoGaleri[] = [
  {
    id: "balok",
    judul: "Susun balok bersama",
    kategori: "Bermain",
    gambar: null,
    keterangan: "Anak menyusun balok menjadi jembatan dan menimbang tinggi lebarnya.",
  },
  {
    id: "pasar",
    judul: "Bermain peran pasar",
    kategori: "Bermain",
    gambar: null,
    keterangan: "Anak bergantian peran dan bernegosiasi untuk mendapatkan barang.",
  },
  {
    id: "menggambar",
    judul: "Menggambar bebas",
    kategori: "Seni",
    gambar: null,
    keterangan: "Anak membuat goresan dan menamai karyanya sendiri.",
  },
  {
    id: "tanah-liat",
    judul: "Menggerakkan tanah liat",
    kategori: "Seni",
    gambar: null,
    keterangan: "Anak mencetak dan membentuk adonan dengan tangan sendiri.",
  },
  {
    id: "musik",
    judul: "Bermain irama",
    kategori: "Kokurikuler",
    gambar: null,
    keterangan: "Anak bergerak mengikuti nada dan berani tampil di depan teman.",
  },
  {
    id: "berlari",
    judul: "Bermain di halaman",
    kategori: "Kokurikuler",
    gambar: null,
    keterangan: "Anak berlari, melompat, dan memanjat tangga bermain.",
  },
  {
    id: "sudut-baca",
    judul: "Sudut cerita",
    kategori: "Ruang Kelas",
    gambar: null,
    keterangan: "Rak buku dan bantal yang terjangkau dari posisi duduk anak.",
  },
  {
    id: "sudut-bangun",
    judul: "Sudut bangunan",
    kategori: "Ruang Kelas",
    gambar: null,
    keterangan: "Kotak bahan alam berisi pasir, daun kering, dan batu.",
  },
  {
    id: "makan-bersama",
    judul: "Makan bersama",
    kategori: "Kokurikuler",
    gambar: null,
    keterangan: "Anak makan sendiri di meja yang dirapikan bersama setelahnya.",
  },
];
