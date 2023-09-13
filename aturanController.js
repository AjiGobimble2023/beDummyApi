const getaturan=(req,res)=>{
    console.log('ok');
    res.json({
        "status": true,
        "message": "Berhasil didapatkan",
        "data": {
            "sudahTercatat": true,
            "aturan": "<html><body><div class=\\\"main\\\"><h3 align=\\\"center\\\">PERATURAN DAN TATA TERTIB SISWA GANESHA OPERATION TP 2022/2023</h3><ol align=\\\"justify\\\"><li>Siswa Ganesha Operation (GO) wajib hadir Kegiatan Belajar Mengajar (KBM) dan kegiatan GO lainnyaselambat-lambatnya 10 (sepuluh) menit sebelum kegiatan dimulai. Siswa GO yang terlambat, dilarang masukkelas kecuali mendapatkan izin tertulis dari Kepala Unit/<i>Customer Service </i>sesuai dengan peraturanGO setempat.</li><li>Siswa GO diwajibkan melakukan presensi sebagai bukti kehadiran selama mengikuti pembelajaran di GO.Presensi dilakukan setiap sesi jam belajar sesuai hari belajar menggunakan scan <i>Quick Response</i>(QR) Code ke Pengajar.</li><li>Siswa GO tidak diperbolehkan pindah kelas (mutasi) kecuali jika mendapat persetujuan dari KepalaUnit/Kepala Sekretariat GO setempat dan harus sesuai aturan yang berlaku.</li><li>Selama berada di lingkungan GO, Siswa GO diwajibkan selalu:<ol type=\\\"a\\\"><li>Berpakaian rapi, sopan, tidak memakai sandal jepit;</li><li>Tidak membawa senjata tajam, dan/atau membawa Narkoba jenis apapun;</li><li>Menggunakan masker selama berada di lingkungan GO;</li><li>Tidak saling meminjamkan alat tulis, HP, dll.</li></ol></li><li>Siswa GO dilarang merokok di lingkungan Ganesha Operation.</li><li>Siswa GO boleh membawa alat komunikasi (<i>handphone, tablet, dan gadget</i>) selama proses KBM GO, alatkomunikasi wajib dalam keadaan <i>silent mode</i>.</li><li>Siswa wajib mendownload GO Kreasi untuk sarana pembelajaran secara online.</li><li>Siswa GO wajib mengikuti dan menaati seluruh peraturan GO termasuk jadwal belajar, jadwal Try Out, SiagaPTS, Siaga PAS, dan Siaga PAT/US.</li><li>Ganesha Operation (GO) berhak mempublikasikan kelulusan dan/atau prestasi siswa.</li></ol></br></br></div></body></html>"
        }
    })
}

module.exports = {
    getaturan
}