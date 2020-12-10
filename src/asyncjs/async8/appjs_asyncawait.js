// ASYNCAWAIT FUNGSI Async Await denga Promise
// Referensi Setelan Babel Parcel JS untuk Async Await
// https://github.com/parcel-bundler/parcel/issues/871

// Pengenalan Async Function
async function greetHello() {
    return 'HELLO WORLD';
}

// ASYNC function mengembalikan Promise resolve
console.log(greetHello());

// Untuk mendapatkan nilai dari async function
greetHello().then((res) => {
    console.log('Promise ASYNC perlu then', res);
});

// Async function adalah fungsi yang menghasilkan Promise resolve, atau Promise reject
const jumlahKan = async (nilaiA, nilaiB) => {
    if (typeof nilaiA !== 'number' || typeof nilaiB !== 'number') {
        throw new Error('Nilai A dan B harus berbentuk bilangan');
    }
    return nilaiA + nilaiB;
};

// Menggunakan then untuk mendapatkan Return function
jumlahKan(5, 4)
    .then((res) => {
        console.log('PROMISE RESOLVED DENGAN NILAI: ', res);
    })
    .catch((err) => {
        console.log('ERROR ASYNC AWAIT', err);
    });

// Menggunakan catch untuk mendapatkan Error handling
jumlahKan(5, '10')
    .then((res) => {
        console.log('PROMISE SUKSES', res);
    })
    .catch((err) => {
        console.log('PROMISE DITOLAK ADA ERROR', err);
    });

// Menjalankan fungsi Promise lain di dalam fungsi Async
// Dengan menggunakan keyword await
// Dan kembalikan hasilnya dalam bentuk return
const getKapalStarWars = async (url) => {
    const resp = await fetch(url);
    const jsondata = await resp.json();
    return jsondata;
};

// Mendapatkan nilai return dari fungsi Async Await
getKapalStarWars('https://swapi.dev/api/starships')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// Mendapatkan nilai error dari fungsi Async Await
getKapalStarWars('https://swapi.dev/api/starships_rusak')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// Menjalankan Async Await tanpa nilai return
// Dan Error handling di dalamnya
const getPlanetStarwars = async (url) => {
    try {
        const resp = await fetch(url);
        const jsondata = await resp.json();
        // olah data jika sukses
        console.log(jsondata);
    } catch (err) {
        console.log(err);
    }
};

// Contoh
getPlanetStarwars('https://swapi.co/api/planets');
getPlanetStarwars('https://swapi.co/api/planets_rusak');

// Gerakan Tombol dengan Async Await
const tombolElGerak = document.querySelector('#tombolgerak');

const gerakTombolX = (element, amountX, delayTime) => {
    const els = element;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const batasLebarLayar = document.body.clientWidth;

            const batasPosisiElementClient = els.getBoundingClientRect();
            const currentRight = batasPosisiElementClient.right;
            const currentLeft = batasPosisiElementClient.left;
            const totalCurrentRight = currentRight + amountX;

            if (totalCurrentRight > batasLebarLayar) {
                console.log('MELEBAR BATAS CALLBACK ', totalCurrentRight);
                console.dir(batasPosisiElementClient);

                // eslint-disable-next-line prefer-promise-reject-errors
                reject({ batasLebarLayar, currentRight, amountX });
            } else {
                els.style.transform = `translateX(${currentLeft + amountX}px)`;
                resolve('Sukses Gerak');
            }
        }, delayTime);
    });
};

// Multiple Async Await
async function gerakKeKanan(element, amount) {
    await gerakTombolX(element, amount, 1000);
    await gerakTombolX(element, amount, 1000);
    await gerakTombolX(element, amount, 1000);
    await gerakTombolX(element, amount, 1000);
    await gerakTombolX(element, amount, 1000);
    await gerakTombolX(element, amount, 1000);
    await gerakTombolX(element, amount, 1000);
    await gerakTombolX(element, amount, 1000);
    await gerakTombolX(element, amount, 1000);
    await gerakTombolX(element, amount, 1000);
}

gerakKeKanan(tombolElGerak, 100).catch((err) => {
    console.log('SELESAI GERAK', err);
    gerakKeKanan(tombolElGerak, -100).catch((error) => console.log(error));
});

function getDataTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((result) => {
            setDataTodo(result);
        })
        .catch((error) => {
            setDataTodo([]);
        });
}

function setDataTodo(result) {
    if (result) {
        // setel data ke html DOM
    }
}

async function getDataTodoAsync() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1',
        );
        const result = await response.json();
        return result;
    } catch (err) {
        return {};
    }
}

async function setDataTodo() {
    const data = await getDataTodoAsync();
    // Set ke html dom element...
}
