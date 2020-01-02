// FOROF perulangan dengan FOR OF
const olahraga = ['sepakbola', 'lari', 'basket', 'bulutangkis'];

// for of tidak cocok dengan airbnb style
// eslint-disable-next-line no-restricted-syntax
for (const itemolahraga of olahraga) {
    console.log(itemolahraga);
}

olahraga.forEach(itemOlahraga => {
    console.log('FOR EACH LOOPS', itemOlahraga);
});

const katastring = 'helloworldlooping';
const panjangString = katastring.length;
// eslint-disable-next-line no-restricted-syntax
for (const stringdata of katastring) {
    console.log(stringdata);
}

for (let i = 0; i < panjangString; i += 1) {
    const stringkata = katastring[i];
    console.log('FOR LOOP STRING ', stringkata);
}

const bilanganMagic = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
];

// jumlah bilangan magic dengan for loop
const panjangBilanganMagic = bilanganMagic.length;
for (let i = 0; i < panjangBilanganMagic; i += 1) {
    const arrayMagic = bilanganMagic[i];
    const panjangArrayMagic = arrayMagic.length;
    let totalBilangan = 0;

    for (let j = 0; j < panjangArrayMagic; j += 1) {
        const bilangan = arrayMagic[j];
        totalBilangan += bilangan;
    }

    const kalimatHasil = `${arrayMagic} dijumlahkan menjadi ${totalBilangan}`;
    console.log(kalimatHasil);
}

// jumlah bilangan magic dengan for of
// eslint-disable-next-line no-restricted-syntax
for (const arrayBilangan of bilanganMagic) {
    let totalBilangan = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const bilanganIsi of arrayBilangan) {
        totalBilangan += bilanganIsi;
    }

    const keteranganHasil = `Jumlah ${arrayBilangan} ditotalkan jadi ${totalBilangan}`;
    console.log(keteranganHasil);
}

// TIDAKBISA DENGAN FOR OF TETAPI DENGAN FOR LOOP
const kataPertamaArray = ['kotak', 'susu', 'kamar', 'berry'];
const kataKeduaArray = ['surat', 'kocok', 'mandi', 'hitam'];

const panjangKataPertama = kataPertamaArray.length;

for (let i = 0; i < panjangKataPertama; i += 1) {
    const kataPertama = kataPertamaArray[i];
    const kataKedua = kataKeduaArray[i];
    const kataGabungan = `Gabungan kata ${kataPertama} ${kataKedua};`;
    console.log('HASIL ', kataGabungan);
}
