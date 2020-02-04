// export default class CSSHelper {
//     show(...arrayElement) {
//         [...arrayElement].forEach(e => {
//             e.style.display = '';
//         });
//     }

//     hide(...arrayElement) {
//         [...arrayElement].forEach(e => {
//             e.style.display = 'none';
//         });
//     }

//     toggleClass(el, className) {
//         el.classList.toggle(className);
//     }

//     setStyle(el, ruleName, val) {
//         const element = el;
//         element.style[ruleName] = val;
//     }

//     hasClass(el, className) {
//         el.classList.contains(className);
//     }
// }

// import CSSHelper from './helper/csshelper';

// CSSHelper.toggleClass(document.querySelector('div #dialogmodal'), 'showmodal');

// const elInputReg = document.querySelectorAll('input.registrasiclass');
// const elButtonSubmit = document.querySelector('button.sendclass');
// const elButtonCancel = document.querySelector('button.cancelclass');
// CSSHelper.hide(elInputReg);
// CSSHelper.hide(elButtonSubmit, elButtonCancel);
// CSSHelper.show(elButtonSubmit, elButtonCancel);

// CSSHelper.setStyle(document.querySelector('p'), 'font-size', '20px');

// if (CSSHelper.hasClass(document.querySelector('p.special'), 'special')) {
//     console.log('Aksi jika class ada');
// }
const hitungRataRata = (...nums) => {
    const totalNilai = nums.reduce((totalVal, currentVal) => {
        return totalVal + currentVal;
    }, 0);
    return totalNilai / nums.length;
};

const arrayBilangan = [1, 2, 3];
console.log('Rata-rata 1', hitungRataRata(...arrayBilangan));
console.log('Rata-rata 2', hitungRataRata(1, 2, 3, 2));

const isHariWeekend = (date = new Date()) => {
    return date.getDay() % 6 === 0;
};

const isHariWeekday = (date = new Date()) => {
    return date.getDay() % 6 !== 0;
};

const getTanggalBesok = (dates = new Date()) => {
    dates.setDate(dates.getDate() + 1);
    return dates.toISOString().split('T')[0];
};

const getTanggalKemarin = (dates = new Date()) => {
    dates.setDate(dates.getDate() - 1);
    return dates.toISOString().split('T')[0];
};

console.log('Hari ini adalah hari Weekend? ', isHariWeekend());

console.log(
    'Tanggal 2020-01-11 adalah hari Weekend?',
    isHariWeekend(new Date('2020-01-11')),
);

console.log(
    'Tanggal 2020-01-24 adalah hari kerja? ',
    isHariWeekday(new Date('2020-01-24')),
);

console.log('Minta tanggal besok: ', getTanggalBesok());
console.log('Minta tanggal besok: ', getTanggalBesok(new Date('2020-01-30')));

console.log('Minta tanggal kemarin: ', getTanggalKemarin());

const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g, '');
    return s === [...s].reverse().join('');
};

// CONTOH;
console.log('Apakah "Taco Cat" adalah palindrome ? ', palindrome('taco cat'));

console.log(
    'Apakah "Was it a cat I saw?" adalah palindrome ? ',
    palindrome('Was it a cat I saw'),
);

const kapitalisasiHurufPertamaKata = (
    [charAwal, ...charSisa],
    lowerSisa = false,
) => {
    const charAwalUp = charAwal.toUpperCase();
    const charSisaLower = lowerSisa
        ? charSisa.join('').toLowerCase()
        : charSisa.join('');
    return `${charAwalUp}${charSisaLower}`;
};

const kapitalisasiKarakterDiKalimat = (stringKalimat, lowerSisa = false) => {
    const arrayKata = stringKalimat.split(' ');
    const arrayKataUppercased = arrayKata.map(kata =>
        kapitalisasiHurufPertamaKata(kata, lowerSisa),
    );
    return arrayKataUppercased.join(' ');
};

// CONTOH
console.log(kapitalisasiHurufPertamaKata('fooBar'));
console.log(kapitalisasiHurufPertamaKata('fooBarCat', true));
console.log(
    kapitalisasiKarakterDiKalimat('taco cat playing foobarCatWalk', true),
);

// const listTabelBodyElement = document.querySelectorAll('#tabel tbody td');

// const elementHide = [];
// for (let i = 0; i < listTabelBodyElement.length; i += 1) {
//     if (listTabelBodyElement[i].style.display === 'none') {
//         elementHide.push(listTabelBodyElement[i]);
//     }
// }

