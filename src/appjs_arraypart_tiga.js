const stringArrayIkan = [
    'Blue',
    'Humpback',
    'Beluga',
    'Dori',
    'Nemo',
    'Spongebob',
];

const siswaNilai = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
];

const copyArrayString = JSON.parse(JSON.stringify(stringArrayIkan));
const sortArrayIkan = copyArrayString.sort();
console.log('SORT ARRAY IKAN ', sortArrayIkan);

// SORT DESCENDING
const copyArrayStringSort = JSON.parse(JSON.stringify(stringArrayIkan));
const sortArrayIkanAB = copyArrayStringSort.sort((valueA, valueB) => {
    if (valueA.toUpperCase() < valueB.toUpperCase()) {
        return 1;
    }
    if (valueA.toUpperCase() > valueB.toUpperCase()) {
        return -1;
    }
    return 0;
});

console.log(sortArrayIkanAB);

const sortedNilai = siswaNilai.sort((valueA, valueB) => {
    return valueA.value - valueB.value;
});
console.log('SORT NILAI ASCENDING ', sortedNilai);

const siswaNilaiNama = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
];

const sortedNama = siswaNilaiNama.sort((valueA, valueB) => {
    const namaA = valueA.name.toUpperCase();
    const namaB = valueB.name.toUpperCase();
    if (namaA < namaB) {
        return -1;
    }
    if (namaA > namaB) {
        return 1;
    }
    return 0;
});

console.log('SORT NAMA ', sortedNama);

// ARRAY menyimpan datanya di dalam memory. Jika ada variabel lain yang mengambil nilai array
// tersebut, maka variabel tersebut mereferensikan ke referensi memory yang sama.
// jika salah satu array di modifikasi, maka array yang lain akan mengalami perubahan juga
const refArrMemory = [1, 2, 3, 4, 5];
const refArrMemoryLagi = refArrMemory;

refArrMemoryLagi.pop();
refArrMemoryLagi.pop();
console.log(refArrMemoryLagi);
console.log(refArrMemory);

// solusi clone array yang benar
const refArrMemoryFixed = [1, 2, 3, 4, 5];
const refArrMemoryFixedClone = JSON.parse(JSON.stringify(refArrMemoryFixed));

refArrMemoryFixedClone.pop();

console.log('ARRAY MEMORY CLONE ', refArrMemoryFixedClone);
console.log('ARRAY MEMORY ASLI ', refArrMemoryFixed);

const makanans = ['susu', 'kacang'];
makanans.push('cokelat');
makanans.unshift('jagung bakar');
makanans.splice(1, 0, 'roti bakar', 'sarden rebus');
console.log(makanans);

// NESTED ARRAY
const nestedArrays = [
    ['bebek', 'kucing'],
    ['ayam', 'lele', ['kodok', 'semut']],
];

nestedArrays.push(['kacang', 'tongkol']);
console.log('NESTED ARRAY ', nestedArrays);
console.log(nestedArrays[1][2]);
