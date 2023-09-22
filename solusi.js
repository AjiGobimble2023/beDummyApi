const getSolusi=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data Kisi-kisi ditemukan",
        "data": [
            {
                "c_NamaMataPelajaran": "MATEMATIKA",
                "c_IdMataPelajaran": "1",
                "c_KodeBab": "01.27.06",
                "c_NamaBab": "Penarikan kesimpulan",
                "c_IdTeoriBab": "1254",
                "levelTeori": "SMA",
                "kelengkapan": "Lengkap"
            },
            {
                "c_NamaMataPelajaran": "MATEMATIKA",
                "c_IdMataPelajaran": "1",
                "c_KodeBab": "01.27.06",
                "c_NamaBab": "Penarikan kesimpulan",
                "c_IdTeoriBab": "4919",
                "levelTeori": "SMA",
                "kelengkapan": "Ringkas"
            }
        ]
    })
}

const getVideoMateri=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data Video ditemukan",
        "data": [
            {
                "c_NamaMataPelajaran": "BIOLOGI",
                "c_IdVideo": "577",
                "c_Deskripsi": "Kedudukan biologi dengan ilmu lain",
                "c_JudulVideo": "BIO_01.02_SMA_Lengkap",
                "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTViVTFVUlRWYWFrNXBUVEpPYlUxdFZtaFBWMVpwV21wWk5FNTZXbWhPUkdocVRsZGFhVTlIUlhsYWFUVjBZMFJSUFE9PQ==",
                "c_Keyword":"teori, pembelajaran, edukasi"
            }
        ]
    })
}

module.exports={
    getSolusi,
    getVideoMateri
}