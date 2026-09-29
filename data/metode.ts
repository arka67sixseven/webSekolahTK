/**
 * METODE TAMAN INDRIA
 * ===================
 *
 * Halaman ini yang paling membedakan situs ini dari web SMP Taman Dewasa.
 * Taman Indria adalah jenjang taman kanak-kanak dalam sistem Taman Siswa,
 * dirintis Ki Hadjar Dewantara pada 1922.
 *
 * Rujukan umum:
 *  - Taman Indria, Ki Hadjar Dewantara, 1922
 *  - Permendikbudristek No. 13 Tahun 2022 tentang Capaian Pembelajaran PAUD
 */

export type WarnaTema = "hijau" | "kunyit" | "terong";

export type Metode = {
  id: string;
  nama: string;
  tagline: string;
  ringkas: string;
  penjelasan: string;
  /** Contoh nyata yang bisa diamati orang tua saat mengamati anak. */
  contoh: string[];
  warna: WarnaTema;
  ikon: "among" | "dolanan" | "indra" | "wira" | "keluarga";
};

export const metode: Metode[] = [
  {
    id: "among",
    nama: "Among",
    tagline: "Pamong membimbing, bukan memaksa",
    ringkas:
      "Anak diberi ruang untuk tumbuh sendiri. Pamong mengiringi dari samping, bukan menarik tangan.",
    penjelasan:
      "Kata among berasal dari bahasa Jawa yang berarti mengiringi. Guru memperlakukan anak sebagai makhluk yang sudah punya kemampuan, bukan wadah kosong yang perlu diisi. Guru menyiapkan suasana dan mainan, lalu menunggu. Ketika anak bergerak, pamong mengikuti langkah itu dengan pertanyaan atau mainan yang tepat. Anak tidak merasa sedang diajar. Dia merasa sedang main, padahal sedang tumbuh jasmani, sosial, dan emosinya.",
    contoh: [
      "Anak belum mau masuk kelas. Pamong duduk di dekatnya tanpa menarik tangan, lalu mulai bermain di dekatnya.",
      "Anak menyusun balok hanya satu. Pamong tidak menyuruh jumlah, tapi menyiapkan dua.",
      "Anak belum mau bergabung. Mainan diletakkan di pojok untuk memancingnya.",
    ],
    warna: "hijau",
    ikon: "among",
  },
  {
    id: "dolanan",
    nama: "Dolanan Anak",
    tagline: "Bermain yang punya tujuan",
    ringkas:
      "Bermain bukan jeda antara belajar. Bagi anak, bermain adalah caranya bekerja.",
    penjelasan:
      "Dolanan berarti bermain. Ki Hadjar Dewantara mendapat gagasan ini dari mengamati anak-anak yang sedang main, bukan dari buku. Anak yang sedang menyusun balok sedang melatih motorik. Anak yang sedang berbaris sedang belajar urutan. Anak yang sedang bertengkar kecil sedang belajar bahasa. Karena itu kegiatan bermain di Taman Indria selalu punya arah: ada tujuan yang ingin dicapai, dan ada alat yang menyiapkan tujuan itu.",
    contoh: [
      "Balok disusun menjadi jembatan. Anak membandingkan tinggi dan panjang tanpa satu pun angka.",
      "Menuangkan air dari cangkir ke botol untuk melatih ketelitian tangannya.",
      "Bermain peran pasar. Anak bergantian peran dan bernegosiasi untuk mendapatkan barang.",
    ],
    warna: "kunyit",
    ikon: "dolanan",
  },
  {
    id: "panca-indra",
    nama: "Panca Indra",
    tagline: "Lima indra sebagai pintu masuk",
    ringkas:
      "Nama Indria berasal dari kata Sanskerta untuk lima indra. Kelas dirancang untuk merangsang semuanya.",
    penjelasan:
      "Anak usia tiga sampai enam tahun belajar paling cepat lewat tubuh: menyentuh, bergerak, melihat, mendengar, dan mencicipi. Ruang kelas disusun agar anak bebas mencoba. Mainan bukan pajangan di rak yang tinggi. Semua bahan ada di jangkauan anak, dari lantai sampai setinggi bahu. Ini yang membuat kelas terasa seperti rumah bagi anak.",
    contoh: [
      "Kotak bahan alam berisi pasir, daun kering, kulit buah, dan batu.",
      "Dapur kecil anak. Anak mengaduk, menuang, dan mencicipi bahan makanan nyata.",
      "Sudut cerita yang terjangkau dari posisi duduk anak.",
    ],
    warna: "terong",
    ikon: "indra",
  },
  {
    id: "wira-wiri",
    nama: "Wira-wiri",
    tagline: "Bermain bersama, bergantian",
    ringkas:
      "Anak belajar bekerja sama karena permainannya memang tidak mungkin sendirian.",
    penjelasan:
      "Dalam mainan anak ada minimal dua pihak. Karena itu anak belajar menunggu giliran, berbagi alat yang terbatas, dan menyelesaikan perbedaan. Hal yang sulit ditemukan di kelas lain muncul dengan sendirinya. Menahan diri, mengalah, dan membaca perasaan orang lain tidak bisa diajarkan dengan kalimat. Ia tumbuh dari konflik mainan kecil yang dibiarkan selesai sendiri oleh anak. Di sinilah wira dan wiri, kemandirian dan gotong royong, dipraktikkan.",
    contoh: [
      "Mobil mainan hanya ada satu. Anak belajar menunggu dan meminta, bukan merebut.",
      "Bangun balok bersama. Satu orang menyusun, yang lain menyangga.",
      "Menggambar satu lukisan bersama dengan krayon yang sama.",
    ],
    warna: "hijau",
    ikon: "wira",
  },
  {
    id: "orang-tua",
    nama: "Kemitraan dengan Orang Tua",
    tagline: "Rumah dan sekolah berjalan beriringan",
    ringkas:
      "Anak tumbuh di dua tempat. TK melengkapi apa yang belum sempat ada di rumah.",
    penjelasan:
      "Orang tua adalah pendamping pertama anak. Karena itu orang tua diperlakukan sebagai mitra, bukan tamu. Mereka ikut menyusun tujuan semester, datang mengamati kelas secara langsung, dan menerima laporan yang menjelaskan apa yang sudah bisa dilakukan anak serta apa yang perlu dilatih di rumah. Laporan ini tidak berupa angka. Targetnya bukan mengumpulkan nilai, melainkan agar anak tumbuh.",
    contoh: [
      "Hari jadi. Orang tua datang dan ikut bermain bersama anak di kelas.",
      "Buku penghubung yang dibawa pulang setiap hari.",
      "Percakapan rutin kelas, bukan sekadar pengumuman.",
    ],
    warna: "terong",
    ikon: "keluarga",
  },
];

