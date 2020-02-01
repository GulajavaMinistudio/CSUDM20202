// PROMISE JAVASCRIPT Menggunakan Promise untuk mencegah callback hell
const promiseGetMakan = new Promise((resolve, reject) => {
    const random = Math.random() * 5;
    const bilanganRandom = Math.floor(random);

    console.log(random);
    if (bilanganRandom < 3) {
        resolve(bilanganRandom);
    } else {
        reject(bilanganRandom);
    }
});

promiseGetMakan
    .then(result => {
        console.log('Hasil promise ', result);
    })
    .catch(error => {
        console.log('Hasil promise reject', error);
    });

const promiseTertunda5detik = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randoms = Math.floor(Math.random() * 5);
        if (randoms < 2) {
            resolve(`Hasil berhasil ${randoms}`);
        } else {
            reject(new Error(`Hasil gagal ${randoms}`));
        }
    }, 5000);
});

promiseTertunda5detik
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

const getPromiseDataTunda = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randoms = Math.floor(Math.random() * 5);
            if (randoms < 2) {
                resolve(`Hasil berhasil 1 ${randoms}`);
            } else {
                reject(new Error(`Hasil gagal 1 ${randoms}`));
            }
        }, 5000);
    });
};

getPromiseDataTunda()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

const requestPalsu = urls => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const halaman = {
                '/users': [
                    { id: 1, username: 'Kacang' },
                    { id: 2, username: 'Tempe' },
                ],
                '/about': 'Halaman tentang about page',
            };

            const dataresp = halaman[urls];
            if (dataresp) {
                resolve(dataresp);
            } else {
                // reject(new Error(JSON.stringify({ error: 404 })));
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({ status: 404 });
            }
        }, 3000);
    });
};

requestPalsu('/users')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

requestPalsu('/about')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

requestPalsu('/login')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error.status);
    });
