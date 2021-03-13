// OBJECT MEMILIKI REFERENSI YANG SAMA,
// jika object asal diubah, maka object yang menggunakan object tersebut
// juga akan berubah. Hal yang sama dengan Array
// CONTOH di bawah ini.

const paletWarna = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b',
};

const paletWarnaDua = paletWarna;

// clone object dengan referensi baru
const paletWarnaTiga = JSON.parse(JSON.stringify(paletWarna));

paletWarnaDua.red = '#eb4ddd';
console.log('PALET WARNA DUA ', paletWarnaDua);
console.log('PALET WARNA ASLI ', paletWarnaDua);
console.log('PALET WARNA TIGA ', paletWarnaTiga);

if (paletWarnaDua === paletWarna) {
    console.log(
        'BERNILAI TRUE karena referensi di memori komputer adalah sama',
    );
}

if (paletWarnaDua === paletWarnaTiga) {
    console.log(
        'BERNILAI FALSE karena referensi di memori RAM komputer adalah berbeda karena clone array',
    );
} else {
    console.log('HASILNYA AKAN FALSE DISINI');
}
