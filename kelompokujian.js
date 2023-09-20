const getOpsiPilihan=(req,res)=>{
    res.json({
        "meta": {
            "code": 200,
            "message": "Data ditemukan",
            "status": "Ok"
        },
        data :[
            {
                "idKelompokUjian":122,
                "nama":"Matematika",
                "initial":"Mtk"
            },
            {
                "idKelompokUjian":123,
                "nama":"Matematika Wajib",
                "initial":"MWB"
            },
            {
                "idKelompokUjian":124,
                "nama":"Matematika 2",
                "initial":"MT2"
            },
            {
                "idKelompokUjian":6,
                "nama":"MATEMATIKA TINGKAT LANJUT",
                "initial":"MTL"
            },
            {
                "idKelompokUjian":32,
                "nama":"FISIKA",
                "initial":"FSK"
            },
        ]
    })
}

module.exports={
    getOpsiPilihan
}