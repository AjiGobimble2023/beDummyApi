const getDaftarBab=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data Bab ditemukan",
        "data": [
            {
                "babUtama": "EJAAN",
                "info": [
                    {
                        "c_NamaBab": "Penulisan Huruf",
                        "c_KodeBab": "06.02.01",
                        "c_IdTeoriBab": "2324"
                    },
                    {
                        "c_NamaBab": "Penulisan Kata",
                        "c_KodeBab": "06.02.02",
                        "c_IdTeoriBab": "2381"
                    },
                    {
                        "c_NamaBab": "Penulisan Singkatan dan Akronim",
                        "c_KodeBab": "06.02.03",
                        "c_IdTeoriBab": "2384"
                    },
                    {
                        "c_NamaBab": "Penulisan angka dan Lambang Bilangan",
                        "c_KodeBab": "06.02.04",
                        "c_IdTeoriBab": "2388"
                    },
                    {
                        "c_NamaBab": "Tanda Baca",
                        "c_KodeBab": "06.02.05",
                        "c_IdTeoriBab": "2396"
                    },
                    {
                        "c_NamaBab": "Penggunaan Kata",
                        "c_KodeBab": "06.02.06",
                        "c_IdTeoriBab": "2400"
                    }
                ]
            },
            {
                "babUtama": "KARYA ILMIAH",
                "info": [
                    {
                        "c_NamaBab": "Kebahasaan Karya Ilmiah",
                        "c_KodeBab": "06.08.01",
                        "c_IdTeoriBab": "2636"
                    },
                    {
                        "c_NamaBab": "Sistematika Karya Ilmiah",
                        "c_KodeBab": "06.08.02",
                        "c_IdTeoriBab": "2637"
                    },
                    {
                        "c_NamaBab": "Pengutipan (Sitasi Karya Ilmiah)",
                        "c_KodeBab": "06.08.03",
                        "c_IdTeoriBab": "2638"
                    },
                    {
                        "c_NamaBab": "Proposal",
                        "c_KodeBab": "06.08.04",
                        "c_IdTeoriBab": "2639"
                    }
                ]
            },
            {
                "babUtama": "MORFOLOGI",
                "info": [
                    {
                        "c_NamaBab": "Afiksasi",
                        "c_KodeBab": "06.03.01",
                        "c_IdTeoriBab": "2444"
                    },
                    {
                        "c_NamaBab": "Pemajemukan",
                        "c_KodeBab": "06.03.02",
                        "c_IdTeoriBab": "2447"
                    },
                    {
                        "c_NamaBab": "Pengulangan",
                        "c_KodeBab": "06.03.03",
                        "c_IdTeoriBab": "2464"
                    },
                    {
                        "c_NamaBab": "Penyerapan",
                        "c_KodeBab": "06.03.04",
                        "c_IdTeoriBab": "2469"
                    },
                    {
                        "c_NamaBab": "Jenis Kata",
                        "c_KodeBab": "06.03.05",
                        "c_IdTeoriBab": "2472"
                    },
                    {
                        "c_NamaBab": "Konjungsi",
                        "c_KodeBab": "06.03.06",
                        "c_IdTeoriBab": "2476"
                    }
                ]
            },
            {
                "babUtama": "PARAGRAF",
                "info": [
                    {
                        "c_NamaBab": "Pidato Persuasif",
                        "c_KodeBab": "06.01.01",
                        "c_IdTeoriBab": "552"
                    },
                    {
                        "c_NamaBab": "Teks Anekdot",
                        "c_KodeBab": "06.01.02",
                        "c_IdTeoriBab": "563"
                    },
                    {
                        "c_NamaBab": "Teks Berita",
                        "c_KodeBab": "06.01.03",
                        "c_IdTeoriBab": "568"
                    },
                    {
                        "c_NamaBab": "Teks Biografi",
                        "c_KodeBab": "06.01.04",
                        "c_IdTeoriBab": "573"
                    },
                    {
                        "c_NamaBab": "Teks Ceramah",
                        "c_KodeBab": "06.01.05",
                        "c_IdTeoriBab": "582"
                    },
                    {
                        "c_NamaBab": "Teks Cerita Sejarah/ Rekon",
                        "c_KodeBab": "06.01.06",
                        "c_IdTeoriBab": "594"
                    },
                    {
                        "c_NamaBab": "Teks Deskripsi",
                        "c_KodeBab": "06.01.07",
                        "c_IdTeoriBab": "616"
                    },
                    {
                        "c_NamaBab": "Teks Editorial",
                        "c_KodeBab": "06.01.08",
                        "c_IdTeoriBab": "631"
                    },
                    {
                        "c_NamaBab": "Teks Eksplanasi",
                        "c_KodeBab": "06.01.09",
                        "c_IdTeoriBab": "633"
                    },
                    {
                        "c_NamaBab": "Teks Eksposisi",
                        "c_KodeBab": "06.01.10",
                        "c_IdTeoriBab": "637"
                    },
                    {
                        "c_NamaBab": "Teks Iklan, Slogan, Poster",
                        "c_KodeBab": "06.01.11",
                        "c_IdTeoriBab": "642"
                    },
                    {
                        "c_NamaBab": "Teks Informasional",
                        "c_KodeBab": "06.01.12",
                        "c_IdTeoriBab": "648"
                    },
                    {
                        "c_NamaBab": "Teks Laporan",
                        "c_KodeBab": "06.01.13",
                        "c_IdTeoriBab": "655"
                    },
                    {
                        "c_NamaBab": "Teks Laporan Hasil Observasi",
                        "c_KodeBab": "06.01.14",
                        "c_IdTeoriBab": "659"
                    },
                    {
                        "c_NamaBab": "Teks Laporan Percobaan",
                        "c_KodeBab": "06.01.15",
                        "c_IdTeoriBab": "686"
                    },
                    {
                        "c_NamaBab": "Teks Narasi",
                        "c_KodeBab": "06.01.16",
                        "c_IdTeoriBab": "702"
                    },
                    {
                        "c_NamaBab": "Teks Negosiasi",
                        "c_KodeBab": "06.01.17",
                        "c_IdTeoriBab": "724"
                    },
                    {
                        "c_NamaBab": "Teks Nonfiksi",
                        "c_KodeBab": "06.01.18",
                        "c_IdTeoriBab": "726"
                    },
                    {
                        "c_NamaBab": "Teks Persuasi",
                        "c_KodeBab": "06.01.19",
                        "c_IdTeoriBab": "746"
                    },
                    {
                        "c_NamaBab": "Teks Pidato",
                        "c_KodeBab": "06.01.20",
                        "c_IdTeoriBab": "749"
                    },
                    {
                        "c_NamaBab": "Teks Prosedur",
                        "c_KodeBab": "06.01.21",
                        "c_IdTeoriBab": "763"
                    },
                    {
                        "c_NamaBab": "Teks Ulasan/ Resensi",
                        "c_KodeBab": "06.01.22",
                        "c_IdTeoriBab": "782"
                    },
                    {
                        "c_NamaBab": "Teks wawancara",
                        "c_KodeBab": "06.01.23",
                        "c_IdTeoriBab": "795"
                    },
                    {
                        "c_NamaBab": "Teks Percakapan",
                        "c_KodeBab": "06.01.24",
                        "c_IdTeoriBab": "797"
                    },
                    {
                        "c_NamaBab": "Teks Tanggapan",
                        "c_KodeBab": "06.01.25",
                        "c_IdTeoriBab": "809"
                    },
                    {
                        "c_NamaBab": "Teks Tanggapan Deskriptif",
                        "c_KodeBab": "06.01.26",
                        "c_IdTeoriBab": "810"
                    },
                    {
                        "c_NamaBab": "Teks Diskusi",
                        "c_KodeBab": "06.01.27",
                        "c_IdTeoriBab": "811"
                    },
                    {
                        "c_NamaBab": "Teks Debat",
                        "c_KodeBab": "06.01.28",
                        "c_IdTeoriBab": "815"
                    },
                    {
                        "c_NamaBab": "Teks Investigasi",
                        "c_KodeBab": "06.01.29",
                        "c_IdTeoriBab": "823"
                    },
                    {
                        "c_NamaBab": "Kalimat Utama",
                        "c_KodeBab": "06.01.30",
                        "c_IdTeoriBab": "830"
                    },
                    {
                        "c_NamaBab": "Informasi isi teks (tersurat/ tersirat)",
                        "c_KodeBab": "06.01.31",
                        "c_IdTeoriBab": "843"
                    },
                    {
                        "c_NamaBab": "Kalimat Penjelas",
                        "c_KodeBab": "06.01.32",
                        "c_IdTeoriBab": "845"
                    },
                    {
                        "c_NamaBab": "Perbandingan Teks",
                        "c_KodeBab": "06.01.33",
                        "c_IdTeoriBab": "877"
                    },
                    {
                        "c_NamaBab": "Simpulan Teks",
                        "c_KodeBab": "06.01.34",
                        "c_IdTeoriBab": "880"
                    },
                    {
                        "c_NamaBab": "Fakta Opini",
                        "c_KodeBab": "06.01.35",
                        "c_IdTeoriBab": "900"
                    },
                    {
                        "c_NamaBab": "Tema Teks",
                        "c_KodeBab": "06.01.36",
                        "c_IdTeoriBab": "909"
                    },
                    {
                        "c_NamaBab": "Judul Teks",
                        "c_KodeBab": "06.01.37",
                        "c_IdTeoriBab": "919"
                    },
                    {
                        "c_NamaBab": "Kalimat Tidak Padu",
                        "c_KodeBab": "06.01.38",
                        "c_IdTeoriBab": "922"
                    },
                    {
                        "c_NamaBab": "Ide Pokok/ Gagasan Utama",
                        "c_KodeBab": "06.01.39",
                        "c_IdTeoriBab": "926"
                    },
                    {
                        "c_NamaBab": "Jumlah Paragraf",
                        "c_KodeBab": "06.01.40",
                        "c_IdTeoriBab": "928"
                    },
                    {
                        "c_NamaBab": "Paragraf Rumpang",
                        "c_KodeBab": "06.01.41",
                        "c_IdTeoriBab": "933"
                    },
                    {
                        "c_NamaBab": "Ringkasan Teks",
                        "c_KodeBab": "06.01.42",
                        "c_IdTeoriBab": "938"
                    },
                    {
                        "c_NamaBab": "Rujukan Kata",
                        "c_KodeBab": "06.01.43",
                        "c_IdTeoriBab": "942"
                    },
                    {
                        "c_NamaBab": "Menyusun Kalimat",
                        "c_KodeBab": "06.01.44",
                        "c_IdTeoriBab": "947"
                    },
                    {
                        "c_NamaBab": "Pengubahan Teks ke Bentuk Lain",
                        "c_KodeBab": "06.01.45",
                        "c_IdTeoriBab": "952"
                    },
                    {
                        "c_NamaBab": "Pola Pengembangan Teks",
                        "c_KodeBab": "06.01.46",
                        "c_IdTeoriBab": "961"
                    },
                    {
                        "c_NamaBab": "Kelemahan Teks",
                        "c_KodeBab": "06.01.47",
                        "c_IdTeoriBab": "992"
                    },
                    {
                        "c_NamaBab": "Argumen Mendukung/Menentang Teks",
                        "c_KodeBab": "06.01.48",
                        "c_IdTeoriBab": "996"
                    },
                    {
                        "c_NamaBab": "Hubungan Isi Antarparagraf",
                        "c_KodeBab": "06.01.49",
                        "c_IdTeoriBab": "1005"
                    },
                    {
                        "c_NamaBab": "Analogi Masalah dalam Bacaan",
                        "c_KodeBab": "06.01.50",
                        "c_IdTeoriBab": "1018"
                    },
                    {
                        "c_NamaBab": "Teks cerita inspiratif",
                        "c_KodeBab": "06.01.51",
                        "c_IdTeoriBab": "1026"
                    },
                    {
                        "c_NamaBab": "Teks Tanggapan Kritis",
                        "c_KodeBab": "06.01.52",
                        "c_IdTeoriBab": "1036"
                    },
                    {
                        "c_NamaBab": "Teks Eksemplum",
                        "c_KodeBab": "06.01.53",
                        "c_IdTeoriBab": "1043"
                    },
                    {
                        "c_NamaBab": "Teks Argumentasi",
                        "c_KodeBab": "06.01.54",
                        "c_IdTeoriBab": "1057"
                    },
                    {
                        "c_NamaBab": "Mengurai Paragraf",
                        "c_KodeBab": "06.01.55",
                        "c_IdTeoriBab": "1070"
                    },
                    {
                        "c_NamaBab": "Teks Kritik/ Esai",
                        "c_KodeBab": "06.01.56",
                        "c_IdTeoriBab": "1087"
                    },
                    {
                        "c_NamaBab": "Kerangka Karangan",
                        "c_KodeBab": "06.01.57",
                        "c_IdTeoriBab": "1097"
                    },
                    {
                        "c_NamaBab": "Jenis-jenis Paragraf",
                        "c_KodeBab": "06.01.58",
                        "c_IdTeoriBab": "1115"
                    }
                ]
            },
            {
                "babUtama": "PRAGMATIK",
                "info": [
                    {
                        "c_NamaBab": "Denah, Peta",
                        "c_KodeBab": "06.06.01",
                        "c_IdTeoriBab": "2581"
                    },
                    {
                        "c_NamaBab": "Simbol, Lambang, Gambar",
                        "c_KodeBab": "06.06.02",
                        "c_IdTeoriBab": "2583"
                    },
                    {
                        "c_NamaBab": "Tabel, Grafik, Bagan",
                        "c_KodeBab": "06.06.03",
                        "c_IdTeoriBab": "2586"
                    },
                    {
                        "c_NamaBab": "Surat",
                        "c_KodeBab": "06.06.04",
                        "c_IdTeoriBab": "2590"
                    },
                    {
                        "c_NamaBab": "Surat Lamaran Kerja",
                        "c_KodeBab": "06.06.04.03",
                        "c_IdTeoriBab": "3096"
                    },
                    {
                        "c_NamaBab": "Iklan, Slogan, Poster",
                        "c_KodeBab": "06.06.05",
                        "c_IdTeoriBab": "2592"
                    },
                    {
                        "c_NamaBab": "Surat Pembaca",
                        "c_KodeBab": "06.06.07",
                        "c_IdTeoriBab": "2598"
                    },
                    {
                        "c_NamaBab": "Pengumuman",
                        "c_KodeBab": "06.06.08",
                        "c_IdTeoriBab": "2601"
                    },
                    {
                        "c_NamaBab": "Indeks Buku, Ensiklopedia, Buku Telepon",
                        "c_KodeBab": "06.06.09",
                        "c_IdTeoriBab": "2603"
                    },
                    {
                        "c_NamaBab": "Film",
                        "c_KodeBab": "06.06.10",
                        "c_IdTeoriBab": "2605"
                    },
                    {
                        "c_NamaBab": "Formulir",
                        "c_KodeBab": "06.06.11",
                        "c_IdTeoriBab": "2608"
                    },
                    {
                        "c_NamaBab": "Seminar",
                        "c_KodeBab": "06.06.12",
                        "c_IdTeoriBab": "2610"
                    },
                    {
                        "c_NamaBab": "Komentar Teks",
                        "c_KodeBab": "06.06.13",
                        "c_IdTeoriBab": "2612"
                    },
                    {
                        "c_NamaBab": "Tujuan Penulis",
                        "c_KodeBab": "06.06.14",
                        "c_IdTeoriBab": "2615"
                    },
                    {
                        "c_NamaBab": "Bahasa Hipotesis",
                        "c_KodeBab": "06.06.15",
                        "c_IdTeoriBab": "2616"
                    },
                    {
                        "c_NamaBab": "Ilustrasi teks",
                        "c_KodeBab": "06.06.16",
                        "c_IdTeoriBab": "2618"
                    },
                    {
                        "c_NamaBab": "Sikap Penulis dalam Bacaan",
                        "c_KodeBab": "06.06.17",
                        "c_IdTeoriBab": "2619"
                    },
                    {
                        "c_NamaBab": "Penulisan Pesan (SMS/memo)",
                        "c_KodeBab": "06.06.18",
                        "c_IdTeoriBab": "2620"
                    },
                    {
                        "c_NamaBab": "Susunan Acara",
                        "c_KodeBab": "06.06.19",
                        "c_IdTeoriBab": "2621"
                    },
                    {
                        "c_NamaBab": "Membaca dengan Artikulasi",
                        "c_KodeBab": "06.06.20",
                        "c_IdTeoriBab": "2622"
                    }
                ]
            },
            {
                "babUtama": "SASTRA",
                "info": [
                    {
                        "c_NamaBab": "Puisi",
                        "c_KodeBab": "06.07.01",
                        "c_IdTeoriBab": "2623"
                    },
                    {
                        "c_NamaBab": "Prosa",
                        "c_KodeBab": "06.07.02",
                        "c_IdTeoriBab": "2625"
                    },
                    {
                        "c_NamaBab": "Drama",
                        "c_KodeBab": "06.07.03",
                        "c_IdTeoriBab": "2628"
                    },
                    {
                        "c_NamaBab": "Periodesasi Sastra",
                        "c_KodeBab": "06.07.04",
                        "c_IdTeoriBab": "2635"
                    }
                ]
            },
            {
                "babUtama": "SEMANTIK",
                "info": [
                    {
                        "c_NamaBab": "Jenis Makna",
                        "c_KodeBab": "06.05.01",
                        "c_IdTeoriBab": "2564"
                    },
                    {
                        "c_NamaBab": "Relasi Makna",
                        "c_KodeBab": "06.05.02",
                        "c_IdTeoriBab": "2566"
                    },
                    {
                        "c_NamaBab": "Gejala Perubahan Makna",
                        "c_KodeBab": "06.05.03",
                        "c_IdTeoriBab": "2570"
                    },
                    {
                        "c_NamaBab": "Gaya Bahasa",
                        "c_KodeBab": "06.05.04",
                        "c_IdTeoriBab": "2571"
                    },
                    {
                        "c_NamaBab": "Analogi Kata",
                        "c_KodeBab": "06.05.05",
                        "c_IdTeoriBab": "2574"
                    },
                    {
                        "c_NamaBab": "Ungkapan dan Peribahasa",
                        "c_KodeBab": "06.05.06",
                        "c_IdTeoriBab": "2578"
                    }
                ]
            },
            {
                "babUtama": "SINTAKSIS",
                "info": [
                    {
                        "c_NamaBab": "Kata",
                        "c_KodeBab": "06.04.01",
                        "c_IdTeoriBab": "2477"
                    },
                    {
                        "c_NamaBab": "Frasa",
                        "c_KodeBab": "06.04.02",
                        "c_IdTeoriBab": "2481"
                    },
                    {
                        "c_NamaBab": "Klausa",
                        "c_KodeBab": "06.04.03",
                        "c_IdTeoriBab": "2487"
                    },
                    {
                        "c_NamaBab": "Kalimat",
                        "c_KodeBab": "06.04.04",
                        "c_IdTeoriBab": "2500"
                    },
                    {
                        "c_NamaBab": "Kalimat Simpleks Kompleks",
                        "c_KodeBab": "06.04.05",
                        "c_IdTeoriBab": "2512"
                    },
                    {
                        "c_NamaBab": "Kalimat Rumpang",
                        "c_KodeBab": "06.04.06",
                        "c_IdTeoriBab": "2517"
                    },
                    {
                        "c_NamaBab": "Kalimat Aktif Pasif",
                        "c_KodeBab": "06.04.07",
                        "c_IdTeoriBab": "2528"
                    },
                    {
                        "c_NamaBab": "Pola Kalimat",
                        "c_KodeBab": "06.04.08",
                        "c_IdTeoriBab": "2533"
                    },
                    {
                        "c_NamaBab": "Kalimat Pengandaian",
                        "c_KodeBab": "06.04.09",
                        "c_IdTeoriBab": "2538"
                    },
                    {
                        "c_NamaBab": "Kalimat Langsung dan Taklangsung",
                        "c_KodeBab": "06.04.10",
                        "c_IdTeoriBab": "2542"
                    },
                    {
                        "c_NamaBab": "Kalimat Korelatif",
                        "c_KodeBab": "06.04.11",
                        "c_IdTeoriBab": "2544"
                    },
                    {
                        "c_NamaBab": "Kalimat Imperatif",
                        "c_KodeBab": "06.04.12",
                        "c_IdTeoriBab": "2547"
                    },
                    {
                        "c_NamaBab": "Kalimat Positif/Negatif",
                        "c_KodeBab": "06.04.13",
                        "c_IdTeoriBab": "2550"
                    },
                    {
                        "c_NamaBab": "Kalimat Ambigu",
                        "c_KodeBab": "06.04.14",
                        "c_IdTeoriBab": "2552"
                    },
                    {
                        "c_NamaBab": "Kalimat Repetisi",
                        "c_KodeBab": "06.04.15",
                        "c_IdTeoriBab": "2554"
                    },
                    {
                        "c_NamaBab": "Kalimat Persuasif",
                        "c_KodeBab": "06.04.16",
                        "c_IdTeoriBab": "2559"
                    }
                ]
            }
        ]
    });
}
const getDaftarBuku=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data buku teori ditemukan",
        "data": [
            {
                "iconMapel":"https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/icon%2Fmapel%2Fmapel_indo.webp?alt=media&token=c2641f9f-b8f0-42c9-90e7-488a759aaf78",
                "c_IdKelompokUjian": "40",
                "c_NamaKelompokUjian": "BAHASA INDONESIA",
                "c_Singkatan": "IND",
                "c_KodeBuku": "2814",
                "c_NamaBuku": "Ebook Teori B.Indonesia 12 IPA TA.23/24 (Teaser)",
                "c_Semester": "2",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "teaser"
            },
            {
                "c_IdKelompokUjian": "37",
                "c_NamaKelompokUjian": "BAHASA INGGRIS",
                "c_Singkatan": "ING",
                "c_KodeBuku": "34577",
                "c_NamaBuku": "Ebook Teori B. Inggris 12 IPA TA. 23/24 (Teaser)",
                "c_Semester": "2",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "teaser"
            },
            {
                "c_IdKelompokUjian": "32",
                "c_NamaKelompokUjian": "FISIKA",
                "c_Singkatan": "FIS",
                "c_KodeBuku": "34578",
                "c_NamaBuku": "Ebook Teori Fisika 12 IPA TA. 22/23 (Teaser)",
                "c_Semester": "2",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "teaser"
            },
            {
                "c_IdKelompokUjian": "1",
                "c_NamaKelompokUjian": "MATEMATIKA",
                "c_Singkatan": "MAT",
                "c_KodeBuku": "34490",
                "c_NamaBuku": "Ebook Teori Matematika 12 IPA TA. 23/24 (Teaser)",
                "c_Semester": "2",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "teaser"
            },
            {
                "c_IdKelompokUjian": "40",
                "c_NamaKelompokUjian": "BAHASA INDONESIA",
                "c_Singkatan": "IND",
                "c_KodeBuku": "34012",
                "c_NamaBuku": "12IPA-K13R-S1-B.Indonesia-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "40",
                "c_NamaKelompokUjian": "BAHASA INDONESIA",
                "c_Singkatan": "IND",
                "c_KodeBuku": "34797",
                "c_NamaBuku": "12IPA-K13R-S1-B.Indonesia-TA.23/24 LENGKAP",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "129",
                "c_NamaKelompokUjian": "BAHASA INDONESIA - UTBK",
                "c_Singkatan": "INDO - UTB",
                "c_KodeBuku": "34926",
                "c_NamaBuku": "12IPA-K13R-S1-B.Indonesia UTBK-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "37",
                "c_NamaKelompokUjian": "BAHASA INGGRIS",
                "c_Singkatan": "ING",
                "c_KodeBuku": "34058",
                "c_NamaBuku": "12IPA-K13R-S1-B.Inggris-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "37",
                "c_NamaKelompokUjian": "BAHASA INGGRIS",
                "c_Singkatan": "ING",
                "c_KodeBuku": "34717",
                "c_NamaBuku": "12IPA-K13R-S1-B.Inggris-TA.23/24 LENGKAP",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "36",
                "c_NamaKelompokUjian": "BIOLOGI",
                "c_Singkatan": "BIO",
                "c_KodeBuku": "34057",
                "c_NamaBuku": "12IPA-K13R-S1-Biologi-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "32",
                "c_NamaKelompokUjian": "FISIKA",
                "c_Singkatan": "FIS",
                "c_KodeBuku": "34011",
                "c_NamaBuku": "12IPA-K13R-S1-Fisika-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "35",
                "c_NamaKelompokUjian": "KIMIA",
                "c_Singkatan": "KIMIA",
                "c_KodeBuku": "34056",
                "c_NamaBuku": "12IPA-K13R-S1-Kimia-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "122",
                "c_NamaKelompokUjian": "KK+PM 2",
                "c_Singkatan": "KK+PM 2",
                "c_KodeBuku": "34922",
                "c_NamaBuku": "12IPA-K13R-S1-PK&PM2-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "121",
                "c_NamaKelompokUjian": "KPU+PM 1",
                "c_Singkatan": "KPU+PM1",
                "c_KodeBuku": "34820",
                "c_NamaBuku": "12IPA-K13R-S1-KPU&PM1-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "110",
                "c_NamaKelompokUjian": "LITERASI DALAM BAHASA INGGRIS",
                "c_Singkatan": "LBING",
                "c_KodeBuku": "34928",
                "c_NamaBuku": "12IPA-K13R-S1-Literasi dlm. B.Inggris-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "3",
                "c_NamaKelompokUjian": "MATEMATIKA PEMINATAN",
                "c_Singkatan": "MAP",
                "c_KodeBuku": "34059",
                "c_NamaBuku": "12IPA-K13R-S1-Matematika Peminatan-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "2",
                "c_NamaKelompokUjian": "MATEMATIKA WAJIB",
                "c_Singkatan": "MAW",
                "c_KodeBuku": "34055",
                "c_NamaBuku": "12IPA-K13R-S1-Matematika Wajib-TA.23/24",
                "c_Semester": "1",
                "kelengkapan": "Lengkap",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "129",
                "c_NamaKelompokUjian": "BAHASA INDONESIA - UTBK",
                "c_Singkatan": "INDO - UTB",
                "c_KodeBuku": "2809",
                "c_NamaBuku": "Ebook Teori 12 IPA TA.23/24 (B.Indonesia-UTBK)",
                "c_Semester": "3",
                "kelengkapan": "Ringkas",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "122",
                "c_NamaKelompokUjian": "KK+PM 2",
                "c_Singkatan": "KK+PM 2",
                "c_KodeBuku": "2650",
                "c_NamaBuku": "Ebook Teori 12 IPA TA.23/24 (PK & PM 2)",
                "c_Semester": "3",
                "kelengkapan": "Ringkas",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "121",
                "c_NamaKelompokUjian": "KPU+PM 1",
                "c_Singkatan": "KPU+PM1",
                "c_KodeBuku": "2808",
                "c_NamaBuku": "Ebook Teori 12 IPA TA.23/24 (KPU & PM 1)",
                "c_Semester": "3",
                "kelengkapan": "Ringkas",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            },
            {
                "c_IdKelompokUjian": "110",
                "c_NamaKelompokUjian": "LITERASI DALAM BAHASA INGGRIS",
                "c_Singkatan": "LBING",
                "c_KodeBuku": "2810",
                "c_NamaBuku": "Ebook Teori 12 IPA TA.23/24 (Literasi dlm. B.Inggris)",
                "c_Semester": "3",
                "kelengkapan": "Ringkas",
                "idSekolahKelas": "14",
                "levelTeori": "SMA",
                "jenis": "reguler"
            }
        ]
    })
}
const getContent=(req,res)=>{
    res.json({
        "status": true,
        "message": "Konten buku ditemukan",
        "data": {
            "c_idteoribab": "552",
            "c_Uraian": "<p style=&quotes;text-align: justify;&quotes;>Pidato merupakan kegiatan berbicara di depan umum mengenai suatu hal untuk menyampaikan maksud dan pendapat. Sementara itu, pidato persuasif merupakan kegiatan berbicara di depan umum untuk menyampaikan informasi yang berisi ajakan kepada masyarakat untuk melakukan sesuatu. Pidato persuasif bersifat mengimbau atau mengajak masyarakat untuk berbuat hal yang positif bagi kehidupannya. Pidato persuasif pun sebagai salah satu cara menggerakkan masyarakat untuk berbuat lebih baik dan lebih kreatif sehingga tidak jarang pada setiap acara-acara tertentu pidato persuasif dirasa cukup efektif untuk menginspirasi khalayak.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pidato persuasif disampaikan secara jelas dan logis. Persuasif mula-mula memaparkan gagasan. Namun, gagasan tersebut tidak hanya gagasan semata, tetapi juga disertai alasan, bukti, atau contoh yang relevan dengan topik yang disampaikan untuk meyakinkan khalayak. Seluruh argumen tersebut diikuti dengan ajakan, bujukan, rayuan, imbauan, atau saran. Upaya persuasif akan berhasil dengan baik bila pesan yang disampaikan memiliki akibat sesuai dengan yang diharapkan.</p><p>Pidato persuasif merupakan bagian dari eksposisi. Dalam pengembangannya, ada tiga tipe eksposisi. Ketiga tipe tersebut sebagai berikut.</p><ol><li>Eksposisi yang dapat mengubah sikap orang atau mengubah pandangan orang tentang suatu hal. Tulisan yang persuasif ini dapat kita temui pada editorial surat kabar; pidato politik atau kampanye; media cetak; teks informasi dalam buku; surat kepada editor; pidato; ceramah; mempertahankan hak hukum; khotbah; dan sebagainya.</li><li>Eksposisi yang dapat dimanfaatkan untuk mempromosikan dan menjual barang, jasa, dan aktivitas. Misalnya penggunaan bahasa persuasif pada iklan dan poster, slogan yang memikat. Misalnya, “Sepuluh langkah memiliki tubuh indah”.</li><li>Eksposisi yang dapat digunajan untuk membela suatu kasus. Misalnya, “Selamatkan Terumbu Karang. Sekarang!”</li></ol><p style=&quotes;text-align: justify;&quotes;>Eksposisi persuasif memiliki satu sudut pandang yang didukung oleh argumen logis dan bukti.</p><p style=&quotes;text-align: justify;&quotes;><strong>A.&nbsp; Tujuan Pidato Persuasif<br></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tujuan pidato persuasif adalah untuk meyakinkan pendengar atau audiens untuk melakukan sesuatu, misalnya pidato kampanye dan pidato keagamaan. Selain itu, tujuan dari pidato persuasif lainnya, yakni pembentukan, penguatan, dan pengubahan tanggapan. Ketiga tujuan tersebut dirincikan pada penjelasan berikut.</p><p><strong>1.&nbsp; Pembentukan Tanggapan<br></strong>Satu di antara tujuan pidato persuasif adalah membentuk cara khalayak dalam memberikan tanggapan. Nantinya, pembicara akan menghubungkan gagasan yang dimilikinya dengan nilai-nilai yang melekat atau berkembang di masyarakat. Dari hal tersebut, proses pertalian gagasan dan nilai mampu menghasilkan suatu argumen yang diharapkan mampu meberikan perubahan perilaku kepada khalayak yang menjadi sasaran.</p><p style=&quotes;text-align: justify;&quotes;><strong>2.&nbsp; Penguatan Tanggapan<br></strong>Penguatan tanggapan diharapkan mampu memberikan kesinambungan perilaku saat ini terhadap topik, gagasan, atau isu yang sedang berkembang. Penguatan tanggapan akan dikaitkan dengan nilai-nilai dan sikap yang sudah tertanap dalam diri khalayak. Nilai-nilai tersebut bercirikan kesenangan, kekuatan, dan kepentingan.</p><p style=&quotes;text-align: justify;&quotes;><strong>3.&nbsp; Pengubahan Tanggapan<br></strong>Terakhir, pidato persuasif bertujuan untuk pengubahan tanggapan seseorang atau sekelompok khalayak. Dari hal itulah, seseorang, sekolompok, atau khalayak mampu mengubah perilaku yang dimiliki pada masing-masing pribadi menjadi lebih baik lagi berdasarkan konsep atau gagasan yang sudah mereka pahami secara mandiri dan diperkuat dengan argumen dari pembicara. Artinya, pembicara dalam pidato persuasif akan berupaya untuk mengubah tanggapan atau bahkan mengentikan beberapa perilaku kurang baik yang dimiliki seseorang, sekelompok, atau khalayak. Sebagai contoh, perilaku <em>merokok </em>dan <em>buang sampah sembarangan.</em></p><p><strong>B.&nbsp; Cara-Cara Memersuasi<br></strong><em>&nbsp; &nbsp; &nbsp; </em>Untuk memberikan pernyataan persuasi yang mampu memberikan efek yang positif kepada pembaca atau pendengar, seseorang yang akan memberikan pidato persuasi hendaknya memperhatikan tiga aspek pendekatan dalam cara memersuasi. Ketiga aspek tersebut dapat dilihat pada bagan cara memersuasi berikut ini.</p><p style=&quotes;text-align: center;&quotes;><em><img src=&quotes;{{root_media}}d637beb3498063880980680862f21366.png&quotes;></em></p><p style=&quotes;line-height: 1; text-align: justify;&quotes;><strong>1.&nbsp; Etika<br></strong>Pendekatan etika yang berarti menyentuh audiensi lewat nilai-nilai moral dan kebenaran yang harus ditegakkan.<br>Contoh:<br>&quotes;Daur ulang adalah hal benar yang kita lakukan. Memubazirkan sumber daya kita yang terbatas sama dengan mencuri hak anak cucu kita di masa depan, ini tidak bermoral.&quotes;</p><p style=&quotes;line-height: 1; text-align: justify;&quotes;><strong>2.&nbsp; Emosi<br></strong>Sentuh perasaan audiensi dengan cara membakar semangatnya atau justru membuat pendengar merasa terharu akan suatu kenyataan.<br>Contoh:<br>&quotes;Coba pikirkan jutaan hewan yang kehilangan rumahnya setiap hari akibat pohon yang ditebang. Jika daur ulang berkelanjutan, kita dapat menyelamatkan banyak hutan yang indah.&quotes;</p><p style=&quotes;line-height: 1; text-align: justify;&quotes;><strong>3. Logika<br></strong>Pendekatan Logika berarti memanfaatkan logika untuk memberikan efek setuju karena argumen masuk akal dan dapat dibuktikan secara ilmiah.<br>Contoh:<br><em>&quotes;Kita paham bahwa cadangan sumber daya alami kita terbatas. Kita dapat memperpanjang cadangan kita dengan daur ulang.&quotes;<br></em></p><p style=&quotes;line-height: 1; text-align: justify;&quotes;><strong>C.&nbsp; Struktur Teks Pidato Persuasif<br></strong>Karena teks pidato persuasif termasuk dalam pengembangan eksposisi, penyusunan teks pidato persuasif tersebut dimulai dari bagian pendahuluan yang berisi pernyataan pendapat dari sudut pendang penulis kemudian diikuti dengan argumen dan diakhiri dengan penguatan pernyataan posisi untuk menyimpulkan atau memperkuat sudut pandang penulis.</p><p style=&quotes;text-align: justify;&quotes;><img src=&quotes;{{root_media}}529042312e12db2ea7a8a02113cd48cb.png&quotes;></p><p style=&quotes;text-align: justify;&quotes;>1. <em> </em><strong>Pernyataan Posisi<br></strong>Pernyataan posisi merupakan bagian awal yang disebut juga pendahuluan dalam pidato persuasif. Bagian ini berisi pendapat penulis mengenai suatu topik, isu, atau permasalahan yang akan dibahas.</p><p style=&quotes;text-align: justify;&quotes;><strong>2.&nbsp; Argumen<br></strong>Argumen merupakan pendapat (opini) yang disertai dengan data, fakta, bukti, atau contoh yang relevan mengenai suatu topik, isu, atau permasalahan yang dibahas. Argumen dikembangkan secara logis dan sistematis. Dengan begitu, argumen yang disampaikan diharapkan efektif memberikan dan menumbuhkan keyakinan kepada pembaca, pendengar, atau khalayak.</p><p style=&quotes;text-align: justify;&quotes;><strong>3.&nbsp; Penguatan Pernyataan Posisi<br></strong>Pada bagian inilah, hal yang dipaparkan pada bagian sebelumnya lebih ditekankan lagi. Selain itu, simpulan dari argumen yang telah dipaparkan akan digabungkan dengan kalimat-kalimat persuasif guna memperkuat penyataan posisi atau pernyataan pendapat pada bagian awal.</p><p style=&quotes;text-align: justify;&quotes;>&nbsp;</p><p style=&quotes;text-align: justify;&quotes;><strong>D.&nbsp; Kaidah Kebahasaan Pidato Persuasif</strong></p><p style=&quotes;text-align: justify;&quotes;><strong>1.&nbsp; Nominalisasi (Pembendaan)<br></strong>Nominalisasi atau pembendaan merupakan proses pengubahan kata benda, kerja, dan sifat menjadi kata benda. Fungsinya untuk menghubungkan makna antarkalimat. Perhatikan contoh berikut.<br>(1)&nbsp;&nbsp;&nbsp; Pemerintah memberlakukan Undang-Undang Antikekerasan.<br>(2)&nbsp;&nbsp;&nbsp; Pemberlakukan tersebut melegakan banyak pihak di negeri ini.<br>Kalimat (1) dan (2) saling berhubungan yang dihubungkan oleh kata <em>memberlakukan-pemberlakuan.<br></em>Nominasi (pembendaan) digunakan saat kata benda dibentuk dari kata kerja, misalnya, <em>membangun-pembangunan, mendaur ulang-pendaurulangan, berhasil-keberhasilan, merintis-perintisan.</em></p><p style=&quotes;text-align: justify;&quotes;><strong>2.&nbsp; Bentuk Pasif dan Kata Ganti Orang<br></strong>Bentuk pasif digunakan untuk mengungkapkan sesuatu secara formal dan lebih kuat. Bentuk pasif dalam kalimat ditandai dengan imbuhan <em>di- </em>pada kata kerja yang berposii sebagai predikatnya.<br>Contoh: <em>Ini harus dihentikan.<br></em>Sementara itu, kata ganti orang yang sering digunakan dalam pidato persuasif ialah kata ganti orang ketiga atau merujuk pada sesuatu hal.<br>Contoh: <em>dia, mereka, bangsa Indonesia, warga negara.<br></em></p><p style=&quotes;text-align: justify;&quotes;><strong>3.&nbsp; Kosakata<br></strong>(1) Kosakata yang digunakan sering berupa istilah teknis. Kosakata dapat menyertakan abstrak. Sementara itu, sinonim digunakan untuk menghindari pengulangan dan menjaga agar tetap membaca tulisan.<br>(2) Rantai kata, pasangan kata (sinonim dan antonim), serta rumpun kata yang saling berkaitan makna, seperti <em>tanah, regenerasi, </em>dan <em>sumber daya alam </em>banyak digunakan.<br>(3) Kata benda abstrak yang digunakan, seperti kegembiraan, takut, dan kata-kata teknis, seperti <em>spesies </em>dan <em>genus.</em> Persoalan menjadi lebih ilmiah karena merujuk pendapat ahli.<br>(4) Kata emotif digunakan untuk melibatkan perasaan audiens, misalnya <em>Penggunaan sumber daya kita secara berlebihan akan menghancurkan tanah.<br></em>(5) Ciri penting kebahasaan adalah penggunaan kata tugas (konjungsi) yang berfungsi menghubungkan bagian-bagian teks. Kata tugas ini dapat mengaitkan gagasan dan menghubungkan sebab-akibat. Contoh kata-kata ini adalah <em>pertama kali, akhirnya, sebagai tambahan, sebab/karena, sebagai hasil dari, di pihak lain.<br></em>(6) Kata tugas menciptakan kohesi (keterpautan bentuk) dan mengekspresikan hubungan sebab-akibat, seperti, <em>sebab, karena, oleh sebab itu, </em>dan <em>maka.<br></em>(7) Alasan untuk tindakan atau pilihan ditunjukkan melalui penggunaan kata hubung antarkalimat, misalnya <em>bagaimanapun, hal yang mirip, utamanya, oleh karena itu, maka, sebab, </em>dan alasan pertama.</p><p style=&quotes;text-align: justify;&quotes;><strong>4.&nbsp; Modalitas<br></strong>Modalitas atau kepastian mulai dari yang moderat hingga derajat tinggi ditemukan dalam kata-kata terpilih, sebagai <em>contoh sering, nyaris, paling banyak, umumnya, mungkin, dapat. </em>Hal ini bergantung apakah penulis ingin merasa mendesak, membatasi diri, atau diskusi terbuka.<br>(1)&nbsp; Kalimat persuasif<br>Kalimat persuasif adalah kalimat yang berisi ajakan dan bertujuan untuk memengaruhi pembaca atau pendengar untuk melakukan sesuatu sesuai dengan kehendak penulis atau pembacanya.<br>Ciri-ciri kalimat persuasif:<br>a. Bertujuan untuk membujuk, mengajak, dan memengaruhi seseorang.<br>b. Biasanya menggunakan kata ayo, mari, dan kata-kata yang bersifat mengajak lainnya.<br><br></p><p style=&quotes;text-align: justify;&quotes;><strong>E.&nbsp; Menyimpulkan Pidato Persuasif<br></strong>Untuk dapat menyimpulkan isi dari pidato persuasif, baik yang dibaca maupun yang didengar, ada beberapa hal yang harus diperhatikan.<br><strong><br>1. Pembukaan<br></strong>Kita harus memperhatikan terlebih dahulu dari segi pembukaan yang terdapat dalam pidato persuasif tersebut. Pidato persuasif harus memiliki daya tarik tersendiri dari segi pembukaan. Cara pembukaan yang dapat memberikan daya tarik pembaca atau pendengar adalah sebagai berikut.</p><ol style=&quotes;list-style-type: lower-alpha;&quotes;><li><em>Merebut perhatian</em>, melalui pernyataan yang dramatis atau dengan bantuan visual.</li><li><em>Hubungan dengan audiensi</em>,<strong> </strong>Menunjukkan kesamaan dan empati kepada audiensi.</li><li><em>Kelayakan</em>, tunjukkan bahwa kamu layak berbicara tentang topik sebab pengalaman personal atau profesional yang kamu lakukan. Lakukan dengan santun dan berdasarkan data.</li><li><em>Tujuan</em>, jelaskan apa harapanmu setelah pidato selesai.</li><li><em>Peta jalan</em>, katakan kepada audiens pokok-pokok pikiran pidato.</li></ol><p style=&quotes;text-align: justify;&quotes;><strong>2.&nbsp; Isi<br></strong>Isi pidato merupakan penjabaran topik yang berisi pokok-pokok penting yang disertai alasan meyakinkan untuk mendukung pandanganmu. Susun secara logis, gunakan sumber tepercaya, contoh yang logis, dan dikenal audiens.</p><p style=&quotes;text-align: justify;&quotes;><strong>3.&nbsp; Penutup<br></strong>Cara menutup pidato yang menarik dan mengesankan. Tentunya, terdapat simpulan dan kalimat persuasif sebagai penutup.<br><br><img src=&quotes;{{root_media}}6ad2a535f0b5053cb6c9ba9e6369d386.png&quotes;></p><p><em>Perhatikan cuplikan ilustrasi berikut ini!</em></p><p style=&quotes;text-align: justify;&quotes;>OSIS SMA Merdeka Jaya akan melaksanakan program penyuluhan kepada masyarakat di daerah terpencil Kabupaten Bandung. Tema yang diangkat dalam penyuluhan tersebut yakni “Bahaya Penggunaan dan Penyalahgunaan Narkoba”. Kegiatan tersebut akan dihadiri oleh narasumber dari pihak berwajib, kepolisian, setempat. Sebagai ketua OSIS sekaligus ketua pelaksanan penyuluhan tersebut, Maharaja akan menyampaikan pidatonya.</p><p style=&quotes;text-align: justify;&quotes;>Bagian penutup pidato persuasif Maharaja yang tepat berdasarkan ilustrasi tersebut adalah ....<br>(A) Demikian teman-teman, semoga program ini dapat membuat kita menjadi waspada dan tertib terhadap kegiatan berlalu lintas.<br>(B) Demikian pidato saya kali ini. Saya selaku perwakilan pihak berwajib meminta agar seluruh masyarakat tetap waspada dengan kejahatan narkoba dan menolak dengan keyakinan yang pasti jika ditawari barang tersebut, meskipun secara cuma-cuma.<br>(C) Demikian teman-teman, sesuai dengan program yang telah disepakati bersama dalam penuluhan ini. Mari, kita ikuti kegiatan ini sampai selesai guna mendapatkan informasi yang menyeluruh dan memahami dampak narkoba bagi diri sendiri, keluarga, lingkungan, dan masyakarat.<br>(D) Teman-teman yang saya sayangi, mari kita ikuti kegiatan ini dengan penuh khidmat sampai selesai agar mendapatkan manfaat.<br>(E) Teman-temanku sekalian, kegiatan ini kita lakukan hanya dengan satu tujuan yakni menjaga diri kita dari perbuatan tercela dan berbahaya.</p><p style=&quotes;text-align: justify;&quotes;><img src=&quotes;{{root_media}}1cb4cf429db95682d1ee96eafd859310.png&quotes;></p><p style=&quotes;text-align: justify;&quotes;><strong>Soal</strong><strong> </strong><strong>Latihan<br></strong><em>Perhatikan kalimat berikut ini!<br></em>Kampus ini lajak menjadi tempat yang dapat dijadikan sebagai teladan dan belajar untuk mewujudkan kesuksesan yang diimpikan setiap orang.<br>Jenis nominalisasi yang terdapat pada kalimat tersebut adalah<br>(A)&nbsp; Konfiks pada kata <em>mewujudkan</em>.<br>(B)&nbsp; Konfiks pada kata <em>dijadikan</em>.<br>(C)&nbsp; Prefiks pada kata <em>menjadi</em>.<br>(D)&nbsp; Prefiks pada kata <em>belajar</em>.<br>(E)&nbsp; Konfiks pada kata <em>kesuksesan</em>.<br><img src=&quotes;{{root_media}}4f8826d332b4de355cf7e7626b5858c7.png&quotes;></p><p style=&quotes;text-align: justify;&quotes;>&nbsp;</p><p style=&quotes;text-align: justify;&quotes;>&nbsp;</p><p style=&quotes;text-align: justify;&quotes;>&nbsp;</p>"
        }
    })
}


module.exports={
    getDaftarBab,
    getDaftarBuku,
    getContent
}