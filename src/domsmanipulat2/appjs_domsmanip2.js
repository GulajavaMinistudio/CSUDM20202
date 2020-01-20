// MENGENAL VALUE SRC HREF DARI INPUT
const inputListArray = document.querySelectorAll('#form_input input');
console.log('QUERY INPUT', inputListArray);
for (let i = 0; i < inputListArray.length; i += 1) {
    const inputItem = inputListArray[i];
    console.log('DAFTAR INPUT', inputItem.value);
}

const inputValue = document.querySelector(
    'form input.inputdata[name="teksinput"]',
);

const inputPasswordEl = document.querySelector(
    'form input[name="passwordinput"]',
);

setTimeout(() => {
    console.log('Input value username berubah setelah beberapa saat');
    inputValue.value = 'Input value simsalabim muncul';

    inputPasswordEl.placeholder = 'Silahkan isi kata sandi anda';
}, 3000);

// CHECKBOX Input memiliki cara sendiri dalam mengambil nilai value
const checkbox = document.querySelector('#form_input input[type="checkbox"]');
console.log('LIHAT VALUE CHECKBOX', checkbox.checked, checkbox);

const arrayInputRange = document.querySelectorAll('form input[type="range"]');
const inputRangePilih = arrayInputRange[0];
setTimeout(() => {
    inputRangePilih.value = 450;
    console.log('INPUT RANGE VALUE BERUBAH', inputRangePilih.value);
}, 2000);

// contoh ubah nilai checkbox
setTimeout(() => {
    checkbox.checked = false;
    console.log('Nilai checkbox berubah lagi');
}, 2000);

// QUERYSELECTOR HREF DARI ALINK
const elementAref = document.querySelector('a');
const urlElement = elementAref.href;
console.log('Url element href', urlElement);

setTimeout(() => {
    console.log('Href berubah');
    elementAref.href =
        'https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML';
}, 3000);

// GANTI GAMBAR DENGAN IMG SRC
const gambarSelect = document.querySelector('img');

setTimeout(() => {
    console.log('Ganti gambar foto kucing');
    gambarSelect.src = 'https://source.unsplash.com/9SWHIgu8A8k';
}, 3000);
