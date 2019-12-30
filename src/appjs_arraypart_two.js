// REVERSE DAN JOIN
const hurufAbjad = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(JSON.stringify(hurufAbjad));
hurufAbjad.reverse(hurufAbjad);
console.log('ARRAY REVERSE HASILNYA ', hurufAbjad);

const hurufAbjadJoin = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const stringJoin = hurufAbjadJoin.join();
console.log('JOIN ARRAY ', stringJoin);
console.log('JOIN ARRAY SEPARATOR ', hurufAbjadJoin.join('/'));
console.log('JOIN ARRAY SEPARATOR ', hurufAbjadJoin.join('='));

const arrayCampuran = [12.6, false, 'kotak', 10];
const arrayCampuranObjek = [
    {
        kotak: 'Kucing',
        lagu: 'Karaoke',
    },
    {
        kotak: 'Meong',
        lagu: 'Dangdut',
    },
];

// klo object tidak jalan
console.log(arrayCampuranObjek.join());
console.log(arrayCampuran.join());

// SLICE ARRAY
const hewan = ['hiu', 'salmon', 'paus', 'beruang', 'kadal', 'kura-kura'];
const hewanAir = hewan.slice(0, 3);
const mamalias = hewan.slice(2, 4);
const reptils = hewan.slice(4, 6);
const reptilsAlternative = hewan.slice(4);

console.log('FULL COPY SLICE ', hewan.slice());
console.log('SLICE IKAN ', hewanAir);
console.log('SLICE MAMALIA ', mamalias);
console.log('SLICE REPTIL ', reptils);
console.log('SLICE REPTIL CARA LAIN  ', reptilsAlternative);

// SLICE dengan bilangan negatif, dimulai dari belakang, dan yang diambil adalah jumlahnya, misalnya :
// slice(-3) ambil 3 elemen terakhir hasilnya ["beruang", "kadal", "kura-kura"]
console.log('SLICE NEGATIF ', hewan.slice(-3));
// ambil tiga elemen terakhir, dan hilangkan satu elemen dari belakang
console.log('SLICE NEGATIF ', hewan.slice(-3, -1));

// SPLICE untuk menghapus, mengganti element yang ada di dalam array
const hewanSplice = ['hiu', 'salmon', 'paus', 'beruang', 'kadal', 'kura-kura'];
hewanSplice.splice(1, 0, 'ubur-ubur');
console.log(hewanSplice);

const hewanSpliceHapus = [
    'hiu',
    'Ubur-ubur',
    'salmon',
    'paus',
    'beruang',
    'kadal',
    'kura-kura',
];

const itemHewanDihapus = hewanSpliceHapus.splice(3, 4);
console.log('SLICE HAPUS ', hewanSpliceHapus);
console.log('SLICE ITEM YANG HAPUS ', itemHewanDihapus);

const hewanSpliceInsert = [
    'hiu',
    'Ubur-ubur',
    'salmon',
    'paus',
    'beruang',
    'kadal',
    'kura-kura',
];

hewanSpliceInsert.splice(4, 0, 'kucing hutan', 'kambing');
console.log('SPLICE INSERT BANYAK DATA ', hewanSpliceInsert);

// REPLACE SPLICE
const hewanSpliceReplace = [
    'hiu',
    'Ubur-ubur',
    'salmon',
    'paus',
    'beruang',
    'kadal',
    'kura-kura',
];

// ganti paus beruang dengan lumba lumba panda
const deletedHewanReplace = hewanSpliceReplace.splice(
    3,
    2,
    'lumba-lumba',
    'panda',
);
console.log('SPLICE REPLACE ', hewanSpliceReplace);
console.log('SPLICE REPLACED ', deletedHewanReplace);
