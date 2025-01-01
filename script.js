// script.js
// Daftar kategori
const kategoriList = [
    { id: 1, nama: 'DETERGEN & PEWANGI', produkIds: [2,3,4,5,6,8,9,10,13,14,15,16,17,18] },
    { id: 2, nama: 'PEMBERSIH RUMAH', produkIds: [1,11,12,19,26,27,28,7,] },
    { id: 3, nama: 'MAKANAN KERING', produkIds: [33,34,35,36,37,38,39,40,42] },
    { id: 4, nama: 'KOPI,TEH,SUSU DLL', produkIds: [51,54,55,56,57,58,59,60,103,104,105,106,107,108,72] },
    { id: 5, nama: 'PERAWATAN DIRI', produkIds: [20,21,22,23,24,25,43,44,45,29,30] },
    { id: 6, nama: 'BUMBU DAPUR', produkIds: [61,62,63,64,65,66,67,68,69,70,71,73,74,75,76,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102] },
    { id: 7, nama: 'TEPUNG,AGER & BAHAN KUE', produkIds: [41,46,77,78,79,80,81,82,83,84,85,86,31,32] },
    { id: 8, nama: 'MIE,BIHUN,SOUN', produkIds: [47,48,49,50,52,53,87] },
];

// Daftar produk yang tersedia, sesuaikan nama dan harga produk di sini
const produkList = [
    { id: 1, nama: 'So Klin Lantai',harga: 10500,gambar: 'gmbr/soklin lantai.jpg'}, 
    { id: 2, nama: 'So Klin Bubuk Softergent 1,5kg', harga: 28000,gambar:'gmbr/soklin bubuk softergent 1,5kg.jpg' },  
    { id: 3, nama: 'So Klin Liquid', harga: 16000,gambar:'gmbr/soklin liquid.jpg'},  
    { id: 4, nama: 'So Klin Liquid Softergent',harga: 16000,gambar:'gmbr/soklin softener.jpg' },
    { id: 5, nama: 'So klin Pewangi', harga: 10500,gambar:'gmbr/soklin pewangi.JPG' },
    { id: 6, nama: 'So klin Pewangi hijab', harga: 10500,gambar:'gmbr/soklin pewangi hijab.JPG' },
    { id: 7, nama: 'Wipol', harga: 16000,gambar:'gmbr/wipol.JPG' },   
    { id: 8, nama: 'Molto Pewangi', harga: 12000,gambar:'gmbr/molto pewangi.JPG' },
    { id: 9, nama: 'Gentle Gen', harga: 16000,gambar:'gmbr/gentle gen.JPG' },
    { id: 10, nama: 'Vanish', harga: 0,gambar:'gmbr/vanish.JPG'}, 
    { id: 11,nama: 'Baygon', harga:35000,gambar:'gmbr/baygon.JPG' },
    { id: 12,nama: 'Hit', harga:35000,gambar:'gmbr/hit.JPG'},
    { id: 13,nama: 'Attack Jaz 1 (1,6kg)', harga:27000,gambar:'gmbr/jaz 1 besar.JPG'},
    { id: 14,nama: 'Daia Putih (1,6kg)', harga:28000,gambar:'gmbr/daia putih besar.JPG'},
    { id: 15,nama: 'Daia Putih (800gr)', harga:16000,gambar:'gmbr/daia 800gr.JPG'},
    { id: 16,nama: 'Daia Frolal (B)', harga:28000,gambar:'gmbr/daia frolal besar.JPG'},
    { id: 17,nama: 'Rinso Bubuk(k)', harga:20000,gambar:'gmbr/'},
    { id: 18,nama: 'Rinso Cair', harga:20000,gambar:'gmbr/rinso cair.JPG'},
    { id: 19,nama: 'vixal', harga:17000,gambar:'/gmbr/vixal.jpg'},
    { id: 20,nama: 'LifeBoy (B)', harga:30000,gambar:'gmbr/LifeBoy (B).jpg'},
    { id: 21,nama: 'Lux (B)', harga:35000,gambar:'gmbr/Lux (B).jpg'},
    { id: 22,nama: 'Nuvo (B)', harga:26000,gambar:'gmbr/Nuvo (B).jpg'},
    { id: 23,nama: 'Nuvo (K)', harga:16000,gambar:'gmbr/Nuvo (K).jpg'},
    { id: 24,nama: 'shinzu i (B)', harga:30000,gambar:'gmbr/Shinzu i (B).jpg'},
    { id: 25,nama: 'shinzu i (K)', harga:20000,gambar:'gmbr/shinzu i (K).jpg',Width:'50px',Height:'50px'},
    { id: 26,nama: 'sunlight', harga:10000,gambar:''},
    { id: 27,nama: 'mama lime', harga:9000,gambar:''},
    { id: 28,nama: 'sunlight (B)', harga:22000,gambar:''},
    { id: 29,nama: 'charm orange', harga:7000,gambar:''},
    { id: 30,nama: 'charm night', harga:18000,gambar:''},
    { id: 31,nama: 'nutrijel buah', harga:2500,gambar:''},
    { id: 32,nama: 'agar agar', harga:4500,gambar:''},
    { id: 33,nama: 'malkist (roma)', harga:6500,gambar:''},
    { id: 34,nama: 'malkist (gery)', harga:6500,gambar:''},
    { id: 35,nama: 'malkist kelapa (KG)', harga:11000,gambar:''},
    { id: 36,nama: 'superco (KG)', harga:8000,gambar:''},
    { id: 37,nama: 'kelapa cream (roma)', harga:11000,gambar:''},
    { id: 38,nama: 'roma sandwich', harga:7000,gambar:''},
    { id: 39,nama: 'roma kelapa', harga:9000,gambar:''},
    { id: 40,nama: 'PieBis (monde)', harga:9000,gambar:''},
    { id: 41,nama: 'Keju Prochiz', harga:13000,gambar:''},
    { id: 42,nama: 'Kokola Milk', harga:6000,gambar:''},
    { id: 43,nama: 'Pepsodent 225gr', harga:13000,gambar:''},
    { id: 44,nama: 'Pepsodent herbal 160gr', harga:16000,gambar:''},
    { id: 45,nama: 'closeup', harga:16000,gambar:''},
    { id: 46,nama: 'Meses safari', harga:6000,gambar:''},
    { id: 47,nama: 'soun (B)', harga:11000,gambar:''},
    { id: 48,nama: 'soun (K)', harga:2500,gambar:''},
    { id: 49,nama: 'bihun tanam (K)', harga:4000,gambar:''},
    { id: 50,nama: 'bihun tanam (B)', harga:7500,gambar:''},
    { id: 51,nama: 'energen', harga:2000,gambar:''},
    { id: 52,nama: 'mie goreng', harga:3000,gambar:''},
    { id: 53,nama: 'mie rebus',harga: 3000,gambar:''},
    { id: 54,nama: 'kapal api', harga:2000,gambar:''},
    { id: 55,nama: 'kopi susu abc', harga:2000,gambar:''},
    { id: 56,nama: 'indocafe', harga:2000,gambar:''},
    { id: 57,nama: 'good day mocchacino', harga:1500,gambar:''},
    { id: 58,nama: 'good day caramel', harga:1500,gambar:''},
    { id: 59,nama: 'luwak white coffe', harga:2000,gambar:''},
    { id: 60,nama: 'dancow sachet', harga:4000,gambar:''},
    { id: 61,nama: 'B.M racik Ayam G.', harga:2000,gambar:''},
    { id: 62,nama: 'B.M racik ikan G.', harga:2000,gambar:''},
    { id: 63,nama: 'B.M racik nasi G.Ori', harga:2000,gambar:''},
    { id: 64,nama: 'B.M racik G Ekstra pedas', harga:2000,gambar:''},
    { id: 65,nama: 'B.M racik sayur sop', harga:2000,gambar:''},
    { id: 66,nama: 'B.M racik tempe tahu', harga:2000,gambar:''},
    { id: 67,nama: 'B.M racik sayur asem', harga:2000,gambar:''},
    { id: 68,nama: 'masako sapi/ayam', harga:500,gambar:''},
    { id: 69,nama: 'royco sapi/ayam', harga:500,gambar:''},
    { id: 70,nama: 'ladaku', harga:1000,gambar:''},
    { id: 71,nama: 'terasi', harga:500,gambar:''},
    { id: 72,nama: 'susu frisian flag coklat/putih', harga:1500,gambar:''},
    { id: 73,nama: 'saori saus teriyaki', harga:2500,gambar:''},
    { id: 74,nama: 'saori saus tiram', harga:2500,gambar:''},
    { id: 75,nama: 'sajiku nasi G.', harga:2000,gambar:''},
    { id: 76,nama: 'blueband', harga:9500,gambar:''},
    { id: 77,nama: 'T.sasa kentucky ori', harga:5500,gambar:''},
    { id: 78,nama: 'T.sasa bakwan spesial', harga:5500,gambar:''},
    { id: 79,nama: 'T.Segitiga biru 1kg', harga:11500,gambar:''},
    { id: 80,nama: 'T.segitiga biru 1/2kg', harga:6500,gambar:''},
    { id: 81,nama: 'T.ketan putih', harga:10500,gambar:''},
    { id: 82,nama: 'T.tapioka', harga:7500,gambar:''},
    { id: 83,nama: 'T.beras putih', harga:7500,gambar:''},
    { id: 84,nama: 'T.lencana merah', harga:10500,gambar:''},
    { id: 85,nama: 'T.cakra kembar', harga:12000,gambar:''},
    { id: 86,nama: 'T.kunci biru', harga:12500,gambar:''},
    { id: 87,nama: 'mie telur 3 ayam', harga:4500,gambar:''},
    { id: 88,nama: 'saori saus tiram (B)', harga:11000,gambar:''},
    { id: 89,nama: 'saori saus teriyaki(B)', harga:11000,gambar:''},
    { id: 90,nama: 'bango botol 385gr', harga:21000,gambar:''},
    { id: 91,nama: 'saos indofooed ekstra pedas 275gr', harga:11000,gambar:''},
    { id: 92,nama: 'saos indofood tomat 275gr', harga:9500,gambar:''},
    { id: 93,nama: 'saos indofood sambal pedas 275gr', harga:11000,gambar:''},
    { id: 94,nama: 'saos indofood pedas dasyat 275gr', harga:12500,gambar:''},
    { id: 95,nama: 'royco ayam (B)', harga:9000,gambar:''},
    { id: 96,nama: 'royco sapi (B)', harga:9000,gambar:''},
    { id: 97,nama: 'saos belibis botol', harga:18000,gambar:''},
    { id: 98,nama: 'bango refil 720gr', harga:22000,gambar:''},
    { id: 99,nama: 'abc refil 685gr', harga:17500,gambar:''},
    { id: 100,nama: 'indofood kecap manis refil 520gr', harga:14500,gambar:''},
    { id: 101,nama: 'palmia', harga:6000,gambar:''},
    { id: 102,nama: 'indofood racik bumbu spesial', harga:5500,gambar:''},
    { id: 103,nama: 'tongji ori', harga:6000,gambar:''},
    { id: 104,nama: 'tongji jasmine', harga:9000,gambar:''},
    { id: 105,nama: 'teh jawa teh hitam', harga:5000,gambar:''},
    { id: 106,nama: 'teh jawa jasmine', harga:8000,gambar:''},
    { id: 107,nama: 'teh poci ori', harga:5000,gambar:''},
    { id: 108,nama: 'teh poci vanila', harga:6500,gambar:''},
    { id: 109,nama: 'chamn orange sayap', harga:9000,gambar:''},
    { id: 110,nama: 'nutrijel coklat', harga:3000,gambar:''},
    { id: 111,nama: 'energen 1R', harga:19000,gambar:''},
    { id: 112,nama: 'mie rebus 2', harga:2500,gambar:''},
    { id: 113,nama: 'kapal api 2', harga:3500,gambar:''},
    { id: 114,nama: 'kapal api 1R', harga:16500,gambar:''},
    { id: 115,nama: 'indocafe 2', harga:3500,gambar:''},
    { id: 116,nama: 'indocafe 1R', harga:16500,gambar:''},
    { id: 117,nama: 'kopi susu abc 2', harga:3500,gambar:''},
    { id: 118,nama: 'kopi susu abc 1R', harga:16500,gambar:''},
    { id: 119,nama: 'good day mocchachino', harga:15000,gambar:''},
    { id: 120,nama: 'good day caramel', harga:15000,gambar:''},
    { id: 121,nama: 'luwak white coffe 2', harga:3500,gambar:''},
    { id: 122,nama: 'luwak white coffe 1R', harga:16000,gambar:''},
    { id: 123,nama: 'dancow sachet 1R', harga:38000,gambar:''},
    { id: 124,nama: 'B. racik 1R', harga:17500,gambar:''},
    { id: 125,nama: 'masako sapi/ayam 1R(12)', harga:5000,gambar:''},
    { id: 126,nama: 'royco sapi/ayam 1R(12)', harga:5000,gambar:''},
    { id: 127,nama: 'ladaku 1R(12)', harga:10000,gambar:''},
    { id: 128,nama: 'terasi 1B(20)', harga:7500,gambar:''},
    { id: 129,nama: 'susu frisian flag coklat/putih 1R(6)', harga:8500,gambar:''},
    { id: 130,nama: 'regal', harga:12000,gambar:''},
    { id: 131,nama: '', harga:0,gambar:''},
    { id: 132,nama: '', harga:0,gambar:''},
    { id: 133,nama: '', harga:0,gambar:''},
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
        const totalPerBaris = parseFloat(tabelRows[i].cells[3].textContent.replace("Rp ", "").replace(",", ""));
        totalHarga += totalPerBaris;
    }

    document.getElementById("totalHarga").textContent = `Rp ${totalHarga.toLocaleString()}`;

    // Aktifkan tombol proses pembayaran jika ada produk
    const tombolPembayaran = document.getElementById("selesaiPembayaran");
    if (tabelRows.length > 0) {
        tombolPembayaran.disabled = false;
    } else {
        tombolPembayaran.disabled = true;
    }
}
