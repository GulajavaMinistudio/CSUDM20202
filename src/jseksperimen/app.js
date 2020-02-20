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
