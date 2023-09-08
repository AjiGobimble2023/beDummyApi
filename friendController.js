const getFriendLeaderboard =(req,res)=>{
    res.json({
        "status": true,
        "message": "Berhasil mendapatkan teman",
        "data": {
            "info": {
                "lastIndex": 2
            },
            "list": [
                {
                    "idTeman": "050111114701",
                    "fullname": "Dzaky Brori",
                    "ctotal": "458",
                    "status": "approved",
                    "className": "12-IPA-R-N-ONLINE Paket Lengkap",
                    "classlevelid": "14",
                    "class": "12 SMA IPA"
                },
                {
                    "idTeman": "981123000001",
                    "fullname": "RAHMAD FARIZAN",
                    "ctotal": "4",
                    "status": "approved",
                    "className": "12-IPA-R-N-103",
                    "classlevelid": "14",
                    "class": "12 SMA IPA"
                }
            ]
        }
    });
}
const getSearchFriend=(req,res)=>{
    res.json({
    "status": true,
    "message": "Berhasil mendapatkan teman",
    "data": {
        "info": {
            "lastIndex": 10
        },
        "list": [
            {
                "idTeman": "040713025802",
                "fullname": "ANANDA RADITYA DJOKO P",
                "class": "12 SMA IPS",
                "classlevelid": "15",
                "role": "SISWA",
                "className": "12-IPA-S-N-T-5",
                "status": "allow add"
            },
            {
                "idTeman": "050226021702",
                "fullname": "DEVON JOKORAHMANDA",
                "class": "12 SMA IPA",
                "classlevelid": "14",
                "role": "SISWA",
                "className": "12-IPA-R-N-T-2",
                "status": "allow add"
            },
            {
                "idTeman": "050401055801",
                "fullname": "JOKO RIZALDI",
                "class": "12 SMA IPA",
                "classlevelid": "14",
                "role": "SISWA",
                "className": "12-IPA-R-N-B2121",
                "status": "allow add"
            },
            {
                "idTeman": "051108012102",
                "fullname": "JOKO BARDHAN",
                "class": "12 SMA IPS",
                "classlevelid": "15",
                "role": "SISWA",
                "className": "12-UMUM-R-N-13",
                "status": "allow add"
            },
            {
                "idTeman": "060411047901",
                "fullname": "ALMAS JOKO ADIYOGA",
                "class": "12 SMA IPA",
                "classlevelid": "14",
                "role": "SISWA",
                "className": "12-IPA-R-N-22",
                "status": "allow add"
            },
            {
                "idTeman": "060630097901",
                "fullname": "NAURA RANA MAHIRA KARDJOKO",
                "class": "11 SMA IPA",
                "classlevelid": "12",
                "role": "SISWA",
                "className": "11-IPA-R-N-28",
                "status": "allow add"
            },
            {
                "idTeman": "070620809001",
                "fullname": "BUNGA LUTVIYANA DWI SANDRA PURDJOKO",
                "class": "11 SMA IPA",
                "classlevelid": "12",
                "role": "SISWA",
                "className": "11-IPA-R-N-1901",
                "status": "allow add"
            },
            {
                "idTeman": "070624093401",
                "fullname": "MARK DEO JOKOHAEL",
                "class": "11 SMA IPA",
                "classlevelid": "12",
                "role": "SISWA",
                "className": "11-IPA-R-N-11",
                "status": "allow add"
            },
            {
                "idTeman": "070703064601",
                "fullname": "ALMER FIRDAUS WIDJOKONGKO",
                "class": "11 SMA UMUM",
                "classlevelid": "26",
                "role": "SISWA",
                "className": "11-UMUM-R-N-270",
                "status": "allow add"
            },
            {
                "idTeman": "080219068901",
                "fullname": "KANAYA ANINDIA PUTERI, TJOKORDA ISTRI",
                "class": "9 SMP UMUM",
                "classlevelid": "9",
                "role": "SISWA",
                "className": "9-SMP-R-N-1802",
                "status": "allow add"
            }
        ]
    }
});
}
module.exports={
    getFriendLeaderboard,
    getSearchFriend
}