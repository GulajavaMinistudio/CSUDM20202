const siswaNilaiNama = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: 12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
];

const panjangData = siswaNilaiNama.length;
for (let i = 0; i < panjangData; i += 1) {
    const objectSiswa = siswaNilaiNama[i];
    console.log('NAMA SISWA ', objectSiswa.name);
    console.log('NILAI SISWA ', objectSiswa.value);
}

for (let i = 0; i < panjangData; i += 1) {
    const objectSiswa = siswaNilaiNama[i];
    const keteranganSiswa = `${i} ${objectSiswa.name} skor siswa  ${objectSiswa.value}`;
    console.log(keteranganSiswa);
}

let nilaiTotal = 0;
for (let i = 0; i < panjangData; i += 1) {
    const objectData = siswaNilaiNama[i];
    const nilaiSiswa = objectData.value;
    nilaiTotal += nilaiSiswa;
}

const nilaiRata = nilaiTotal / panjangData;
console.log('NILAI RATA-RATA: ', nilaiRata);

// PERULANGAN FOR LOOP
for (let i = 0; i < 10; i += 1) {
    console.log('PERULANGAN KE ', i);
}

for (let i = 1; i <= 10; i += 1) {
    console.log('PERULANGAN 1 SAMPAI 10 : ', i);
}

for (let i = 1; i <= 10; i += 1) {
    const perkalian = i * i;
    console.log(`${i} x ${i} = ${perkalian}`);
}

for (let i = 50; i >= 0; i -= 10) {
    console.log('LOOP MUNDUR ', i);
}

const kataKalimat = 'BanjirDimanaMana';
const panjangKalimat = kataKalimat.length;
let kataDibalik = '';

for (let i = panjangKalimat - 1; i >= 0; i -= 1) {
    const karakter = kataKalimat[i];
    kataDibalik += `${karakter}:`;
}

console.log('KALIMAT DIBALIK: ', kataDibalik);
