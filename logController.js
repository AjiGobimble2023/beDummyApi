const setLog=(req,res)=>{
    res.json({
        "status": true,
        "message": "Log berhasil disimpan",
        "data": [
            {
                "c_NoRegistrasi": "050111114701",
                "c_Menu": "Buku Teori",
                "c_Keterangan": "BAHASA INDONESIA, Teks Cerita Sejarah/ Rekon",
                "c_WaktuAwal": "2023-09-05 14:04:28"
            }
        ],
        "lastId": 52208451
    })
}
const getVersion=(req,res)=>{
    res.json({
        "status": false,
        "message": "Version ditemukan",
        "data": {
            "isWajib": true,
            "isWajibIOS": true,
            "isWajibANDRO": true,
            "title": "Update GO Kreasi",
            "description": "Hallo Sobat GO! MinGO mau infoin nih klo GO Kreasi ada update versi terbaru loh! Update dulu yuk Sobat, biar kegiatan belajar kamu lebih nyaman lagi Sobat. Kasih tau MinGO yaa kalau Sobat ada pertanyaan. :)",
            "notes": [
                "Update persiapan TOBK januari 2023.",
                "Update lihat laporan."
            ],
            "ios": {
                "url": "https://apps.apple.com/app/id1634767332",
                "altUrl": "https://apps.apple.com/app/go-kreasi-siswa-ortu/id1634767332",
                "version": "1.1.2",
                "versionNumber": 112,
                "buildNumber": 1
            },
            "android": {
                "url": "market://details?id=com.ganeshaoperation.kreasiv4",
                "altUrl": "https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasiv4",
                "version": "1.1.2",
                "versionNumber": 112,
                "buildNumber": 47
            }
        }
    })
}
const getTahunAjaran=(req,res)=>{
    res.json({
        data:"2023/2024"
    })
}

module.exports={
    setLog,
    getVersion,
    getTahunAjaran
}