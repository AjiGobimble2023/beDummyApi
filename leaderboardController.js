const getLeaderboard=(req,res)=>{
    res.json({
        "status": true,
        "message": "*Rangking dan skor diupdate pada 12 July 2023 10:00 WIB",
        "data": {
            "pesan": "*Rangking dan skor diupdate pada 12 July 2023 10:00 WIB",
            "national": {
                "topfive": [
                    {
                        "id": "050307011501",
                        "fullName": "MIRELLA HAYU NOVITASARI",
                        "level": "14",
                        "sort": "1",
                        "rank": "1",
                        "total": "114292"
                    },
                    {
                        "id": "060125038001",
                        "fullName": "NATHANYA TAMPUBOLON",
                        "level": "14",
                        "sort": "2",
                        "rank": "2",
                        "total": "72288"
                    },
                    {
                        "id": "040318062601",
                        "fullName": "ARIQ ABDAN SHABBAH",
                        "level": "14",
                        "sort": "3",
                        "rank": "3",
                        "total": "68773"
                    },
                    {
                        "id": "041124064301",
                        "fullName": "ALDA LOSARINA KUSUMA DEWI",
                        "level": "14",
                        "sort": "4",
                        "rank": "4",
                        "total": "68340"
                    },
                    {
                        "id": "061218038001",
                        "fullName": "NANCY NADINE NATALIONIVA S",
                        "level": "14",
                        "sort": "5",
                        "rank": "5",
                        "total": "66705"
                    },
                    {
                        "id": "050923044401",
                        "fullName": "AKBAR FADILLAH",
                        "level": "14",
                        "sort": "6",
                        "rank": "6",
                        "total": "65143"
                    },
                    {
                        "id": "041015113201",
                        "fullName": "MAISIE SANIYYAH",
                        "level": "14",
                        "sort": "7",
                        "rank": "7",
                        "total": "63701"
                    },
                    {
                        "id": "050609008402",
                        "fullName": "DARREN REKMAL GRADIA",
                        "level": "14",
                        "sort": "8",
                        "rank": "8",
                        "total": "60587"
                    },
                    {
                        "id": "050515008401",
                        "fullName": "BELLA AULIA PUTRI",
                        "level": "14",
                        "sort": "9",
                        "rank": "9",
                        "total": "59461"
                    },
                    {
                        "id": "051005037701",
                        "fullName": "WINDA CHAIRUNNUR HAMID",
                        "level": "14",
                        "sort": "10",
                        "rank": "10",
                        "total": "47440"
                    }
                ],
                "myrank": [
                    {
                        "id": "050906018901",
                        "fullName": "TIRZA KRISTIANITA",
                        "level": "14",
                        "sort": "36162",
                        "rank": "36162",
                        "total": "97"
                    },
                    {
                        "id": "050916008201",
                        "fullName": "AMALIA LATIF",
                        "level": "14",
                        "sort": "36163",
                        "rank": "36163",
                        "total": "97"
                    },
                    {
                        "id": "051024016502",
                        "fullName": "ZASKIA RAMADANI MUSLIM",
                        "level": "14",
                        "sort": "36164",
                        "rank": "36164",
                        "total": "97"
                    },
                    {
                        "id": "051129028101",
                        "fullName": "SAUSAN SHALIHAH ALFIRDAUSI",
                        "level": "14",
                        "sort": "36165",
                        "rank": "36165",
                        "total": "97"
                    },
                    {
                        "id": "060101046201",
                        "fullName": "JANUARI WIDODO SITUMEANG",
                        "level": "14",
                        "sort": "36166",
                        "rank": "36166",
                        "total": "97"
                    }
                ]
            }
        }
    });
}

const getFristrank = (req,res)=>{
    res.json({
        "status": true,
        "data": [
            {
                "cNIS": "70511000101",
                "ctotal": "2819",
                "tipe": "Gedung",
                "cnamalengkap": "AZHAD MUHAMMAD SI",
                "noRegistrasi": "70511000101",
                "score": "2819",
                "namaLengkap": "AZHAD MUHAMMAD SI",
                "url": "https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/avatar%2Fb-6.png?alt=media&token=8bfb2b14-2d49-4d7a-9917-a6966c88773a"
            },
            {
                "cNIS": "51003000201",
                "ctotal": "5254",
                "tipe": "Kota",
                "cnamalengkap": "HELENA KRISTELA SARHAWA",
                "noRegistrasi": "51003000201",
                "score": "5254",
                "namaLengkap": "HELENA KRISTELA SARHAWA",
                "url": "https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/avatar%2Fg-4.png?alt=media&token=8bfb2b14-2d49-4d7a-9917-a6966c88773a"
            },
            {
                "cNIS": "60616021401",
                "ctotal": "9765",
                "tipe": "Nasional",
                "cnamalengkap": "ASSYLA ZALFA MAUDILLA",
                "noRegistrasi": "60616021401",
                "score": "9765",
                "namaLengkap": "ASSYLA ZALFA MAUDILLA",
                "url": "https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/avatar%2Fg-1.png?alt=media&token=8bfb2b14-2d49-4d7a-9917-a6966c88773a"
            }
        ]
    });
}

