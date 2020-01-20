// INNERTEXT DOM HTML
// Ambil data teks di dalam DOM Selector dengan Inner Text
const selectorH1text = document.querySelector('h1');
// console.log('INNER TEXT SELECTOR H1', selectorH1text.innerHTML);

// mengambil semua teks di dalam ul
const selectorUl = document.querySelector('section ul');
// console.log('INNER TEXT SELECTOR UL', selectorUl.innerText);
// ganti isi ul dengan teks
// selectorUl.innerHTML = 'GANTI ISI UL TAPI SALAH';

// mengambil semua teks yang ada di dalam body
const selectTextBody = document.querySelector('body');
// console.log('INNER TEXT DI DALAM BODY', selectTextBody.innerText);

// ganti isi h1
// setTimeout(() => {
//     console.log('Judul H1 berganti dikit');
//     selectorH1text.innerText = 'Website Latihan Colt Steele';
// }, 2000);

// TEXT CONTENT VS INNER TEXT
const elementParagrafDua = document.querySelector('#paragrafdua');

// Text content mengambil semua element teks beserta formatting semua element yang ada di dalamnya
console.log('TEXT CONTENT VS INNER TEXT', elementParagrafDua.textContent);

// INNERTEXT mengambil isi teks yang tampil saja di html tanpa formatting dan
console.log('INNER TEXT VS TEXT CONTENT', elementParagrafDua.innerText);

// INNERHTML Ambil html tag dari element yang diquery
const elementForms = document.querySelector('form');
console.log('INNERHTML FORM', elementForms.innerHTML);
const elementUlHtml = document.querySelector('#list_urutan');
const elementUlString = elementUlHtml.innerHTML;
console.log('INNER HTML UL', elementUlHtml.innerHTML);

// set html baru ke ul bawah
elementUlHtml.innerHTML = `${elementUlString}<li><b>Urutan Keempat Baru Ditambah</b></li>`;
const elementUlHtmlBaru = document.querySelector('#list_urutan');
console.log('INNER HTML UL BARU', elementUlHtmlBaru.innerHTML);

// ganti h1 dengan inner html
let elementH1InnerHtml = document.querySelector('h1');
elementH1InnerHtml.innerHTML += ' <i>is Cool !!!!</i>';
// inner text tidak bisa membaca tag html
// elementH1InnerHtml.innerText += ' <i>is Cool !!!!</i>';
elementH1InnerHtml = document.querySelector('h1');
console.log('INNER HTML BARU', elementH1InnerHtml.innerHTML);
