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
