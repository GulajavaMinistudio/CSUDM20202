/* eslint-disable max-classes-per-file */
// Tips JavaScript dari FlavioCopes https://flaviocopes.com/
// Menghapus karakter pertama dari suatu kata
const kataPertama = 'kucing_orens';
const editKataPertama = kataPertama.slice(1);
console.log(editKataPertama);

// Menghapus karakter terakhir dari suatu kata
const kataTerakhir = 'kucing_orens';
const editKataTerakhir = kataTerakhir.slice(0, -1);
console.log(editKataTerakhir);

// Tips JavaScript dari FlavioCopes https://flaviocopes.com/
// Membagi array menjadi dua bagian sama panjang untuk array yang panjangnya genap
const listGenap = [1, 2, 3, 4, 5, 6, 7, 8];
const lengthGenapTengah = Math.ceil(listGenap.length / 2);

const bagianPertama = listGenap.splice(0, lengthGenapTengah);
const bagianKedua = listGenap.splice(-lengthGenapTengah);

console.log('Hasil pembagian: ', bagianPertama, bagianKedua);

// Membagi array menjadi dua bagian untuk array yang panjangnya ganjil
const listGanjil = [1, 2, 3, 4, 5, 6, 7];
const halfGanjil = Math.ceil(listGanjil.length / 2);

const firstGanjil = listGanjil.splice(0, halfGanjil);
const secondGanjil = listGanjil.splice(-halfGanjil);

console.log('Hasil pembagian: ', firstGanjil, secondGanjil);

// Tips JavaScript dari FlavioCopes https://flaviocopes.com/
// Membagi string kalimat menjadi array
const stringKata = 'Berat sama dipikul ringan sama dijinjing';
const listKata = stringKata.split(' ');
console.log('array kata: ', listKata);

// Konversi array menjadi bentuk string
const arrayKata = ['Dunia', 'tak', 'selebar', 'daun', 'kelor'];
const joinKata = arrayKata.join(' ');
console.log('string gabungan:', joinKata);

// Menghapus spasi yang ada di dalam kalimat dengan RegExp
// https://flaviocopes.com/how-to-replace-whitespace-javascript/
const stringKataSpasi = 'Jauh di mata dekat di hati boros di pulsa';
const stringTanpaSpasi = stringKataSpasi.replace(/\s/g, '');
console.log('kata tanpa spasi: ', stringTanpaSpasi);

// Bonus Tips
// Ganti karakter di dalam string kalimat dengan karakter lain
const kataGantiChar = 'Jauh di mata, dekat di hati, boros di pulsa';
const stringGantiChar = kataGantiChar.replace(/a|u|e|o/gi, 'i');
console.log(stringGantiChar);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// Optional Chaining di TypeScript dan JavaScript ES2020
// Nullish Coalescing di TypeScript dan JavaScript ES2020
const responseDataCuaca = {
    data: {
        temperature: {
            current: 68,
            high: 79,
            low: 45,
        },
        averageWindSpeed: 8,
    },
};

// Dengan cara pengecekan logika if falsy value
let highTemperature = 0;
if (responseDataCuaca.data && responseDataCuaca.data.temperature) {
    highTemperature = responseDataCuaca.data.temperature.high;
}

// Dengan optional chaining ES2020
// const temperaturCuaca = responseDataCuaca?.data?.temperature?.high ?? 0;
// console.log(temperaturCuaca); // Hasilnya 79 jika ada, 0 jika null

// Mengenal penggunaan Fluent Interface Design Pattern
// Dengan ES2015 Class
// https://dev.to/nas5w/using-the-fluent-interface-pattern-to-create-javascript-objects-2p1n
// https://dev.to/shoupn/what-is-a-fluent-api-2m4f
class CatBuilder {
    constructor() {
        this.cats = {};
    }

    withName(name) {
        this.cats.name = name;
        return this;
    }

    withColor(color) {
        this.cats.color = color;
        return this;
    }

    build() {
        return this.cats;
    }
}

class Calculators {
    constructor(startValue) {
        this.startvalue = startValue;
    }

    jumlahKan(valX) {
        this.startvalue += valX;
        return this;
    }

    kalikan(valX) {
        this.startvalue *= valX;
        return this;
    }

    buildResult() {
        return this.startvalue;
    }
}

// Buat object kucing dengan class fluent pattern
const catObject = new CatBuilder()
    .withName('Chataro')
    .withColor('Brown Orange')
    .build();

console.log('Objek kucing:', catObject);
// { name: 'Chataro', color: 'Brown Orange' }

const resultKalkulasi = new Calculators(8)
    .jumlahKan(10)
    .kalikan(2)
    .buildResult();

console.log('Hasil perhitungan: ', resultKalkulasi);
// Hasil perhitungan:  36
