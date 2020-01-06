// EVERY FILTER ARRAY
// cek semua anggota array apakah cocok dengan kondisi atau tidak
const kataKata = ['dog', 'dig', 'log', 'bat', 'wag'];

const isSemuaTiga = kataKata.every(kata => {
    const isPanjangTiga = kata.length === 3;
    return isPanjangTiga;
});

const isSemuaAkhiranG = kataKata.every(kata => {
    const indexLast = kata.length - 1;
    const isKataAkhirG = kata[indexLast] === 'g';
    return isKataAkhirG;
});

console.log('Cek status panjang kata = 3 ', isSemuaTiga);
console.log('Cek status akhiran g kata ', isSemuaAkhiranG);

// SOME FILTER ARRAY
// Cek apakah salah satu array sesuai dengan kriteria yang ditentukan
const isSebagianAwalanD = kataKata.some(kata => {
    const isAwalanD = kata[0] === 'd';
    return isAwalanD;
});

const isSemuaAwalanD = kataKata.every(kata => {
    const isAwalanD = kata[0] === 'd';
    return isAwalanD;
});

console.log('CEK AWALAN D SEBAGIAN SOME ', isSebagianAwalanD);
console.log('CEK AWALAN D SEMUA EVERY ', isSemuaAwalanD);

const listKoleksiBuku = [
    {
        judul: 'Matematika',
        penulis: ['Pak Guru A', 'Pak Guru B'],
        rating: 4.25,
        genres: ['Fiksi'],
    },
    {
        judul: 'Bahasa Indonesia',
        penulis: ['Pak Guru AB', 'Pak Guru BC'],
        rating: 5.5,
        genres: ['Epic'],
    },
    {
        judul: 'Sejarah',
        penulis: ['Pak Guru DA', 'Pak Guru DE'],
        rating: 4.75,
        genres: ['Dongeng'],
    },
    {
        judul: 'Sejarah Kuno',
        penulis: ['Pak Guru DA', 'Pak Guru DE'],
        rating: 4.85,
        genres: ['Dongeng'],
    },
];

const adaBukuBagus = listKoleksiBuku.some(buku => {
    const isBukuBagus = buku.rating > 6.7;
    return isBukuBagus;
});

console.log('ADA BUKU BAGUS ARRAY SOME', adaBukuBagus);
