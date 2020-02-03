// FETCH API UNTUK HTTP REQUEST
// DENGAN STAR WARS API
const ulListPlanet = document.querySelector('#listplanet');
const divDetailPlanet = document.querySelector('#detail_planet');
const divFilmPlanet = document.querySelector('#film_planet');

const setDaftarPlanet = resJson => {
    const resultList = resJson.results;

    resultList.forEach(planet => {
        const namaPlanet = planet.name;
        const liElement = document.createElement('li');
        liElement.innerText = namaPlanet;

        ulListPlanet.append(liElement);
    });
};

const setDetailPlanet = resJson => {
    const { results } = resJson;
    const planetDagobahItem = results[3];
    const planetName = planetDagobahItem.name;
    const detailPlanet = `Diameter ${planetDagobahItem.diameter} km. Kondisi tanah ${planetDagobahItem.terrain}.`;

    // set ke tampilan
    const h3Element = divDetailPlanet.querySelector('h3');
    const pElement = divDetailPlanet.querySelector('p');

    h3Element.innerText = planetName;
    pElement.innerText = detailPlanet;
};

const getFilmPlanets = resJson => {
    const { results } = resJson;
    const planetDagobahItem = results[3];
    const { films } = planetDagobahItem;

    const filmKeduaUrl = films[1];

    const fetchReq = fetch(filmKeduaUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return fetchReq;
};

const setFilmPlanetDetail = resjson => {
    const {
        title,
        opening_crawl: openingParagraf,
        director,
        producer,
    } = resjson;

    const h3Element = divFilmPlanet.querySelector('h3');
    const pElement = divFilmPlanet.querySelector('p');

    h3Element.innerText = title;
    pElement.innerText = openingParagraf;

    const pElementDirector = document.createElement('h4');
    pElementDirector.innerText = `Direktur ${director} , Produser ${producer}`;
    pElementDirector.style.fontWeight = 'bold';

    divFilmPlanet.appendChild(pElementDirector);
};

const getDaftarPlanetSW = () => {
    const fetchReq = fetch('https://swapi.co/api/planets', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    fetchReq
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error(`${response.status}`);
        })
        .then(responsejson => {
            setDaftarPlanet(responsejson);
            setDetailPlanet(responsejson);

            return getFilmPlanets(responsejson);
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error(`${response.status}`);
        })
        .then(responsefilm => setFilmPlanetDetail(responsefilm))
        .catch(error => {
            console.log(error);
        });
};

getDaftarPlanetSW();

// FETCH AMBIL DATA SEMUA PLANET
const ulElementAllPlanet = document.querySelector('#daftar_semua_planet');

const setPlanetListSemua = resjson => {
    const { results } = resjson;
    const panjangResult = results.length;

    const listElementPlanet = [];

    for (let i = 0; i < panjangResult; i += 1) {
        const planetItem = results[i];
        const namaPlanet = planetItem.name;

        const elementLiNamaPlanet = document.createElement('li');
        elementLiNamaPlanet.innerText = namaPlanet;
        elementLiNamaPlanet.style.fontWeight = 'bold';
        listElementPlanet.push(elementLiNamaPlanet);
    }

    ulElementAllPlanet.append(...listElementPlanet);

    return Promise.resolve(resjson.next);
};

const getNextPlanets = pageUrl => {
    const fetchReq = fetch(pageUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return fetchReq;
};

const checkStatusParse = response => {
    if (response.status !== 200) {
        throw new Error(`${response.status}`);
    }
    return response.json();
};

const getAllPlanets = () => {
    const fetchReq = fetch('https://swapi.co/api/planets', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    fetchReq
        .then(response => {
            return checkStatusParse(response);
        })
        .then(setPlanetListSemua)
        .then(getNextPlanets)
        .then(checkStatusParse)
        .then(setPlanetListSemua)
        .then(url => getNextPlanets(url))
        .then(checkStatusParse)
        .then(setPlanetListSemua)
        .then(url => getNextPlanets(url))
        .then(checkStatusParse)
        .then(setPlanetListSemua)
        .then(url => getNextPlanets(url))
        .then(checkStatusParse)
        .then(setPlanetListSemua)
        .catch(error => {
            console.log(error);
        });
};

getAllPlanets();
