// script.js
// Daftar kategori
const kategoriList = [
    { id: 1, nama: 'DETERGEN & PEWANGI', produkIds: [2,3,4,5,6,8,9,10,13,14,15,16,17,18] },
    { id: 2, nama: 'PEMBERSIH RUMAH', produkIds: [1,11,12,19,26,27,28,7,] },
    { id: 3, nama: 'MAKANAN KERING', produkIds: [33,34,35,36,37,38,39,40,42,130] },
    { id: 4, nama: 'KOPI,TEH,SUSU DLL', produkIds: [51,54,55,56,57,58,59,60,103,104,105,106,107,108,72,111,113,114,115,116,117,118,119,120,121,122,123,129] },
    { id: 5, nama: 'PERAWATAN DIRI', produkIds: [20,21,22,23,24,25,43,44,45,29,30,109] },
    { id: 6, nama: 'BUMBU DAPUR', produkIds: [61,62,63,64,65,66,67,68,69,70,71,73,74,75,76,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,124,125,126,127,128] },
    { id: 7, nama: 'TEPUNG,AGER & BAHAN KUE', produkIds: [41,46,77,78,79,80,81,82,83,84,85,86,31,32,110] },
    { id: 8, nama: 'MIE,BIHUN,SOUN', produkIds: [47,48,49,50,52,53,87,112] },
];

