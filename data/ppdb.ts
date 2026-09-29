/**
 * PENERIMAAN PESERTA DIDIK BARU
 * =============================
 *
 * Semua angka dan tanggal diambil dari `tahunAjaran.ppdb` agar tidak
 * ada dua sumber yang berbeda.
 */

import { tahunAjaran } from "./tahun-ajar";

export type Syarat = {
  judul: string;
  isi: string[];
};

export const syarat: Syarat[] = [
  {
    judul: "Usia",
    isi: [
      "Anak berusia minimal 4 tahun pada awal tahun ajaran.",
      "Anak berusia 3 tahun dapat mendaftar pada kelompok KB.",
    ],
  },
  {
    judul: "Dokumen",
    isi: [
      "Fotokopi akta kelahiran anak.",
      "Fotokopi kartu keluarga.",
      "Pas foto anak terbaru.",
      "Surat keterangan imunisasi.",
    ],
  },
  {
    judul: "Wawancara",
    isi: [
      "Orang tua datang ke sekolah untuk wawancara singkat.",
      "Wawancara hanya membiasakan, bukan menilai anak.",
    ],
  },
];

export type TahapPpdb = {
  tahap: string;
  waktu: string;
  uraian: string;
};

export const tahapan: TahapPpdb[] = [
  {
    tahap: "Pendaftaran",
    waktu: `${tahunAjaran.ppdb.mulai} sampai ${tahunAjaran.ppdb.selesai}`,
    uraian: "Pengambilan formulir dan pendaftaran.",
  },
  {
    tahap: "Wawancara",
    waktu: tahunAjaran.ppdb.wawancara,
    uraian: "Observasi singkat saat anak bermain bersama pamong.",
  },
  {
    tahap: "Pengumuman",
    waktu: tahunAjaran.ppdb.pengumuman,
    uraian: "Hasil diumumkan lewat telepon dan pengumuman sekolah.",
  },
  {
    tahap: "Daftar Ulang",
    waktu: tahunAjaran.ppdb.daftarUlang,
    uraian: "Pembayaran dan penyerahan berkas lengkap.",
  },
];

export type Faq = {
  tanya: string;
  jawab: string;
};

export const faq: Faq[] = [
  {
    tanya: "Apakah anak belajar seperti di SD?",
    jawab:
      "Tidak. Kelas TK ditandai dengan bermain. Anak tidak duduk diam belajar dari pagi hingga siang.",
  },
  {
    tanya: "Apakah anak boleh belum bisa membaca?",
    jawab:
      "Tentu. Kemampuan setiap anak berbeda. Yang penting anak berani mencoba dan senang belajar.",
  },
  {
    tanya: "Apakah rapor berupa angka?",
    jawab:
      "Tidak. Rapor berupa kalimat perkembangan dan catatan kegiatan di rumah.",
  },
  {
    tanya: "Kapan jurnal perkembangan dibagikan?",
    jawab:
      "Setiap akhir bulan. Jurnal dibawa pulang dan ditandatangani orang tua.",
  },
];
