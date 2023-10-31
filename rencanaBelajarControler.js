const getrencanalist=(req,res)=>{
   res.json({
    "status": true,
    "message": "Data rencana belajar ditemukan",
    "data": [
        {
            "c_Id": "6724",
            "c_NoRegister": "981123000001",
            "c_TglBuat": "2023-09-06 13:42:25",
            "c_Menu": "TOBK",
            "c_Keterangan": "Mengerjakan TryOut TOBK SEPTEMBER 12 IPA K13R dimulai pada [00:00] 04 Nov 2023 sampai dengan [23:59] 10 Sep 2023",
            "c_Awal": "2023-11-2 09:37:00",
            "c_Akhir": "2023-11-5 05:00:00",
            "c_LastUpdate": null,
            "c_isdone": "n",
            "c_argument": {
                "kodeTOB": "17053",
                "namaTOB": "TOBK SEPTEMBER 12 IPA K13R",
                "keterangan": "Mengerjakan TryOut TOBK SEPTEMBER 12 IPA K13R dimulai pada [00:00] 04 Nov 2023 sampai dengan [23:59] 10 Sep 2023",
                "idJenisProduk": 25,
                "namaJenisProduk": "e-TOBK"
            }
        },
        {
            "c_Id": "6723",
            "c_NoRegister": "981123000001",
            "c_TglBuat": "2023-10-11 13:41:27",
            "c_Menu": "TOBK",
            "c_Keterangan": "Mengerjakan TryOut TOBK SEPTEMBER 12 IPA K13R dimulai pada [00:00] 04 Nov 2023 sampai dengan [23:59] 10 Sep 2023",
            "c_Awal": "2023-11-6 01:00:00",
            "c_Akhir": "2023-11-12 02:00:00",
            "c_LastUpdate": null,
            "c_isdone": "n",
            "c_argument": {
                "kodeTOB": "17053",
                "namaTOB": "TOBK SEPTEMBER 12 IPA K13R",
                "keterangan": "Mengerjakan TryOut TOBK SEPTEMBER 12 IPA K13R dimulai pada [00:00] 04 Nov 2023 sampai dengan [23:59] 10 Sep 2023",
                "idJenisProduk": 25,
                "namaJenisProduk": "e-TOBK"
            }
        }
    ]
});
}

const getrencanamenu=(req,res)=>{
    res.json({
        "status": true,
        "data": [
            {
                "idJenisProduk": 0,
                "namaJenisProduk": "Pilih",
                "label": "Pilih Menu",
                "warna": "#ffffff"
            },
            {
                "idJenisProduk": 25,
                "namaJenisProduk": "e-TOBK",
                "label": "TOBK",
                "warna": "#ffd6a5"
            },
            {
                "idJenisProduk": 76,
                "namaJenisProduk": "e-Latihan Ekstra",
                "label": "Latihan Ekstra",
                "warna": "#ffadad"
            },
            {
                "idJenisProduk": 71,
                "namaJenisProduk": "e-Empati Mandiri",
                "label": "Empati Mandiri",
                "warna": "#F99183"
            },
            {
                "idJenisProduk": 72,
                "namaJenisProduk": "e-Empati Wajib",
                "label": "Empati Wajib",
                "warna": "#FDBDAD"
            },
            {
                "idJenisProduk": 77,
                "namaJenisProduk": "e-Paket Intensif",
                "label": "Paket Intensif",
                "warna": "#AFF9C9"
            },
            {
                "idJenisProduk": 78,
                "namaJenisProduk": "e-Paket Soal Koding",
                "label": "Paket Soal Koding",
                "warna": "#67E0A3"
            },
            {
                "idJenisProduk": 79,
                "namaJenisProduk": "e-Pendalaman Materi",
                "label": "Pendalaman Materi",
                "warna": "#caffbf"
            },
            {
                "idJenisProduk": 82,
                "namaJenisProduk": "e-SoRef",
                "label": "Soal Referensi",
                "warna": "#AFF9C9"
            },
            {
                "idJenisProduk": 80,
                "namaJenisProduk": "e-Racing",
                "label": "Racing Soal",
                "warna": "#ffd6a5"
            },
            {
                "idJenisProduk": 16,
                "namaJenisProduk": "e-Kuis",
                "label": "Kuis",
                "warna": "#ffd6a5"
            },
            {
                "idJenisProduk": 12,
                "namaJenisProduk": "e-GOA",
                "label": "GO Assessment",
                "warna": "#a0c4ff"
            },
            {
                "idJenisProduk": 65,
                "namaJenisProduk": "e-VAK",
                "label": "Tes VAK",
                "warna": "#a0c4ff"
            },
            {
                "idJenisProduk": 88,
                "namaJenisProduk": "e-Video Teori",
                "label": "Video",
                "warna": "#ffc6ff"
            },
            {
                "idJenisProduk": 59,
                "namaJenisProduk": "e-Teori",
                "label": "Buku Teori",
                "warna": "#bdb2ff"
            },
            {
                "idJenisProduk": 46,
                "namaJenisProduk": "e-Rumus",
                "label": "Buku Rumus",
                "warna": "#bdb2ff"
            }
        ]
    });
}
module.exports={
    getrencanalist,
    getrencanamenu
}
