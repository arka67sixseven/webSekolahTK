/**
 * KEGIATAN HARIAN
 * ===============
 *
 * Jadwal sehari, kokurikuler, dan kegiatan khusus.
 * Masih data sementara. Ganti sebelum situs tayang.
 */

export type SlotWaktu = {
  jam: string;
  kegiatan: string;
  keterangan: string;
  warna: "hijau" | "kunyit" | "daun";
};

export const jadwalSehari: SlotWaktu[] = [
  {
    jam: "07.30 - 08.00",
    kegiatan: "Penyambutan",
    keterangan: "Salam, cek kondisi anak, lalu anak memilih mainan.",
    warna: "kunyit",
  },
  {
    jam: "08.00 - 08.30",
    kegiatan: "Makan Pagi",
    keterangan: "Anak makan sendiri. Pamong mendampingi, tidak memberi makan.",
    warna: "hijau",
  },
  {
    jam: "08.30 - 09.00",
    kegiatan: "Awal Belajar",
    keterangan: "Doa, senam, dan pemanasan gerak.",
    warna: "daun",
  },
  {
    jam: "09.00 - 10.00",
    kegiatan: "Dolanan Anak",
    keterangan: "Inti kegiatan. Anak bermain dengan tema yang sama.",
    warna: "hijau",
  },
  {
    jam: "10.00 - 10.30",
    kegiatan: "Rehat",
    keterangan: "Bermain di halaman sambil minum.",
    warna: "kunyit",
  },
  {
    jam: "10.30 - 11.15",
    kegiatan: "Kokurikuler",
    keterangan: "Musik, seni, atau latihan motorik.",
    warna: "daun",
  },
  {
    jam: "11.15 - 12.00",
    kegiatan: "Manungsi",
    keterangan: "Anak bermain bebas. Pamong mengamati dan mencatat.",
    warna: "hijau",
  },
  {
    jam: "12.00 - 12.45",
    kegiatan: "Makan Siang",
    keterangan: "Makan bersama, lalu anak pulang dengan walinya.",
    warna: "kunyit",
  },
];

export type Kegiatan = {
  id: string;
  nama: string;
  jadwal: string;
  warna: "hijau" | "kunyit" | "daun";
  isi: string;
};

export const kokurikuler: Kegiatan[] = [
  {
    id: "musik",
    nama: "Musik dan Gerak",
    jadwal: "Setiap Rabu",
    warna: "daun",
    isi: "Anak belajar irama, bergerak mengikuti nada, dan berani tampil.",
  },
  {
    id: "seni",
    nama: "Seni Rupa",
    jadwal: "Setiap Jumat",
    warna: "hijau",
    isi: "Anak bebas berekspresi dengan cat, tanah liat, dan bahan alam.",
  },
  {
    id: "motorik",
    nama: "Motorik Halus",
    jadwal: "Setiap Selasa",
    warna: "kunyit",
    isi: "Anak berlatih menggunting, meronce, dan menempel bentuk.",
  },
  {
    id: "bahasa",
    nama: "Mendengar dan Bercerita",
    jadwal: "Setiap Kamis",
    warna: "hijau",
    isi: "Pamong membacakan cerita, anak menebak dan menceritakan ulang.",
  },
];
