import { tahunAjaran } from "./tahun-ajar";

/**
 * Identitas utama situs. Hampir semua teks, nomor, dan tautan website
 * berasal dari sini.
 *
 * PENTING: `url` masih berupa placeholder. Ganti dengan domain resmi
 * TK Taman Indria Jetis sebelum situs tayang — nilainya dipakai oleh
 * metadataBase, sitemap, Open Graph, dan semua tautan absolut.
 */
export const site = {
  nama: "TK Taman Indria Jetis",
  namaLengkap: "TK Taman Indria Jetis Yogyakarta",
  namaPendek: "TK Taman Indria",
  institusi: "Perguruan Tamansiswa",

  tagline: "Bermain, Belajar, Tumbuh Bersama",

  /**
   * Semboyan Ki Hadjar Dewantara. Dipakai bersama seluruh sistem
   * Taman Siswa, termasuk oleh web sibling SMP Taman Dewasa Jetis.
   */
  semboyan:
    "Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani",

  /**
   * Inti cara mengajar Taman Indria: pamong membimbing, bukan memaksa.
   * Penjelasan lengkapnya ada di `data/metode.ts`.
   */
  kutipanIndria:
    "Taman Indria mendidik anak dengan cara membimbing, bukan memaksa.",

  // CATATAN: alamat, telepon, dan email di bawah masih data sementara
  // yang disalin dari web SMP Taman Dewasa Jetis (satu kompleks Tamansiswa
  // Jetis). Ganti dengan data resmi TK sebelum situs tayang.
  //
  // Alamat ditulis per bagian, bukan satu kalimat panjang, karena JSON-LD
  // untuk Google Maps butuh jalan, locality, region, dan kode pos terpisah.
  // `alamat` dan `alamatPendek` diturunkan dari bagian-bagian ini supaya
  // tidak ada dua sumber yang bisa berbeda.
  alamat: {
    jalan: "Jl. A.M. Sangaji No. 39",
    kelurahan: "Cokrodiningratan",
    kecamatan: "Jetis",
    kota: "Yogyakarta",
    provinsi: "Daerah Istimewa Yogyakarta",
    kodePos: "55573",
    negara: "ID",
  },

  telepon: "(0274) 587022",
  teleponTel: "+622518486667",
  whatsapp: "+6281390252587",
  email: "info@tktamanindriajetis.sch.id",

  /** Domain produksi Vercel. Ganti kalau memakai domain khusus. */
  url: "https://websekolah-tk.vercel.app",

  petaKunci: "TK Taman Indria Jetis Yogyakarta",

  logo: "/images/logo/logo.png",
  logoRingkas: "/images/logo/logo-mark.png",
  akreditasi: "/images/logo/akreditasi.png",

  jamBuka: [
    { hari: "Senin - Jumat", jam: "07.30 - 13.00 WIB" },
    { hari: "Sabtu", jam: "07.30 - 11.00 WIB (kelas orienta)" },
    { hari: "Minggu & hari libur nasional", jam: "Tutup" },
  ],
};

/** Alamat satu baris untuk ditampilkan di halaman kontak. */
export const alamatSatuBaris = `${site.alamat.jalan}, ${site.alamat.kelurahan}, ${site.alamat.kecamatan}, Kota ${site.alamat.kota}`;

/** Alamat singkat untuk meta description. */
export const alamatPendek = `${site.alamat.kelurahan}, ${site.alamat.kecamatan}, ${site.alamat.kota}`;

export const tahunSekarang = tahunAjaran.label;

/** Tahun ajaran yang menjadi target pendaftar PPDB, bukan tahun ajaran berjalan. */
export const tahunPpdb = tahunAjaran.ppdb.tahun;

/** Tanggal PPDB, diambil dari sumber tunggal di `tahun-ajar.ts`. */
export const ppdbMulai = tahunAjaran.ppdb.mulai;
export const ppdbSelesai = tahunAjaran.ppdb.selesai;
export const ppdbPengumuman = tahunAjaran.ppdb.pengumuman;
export const ppdbGelombang = tahunAjaran.ppdb.gelombang;

/** Tautan WhatsApp siap pakai. */
export const linkWa = `https://wa.me/${site.whatsapp.replace("+", "")}`;

/** Peta Google Maps tanpa API key. */
export const linkPeta = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.petaKunci,
)}`;

export type SubMenu = { label: string; href: string };

export type MenuItem = {
  label: string;
  href: string;
  children?: SubMenu[];
};

/**
 * Pohon navigasi. Sekaligus menjadi sumber data untuk sub-nav lengket
 * di halaman profil dan metode.
 */
export const nav: MenuItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil",
    children: [
      { label: "Sambutan Kepala TK", href: "/profil#sambutan" },
      { label: "Visi dan Misi", href: "/profil#visimisi" },
      { label: "Sejarah Singkat", href: "/profil#sejarah" },
      { label: "Sarana dan Prasarana", href: "/profil#sarana" },
      { label: "Struktur Organisasi", href: "/profil#struktur" },
      { label: "Prestasi", href: "/profil#prestasi" },
    ],
  },
  {
    label: "Metode",
    href: "/metode",
    children: [
      { label: "Mengapa Among", href: "/metode#among" },
      { label: "Dolanan Anak", href: "/metode#dolanan" },
      { label: "Panca Indra", href: "/metode#panca-indra" },
      { label: "Wira-wiri", href: "/metode#wira-wiri" },
      { label: "Kemitraan dengan Orang Tua", href: "/kemitraan" },
    ],
  },
  {
    label: "Kelas",
    href: "/kelas",
    children: [
      { label: "Kelompok usia", href: "/kelas#kelompok" },
      { label: "Rombongan Belajar", href: "/kelas#rombel" },
      { label: "Suasana Belajar", href: "/kelas#suasana" },
    ],
  },
  { label: "Guru", href: "/guru" },
  {
    label: "Kegiatan",
    href: "/kegiatan",
    children: [
      { label: "Jadwal Sehari", href: "/kegiatan#jadwal" },
      { label: "Kokurikuler", href: "/kegiatan#kokurikuler" },
      { label: "Manungsi", href: "/kegiatan#manungsi" },
      { label: "Makan bersama", href: "/kegiatan#makan-bersama" },
    ],
  },
  { label: "Rapor", href: "/rapor" },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Kemitraan", href: "/kemitraan" },
  { label: "Kontak", href: "/kontak" },
];

/** Menu yang tidak punya sub-menu — dipakai di footer. */
export const navRingkas: SubMenu[] = [
  { label: "Beranda", href: "/" },
  { label: "Profil Sekolah", href: "/profil" },
  { label: "Metode Taman Indria", href: "/metode" },
  { label: "Kelompok Belajar", href: "/kelas" },
  { label: "Guru dan Pamong", href: "/guru" },
  { label: "Kegiatan", href: "/kegiatan" },
  { label: "Rapor", href: "/rapor" },
  { label: "Berita", href: "/berita" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Kontak", href: "/kontak" },
];
