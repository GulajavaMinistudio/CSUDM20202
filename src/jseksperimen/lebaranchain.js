const capitalFirst = ([first, ...rest], lowerRest = true) => {
    const result =
        first.toUpperCase() +
        (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
    return result;
};

const lebaran = {
    Selamat: 'Taqobalallahu',
    Idul: 'minna',
    Fitri: 'wa minkum',
};

const mudik = ['Mohon', 'maaf', 'lahir', 'dan', 'batin'].join(' ');

const strKeyLebaran = Object.keys(lebaran).reduce((acc, current) => {
    return `${acc} ${current}`;
});

const strIsiLebaran = Object.values(lebaran).reduce((acc, current) => {
    return `${acc} ${current}`;
});

const ketupatOpor = `${strKeyLebaran} 1441 Hijriyah. ${strIsiLebaran}. ${mudik}.`;

console.log(ketupatOpor);
// Selamat Idul Fitri 1441 Hijriyah. Taqobalallahu minna wa minkum. Mohon maaf lahir dan batin.
