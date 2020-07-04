const cnt = document.querySelector('#counter');
const countVal = document.querySelector('.counter-value');

const addCommas = nStr => {
    let nString = nStr;
    nString += ' ';
    const x = nString.split('.');
    let x1 = x[0];
    const x2 = x.length > 1 ? `.${x[1]}` : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, `$1,$2`);
    }

    return x1 + x2;
};

function doSomething() {
    const { min } = cnt.dataset;
    const { max } = cnt.dataset;
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    countVal.innerHTML(addCommas(number));
}

function loop() {
    const rand = Math.round(Math.random() * (5000 - 500)) + 500;
    setTimeout(() => {
        doSomething();
        loop();
    }, rand);
}

if (cnt.length !== null) {
    loop();
}
