const debounceProcess = (funcCallback, delay = 1000) => {
    let timeoutId;
    console.log(funcCallback);
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => funcCallback.apply(this, args), delay);
    };
};

function helloWorld() {
    console.log('debounce');
    console.log('hello debounce');
}

debounceProcess(helloWorld(), 5000);
