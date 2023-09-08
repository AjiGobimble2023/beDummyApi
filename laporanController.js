const getVak =(req,res)=>{
    res.json({
        "status": true,
        "message": "VAK ditemukan",
        "data": {
            "nis": "050111114701",
            "visual": "15",
            "auditory": "13",
            "kinestetis": "17",
            "kecenderungan": "K",
            "dominan": "Kinestetik",
            "judul1": "KINESTETIK :",
            "isi1": "Praktek langsung akan sangat baik untuk memperkuat daya ingat. Gunakan gerakan/sentuhan yang memperkuat daya ingat. Salah satu cara menciptakan gerakan,  tulis ulang pelajaran yang tidak bisa dipraktekkan atau disentuh. Menuliskan ulang  diharapkan dapat sebagai pelengkap gerakan. Lengkapi ruang belajar dengan aksesoris berupa poster/gambar yang menunjukkan adanya gerakan.",
            "judul2": null,
            "isi2": null,
            "judul3": null,
            "isi3": null
        }
    });
}
const getLog=(req,res)=>{
    res.json({
        "status": true,
        "message": "Aktivitas ditemukan",
        "data": [
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "BAHASA INDONESIA, Teks Cerita Sejarah/ Rekon",
                "masuk": "2023-09-05 14:04:28",
                "keluar": null
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "BAHASA INDONESIA, Teks Cerita Sejarah/ Rekon",
                "masuk": "2023-09-05 14:04:28",
                "keluar": "2023-09-05 14:12:37"
            },
            {
                "id": "050111114701",
                "menu": "Latihan Extra",
                "detail": "Kemampuan Memahami Bacaan dan Menulis, LATEKS-248, Informasi isi teks (tersurat/ tersirat)",
                "masuk": "2023-09-05 11:14:30",
                "keluar": "2023-09-05 11:14:44"
            },
            {
                "id": "050111114701",
                "menu": "Video",
                "detail": "BAHASA INDONESIA, Analogi Masalah dalam Bacaan",
                "masuk": "2023-09-05 10:53:49",
                "keluar": "2023-09-05 10:54:24"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Sifat-sifat Gelombang",
                "masuk": "2023-09-05 10:53:17",
                "keluar": null
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Sifat-sifat Gelombang",
                "masuk": "2023-09-05 10:53:11",
                "keluar": "2023-09-05 10:53:17"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Hukum-hukum tentang Gas",
                "masuk": "2023-09-05 10:53:08",
                "keluar": null
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Hukum-hukum tentang Gas",
                "masuk": "2023-09-05 10:53:02",
                "keluar": "2023-09-05 10:53:07"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Momentum",
                "masuk": "2023-09-05 10:52:59",
                "keluar": "2023-09-05 10:53:00"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Momentum",
                "masuk": "2023-09-05 10:52:53",
                "keluar": "2023-09-05 10:52:53"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Momentum",
                "masuk": "2023-09-05 10:52:47",
                "keluar": "2023-09-05 10:52:52"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Resultan vektor",
                "masuk": "2023-09-05 10:52:45",
                "keluar": null
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Resultan vektor",
                "masuk": "2023-09-05 10:52:31",
                "keluar": "2023-09-05 10:52:44"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Gerak melingkar dengan laju konstan (tetap)-GMB",
                "masuk": "2023-09-05 10:52:30",
                "keluar": null
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "FISIKA, Gerak melingkar dengan laju konstan (tetap)-GMB",
                "masuk": "2023-09-05 10:52:26",
                "keluar": "2023-09-05 10:52:29"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "BAHASA INDONESIA, Teks Editorial",
                "masuk": "2023-09-05 10:52:09",
                "keluar": null
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "BAHASA INDONESIA, Teks Editorial",
                "masuk": "2023-09-05 10:52:05",
                "keluar": "2023-09-05 10:52:09"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "BAHASA INDONESIA, Teks Anekdot",
                "masuk": "2023-09-05 10:52:03",
                "keluar": "2023-09-05 10:52:04"
            },
            {
                "id": "050111114701",
                "menu": "Buku Teori",
                "detail": "BAHASA INDONESIA, Pidato Persuasif",
                "masuk": "2023-09-05 10:51:13",
                "keluar": null
            },
            {
                "id": "050111114701",
                "menu": "Video",
                "detail": "BAHASA INDONESIA, Analogi Masalah dalam Bacaan",
                "masuk": "2023-09-05 10:50:47",
                "keluar": "2023-09-05 10:50:56"
            },
            {
                "id": "050111114701",
                "menu": "Latihan Extra",
                "detail": "Kemampuan Memahami Bacaan dan Menulis, LATEKS-248, Judul Teks",
                "masuk": "2023-09-05 10:21:24",
                "keluar": "2023-09-05 10:23:09"
            },
            {
                "id": "050111114701",
                "menu": "Latihan Extra",
                "detail": "Kemampuan Memahami Bacaan dan Menulis, LATEKS-248, Informasi isi teks (tersurat/ tersirat)",
                "masuk": "2023-09-05 10:21:11",
                "keluar": "2023-09-05 10:21:17"
            },
            {
                "id": "050111114701",
                "menu": "Latihan Extra",
                "detail": "Kemampuan Memahami Bacaan dan Menulis, LATEKS-248, Informasi isi teks (tersurat/ tersirat)",
                "masuk": "2023-09-05 10:21:03",
                "keluar": "2023-09-05 10:21:07"
            }
        ]
    });
}
const getPresensi=(req,res)=>{
    res.json({
        "status": true,
        "message": "Berhasil mendapatkan presensi",
        "data": [
            {
                "date": "2023-08-28",
                "listPresences": [
                    {
                        "planId": "10440504",
                        "classId": "272153",
                        "studentClassId": "272153",
                        "className": "11-UMUM-R-N-12",
                        "flag": "Sama",
                        "date": "2023-08-28",
                        "presenceTime": "2023-08-28 18:56:12",
                        "teacherId": "2022164089",
                        "teacherName": "Noviana Adelita Rahmawan",
                        "scheduleStart": "2023-08-28 18:45:00",
                        "scheduleFinish": "2023-08-28 20:15:00",
                        "buildingName": "SARIKAYA 148",
                        "session": "1",
                        "lesson": "MATEMATIKA",
                        "activity": "KBM JPMP",
                        "isFeedback": false,
                        "feedbackPermission": false
                    },
                    {
                        "planId": "10440492",
                        "classId": "272153",
                        "studentClassId": "272153",
                        "className": "11-UMUM-R-N-12",
                        "flag": "Sama",
                        "date": "2023-08-28",
                        "presenceTime": "2023-08-28 18:04:21",
                        "teacherId": "1102500027",
                        "teacherName": "Rika Yetty Widyastuti",
                        "scheduleStart": "2023-08-28 16:45:00",
                        "scheduleFinish": "2023-08-28 18:15:00",
                        "buildingName": "SARIKAYA 148",
                        "session": "1",
                        "lesson": "SEJARAH",
                        "activity": "PTM Virtual",
                        "isFeedback": false,
                        "feedbackPermission": false
                    }
                ]
            },
            {
                "date": "2023-08-23",
                "listPresences": [
                    {
                        "planId": "10414098",
                        "classId": "272153",
                        "studentClassId": "272153",
                        "className": "11-UMUM-R-N-12",
                        "flag": "Sama",
                        "date": "2023-08-23",
                        "presenceTime": "2023-08-23 17:57:29",
                        "teacherId": "2022164089",
                        "teacherName": "Noviana Adelita Rahmawan",
                        "scheduleStart": "2023-08-23 16:45:00",
                        "scheduleFinish": "2023-08-23 18:15:00",
                        "buildingName": "SARIKAYA 148",
                        "session": "1",
                        "lesson": "MATEMATIKA TINGKAT LANJUT",
                        "activity": "KBM JPMP",
                        "isFeedback": false,
                        "feedbackPermission": false
                    }
                ]
            },
            {
                "date": "2023-08-07",
                "listPresences": [
                    {
                        "planId": "10204744",
                        "classId": "272153",
                        "studentClassId": "272153",
                        "className": "11-UMUM-R-N-12",
                        "flag": "Sama",
                        "date": "2023-08-07",
                        "presenceTime": "2023-08-07 19:14:20",
                        "teacherId": "2023535031",
                        "teacherName": "Vivid Ivearni Patriana Leodewi Darwanto",
                        "scheduleStart": "2023-08-07 18:45:00",
                        "scheduleFinish": "2023-08-07 20:15:00",
                        "buildingName": "SARIKAYA 148",
                        "session": "1",
                        "lesson": "MATEMATIKA",
                        "activity": "KBM JPMP",
                        "isFeedback": false,
                        "feedbackPermission": false
                    },
                    {
                        "planId": "10204733",
                        "classId": "272153",
                        "studentClassId": "272153",
                        "className": "11-UMUM-R-N-12",
                        "flag": "Sama",
                        "date": "2023-08-07",
                        "presenceTime": "2023-08-07 18:05:47",
                        "teacherId": "0902500399",
                        "teacherName": "USWATUN HASANAH",
                        "scheduleStart": "2023-08-07 16:45:00",
                        "scheduleFinish": "2023-08-07 18:15:00",
                        "buildingName": "SARIKAYA 148",
                        "session": "1",
                        "lesson": "BAHASA INDONESIA",
                        "activity": "KBM JPMP",
                        "isFeedback": false,
                        "feedbackPermission": false
                    }
                ]
            }
        ]
    });
}
const getkuis=(req,res)=>{
    res.json( {
        "status": true,
        "data": [
          {
            "cnamamapel": "Matematika",
            "info": [
              {"cKodeSoal": "SOAL001"},
              {"cKodeSoal": "SOAL002"},
              {"cKodeSoal": "SOAL003"}
            ]
          }
        ]
      });
}
const getTobk=(req,res)=>{
    res.json({
        "data": [
            {
                "kodeTOB": "6789",
                "namaTOB": "TOBK SUPER INTENSIF KE-1",
                "penilaian": "IRT",
                "tanggalAkhir": "2023-04-10 23:59:00",
                "tampilSolusi": "1",
                "info": [
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                        "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                        "pg": 689.24000000000001,
                        "nilai": 452
                    },
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                        "jurusan": "DESAIN PRODUK INDUSTRI",
                        "pg": 594.20000000000005,
                        "nilai": 452
                    }
                ],
                "listNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "472",
                    "Kemampuan Memahami Bacaan dan Menulis": "585",
                    "PENALARAN MATEMATIKA": "296",
                    "LITERASI DALAM BAHASA INDONESIA": "567",
                    "LITERASI DALAM BAHASA INGGRIS": "313",
                    "PENGETAHUAN KUANTITATIF": "975",
                    "KEMAMPUAN PENALARAN UMUM": "0"
                },
                "link": "http://epb.ganeshaoperation.com/epb/?v=VG1wak5FOVRPREpPZW1jMVRHcEJNVTFFUlhoTlZFVjRUa1JqZDAxVE5YZGFSMWs5",
                "isexists": true
            },
            {
                "kodeTOB": "7789",
                "namaTOB": "TOBK SUPER INTENSIF KE-3",
                "penilaian": "IRT",
                "tanggalAkhir": "2023-04-17 23:59:00",
                "tampilSolusi": "1",
                "info": [
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                        "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                        "pg": 689.24000000000001,
                        "nilai": 208.44999999999999
                    },
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                        "jurusan": "DESAIN PRODUK INDUSTRI",
                        "pg": 594.20000000000005,
                        "nilai": 208.44999999999999
                    }
                ],
                "listNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "284",
                    "Kemampuan Memahami Bacaan dan Menulis": "273",
                    "PENALARAN MATEMATIKA": null,
                    "LITERASI DALAM BAHASA INDONESIA": null,
                    "LITERASI DALAM BAHASA INGGRIS": null,
                    "PENGETAHUAN KUANTITATIF": "309",
                    "KPU - PENALARAN DEDUKTIF": "548",
                    "KPU - PENALARAN INDUKTIF": "705",
                    "KPU - PENALARAN KUANTITATIF": "318",
                    "KEMAMPUAN PENALARAN UMUM": "0"
                },
                "link": "http://epb.ganeshaoperation.com/epb/?v=VG5wak5FOVRPRE5PZW1jMVRHcEJNVTFFUlhoTlZFVjRUa1JqZDAxVE5YZGFSMWs5",
                "isexists": true
            },
            {
                "kodeTOB": "10535",
                "namaTOB": "TOBK SUPER INTENSIF KE-6",
                "penilaian": "IRT",
                "tanggalAkhir": "2023-05-10 23:59:00",
                "tampilSolusi": "1",
                "info": [
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                        "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                        "pg": 689.24000000000001,
                        "nilai": 356.75
                    },
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                        "jurusan": "DESAIN PRODUK INDUSTRI",
                        "pg": 594.20000000000005,
                        "nilai": 356.75
                    }
                ],
                "listNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "728",
                    "Kemampuan Memahami Bacaan dan Menulis": "705",
                    "PENALARAN MATEMATIKA": "0",
                    "LITERASI DALAM BAHASA INDONESIA": "443",
                    "LITERASI DALAM BAHASA INGGRIS": "0",
                    "PENGETAHUAN KUANTITATIF": "0",
                    "KPU - PENALARAN DEDUKTIF": "0",
                    "KPU - PENALARAN INDUKTIF": "0",
                    "KPU - PENALARAN KUANTITATIF": "0",
                    "KEMAMPUAN PENALARAN UMUM": "650"
                },
                "link": "http://epb.ganeshaoperation.com/epb/?v=VFZSQk1VMTZWWFpOVkVFeFRYcFZkVTFFVlhkTlZFVjRUVlJGTUU1NlFYaE1ia0pyV21jOVBRPT0=",
                "isexists": true
            },
            {
                "kodeTOB": "15295",
                "namaTOB": "TOBK NASIONAL 2023",
                "penilaian": "IRT",
                "tanggalAkhir": "2023-07-30 23:59:00",
                "tampilSolusi": "1",
                "info": [
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                        "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                        "pg": 689.24000000000001,
                        "nilai": 724.5
                    },
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                        "jurusan": "DESAIN PRODUK INDUSTRI",
                        "pg": 594.20000000000005,
                        "nilai": 724.5
                    }
                ],
                "listNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "573",
                    "Kemampuan Memahami Bacaan dan Menulis": "546",
                    "PENALARAN MATEMATIKA": "1000",
                    "LITERASI DALAM BAHASA INDONESIA": "578",
                    "LITERASI DALAM BAHASA INGGRIS": "464",
                    "PENGETAHUAN KUANTITATIF": "911",
                    "KEMAMPUAN PENALARAN UMUM": "772"
                },
                "link": "http://epb.ganeshaoperation.com/epb/?v=VFZSVmVVOVVWWFpOVkZWNVQxUlZkVTFFVlhkTlZFVjRUVlJGTUU1NlFYaE1ia0pyV21jOVBRPT0=",
                "isexists": true
            },
            {
                "kodeTOB": "15296",
                "namaTOB": "TOBK Nasional 2023",
                "penilaian": "IRT",
                "tanggalAkhir": "2023-07-30 23:59:59",
                "tampilSolusi": "1",
                "info": [
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                        "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                        "pg": 689.24000000000001,
                        "nilai": 721.95000000000005
                    },
                    {
                        "kelompok": "0301",
                        "namakelompok": "SAINTEK",
                        "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                        "jurusan": "DESAIN PRODUK INDUSTRI",
                        "pg": 594.20000000000005,
                        "nilai": 721.95000000000005
                    }
                ],
                "listNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "570",
                    "Kemampuan Memahami Bacaan dan Menulis": "577",
                    "PENALARAN MATEMATIKA": "801",
                    "LITERASI DALAM BAHASA INDONESIA": "767",
                    "LITERASI DALAM BAHASA INGGRIS": "814",
                    "PENGETAHUAN KUANTITATIF": "1000",
                    "KEMAMPUAN PENALARAN UMUM": "544"
                },
                "link": "http://epb.ganeshaoperation.com/epb/?v=VFZSVmVVOVVXWFpOVkZWNVQxUlpkVTFFVlhkTlZFVjRUVlJGTUU1NlFYaE1ia0pyV21jOVBRPT0=",
                "isexists": true
            }
        ],
        "status": true,
        "message": {
            "result": true,
            "data": [
                {
                    "kodeTOB": "6789",
                    "namaTOB": "TOBK SUPER INTENSIF KE-1",
                    "penilaian": "IRT",
                    "tanggalAkhir": "2023-04-10 23:59:00",
                    "tampilSolusi": "1",
                    "info": [
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                            "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                            "pg": 689.24000000000001,
                            "nilai": 452
                        },
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                            "jurusan": "DESAIN PRODUK INDUSTRI",
                            "pg": 594.20000000000005,
                            "nilai": 452
                        }
                    ],
                    "listNilai": {
                        "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "472",
                        "Kemampuan Memahami Bacaan dan Menulis": "585",
                        "PENALARAN MATEMATIKA": "296",
                        "LITERASI DALAM BAHASA INDONESIA": "567",
                        "LITERASI DALAM BAHASA INGGRIS": "313",
                        "PENGETAHUAN KUANTITATIF": "975",
                        "KEMAMPUAN PENALARAN UMUM": "0"
                    },
                    "link": "http://epb.ganeshaoperation.com/epb/?v=VG1wak5FOVRPREpPZW1jMVRHcEJNVTFFUlhoTlZFVjRUa1JqZDAxVE5YZGFSMWs5",
                    "isexists": true
                },
                {
                    "kodeTOB": "7789",
                    "namaTOB": "TOBK SUPER INTENSIF KE-3",
                    "penilaian": "IRT",
                    "tanggalAkhir": "2023-04-17 23:59:00",
                    "tampilSolusi": "1",
                    "info": [
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                            "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                            "pg": 689.24000000000001,
                            "nilai": 208.44999999999999
                        },
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                            "jurusan": "DESAIN PRODUK INDUSTRI",
                            "pg": 594.20000000000005,
                            "nilai": 208.44999999999999
                        }
                    ],
                    "listNilai": {
                        "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "284",
                        "Kemampuan Memahami Bacaan dan Menulis": "273",
                        "PENALARAN MATEMATIKA": null,
                        "LITERASI DALAM BAHASA INDONESIA": null,
                        "LITERASI DALAM BAHASA INGGRIS": null,
                        "PENGETAHUAN KUANTITATIF": "309",
                        "KPU - PENALARAN DEDUKTIF": "548",
                        "KPU - PENALARAN INDUKTIF": "705",
                        "KPU - PENALARAN KUANTITATIF": "318",
                        "KEMAMPUAN PENALARAN UMUM": "0"
                    },
                    "link": "http://epb.ganeshaoperation.com/epb/?v=VG5wak5FOVRPRE5PZW1jMVRHcEJNVTFFUlhoTlZFVjRUa1JqZDAxVE5YZGFSMWs5",
                    "isexists": true
                },
                {
                    "kodeTOB": "10535",
                    "namaTOB": "TOBK SUPER INTENSIF KE-6",
                    "penilaian": "IRT",
                    "tanggalAkhir": "2023-05-10 23:59:00",
                    "tampilSolusi": "1",
                    "info": [
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                            "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                            "pg": 689.24000000000001,
                            "nilai": 356.75
                        },
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                            "jurusan": "DESAIN PRODUK INDUSTRI",
                            "pg": 594.20000000000005,
                            "nilai": 356.75
                        }
                    ],
                    "listNilai": {
                        "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "728",
                        "Kemampuan Memahami Bacaan dan Menulis": "705",
                        "PENALARAN MATEMATIKA": "0",
                        "LITERASI DALAM BAHASA INDONESIA": "443",
                        "LITERASI DALAM BAHASA INGGRIS": "0",
                        "PENGETAHUAN KUANTITATIF": "0",
                        "KPU - PENALARAN DEDUKTIF": "0",
                        "KPU - PENALARAN INDUKTIF": "0",
                        "KPU - PENALARAN KUANTITATIF": "0",
                        "KEMAMPUAN PENALARAN UMUM": "650"
                    },
                    "link": "http://epb.ganeshaoperation.com/epb/?v=VFZSQk1VMTZWWFpOVkVFeFRYcFZkVTFFVlhkTlZFVjRUVlJGTUU1NlFYaE1ia0pyV21jOVBRPT0=",
                    "isexists": true
                },
                {
                    "kodeTOB": "15295",
                    "namaTOB": "TOBK NASIONAL 2023",
                    "penilaian": "IRT",
                    "tanggalAkhir": "2023-07-30 23:59:00",
                    "tampilSolusi": "1",
                    "info": [
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                            "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                            "pg": 689.24000000000001,
                            "nilai": 724.5
                        },
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                            "jurusan": "DESAIN PRODUK INDUSTRI",
                            "pg": 594.20000000000005,
                            "nilai": 724.5
                        }
                    ],
                    "listNilai": {
                        "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "573",
                        "Kemampuan Memahami Bacaan dan Menulis": "546",
                        "PENALARAN MATEMATIKA": "1000",
                        "LITERASI DALAM BAHASA INDONESIA": "578",
                        "LITERASI DALAM BAHASA INGGRIS": "464",
                        "PENGETAHUAN KUANTITATIF": "911",
                        "KEMAMPUAN PENALARAN UMUM": "772"
                    },
                    "link": "http://epb.ganeshaoperation.com/epb/?v=VFZSVmVVOVVWWFpOVkZWNVQxUlZkVTFFVlhkTlZFVjRUVlJGTUU1NlFYaE1ia0pyV21jOVBRPT0=",
                    "isexists": true
                },
                {
                    "kodeTOB": "15296",
                    "namaTOB": "TOBK Nasional 2023",
                    "penilaian": "IRT",
                    "tanggalAkhir": "2023-07-30 23:59:59",
                    "tampilSolusi": "1",
                    "info": [
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                            "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                            "pg": 689.24000000000001,
                            "nilai": 721.95000000000005
                        },
                        {
                            "kelompok": "0301",
                            "namakelompok": "SAINTEK",
                            "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                            "jurusan": "DESAIN PRODUK INDUSTRI",
                            "pg": 594.20000000000005,
                            "nilai": 721.95000000000005
                        }
                    ],
                    "listNilai": {
                        "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "570",
                        "Kemampuan Memahami Bacaan dan Menulis": "577",
                        "PENALARAN MATEMATIKA": "801",
                        "LITERASI DALAM BAHASA INDONESIA": "767",
                        "LITERASI DALAM BAHASA INGGRIS": "814",
                        "PENGETAHUAN KUANTITATIF": "1000",
                        "KEMAMPUAN PENALARAN UMUM": "544"
                    },
                    "link": "http://epb.ganeshaoperation.com/epb/?v=VFZSVmVVOVVXWFpOVkZWNVQxUlpkVTFFVlhkTlZFVjRUVlJGTUU1NlFYaE1ia0pyV21jOVBRPT0=",
                    "isexists": true
                }
            ]
        }
    });
}
const getNilaiTobk=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data nilai siswa ditemukan",
        "data": {
            "pilihan": [
                {
                    "kelompok": "0301",
                    "namakelompok": "SAINTEK",
                    "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                    "jurusan": "SEKOLAH TEK. ELEKTRO & INFORMATIKA (STEI)",
                    "pg": 689.24,
                    "nilai": 721.95
                },
                {
                    "kelompok": "0301",
                    "namakelompok": "SAINTEK",
                    "ptn": "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
                    "jurusan": "DESAIN PRODUK INDUSTRI",
                    "pg": 594.2,
                    "nilai": 721.95
                }
            ],
            "nilai": [
                {
                    "namaKelompokUjian": "Kemampuan Memahami Bacaan dan Menulis",
                    "benar": 4,
                    "salah": 1,
                    "kosong": 5,
                    "kodeSoal": "TO-001087",
                    "jumlahSoal": 0,
                    "nilai": 577,
                    "nilaiMax": 0
                },
                {
                    "namaKelompokUjian": "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM",
                    "benar": 5,
                    "salah": 5,
                    "kosong": 0,
                    "kodeSoal": "TO-001087",
                    "jumlahSoal": 0,
                    "nilai": 570,
                    "nilaiMax": 0
                },
                {
                    "namaKelompokUjian": "LITERASI DALAM BAHASA INDONESIA",
                    "benar": 10,
                    "salah": 0,
                    "kosong": 0,
                    "kodeSoal": "TO-001087",
                    "jumlahSoal": 0,
                    "nilai": 767,
                    "nilaiMax": 0
                },
                {
                    "namaKelompokUjian": "PENGETAHUAN KUANTITATIF",
                    "benar": 8,
                    "salah": 2,
                    "kosong": 0,
                    "kodeSoal": "TO-001087",
                    "jumlahSoal": 0,
                    "nilai": 1000,
                    "nilaiMax": 0
                },
                {
                    "namaKelompokUjian": "LITERASI DALAM BAHASA INGGRIS",
                    "benar": 10,
                    "salah": 0,
                    "kosong": 0,
                    "kodeSoal": "TO-001087",
                    "jumlahSoal": 0,
                    "nilai": 814,
                    "nilaiMax": 0
                },
                {
                    "namaKelompokUjian": "PENALARAN MATEMATIKA",
                    "benar": 7,
                    "salah": 2,
                    "kosong": 1,
                    "kodeSoal": "TO-001087",
                    "jumlahSoal": 0,
                    "nilai": 801,
                    "nilaiMax": 0
                },
                {
                    "namaKelompokUjian": "KEMAMPUAN PENALARAN UMUM",
                    "benar": 12,
                    "salah": 3,
                    "kosong": 0,
                    "kodeSoal": "TO-001087",
                    "jumlahSoal": 0,
                    "nilai": 544,
                    "nilaiMax": 0
                }
            ]
        }
    });
}
const getGOA=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data Bab ditemukan",
        "data": {
            "jumRemedial": 1,
            "hasil": [
                {
                    "benar": 4,
                    "salah": 0,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 21,
                    "namaKelompokUjian": "GOA - BAGIAN A"
                },
                {
                    "benar": 8,
                    "salah": 0,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 22,
                    "namaKelompokUjian": "GOA - BAGIAN B"
                },
                {
                    "benar": 4,
                    "salah": 1,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 23,
                    "namaKelompokUjian": "GOA - BAGIAN C"
                },
                {
                    "benar": 2,
                    "salah": 2,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 24,
                    "namaKelompokUjian": "GOA - BAGIAN D"
                },
                {
                    "benar": 3,
                    "salah": 2,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 25,
                    "namaKelompokUjian": "GOA - BAGIAN E"
                },
                {
                    "benar": 3,
                    "salah": 2,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 26,
                    "namaKelompokUjian": "GOA - BAGIAN F"
                },
                {
                    "benar": 4,
                    "salah": 1,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 27,
                    "namaKelompokUjian": "GOA - BAGIAN G"
                },
                {
                    "benar": 5,
                    "salah": 0,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 28,
                    "namaKelompokUjian": "GOA - BAGIAN H"
                },
                {
                    "benar": 3,
                    "salah": 2,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 29,
                    "namaKelompokUjian": "GOA - BAGIAN I"
                },
                {
                    "benar": 1,
                    "salah": 1,
                    "kosong": 0,
                    "isLulus": 1,
                    "targetLulus": null,
                    "idKelompokUjian": 30,
                    "namaKelompokUjian": "GOA - BAGIAN J"
                }
            ]
        }
    })
}
module.exports={
    getVak,
    getLog,
    getPresensi,
    getkuis,
    getTobk,
    getNilaiTobk
}