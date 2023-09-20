const getjadwal = (req, res) => {
 res.json({
    "status": true,
    "message": "Jadwal siswa ditemukan",
    "data": {
        "2023-09-05": [
            {
                "classId": "269227",
                "date": "2023-09-05",
                "start": "16:30",
                "finish": "18:00",
                "lesson": "MATEMATIKA WAJIB",
                "package": "2",
                "info": "Paket Ke",
                "id": "2017164347",
                "fullName": "Dian Agus Diyanto",
                "activity": "KBM JPMP",
                "planId": "10597282",
                "placeName": "Citra Utama Timur 1B",
                "remainingMeeting": "-",
                "available": "no",
                "feedbackPermission": false,
                "session": 1
            },
            {
                "classId": "269227",
                "date": "2023-09-05",
                "start": "18:30",
                "finish": "20:00",
                "lesson": "KIMIA",
                "package": "2",
                "info": "Paket Ke",
                "id": "1402501016",
                "fullName": "RENI SUSILAWATI",
                "activity": "KBM JPMP",
                "planId": "10597290",
                "placeName": "Citra Utama Timur 1B",
                "remainingMeeting": "-",
                "available": "no",
                "feedbackPermission": false,
                "session": 2
            }
        ],
        "2023-09-08": [
            {
                "classId": "269227",
                "date": "2023-09-08",
                "start": "18:30",
                "finish": "20:00",
                "lesson": "BIOLOGI",
                "package": "2",
                "info": "Paket Ke",
                "id": "1402503048",
                "fullName": "ISTIANATIN NURIYAH",
                "activity": "KBM JPMP",
                "planId": "10527161",
                "placeName": "Citra Utama Timur 1B",
                "remainingMeeting": "-",
                "available": "no",
                "feedbackPermission": false,
                "session": 1
            }
        ]
    }
})
}
const getvideobab =(req,res)=>{
    res.json({
        "status": true,
        "message": "Data Mapel ditemukan",
        "data": [
            {
                "babutama": "PARAGRAF",
                "info": [
                    {
                        "c_namabab": "Teks Eksposisi",
                        "c_kodebab": "06.01.10",
                        "c_IdVideo": "301",
                        "c_JudulVideo": "Teks Eksposisi",
                        "c_Deskripsi": "Teks eksposisi  pada hakikatnya berisi suatu informasi padat dan jelas disuguhkan untuk para pembaca.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhVTFxUlhoYVZGRjRUa1JOTkU0eVVUTk9hbXQzV1dwb2JGbDZXVEJPUjA1clRWUkdiRTFxU210TlV6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Informasi isi teks (tersurat/ tersirat)",
                        "c_kodebab": "06.01.31",
                        "c_IdVideo": "1382",
                        "c_JudulVideo": "Informasi Isi Teks (Tersurat/Tersirat)",
                        "c_Deskripsi": "Informasi tersurat disebut informasi ekplisit dan informasi tersirat sebagai informasi implisit.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRlRTV0VVRCWmFrVTBXa1JGTUUxNlJUUmFWMFV5V2tSa2JGcFVaM2RQUjFGNVRrUkJkMDU2WnpST2VUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Teks Eksplanasi",
                        "c_kodebab": "06.01.09",
                        "c_IdVideo": "300",
                        "c_JudulVideo": "Teks Eksplanasi",
                        "c_Deskripsi": "Teks eksplanasi membahas suatu fenomena yang terjadi secara ilmiah, dan isi teks berdasarkan fakta.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRNRnBFUlRKYVJFbDVUV3BGTTAxWFdtaFpWR3QzV21wak5FMVhWWHBhYW14cldtMU5lazF0UlRGUFV6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Teks Editorial",
                        "c_kodebab": "06.01.08",
                        "c_IdVideo": "299",
                        "c_JudulVideo": "Teks Editorial",
                        "c_Deskripsi": "Salah satu artikel yang memuat sudut pandang penulis terhadap isu yang sedang ramai di masyarakat.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTROVmxxWjNkUFZHaHNUa1JCZWxsNlpHeGFiVkV5VFZSb2FVMHlSVEJPTWtsNFRUSkthbHBFWjNkT1V6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Rujukan Kata",
                        "c_kodebab": "06.01.43",
                        "c_IdVideo": "3653",
                        "c_JudulVideo": "Rujukan Kata",
                        "c_Deskripsi": "Kata yang merujuk pada kata lain yang telah diungkapkan sebelumnya sebagai pengganti dari kata asli.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTViVTV0VG14UFYxWnFUWHBOTkU1cVkzZE5WMWt4V1dwR2FWbFhXbXRQVjFrMFRtcFJlbGxYV1RKTmVUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Teks Ulasan/ Resensi",
                        "c_kodebab": "06.01.22",
                        "c_IdVideo": "1380",
                        "c_JudulVideo": "Teks Ulasan/Resensi",
                        "c_Deskripsi": "Teks resensi bertujuan untuk membuat ulasan terhadap suatu karya yang ditulis secara objektif.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRNRnBFWnpST1ZGRTFUbFJhYWxsdFVUUlphbFY0V1hwa2FVOVhUbWhaVkZFMVRWUmplVmxxWnpWT2FUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Ide Pokok/ Gagasan Utama",
                        "c_kodebab": "06.01.39",
                        "c_IdVideo": "1539",
                        "c_JudulVideo": "Ide Pokok/Gagasan Utama",
                        "c_Deskripsi": "Ide pokok ialah inti pembahasan dari sebuah paragraf yang terdapat kalimat utama.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRNMWw2UW1sT2VteHBUVlJTYWxsVVpHaE9lbXN3V1RKWmQwMUVWVEJOYlUxM1RWUkNhMDlVYkdsTmFUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Menyusun Kalimat",
                        "c_kodebab": "06.01.44",
                        "c_IdVideo": "3654",
                        "c_JudulVideo": "Menyusun Kalimat",
                        "c_Deskripsi": "Menyusun kalimat yaitu merangkai kalimat agar terlihat padu dan efektif  agar pembaca mudah memahami",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTViVmw2VlhoT2FsVXlUVzFSTTFwWFNtMVpNa1pxV20xV2FVNXRUVEZQUkUxM1QxUlpNazVFU1hsT1F6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Tema Teks",
                        "c_kodebab": "06.01.36",
                        "c_IdVideo": "1729",
                        "c_JudulVideo": "Tema Teks",
                        "c_Deskripsi": "Tema merupakan pokok pikiran ataupun dasar cerita yang diperlukan untuk mengembangkan teks.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRlRnB0VG14TmVscHJXbXBGZUU1VVVtcE9WR2MwVG0xT2JVMXRVbXBhUjFadFRsUnNhRTV0VFhkT1F6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Kalimat Tidak Padu",
                        "c_kodebab": "06.01.38",
                        "c_IdVideo": "1731",
                        "c_JudulVideo": "Kalimat Tidak Padu",
                        "c_Deskripsi": "Kalimat tidak padu adalah satu kesatuan yang  tidak selaras dengan kalimat lain pada satu paragraf.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhazVxYUdsT1YwcG9XbGRKTWsxcVFYcE5WMUpyVG0xV2EwNXFXbWxPYWtVMVdXcEthVTB5UlhwWmFUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Simpulan Teks",
                        "c_kodebab": "06.01.34",
                        "c_IdVideo": "2932",
                        "c_JudulVideo": "Simpulan Teks",
                        "c_Deskripsi": "Simpulan teks berupa kegiatan hasil rangkuman teks berdasarkan apa yang diuraikan pada teks tersebut.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhMDVVU1hwWlZFcHFUVWRGTUU5WFRtaFBWMDB5V1RKRmVFMXFXWGRaVkZVMFdXMVpORTFYUm10YVV6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Kalimat Penjelas",
                        "c_kodebab": "06.01.32",
                        "c_IdVideo": "1407",
                        "c_JudulVideo": "Kalimat Penjelas",
                        "c_Deskripsi": "Kalimat penjelas merupakan pendukung dari gagasan pokok, dan kalimat penjelas tidak berdiri sendiri.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTViVmw2VG1oWmVra3dXV3BGTVUweVRUQk9ha1V4VFdwUk5FNUVUWGRPVjFVeFdWZFJlVTVxVFRCT2VUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Paragraf Rumpang",
                        "c_kodebab": "06.01.41",
                        "c_IdVideo": "3627",
                        "c_JudulVideo": "Paragraf Rumpang",
                        "c_Deskripsi": "Paragraf rumpang memiliki kekosongan di salah satu kalimatnya sehingga tidak memenuhi koherensi.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhMDVVYXpCT2FrRXdUMVJGTWxwdFNtaE5WRnBvVDBkTk1rMVhSVEZPZWxFeVRtMUthRTlYVW1sT2VUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Judul Teks",
                        "c_kodebab": "06.01.37",
                        "c_IdVideo": "1730",
                        "c_JudulVideo": "Judul Teks",
                        "c_Deskripsi": "Judul teks merupakan kepala karangan yang menggambarkan isi keseluruhan pada teks.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhVTFFUlROYVIwMHdXbXByZVU5RVdYZE9iVTB3V1ZkV2ExcEVaekpaZW1ScFRucE9iRTVFU21sT2VUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Ringkasan Teks",
                        "c_kodebab": "06.01.42",
                        "c_IdVideo": "1472",
                        "c_JudulVideo": "Ringkasan Teks",
                        "c_Deskripsi": "Ringkasan teks dirumuskan menjadi kalimat ringkas yang diambil dari gagasan utama tiap paragraf.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhVnBIUlRSTmVtc3dUWHBKTVU1cWFHbE9NazE1VGxkRmQwNUVWVFZPYWtrd1RsUnJNMDB5VVhkWmFUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Teks Biografi",
                        "c_kodebab": "06.01.04",
                        "c_IdVideo": "3464",
                        "c_JudulVideo": "Teks Biografi",
                        "c_Deskripsi": "Teks biografi ialah teks tentang riwayat hidup seseorang yang istimewa, yang ditulis oleh orang lain.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTViVTB5VVRGYVZHaHRUbXBqZWs1SFRUUk5ha1V6VFdwS2FVOVhWbWxOZWxreVRXcHNiRTE2VFRCYVV6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Kalimat Utama",
                        "c_kodebab": "06.01.30",
                        "c_IdVideo": "2494",
                        "c_JudulVideo": "Kalimat Utama",
                        "c_Deskripsi": "Kalimat utama merupakan gagasan utama atau ide pokok pada setiap paragraf yang  ada pada teks.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRlbGxxWXpKYWFrcHFXbGRSTTFwRVRtdE9SMHB0V1ZkVmVrNVVZM3BOZWtwb1dWUk9hVmx0VFRSYVF6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Pola Pengembangan Teks",
                        "c_kodebab": "06.01.46",
                        "c_IdVideo": "3628",
                        "c_JudulVideo": "Pola Pengembangan Teks",
                        "c_Deskripsi": "Pola pengembangan teks terbagi menjadi 5, yaitu deduktif, induktif, proses, contoh, dan kausalitas.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRNVTFIVlhwWmFrRXdUVzFTYUZwRWF6Tk5SRnBzV20xYWExbFhWVEphUjBrMFRVZFplRTFVU21sT2VUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Mengurai Paragraf",
                        "c_kodebab": "06.01.55",
                        "c_IdVideo": "2621",
                        "c_JudulVideo": "Mengurai Paragraf",
                        "c_Deskripsi": "Dalam penguraian paragraf hal yang perlu diperhatikan yaitu kesatuan paragraf, koherensi, dan kohesi.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRkMDVVWnpWWmVsRXlUVzFGTWs5VVRUSlBSRmt5VGxSTk5FMUVWbXBhVkd0NlQxUmpORTVxU1RWWmVUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Jenis-jenis Paragraf",
                        "c_kodebab": "06.01.58",
                        "c_IdVideo": "2715",
                        "c_JudulVideo": "Jenis-Jenis Paragraf",
                        "c_Deskripsi": "Jenis paragraf terbagi dalam 4 jenis, yaitu paragraf deduktif, induktif, variatif, dan deskriptif.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRkMDFIVG14TmVrNXJUMGRaZUU1VVozaE9SRTEzV2xSbk1FMUVRbTFPVkZGM1QwUlZkMDVVVFhwYVF6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Analogi Masalah dalam Bacaan",
                        "c_kodebab": "06.01.50",
                        "c_IdVideo": "2633",
                        "c_JudulVideo": "Analogi Masalah dalam Bacaan",
                        "c_Deskripsi": "Proses analogi dalam bacaan harus melihat ilustrasi dalam teks dan hal lain yang memiliki sifat sama.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhMWxxUVhkTlYwcHJUVlJPYlZreVNYcE9WRnBwV20xS2ExcEhXVFJPYWs1cldtMU5kMDFFUVRST2FUVjBZMFJSUFE9PQ=="
                    }
                ]
            },
            {
                "babutama": "SASTRA",
                "info": [
                    {
                        "c_namabab": "Puisi",
                        "c_kodebab": "06.07.01",
                        "c_IdVideo": "3080",
                        "c_JudulVideo": "Puisi",
                        "c_Deskripsi": "Puisi adalah bentuk karya sastra dari hasil ungkapan rasa dan perasaan penyair yang penuh makna.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhRTVxV21oYVIxSnRUVVJKTkZwRWJHaFBSRUV6VDFkU2JGbHFaR2hOTWs1dFdtMVJNRmxxYkd4T2VUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Prosa",
                        "c_kodebab": "06.07.02",
                        "c_IdVideo": "2933",
                        "c_JudulVideo": "Prosa",
                        "c_Deskripsi": "Prosa merupakan karangan bebas tidak terikat banyak baris dan suku kata ditulis secara deskriptif.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhRTVFVVhsWmVsRXpXVmRSTWs1VVFURk9iVlV6VGpKR2FWcHFVVEJaVkd4b1dXcG5lRmxVWkdwT2VUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Drama",
                        "c_kodebab": "06.07.03",
                        "c_IdVideo": "1570",
                        "c_JudulVideo": "Drama",
                        "c_Deskripsi": "Drama yaitu prosa yang menggambarkan kehidupan melalui dialog, ditampilkan dalam sebuah pertunjukan.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhRTB5U1hoWmVrSnNUMFJOTkU1VVNUQk5SMDB6V1hwVmVFNTZSVEZPYWtac1RtcE5NbGxxWnpST2FUVjBZMFJSUFE9PQ=="
                    }
                ]
            },
            {
                "babutama": "MORFOLOGI",
                "info": [
                    {
                        "c_namabab": "Konjungsi",
                        "c_kodebab": "06.03.06",
                        "c_IdVideo": "3155",
                        "c_JudulVideo": "Konjungsi",
                        "c_Deskripsi": "Konjungsi merupakan ungkapan penghubung antarkata, antarfrasa, antarklausa, dan antarkalimat.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRNMDFYVG1wT1JGWnFXbFJrYkZwcVpHaE9iVTB4V21wWmVVOUhTbWxhUkVKdFdsUm5lRTlIU21wYVF6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Afiksasi",
                        "c_kodebab": "06.03.01",
                        "c_IdVideo": "2177",
                        "c_JudulVideo": "Afiksasi",
                        "c_Deskripsi": "Afiksasi ialah proses pembentukan kata dengan cara menggabungkan afiks pada bentuk dasar.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhVmxVU214UFJGRXpUVlJaTkUxVVJYZFplbU41VFZSWmVscEhWWGxOVjFsNVdtcFpkMDlIUm14T1V6VjBZMFJSUFE9PQ=="
                    }
                ]
            },
            {
                "babutama": "EJAAN",
                "info": [
                    {
                        "c_namabab": "Penulisan Huruf",
                        "c_kodebab": "06.02.01",
                        "c_IdVideo": "2723",
                        "c_JudulVideo": "Penulisan Huruf",
                        "c_Deskripsi": "Penulisan huruf yang baik dan benar adalah yang sesuai dengan EYD.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRlRTlYUlRCTlJGazFUVEpPYTA0eVNYaFpla0Y2VFVSa2JWcEhXbXBPUjBsNVdWUm9iRTVFUVRKTmFUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Tanda Baca",
                        "c_kodebab": "06.02.05",
                        "c_IdVideo": "3149",
                        "c_JudulVideo": "Tanda Baca",
                        "c_Deskripsi": "Tanda baca ialah tanda yang dipakai dalam sistem ejaan, seperti titik, koma, tanda tanya, dll.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRlbHBFU1RKTmFsRXhXbTFHYlU5RVJUVlpNa3BwV1ZSV2FGcHFhM3BOTWxKcVRucEthRTFVVFhoT1F6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Penulisan Singkatan dan Akronim",
                        "c_kodebab": "06.02.03",
                        "c_IdVideo": "2724",
                        "c_JudulVideo": "Penulisan Singkatan dan Akronim",
                        "c_Deskripsi": "Ciri dasar singkatan berupa bentuk huruf yang dipendekkan sedangkan akronim gabungan dari suku kata.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRORTE2VlRWTlIxVXpUbXBuZWsxVVJYZGFWR3N6VFZkUk5FMTZhekZaVkVVeVRYcFZNMXBIUlRWT2VUVjBZMFJSUFE9PQ=="
                    }
                ]
            },
            {
                "babutama": "SINTAKSIS",
                "info": [
                    {
                        "c_namabab": "Kalimat Simpleks Kompleks",
                        "c_kodebab": "06.04.05",
                        "c_IdVideo": "3158",
                        "c_JudulVideo": "Kalimat Simpleks Kompleks",
                        "c_Deskripsi": "Kalimat simpleks hanya terdiri atas satu klausa dan satu unsur subjek dan predikat.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRORTFYVlRCT2Fra3dXbGRSZWsxVWJHMU5SRTB6V21wbk0wMTZUWHBQVkZwcFdWUm9hVmw2WjNwWmVUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Pola Kalimat",
                        "c_kodebab": "06.04.08",
                        "c_IdVideo": "3147",
                        "c_JudulVideo": "Pola Kalimat",
                        "c_Deskripsi": "Rangkaian kata dari satu kalimat yang terdapat fungsi sintaksisnya (SPOK), maka disebut pola kalimat.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRNMWxVVVRSWlYwMDFXbXBaTVUxcVozZFBWRWt6VFVSa2FFNUVaR2xPVkdNMFRsUkNiRTF0V21sT2FUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Kalimat Aktif Pasif",
                        "c_kodebab": "06.04.07",
                        "c_IdVideo": "3056",
                        "c_JudulVideo": "Kalimat Aktif Pasif",
                        "c_Deskripsi": "Kalimat aktif mempunyai subjek yang melakukan pekerjaan sedangkan pasif subjek dikenai perkerjaan.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRlRnBxUlhkT1IwMHdUVEphYUUxVVVtaFBWMFY2V1hwSk1VMTZVWGxhVkVKclRXMVZNMXBIV1ROYVV6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Frasa",
                        "c_kodebab": "06.04.02",
                        "c_IdVideo": "1769",
                        "c_JudulVideo": "Frasa",
                        "c_Deskripsi": "Frasa ialah gabungan dua kata atau lebih bersifat nonprediktif, yang tidak melampaui batas kalimat.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhMXBFUlRWUFYxa3lUbGROTlZwSFZtcFpWRkV3VG5wc2JFMUVaM2xPUjFVeVQwUkZkMWt5U210T2VUVjBZMFJSUFE9PQ=="
                    }
                ]
            },
            {
                "babutama": "SEMANTIK",
                "info": [
                    {
                        "c_namabab": "Gejala Perubahan Makna",
                        "c_kodebab": "06.05.03",
                        "c_IdVideo": "2160",
                        "c_JudulVideo": "Gejala Perubahan Makna",
                        "c_Deskripsi": "Gejala perubahan makna ialah pengertian yang di berikan kepada suatu bentuk kebahasaan.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRlVmxVYkdoWk1rWnNXbFJuZUZsNlFUVk9iVXBwVGpKS2JFNUhTVEZPUkdocVRYcFZlRnBxVm10WmVUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Gaya Bahasa",
                        "c_kodebab": "06.05.04",
                        "c_IdVideo": "3052",
                        "c_JudulVideo": "Gaya Bahasa",
                        "c_Deskripsi": "Gaya bahasa adalah penggunaan kata-kata berupa kiasan, yang menghasilkan daya cipta bagi penulis.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTVhVnBxYXpWYVJHTXpXbFJrYWs5VVRYbE9hbXhyVDBSRmVGbDZZelJOUkdScldWZEdiRTlFU214T1F6VjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Relasi Makna",
                        "c_kodebab": "06.05.02",
                        "c_IdVideo": "2159",
                        "c_JudulVideo": "Relasi Makna",
                        "c_Deskripsi": "Relasi makna merupakan hubungan semantik yang ada di satu unit bahasa dengan unit bahasa lainnya.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRORTVYVlRKT2FrVXlUMVJDYlU1NldtaFBSRnB0V1dwck5GcHRWVFZOZWtWNlRrUkthazlFVVhoWlV6VjBZMFJSUFE9PQ=="
                    }
                ]
            },
            {
                "babutama": "PRAGMATIK",
                "info": [
                    {
                        "c_namabab": "Sikap Penulis dalam Bacaan",
                        "c_kodebab": "06.06.17",
                        "c_IdVideo": "2867",
                        "c_JudulVideo": "Sikap Penulis dalam Bacaan",
                        "c_Deskripsi": "Sikap penulis dalam bacaan dapat ditemukan melalui isi bacaan dan memperhatikan argumentasi penulis.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRkMDlFYUd0UFJGRjVXVlJvYlU1dFZUTk5iVmt3V2tkRmVFNUhTVE5aVkU1b1drZEZNMWx0VG10TmFUVjBZMFJSUFE9PQ=="
                    },
                    {
                        "c_namabab": "Ilustrasi teks",
                        "c_kodebab": "06.06.16",
                        "c_IdVideo": "2866",
                        "c_JudulVideo": "Ilustrasi Teks",
                        "c_Deskripsi": "Ilustrasi teks yaitu suatu karangan paragraf yang menyajikan sebuah gambar mengenai informasi teks.",
                        "c_LinkVideo": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVnpsNVlWTTRNRmxxU21sWmJWRjRUV3BSTlZwVVNtdE5SRWswVFZkSmVscFVXVE5PVkd0NlQwZEthVTB5U1RGWlV6VjBZMFJSUFE9PQ=="
                    }
                ]
            }
        ]
    })
}
const getvideomapel=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data Mapel ditemukan",
        "data": [
            {   "iconMapel":"https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/icon%2Fmapel%2Fmapel_indo.webp?alt=media&token=c2641f9f-b8f0-42c9-90e7-488a759aaf78",
                "c_IdMataPelajaran": "6",
                "c_NamaMataPelajaran": "BAHASA INDONESIA",
                "c_Level": "SMA"
            },
            {   
                "iconMapel":"https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/icon%2Fmapel%2Fmapel_inggris.webp?alt=media&token=c2641f9f-b8f0-42c9-90e7-488a759aaf78",
                "c_IdMataPelajaran": "5",
                "c_NamaMataPelajaran": "BAHASA INGGRIS",
                "c_Level": "SMA"
            },
            {
                "iconMapel":"https://firebasestorage.googleapis.com/v0/b/kreasi-f1f7b.appspot.com/o/icon%2Fmapel%2Fmapel_matematika.webp?alt=media&token=c2641f9f-b8f0-42c9-90e7-488a759aaf78",
                "c_IdMataPelajaran": "1",
                "c_NamaMataPelajaran": "MATEMATIKA",
                "c_Level": "SMA"
            }
        ]
    })
}
const getstandbyTst=(req,res)=>{
    res.json({
        "status": true,
        "message": "Jadwal berhasil ditemukan",
        "data": [
            {
                "date": "2023-09-16",
                "teachers": [
                    {
                        "teacher": "Rayhan Hudan Satrio",
                        "lesson": "MATEMATIKA",
                        "schedule": [
                            {
                                "planId": "10608883",
                                "teacherId": "2023540051",
                                "buildingName": "SARIKAYA 148",
                                "activity": "TST Super",
                                "start": "14:30",
                                "finish": "16:30",
                                "isTST": true,
                                "available": true,
                                "registered": "Belum"
                            }
                        ]
                    }
                ]
            },
            {
                "date": "2023-09-17",
                "teachers": []
            },
            
        ]
    })
}
const getVideoTeaser=(req,res)=>{
    res.json({
        "status": true,
        "message": "Data Video ditemukan",
        "data": "http://streaming.ganeshaoperation.com/index.php?v=Wkcxc2ExcFhPVEJhVjBaNldsaEpkazlFUVhwT1ZHTjRUbXBvYkZsNldYZFBWRnB0VGxkT2FVMVhVWHBPVjBWM1RVZFplbGxYVm1sT1JFVjFZbGhCTUE9PQ=="
    })
}
module.exports={
    getjadwal,
    getvideobab,
    getvideomapel,
    getstandbyTst,
    getVideoTeaser
}