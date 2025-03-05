// 1️⃣ Menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
console.log("Luas Persegi Panjang:", luasPersegiPanjang(5, 3));

// 2️⃣ Menghitung diameter, keliling, dan luas lingkaran
function hitungLingkaran(radius) {
    let diameter = 2 * radius;
    let keliling = 2 * Math.PI * radius;
    let luas = Math.PI * radius * radius;
    return { diameter, keliling, luas };
}
console.log("Hasil Lingkaran:", hitungLingkaran(5));

// 3️⃣ Menentukan sudut segitiga jika dua sudut diketahui
function sisaSudutSegitiga(sudut1, sudut2) {
    return 180 - (sudut1 + sudut2);
}
console.log("Sudut Ketiga:", sisaSudutSegitiga(80, 65));

// 4️⃣ Menghitung selisih hari antara dua tanggal
function selisihHari(tanggal1, tanggal2) {
    let tgl1 = new Date(tanggal1);
    let tgl2 = new Date(tanggal2);
    let selisih = Math.abs(tgl2 - tgl1) / (1000 * 60 * 60 * 24);
    return selisih;
}
console.log("Selisih Hari:", selisihHari("2024-03-19", "2024-03-21"));

// 5️⃣ Mengambil inisial nama dalam huruf kapital
function ambilInisial(nama) {
    return nama.split(' ').map(kata => kata[0].toUpperCase()).join('');
}
console.log("Inisial Nama:", ambilInisial("John Doe"));
