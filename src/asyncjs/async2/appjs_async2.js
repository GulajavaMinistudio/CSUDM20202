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

const tombolCallbackDua = document.querySelector('#tombol_callback');
const gerakTombolX = (element, amountX, delayTime, callbacks) => {
    const els = element;
    const batasLayar = document.body.clientWidth;

    setTimeout(() => {
        els.style.transform = `translateX(${amountX}px)`;

        if (callbacks) {
            callbacks();
        }
    }, delayTime);
};

// gunakan fungsi lagi
gerakTombolX(tombolCallbackDua, 100, 1000, () => {
    gerakTombolX(tombolCallbackDua, 200, 1000, () => {
        gerakTombolX(tombolCallbackDua, 300, 1000, () => {
            gerakTombolX(tombolCallbackDua, 400, 1000, () => {
                gerakTombolX(tombolCallbackDua, 500, 1000);
            });
        });
    });
});
