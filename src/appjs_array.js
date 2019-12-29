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
