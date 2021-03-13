// LISTENER EVENT TOMBOL BERGERAK
// TOMBOL YANG SUSAH DI KLIK
const getRandomPosisiAcak = () => {
    // kalkulasi posisi baru dengan inner height dan inner width
    const { innerWidth } = window;
    const { innerHeight } = window;

    const randomWidth = Math.floor(Math.random() * innerWidth);
    const randomHeight = Math.floor(Math.random() * innerHeight);
    return {
        width: randomWidth,
        height: randomHeight,
    };
};

const clickFungsiNewTab = () => {
    // buka url di tab baru
    const aElement = document.createElement('a');
    aElement.target = '_blank';
    aElement.href = 'https://github.com/GulajavaMinistudio';
    aElement.click();
};

function addListenerTombolGerak() {
    const tombolNakalEl = document.querySelector('#tombol_nakals');

    tombolNakalEl.addEventListener('mouseover', function() {
        const moveObject = getRandomPosisiAcak();
        tombolNakalEl.innerText = 'Tidak Bisa Klik Saya :P';

        tombolNakalEl.classList.add('red');
        tombolNakalEl.classList.remove('green');

        tombolNakalEl.style.left = `${moveObject.width}px`;
        tombolNakalEl.style.top = `${moveObject.height}px`;
    });

    tombolNakalEl.addEventListener('click', function() {
        tombolNakalEl.innerText = 'Selamat Anda Berhasil Klik Saya, 100 jempol';
        tombolNakalEl.classList.add('green');
        tombolNakalEl.classList.remove('red');
        clickFungsiNewTab();
    });
}

addListenerTombolGerak();
