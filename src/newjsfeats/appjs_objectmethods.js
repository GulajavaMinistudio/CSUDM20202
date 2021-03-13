// OBJECT PROPERTIES
// SHORTHAND OBJECT PROPERTIES
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const getStats = arrays => {
    const nilaimax = Math.max(...arrays);
    const nilaimin = Math.min(...arrays);
    const nilaitotal = arrays.reduce((accums, currents) => {
        return accums + currents;
    });
    const nilairata = nilaitotal / arrays.length;

    return { nilaimax, nilaimin, nilaitotal, nilairata };
};

const getStatsNoShorthand = arrays => {
    const nilaimax = Math.max(...arrays);
    const nilaimin = Math.min(...arrays);
    const nilaitotal = arrays.reduce((accums, currents) => {
        return accums + currents;
    });
    const nilairata = nilaitotal / arrays.length;

    const objectReturn = {
        nilaimax: nilaimax,
        nilaimin: nilaimin,
        nilaitotal: nilaitotal,
        nilairata: nilairata,
    };

    return objectReturn;
};

console.log('OBJECT PROPERTIES SHORTHAND ', getStats(reviews));
console.log('OBJECT PROPERTIES NO SHORTHAND', getStatsNoShorthand(reviews));

// OBJECTCOMPUTED PROPERTY
const hakAkses = 'bypassing';
const namaOrang = 'Will Gislason';
const hakAksesDua = 'transmitting';
const namaOrangDua = 'Claudie Murazik';
const hakAksesTiga = 'copying';
const namaOrangTiga = 'Kaycee Heathcote';

const timCom1 = {
    hakAkses: namaOrang,
};
console.log('BUKAN COMPUTED PROPERTY', timCom1);

const timComp2 = {};
timComp2[hakAkses] = namaOrang;
timComp2[hakAksesDua] = namaOrangDua;
console.log('BUKAN COMPUTED PROPERTY ASSIGNMENT', timComp2);

const timComputedProperties = {
    [hakAkses]: namaOrang,
    [hakAksesDua]: namaOrangDua,
    [hakAksesTiga]: namaOrangTiga,
    [`helloworld${1 + 1}`]: 'nama hello world',
};
console.log('COMPUTED PROPERTY ASSIGNMENT HASIL', timComputedProperties);

const sampelObject = {};

// tambah value ke javascript object
// tanpa computed property
function addProps(object, key, values) {
    const objectNew = { ...object };
    objectNew[key] = values;
    return objectNew;
}

// computed property
const addPropsComputedProperty = (object, key, values) => {
    return {
        ...object,
        [key]: values,
    };
};

const addPropsCompPropsOneLiner = (object, key, values) => ({
    ...object,
    [key]: values,
});

console.log(
    'OBJECT NO COMPUTED  PROPERTY FUNGSI',
    addProps(sampelObject, hakAkses, namaOrangDua),
);

console.log(
    'OBJECT COMPUTED PROPERTY FUNGSI',
    addPropsComputedProperty(sampelObject, hakAksesDua, namaOrangTiga),
    addPropsCompPropsOneLiner(sampelObject, hakAksesDua, namaOrangTiga),
);

// OBJECTFUNCTION OBJECT METHODS
// Menambahkan object ke dalam method
const fungsiTambah = function(nilaiX, nilaiY) {
    return nilaiX + nilaiY;
};

const fungsiMatematika = {
    nilaiBilangan: [1, 2, 3, 4, 5],
    fungsiTambah,
    fungsiTambahLangsung: function(nilaiX, nilaiY) {
        return nilaiX + nilaiY;
    },
    perkalianBilangan: function(nilaiX, nilaiY) {
        return nilaiX * nilaiY;
    },
};

console.log(
    'OBJECT FUNCTION',
    fungsiMatematika.perkalianBilangan,
    fungsiMatematika.fungsiTambahLangsung(7, 3),
    fungsiMatematika.fungsiTambah(8, 2),
);

