const siswaNilaiNama = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
];

const panjangData = siswaNilaiNama.length;
for (let i = 0; i < panjangData; i += 1) {
    const objectSiswa = siswaNilaiNama[i];
    console.log('NAMA SISWA ', objectSiswa.name);
    console.log('NILAI SISWA ', objectSiswa.value);
}

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
