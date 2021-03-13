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

// KEYPRESS KEYUP KEYDOWN
// Event listener ketika keyboard telah ditekan, keyboard dipencet, dan ketika keyboard dipencet

// KEYPRESS EVENT OBJECT
const inputKeyPress = document.querySelector('div #inputkey');
inputKeyPress.addEventListener('keypress', event => {
    console.log(event);
    console.log('Key Ditekan', event.key, event.keyCode);
});

// KEYDOWN EVENT LISTENER
const inputKeydown = document.querySelector('#input_keydown');
inputKeydown.addEventListener('keydown', event => {
    console.log('KEYDOWN EVENT ', event);
});

// KEYUP EVENT LISTENER
const inputKeyup = document.querySelector('#input_keyup');
inputKeyup.addEventListener('keyup', event => {
    console.log('KEYUP EVENT ', event);
});

// KEYPRESS CONTOH
// Contoh Kasus penggunaan Key Press
const inputTambahMakanan = document.querySelector('div #input_makanan');
const listDaftarMakanan = document.querySelector('div #daftar_item');

const tambahMakanan = event => {
    const elementTarget = event.target;
    const stringNamaMakanan = elementTarget.value;

    if (stringNamaMakanan && stringNamaMakanan.length > 1) {
        const liItem = document.createElement('li');
        liItem.innerText = stringNamaMakanan;
        listDaftarMakanan.appendChild(liItem);

        // Kosongkan nilai input
        elementTarget.value = '';
    }
};

// Ambil aksi Enter dan jalankan ambil nilai value dari input
const initListenerInput = () => {
    inputTambahMakanan.addEventListener('keypress', event => {
        const keyCodeEvent = event.keyCode;
        const stringKeyCode = event.key;

        if (keyCodeEvent === 13 || stringKeyCode === 'Enter') {
            // tambah ke dalam daftar
            // jika pake arrow function, tidak bisa pake this.
            // console.log(this.value);
            tambahMakanan(event);
        }
    });
};

initListenerInput();
