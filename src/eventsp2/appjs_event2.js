// MULTIPLE LISTENER DI EVENT
const colorArray = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet',
];

// EVENTLISTENER akan menampilkan parameter yang bernama event atau e
function cetakWarnaKotak(eventclick) {
    console.log('Tipe event ', eventclick.type);
    const elementTarget = eventclick.target;
    const jenisWarna = elementTarget.style.backgroundColor;
    console.log('Jenis Warna Click ', jenisWarna);

    const h1ElementJudul = document.querySelector('h1');
    h1ElementJudul.style.color = jenisWarna;

    console.dir(window.getComputedStyle(h1ElementJudul).textAlign);
    console.log(h1ElementJudul.getAttribute('style'));
}

// container kotak
const containerKotak = document.querySelector('#boxes');
const panjangArray = colorArray.length;

for (let i = 0; i < panjangArray; i += 1) {
    const jenisWarna = colorArray[i];
    const kotakElement = document.createElement('div');
    kotakElement.style.backgroundColor = jenisWarna;

    kotakElement.classList.add('box');
    containerKotak.appendChild(kotakElement);

    // berikan listener
    kotakElement.addEventListener('click', cetakWarnaKotak);
}

// KEYPRESS EVENT OBJECT
const inputKeyPress = document.querySelector('div #inputkey');
inputKeyPress.addEventListener('keypress', event => {
    console.log(event);
    console.log('Key Ditekan', event.key, event.keyCode);
});