// console.log(elementHide);

// Error handling sederhana di Promise dan Async Await
const getDataNilai = params => {
    return new Promise((resolve, reject) => {
        try {
            // proses Input Output lewat http request
            // proses pengolahan data yang banyak
            // ......
            const result = 'dummy result';
            resolve(result);
        } catch (errors) {
            // error
            reject(errors);
        }
    });
};

// Tanpa try catch handler, error yang muncul akan
// otomatis masuk ke reject
const getDataNilaiKedua = params => {
    return new Promise(resolve => {
        // proses Input Output lewat http request
        // proses pengolahan data yang banyak
        // ......
        const result = 'dummy result';
        resolve(result);
    });
};

// Error Handling Promise
getDataNilai('sampel params')
    .then(result => {
        // result sukses dan olah data jika sukses
    })
    .catch(error => {
        // proses gagal, lakukan error handling
    });

getDataNilaiKedua('any params')
    .then(result => {
        // result sukses dari olah data yang berhasil
    })
    .catch(error => {
        // proses gagal, lakukan error handling
    });

// Async Await Try Catch
const getDataAsync = async () => {
    try {
        const result = await getDataNilai('sampel params');
        // olah data result jika berhasil
    } catch (err) {
        // error handling untuk error dari promise
    }
};

// Async Await Tanpa Try Catch
const getDataAsyncNoTryCatch = async () => {
    const result = await getDataNilai('sampel params').catch(err => {
        // handling error dari promise await
    });

    // olah data result jika berhasil
    if (result) {
        // result tidak undefined / null
    }
};

// MENGHAPUS NILAI ARRAY YANG KEMBAR DARI ISI ARRAY
// https://www.30secondsofcode.org/js/s/unique-elements/
const uniqueElements = arr => [...new Set(arr)];
// EXAMPLES
uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

// ANBIL ELEMENT TERAKHIR DI ARRAY
// https://www.30secondsofcode.org/js/s/last/
const last = arr => (arr && arr.length ? arr[arr.length - 1] : undefined);
// EXAMPLES
last([1, 2, 3]); // 3
last([]); // undefined
last(null); // undefined
last(undefined); // undefined

// HAPUS ISI ARRAY YANG MEMILIKI FALSY VALUE
const compact = arr => arr.filter(Boolean);
// EXAMPLES
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]

// Show dan hide element button atau a
// Ketika di klik
const aElement = document.querySelector('a');

// Dan yang pasti tanpa jquery dong
aElement.addEventListener('click', event => {
    event.target.classList.toggle('hidden');
});

// Contoh serial proses dan paralel proses dengan Async Await
const requestContoh = (jeda, urutan) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Proses ke-${urutan} telah selesai dalam ${jeda}ms`);
            resolve(urutan);
        }, jeda);
    });
};

// Jalankan secara serial
const serialProses = async () => {
    const hasil1 = await requestContoh(4000, 1);
    const hasil2 = await requestContoh(6000, 2);
    const hasil3 = await requestContoh(2000, 3);

    // cek hasil
    console.log(hasil1, hasil2, hasil3);
};

// Jalankan secara paralel
const paralelProses = async () => {
    const promiseHasil1 = requestContoh(4000, 1);
    const promiseHasil2 = requestContoh(6000, 2);
    const promiseHasil3 = requestContoh(2000, 3);

    // jalankan ketiganya secara paralel bersama sama
    const hasil1 = await promiseHasil1;
    const hasil2 = await promiseHasil2;
    const hasil3 = await promiseHasil3;

    // Setelah ketiganya beres, lakukan cek hasil
    console.log(hasil1, hasil2, hasil3);
};

// Jalankan paralel dengan Promise All dan Promise All Settled
const paralelPromiseAll = async () => {
    const promiseHasil1 = requestContoh(4000, 1);
    const promiseHasil2 = requestContoh(6000, 2);
    const promiseHasil3 = requestContoh(2000, 3);

    const arrayPromise = [promiseHasil1, promiseHasil2, promiseHasil3];

    // jalankan ketiganya secara paralel bersama sama
    const hasilArrayPromiseAll = await Promise.all(arrayPromise);
    const hasilArrayPromiseAllSettled = await Promise.allSettled(arrayPromise);

    // Setelah ketiganya beres, lakukan cek hasil
    console.log(hasilArrayPromiseAll);
    console.log(hasilArrayPromiseAllSettled);
};
