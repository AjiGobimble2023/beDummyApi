const getQuetion=(req,res)=>{
    res.json({
        "meta": {
            "code": 200,
            "message": "Data Pertanyaan ditemukan",
            "status": "Ok"
        },
        "data": [
            {
                "column": "c_N0",
                "type": "switch",
                "answer": "y",
                "question": "Apakah benar pengajar tersebut di atas adalah yang mengajar pada sesi ini?"
            },
            {
                "column": "c_N1",
                "type": "switch",
                "answer": "y",
                "question": "Pada saat mengajar, apakah pengajar tersebut memberikan Konsep The King?"
            },
            {
                "column": "c_N2",
                "type": "switch",
                "answer": "y",
                "question": "Apakah pengajar mampu membuat kamu memahami materi yg diajarkan saat ini?"
            },
            {
                "column": "c_N3",
                "type": "switch",
                "answer": "y",
                "question": "Pada saat mengajar, apakah pengajar memotivasi adik untuk Belajar, Berlatih dan Bertanding?"
            },
            {
                "column": "c_N4",
                "type": "switch",
                "answer": "n",
                "question": "Apakah kamu mau diajar kembali oleh pengajar tersebut?"
            },
            {
                "column": "c_N5",
                "type": "text",
                "answer": "uiun",
                "question": "Materi apa yang diajarkan di sekolahmu minggu ini?"
            }
        ]
    })
}

module.exports={
    getQuetion
}