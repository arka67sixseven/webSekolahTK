/**
 * Satu sumber kebenaran untuk tahun ajaran.
 *
 * Web SMP punya masalah yang harus kita hindari: data berita bertanggal 2026,
 * PPDB menyebut 2024/2025, kalender akademik menyebut 2023-2024. Ketiganya
 * ditulis di file berbeda pada waktu berbeda dan tidak pernah diselaraskan.
 *
 * Di sini semua angka tahun berasal dari file ini. Ganti satu tempat, seluruh
 * situs ikut berubah.
 */
export const tahunAjaran = {
  label: "2026/2027",
  mulai: 2026,
  selesai: 2027,

  ppdb: {
    gelombang: "Gelombang I",
    tahun: "2027/2028",
    mulai: "1 November 2026",
    selesai: "20 Desember 2026",
    wawancara: "Januari 2027",
    pengumuman: "15 Januari 2027",
    daftarUlang: "Februari 2027",
  },

  /** Garis besar kegiatan satu tahun, untuk bagian kalender. */
  kegiatan: [
    {
      bulan: "Juli",
      kegiatan: "Tahun ajaran dimulai",
      detail: "Hari pertama sekolah dan pengenalan lingkungan sekolah.",
    },
    {
      bulan: "Agustus",
      kegiatan: "Mulai bermain dan belajar",
      detail: "Kegiatan harian mulai berjalan bertahap di semua kelompok.",
    },
    {
      bulan: "September",
      kegiatan: "Evaluasi pertama",
      detail: "Evaluasi capaian awal dan pertemuan kelas dengan orang tua.",
    },
    {
      bulan: "Oktober",
      kegiatan: "Pameran karya",
      detail: "Pameran karya anak bersama orang tua.",
    },
    {
      bulan: "November",
      kegiatan: "Gelar karya tema",
      detail: "Puncak kegiatan tema semester pertama.",
    },
    {
      bulan: "Desember",
      kegiatan: "Libur semester",
      detail: "Rekap dan susun rapor semester pertama.",
    },
    {
      bulan: "Januari",
      kegiatan: "Semester kedua",
      detail: "Tahun ajaran baru dimulai.",
    },
    {
      bulan: "Februari",
      kegiatan: "Pekan kesehatan",
      detail: "Pekan gizi dan kesehatan bersama sekolah-sekolah Tamansiswa.",
    },
    {
      bulan: "Maret",
      kegiatan: "Karya bersama",
      detail: "Pameran karya dan pagelaran seni anak.",
    },
    {
      bulan: "April",
      kegiatan: "Hardiknas",
      detail: "Perayaan Hari Pendidikan Nasional bersama SD Tamansiswa Jetis.",
    },
    {
      bulan: "Mei",
      kegiatan: "Penutupan tahun",
      detail: "Perpisahan kelompok B dan alih terima ke SD Tamansiswa Jetis.",
    },
    {
      bulan: "Juni",
      kegiatan: "Libur tahun",
      detail: "Persiapan tahun ajaran baru.",
    },
  ],
};
