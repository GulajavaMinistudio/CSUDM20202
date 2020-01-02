// WHILE LOOP
let numLoop = 0;
while (numLoop < 5) {
    console.log('URUTAN WHILE ', numLoop);
    numLoop += 1;
}

// WHILE LOOP DENGAN KONDISI
const bilanganTarget = Math.floor(Math.random() * 10);
let bilanganTebak = Math.floor(Math.random() * 10);

while (bilanganTebak !== bilanganTarget) {
    console.log(
        'Bilangan target ',
        bilanganTarget,
        'Bilangan tebak gagal ',
        bilanganTebak,
    );
    bilanganTebak = Math.floor(Math.random() * 10);
}

const hasilTebak = `Bilangan Target: ${bilanganTarget} , bilangan tebak: ${bilanganTebak}`;
console.log(hasilTebak);

// WHILE LOOP DENGAN BREAK
const nilaiTarget = Math.floor(Math.random() * 10);
let nilaiTebak = Math.floor(Math.random() * 10);
let isJalanTebak = true;
let hasilTebakan = '';

while (isJalanTebak) {
    if (nilaiTarget === nilaiTebak) {
        hasilTebakan = `Sukses, hasil tebakan benar, Target: ${nilaiTarget} , Tebak: ${nilaiTebak}`;
        isJalanTebak = false;
        console.log(hasilTebakan);
        break;
    } else {
        hasilTebakan = `Gagal, hasil tebakan masih salah, Target: ${nilaiTarget}, Tebak: ${nilaiTebak}`;
        console.log(hasilTebakan);
        nilaiTebak = Math.floor(Math.random() * 10);
    }
}
