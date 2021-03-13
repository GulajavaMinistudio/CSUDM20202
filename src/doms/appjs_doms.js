// LATIHAN MENGGUNAKAN DOM
// TODO MENGGUNAKAN DOM
console.log('hello DOM');

// GETELEMENTBYID SELECT ELEMENT DOM DENGAN ELEMENT ID
const elementParagraf = document.getElementById('paragrafdua');
const gambarKucing1 = document.getElementById('fotokucing');
const elementinputan = document.getElementById('form_input');
console.log('ELEMENT PARAGRAF', elementParagraf);
console.log('ELEMENT GAMBAR', gambarKucing1);
console.dir(gambarKucing1);
console.log('INPUT ELEMENT', elementinputan);
console.dir(elementinputan.elements[0]);

// GETELEMENTBYTAGSNAME SELECT ELEMENT DENGAN TAGS HTML
const listElementInput = document.getElementsByTagName('input');
const listElemenetLi = document.getElementsByTagName('li');
console.log('ELEMENT INPUT', listElementInput);
console.dir(listElementInput);
console.log(listElementInput[0].placeholder);

const inputArrayElement = [...listElementInput];
console.log('INPUT ARRAY ELEMENT SPREAD', inputArrayElement);

console.log('ELEMENT LIST LI', listElemenetLi);
console.dir(listElemenetLi);

// GETELEMENTBYCLASSNAME SELECT ELEMENT DENGAN CLASS DOM HTML
const elementHeader = document.getElementsByClassName('header');
const elementSpesialLiClass = document.getElementsByClassName('special');

console.log('GET ELEMENT BY CLASS NAME HEADER', elementHeader);
console.dir(elementHeader);

console.log('GET ELEMENT BY CLASS NAME LI', elementSpesialLiClass);
console.dir(elementSpesialLiClass);

// ambil element dengan class li, berdasarkan li tag
const listElementUlTag = document.getElementsByTagName('ul');
console.log(listElementUlTag);
const listLiElementSpesialTag = listElementUlTag[0].getElementsByClassName(
    'special',
);

console.log('TAG NAME CLASS NAME LI', listLiElementSpesialTag);

// AMBIL FORM INPUT
const formElement = document.getElementById('form_input');
const inputFormElement = formElement.getElementsByClassName('inputdata');
console.log('INPUT DATA DOM ID CLASS NAME', inputFormElement);

// QUERYSELECTOR DAN QUERYSELECTOR ALL
// Memilih element dengan querySelector untuk mencari element pertama yang cocok

const queryH1 = document.querySelector('h1');
console.log('QUERY SELECTOR H1', queryH1);
const queryParagraf = document.querySelector('p');
console.log('QUERY SELECTOR P', queryParagraf);
const elementGambarQuery = document.querySelector('#fotokucing');
console.log('QUERY SELECTOR GAMBAR', elementGambarQuery);
const elementParagdua = document.querySelector('#paragrafdua');
console.log('QUERY SELECTOR PARAGRAF DUA', elementParagdua);

// QUERY CLASS
const querySpecialParagraf = document.querySelector('.special');
console.log('QUERY SELECTOR PARAGRAF CLASS SPECIAL', querySpecialParagraf);

// pilih kelas di bawah tag tertentu
const querySpecialLi = document.querySelector('li.special');
console.log('QUERY SELECTOR LI SPECIAL', querySpecialLi);

// QUERY  pilih li dengan nama kacang dan kelas special
const queryLiSayurKacang = document.querySelector('body section ul li.special');
console.log('QUERY SELECTOR COMBO SPECIAL DI DALAM TAG', queryLiSayurKacang);

// QUERY INPUT ATRIBUTE TERTENTU
const queryInputPassword = document.querySelector(
    'form input[type="password"]',
);
const queryInputNama = document.querySelector('form input[name="teksinput"]');
console.log('QUERY FORM INPUT NAMA', queryInputNama);
console.log('QUERY FORM INPUT PASSWORD', queryInputPassword);

// QUERYSELECTORALL AMBIL SESUAI TAG YANG ADA DAN KEMBALIKAN
// DALAM BENTUK ARRAY NODE LIST
const queryInputAll = document.querySelectorAll('input');
console.log('HASIL QUERY SEMUA INPUT', queryInputAll);

const queryClassSpecialAll = document.querySelectorAll('li.special');
console.log('HASIL QUERY KELAS SPECIAL SELECTOR ALL', queryClassSpecialAll);
console.log('HASIL QUERY KELAS SPECIAL SELECTOR ALL', queryClassSpecialAll[0]);
console.dir(queryClassSpecialAll[0]);

const queryInputDataClassAll = document.querySelectorAll('.inputdata');
console.log('QUERY SELECTOR ALL INPUTDATA CLASS', queryInputDataClassAll);