// Daftar produk yang tersedia, sesuaikan nama dan harga produk di sini
const produkList = [
    { id: 1, nama: 'So Klin Lantai',harga: 10500,gambar: 'gmbr2/soklin lantai.jpg'}, 
    { id: 2, nama: 'So Klin Bubuk Softergent 1,5kg', harga: 28000,gambar:'gmbr2/soklin bubuk softergent 1,5kg.jpg' },  
    { id: 3, nama: 'So Klin Liquid', harga: 16000,gambar:'gmbr2/soklin liquid.jpg'},  
    { id: 4, nama: 'So Klin Liquid Softergent',harga: 16000,gambar:'gmbr2/soklin softener.jpg' },
    { id: 5, nama: 'So klin Pewangi', harga: 10500,gambar:'gmbr2/soklin pewangi.JPG' },
    { id: 6, nama: 'So klin Pewangi hijab', harga: 10500,gambar:'gmbr2/soklin pewangi hijab.JPG' },
    { id: 7, nama: 'Wipol', harga: 16000,gambar:'gmbr2/wipol.JPG' },   
    { id: 8, nama: 'Molto Pewangi', harga: 12000,gambar:'gmbr2/molto pewangi.JPG' },
    { id: 9, nama: 'Gentle Gen', harga: 16000,gambar:'gmbr2/gentle gen.JPG' },
    { id: 10, nama: 'Vanish', harga: 0,gambar:'gmb2r/vanish.JPG'}, 
    { id: 11,nama: 'Baygon', harga :35000,gambar:'gmbr2/baygon.JPG' },
    { id: 12,nama: 'Hit', harga:35000,gambar:'gmbr2/hit.JPG'},
    { id: 13,nama: 'Attack Jaz 1 (1,6kg)', harga:27000,gambar:'gmbr2/jaz 1 besar.JPG'},
    { id: 14,nama: 'Daia Putih (1,6kg)', harga:28000,gambar:'gmbr2/daia putih besar.JPG'},
    { id: 15,nama: 'Daia Putih (800gr)', harga:16000,gambar:'gmbr2/daia 800gr.JPG'},
    { id: 16,nama: 'Daia Frolal (B)', harga:28000,gambar:'gmbr2/daia frolal besar.JPG'},
    { id: 17,nama: 'Rinso Bubuk(k)', harga:20000,gambar:'gmbr/'},
    { id: 18,nama: 'Rinso Cair', harga:20000,gambar:'gmbr2/rinso cair.JPG'},
    { id: 19,nama: 'vixal', harga:17000,gambar:'/gmbr2/vixal.jpg'},
    { id: 20,nama: 'LifeBoy (B)', harga:30000,gambar:'gmbr/LifeBoy (B).jpg'},
    { id: 21,nama: 'Lux (B)', harga:35000,gambar:'gmbr/Lux (B).jpg'},
    { id: 22,nama: 'Nuvo (B)', harga:26000,gambar:'gmbr/Nuvo (B).jpg'},
    { id: 23,nama: 'Nuvo (K)', harga:16000,gambar:'gmbr/Nuvo (K).jpg'},
    { id: 24,nama: 'shinzu i (B)', harga:30000,gambar:'gmbr/Shinzu i (B).jpg'},
    { id: 25,nama: 'shinzu i (K)', harga:20000,gambar:'gmbr/shinzu i (K).jpg'},
    { id: 26,nama: 'sunlight', harga:10000,gambar:'gmbr/sunlight s.jpg'},
    { id: 27,nama: 'mama lime', harga:9000,gambar:'gmbr/mamalime.jpg'},
    { id: 28,nama: 'sunlight (B)', harga:22000,gambar:'gmbr/sunlight.jpg'},
    { id: 29,nama: 'charm orange', harga:7000,gambar:'gmbr/cham g syp.jpg'},
    { id: 30,nama: 'charm night', harga:18000,gambar:'gmbr/cham night.jpg'},
    { id: 31,nama: 'nutrijel buah', harga:2500,gambar:'gmbr/nutrijel.jpg'},
    { id: 32,nama: 'agar agar', harga:4500,gambar:'gmbr/agar agar.jpg'},
    { id: 33,nama: 'malkist (roma)', harga:6500,gambar:'gmbr/malkist roma.jpg'},
    { id: 34,nama: 'malkist (gery)', harga:6500,gambar:'gmbr/malkist gery.jpg'},
    { id: 35,nama: 'malkist kelapa (KG)', harga:11000,gambar:'gmbr/malkis kelapa kg.jpg'},
    { id: 36,nama: 'superco (KG)', harga:8000,gambar:'gmbr/superco.jpg'},
    { id: 37,nama: 'kelapa cream (roma)', harga:11000,gambar:'gmbr/kelapa cream.jpg'},
    { id: 38,nama: 'roma sandwich', harga:7000,gambar:'gmbr/roma sandwich.jpg'},
    { id: 39,nama: 'roma kelapa', harga:9000,gambar:'gmbr/roma kelapa.jpg'},
    { id: 40,nama: 'PieBis (monde)', harga:9000,gambar:'gmbr/piebis.jpg'},
    { id: 41,nama: 'Keju Prochiz', harga:13000,gambar:'gmbr/prochiz.jpg'},
    { id: 42,nama: 'Kokola Milk', harga:6000,gambar:'gmbr/kokomilk.jpg'},
    { id: 43,nama: 'Pepsodent 225gr', harga:13000,gambar:'gmbr/pepsodent sedang.jpg'},
    { id: 44,nama: 'Pepsodent herbal 160gr', harga:16000,gambar:'gmbr2/pepsoden herbal.jpeg'},
    { id: 45,nama: 'closeup', harga:16000,gambar:'gmbr/closeup.jpg'},
    { id: 46,nama: 'Meses safari', harga:6000,gambar:'gmbr/meses safari.jpg'},
    { id: 47,nama: 'soun (B)', harga:11000,gambar:'gmbr/soun besar.jpeg'},
    { id: 48,nama: 'soun (K)', harga:2500,gambar:'gmbr/soun k.jpg'},
    { id: 49,nama: 'bihun tanam (K)', harga:4000,gambar:'gmbr/bihun tanam k.jpg'},
    { id: 50,nama: 'bihun tanam (B)', harga:7500,gambar:'gmbr/bihun tanam b.jpg'},
    { id: 51,nama: 'energen', harga:2000,gambar:'gmbr/energen.jpg'},
    { id: 52,nama: 'mie goreng', harga:3000,gambar:'gmbr/indomie goreng.png'},
    { id: 53,nama: 'mie rebus',harga: 3000,gambar:'gmbr/indomie rebus.png'},
    { id: 54,nama: 'kapal api', harga:2000,gambar:'gmbr/kapal api.png'},
    { id: 55,nama: 'kopi susu abc', harga:2000,gambar:'gmbr/kopi abc.jpg'},
    { id: 56,nama: 'indocafe', harga:2000,gambar:'gmbr/indocafe.jpg'},
    { id: 57,nama: 'good day mocchacino', harga:1500,gambar:'gmbr/good day mocacino.jpg'},
    { id: 58,nama: 'good day caramel', harga:1500,gambar:'gmbr/goodday caramel.jpg'},
    { id: 59,nama: 'luwak white coffe', harga:2000,gambar:'gmbr/luwak.jpg'},
    { id: 60,nama: 'dancow sachet', harga:4000,gambar:'gmbr/dancow sachet.jpg'},
    { id: 61,nama: 'B.M racik Ayam G.', harga:2000,gambar:'gmbr/bumbu racik.jpg'},
    { id: 62,nama: 'B.M racik ikan G.', harga:2000,gambar:'gmbr/bumbu racik.jpg'},
    { id: 63,nama: 'B.M racik nasi G.Ori', harga:2000,gambar:'gmbr/bumbu racik.jpg'},
    { id: 64,nama: 'B.M racik G Ekstra pedas', harga:2000,gambar:'gmbr/bumbu racik.jpg'},
    { id: 65,nama: 'B.M racik sayur sop', harga:2000,gambar:'gmbr/bumbu racik.jpg'},
    { id: 66,nama: 'B.M racik tempe tahu', harga:2000,gambar:'gmbr/bumbu racik.jpg'},
    { id: 67,nama: 'B.M racik sayur asem', harga:2000,gambar:'gmbr/bumbu racik.jpg'},
    { id: 68,nama: 'masako sapi/ayam', harga:500,gambar:'gmbr/masako.jpg'},
    { id: 69,nama: 'royco sapi/ayam', harga:500,gambar:'gmbr/royco.jpg'},
    { id: 70,nama: 'ladaku', harga:1000,gambar:'gmbr/ladaku.png'},
    { id: 71,nama: 'terasi', harga:500,gambar:'gmbr/terasi.jpg'},
    { id: 72,nama: 'susu frisian flag coklat/putih', harga:1500,gambar:'gmbr/susu bendera sachet.jpg'},
    { id: 73,nama: 'saori saus teriyaki', harga:2500,gambar:'gmbr/saus teriyaki.jpg'},
    { id: 74,nama: 'saori saus tiram', harga:2500,gambar:'gmbr/saus tiram.jpg'},
    { id: 75,nama: 'sajiku nasi G.', harga:2000,gambar:'gmbr/sajiku nasi g.jpg'},
    { id: 76,nama: 'blueband', harga:9500,gambar:'gmbr/blueband.jpg'},
    { id: 77,nama: 'T.sasa kentucky ori', harga:5500,gambar:'gmbr/T sasa kentucky ori.jpeg'},
    { id: 78,nama: 'T.sasa bakwan spesial', harga:5500,gambar:'gmbr/T sasa bakwan.jpg'},
    { id: 79,nama: 'T.Segitiga biru 1kg', harga:11500,gambar:'gmbr/T segitiga biru.png'},
    { id: 80,nama: 'T.segitiga biru 1/2kg', harga:6500,gambar:'gmbr/T segitiga biru set kg.jpg'},
    { id: 81,nama: 'T.ketan putih', harga:10500,gambar:'gmbr/ketan putih.jpeg'},
    { id: 82,nama: 'T.tapioka', harga:7500,gambar:'gmbr/tapioka.jpeg'},
    { id: 83,nama: 'T.beras putih', harga:7500,gambar:'gmbr/beras putih.jpeg'},
    { id: 84,nama: 'T.lencana merah', harga:10500,gambar:'gmbr/lencana merah.jpeg'},
    { id: 85,nama: 'T.cakra kembar', harga:12000,gambar:'gmbr/cakra kembar.jpeg'},
    { id: 86,nama: 'T.kunci biru', harga:12500,gambar:'gmbr/kunci biru.jpeg'},
    { id: 87,nama: 'mie telur 3 ayam', harga:4500,gambar:'gmbr/mie telur.jpeg'},
    { id: 88,nama: 'saori saus tiram (B)', harga:11000,gambar:'gmbr/saus tiram botol.jpeg'},
    { id: 89,nama: 'saori saus teriyaki(B)', harga:11000,gambar:'gmbr/saus teriyaki botol.jpeg'},
    { id: 90,nama: 'bango botol 385gr', harga:21000,gambar:'gmbr/bango refil.jpeg'},
    { id: 91,nama: 'saos indofooed ekstra pedas 275gr', harga:11000,gambar:'gmbr/saos ekstra pedas.jpeg'},
    { id: 92,nama: 'saos indofood tomat 275gr', harga:9500,gambar:'gmbr/saos tomat.jpeg'},
    { id: 93,nama: 'saos indofood sambal pedas 275gr', harga:11000,gambar:'gmbr/saos sambal pedas.jpeg'},
    { id: 94,nama: 'saos indofood pedas dasyat 275gr', harga:12500,gambar:'gmbr/saos pedas dasyat.jpeg'},
    { id: 95,nama: 'royco ayam (B)', harga:9000,gambar:'gmbr/royco ayam b.jpeg'},
    { id: 96,nama: 'royco sapi (B)', harga:9000,gambar:'gmbr/royco sapi b.jpeg'},
    { id: 97,nama: 'saos belibis botol', harga:18000,gambar:'gmbr/saos belibis.jpeg'},
    { id: 98,nama: 'bango refil 720gr', harga:22000,gambar:'gmbr/bango refil.jpeg'},
    { id: 99,nama: 'abc refil 685gr', harga:17500,gambar:'gmbr/abc refil.jpeg'},
    { id: 100,nama: 'indofood kecap manis refil 520gr', harga:14500,gambar:'gmbr/kecap indofood.jpeg'},
    { id: 101,nama: 'palmia', harga:6000,gambar:'gmbr/palmia.jpeg'},
    { id: 102,nama: 'indofood racik bumbu spesial', harga:5500,gambar:'gmbr/bumbu racik spesial.jpeg'},
    { id: 103,nama: 'tongji ori', harga:6000,gambar:'gmbr/tongji ori.jpeg'},
    { id: 104,nama: 'tongji jasmine', harga:9000,gambar:'gmbr/tongji jasmine.jpeg'},
    { id: 105,nama: 'teh jawa teh hitam', harga:5000,gambar:'gmbr/teh jawa hitam.jpeg'},
    { id: 106,nama: 'teh jawa jasmine', harga:8000,gambar:'gmbr/teh jawa jasmine.jpeg'},
    { id: 107,nama: 'teh poci ori', harga:5000,gambar:'gmbr/teh poci ori.jpeg'},
    { id: 108,nama: 'teh poci vanila', harga:6500,gambar:'gmbr/teh poci vanila.jpeg'},
    { id: 109,nama: 'chamn orange sayap', harga:9000,gambar:'gmbr/cham syp.jpg'},
    { id: 110,nama: 'nutrijel coklat', harga:3000,gambar:'gmbr/nutrijel.jpg'},
    { id: 111,nama: 'energen 1R', harga:19000,gambar:'gmbr/energen.jpg'},
    { id: 112,nama: 'mie rebus 2', harga:2500,gambar:'gmbr/indomie rebus.png'},
    { id: 113,nama: 'kapal api 2', harga:3500,gambar:'gmbr/kapal api.png'},
    { id: 114,nama: 'kapal api 1R', harga:16500,gambar:'gmbr/kapal api.png'},
    { id: 115,nama: 'indocafe 2', harga:3500,gambar:'gmbr/indocafe.jpg'},
    { id: 116,nama: 'indocafe 1R', harga:16500,gambar:'gmbr/indocafe.jpg'},
    { id: 117,nama: 'kopi susu abc 2', harga:3500,gambar:'gmbr/kopi abc.jpg'},
    { id: 118,nama: 'kopi susu abc 1R', harga:16500,gambar:'gmbr/kopi abc.jpg'},
    { id: 119,nama: 'good day mocchachino 1R', harga:15000,gambar:'gmbr/good day mocacino.jpg'},
    { id: 120,nama: 'good day caramel 1R', harga:15000,gambar:'gmbr/goodday caramel.jpg'},
    { id: 121,nama: 'luwak white coffe 2', harga:3500,gambar:'gmbr/luwak.jpg'},
    { id: 122,nama: 'luwak white coffe 1R', harga:16000,gambar:'gmbr/luwak.jpg'},
    { id: 123,nama: 'dancow sachet 1R', harga:38000,gambar:'gmbr/dancow sachet.jpg'},
    { id: 124,nama: 'B. racik 1R', harga:17500,gambar:'gmbr/bumbu racik.jpg'},
    { id: 125,nama: 'masako sapi/ayam 1R(12)', harga:5000,gambar:'gmbr/masako.jpg'},
    { id: 126,nama: 'royco sapi/ayam 1R(12)', harga:5000,gambar:'gmbr/royco.jpg'},
    { id: 127,nama: 'ladaku 1R(12)', harga:10000,gambar:'gmbr/ladaku.png'},
    { id: 128,nama: 'terasi 1B(20)', harga:7500,gambar:'gmbr/terasi.jpg'},
    { id: 129,nama: 'susu frisian flag coklat/putih 1R(6)', harga:8500,gambar:'gmbr/susu bendera sachet.jpg'},
    { id: 130,nama: 'regal', harga:12000,gambar:'gmbr/regal.jpeg'},
    { id: 131,nama: 'Beras Anak Raja', harga:73000,gambar:'gmbr2/beras anak raja.jpeg'},
    { id: 132,nama: 'Beras Sania', harga:0,gambar:'gmbr2/beras sania.jpeg'},
    { id: 133,nama: 'Beras Hoki', harga:72000,gambar:'gmbr2/beras hoki.jpeg'},
    { id: 134,nama: 'Minyak Sunco', harga:0,gambar:'gmbr2/sunco'},
    { id: 135,nama: 'Minyak Tropical', harga:0,gambar:'gmbr2/minyak tropical.jpeg'},
    { id: 136,nama: 'Minyak Sania', harga:0,gambar:'gmbr2/minyak sania.jpeg'},
    { id: 137,nama: 'Minyak Kita', harga:0,gambar:'gmbr2/minyak kita 1L.jpeg'},
    { id: 138,nama: 'Santen Kara', harga:0,gambar:''},
    { id: 139,nama: 'Garam 1/2kg', harga:0,gambar:''},
    { id: 140,nama: 'Garam 250gr', harga:0,gambar:''},
    { id: 141,nama: 'Sabun Colek', harga:0,gambar:''},
    { id: 142,nama: 'Minyak Filma', harga:37000,gambar:''},
    /*{ id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},
    { id: 24,nama: '', harga:0,gambar:''},*/
]
// Menampilkan kategori
const kategoriContainer = document.getElementById('kategoriList');
kategoriList.forEach(kategori => {
    const kategoriElement = document.createElement('div');
    kategoriElement.classList.add('kategoriItem');
    kategoriElement.textContent = kategori.nama;
    kategoriElement.addEventListener('click', () => tampilkanProduk(kategori));
    kategoriContainer.appendChild(kategoriElement);
});
// Menampilkan produk berdasarkan kategori yang dipilih
function tampilkanProduk(kategori) {
    const produkContainer = document.getElementById('produkList');
    produkContainer.innerHTML = ''; // Menghapus produk sebelumnya
    // Menampilkan produk yang sesuai dengan kategori
    const produkDalamKategori = produkList.filter(produk => kategori.produkIds.includes(produk.id));
    produkDalamKategori.forEach(produk => {
        const produkElement = document.createElement('div');
        produkElement.classList.add('produkItem');
        produkElement.innerHTML = `
            <img src="${produk.gambar}" alt="${produk.nama}" class="produkImage">
            <p>${produk.nama}</p>
            <p>Rp ${produk.harga.toLocaleString()}</p>
        `;
        produkElement.addEventListener('click', () => tambahKeBelanja(produk));
        produkContainer.appendChild(produkElement);
    });
}

