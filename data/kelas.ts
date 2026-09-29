/**
 * KELAS DAN GURU
 * ==============
 *
 * Kelompok usia, suasana kelas, dan daftar pamong.
 * Masih data sementara. Ganti sebelum situs tayang.
 */

export type Kelompok = {
  id: string;
  nama: string;
  usia: string;
  jumlahAnak: number;
  jumlahGuru: number;
  warna: "hijau" | "kunyit" | "daun";
  fokus: string;
  kegiatanUtama: string[];
};

export const kelompok: Kelompok[] = [
  {
    id: "kb",
    nama: "KB",
    usia: "3 sampai 4 tahun",
    jumlahAnak: 12,
    jumlahGuru: 2,
    warna: "kunyit",
    fokus: "Membiasakan anak mengenal sekolah dan bermain bersama.",
    kegiatanUtama: [
      "Bermain balok dan merakit",
      "Menggambar dan mewarnai",
      "Bernyanyi sambil bergerak",
      "Mengenali nama teman",
    ],
  },
  {
    id: "ka",
    nama: "KA",
    usia: "4 sampai 5 tahun",
    jumlahAnak: 14,
    jumlahGuru: 2,
    warna: "hijau",
    fokus: "Bermain sambil belajar, mulai bekerja sama dan berurutan.",
    kegiatanUtama: [
      "Bermain peran pasar",
      "Merakit balok menjadi jembatan",
      "Menggambar cerita berurutan",
      "Menyanyi dalam kelompok kecil",
    ],
  },
  {
    id: "kb-2",
    nama: "KB 2",
    usia: "4 sampai 5 tahun",
    jumlahAnak: 12,
    jumlahGuru: 2,
    warna: "daun",
    fokus: "Melatih mandiri dan berani mencoba di kelas.",
    kegiatanUtama: [
      "Menggunting kertas dengan aman",
      "Menata alat main setelah bermain",
      "Membaca buku cerita bersama",
      "Mencoret dan mengecat",
    ],
  },
];

export type Suasana = {
  id: string;
  nama: string;
  isi: string;
};

export const suasana: Suasana[] = [
  {
    id: "rendah",
    nama: "Alat main rendah dan terjangkau",
    isi: "Semua bahan ada di jangkauan anak, dari lantai sampai setinggi bahu. Tidak ada rak tinggi yang membuat anak harus meminta bantuan.",
  },
  {
    id: "bebas",
    nama: "Anak bebas bergerak",
    isi: "Lantai lapang, meja pendek, dan tempat duduk yang ringan dipindah. Anak tidak perlu izin untuk berdiri dan berjalan.",
  },
  {
    id: "bermain",
    nama: "Bermain ada tujuannya",
    isi: "Setiap sesi punya tema yang jelas. Anak tahu sedang membangun apa pun bersama pamong.",
  },
  {
    id: "kecil",
    nama: "Kelompok kecil",
    isi: "Jumlah anak per kelompok dibatasi agar setiap anak mendapat perhatian dan bisa ikut bicara.",
  },
  {
    id: "bukan-ujian",
    nama: "Tidak ada kelas motionless",
    isi: "Tidak ada barisan duduk menghadap papan tulis. Anak boleh berdiri, berjalan, dan bertanya kapan saja.",
  },
  {
    id: "karya",
    nama: "Karya anak dipajang",
    isi: "Hasil kerja anak tidak dibuang. Dipajang di rendah, dicatat, dan dibawa pulang.",
  },
];

export type Guru = {
  id: string;
  nama: string;
  jabatan: string;
  kelompok: string;
  foto: string;
  catatan: string;
};

export const guru: Guru[] = [
  {
    id: "g1",
    nama: "Sarmiati, S.Pd.",
    jabatan: "Kepala TK",
    kelompok: "KA",
    foto: "/images/guru/sarmiati.jpg",
    catatan: "Mendampingi anak sejak usia balita.",
  },
  {
    id: "g2",
    nama: "Dra. Kustiah, S.Pd.",
    jabatan: "Guru Kelas",
    kelompok: "KB",
    foto: "/images/guru/kustiah.jpg",
    catatan: "Mengajar seni dan gerak di kelas KB.",
  },
  {
    id: "g3",
    nama: "Siti Aminah, S.Pd.",
    jabatan: "Guru Kelas",
    kelompok: "KB 2",
    foto: "/images/guru/siti-aminah.jpg",
    catatan: "Melatih motorik halus anak.",
  },
  {
    id: "g4",
    nama: "Rina Wulandari, S.Pd.",
    jabatan: "Guru Pendamping",
    kelompok: "Semua kelompok",
    foto: "/images/guru/rina-wulandari.jpg",
    catatan: "Mendampingi transisi antarwaktu kegiatan.",
  },
  {
    id: "g5",
    nama: "Endang Wahyuni, S.Pd.",
    jabatan: "Guru Pendamping",
    kelompok: "Semua kelompok",
    foto: "/images/guru/endang-wahyuni.jpg",
    catatan: "Menyiapkan bahan main setiap hari.",
  },
];
