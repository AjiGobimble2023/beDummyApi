const getBookmark=(req,res)=>{
    res.json(
        {
            "status": true,
            "message": "Bookmark didapatkan",
            "data": [
                {
                    "iconMapel": "https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/icon%2Fmapel%2Fmapel_matematika.webp?alt=media&token=c2641f9f-b8f0-42c9-90e7-488a759aaf78",
                    "listBookmark": [],
                    "idKelompokUjian": "108",
                    "namaKelompokUjian": "PENALARAN MATEMATIKA",
                    "initial":"Mtk"
                },
                {
                    "iconMapel": "https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/icon%2Fmapel%2Fmapel_indo.webp?alt=media&token=c2641f9f-b8f0-42c9-90e7-488a759aaf78",
                    "listBookmark": [
                        {
                            "idSoal": "278136",
                            "isPaket": false,
                            "kodeBab": "06.02.05",
                            "kodeTOB": "574",
                            "namaBab": "Tanda Baca",
                            "idBundel": "2015",
                            "isSimpan": true,
                            "kodePaket": "LATEKS-118",
                            "nomorSoal": 37,
                            "lastUpdate": "2023-02-16 09:07:54",
                            "idJenisProduk": 76,
                            "nomorSoalSiswa": 1,
                            "namaJenisProduk": "e-Latihan Extra",
                            "tanggalKedaluwarsa": null
                        },
                        {
                            "idSoal": "159064",
                            "isPaket": false,
                            "kodeBab": "06.07.02",
                            "kodeTOB": "574",
                            "namaBab": "Prosa",
                            "idBundel": "2015",
                            "isSimpan": true,
                            "kodePaket": "LATEKS-118",
                            "nomorSoal": 180,
                            "lastUpdate": "2023-03-02 08:06:01",
                            "idJenisProduk": 76,
                            "nomorSoalSiswa": 10,
                            "namaJenisProduk": "e-Latihan Extra",
                            "tanggalKedaluwarsa": null
                        }
                    ],
                    "idKelompokUjian": "109",
                    "namaKelompokUjian": "LITERASI DALAM BAHASA INDONESIA",
                    "initial":"PK"
                },
                {
                    "iconMapel": null,
                    "listBookmark": [
                        {
                            "idSoal": "178045",
                            "isPaket": false,
                            "kodeBab": "01.34.03",
                            "kodeTOB": "574",
                            "namaBab": "Luas Bangun datar",
                            "idBundel": "2361",
                            "isSimpan": true,
                            "kodePaket": "LATEKS-118",
                            "nomorSoal": 181,
                            "lastUpdate": "2023-02-24 07:33:31",
                            "idJenisProduk": 76,
                            "nomorSoalSiswa": 13,
                            "namaJenisProduk": "e-Latihan Extra",
                            "tanggalKedaluwarsa": null
                        }
                    ],
                    "idKelompokUjian": "13",
                    "namaKelompokUjian": "TPS - PENGETAHUAN KUANTITATIF",
                    "initial":"OK"
                },
                {
                    "iconMapel": "https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/icon%2Fmapel%2Fmapel_matematika.webp?alt=media&token=c2641f9f-b8f0-42c9-90e7-488a759aaf78",
                    "listBookmark": [
                        {
                            "idSoal": "268029",
                            "isPaket": false,
                            "kodeBab": "01.16.02.01",
                            "kodeTOB": "574",
                            "namaBab": "Dadu",
                            "idBundel": "1621",
                            "isSimpan": true,
                            "kodePaket": "LATEKS-118",
                            "nomorSoal": 303,
                            "lastUpdate": "2023-02-19 12:22:39",
                            "idJenisProduk": 76,
                            "nomorSoalSiswa": 1,
                            "namaJenisProduk": "e-Latihan Extra",
                            "tanggalKedaluwarsa": null
                        }
                    ],
                    "idKelompokUjian": "2",
                    "namaKelompokUjian": "MATEMATIKA WAJIB"
                },
                {
                    "iconMapel": "https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/icon%2Fmapel%2Ftps_pemahaman_membaca_dan_menulis.webp?alt=media&token=c2641f9f-b8f0-42c9-90e7-488a759aaf78",
                    "listBookmark": [
                        {
                            "idSoal": "238589",
                            "isPaket": false,
                            "kodeBab": "06.02.05",
                            "kodeTOB": "574",
                            "namaBab": "Tanda Baca",
                            "idBundel": "2127",
                            "isSimpan": true,
                            "kodePaket": "LATEKS-118",
                            "nomorSoal": 139,
                            "lastUpdate": "2023-03-01 19:36:24",
                            "idJenisProduk": 76,
                            "nomorSoalSiswa": 9,
                            "namaJenisProduk": "e-Latihan Extra",
                            "tanggalKedaluwarsa": null
                        }
                    ],
                    "idKelompokUjian": "43",
                    "namaKelompokUjian": "TPS - PEMAHAMAN BACAAN DAN MENULIS",
                }
            ]
        }
    );
}

module.exports={
    getBookmark
}