// Menampilkan produk di halaman
const produkContainer = document.getElementById('produkList');
produkList.forEach(produk => {
    const produkElement = document.createElement('div');
    produkElement.classList.add('produkItem');
    produkElement.innerHTML =
    `${produk.nama}<br><img src="${produk.gambar}" alt="${produk.nama}"height="100px,width="100"> <!-- Menampilkan gambar produk -->
            <p>Rp ${produk.harga.toLocaleString()}`;
    produkElement.addEventListener('click', () => tambahKeBelanja(produk));
    produkContainer.appendChild(produkElement);
});

// Fungsi untuk menambahkan produk ke daftar belanja
function tambahKeBelanja(produk) {
    // Cek apakah produk sudah ada di dalam daftar belanja
    const tabelBody = document.getElementById("tabelBelanja").getElementsByTagName("tbody")[0];
    const rows = tabelBody.rows;
    let produkSudahAda = false;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const namaProdukCell = row.cells[0].textContent;
    
        if (namaProdukCell === produk.nama) {
            // Jika sudah ada, tambahkan jumlahnya
            const jumlahCell = row.cells[2];
            const jumlah = parseInt(jumlahCell.textContent);
            jumlahCell.textContent = jumlah + 1;

            // Update total per baris
            const totalCell = row.cells[3];
            const harga = produk.harga;
            totalCell.textContent = `Rp ${(harga * (jumlah + 1)).toLocaleString()}`;
            produkSudahAda = true;
            break;
        }
    }

    if (!produkSudahAda) {
        // Jika produk belum ada, tambahkan baris baru
        const row = tabelBody.insertRow();
        row.innerHTML = `
            <td>${produk.nama}</td>
            <td>Rp ${produk.harga.toLocaleString()}</td>
            <td>1</td>
            <td>Rp ${produk.harga.toLocaleString()}</td>
            <td><button class="hapusProduk">Hapus</button></td>
        `;

        // Menambahkan event listener untuk tombol hapus
        row.querySelector(".hapusProduk").addEventListener("click", function() {
            tabelBody.deleteRow(row.rowIndex - 1);
            updateTotalHarga();
        });
    }

    updateTotalHarga();
}
// Fungsi untuk memperbarui total harga
function updateTotalHarga() {
    const tabelRows = document.getElementById("tabelBelanja").getElementsByTagName("tbody")[0].rows;
    let totalHarga = 0;

    for (let i = 0; i < tabelRows.length; i++) {
        const totalPerBaris = parseFloat(tabelRows[i].cells[3].textContent.replace("Rp ", "").replace(/,/g,""));
        totalHarga += totalPerBaris;
    }

    document.getElementById("totalHarga").textContent = `Rp ${totalHarga.toLocaleString('id-ID')}`;

    // Aktifkan tombol proses pembayaran jika ada produk
    const tombolPembayaran = document.getElementById("selesaiPembayaran");
    if (tabelRows.length > 0) {
        tombolPembayaran.disabled = false;
    } else {
        tombolPembayaran.disabled = true;
    }
}
function addItem(name, price) {
    const quantity = prompt(`Berapa banyak ${name} yang ingin Anda beli?`);
    if (quantity > 0) {
        const total = price * quantity;
        const item = { name, price, quantity, total };
        cart.push(item);
        updateCart();
    }
}
