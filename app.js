const express = require('express');
const bodyParser = require('body-parser');
const loginController = require('./loginController');
const berita = require('./beritaController');
const leaderboard =require('./leaderboardController');
const laporan = require('./laporanController');
const JVcontroller = require('./jadwal&videoController');
const friend =require('./friendController');
const feed = require('./feedController');
const rencana = require('./rencanaBelajarControler');
const bookmark = require('./bookmarkController');
const book = require('./bukuController');
const bukusoal = require('./bukusoalController');
const feedback = require('./feedbackController');
const presensi = require('./kehadiranController');
const pembayaran = require('./pembayaranController');
const simulasi = require('./simulasiController');
const notif = require('./notifController');
const ptn = require('./ptnController');
const log = require('./logController');
const app = express();
const port = 3000;

// Middleware untuk parsing body permintaan POST
app.use(bodyParser.json());

// Penanganan permintaan POST
app.post('/login',loginController.handleLogin);
app.post('/information',berita.getBerita);
app.post('/information/daily',berita.getdailynews);
app.post('/leaderboard',leaderboard.getLeaderboard);
app.post('/leaderboard/firstRank',leaderboard.getFristrank);
app.post('/leaderboard/capaian',leaderboard.getCapaian);
app.post('/capaian/bar',leaderboard.getCBar);
app.post('/leaderboardracing/getleaderracing',leaderboard.getracing);
app.post('/vak',laporan.getVak);
app.post('/log',laporan.getLog);
app.post('/presence/student',laporan.getPresensi);
app.post('/getlaporankuis',laporan.getkuis);
app.post('/tryout/laporan/tryout',laporan.getTobk);
app.post('/tryout/laporan/nilai',laporan.getNilaiTobk);
app.post('/jadwal/siswa',JVcontroller.getjadwal);
app.post('/video/getbab',JVcontroller.getvideobab);
app.post('/video/getmapel',JVcontroller.getvideomapel);
app.post('/standby/schedule',JVcontroller.getstandbyTst);
app.post('/friend/leaderboard',friend.getFriendLeaderboard);
app.post('/friend/search',friend.getFriendLeaderboard);
app.post('/feed',feed.getfeed);
app.post('/feed/comment',feed.getcommentfeed);
app.post('/feed/comment/add',feed.addcommentfeed);
app.post('/rencanabelajar/list/rencana',rencana.getrencanalist);
app.post('/rencanabelajar/list/menu',rencana.getrencanamenu);
app.post('/bookmark/shortcut',bookmark.getBookmark);
app.post('/buku/bab/:kodeBuku',book.getDaftarBab);
app.post('/14.06.23/buku/:jenisBuku',book.getDaftarBuku);
app.post('/buku/content/:idTeoriBab',book.getContent);
app.post('/bukusoal/bundel/:idJenisProduk',bukusoal.getDaftarBundel);
app.post('/bukusoal/bab/:idBundel',bukusoal.getDaftarBab);
app.post('/bukusoal/soal/paket/:kodePaket',bukusoal.getDaftarSoalTO);
app.post('/bukusoal/soal/:opsiUrut/:idBundel',bukusoal.getSoal);
app.post('/tryout/daftarsoalto',bukusoal.getSoalTO);
app.post('/tryout/kisikisipaket',bukusoal.getKisikisi);
app.post('/tryout/:idJenisProduk',bukusoal.getDaftarTOB);
app.post('/tryout/paket/:kodeTOB',bukusoal.getDaftarPaketTo);
app.post('/bukusoal/paket/timer/:idJenisProduk',bukusoal.getDaftarPaketTo2);
app.post('/tryout/syarat/:kodeTOB/:noRegistrasi',bukusoal.cekBolehTO);
app.post('/bukusoal/prasyarat/:kodePaket',bukusoal.getSyaratTO);
app.post('/bukusoal/paket/basic/:idJenisProduk',bukusoal.getDaftarPaketbasic);
app.post('/feedback/question',feedback.getQuetion);
app.post('/presence/getkehadiran',presensi.getPresensi);
app.post('/pembayaran/info',pembayaran.getPembayaran);
app.post('/pembayaran/infodetail',pembayaran.getPembayaranDetail);
app.post('/simulasi/nilai',simulasi.getsimulasiNilai);
app.post('/simulasi/pilihan',simulasi.getSimulasiPilihan);
app.post('/simulasi/hasil',simulasi.getSimulasiHasil);
app.post('/ptn/universitas',ptn.getUnive);
app.post('/ptn/jurusan',ptn.getJurusan);
app.post('/ptn/jurusan/detail',ptn.getDetai);
app.post('/ptn/pilihan',ptn.getpilihan);
app.post('/notif',notif.getnotif);
app.post('/2210/log/save',log.setLog);


// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
