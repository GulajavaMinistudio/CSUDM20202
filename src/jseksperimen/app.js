/* eslint-disable no-restricted-syntax */
// DATALIST HTML Element dengan data dinamis
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
const gantiDataHewan = listhewan => {
    const listOptions = [];
    for (const hewan of listhewan) {
        const optionEl = document.createElement('option');
        optionEl.value = hewan;
        listOptions.push(optionEl);
    }

    // hapus element options yang lama
    const dataListHewanEl = document.querySelector('#list-nama');
    const childOptionsDelete = dataListHewanEl.querySelectorAll('option');

    childOptionsDelete.forEach(el => {
        dataListHewanEl.removeChild(el);
    });

    // tambah yang baru
    dataListHewanEl.append(...listOptions);
};

// Ganti setelah 5 detik
setTimeout(() => {
    gantiDataHewan(['Katak', 'Kecebong', 'Kijang']);
}, 5000);

// DUPLIKAT ARRAY MENGHAPUSNYA
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Menghapus isi array yang sama atau duplikat
const listBuah = ['pisang', 'apel', 'jeruk', 'lemon', 'apel', 'lemon'];

// Hapus dengan filter dan ambil nilai yang duplikat
const hapusDuplikatFilter = listData => {
    const filteredList = listData.filter((value, index, array) => {
        return array.indexOf(value) === index;
    });

    const duplicateVals = listData.filter((value, index, array) => {
        return array.indexOf(value) !== index;
    });
    return { filtered: filteredList, duplicateval: duplicateVals };
};

console.log(listBuah, hapusDuplikatFilter(listBuah));

// Hapus duplikat di Array dengan Set dan Spread operator
const hapusDuplikatSets = listData => {
    const setObject = new Set(listData);
    return [...setObject];
};

console.log(hapusDuplikatSets(listBuah));

// Hapus duplikat dengan forEach
const hapusDuplikatForEach = listData => {
    const listFiltered = [];

    listData.forEach(value => {
        if (!listFiltered.includes(value)) {
            listFiltered.push(value);
        }
    });
    return listFiltered;
};

console.log(hapusDuplikatForEach(listBuah));

// Hapus duplikat dengan Reduce
const hapusDuplikatReduce = listData => {
    const listFiltered = listData.reduce((acc, currentval) => {
        if (acc.indexOf(currentval) < 0) {
            acc.push(currentval);
        }
        return acc;
    }, []);

    return listFiltered;
};

const hapusDuplikatReduceLagi = listData => {
    const listFiltered = listData.reduce((acc, currentval) => {
        return acc.includes(currentval) ? acc : [...acc, currentval];
    }, []);

    return listFiltered;
};

console.log(hapusDuplikatReduce(listBuah));
console.log(hapusDuplikatReduceLagi(listBuah));

// Array object
const listPengguna = [
    { name: 'Vergie Gutkowski', umur: 21, alamat: '287 Keaton Stravenue' },
    { name: 'Montana Schneider', umur: 23, alamat: '405 Karlee Branch' },
    { name: 'Makenna Rosenbaum', umur: 21, alamat: '1080 Torrance Junction' },
    { name: 'Blaze Ritchie', umur: 25, alamat: '27471 Gilberto Freeway' },
    { name: 'Makenna Rosenbaum', umur: 21, alamat: '1080 Torrance Junction' },
    { name: 'Montana Schneider', umur: 23, alamat: '405 Karlee Branch' },
];

// Dengan menggunakan Map Object
const hapusDuplikatArrObject = (listdata, key) => {
    const mapList = listdata.map(item => [item[key], item]);
    const mappedObject = new Map(mapList);

    return [...mappedObject.values()];
};

const hapusDuplikatObjectFilter = (listData, key) => {
    const filtered = listData.filter((val, index, arr) => {
        const indexValAda = arr.findIndex(valT => {
            return valT[key] === val[key];
        });

        return index === indexValAda;
    });

    return filtered;
};

console.log(hapusDuplikatArrObject(listPengguna, 'name'));
console.log('Filter', hapusDuplikatObjectFilter(listPengguna, 'umur'));

const listPenggunaMulti = [
    { name: 'Vergie Gutkowski', umur: 21, alamat: '287 Keaton Stravenue' },
    { name: 'Montana Schneider', umur: 23, alamat: '405 Karlee Branch' },
    { name: 'Makenna Rosenbaum', umur: 21, alamat: '1080 Torrance Junction' },
    { name: 'Blaze Ritchie', umur: 25, alamat: '27471 Gilberto Freeway' },
    { name: 'Makenna Rosenbaum', umur: 21, alamat: '287 Keaton Stravenue' },
    { name: 'Montana Schneider', umur: 23, alamat: '405 Karlee Branch' },
];

const hapusDuplikatObjectFilterMultiKondisi = (listData, key1, key2) => {
    const filtered = listData.filter((val, index, arr) => {
        const indexValAda = arr.findIndex(valT => {
            return valT[key1] === val[key1] && valT[key2] === val[key2];
        });

        return index === indexValAda;
    });

    return filtered;
};

