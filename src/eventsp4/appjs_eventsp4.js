// PREVENTDEFAULT Mencegah aksi langsung kirim dari form inpuit
// Mencegah reload otomatis ketika Form Submit dijalankan
const formKirimElement = document.querySelector('#kirimform');

const inputNomorRekElement = document.querySelector('#norekening');
const checkboxTermsElement = document.querySelector('#cekboxterms');
const selectMenuElement = document.querySelector('#select_menu');

const dataSubmitObject = {
    nomor: '',
    isSetujuTerms: false,
    pilihanMenu: '',
};

const formDataObject = {};

formKirimElement.addEventListener('submit', event => {
    // alert('KIRIM FORM BIASA');
    // matikan aksi default dengan PreventDefault
    event.preventDefault();

    console.log('KIRIM FORM ', event);
    console.log('Input Rek:', inputNomorRekElement.value);
    console.log('Cekbok Terms:', checkboxTermsElement.checked);
    console.log('Select Menu:', selectMenuElement.value);
    // Lanjutkan kirim data ke REST API
    console.log(formDataObject);
});

// ONCHANGE EVENT LISTENER
// Memantau perubahan input , checkbox, atau select
// input event dijalankan setiap perubahan di dalam input di ketik
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
inputNomorRekElement.addEventListener('input', event => {
    console.log('INPUT BERUBAH ');
    dataSubmitObject.nomor = event.target.value;
});

selectMenuElement.addEventListener('input', event => {
    console.log('INPUT SELECT BERUBAH');
    dataSubmitObject.pilihanMenu = event.target.value;
    console.log(dataSubmitObject);
});

checkboxTermsElement.addEventListener('input', event => {
    console.log('CHECKBOX BERUBAH');
    dataSubmitObject.isSetujuTerms = event.target.checked;
});

// INPUTSATUEVENTLISTENER Cara lain dengan satu event listener
const arrayElement = [
    inputNomorRekElement,
    selectMenuElement,
    checkboxTermsElement,
];

// CHANGE EVENT CONTOH
// INPUTVALUE berubah ketika input itu kehilangan fokus atau di enter penggunanya
arrayElement.forEach(input => {
    // tambah event listener
    input.addEventListener('change', ({ target }) => {
        const { name, type, value, checked } = target;
        formDataObject[name] = type === 'checkbox' ? checked : value;

        console.log('FORM DATA KEDUA', formDataObject);
    });
});
