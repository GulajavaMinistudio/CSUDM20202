// MODIFIKASI ARRAY
const belanjaan = ['Tempe', 'Tahu'];
belanjaan[1] = 'Bakso';
belanjaan[2] = 'Sayur kacang';
belanjaan[belanjaan.length] = 'Kentang';
belanjaan[belanjaan.length] = 'Wortel';

console.log(belanjaan);

belanjaan[0] = 'Mendoan';
console.log(belanjaan);

// PUSH ARRAY dengan nilai balikan jumlah array
const arrayMerk = ['Honda', 'Toyota', 'Koceng', 'Suzuki'];
console.log('array merk mobil ', arrayMerk);
arrayMerk.push('Esemka');
arrayMerk.push('Truk', 'Tronton');
console.log('array merk mobil ', arrayMerk);

// POP ARRAY dengan nilai array yang di pop kan
const arrayMerkPops = ['Honda', 'Toyota', 'Koceng', 'Suzuki'];
console.log(JSON.stringify(arrayMerkPops));
const popValue = arrayMerkPops.pop();
console.log('Isi array pop ', arrayMerkPops);
console.log('Nilai yang di pop ', popValue);

// UNSHIFT di bagian awal array
const piringArray = ['Piring besar'];
console.log(JSON.stringify(piringArray));
const jumlahUnshiftArray = piringArray.unshift('Garpu', 'Sendok');
console.log('Jumlah array unshift ', jumlahUnshiftArray);
console.log('Array unshift ', piringArray);
piringArray.unshift('Mangkok besar', 'Gelas');

// SHIFT di bagian awal array untuk menghapus
const perkakasArray = JSON.parse(JSON.stringify(piringArray));
console.log('SEBELUM SHIFT', JSON.stringify(perkakasArray));
let nilaiShift = perkakasArray.shift();
console.log(nilaiShift);
nilaiShift = perkakasArray.shift();
console.log(nilaiShift);
nilaiShift = perkakasArray.shift();
console.log(nilaiShift);

// CONCAT ARRAY
const buahSatu = ['Apel', 'Pisang'];
const buahDua = ['Jeruk', 'Nanas'];
const sayuran = ['Tomat', 'Kentang', 'Kol'];
const daging = ['Ayam', 'Sapi'];
const buahGabung = buahSatu.concat(buahDua);
console.log(buahGabung);
// GABUNG langsung dengan banyak array sekaligus
const belanjaGabung = buahSatu.concat(buahDua, sayuran, daging);
console.log('GABUNGAN ARRAY CONCAT ', belanjaGabung);

// INDEXOF DAN INCLUDES
const arrayMakanan = [
    'air',
    'jagung',
    'tepung',
    'keju',
    'gula',
    'udang',
    'mentega',
];

// nilai ketemu true atau false
if (arrayMakanan.includes('tepung')) {
    const indexs = arrayMakanan.indexOf('tepung', 0);
    console.log('BAHAN MAKANAN DITEMUKAN. ', arrayMakanan[indexs]);
}

if (arrayMakanan.indexOf('gula') !== -1) {
    console.log('nama makanan gula ditemukan');
} else {
    console.log('nama makanan kacang tidak ditemukan');
}

// SOME dengan Array some dan array find untuk mencari data
if (arrayMakanan.some(value => value === 'udang')) {
    const namaMakanan = arrayMakanan.find(value => value === 'udang');
    console.log('nama bahan makanan ditemukan. ', namaMakanan);
}
