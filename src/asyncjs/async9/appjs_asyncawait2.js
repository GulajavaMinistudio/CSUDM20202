// ASYNCAWAIT PARALEL DAN SERIAL
// Dengan menggunakan Pokemon API
// https://pokeapi.co/api/v2/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// https://stackoverflow.com/questions/35612428/call-async-await-functions-in-parallel
import axios from 'axios';

const axiosInstance = axios.create({ timeout: 5 * 60000 });

const headerRequest = {
    Accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
};

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

// serialProses();

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

// paralelProses();

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

// paralelPromiseAll();

// Serial Request dengan Async Await
const serialRequestPokemon = async () => {
    try {
        const pokemon1 = await axios.get(
            'https://pokeapi.co/api/v2/pokemon/1/',
        );
        const pokemon2 = await axios.get(
            'https://pokeapi.co/api/v2/pokemon/2/',
        );
        const pokemon3 = await axios.get(
            'https://pokeapi.co/api/v2/pokemon/3/',
        );

        console.log(pokemon1, pokemon2, pokemon3);
    } catch (err) {
        console.log(err);
    }
};

// serialRequestPokemon();

// Paralel Request dengan Async Await
const paralelRequestPokemon = async () => {
    const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
    const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/');
    const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/');

    try {
        const pokemon1 = await promise1;
        const pokemon2 = await promise2;
        const pokemon3 = await promise3;

        console.log(pokemon1, pokemon2, pokemon3);
    } catch (err) {
        console.log(err);
    }
};

// paralelRequestPokemon();

// Paralel request dengan Promise All Settled dan Promise All
// Dengan salah satu ada yang error Rejected
const paralelRequestPokemonPromiseAll = async () => {
    const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
    const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/');
    const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/');

    const promiseArray = [promise1, promise2, promise3];

    try {
        const arrayResultPromiseAllSettled = await Promise.allSettled(
            promiseArray,
        );
        console.log('Hasil promise All Settled', arrayResultPromiseAllSettled);
    } catch (err) {
        console.log(err);
    }

    try {
        const arrayResultPromiseAll = await Promise.all(promiseArray);
        console.log('Hasil promise All', arrayResultPromiseAll);
    } catch (err) {
        console.log(err);
    }
};

// paralelRequestPokemonPromiseAll();

// SEQUENTIAL REQUEST
// Menjalankan request secara sequential atau berurutan
// https://techbrij.com/javascript-async-await-parallel-sequence
const getDetailPokemon = async () => {
    const optionRequest = {
        method: 'get',
        url: '',
        headers: headerRequest,
    };

    try {
        optionRequest.url = 'https://pokeapi.co/api/v2/pokemon/1/';
        const detailPokemon1 = await axiosInstance(optionRequest);
        console.log(detailPokemon1.data);

        optionRequest.url = 'https://pokeapi.co/api/v2/pokemon/2/';
        const detailPokemon2 = await axiosInstance(optionRequest);
        console.log(detailPokemon2.data);

        optionRequest.url = 'https://pokeapi.co/api/v2/pokemon/3/';
        const detailPokemon3 = await axiosInstance(optionRequest);
        console.log(detailPokemon3.data);
    } catch (err) {
        console.log(err);
    }
};

// getDetailPokemon();

// PARALEL REQUEST
// https://techbrij.com/javascript-async-await-parallel-sequence
// https://stackoverflow.com/questions/35612428/call-async-await-functions-in-parallel
const getDetailPokemonParalel = async () => {
    const optionRequest = {
        method: 'get',
        url: '',
        headers: headerRequest,
    };

    try {
        // Ditampung ke dalam variabel lagi promisenya untuk dijalankan
        // Secara paralel dengan async await
        optionRequest.url = 'https://pokeapi.co/api/v2/pokemon/1/';
        const promDetailPokemon1 = axiosInstance(optionRequest);

        optionRequest.url = 'https://pokeapi.co/api/v2/pokemon/2/';
        const promDetailPokemon2 = axiosInstance(optionRequest);

        optionRequest.url = 'https://pokeapi.co/api/v2/pokemon/3/';
        const promDetailPokemon3 = axiosInstance(optionRequest);

        const pokemon1 = await promDetailPokemon1;
        const pokemon2 = await promDetailPokemon2;
        const pokemon3 = await promDetailPokemon3;

        console.log('Selesai request paralel');
        console.log(pokemon1.data, pokemon2.data, pokemon3.data);
    } catch (err) {
        console.log(err);
    }
};

// getDetailPokemonParalel();

const getDetailPokemonParalels = async () => {
    const optionRequest = {
        method: 'get',
        url: '',
        headers: headerRequest,
    };

    // Secara paralel dengan async await
    optionRequest.url = 'https://pokeapi.co/api/v2/pokemon/4/';
    const promDetailPokemon1 = axiosInstance(optionRequest);

    optionRequest.url = 'https://pokeapi.co/api/v2/pokemon/5/';
    const promDetailPokemon2 = axiosInstance(optionRequest);

    optionRequest.url = 'https://pokeapi.co/api/v2/pokemon/6/';
    const promDetailPokemon3 = axiosInstance(optionRequest);
    try {
        const resultArrayPromise = await Promise.all([
            promDetailPokemon1,
            promDetailPokemon2,
            promDetailPokemon3,
        ]);

        console.log('Hasil request paralel pokemon', resultArrayPromise);
    } catch (err) {
        console.log(err);
    }

    try {
        const resultArrayPromiseSettled = await Promise.allSettled([
            promDetailPokemon1,
            promDetailPokemon2,
            promDetailPokemon3,
        ]);

        console.log(
            'Hasil request paralel all settled',
            resultArrayPromiseSettled,
        );

        const arrayPokemonSettled = [];
        resultArrayPromiseSettled.forEach(result => {
            if (result.status === 'fulfilled') {
                arrayPokemonSettled.push(result.value.data);
            }
        });

        for (let i = 0; i < arrayPokemonSettled.length; i += 1) {
            const pokemons = arrayPokemonSettled[i];
            console.log(pokemons.name);
        }
    } catch (err) {
        console.log(err);
    }
};

getDetailPokemonParalels();

// ===========================================================
// Contoh lain menggunakan Async Await Paralel
const divElement = document.querySelector('#bodywarna');

function gantiBodyColor(color, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            divElement.style.backgroundColor = color;
            resolve(color);
        }, delay);
    });
}

async function mulaiGantiWarnaSerial() {
    await gantiBodyColor('teal', 1000);
    await gantiBodyColor('red', 2000);
}

async function mulaiGantiWarnaParalel() {
    const prom1 = gantiBodyColor('red', 3000);
    const prom2 = gantiBodyColor('yellow', 2000);
    const prom3 = gantiBodyColor('green', 5000);
    const prom4 = gantiBodyColor('teal', 8000);

    await prom1;
    await prom2;
    await prom3;
    await prom4;
}

// mulaiGantiWarnaSerial();
mulaiGantiWarnaParalel();
