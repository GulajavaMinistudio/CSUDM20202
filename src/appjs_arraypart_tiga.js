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
