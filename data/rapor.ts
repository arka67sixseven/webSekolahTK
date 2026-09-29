/**
 * RAPOR DESKRIPTIF
 * ================
 *
 * Rapor di TK tidak berisi angka. Yang ditulis adalah perkembangan
 * anak dalam bentuk kalimat, plus catatan apa yang perlu dilatih di
 * rumah. Laporan harus bisa dibaca orang tua dengan mudah dan tidak
 * membuat anak merasa dinilai.
 */

export type AspekRapor = {
  id: string;
  nama: string;
  warna: "hijau" | "kunyit" | "terong";
  deskripsi: string;
  contohPerilaku: string[];
};

export const aspekRapor: AspekRapor[] = [
  {
    id: "motorik-halus",
    nama: "Motorik Halus",
    warna: "kunyit",
    deskripsi: "Anak bergerak dengan jari dan tangannya secara terkoordinasi.",
    contohPerilaku: [
      "Menggunting dengan ibu jari dan jari telunjuk",
      "Meronce manik di tali",
      "Menempelkan bentuk dari kertas",
    ],
  },
  {
    id: "motorik-besar",
    nama: "Motorik Besar",
    warna: "hijau",
    deskripsi: "Anak bergerak dengan terkoordinasi seperti berjalan dan melompat.",
    contohPerilaku: [
      "Berjalan tanpa tersandung",
      "Melompat dari lantai dengan dua kaki",
      "Memanjat tangga bermain dengan bantuan",
    ],
  },
  {
    id: "bahasa",
    nama: "Bahasa dan Komunikasi",
    warna: "terong",
    deskripsi: "Anak menyampaikan keinginan dan mendengarkan cerita.",
    contohPerilaku: [
      "Menyampaikan kebutuhan dengan kata-kata",
      "Menjawab pertanyaan sederhana",
      "Menceritakan kembali isi cerita",
    ],
  },
  {
    id: "sosial",
    nama: "Sosial dan Emosi",
    warna: "hijau",
    deskripsi: "Anak berinteraksi dengan teman dan mengelola perasaannya.",
    contohPerilaku: [
      "Bermain bersama tanpa dipaksa",
      "Menunggu giliran",
      "Mengatakan rasa senang atau sedih",
    ],
  },
  {
    id: "kreatif",
    nama: "Kreativitas",
    warna: "kunyit",
    deskripsi: "Anak menggunakan bahan untuk membuat karya sendiri.",
    contohPerilaku: [
      "Membuat bentuk dari balok dan adonan",
      "Merangkai bahan alam",
      "Memberi nama pada karyanya",
    ],
  },
];
