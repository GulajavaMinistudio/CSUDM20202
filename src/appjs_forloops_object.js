// FOROF OBJECT DENGAN OBJECT VALUES
const reviewFilm = {
    Deadpools: 10,
    Avatars: 9.6,
    Avengers: 9.8,
    Disneys: 8.8,
};

console.log('KEY OBJECT ', Object.keys(reviewFilm));
const keyObjectArrray = Object.keys(reviewFilm);
const panjangKeyObject = keyObjectArrray.length;

for (let i = 0; i < panjangKeyObject; i += 1) {
    const keyObject = keyObjectArrray[i];
    const valueReview = reviewFilm[keyObject];
    const keteranganReview = `Saya memberi rating film ${keyObject} dengan rating ${valueReview}/10`;
    console.log(keteranganReview);
}

// OBJECT VALUES DAN HITUNG RATA - RATA
const valueRatings = Object.values(reviewFilm);
let totalRating = 0;
// eslint-disable-next-line no-restricted-syntax
for (const rating of valueRatings) {
    totalRating += rating;
}

const avgRating = totalRating / valueRatings.length;
console.log('RATA-RATA RATING ', avgRating);

// FORIN UNTUK OBJECT ITERATOR
const hargaTanamanObject = {
    pohonPepaya: 20000,
    pohonRambutan: 15000,
    pohonJambuAir: 23000,
    pohonCincau: 12000,
};

// eslint-disable-next-line no-restricted-syntax
for (const key in hargaTanamanObject) {
    if (Object.prototype.hasOwnProperty.call(hargaTanamanObject, key)) {
        console.log('KEY OBJECT ', key);
        const valueObjectData = hargaTanamanObject[key];
        console.log('VALUE OBJECT ', valueObjectData);
    }
}

let totalHarga = 0;
// eslint-disable-next-line no-restricted-syntax
for (const key in hargaTanamanObject) {
    if (Object.prototype.hasOwnProperty.call(hargaTanamanObject, key)) {
        const valueData = hargaTanamanObject[key];
        totalHarga += valueData;
    }
}
console.log('TOTAL HARGA ', `Rp ${totalHarga}`);

// DENGAN CARA YANG DIPERBOLEHKAN ESLINT
const hargaTanamanData = {
    pohonPepaya: 20000,
    pohonRambutan: 15000,
    pohonJambuAir: 23000,
    pohonCincau: 12000,
};

const arrayKeyTanaman = Object.keys(hargaTanamanData);
const panjangKeyTanaman = arrayKeyTanaman.length;

let totalHargaTanaman = 0;
for (let i = 0; i < panjangKeyTanaman; i += 1) {
    const keyTanaman = arrayKeyTanaman[i];
    const valueKeyTanaman = hargaTanamanData[keyTanaman];
    console.log('VALUE OBJECT TANAMAN ', keyTanaman);
    console.log('VALUE OBJECT TANAMAN ', valueKeyTanaman);
    totalHargaTanaman += Number(valueKeyTanaman);
}

console.log(`TOTAL HARGA TANAMAN ADALAH RP ${totalHargaTanaman}`);
