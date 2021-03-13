// REMOVECHILD Hapus anak element dari element yang ada
// REMOVE Hapus element dari element yang ada
// Parentnode.removeChild(child);
const ulSayurElement = document.querySelector('#sayurkacang ul');
console.log(ulSayurElement);

const elementSayurHapus = ulSayurElement.querySelector('.special');
console.log(elementSayurHapus);

// hapus element
const elementSayurDihapus = ulSayurElement.removeChild(elementSayurHapus);
console.log('Element sudah dihapus', elementSayurDihapus);

// REMOVE ELEMENT Dihapus
let ulTodolist = document.querySelector('#todolist');
console.log(ulTodolist);
const listElementTodoList = ulTodolist.querySelectorAll('li.todo');
console.log(listElementTodoList);

// hapus element kedua dari todo
// Menyiram tanaman akan hilang
listElementTodoList[1].remove();
ulTodolist = document.querySelector('#todolist');
console.log('List todolist setelah dihapus', ulTodolist);

// REMOVE Hapus paragraf pertama
const paragrafPertamaHapus = document.querySelector('p');
paragrafPertamaHapus.remove();
