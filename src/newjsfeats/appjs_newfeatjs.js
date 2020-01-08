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

function gantiIsiArray(...arrayKata) {
    const arrayHasil = arrayKata.reduce((accKota, currentval) => {
        const kataManipulasi = `Kota ${currentval}`;
        accKota.push(kataManipulasi);
        return accKota;
    }, []);

    return arrayHasil;
}

console.log(
    'Hasil ganti kata REST PARAMS',
    gantiIsiArray('Bandung', 'Semarang', 'Jakarta'),
);

console.log('Hasil perkalian REST PARAMS ', fungsiPerkalian(4, 5, 6, 7));
console.log('Hasil perkalian REST PARAMS ', fungsiPerkalian(2, 3, 4));

// DESTRUCTURING ARRAY
const arrayKota = [
    'Monroehaven',
    'Jonesview',
    'Collinsburgh',
    'Lake Pearl',
    'Morocco',
];

const [kotaPertama, kotaKedua, ...kotaSisa] = arrayKota;
// MELOMPATI beberapa langkah untuk mengambil nilai di indeks tertentu
const [kotaSkipAwal, , , kotaAkhir] = arrayKota;
const [kotaPemenang, ...kotaTidakMenang] = arrayKota;

console.log('Daftar nama kota', kotaPertama, kotaKedua);
console.log('Daftar nama kota sisa', kotaSisa);
console.log('Daftar nama kota skip', kotaSkipAwal, kotaAkhir);
console.log('Kota pemenang dan sisa', kotaPemenang, kotaTidakMenang);

// DESTRUCTURING OBJECT
const profilKota = {
    namadepan: 'Robin',
    namabelakang: 'Murphy',
    negara_asal: 'Georgia',
    alamatlain: '2030 Greenfelder Mountain',
};

const {
    namadepan,
    namabelakang,
    negara_asal: negaraAsal,
    alamatlain,
} = profilKota;

// MAPPING Object Destructuring dengan nama variabel berbeda
const { alamatlain: alamatLengkap, namadepan: namaPanggilan } = profilKota;
const { namadepan: namaDepanLagi, ...datalain } = profilKota;

console.log(
    'Object Destructuring Awal',
    namadepan,
    namabelakang,
    negaraAsal,
    alamatlain,
);

console.log('Object Destructuring Alias', alamatLengkap, namaPanggilan);
console.log('Object Destructuring Spread Operator', namaDepanLagi, datalain);

// DESTRUCTURING NESTED TIDAK DIREKOMENDASIKAN
const daftarKota = [
    {
        namakota: 'Bedfordshire',
        alamatKota: '080 Elvie Run',
        namalengkap: 'Candelario Harris',
    },
    {
        namakota: 'Berkshire',
        alamatKota: '9729 Antonio Ports',
        namalengkap: 'Roberta Graham',
    },
    {
        namakota: 'Cambridgeshire',
        alamatKota: '25245 Hauck Mission',
        namalengkap: 'Emie Upton',
    },
];

// tidak dianjutkan karena nested object yang banyak
// menjadi semakin susah dipahami dan dibaca
const [{ namakota: namaKotaAwal }, { alamatKota: alamatDua }] = daftarKota;
console.log('NESTED Nama kota awal', namaKotaAwal, alamatDua);

// Cara lain yang lebih mudah dibaca
const [, , kotaKetiga] = daftarKota;
const { namakota: namaKotaTiga, alamatKota: alamatKotaTiga } = kotaKetiga;

console.log('NESTED Kota Ketiga', kotaKetiga);
console.log('NESTED OBJECT DESTRUCTURING', namaKotaTiga, alamatKotaTiga);

// DESTRUCTURING PARAMETER DARI FUNGSI
const namaKotaParams = {
    namakota: 'Bedfordshire',
    alamatkota: '080 Elvie Run',
    namalengkap: 'Candelario Harris',
};

function printKotaParams(kota) {
    const { namakota, alamatkota, namalengkap } = kota;
    console.log(`PARAM DESTRUCTURING ${namakota} ${alamatkota} ${namalengkap}`);
}

function printKotaParamsAlamat({ alamatkota: stringAlamatKota }) {
    console.log(`PARAM DESTRUCTURING Alamat kota ${stringAlamatKota}`);
}

printKotaParams(namaKotaParams);
printKotaParamsAlamat(namaKotaParams);

const responseData = ['85.150.70.22', 'janet.biz', 'https'];

const parseResponseData = response => {
    const [alamatip, domainip, protokol] = response;
    console.log(`Alamat response data ${alamatip} ${domainip} ${protokol}`);
};

const parseResponseDataDestructuring = ([alamatip, domainip, protokol]) => {
    console.log(`Alamat response data ${alamatip} ${domainip} ${protokol}`);
};

parseResponseData(responseData);
parseResponseDataDestructuring(responseData);
