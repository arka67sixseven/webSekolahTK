/**
 * CONTOH PENULISAN RAPOR
 * =====================
 *
 * Dua kolom: kalimat yang baik dan kalimat yang sebaiknya dihindari.
 * Tujuannya agar guru menulis tentang perkembangan anak, bukan
 * tentang rasa guru terhadap anak.
 */

export type ContohKalimatRapor = {
  situasi: string;
  kalimatBaik: string;
  kalimatKurangBaik: string;
};

export const contohKalimat: ContohKalimatRapor[] = [
  {
    situasi: "Anak belum mau masuk kelas",
    kalimatBaik: "Ayu hari ini masih membutuhkan waktu di dekat pintu.",
    kalimatKurangBaik: "Ayu nakal dan tidak mau belajar.",
  },
  {
    situasi: "Anak menyusun balok sendirian",
    kalimatBaik: "Rafi sedang menyusun balok dengan tekun dan teliti.",
    kalimatKurangBaik: "Rafi pintar sekali.",
  },
  {
    situasi: "Anak berebut mainan",
    kalimatBaik:
      "Bima belajar menunggu giliran setelah tadi berebut mainan.",
    kalimatKurangBaik: "Bima nakal dan tidak mau berbagi.",
  },
];
