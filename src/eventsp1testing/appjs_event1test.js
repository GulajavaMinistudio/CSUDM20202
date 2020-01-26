// LISTENER EVENT TOMBOL BERGERAK
// TOMBOL YANG SUSAH DI KLIK
const getRandomPosisiAcak = () => {
    return {
        width: 0,
        height: 0,
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
        console.log('TEST Mouse Over Saya');
        tombolNakalEl.style.left = '200px';
        tombolNakalEl.style.top = '100px';
    });

    tombolNakalEl.addEventListener('click', function() {
        console.log('HORE, Saya berhasil di klik');
        console.log(window);
        clickFungsiNewTab();
    });
}

addListenerTombolGerak();
