// HOISTING VAR
// console.log(animal);
// var animal = 'kucing';

// CONST dan LET tanpa HOISTING
const hewan = 'udang';
console.log(hewan);

// fungsi dipanggil duluan tanpa deklarasi tidak bisa
// panggilKata();
function panggilKata() {
    console.log('panggil kata...');
}

panggilKata();
