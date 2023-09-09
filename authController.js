// loginController.js
const handleLogin = (req, res) => {
    const requestData = req.body;
      // Lakukan apa pun yang ingin Anda lakukan dengan data yang diterima
      console.log('Data yang diterima:', requestData);
    
      // Mengirimkan respons kembali dengan data yang diterima
      res.json({
        "status": true,
        "message": "Berhasil masuk",
        "data": {
            "noRegistrasi": "040916026101",
            "namaLengkap": "YAZID FAUZAN HARTONO",
            "idSekolahKelas": "15",
            "namaSekolahKelas": "12 SMA IPS",
            "siapa": "ORANG TUA",
            "idKelas": "254562,266691",
            "namaKelas": "12-IPS-R-N-2202,12-IPA-R-N-B01",
            "jenisKelas": "REGULER NON SD",
            "idGedung": "261",
            "namaGedung": "CIPUTAT No. 75 A",
            "idKota": "287",
            "namaKota": "JAKARTA 4",
            "idSekolah": "391007",
            "namaSekolah": "SMA ISLAM TERPADU AL-MULTAZAM 2 LINGGAJATI",
            "tahunAjaran": "2022/2023",
            "c_Statusbayar": "LUNAS",
            "email": "fauznn16@gmail.com",
            "emailOrtu": "tugas.ibutini@gmail.com",
            "nomorHp": "083166563212",
            "nomorHpOrtu": "081384965686"
        },
        "statusBayar": "",
        "pilihanPTN": "{\"pilihan1\":3212146,\"pilihan2\":3632027,\"historyPilihan\":[{\"pilihan\":1,\"tanggal\":\"2023-04-05 18:42:23\",\"idJurusan\":3212146},{\"pilihan\":2,\"tanggal\":\"2023-04-05 18:42:50\",\"idJurusan\":3632027}]}",
        "jobOrtu": "",
        "daftarAnak": [],
        "tokenJWT": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTM0Njk5MTcsImV4cCI6MTY5NjA2MTkxNywidWlkIjoiMDQwOTE2MDI2MTAxIiwiZGF0YSI6eyJub1JlZ2lzdHJhc2kiOiIwNDA5MTYwMjYxMDEiLCJuYW1hTGVuZ2thcCI6IllBWklEIEZBVVpBTiBIQVJUT05PIiwiaWRTZWtvbGFoS2VsYXMiOiIxNSIsIm5hbWFTZWtvbGFoS2VsYXMiOiIxMiBTTUEgSVBTIiwic2lhcGEiOiJTSVNXQSIsImlkS2VsYXMiOiIyNTQ1NjIsMjY2NjkxIiwibmFtYUtlbGFzIjoiMTItSVBTLVItTi0yMjAyLDEyLUlQQS1SLU4tQjAxIiwiamVuaXNLZWxhcyI6IlJFR1VMRVIgTk9OIFNEIiwiaWRHZWR1bmciOiIyNjEiLCJuYW1hR2VkdW5nIjoiQ0lQVVRBVCBOby4gNzUgQSIsImlkS290YSI6IjI4NyIsIm5hbWFLb3RhIjoiSkFLQVJUQSA0IiwiaWRTZWtvbGFoIjoiMzkxMDA3IiwibmFtYVNla29sYWgiOiJTTUEgSVNMQU0gVEVSUEFEVSBBTC1NVUxUQVpBTSAyIExJTkdHQUpBVEkiLCJ0YWh1bkFqYXJhbiI6IjIwMjJcLzIwMjMiLCJjX1N0YXR1c2JheWFyIjoiTFVOQVMiLCJlbWFpbCI6ImZhdXpubjE2QGdtYWlsLmNvbSIsImVtYWlsT3J0dSI6InR1Z2FzLmlidXRpbmlAZ21haWwuY29tIiwibm9tb3JIcCI6IjA4MzE2NjU2MzIxMiIsIm5vbW9ySHBPcnR1IjoiMDgxMzg0OTY1Njg2In19.k8EBOBHWZAa-ooPyB9g9D1tItKgMt9M-rCdOrgW707k",
        "daftarProduk": [
            {
                "c_IdKomponentProduk": "30659",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Ebook Teori Superintensif 12 IPA",
                "c_IdJenisProduk": "98",
                "c_NamaJenisProduk": "e- Teori Ringkas",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "30874",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Buku Sakti -Ebook Latihan Soal Empati Wajib 12 IPA K13R",
                "c_IdJenisProduk": "72",
                "c_NamaJenisProduk": "e-Empati Wajib",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "23257",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "EPB 12 IPA",
                "c_IdJenisProduk": "10",
                "c_NamaJenisProduk": "e-EPB",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "23271",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "GO Assesment 12 IPA",
                "c_IdJenisProduk": "12",
                "c_NamaJenisProduk": "e-GOA",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "30853",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Buku Sakti -Latihan Ekstra 12 IPA K13R",
                "c_IdJenisProduk": "76",
                "c_NamaJenisProduk": "e-Latihan Ekstra",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "30370",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Paket Soal Koding 12 IPA",
                "c_IdJenisProduk": "78",
                "c_NamaJenisProduk": "e-Paket Soal Koding",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "31023",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Paket Soal Koding 12 IPA",
                "c_IdJenisProduk": "78",
                "c_NamaJenisProduk": "e-Paket Soal Koding",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "30885",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Buku Sakti -Soal Referensi 12 IPA K13R",
                "c_IdJenisProduk": "82",
                "c_NamaJenisProduk": "e-SoRef",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "23376",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "TOBK 12 IPA Zona 1",
                "c_IdJenisProduk": "25",
                "c_NamaJenisProduk": "e-TOBK",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "31222",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Video Soal 12 IPA",
                "c_IdJenisProduk": "87",
                "c_NamaJenisProduk": "e-Video Soal",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "23413",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Video 12 IPA",
                "c_IdJenisProduk": "88",
                "c_NamaJenisProduk": "e-Video Teori",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "23524",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "KBM 12 IPA",
                "c_IdJenisProduk": "27",
                "c_NamaJenisProduk": "j-KBM",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "23534",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Konsultasi 12 IPA",
                "c_IdJenisProduk": "14",
                "c_NamaJenisProduk": "j-Konsultasi",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "31209",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "Parents Meeting Lokal 12 IPA",
                "c_IdJenisProduk": "18",
                "c_NamaJenisProduk": "j-Parents Meeting",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "23552",
                "c_IdBundling": "718868",
                "c_NamaBundling": "TWT 12 IPA Super Intensif Unit Ciputat : 12 KBM",
                "c_NamaProduk": "TST 12 IPA",
                "c_IdJenisProduk": "31",
                "c_NamaJenisProduk": "j-TST",
                "c_TanggalAwal": "2023-04-03",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "14"
            },
            {
                "c_IdKomponentProduk": "23282",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "GO Assessment 12 IPS",
                "c_IdJenisProduk": "12",
                "c_NamaJenisProduk": "e-GOA",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "31841",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "e-Latihan Ekstra Simulasi Simak UI Soshum",
                "c_IdJenisProduk": "76",
                "c_NamaJenisProduk": "e-Latihan Ekstra",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "31837",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "e-Paket Soal Koding Simulasi Simak UI Soshum",
                "c_IdJenisProduk": "78",
                "c_NamaJenisProduk": "e-Paket Soal Koding",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "23330",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "Ebook Rumus 12 IPS",
                "c_IdJenisProduk": "46",
                "c_NamaJenisProduk": "e-Rumus",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "31840",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "e-SoRef Simulasi Simak UI Soshum",
                "c_IdJenisProduk": "82",
                "c_NamaJenisProduk": "e-SoRef",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "31833",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "e- Teori Simulasi Simak UI Soshum",
                "c_IdJenisProduk": "59",
                "c_NamaJenisProduk": "e-Teori",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "31838",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "e-TOBK Simulasi SIMAK UI Soshum",
                "c_IdJenisProduk": "25",
                "c_NamaJenisProduk": "e-TOBK",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "23391",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "VAK 12 IPS",
                "c_IdJenisProduk": "65",
                "c_NamaJenisProduk": "e-VAK",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "31834",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "e-Video Ekstra Simulasi Simak UI Soshum",
                "c_IdJenisProduk": "57",
                "c_NamaJenisProduk": "e-Video Ekstra",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "31836",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "e-Video Soal Simulasi Simak UI Soshum",
                "c_IdJenisProduk": "87",
                "c_NamaJenisProduk": "e-Video Soal",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "31835",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "e-Video Teori Simulasi Simak UI Soshum",
                "c_IdJenisProduk": "88",
                "c_NamaJenisProduk": "e-Video Teori",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "23525",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "KBM 12 IPS",
                "c_IdJenisProduk": "27",
                "c_NamaJenisProduk": "j-KBM",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            },
            {
                "c_IdKomponentProduk": "23553",
                "c_IdBundling": "753363",
                "c_NamaBundling": "TWT Super Intensif Simak UI Soshum (Tatap Muka + GO Kreasi)",
                "c_NamaProduk": "TST 12 IPS",
                "c_IdJenisProduk": "31",
                "c_NamaJenisProduk": "j-TST",
                "c_TanggalAwal": "2023-05-01",
                "c_TanggalAkhir": "2023-09-30",
                "c_IdSekolahKelas": "15"
            }
        ],
        "waktu": "180",
        "kirimOTP": false
    });
}
const validasiRegister = (req,res)=>{
    res.json({
        "status": true,
        "message": "Silahkan input OTP",
        "data": {
            "noRegistrasi": "981123000001",
            "namaLengkap": "RAHMAD FARIZAN",
            "idSekolahKelas": "14",
            "namaSekolahKelas": "12 SMA IPA",
            "siapa": "SISWA",
            "idKelas": "265287",
            "namaKelas": "12-IPA-R-N-T-1",
            "jenisKelas": null,
            "idGedung": "675",
            "namaGedung": "KOMBES H. UMAR 75",
            "idKota": "214",
            "namaKota": "PAGARALAM",
            "idSekolah": "117724",
            "namaSekolah": "MAN Sidoarjo",
            "tahunAjaran": "2023/2024",
            "c_Statusbayar": "LUNAS",
            "email": "rahmad.farizan.rf@gmail.com",
            "emailOrtu": "0@gmail.com",
            "nomorHp": "082286968275",
            "nomorHpOrtu": "082286968274"
        },
        "pilihanPTN": "{\"pilihan1\":3321073,\"pilihan2\":3611186,\"historyPilihan\":[{\"pilihan\":1,\"tanggal\":\"2023-06-09 08:28:01\",\"idJurusan\":3321073},{\"pilihan\":2,\"tanggal\":\"2023-06-09 08:29:05\",\"idJurusan\":3611186}]}",
        "jobOrtu": "KARYAWAN SWASTA",
        "daftarAnak": [],
        "tokenJWT": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTM2MjkyOTYsImV4cCI6MTY5NjIyMTI5NiwidWlkIjoiOTgxMTIzMDAwMDAxIiwiZGF0YSI6eyJub1JlZ2lzdHJhc2kiOiI5ODExMjMwMDAwMDEiLCJuYW1hTGVuZ2thcCI6IlJBSE1BRCBGQVJJWkFOIiwiaWRTZWtvbGFoS2VsYXMiOiIxNCIsIm5hbWFTZWtvbGFoS2VsYXMiOiIxMiBTTUEgSVBBIiwic2lhcGEiOiJTSVNXQSIsImlkS2VsYXMiOiIyNjUyODciLCJuYW1hS2VsYXMiOiIxMi1JUEEtUi1OLVQtMSIsImplbmlzS2VsYXMiOm51bGwsImlkR2VkdW5nIjoiNjc1IiwibmFtYUdlZHVuZyI6IktPTUJFUyBILiBVTUFSIDc1IiwiaWRLb3RhIjoiMjE0IiwibmFtYUtvdGEiOiJQQUdBUkFMQU0iLCJpZFNla29sYWgiOiIxMTc3MjQiLCJuYW1hU2Vrb2xhaCI6Ik1BTiBTaWRvYXJqbyIsInRhaHVuQWphcmFuIjoiMjAyM1wvMjAyNCIsImNfU3RhdHVzYmF5YXIiOiJMVU5BUyIsImVtYWlsIjoicmFobWFkLmZhcml6YW4ucmZAZ21haWwuY29tIiwiZW1haWxPcnR1IjoiMEBnbWFpbC5jb20iLCJub21vckhwIjoiMDgyMjg2OTY4Mjc1Iiwibm9tb3JIcE9ydHUiOiIwODIyODY5NjgyNzQifX0.UKyLOZTGOeP98QU6aBtiZBfOCzCSnNrkfw9ycVsTqIo",
        "daftarProduk": [],
        "waktu": "180"
    })
}
  module.exports = {
    handleLogin,
    validasiRegister
  };
  