// PROMISE CHAINING Menjalankan Promise secara berantai
const requestDatas = urls => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Bilbo' },
                    { id: 5, username: 'Esmerelda' },
                ],
                '/users/1': {
                    id: 1,
                    username: 'Bilbo',
                    upvotes: 360,
                    city: 'Lisbon',
                    topPostId: 454321,
                },
                '/users/5': {
                    id: 5,
                    username: 'Esmerelda',
                    upvotes: 571,
                    city: 'Honolulu',
                },
                '/posts/454321': {
                    id: 454321,
                    title:
                        'Ladies & Gentlemen, may I introduce my pet pig, Hamlet',
                },
                '/about': 'This is the about page!',
            };

            const dataResult = pages[urls];
            if (dataResult) {
                resolve({ status: 200, data: dataResult });
            } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({ status: 404, message: 'Url tidak ada' });
            }
        }, 3000);
    });
};

// Contoh penggunaan Promise Chaining
requestDatas('/users')
    .then(result => {
        const idPengguna = result.data[0].id;
        console.log(result);
        return requestDatas(`/users/${idPengguna}`);
    })
    .then(result => {
        const postIdPengguna = result.data.topPostId;
        console.log(result, postIdPengguna);
        return requestDatas(`/posts/${postIdPengguna}`);
    })
    .then(result => {
        console.log(result);
        const resultDataPost = result.data;
        console.log(resultDataPost, resultDataPost.id, resultDataPost.title);
    })
    .catch(errors => {
        console.log(errors, errors.status, errors.message);
    });

requestDatas('/users')
    .then(result => {
        const userPost = result.data[1].id;
        return requestDatas(`/users/${userPost}`);
    })
    .then(result => {
        const userDetail = result.data;
        console.log(userDetail);
    })
    .catch(errors => {
        console.log(errors, errors.status, errors.message);
    });

// REFACTOR PERGERAKAN TOMBOL LAGI
const tombolGerak = document.querySelector('#tombol_promise');

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

gerakTombolX(tombolGerak, 100, 1000)
    .then(result => {
        console.log(result);
        return gerakTombolX(tombolGerak, 100, 1000);
    })
    .then(() => {
        return gerakTombolX(tombolGerak, 100, 1000);
    })
    .then(() => {
        return gerakTombolX(tombolGerak, 100, 1000);
    })
    .then(() => {
        return gerakTombolX(tombolGerak, 100, 1000);
    })
    .then(() => {
        return gerakTombolX(tombolGerak, 100, 1000);
    })
    .then(() => {
        return gerakTombolX(tombolGerak, 100, 1000);
    })
    .then(() => {
        return gerakTombolX(tombolGerak, 100, 1000);
    })
    .catch(error => {
        console.log(error);
        const { batasLebarLayar, currentRight, amountX } = error;
        console.log(`Body boundary ${batasLebarLayar}px lebarnya`);
        console.log(
            `Element ada di koordinat ${currentRight}, dengan pergeseran ${amountX} terlalu lebar`,
        );
    });
