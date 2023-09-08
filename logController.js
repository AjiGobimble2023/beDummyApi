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

module.exports={
    setLog
}