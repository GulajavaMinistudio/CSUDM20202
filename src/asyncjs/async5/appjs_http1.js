// HTTPREQUEST DI JAVASCRIPT
// Melakukan http request dengan xml http request, fetch api, dan axios
// https://jsonplaceholder.typicode.com/
// https://swapi.co/

const requestDetailPlanetFilm = urlFilms => {
    const request = new XMLHttpRequest();

    request.addEventListener('load', event => {
        // detail film berhasil diambil
        const { status, responseText } = event.target;
        if (status === 200) {
            const objectJSONDetailFilm = JSON.parse(responseText);
            const detailPlanetElement = document.querySelector(
                '#result_detailplanet',
            );
            detailPlanetElement.innerText = `${objectJSONDetailFilm.title} \n\n ${objectJSONDetailFilm.opening_crawl}`;
        } else {
            console.log('Gagal request detail planet');
        }
    });

    request.addEventListener('error', event => {
        // detail film gagal diambil
        console.log(event.target);
    });

    request.responseType = 'text';

    request.open('GET', urlFilms, true);
    request.send();
};

const requestPlanetSW = () => {
    const xmlreq = new XMLHttpRequest();
    // xmlreq.withCredentials = true;
    xmlreq.responseText = '';

    // LISTENER untuk status sukses dan gagal
    xmlreq.addEventListener('load', event => {
        console.log('Response berhasil');

        const { status } = event.target;
        if (status === 200) {
            const stringResponse = event.target.responseText;
            const responseData = JSON.parse(stringResponse);
            const resultDataList = responseData.results;

            // ambil planet Hoth
            const planetItem = resultDataList[2];

            // ambil daftar film pertama dari planet ini
            const movieUrls = planetItem.films[0];
            requestDetailPlanetFilm(movieUrls);
        } else {
            console.log('Gagal request');
        }
    });

    xmlreq.addEventListener('progress', event => {
        console.log('Progress', event);
    });

    xmlreq.addEventListener('abort', event => {
        console.log('Dibatalkan requestnya', event);
    });

    xmlreq.addEventListener('error', () => {
        console.log('Response gagal');
    });

    // OPEN url untuk setel status dan inisialisasi request
    xmlreq.open('GET', 'https://swapi.co/api/planets', false);

    // SEND untuk jalankan http request;
    xmlreq.send();
};

// Jalankan request xml http request
requestPlanetSW();

// XMLHTTPREQUEST DENGAN CONTOH API YANG LAIN
// https://jsonplaceholder.typicode.com/posts
const xmlRequestJSONPlaceholder = () => {
    const xmlreqget = new XMLHttpRequest();
    xmlreqget.responseType = 'text';

    xmlreqget.addEventListener('load', event => {
        console.log(event);
        const { status, responseText } = event.target;

        if (status === 200) {
            const jsonDataList = JSON.parse(responseText);

            jsonDataList.forEach(value => {
                console.log(value.title);
            });
        } else {
            console.log('Gagal request');
        }
    });

    xmlreqget.addEventListener('error', event => {
        console.log(event);
    });

    // Set url ke xml http request
    xmlreqget.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // Kirim request ke server
    xmlreqget.send();
};
