const getPresensi=(req,res)=>{
    res.json({
        "meta": {
            "code": 200,
            "message": "Data ditemukan",
            "status": "Ok"
        },
        "data": {
            "jumhadir": "2",
            "jumharus": "3"
        }
    })
}

module.exports={
    getPresensi
}