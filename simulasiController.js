const getsimulasiNilai = (req,res)=>{
    res.json({
        "status": true,
        "message": "Data nilai ditemukan",
        "data": [
            {
                "kodeTob": "819",
                "tob": "TOBK 13 IPA_UAT JAN_17940",
                "isSelected": false,
                "isFix": false,
                "detailNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "800",
                    "Kemampuan Memahami Bacaan dan Menulis": "850",
                    "PENALARAN MATEMATIKA": "700",
                    "LITERASI DALAM BAHASA INDONESIA": "100",
                    "LITERASI DALAM BAHASA INGGRIS": "850",
                    "PENGETAHUAN KUANTITATIF": "700",
                    "KPU_PENALARAN DEDUKTIF": "635",
                    "KPU_PENALARAN INDUKTIF": "650",
                    "KPU_PENALARAN KUANTITATIF": "820"
                }
            },
            {
                "kodeTob": "15296",
                "tob": "TOBK Nasional 2023",
                "isSelected": false,
                "isFix": false,
                "detailNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "570",
                    "Kemampuan Memahami Bacaan dan Menulis": "577",
                    "PENALARAN MATEMATIKA": "801",
                    "LITERASI DALAM BAHASA INDONESIA": "767",
                    "LITERASI DALAM BAHASA INGGRIS": "814",
                    "PENGETAHUAN KUANTITATIF": "1000",
                    "KEMAMPUAN PENALARAN UMUM": "544"
                }
            },
            {
                "kodeTob": "15295",
                "tob": "TOBK NASIONAL 2023",
                "isSelected": false,
                "isFix": false,
                "detailNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "573",
                    "Kemampuan Memahami Bacaan dan Menulis": "546",
                    "PENALARAN MATEMATIKA": "1000",
                    "LITERASI DALAM BAHASA INDONESIA": "578",
                    "LITERASI DALAM BAHASA INGGRIS": "464",
                    "PENGETAHUAN KUANTITATIF": "911",
                    "KEMAMPUAN PENALARAN UMUM": "772"
                }
            },
            {
                "kodeTob": "6789",
                "tob": "TOBK SUPER INTENSIF KE-1",
                "isSelected": false,
                "isFix": false,
                "detailNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "472",
                    "Kemampuan Memahami Bacaan dan Menulis": "585",
                    "PENALARAN MATEMATIKA": "296",
                    "LITERASI DALAM BAHASA INDONESIA": "567",
                    "LITERASI DALAM BAHASA INGGRIS": "313",
                    "PENGETAHUAN KUANTITATIF": "975",
                    "KPU_PENALARAN DEDUKTIF": "744",
                    "KPU_PENALARAN INDUKTIF": "687",
                    "KPU_PENALARAN KUANTITATIF": "430"
                }
            },
            {
                "kodeTob": "7789",
                "tob": "TOBK SUPER INTENSIF KE-3",
                "isSelected": false,
                "isFix": false,
                "detailNilai": {
                    "TPS - PENGETAHUAN DAN PEMAHAMAN UMUM": "284",
                    "Kemampuan Memahami Bacaan dan Menulis": "273",
                    "PENALARAN MATEMATIKA": "0",
                    "LITERASI DALAM BAHASA INDONESIA": "0",
                    "LITERASI DALAM BAHASA INGGRIS": "0",
                    "PENGETAHUAN KUANTITATIF": "309",
                    "KPU_PENALARAN DEDUKTIF": "548",
                    "KPU_PENALARAN INDUKTIF": "705",
                    "KPU_PENALARAN KUANTITATIF": "318"
                }
            }
        ]
    })
}
const getSimulasiPilihan = (req,res)=>{
    res.json({
        "status": true,
        "message": "Data pilihan ditemukan",
        "data": [
            {
                "prioritas": "1",
                "status": "1",
                "ptn": "INSTITUT TEKNOLOGI KALIMANTAN",
                "jurusanId": "5421124",
                "jurusan": "INFORMATIKA",
                "pg": "552.99",
                "peminat": {
                    "jml": 292,
                    "tahun": 2021
                },
                "tampung": {
                    "jml": 60,
                    "tahun": 2022
                }
            },
            {
                "prioritas": "2",
                "status": "1",
                "ptn": "INSTITUT TEKNOLOGI SUMATERA",
                "jurusanId": "1921257",
                "jurusan": "TEKNOLOGI PANGAN",
                "pg": "513.65",
                "peminat": {
                    "jml": 469,
                    "tahun": 2021
                },
                "tampung": {
                    "jml": 79,
                    "tahun": 2022
                }
            },
            {
                "prioritas": "3",
                "status": "0",
                "ptn": "Belum ada data",
                "jurusanId": null,
                "jurusan": "Belum ada data",
                "peminat": {
                    "jml": 0,
                    "tahun": 2021
                },
                "tampung": {
                    "jml": 0,
                    "tahun": 2022
                }
            },
            {
                "prioritas": "4",
                "status": "0",
                "ptn": "Belum ada data",
                "jurusanId": null,
                "jurusan": "Belum ada data",
                "peminat": {
                    "jml": 0,
                    "tahun": 2021
                },
                "tampung": {
                    "jml": 0,
                    "tahun": 2022
                }
            },
            {
                "prioritas": "5",
                "status": "1",
                "ptn": "INSTITUT TEKNOLOGI BANDUNG",
                "jurusanId": "3321011",
                "jurusan": "FAK. ILMU DAN TEKNOLOGI KEBUMIAN (FITB)",
                "pg": "650.40",
                "peminat": {
                    "jml": 444,
                    "tahun": 2021
                },
                "tampung": {
                    "jml": 166,
                    "tahun": 2022
                }
            }
        ]
    } )
}
const getSimulasiHasil=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data simulasi ditemukan",
        "data": [
            {
                "prioritas": "1",
                "ptn": "Belum ada data",
                "jurusanId": null,
                "jurusan": "Belum ada data",
                "rumpun": null,
                "pg": "0",
                "peminat": {
                    "jml": 0,
                    "tahun": 2021
                },
                "tampung": {
                    "jml": 0,
                    "tahun": 2022
                },
                "total": "0",
                "saran": null
            },
            {
                "prioritas": "2",
                "ptn": "Belum ada data",
                "jurusanId": null,
                "jurusan": "Belum ada data",
                "rumpun": null,
                "pg": "0",
                "peminat": {
                    "jml": 0,
                    "tahun": 2021
                },
                "tampung": {
                    "jml": 0,
                    "tahun": 2022
                },
                "total": "0",
                "saran": null
            },
            {
                "prioritas": "3",
                "ptn": "Belum ada data",
                "jurusanId": null,
                "jurusan": "Belum ada data",
                "rumpun": null,
                "pg": "0",
                "peminat": {
                    "jml": 0,
                    "tahun": 2021
                },
                "tampung": {
                    "jml": 0,
                    "tahun": 2022
                },
                "total": "0",
                "saran": null
            },
            {
                "prioritas": "4",
                "ptn": "Belum ada data",
                "jurusanId": null,
                "jurusan": "Belum ada data",
                "rumpun": null,
                "pg": "0",
                "peminat": {
                    "jml": 0,
                    "tahun": 2021
                },
                "tampung": {
                    "jml": 0,
                    "tahun": 2022
                },
                "total": "0",
                "saran": null
            }
        ]
    })
}

module.exports={
    getsimulasiNilai,
    getSimulasiPilihan,
    getSimulasiHasil
}