/**
 * Tiga elemen Capaian Pembelajaran PAUD (Permendikbudristek 13/2022).
 * Dipakai di halaman rapor.
 */
export const elemenCapaian = [
  {
    nama: "Mengenali diri",
    warna: "hijau" as const,
    ringkas: "Anak mengenal diri, lebih peka terhadap rasa, dan berani mencoba.",
    contoh: [
      "Menyebut nama dan usia dirinya",
      "Menunjukkan perasaan yang sedang dialami",
      "Mau mencoba kegiatan baru meskipun masih ragu",
    ],
  },
  {
    nama: "Memahami lingkungan",
    warna: "kunyit" as const,
    ringkas: "Anak mengenal orang, benda, dan kejadian di sekitarnya.",
    contoh: [
      "Menyebut nama orang di sekitarnya",
      "Mengelompokkan benda berdasarkan ciri",
      "Menceritakan kembali kejadian yang pernah dialami",
    ],
  },
  {
    nama: "Berkarya",
    warna: "terong" as const,
    ringkas: "Anak menggunakan bahan untuk membuat sesuatu untuk dirinya sendiri.",
    contoh: [
      "Membuat bentuk dengan balok dan adonan",
      "Merangkai bahan alam menjadi bentuk baru",
      "Menyusun cerita pendek",
    ],
  },
];

/**
 * Prinsip yang tidak bisa ditawar di kelas TK.
 * Dipakai sebagai pita penguat di bagian bawah halaman metode.
 */
export const prinsipKelas = [
  {
    judul: "Anak tidak boleh merasa gagal",
    isi: "Kesalahan anak adalah bagian dari proses. Pamong membetulkan tanpa membuat anak merasa bodoh.",
  },
  {
    judul: "Tidak ada penilaian baik atau buruk",
    isi: "Yang dilihat adalah perkembangan, bukan peringkat. Tidak ada peringkat pertama di kelas TK.",
  },
  {
    judul: "Harta anak tetap milik anak",
    isi: "Karya anak tidak dibuang. Dipajang, dicatat, dan dibawa pulang.",
  },
  {
    judul: "Boleh bertanya kapan saja",
    isi: "Tidak ada pertanyaan anak yang dianggap bodoh.",
  },
];
