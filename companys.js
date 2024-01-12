const content =
  "Kami hadir sebagai jembatan antara mahasiswa yang penuh semangat dengan dunia karier yang menunggu untuk dieksplorasi.";

const companys = [
  {
    id: 1,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 1",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/e9/2d/10/e92d10628b620920e7297ca0ada8bbf4.jpg",
    content: content,
    posisi: "1. Manajer Umum = Bertanggung jawab atas operasi keseluruhan perusahaan. Memimpin tim manajerial, mengambil keputusan strategis, dan memastikan pencapaian tujuan perusahaan.\n2. Manajer Keuangan = Merencanakan, mengelola, dan mengawasi aspek keuangan perusahaan. Melibatkan pengelolaan anggaran, pelaporan keuangan, analisis keuangan, dan perencanaan keuangan jangka panjang.\n3. Spesialis Sumber Daya Manusia = Bertanggung jawab atas rekrutmen, seleksi, pelatihan, pengembangan, manajemen kinerja, dan kebijakan sumber daya manusia.\n4. Pengembang Perangkat Lunak = Membuat, menguji, dan memelihara perangkat lunak aplikasi dan sistem komputer. Terlibat dalam pemrograman dan pengembangan teknologi." ,
  },
  {
    id: 2,
    date: "10 Oktober 2023",
    title: "Perusahaan 2",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/ae/f0/2c/aef02c606653e89a74126e2e62713ff1.jpg",
    content: content,
    posisi: "1. Manajer Umum = Bertanggung jawab atas operasi keseluruhan perusahaan. Memimpin tim manajerial, mengambil keputusan strategis, dan memastikan pencapaian tujuan perusahaan.\n2. Manajer Keuangan = Merencanakan, mengelola, dan mengawasi aspek keuangan perusahaan. Melibatkan pengelolaan anggaran, pelaporan keuangan, analisis keuangan, dan perencanaan keuangan jangka panjang.\n3. Spesialis Sumber Daya Manusia = Bertanggung jawab atas rekrutmen, seleksi, pelatihan, pengembangan, manajemen kinerja, dan kebijakan sumber daya manusia.\n4. Pengembang Perangkat Lunak = Membuat, menguji, dan memelihara perangkat lunak aplikasi dan sistem komputer. Terlibat dalam pemrograman dan pengembangan teknologi." ,
  },
  {
    id: 3,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 3",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/40/30/85/40308503cb8f39eb6375a683145849d7.jpg",
    content: content,
    posisi: "1. Manajer Umum = Bertanggung jawab atas operasi keseluruhan perusahaan. Memimpin tim manajerial, mengambil keputusan strategis, dan memastikan pencapaian tujuan perusahaan.\n2. Manajer Keuangan = Merencanakan, mengelola, dan mengawasi aspek keuangan perusahaan. Melibatkan pengelolaan anggaran, pelaporan keuangan, analisis keuangan, dan perencanaan keuangan jangka panjang.\n3. Spesialis Sumber Daya Manusia = Bertanggung jawab atas rekrutmen, seleksi, pelatihan, pengembangan, manajemen kinerja, dan kebijakan sumber daya manusia.\n4. Pengembang Perangkat Lunak = Membuat, menguji, dan memelihara perangkat lunak aplikasi dan sistem komputer. Terlibat dalam pemrograman dan pengembangan teknologi." ,
  },
  {
    id: 4,
    date: "10 Oktober 2023",
    title: "Perusahaan 4",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/fa/65/24/fa6524650b4faa658121e2544e8eab7a.jpg",
    content: content,
    posisi: "1. Manajer Umum = Bertanggung jawab atas operasi keseluruhan perusahaan. Memimpin tim manajerial, mengambil keputusan strategis, dan memastikan pencapaian tujuan perusahaan.\n2. Manajer Keuangan = Merencanakan, mengelola, dan mengawasi aspek keuangan perusahaan. Melibatkan pengelolaan anggaran, pelaporan keuangan, analisis keuangan, dan perencanaan keuangan jangka panjang.\n3. Spesialis Sumber Daya Manusia = Bertanggung jawab atas rekrutmen, seleksi, pelatihan, pengembangan, manajemen kinerja, dan kebijakan sumber daya manusia.\n4. Pengembang Perangkat Lunak = Membuat, menguji, dan memelihara perangkat lunak aplikasi dan sistem komputer. Terlibat dalam pemrograman dan pengembangan teknologi." ,
  },
  {
    id: 5,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 5",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/0e/ee/b7/0eeeb7616f45cb67ed49692761711b67.jpg",
    content: content,
    posisi: "1. Manajer Umum = Bertanggung jawab atas operasi keseluruhan perusahaan. Memimpin tim manajerial, mengambil keputusan strategis, dan memastikan pencapaian tujuan perusahaan.\n2. Manajer Keuangan = Merencanakan, mengelola, dan mengawasi aspek keuangan perusahaan. Melibatkan pengelolaan anggaran, pelaporan keuangan, analisis keuangan, dan perencanaan keuangan jangka panjang.\n3. Spesialis Sumber Daya Manusia = Bertanggung jawab atas rekrutmen, seleksi, pelatihan, pengembangan, manajemen kinerja, dan kebijakan sumber daya manusia.\n4. Pengembang Perangkat Lunak = Membuat, menguji, dan memelihara perangkat lunak aplikasi dan sistem komputer. Terlibat dalam pemrograman dan pengembangan teknologi." ,
  },
  {
    id: 6,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 6",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/15/e1/8f/15e18fcf222ae2c3aa8153bdabe702b6.jpg",
    content: content,
    posisi: "1. Manajer Umum = Bertanggung jawab atas operasi keseluruhan perusahaan. Memimpin tim manajerial, mengambil keputusan strategis, dan memastikan pencapaian tujuan perusahaan.\n2. Manajer Keuangan = Merencanakan, mengelola, dan mengawasi aspek keuangan perusahaan. Melibatkan pengelolaan anggaran, pelaporan keuangan, analisis keuangan, dan perencanaan keuangan jangka panjang.\n3. Spesialis Sumber Daya Manusia = Bertanggung jawab atas rekrutmen, seleksi, pelatihan, pengembangan, manajemen kinerja, dan kebijakan sumber daya manusia.\n4. Pengembang Perangkat Lunak = Membuat, menguji, dan memelihara perangkat lunak aplikasi dan sistem komputer. Terlibat dalam pemrograman dan pengembangan teknologi." ,
  },
  {
    id: 7,
    date: "10 Oktober 2023",
    title: "Perusahaan 7",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/4d/18/97/4d1897aa98248a9429adc0cfb5c0a222.jpg",
    content: content,
    posisi: "1. Manajer Umum = Bertanggung jawab atas operasi keseluruhan perusahaan. Memimpin tim manajerial, mengambil keputusan strategis, dan memastikan pencapaian tujuan perusahaan.\n2. Manajer Keuangan = Merencanakan, mengelola, dan mengawasi aspek keuangan perusahaan. Melibatkan pengelolaan anggaran, pelaporan keuangan, analisis keuangan, dan perencanaan keuangan jangka panjang.\n3. Spesialis Sumber Daya Manusia = Bertanggung jawab atas rekrutmen, seleksi, pelatihan, pengembangan, manajemen kinerja, dan kebijakan sumber daya manusia.\n4. Pengembang Perangkat Lunak = Membuat, menguji, dan memelihara perangkat lunak aplikasi dan sistem komputer. Terlibat dalam pemrograman dan pengembangan teknologi." ,
  },
  {
    id: 8,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 8",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/32/dd/08/32dd081c27ddb82bb3ead0c92dcf3bd1.jpg",
    content: content,
    posisi: "1. Manajer Umum = Bertanggung jawab atas operasi keseluruhan perusahaan. Memimpin tim manajerial, mengambil keputusan strategis, dan memastikan pencapaian tujuan perusahaan.\n2. Manajer Keuangan = Merencanakan, mengelola, dan mengawasi aspek keuangan perusahaan. Melibatkan pengelolaan anggaran, pelaporan keuangan, analisis keuangan, dan perencanaan keuangan jangka panjang.\n3. Spesialis Sumber Daya Manusia = Bertanggung jawab atas rekrutmen, seleksi, pelatihan, pengembangan, manajemen kinerja, dan kebijakan sumber daya manusia.\n4. Pengembang Perangkat Lunak = Membuat, menguji, dan memelihara perangkat lunak aplikasi dan sistem komputer. Terlibat dalam pemrograman dan pengembangan teknologi." ,
  },
];

export default companys;
