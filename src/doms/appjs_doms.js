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