// Hapus nama dan alamat yang sama
console.log(
    hapusDuplikatObjectFilterMultiKondisi(listPenggunaMulti, 'name', 'alamat'),
);

// Mengecek urutan hari dalam tanggal tertentu, dalam waktu 1 tahun 365/366 hari
// https://www.30secondsofcode.org/js/s/day-of-year/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const posisiHariDalamTahun = date => {
    const selisihDate = date - new Date(date.getFullYear(), 0, 0);
    const milidetik1Hari = 1000 * 60 * 60 * 24;
    const urutanHariTahun = Math.floor(selisihDate / milidetik1Hari);
    return urutanHariTahun;
};

const urutanHariIni = posisiHariDalamTahun(new Date());
console.log(`Hari ini adalah hari ke-${urutanHariIni} dalam 1 tahun`);

// Lakukan pembulatan bilangan sebanyak n desimal di belakang koma
// https://www.30secondsofcode.org/js/s/round
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
const bulatkanNilai = (nilai, desimal = 0) => {
    const nilaiBulat = Math.round(`${nilai}e${desimal}`);
    return Number(`${nilaiBulat}e-${desimal}`);
};

console.log('Pembulatan nilai', bulatkanNilai(3.205, 2));

// setTimeout(() => {
//     console.log('A');
// }, 5000);

// setTimeout(() => {
//     console.log('B');

//     const promise = new Promise(resolve => {
//         let benar = true;
//         while (benar) {
//             benar = false;
//             resolve(true);
//         }
//     });

//     promise.then();
// }, 2000);

// Cara membatalkan proses Http request dengan Fetch API
// Dengan menggunakan  AbortController dan AbortSignal
// https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal

// Inisialisasi
const abortController = new AbortController();
const signalAbort = abortController.signal;

// Beri listener jika ingin pantau statusnya
signalAbort.addEventListener('abort', event => {
    console.log(event);
    console.log(signalAbort.aborted);
});

// Contoh dengan Fetch API
fetch('https://slowmo.glitch.me/5000', { method: 'GET', signal: signalAbort })
    .then(resp => resp.json())
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.warn(err);
    });

// Contoh dengan Fetch API
fetch('https://slowmo.glitch.me/5000', { method: 'GET', signal: signalAbort })
    .then(resp => resp.json())
    .then(result => {
        console.log(result);

        const nilaiNan = NaN;
        const undefinedValue = undefined;
        if (result === undefined) {
            console.log(
                'Nilainya adalah',
                NaN,
                null,
                false,
                true,
                undefined,
                nilaiNan,
                undefinedValue,
            );
        }
    })
    .catch(err => {
        console.warn(err);
    });

// Batalkan request setelah 2 detik
setTimeout(() => {
    abortController.abort();
}, 2000);

// Menambahkan attribute rel noopener dan noreferrer
// ke dalam a tag. Untuk menambahn keamanan pada url cross origin
// https://web.dev/external-anchors-use-rel-noopener/
// https://twitter.com/addyosmani/status/1234055782896979968
const hrefEl = document.createElement('a');
hrefEl.href = 'https://2019.stateofjs.com/';
hrefEl.target = '_blank';
hrefEl.setAttribute('rel', 'noopener noreferrer');
hrefEl.innerText = 'State of JS';

document.querySelector('#urldemo').append(hrefEl);

// Fungsi mengacak data di dalam array
// https://javascript.info/task/shuffle
// https://www.30secondsofcode.org/js/s/shuffle/
const shuffleData = arr => {
    const arrayData = arr;
    let counter = arrayData.length;

    while (counter > 0) {
        const indexAcak = Math.floor(Math.random() * counter);
        counter -= 1;

        const tempData = arrayData[counter];
        arrayData[counter] = arrayData[indexAcak];
        arrayData[indexAcak] = tempData;
    }

    return arrayData;
};

const dataPertama = [1, 2, 3, 4, 5, 6];
console.log('Acak data array', shuffleData(dataPertama));

// Contoh proses async Fetch API
// Dilanjutkan memanggil fungsi lain untuk proses hasil data
let responPlanet;

const fetchReq = fetch('https://swapi.co/api/planets', {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
});

const setDaftarPlanet = resJson => {
    responPlanet = resJson.results;

    // Olah data hasil fetch disini
    // Dijamin tidak undefined karena dijalankan
    // setelah proses async http request selesai
    console.log('Hasil daftar planet:', responPlanet);
};

// Jalankan Fetch API dengan then Promise
fetchReq
    .then(response => {
        if (response.status === 200) {
            return response.json();
        }
        throw new Error(`${response.status}`);
    })
    .then(resultdata => {
        // Set hasil http request ke value responPlanet
        setDaftarPlanet(resultdata);
    })
    .catch(err => console.log(err));

// Jika kita ambil langsung disini, pasti hasilnya NULL
// Karena proses async fetch http request di atas belum selesai,
// Tetapi baris kode dibawah ini sudah dijalankan duluan
console.log('Nilai planet pasti NULL', responPlanet);
// Pelajari Bab Asinkronus di JavaScript
