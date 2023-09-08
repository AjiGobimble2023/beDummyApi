const getPembayaran=(req,res)=>{
    res.json({
        "status": true,
        "message": "Jika tidak sesuai silahkan hubungi 0853 5199 1159 (WA)",
        "data": {
            "id": "070917008001",
            "total": "7498000",
            "current": "7498000",
            "remainin": "0",
            "status": "Lunas",
            "message": "Jika tidak sesuai silahkan hubungi 0853 5199 1159 (WA)"
        }
    })
}
const getPembayaranDetail=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data ditemukan",
        "data": [
            {
                "c_idpembelian": "1793357",
                "total": "7498000",
                "current": "7498000",
                "remaining": "0",
                "status": "LUNAS",
                "c_jatuhtempo": null
            }
        ]
    })
}

module.exports={
    getPembayaran,
    getPembayaranDetail
}