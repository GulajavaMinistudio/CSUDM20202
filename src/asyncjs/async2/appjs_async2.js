// ASYNC CALLBACK CARA KERJA ASINKRONUS CALLBACK
console.log('Saya jalan pertama kali');

// WEBAPI Proses dilempar ke Web API untuk diproses di background atau di dalam call stack.
// Setelah beres proses, dilemparkan kembali ke JavaScript dalam bentuk fungsi callback
setTimeout(() => {
    console.log('Saya berjalan berikut setelah tiga detik');
});
console.log('Saya berjalan kedua kali');

// LATIHAN CALLBACK HELL
const tombolCallbackHell = document.querySelector('#tombol_gerak');

// CALLBACK Hell dengan contoh setTimeout()
setTimeout(() => {
    tombolCallbackHell.style.transform = 'translateX(100px)';

    setTimeout(() => {
        tombolCallbackHell.style.transform = 'translateX(200px)';

        setTimeout(() => {
            tombolCallbackHell.style.transform = 'translateX(300px)';

            setTimeout(() => {
                tombolCallbackHell.style.transform = 'translateX(400px)';

                setTimeout(() => {
                    tombolCallbackHell.style.transform = 'translateX(500px)';
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Get Bounding Client rect dokumentasinya disini
// https://alligator.io/js/getboundingclientrect/
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
const tombolCallbackDua = document.querySelector('#tombol_callback');

const gerakTombolX = (element, amountX, delayTime, callbacks) => {
    const els = element;

    setTimeout(() => {
        els.style.transform = `translateX(${amountX}px)`;

        if (callbacks) {
            callbacks();
        }
    }, delayTime);
};

const gerakTombolX2 = (element, amountX, delayTime, callbacks) => {
    const els = element;
    const batasLebarLayar = document.body.clientWidth;

    const batasPosisiElementClient = els.getBoundingClientRect();
    const currentRight = batasPosisiElementClient.right;
    const currentLeft = batasPosisiElementClient.left;
    const totalCurrentRight = currentRight + amountX;

    if (totalCurrentRight > batasLebarLayar) {
        console.log('MELEBAR BATAS ', totalCurrentRight);
        console.dir(batasPosisiElementClient);
    } else {
        setTimeout(() => {
            els.style.transform = `translateX(${currentLeft + amountX}px)`;

            if (callbacks) {
                callbacks();
            }
        }, delayTime);
    }
};

// gunakan fungsi lagi
// gerakTombolX(tombolCallbackDua, 100, 1000, () => {
//     gerakTombolX(tombolCallbackDua, 200, 1000, () => {
//         gerakTombolX(tombolCallbackDua, 300, 1000, () => {
//             gerakTombolX(tombolCallbackDua, 400, 1000, () => {
//                 gerakTombolX(tombolCallbackDua, 500, 1000);
//             });
//         });
//     });
// });

// fungsi lain dengan perhitungan posisi batas kanan kiri
gerakTombolX2(tombolCallbackDua, 100, 1000, () => {
    gerakTombolX2(tombolCallbackDua, 120, 1000, () => {
        gerakTombolX2(tombolCallbackDua, 130, 1000, () => {
            gerakTombolX2(tombolCallbackDua, 100, 1000, () => {
                gerakTombolX2(tombolCallbackDua, 100, 1000);
            });
        });
    });
});

// Dengan menggunakan callback
const tombolSukGagal = document.querySelector('#tombolcallbacksukses');

const gerakTombolXCallback = (
    element,
    amountX,
    delayTime,
    successCallback,
    failureCallback,
) => {
    const els = element;

    setTimeout(() => {
        const batasLebarLayar = document.body.clientWidth;

        const batasPosisiElementClient = els.getBoundingClientRect();
        const currentRight = batasPosisiElementClient.right;
        const currentLeft = batasPosisiElementClient.left;
        const totalCurrentRight = currentRight + amountX;

        if (totalCurrentRight > batasLebarLayar) {
            console.log('MELEBAR BATAS CALLBACK ', totalCurrentRight);
            console.dir(batasPosisiElementClient);

            failureCallback();
        } else {
            els.style.transform = `translateX(${currentLeft + amountX}px)`;
            successCallback();
        }
    }, delayTime);
};

// callback hell
gerakTombolXCallback(
    tombolSukGagal,
    200,
    1000,
    () => {
        // callback sukses
        gerakTombolXCallback(
            tombolSukGagal,
            300,
            1000,
            () => {
                gerakTombolXCallback(
                    tombolSukGagal,
                    500,
                    1000,
                    () => {
                        console.log(
                            'Callback hell dimana mana 100 OK tidak recommended',
                        );
                    },
                    () => {
                        console.log('Tidak bisa gerak lagi');
                    },
                );
            },
            () => {
                // callback gagal
                console.log('Tidak bisa bergerak lagi');
            },
        );
    },
    () => {
        // callback gagal
        console.log('Tidak bisa bergerak lagi');
    },
);
