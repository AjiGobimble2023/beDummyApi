const getPresensi=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data Ditemukan",
        "data": {
            "jumhadir": "2",
            "jumharus": "3"
        }
    })
}

module.exports={
    getPresensi
}