// DEFAULTPARAMETERS DEFAULT PARAMETER DARI FUNGSI
function kalikanBilangan(nilaiX = 1, nilaiY = 1) {
    return nilaiX * nilaiY;
}
console.log('Default value hasil perkalian ', kalikanBilangan(5, 6));

const ucapanSelamat = (orang = 'katak', ucapan = 'hallo') => {
    console.log(`Ucapan kata: ${ucapan} ${orang}`);
};
ucapanSelamat('World');

// SPREAD OPERATOR
// SPREADFUNCTION CALL
const numsSpread = [9, 3, 2, 8];
const maxSpread = Math.max(...numsSpread);
console.log('SPREAD FUNCTION ', maxSpread);

const arrayGabungSpread = [...numsSpread, 11, 12, 13];
console.log('Array Gabung SPREAD ', arrayGabungSpread);

const kataSpread = ['Hallo', 'Kata', 'Spread', 'Spr2'];
const kirimArgumenSpread = (nilaiA, nilaiB, nilaiC) => {
    console.log(`Nilai ${nilaiA} ${nilaiB} ${nilaiC}`);
};
kirimArgumenSpread(...kataSpread);

// SPREAD ARRAY LITERAL
const kucing = ['kucing', 'harimau', 'kucing hutan'];
const ikan = ['tongkol', 'katak', 'hiu'];
const shallowIkanCopy = [...ikan];
shallowIkanCopy.push('kecebong');

const stringSpreads = ['kecebong', ...'katak', 'cumi'];

console.log('Hasil gabung array', [...kucing, ...ikan]);
console.log('Hasil shallow copy', shallowIkanCopy, ikan);
console.log('Hasil string spread ', stringSpreads);

// SPREADOBJECT  OBJECT LITERAL
const feline = {
    kaki: 4,
    keluarga: 'Felidae',
};

const canine = {
    taring: 'Caninae',
    furry: true,
};

const kucingLiar = {
    ...canine,
    isPet: true,
    jinak: true,
};

const kucingRumah = {
    ...feline,
    isGrumpy: true,
    personality: 'tidak dapat diduga',
};

const kucingRumahClone = { ...kucingRumah };

const stringRandomKucing = 'KucingAcak';
const randomKucing = [
    ...stringRandomKucing,
    { ...kucingRumah },
    { ...kucingLiar },
];

console.log('SPREAD OBJECT LITERAL ', kucingLiar);
console.log('SPREAD OBJECT LITERAL ', kucingRumah);
console.log('SPREAD OBJECT LITERAL CLONE ', kucingRumahClone);
console.log('SPREAD OBJECT LITERAL CAMPUR ARRAY LITERAL ', randomKucing);

// REST OPERATOR UNTUK ARRAY

// ARGUMENTS tidak jalan di arrow function
const argumenFuncsContoh = () => {
    // eslint-disable-next-line no-undef
    console.log('Contoh arguments di dalam fungsi arrow', arguments);
};

// cara yang salah dan perlu dihindari karena akan error
// gunakan referensi data langsung di dalam function
function argumenFuncsContohDua() {
    // eslint-disable-next-line prefer-rest-params
    console.log('Contoh arguments di dalam fungsi biasa', arguments);
    // eslint-disable-next-line prefer-rest-params
    const nilaiArgumen = [...arguments];
    console.log(nilaiArgumen);
}

argumenFuncsContoh('hello world');
argumenFuncsContohDua('hello', 'kodok');

// RESTPARAMETERS REST PARAMS
function jumlahBilangan(...nums) {
    console.log(nums);
    const totalBilangan = nums.reduce((accum, currentval) => {
        const total = accum + currentval;
        return total;
    });

    console.log('TOTAL REST PARAM ', totalBilangan);
}

jumlahBilangan(5, 10, 12);
jumlahBilangan(4, 5, 6, 7);

// REST parameter harus ditaruh di bagian terakhir parameter
function namaLengkap(first, last, ...gelars) {
    console.log('Nama depan', first);
    console.log('Nama belakang', last);
    console.log('Daftar gelar', gelars);
}

namaLengkap('Kucing', 'berenang', 'Ir', 'ST', 'MT', 'MA');

const fungsiPerkalian = (...bilangans) => {
    const hasilKali = bilangans.reduce((accum, currents) => {
        return accum * currents;
    });
    return hasilKali;
};

console.log('Hasil perkalian REST PARAMS ', fungsiPerkalian(4, 5, 6, 7));
console.log('Hasil perkalian REST PARAMS ', fungsiPerkalian(2, 3, 4));
