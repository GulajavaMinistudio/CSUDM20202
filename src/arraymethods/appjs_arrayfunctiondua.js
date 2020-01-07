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

// SORT ARRAY DENGAN COMPARE FUNCTION

const listHarga = [400.5, 3000, 90.99, 36.99, 12.67];
const listHargaDesc = [400.5, 3000, 90.99, 36.99, 12.67];

// ASCENDING SORT
listHarga.sort((nilaiA, nilaiB) => {
    const nilaiUrut = nilaiA - nilaiB;
    return nilaiUrut;
});

console.log('SORT URUT ARRAY ASCENDING', listHarga);

// DESCENDING SORT
listHargaDesc.sort((nilaiA, nilaiB) => {
    const nilaiUrut = nilaiB - nilaiA;
    return nilaiUrut;
});

console.log('SORT URUT ARRAY DESCENDING', listHargaDesc);

const listKoleksiBukuSort = [
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

// SORT BERDASARKAN JUDUL
const arraySortAscendingString = listKoleksiBukuSort
    .slice()
    .sort((nilaiA, nilaiB) => {
        const judulA = nilaiA.judul.toUpperCase();
        const judulB = nilaiB.judul.toUpperCase();
        if (judulA < judulB) {
            return -1;
        }
        if (judulA > judulB) {
            return 1;
        }
        return 0;
    });

const arraySortDescendingString = listKoleksiBukuSort
    .slice()
    .sort((nilaiA, nilaiB) => {
        const judulA = nilaiA.judul;
        const judulB = nilaiB.judul;
        if (judulA < judulB) {
            return 1;
        }
        if (judulA > judulB) {
            return -1;
        }
        return 0;
    });

const arraySortPeringkatAsc = listKoleksiBukuSort
    .slice()
    .sort((bukuA, bukuB) => {
        const nilaiBukuA = bukuA.rating;
        const nilaiBukuB = bukuB.rating;
        const isNilaiBanding = nilaiBukuA - nilaiBukuB;
        return isNilaiBanding;
    });

const arraySortPeringkatDesc = listKoleksiBukuSort
    .slice()
    .sort((bukuA, bukuB) => {
        const nilaiBukuA = bukuA.rating;
        const nilaiBukuB = bukuB.rating;
        const isNilaiBanding = nilaiBukuB - nilaiBukuA;
        return isNilaiBanding;
    });

console.log('ARRAY SORT ASC OBJECT ', arraySortAscendingString);
console.log('ARRAY SORT DESC OBJECT ', arraySortDescendingString);
console.log('ARRAY OBJECT SORT NILAI ASC', arraySortPeringkatAsc);
console.log('ARRAY OBJECT SORT NILAI DESC', arraySortPeringkatDesc);

// REDUCE ARRAY
const arrayBilanganReduce = [3, 4, 5, 6, 7];
const totalBilanganReduce = arrayBilanganReduce.reduce(
    (accumuluators, currentvalue) => {
        return accumuluators * currentvalue;
    },
);

const sumBilanganReduce = arrayBilanganReduce.reduce(
    (acc, currentvalue, currentIndex) => {
        console.log('URUTAN REDUCE', currentIndex);
        const total = acc + currentvalue;
        return total;
    },
);

const mapArrayDouble = arrayBilanganReduce.reduce((accArray, currentVal) => {
    const doubles = currentVal * 2;
    accArray.push(doubles);
    return accArray;
}, []);

console.log('REDUCE SAMPEL ARRAY', totalBilanganReduce);
console.log('REDUCE SAMPEL ARRAY TOTAL', sumBilanganReduce);
console.log('REDUCE SAMPEL MAP', mapArrayDouble);

const arrayTempat = ['Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta'];
const arrayTempatReduced = arrayTempat.reduce(
    (accumulator, currentvalue, indexs) => {
        const kataBaru = `${indexs + 1} Kota ${currentvalue}`;
        accumulator.push(kataBaru);
        return accumulator;
    },
    [],
);

console.log('REDUCE ARRAY STRING', arrayTempatReduced);

// REDUCE MENCARI NILAI MAKSIMUM
const peringkatNilai = [89, 96, 58, 77, 62, 93, 81, 99, 73];
const peringkatNilaiMax = [89, 96, 58, 77, 62, 93, 81, 99, 100];

const nilaiMaksimum = peringkatNilai.reduce((accMax, currentVal) => {
    if (currentVal > accMax) {
        return currentVal;
    }
    return accMax;
});

const nilaiMaksimumMathMax = peringkatNilaiMax.reduce((accMax, currentVal) => {
    const nilaiMax = Math.max(accMax, currentVal);
    return nilaiMax;
});

console.log('NILAI MAKSIMUM ', nilaiMaksimum);
console.log('NILAI MAKSIMUM ', nilaiMaksimumMathMax);

const nilaiInitValue = [10, 20, 30, 40, 50];
const nilaiMaksPlus = nilaiInitValue.reduce((accMax, current) => {
    return accMax + current;
}, 100);

console.log('INIT VALUE MAX ARRAY ', nilaiMaksPlus);

const listVoting = [
    'y',
    'y',
    'n',
    'y',
    'n',
    'y',
    'n',
    'y',
    'n',
    'n',
    'n',
    'y',
    'y',
];

const hasilVoting = listVoting.reduce((totalVote, currentVal) => {
    const objectVote = totalVote;
    if (objectVote[currentVal]) {
        const jumlahVal = objectVote[currentVal] + 1;
        objectVote[currentVal] = jumlahVal;
        return totalVote;
    }
    objectVote[currentVal] = 1;

    return objectVote;
}, {});

console.log('HASIL HITUNG VOTE ', hasilVoting);
