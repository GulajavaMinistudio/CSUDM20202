// console.log('hello world');
// console.log('hello', 70, 'true', true);
// console.error('Waduh kok error');
const rating = 5;

if (rating >= 6) {
    console.log('Ini benar dan nilai normal');
} else {
    console.log('Nilai tidak memuaskan', rating, 'harap coba lagi');
}

const bilanganCek = 49;
if (bilanganCek % 2 === 0) {
    console.log('BILANGAN GENAP', bilanganCek);
} else {
    console.log('BILANGAN GANJIL', bilanganCek);
}

const nilaiPeringkat = 10;
if (nilaiPeringkat < 6) {
    console.log('Hasil tidak memuaskan', nilaiPeringkat);
} else if (nilaiPeringkat >= 6 && nilaiPeringkat < 8) {
    console.log('Hasil nilai cukup', nilaiPeringkat);
} else if (nilaiPeringkat >= 8 && nilaiPeringkat <= 9) {
    console.log('Hasil sangat memuaskan', nilaiPeringkat);
} else if (nilaiPeringkat === 10) {
    console.log('Hasil nilai luar biasa', nilaiPeringkat);
} else {
    console.log('Nilai tidak terdaftar');
}
