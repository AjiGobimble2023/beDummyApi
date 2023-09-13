const getMapelpilihan=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data ditemukan!",
        "data": [
            {
                "id":"6",
                "namaKelompokUjian":"MATEMATIKA TINGKAT LANJUT",
                "initial":"MTL"
            },
            {
                "id":"32",
                "namaKelompokUjian":"FISIKA",
                "initial":"FSK"
            },
            
            "36",
            "48",
            "50",
            "51",
            "114",
            "123"
        ]
    })
}
const getFotoProfile=(req,res)=>{
    res.json({
        "status": true,
        "message": "Foto user 050111114701 ditemukan",
        "data": "https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/avatar%2Fb-1.png?alt=media&token=8bfb2b14-2d49-4d7a-9917-a6966c88773a"
    })
}
module.exports={
    getMapelpilihan,
    getFotoProfile
}