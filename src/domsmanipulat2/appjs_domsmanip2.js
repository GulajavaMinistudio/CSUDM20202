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
setTimeout(() => {
    console.log('Input value username berubah setelah beberapa saat');
    inputValue.value = 'Input value simsalabim muncul';
}, 3000);

// CHECKBOX Input memiliki cara sendiri dalam mengambil nilai value
const checkbox = document.querySelector('#form_input input[type="checkbox"]');
console.log('LIHAT VALUE CHECKBOX', checkbox.checked, checkbox);

const arrayInputRange = document.querySelectorAll('form input[type="range"]');
const inputRangePilih = arrayInputRange[0];
setTimeout(() => {
    inputRangePilih.value = 250;
    console.log('INPUT RANGE VALUE', inputRangePilih.value);
}, 2000);

// contoh ubah nilai checkbox
setTimeout(() => {
    checkbox.checked = false;
    console.log('Nilai checkbox berubah lagi');
}, 2000);
