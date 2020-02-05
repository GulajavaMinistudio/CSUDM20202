// OBJECTPROTOTYPE Mengenal Prototype di JavaScript
// eslint-disable-next-line no-extend-native
// String.prototype.helloKucing = () => {
//     console.log('Hello Kucing');
// };

// Prototype adalah template object dan template fungsi
// Yang bisa dipakai di fungsi yang menurunkan atau inherit
// Object dengan prototipe tersebut

// eslint-disable-next-line no-extend-native
String.prototype.meongKucing = function() {
    console.log(this);
    const besar = this.toUpperCase();
    return `${besar}!!! MEONG KERAS`;
};

// eslint-disable-next-line no-extend-native
String.prototype.hurufKecilSemua = function() {
    return `${this.toLowerCase()}`;
};

const stringTes = 'Kucing Proto';
console.log(stringTes.meongKucing());

console.log('HURUF BESAR SEMUA JADI KECIL'.hurufKecilSemua());