// OBJECT METHOD SHORTHAND
// Pintasan membuat fungsi di dalam object
const authFunc = {
    loginData() {
        console.log('SHORTHAND Login masuk');
    },
    loginFuncs: function() {
        console.log('NO SHORTHAND Login Masuk');
    },
    logoutData: () => {
        console.log('LOGOUT ARROW NO SHORTHAND');
    },
};

authFunc.loginData();
authFunc.loginFuncs();

// THIS KEYWORD DI JAVASCRIPT
function helloThis() {
    console.log('HELLO THIS');
    console.log(this);
    // window.alert('hello this alert');
}

helloThis();

// THISOBJECT THIS DI DALAM OBJECT UNTUK AKSES PARAMS DI OBJECT
// Menjalankan fungsi object dan variabel di dalamnya dengan bantuan this.
const personOrang = {
    firstname: 'Daniela',
    lastname: 'Hagenes',
    nickname: 'Cara Grant',
    fullName() {
        // melihat scope window dari object
        console.log('SCOPE OBJECT', this);
        console.log('SCOPE OBJECT', this.firstname);
        console.log('SCOPE OBJECT', this.lastname);
        const namaLengkap = `Nama lengkap ${this.firstname} ${this.lastname} atau dipanggil dengan ${this.nickname}`;
        console.log('NAMA LENGKAP OBJECT', namaLengkap);
    },
    fullNameLagi() {
        const { firstname, lastname, nickname } = this;
        const namaLengkap = `Nama lengkap ${firstname} ${lastname} atau dipanggil dengan ${nickname}`;
        console.log('NAMA LENGKAP OBJECT 2', namaLengkap);
    },
    fullNameCall() {
        const { firstname, lastname, nickname } = this;
        const namaLengkap = `Nama lengkap ${firstname} ${lastname} atau dipanggil dengan ${nickname}`;
        return namaLengkap;
    },
    printBiodata() {
        const namaLengkapData = this.fullNameCall();
        console.log(`${namaLengkapData} adalah manusia`);
    },
    arrowFuncNoThis: () => {
        console.log(this);
        // arrow function contextnya ada di global scope
        // arrow function tidak punya this object scope
        console.log(
            'ARROW TANPA THIS',
            `${this.firstname} bilang ARROW FUNCTIONS`,
        );
    },
};

personOrang.fullName();
personOrang.fullNameLagi();
personOrang.nickname = 'Henri Russel';
personOrang.fullNameLagi();
personOrang.printBiodata();

// arrow function tanpa this object context
personOrang.arrowFuncNoThis();

// tidak bisa dengan cara seperti ini , karena object scope
// akan menjadi global scope
// pemanggilan fungsi menjadi global
// const personCall = personOrang.printBiodata();
// personCall();

// THISOBJECT CONTOH IMPLEMENTASI
const daftarKalimatPanggil = {
    timerIdx: '',
    katakata: [
        'Incredible Frozen Computer',
        'Generic Rubber Car',
        'Small Wooden Table',
        'Rustic Metal Salad',
        'Small Metal Gloves',
        'Small Steel Car',
    ],
    getKalimatAcak() {
        const { katakata } = this;
        const indexAcak = Math.floor(Math.random() * katakata.length);
        return { kata: katakata[indexAcak], index: indexAcak };
    },
    startAcak() {
        // set interval mengambil global context
        // const thats = this;
        // setInterval(function() {
        // console.log(thats);
        // }, 3000);

        // set interval ini tidak mengambil global context
        // karena arrow function mengambil eksekusi context terdekat yaitu di dalam context object
        this.timerIdx = setInterval(() => {
            const kataObject = this.getKalimatAcak();
            const stringKata = kataObject.kata;
            console.log('Kata Acak Acak', stringKata);
            if (kataObject.index === 5) {
                this.stopAcak();
            }
        }, 3000);
    },
    stopAcak() {
        clearInterval(this.timerIdx);
        console.log('INTERVAL BERHENTI');
    },
};

// jalankan kata acak
daftarKalimatPanggil.startAcak();
