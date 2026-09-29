/**
 * PROFIL TK TAMAN INDRIA JETIS
 * ============================
 *
 * Sambutan kepala TK, visi dan misi, sejarah, sarana, dan struktur.
 *
 * PENTING: isi file ini masih data sementara. Ganti dengan data resmi
 * TK Taman Indria Jetis sebelum situs tayang. Lihat `content-status.ts`.
 */

export type Sambutan = {
  nama: string;
  jabatan: string;
  foto: string;
  isi: string[];
  penutup: string;
};

export const sambutan: Sambutan = {
  nama: "Sarmiati, S.Pd.",
  jabatan: "Kepala TK Taman Indria Jetis",
  foto: "/images/profil/kepala-tk.jpg",
  isi: [
    "Assalamu'alaikum warahmatullahi wabarakatuh.",
    "Selamat datang di Taman Indria Jetis.",
    "Di sini anak tidak duduk diam seharian. Anak belajar sambil bermain, bergerak, dan mencoba.",
    "Setiap anak unik. Sebagian lebih cepat membaca, sebagian lebih tenang, sebagian perlu banyak bergerak. Semua tetap dihargai.",
    "Anak usia tiga sampai enam tahun belajar melalui aktivitas. Maka kelas kami disiapkan dengan bahan yang mudah dijangkau dan ruang yang aman untuk bergerak.",
    "Orang tua adalah mitra pertama anak. Kami membuka kelas, mengajak bicara, dan berbagi catatan perkembangan secara rutin.",
    "Anak tidak perlu dipaksa. Yang diperlukan adalah ruang, waktu, dan pendamping yang sabar.",
    "Mari kita tumbuhkan anak dengan cara yang manusiawi.",
  ],
  penutup: "Sarmiati, S.Pd.",
};

export type VisiMisi = {
  visi: string;
  misi: string[];
};

export const visiMisi: VisiMisi = {
  visi: "Anak yang sehat, berani, berakhlak, dan cinta kepada sesama.",
  misi: [
    "Menyelenggarakan pembelajaran yang bermain sambil belajar.",
    "Menempatkan anak sebagai subjek yang aktif, bukan pasif.",
    "Menumbuhkan kemandirian, disiplin, dan gotong royong sejak dini.",
    "Membangun kerja sama yang erat dengan orang tua.",
    "Menjaga lingkungan belajar yang aman, bersih, dan ramah anak.",
  ],
};

export type BabakSejarah = {
  tahun: string;
  judul: string;
  isi: string;
};

export const sejarah: BabakSejarah[] = [
  {
    tahun: "1922",
    judul: "Taman Indria dirintis",
    isi: "Ki Hadjar Dewantara merintis Taman Indria sebagai jenjang taman kanak-kanak dalam sistem Taman Siswa.",
  },
  {
    tahun: "2026",
    judul: "Taman Indria di Jetis",
    isi: "TK Taman Indria Jetis berlaku sebagai sekolah taman kanak-kanak di kompleks Tamansiswa Jetis, Yogyakarta.",
  },
];

export type Sarana = {
  nama: string;
  keterangan: string;
};

export const sarana: Sarana[] = [
  {
    nama: "Ruang kelas",
    keterangan: "Kelas dengan area bebas bergerak dan rak bahan yang terjangkau anak.",
  },
  {
    nama: "Halaman bermain",
    keterangan: "Area luar untuk berlari, memanjat, dan bermain bersama.",
  },
  {
    nama: "Dapur kecil anak",
    keterangan: "Alat dapur ringan untuk mengaduk, menuang, dan mencicipi bahan nyata.",
  },
  {
    nama: "Perpustakaan mini",
    keterangan: "Koleksi buku cerita dan picture book untuk dibaca bersama.",
  },
  {
    nama: "Toilet anak",
    keterangan: "Toilet terpisah dengan wastafel rendah yang mudah dijangkau.",
  },
  {
    nama: "Musala",
    keterangan: "Ruang ibadah sederhana yang bersih dan ramah anak.",
  },
];

export type Jabatan = {
  jabatan: string;
  nama: string;
  tugas: string;
};

export const struktur: Jabatan[] = [
  {
    jabatan: "Kepala TK",
    nama: "Sarmiati, S.Pd.",
    tugas: "Menetapkan arah sekolah dan menjamin mutu pembelajaran.",
  },
  {
    jabatan: "Ketua",
    nama: "Dra. Kustiah, S.Pd.",
    tugas: "Membantu kepala TK dalam administrasi dan kegiatan sekolah.",
  },
  {
    jabatan: "Bendahara",
    nama: "Siti Aminah, S.Pd.",
    tugas: "Mengelola keuangan sekolah dan laporan penggunaan dana.",
  },
  {
    jabatan: "Kepala Bagian",
    nama: "Rina Wulandari, S.Pd.",
    tugas: "Mengelola operasional harian kelas dan alat main.",
  },
];

export type Prestasi = {
  tahun: string;
  nama: string;
  tingkat: string;
  bidang: string;
};

export const prestasi: Prestasi[] = [
  {
    tahun: "2026",
    nama: "Juara 1 Lomba Motorik Halus",
    tingkat: "Kota",
    bidang: "Motorik",
  },
  {
    tahun: "2025",
    nama: "Juara 2 Lomba Menyanyi Islami",
    tingkat: "Kecamatan",
    bidang: "Seni",
  },
  {
    tahun: "2025",
    nama: "Juara 1 Pentas Pagi PAUD",
    tingkat: "Kota",
    bidang: "Pentas",
  },
];
