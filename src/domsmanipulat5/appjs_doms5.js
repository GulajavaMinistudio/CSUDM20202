// CREATEELEMENT DI JAVASCRIPT
// APPENDCHILD di JavaScript ke element html yang sudah ada
const elementH2 = document.createElement('h2');
elementH2.innerText = 'Saya suka Sayuran';
elementH2.classList.add('special');
console.log('Element baru h2', elementH2);

// Lakukan append child ke element yang ada
const sectionElement = document.querySelector('section');
sectionElement.appendChild(elementH2);
console.log('Section Element Baru', sectionElement);

// Menambahkan gambar ke element baru
const srcImage = 'https://source.unsplash.com/ha31N1TM-ys';
const imgElement = document.createElement('img');
imgElement.setAttribute('src', srcImage);
imgElement.setAttribute('loading', 'lazy');
imgElement.setAttribute('crossorigin', 'anonymous');
imgElement.setAttribute('id', 'gambar_append');

imgElement.style.width = '300px';

console.log('Gambar baru', imgElement);

// APPENDCHILD ke akhiran Body
document.body.appendChild(imgElement);

// APPENDCHILD KE DALAM PARAGRAF
const linkKucingElement = document.createElement('a');
linkKucingElement.innerText = 'Kucing Dua Buah';
linkKucingElement.title = 'Judul Kucing Dua Buah';
linkKucingElement.href = 'https://www.youtube.com/watch?v=Udj8J7EFaDE';

linkKucingElement.target = '_blank';

console.log('A href kucing element', linkKucingElement);

const paragrafDua = document.querySelector('p');
paragrafDua.appendChild(linkKucingElement);

// INSERTBEFORE Memasukkan element ke awal dom element di dalam parent
// Insert before membutuhkan parent element, dan child element yang akan dipakai patokan element sebelumnya insert element before
const parentUlElement = document.querySelector('div #todolist');
console.log(parentUlElement);

const liElementBaru = document.createElement('li');
const liElementInsertTengah = document.createElement('li');

liElementBaru.innerText = 'Element Baru Olahraga pagi dulu';
liElementBaru.classList.add('todo');

liElementInsertTengah.innerText = 'Element Makan Pagi di Tengah';
liElementInsertTengah.classList.add('todo');

console.log(liElementBaru);
// menambahkan di bagian belakang
// parentUlElement.appendChild(liElementBaru);

// menambahkan di bagian depan
// let insertedNode = parentNode.insertBefore(newNode, referenceNode)
const elementLiPertama = document.querySelector('div #todolist li.todo');

const elementTodoTerakhir = document.querySelectorAll(
    'div #todolist li.todo',
)[2];

console.log(elementLiPertama);
console.log(elementTodoTerakhir);

parentUlElement.insertBefore(liElementBaru, elementLiPertama);
parentUlElement.insertBefore(liElementInsertTengah, elementTodoTerakhir);

// INSERTADJACENT CARA LAIN INSERT ELEMENT PADA INDEKS ELEMENT TERTENTU
const elementMiring = document.createElement('i');
const elementMiringAkhir = document.createElement('i');
const elementMiringTengahAwal = document.createElement('i');
const elementMiringTengahAkhir = document.createElement('i');

elementMiring.innerText = 'Contoh Teks Miring Awal';
elementMiring.style.fontWeight = 'bold';

elementMiringAkhir.innerText = 'Contoh Teks Miring Akhir';
elementMiringAkhir.style.fontWeight = 'bold';

elementMiringTengahAwal.innerText = 'Contoh Teks Setelah Awal-';
elementMiringTengahAwal.style.fontWeight = 'bold';

elementMiringTengahAkhir.innerText = '-Contoh Teks Miring Sebelum Akhir';
elementMiringTengahAkhir.style.fontWeight = 'bold';

const paragrafKedua = document.querySelector('#paragrafdua');

paragrafKedua.insertAdjacentElement('beforebegin', elementMiring);
paragrafKedua.insertAdjacentElement('afterend', elementMiringAkhir);

paragrafKedua.insertAdjacentElement('afterbegin', elementMiringTengahAwal);
paragrafKedua.insertAdjacentElement('beforeend', elementMiringTengahAkhir);

// INSERTADJACENTELEMENT LATIHAN LAGI
const ulElementAdjacent = document.querySelector('#ul_adjacent ul');
console.log(ulElementAdjacent);

const liInsertAwalan = document.createElement('li');
const liInsertSetelahAwal = document.createElement('li');
const liInsertSebelumAkhir = document.createElement('li');
const liInsertAkhiran = document.createElement('li');

liInsertAwalan.innerText = 'Baris Masuk Sebelum Element Target Awal';
liInsertSetelahAwal.innerText = 'Baris Masuk Setelah Awal';
liInsertSebelumAkhir.innerText = 'Baris Masuk Sebelum Akhir';
liInsertAkhiran.innerText = 'Baris Masuk Setelah Element Target Akhir';

ulElementAdjacent.insertAdjacentElement('beforebegin', liInsertAwalan);
ulElementAdjacent.insertAdjacentElement('afterbegin', liInsertSetelahAwal);
ulElementAdjacent.insertAdjacentElement('beforeend', liInsertSebelumAkhir);
ulElementAdjacent.insertAdjacentElement('afterend', liInsertAkhiran);

// APPEND Insert element di akhir child node di dalam parent
// PREPEND Insert element di awal child node di dalam parent
// APPENDPREPEND bisa insert banyak element sekaligus
const liElementAkhirAppend = document.createElement('li');
liElementAkhirAppend.innerText = 'Element Akhir: Append Li';
liElementAkhirAppend.style.fontStyle = 'italic';
liElementAkhirAppend.style.fontWeight = 'bold';

const liElementAwalPrepend = document.createElement('li');
liElementAwalPrepend.innerText = 'Element Awal: Append Li';
liElementAwalPrepend.style.fontStyle = 'italic';
liElementAwalPrepend.style.fontWeight = 'bold';

const spanElementAwalPrepend = document.createElement('span');
spanElementAwalPrepend.innerText = 'Element Awal: Prepend Span';
spanElementAwalPrepend.style.fontStyle = 'italic';
spanElementAwalPrepend.style.fontWeight = 'bold';

const paragrafAppendPrepend = document.querySelector('#p_appendprepends');
paragrafAppendPrepend.append(liElementAkhirAppend, spanElementAwalPrepend);
// paragrafAppendPrepend.insertAdjacentElement(
//     'afterbegin',
//     spanElementAwalPrepend,
// );
paragrafAppendPrepend.prepend(spanElementAwalPrepend);

const ulAppendPrepend = document.querySelector('#ul_appendprepend ul');
ulAppendPrepend.append(liElementAkhirAppend, spanElementAwalPrepend);

ulAppendPrepend.prepend(spanElementAwalPrepend, liElementAwalPrepend);
