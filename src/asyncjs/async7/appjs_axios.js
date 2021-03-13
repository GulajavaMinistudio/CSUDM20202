// AXIOS HTTP REQUEST lIBRARY untuk mengambil data dari api
import axios from 'axios';

const axiosInstance = axios.create({ timeout: 5 * 60000 });

const ulElementListKapal = document.querySelector('#list_kapalperang');
const divElementFilmKapal = document.querySelector('#film_kapal');

const headerRequest = {
    Accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
};

const setDaftarKapalSW = jsondata => {
    const { results } = jsondata;

    const listKapalElement = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const kapalItem of results) {
        const { name, model, manufacturer } = kapalItem;
        const liElement = document.createElement('li');
        liElement.innerText = `Kapal ${name}, Tipe ${model}, Pembuat ${manufacturer}.`;
        listKapalElement.push(liElement);
    }

    ulElementListKapal.append(...listKapalElement);

    return Promise.resolve(jsondata.next);
};

const getNextKapal = urlReq => {
    const optionRequest = {
        method: 'get',
        url: urlReq,
        headers: headerRequest,
    };

    const httpreqs = axiosInstance(optionRequest);
    return httpreqs;
};

const getDaftarKapalPerangSW = urlReq => {
    getNextKapal(urlReq)
        .then(resp => {
            return setDaftarKapalSW(resp.data);
        })
        .then(url => {
            return getNextKapal(url);
        })
        .then(resp => {
            return setDaftarKapalSW(resp.data);
        })
        .then(url => {
            return getNextKapal(url);
        })
        .then(({ data }) => {
            return setDaftarKapalSW(data);
        })
        .catch(err => {
            console.log(err);
        });
};

getDaftarKapalPerangSW('https://swapi.co/api/starships');

// Ambil Detail kapal dan filmnya
const getDetailKapal = datajson => {
    const listKapal = datajson.results;

    const kapalExecutor = listKapal[0];

    const h3ElementJudul = divElementFilmKapal.querySelector('h3');
    h3ElementJudul.innerText = `${kapalExecutor.name} -  ${kapalExecutor.model}`;

    const filmPertama = kapalExecutor.films[1];
    return filmPertama;
};

const getFilmKapal = datajson => {
    const { title, opening_crawl: openingCrawl, director, producer } = datajson;

    const detailFilmH3 = document.querySelector('#detail_film h3');
    const detailFilmP = document.querySelector('#detail_film p');
    const detailFilmDirectProducer = document.querySelector('#directproducer');

    detailFilmH3.innerText = `Seri ${title}`;

    detailFilmP.textContent = `${openingCrawl}`;
    detailFilmP.classList.add('text-kapal-film');

    detailFilmDirectProducer.innerText = `Direktur: ${director} , Produser: ${producer}`;
    // detailFilmDirectProducer.style.fontWeight = 'bold';

    detailFilmDirectProducer.addEventListener('click', event => {
        event.target.classList.toggle('text-kapal-film');
        console.log(event.target);
    });
};

const getDetailFilmKapal = urls => {
    const optionRequest = {
        method: 'get',
        url: urls,
        headers: headerRequest,
    };

    const reqlistKapal = axiosInstance(optionRequest);

    reqlistKapal
        .then(({ data }) => {
            const urlFilm = getDetailKapal(data);
            return axiosInstance({ url: urlFilm });
        })
        .then(resp => {
            console.log(resp);
            getFilmKapal(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
};

getDetailFilmKapal('https://swapi.co/api/starships');

const aElement = document.querySelector('a');
aElement.addEventListener('click', event => {
    event.preventDefault();
    console.log('click');
    event.target.classList.toggle('hidden');
});
