// FUNCTION RETURN VALUE
function multipleOleh(nilai) {
    const funcs = function() {
        console.log('HELLO FUNCTION MULTIPLE ', nilai);
    };
    return funcs;
}

function multiplesKalikan(nilaiA) {
    return function(nilaiB) {
        return nilaiA * nilaiB;
    };
}

const kalikan = multipleOleh(80);
kalikan();

const fungsiPangkatTiga = multiplesKalikan(3);
const fungsiKuadrat = multiplesKalikan(2);
const fungsiBagiSetengah = multiplesKalikan(0.5);

console.log('HASIL PANGKAT TIGA ', fungsiPangkatTiga(5));
console.log('HASIL KUADRAT ', fungsiKuadrat(5));
console.log('HASIL BAGI SETENGAH ', fungsiBagiSetengah(5));

// FUNCTION SEBAGAI ARGUMENT DAN SEBAGAI RETURN FUNCTION
function cekStatusRentang(nilaiAwal, nilaiAkhir) {
    return function(nilaiUji) {
        const isRentang = nilaiAwal <= nilaiUji && nilaiUji <= nilaiAkhir;
        return isRentang;
    };
}

const isUsiaAnakAnak = cekStatusRentang(6, 15);
console.log('STATUS USIA ANAK ', isUsiaAnakAnak(7), 7);
console.log('STATUS USIA ANAK ', isUsiaAnakAnak(20), 20);

const isJaman90 = cekStatusRentang(1990, 2000);
console.log('JAMAN 90 AN', isJaman90(2020), 2020);
console.log('JAMAN 90 AN', isJaman90(1996), 1996);

const isSuhuCuacaBaik = cekStatusRentang(24, 32);
console.log('SUHU CUACA OK ', isSuhuCuacaBaik(26), 26);

// CALLBACK FUNGSI YANG MENJADI ARGUMEN DAN DIEKSEKUSI DI DALAM FUNGSI LAINNYA
function callLogs() {
    console.log('HAI SAYA ADALAH CALLBACK');
}

setTimeout(callLogs, 3000);

setTimeout(() => {
    console.log('TIMEOUT FUNGSI ANONIM');
}, 2000);

const elementTombol = document.querySelector('button');
elementTombol.addEventListener('click', () => {
    // alert('KENAPA KAMU KLIK SAYA');
    console.log('KENAPA KAMU KLIK SAYA');
});
