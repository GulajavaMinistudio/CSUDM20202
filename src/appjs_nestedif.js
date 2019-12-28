// validasi sederhana untuk password
const password = '123 467';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('password sudah benar', password);
    } else {
        console.log('password tidak boleh ada spasi');
    }
} else {
    console.log('Password terlalu pendek');
}

// dengan cara yang lebih ringkas
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Kata sandi sudah benar', password);
} else {
    console.log('Password terlalu pendek.', 'Password tidak boleh ada spasi.');
}

// TRUTH AND FALSY VALUE 0, false, "", nan, undefined, null
const isValueTruthFalsy = 'hello apa kabar';

if (isValueTruthFalsy) {
    console.log('Nilai termasuk TRUTHY');
} else {
    console.log('Nilai termasuk FALSY');
}

const bilanganBanding = 11;
if (bilanganBanding >= 1 && bilanganBanding <= 10) {
    console.log('bilangan ada di dalam rentang', bilanganBanding);
} else {
    console.log('bilangan tidak ada di dalam rentang', bilanganBanding);
}

const umurPenonton = 65;
if (umurPenonton < 7 || umurPenonton >= 60) {
    console.log('Anda bisa naik bus gratis', umurPenonton);
} else {
    console.log(
        `Anda harus membayar tiket bus karena umur anda ${umurPenonton}`
    );
}

const warnaPilih = 'biru';

if (
    warnaPilih === 'hijau' ||
    warnaPilih === 'biru' ||
    warnaPilih === 'orange'
) {
    console.log('PILIHAN ANDA BERSELERA TINGGI', warnaPilih);
}
