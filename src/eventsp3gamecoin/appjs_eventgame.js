// GAMEDEMO DENGAN EVENT HANDLER
const playerImage = document.querySelector('#player');
const koinImage = document.querySelector('#coin');
const h1ElementSkor = document.querySelector('#skorh1');

let totalPoin = 0;

const isTouchingCoin = (a, b) => {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
};

const skorKoinTambah = () => {
    // tambah skor koin jika berhasil menyentuh
    totalPoin += 1;
    h1ElementSkor.innerText = `Skor Koin : ${totalPoin}`;
};

const ekstrakPosisiPlayer = stringPosisi => {
    let numSlicedPosisi = 100;
    if (stringPosisi) {
        const slicedPosisiString = stringPosisi.slice(0, -2);
        numSlicedPosisi = parseInt(slicedPosisiString, 0);
    }
    return numSlicedPosisi;
};

const pindahKoin = () => {
    // pindahkan koin
    const lebarLayar = window.innerWidth;
    const tinggiLayar = window.innerHeight;

    const posisiAcakX = Math.floor(Math.random() * lebarLayar);
    const posisiAcakY = Math.floor(Math.random() * tinggiLayar);
    koinImage.style.top = `${posisiAcakY}px`;
    koinImage.style.left = `${posisiAcakX}px`;
};

const pindahVertikal = (element, jumlahGerakan) => {
    const elementPlayer = element;
    const { innerHeight } = window;

    const posisiAtasGambar = elementPlayer.style.top;
    const posisiPlayerNumber = ekstrakPosisiPlayer(posisiAtasGambar);
    const posisiPlayerBaruNumber = posisiPlayerNumber + jumlahGerakan;

    if (posisiPlayerBaruNumber >= 0 && posisiPlayerBaruNumber <= innerHeight) {
        const posisiPlayerBaruString = `${posisiPlayerBaruNumber}px`;
        elementPlayer.style.top = posisiPlayerBaruString;
    }
};

const pindahHorizontal = (element, jumlahGerakan) => {
    const elementPlayer = element;
    const { innerWidth } = window;
    const posisiKiriGambar = elementPlayer.style.left;
    const posisiPlayerNumber = ekstrakPosisiPlayer(posisiKiriGambar);
    const posisiPlayerBaruNumber = posisiPlayerNumber + jumlahGerakan;

    if (posisiPlayerBaruNumber >= 0 && posisiPlayerBaruNumber <= innerWidth) {
        const posisiPlayerBaruString = `${posisiPlayerBaruNumber}px`;
        elementPlayer.style.left = posisiPlayerBaruString;
    }
};

// beri listener ke window object
const setEventListenerPlayer = () => {
    window.addEventListener('keydown', event => {
        // gerakan dengan keycode arah panah
        if (event.key === 'ArrowDown' || event.code === 'ArrowDown') {
            pindahVertikal(playerImage, 50);
        } else if (event.key === 'ArrowUp' || event.code === 'ArrowUp') {
            pindahVertikal(playerImage, -50);
        } else if (event.key === 'ArrowLeft' || event.code === 'ArrowLeft') {
            pindahHorizontal(playerImage, -50);
            // arah muka player
            playerImage.style.transform = 'scale(-1,1)';
        } else if (event.key === 'ArrowRight' || event.code === 'ArrowRight') {
            pindahHorizontal(playerImage, 50);
            // arah muka player
            playerImage.style.transform = 'scale(1,1)';
        } else {
            console.log('Tidak memakai tombol arah ', event.code);
        }

        // jika player menyentuh koin
        if (isTouchingCoin(playerImage, koinImage)) {
            skorKoinTambah();
            pindahKoin();
        }
    });
};

pindahKoin();
setEventListenerPlayer();
