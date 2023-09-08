const getfeed=(req,res)=>{
    res.json({
        "status": true,
        "message": "Berhasil mengambil feed",
        "data": {
            "info": {
                "lastIndex": 2,
                "accessDate": "2023-09-05 11:27:46"
            },
            "list": [
                {
                    "feedId": "30625",
                    "creatorId": "050111114701",
                    "fullname": "Dzaky Brori",
                    "role": "SISWA",
                    "content": "[FLEXING RANKING]\nHai guys, wah saya ranking 425 Kota lohhh.\nJangan mau kalah yaaa",
                    "image": "http://images.ganeshaoperation.com/gokreasi/feed/050111114701/cc74b2baf4ce15a056595b928653d165.jpeg",
                    "isLike": "0",
                    "totalLike": "0",
                    "status": "publik",
                    "tanggal": "2023-08-24 22:29:09"
                },
                {
                    "feedId": "26353",
                    "creatorId": "981123000001",
                    "fullname": "RAHMAD FARIZAN",
                    "role": "SISWA",
                    "content": "[FLEXING TRYOUT]\nHai guys, saya dapat nilai tryout segini loh!\nJangan mau kalah ya Sobat",
                    "image": "http://images.ganeshaoperation.com/gokreasi/feed/981123000001/033af7bf2f5c1f0c3f395dee036ecfd7.jpeg",
                    "isLike": "0",
                    "totalLike": "1",
                    "status": "publik",
                    "tanggal": "2023-06-13 14:55:52"
                }
            ]
        }
    });
}
const getcommentfeed=(req,res)=>{
    res.json({
        "status": true,
        "message": "Berhasil mendapatkan data komentar",
        "data": [
            {
                "feedId": "31525",
                "creatorId": "050111114701",
                "parentId": "26353",
                "fullname": "Dzaky Brori",
                "role": "SISWA",
                "content": "test",
                "isLike": "0",
                "totalLike": "0",
                "tanggal": "2023-09-05 11:29:50"
            }
        ],
        "reply": [
            []
        ]
    });
}
const addcommentfeed=(req,res)=>{
    res.json({
        "status": true,
        "message": "Berhasil menyimpan komentar"
    })
}

module.exports={
    getfeed,
    getcommentfeed,
    addcommentfeed
}