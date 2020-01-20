// PARENT ELEMENT, CHILDERN, NEXT SIBLING , PREVIOUS SIBLING
// Akses element parent, childern , element tetangga dalam satu parent
const liPertama = document.querySelector('ul li');
console.log('LI PERTAMA', liPertama);
console.dir(liPertama);

const parentElementLiPertama = liPertama.parentElement;
console.log('Data element parent LI Pertama', parentElementLiPertama);
console.dir(parentElementLiPertama);

const parentElementUlLiPertama = parentElementLiPertama.parentElement;
console.log('Parent element Ul Li Pertama', parentElementUlLiPertama);
console.dir(parentElementUlLiPertama);

const htmlElementParentBodyUlLi = parentElementUlLiPertama.parentElement;
console.log('Parent dari body', htmlElementParentBodyUlLi);
console.dir(htmlElementParentBodyUlLi);
console.log(
    'Parent element terakhir setelah html',
    htmlElementParentBodyUlLi.parentElement,
);

// CHILDREN ELEMENT , akses anak element html
// Hasilnya adalah array html element
const childElementUl = document.querySelector('section ul');
console.log('html element children', childElementUl.children);
console.dir(childElementUl.children);

// hasil childern ini adalah array html
const childrenElementUl = childElementUl.children;
let stringLiChild = '';
for (let i = 0; i < childrenElementUl.length; i += 1) {
    stringLiChild += ` ${childrenElementUl[i].innerText}`;
}
console.log('Teks di dalam Inner children Ul: ', stringLiChild);

// NEXTELEMENTSIBLING DAN PREVIOUSELEMENTSIBLING mengambil element tetangga yang terletak dalam satu parent atau sama sama children dari satu parent
const firstLiUlElement = childrenElementUl[0];
console.log(firstLiUlElement);
console.log('next sibling', firstLiUlElement.nextElementSibling);

const elementKetigaLi = firstLiUlElement.nextElementSibling.nextElementSibling;
console.log('next sibling ketiga', elementKetigaLi);

// null karena sudah tidak ada
console.log(
    firstLiUlElement.nextElementSibling.nextElementSibling.nextElementSibling,
);

// PREVIOUSELEMENTSIBILING Ambil element tetangga sebelumnya
console.log('previous element sibling', elementKetigaLi.previousElementSibling);
console.log(
    'previous element sibling',
    elementKetigaLi.previousElementSibling.previousElementSibling,
);
