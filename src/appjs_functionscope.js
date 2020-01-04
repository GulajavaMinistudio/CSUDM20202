// HINDARI PENGGUNAAN VAR KARENA PENGARUH KE BLOCK SCOPE
// const isBenar = true;
// if (isBenar) {
//     var variabelSalah = 'kodok';
// }
// console.log(variabelSalah);

// const hewan = ['beruang', 'ikan', 'panda', 'kadal'];
// var i = 10;
// for (var i = 0; i < hewan.length; i += 1) {
//     console.log(i, hewan[i]);
// }
// console.log(i);

// BLOCKSCOPE Contoh
// const hewan = ['beruang', 'ikan', 'panda', 'kadal'];
// let i = 10;
// const panjanghewan = hewan.length;
// for (i = 0; i < panjanghewan; i += 1) {
//     const jenisHewan = hewan[i];
//     console.log(i, jenisHewan);
// }
// console.log(jenisHewan); // tidak berjalan karena block scope

// LEXICALSCOPE function di dalam function
function outerFunction() {
    let movie = 'Ninja Kura';
    function innerFunction() {
        movie = 'Matahari Terbit';
        console.log(movie.toUpperCase());
        function innerExtraFunction() {
            movie = 'Kacang Panjang';
            console.log(movie.toUpperCase());
        }

        innerExtraFunction();
    }

    innerFunction();
}

outerFunction();

// FUNCTIONEXPRESSION alternatif penulisan fungsi
// function tambahBilangan(nilaiX, nilaiY) {
//     return nilaiX + nilaiY;
// }

// const jumlahBilangan = (nilaiX, nilaiY) => {
//     return nilaiX + nilaiY;
// };

// const jumlahBilangans = function(nilaiX, nilaiY) {
//     return nilaiX + nilaiY;
// };

// const produkBilangan = function multiples(nilaiX, nilaiY) {
//     return nilaiX * nilaiY;
// };

// HIGHER ORDER FUNCTION
function tambah(x, y) {
    return x + y;
}

const kurangi = function(x, y) {
    return x - y;
};

function kalikan(x, y) {
    return x * y;
}

const bagikan = (x, y) => {
    return x / y;
};

const operasiBilangan = [tambah, kurangi, kalikan, bagikan];
console.log('FUNGSI ', operasiBilangan[1](100, 5));

// eslint-disable-next-line no-restricted-syntax
for (const funcs of operasiBilangan) {
    const resultHasil = funcs(3, 5);
    console.log('HASIL ARRAY HITUNG ', resultHasil);
}

const objectFungsi = {
    fungsiBilanganKali: kalikan,
};

console.log('FUNGSI OBJECT', objectFungsi.fungsiBilanganKali);
console.log('FUNGSI OBJECT ', objectFungsi.fungsiBilanganKali(3, 5));

// CALLBACK FUNCTION
function panggilTigaKali(funcs) {
    funcs();
    funcs();
    funcs();
}

function callbackPanggilan() {
    console.log('SAYA DIPANGGIL LAGI');
}

function callbackHello(urutan) {
    console.log('SAYA DIPANGGIL KE- ', urutan);
}

panggilTigaKali(callbackPanggilan);

function ulangFungsiBerkali(action, jumlahKali) {
    // ulang fungsi selama beberapa kali
    for (let i = 0; i < jumlahKali; i += 1) {
        action(i);
    }
}

ulangFungsiBerkali(callbackHello, 5);

const fungsiSatu = () => {
    console.log('PANGGILAN PERTAMA');
};

const fungsiDua = () => {
    console.log('PANGGILAN KEDUA');
};

function pilihSalahSatu(callbackOne, callbackTwo) {
    const randoms = Math.floor(Math.random() * 10);
    console.log(randoms);
    if (randoms <= 5) {
        callbackOne();
    } else {
        callbackTwo();
    }
}

pilihSalahSatu(fungsiSatu, fungsiDua);
