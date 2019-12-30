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

const nilaiPeringkat = 9;
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

let highScore = 1800;
const userScore = 1900;

if (userScore >= highScore) {
    console.log(
        `Selamat, skor anda telah melampaui skor tertinggi. Skor tertinggi yang baru adalah ${userScore} .`,
    );
    highScore = userScore;
} else {
    console.log(
        `Maaf, skor anda ${userScore} masih belum dapat melampaui skor tertinggi, yaitu ${highScore}. Silahkan coba lagi.`,
    );
}
