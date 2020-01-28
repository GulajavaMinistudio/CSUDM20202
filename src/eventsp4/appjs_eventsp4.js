// PREVENTDEFAULT Mencegah aksi langsung kirim dari form inpuit
// Mencegah reload otomatis ketika Form Submit dijalankan
const formKirimElement = document.querySelector('#kirimform');
const inputNomorRekElement = document.querySelector('#norekening');
const checkboxTermsElement = document.querySelector('#cekboxterms');
const selectMenuElement = document.querySelector('#select_menu');

formKirimElement.addEventListener('submit', event => {
    // alert('KIRIM FORM BIASA');
    // matikan aksi default dengan PreventDefault
    event.preventDefault();

    console.log('KIRIM FORM ', event);
    console.log('Input Rek:', inputNomorRekElement.value);
    console.log('Cekbok Terms:', checkboxTermsElement.checked);
    console.log('Select Menu:', selectMenuElement.value);
    // Lanjutkan kirim data ke REST API
});
