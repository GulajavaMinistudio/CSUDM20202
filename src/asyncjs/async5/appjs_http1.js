// HTTPREQUEST DI JAVASCRIPT
// Melakukan http request dengan xml http request, fetch api, dan axios
// https://jsonplaceholder.typicode.com/
// https://swapi.co/

const xmlreq = new XMLHttpRequest();
// xmlreq.withCredentials = true;
xmlreq.responseText = '';

// LISTENER untuk status sukses dan gagal
xmlreq.addEventListener('load', event => {
    console.log('Response berhasil', event);

    const { status } = event.target;
    if (status === 200) {
        const stringResponse = event.target.responseText;
        const responseData = JSON.parse(stringResponse);
        console.log(responseData);

        const resultDataList = responseData.results;
        resultDataList.forEach(element => {
            console.log(element.name);
        });
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
xmlreq.open('GET', 'https://swapi.co/api/planets', true);

// SEND untuk jalankan http request;
xmlreq.send();

// XMLHTTPREQUEST DENGAN CONTOH API YANG LAIN
// https://jsonplaceholder.typicode.com/posts
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
