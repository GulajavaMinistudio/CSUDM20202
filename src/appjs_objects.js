const dataKesehatan = {
    totalLangkah: 1500,
    totalJarak: 211.8,
    rataKaloriBakar: 5778,
    workoutTotal: '5 of 8',
    rataGoodSleep: '2:18',
};

const keyGoodSleep = 'rataGoodSleep';
console.log(dataKesehatan);
console.log(dataKesehatan.totalJarak);
console.log(dataKesehatan.workoutTotal);
console.log(dataKesehatan[keyGoodSleep]);

const bilanganObject = {
    100: 'Seratus',
    23: 'Dua puluh tiga',
    34: 'Tiga puluh empat',
    '36 kucing': 'kucing banyak sekali',
};

console.log(bilanganObject);
console.log(bilanganObject[100]);
console.log(bilanganObject[23]);
console.log(bilanganObject['34']);
console.log(bilanganObject['100']);

// OBJECT diambil dengan metode key array seperti ini
console.log(bilanganObject['36 kucing']);

const paletWarna = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b',
};

console.log(paletWarna.red);
console.log(paletWarna.blue);

const paramKuning = 'yellow';
console.log(paletWarna[paramKuning]);

// OBJECT ADD VALUE dan UPDATE VALUE
const userReview = {};
userReview.penggunaSatu = 6.7;
userReview['pengguna Dua'] = 7.6;
userReview.penggunaTiga = 8.4;
userReview.penggunaEmpat = 7.4;

console.log('OBJECT REVIEW ', userReview);

setTimeout(() => {
    userReview.penggunaTiga = 7.7;
    console.log('OBJECT REVIEW GANTI ', userReview);
}, 1000);

const dataMurid = {
    namaDepan: 'Kucing',
    namaBelakang: 'Jones',
    hobi: ['Musik', 'Pengkodean'],
    ujian: {
        uts: 80,
        uas: 94,
    },
};

console.log(dataMurid);
const nilaiUjianUTS = dataMurid.ujian.uts;
const nilaiUjianUAS = dataMurid.ujian.uas;
const nilaiRataRata = (nilaiUjianUTS + nilaiUjianUAS) / 2;
console.log('OBJECT NILAI RATA-RATA ', nilaiRataRata);

const shoppingCarts = [
    {
        nama: 'Daging Sapi',
        harga: 89000,
        jumlah: 3,
    },
    {
        nama: 'Sayur Kacang',
        harga: 34000,
        jumlah: 1,
    },
    {
        nama: 'Ikan Tongkol',
        harga: 46700,
        jumlah: 7,
    },
];

console.log('ARRAY OBJECT ', shoppingCarts);
console.log('ISI ARRAY INDEKS ', shoppingCarts[2]);
