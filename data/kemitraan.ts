/**
 * KEMITRAAN DENGAN ORANG TUA
 * =========================
 *
 * Bentuk kerja sama orang tua dan sekolah. Dipakai di halaman
 * kemitraan dan sebagai penutup halaman metode.
 * Masih data sementara. Ganti sebelum situs tayang.
 */

export type BentukKemitraan = {
  id: string;
  nama: string;
  waktu: string;
  isi: string;
  warna: "hijau" | "kunyit" | "terong";
};

export const bentukKemitraan: BentukKemitraan[] = [
  {
    id: "buku-penghubung",
    nama: "Buku penghubung",
    waktu: "Setiap hari",
    isi: "Buku yang dibawa pulang setiap hari berisi catatan kegiatan anak dan hal yang perlu dilanjutkan di rumah.",
    warna: "kunyit",
  },
  {
    id: "jurnal-bulanan",
    nama: "Jurnal perkembangan bulanan",
    waktu: "Setiap akhir bulan",
    isi: "Ringkasan perkembangan selama sebulan beserta foto kegiatan. Ditandatangani orang tua.",
    warna: "hijau",
  },
  {
    id: "kunjungan-kelas",
    nama: "Kunjungan ke kelas",
    waktu: "Setiap semester",
    isi: "Orang tua datang ke kelas, melihat langsung kegiatan anak, dan mencoba bermain bersama.",
    warna: "terong",
  },
  {
    id: "pertemuan-kelas",
    nama: "Pertemuan kelas",
    waktu: "Setiap awal semester",
    isi: "Pamong dan orang tua menyepakati tujuan semester bersama, termasuk hal yang perlu dilatih di rumah.",
    warna: "hijau",
  },
];

export type AlurKemitraan = {
  langkah: string;
  uraian: string;
};

export const alurKemitraan: AlurKemitraan[] = [
  {
    langkah: "Pamong mencatat",
    uraian: "Selama kegiatan, pamong menuliskan apa yang anak lakukan, anak katakan, dan apa yang masih dicoba anak.",
  },
  {
    langkah: "Catatan dibawa pulang",
    uraian: "Buku penghubung dibawa pulang setiap hari, sehingga orang tua tahu apa yang terjadi di kelas.",
  },
  {
    langkah: "Orang tua melanjutkan",
    uraian: "Orang tua memberi latihan ringan di rumah sesuai catatan, tanpa memaksa anak mengulang pekerjaan sekolah.",
  },
  {
    langkah: "Didiskusikan bersama",
    uraian: "Pertemuan kelas membahas apa yang sudah berjalan dan apa yang perlu diganti. Keputusan diambil bersama.",
  },
];
