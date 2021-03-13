const nilaiX = 11;
// if ((nilaiX === 7 || nilaiX === 3) && nilaiX > 10) {
if (nilaiX === 7 || (nilaiX === 11 && nilaiX > 10)) {
    console.log('Lolos perkiraan logika');
} else {
    console.log('Tidak lolos precenden logical');
}

const nomorHari = 6;

switch (nomorHari) {
    case 1:
        console.log('SENIN', nomorHari);
        break;
    case 2:
        console.log('SELASA', nomorHari);
        break;
    case 3:
        console.log('RABU', nomorHari);
        break;
    case 4:
        console.log('KAMIS', nomorHari);
        break;
    case 5:
        console.log('JUMAT', nomorHari);
        break;
    case 6:
        console.log('SABTU', nomorHari);
        break;
    case 7:
        console.log('AHAD', nomorHari);
        break;
    default:
        console.log('Nomor hari tidak terdaftar. ', nomorHari);
        break;
}

const namaBuah = 'durian';

switch (namaBuah) {
    case 'apel':
        console.log('Buah rasanya renyah');
        break;
    case 'durian':
    case 'mangga':
        // nilainya sama dengan nilai durian
        console.log('Buah rasanya legit');
        break;
    case 'jeruk':
        console.log('Buah rasanya manis');
        break;
    default:
        console.log('Buah tidak disukai. ', namaBuah);
        break;
}

// TERNARY OPERATOR
const statusOnline = 'online';
if (statusOnline === 'online') {
    console.log('green');
} else {
    console.log('red');
}

const warnaStatus =
    statusOnline === 'online' && statusOnline.length > 0 ? 'green' : 'red';
console.log(warnaStatus);

const namaIkan = 'lele';
const hadiahIkan =
    namaIkan === 'tongkol' || namaIkan === 'lele'
        ? 'Sepeda Jokowi'
        : 'Becak Onthel';

console.log(hadiahIkan);