const getCapaian = (req,res)=>{
    res.json({
        "status": true,
        "message": "Capaian kamu ditemukan",
        "data": {
            "detail": {
                "benarlevel1": 42,
                "benarlevel2": 33,
                "benarlevel3": 94,
                "benarlevel4": 40,
                "benarlevel5": 5,
                "salahlevel1": 22,
                "salahlevel2": 12,
                "salahlevel3": 30,
                "salahlevel4": 12,
                "salahlevel5": 0
            },
            "totalScore": 572,
            "targetJumlahSoal": 10000,
            "totalSoal": 290,
            "totalSoalBenar": 214,
            "totalSoalSalah": 76,
            "rankGedung": 5,
            "rankKota": 50,
            "rankNasional": 1948
        }
    });
}

const getCBar =(req,res)=>{
    res.json({
        "status": true,
        "message": "Total soal ditemukan",
        "data": [
            {
                "cidmapel": "6",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "2",
                "salahharian": "1",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Matematika',
                'initial': 'MAT'
            },
            {
                "cidmapel": "51",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Matematika',
                'initial': 'MAT'
            },
            {
                "cidmapel": "35",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Matematika',
                'initial': 'MAT'
            },
            {
                "cidmapel": "48",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Matematika',
                'initial': 'MAT'
            },
            {
                "cidmapel": "36",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Matematika',
                'initial': 'MAT'
            },
            {
                "cidmapel": "45",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Matematika',
                'initial': 'MAT'
            },
            {
                "cidmapel": "111",
                "targetharian": "4",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "28",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "120",
                "pengerjaanbulanan": "4",
                "benarbulanan": "4",
                "salahbulanan": "0",
                'nama': 'Matematika',
                'initial': 'MAT'
            },
            {
                "cidmapel": "113",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Matematika',
                'initial': 'MAT'
            },
            {
                "cidmapel": "40",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Bahasa Inggris',
                'initial': 'ING'
            },
            {
                "cidmapel": "114",
                "targetharian": "1",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "7",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "30",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Bahasa Indonesia',
                'initial': 'BI'
            },
            {
                "cidmapel": "112",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Matematika Peminatan',
                'initial': 'MAP'
            },
            {
                "cidmapel": "50",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "0",
                "benarbulanan": "0",
                "salahbulanan": "0",
                'nama': 'Matematika Wajib',
                'initial': 'MAW'
            },
            {
                "cidmapel": "32",
                "targetharian": "3",
                "pengerjaanharian": "0",
                "benarharian": "0",
                "salahharian": "0",
                "targetmingguan": "21",
                "pengerjaanmingguan": "0",
                "benarmingguan": "0",
                "salahmingguan": "0",
                "targetbulanan": "90",
                "pengerjaanbulanan": "10",
                "benarbulanan": "10",
                "salahbulanan": "0",
                'nama': 'Matematika',
                'initial': 'MAT'
            }
        ]
    });
}

const getracing =(req,res)=>{
    res.json({
        "status": true,
        "message": "Berhasil mendapatkan data leaderboard",
        "data": {
            "topfive": [
                {
                    "id": "060810068301",
                    "fullName": "-",
                    "level": "14",
                    "sort": "1",
                    "rank": "1",
                    "total": "0.90"
                },
                {
                    "id": "061112000201",
                    "fullName": "SHABRINA FILDZAH RAHMAH",
                    "level": "14",
                    "sort": "2",
                    "rank": "2",
                    "total": "0.48"
                },
                {
                    "id": "051231114764",
                    "fullName": "Tini Hartini Uji Coba",
                    "level": "14",
                    "sort": "3",
                    "rank": "3",
                    "total": "0.43"
                },
                {
                    "id": "060708003501",
                    "fullName": "ZASKIAH ZARWAH ZURIANTY",
                    "level": "14",
                    "sort": "4",
                    "rank": "4",
                    "total": "0.40"
                },
                {
                    "id": "061030003501",
                    "fullName": "ADELIA DWI OKTAVIANI",
                    "level": "14",
                    "sort": "5",
                    "rank": "5",
                    "total": "0.40"
                }
            ],
            "myrank": [
                {
                    "id": "060810068301",
                    "fullName": "-",
                    "level": "14",
                    "sort": "1",
                    "rank": "1",
                    "total": "0.90"
                },
                {
                    "id": "061112000201",
                    "fullName": "SHABRINA FILDZAH RAHMAH",
                    "level": "14",
                    "sort": "2",
                    "rank": "2",
                    "total": "0.48"
                },
                {
                    "id": "051231114764",
                    "fullName": "Tini Hartini Uji Coba",
                    "level": "14",
                    "sort": "3",
                    "rank": "3",
                    "total": "0.43"
                }
            ]
        }
    });
}
module.exports ={
    getLeaderboard,
    getFristrank,
    getCapaian,
    getCBar,
    getracing
}