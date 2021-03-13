// STYLECSS DOM MANIPULATION
// GANTICSS dengan JavaScript DOM
// INLINECSS saja bisanya

// menggunakan style hanya menambahkan inline style saja, bukan di file cssnya saja
const h1El = document.querySelector('h1');
console.log(h1El.style);
h1El.style.color = 'red';

const paragraf1 = document.querySelector('p');
paragraf1.style.color = '#ffde7d';
// ganti backgroundnya
// menggunakan parameter camelcase, berbeda dengan css yang kebab case
paragraf1.style.backgroundColor = '#f07b3f';
paragraf1.style.fontSize = '30px';
console.log('Style akhir paragraf pertama', paragraf1);

// ganti warna di Li element
const selectSemuaLi = document.querySelectorAll('li');
const warnaDaftar = ['red', 'green', 'orange', 'yellow', 'blue', 'purple'];

selectSemuaLi.forEach((valueLi, index) => {
    const warna = warnaDaftar[index];
    const warnaLi = valueLi;
    console.log(warna, index, warnaLi);
    warnaLi.style.color = warna;
});

// GETCOMPUTEDSTYLE Ambil data style CSS yang bukan inline
// tetapi bersumber dari file CSS yang dijalankan browser
// NILAI computed style otomatis mengikuti perubahan status CSS
// NILAI COMPUTED BERSIFAT READ ONLY
// READONLY HASIL DARI COMPUTED STYLE
const h1Computed = document.querySelector('.specialcomputed');
console.log(h1Computed);
const h1Styles = window.getComputedStyle(h1Computed);
console.log(
    'warna font h1 coklat  ',
    h1Styles.color,
    ' ukuran font size ',
    h1Styles.fontSize,
);
// tes rubah isi css inline style
h1Computed.style.color = 'blue';
h1Computed.style.fontSize = '50px';

console.log(
    'warna font setelah berubah h1 coklat  ',
    h1Styles.color,
    ' ukuran font size ',
    h1Styles.fontSize,
);

const liPertama = document.querySelector('li');
const compLiStyle = window.getComputedStyle(liPertama);
console.dir(compLiStyle);

// CLASS CSS MANIPULATION MANIPULASI  Kelas CSS dengan
// MANIPULASI KELAS DENGAN JS DAN DOM CSS
// Select daftar todo pertama
const todoItems = document.querySelector('#todolist .todo');
console.log(todoItems);

// cara satu persatu untuk apply css inline
// todoItems.style.color = 'salmon';
// todoItems.style.textDecoration = 'line-through';
// todoItems.style.opacity = '50%';

// Ganti dengan set Attribute
console.log(
    'Lakukan getattribute dan set atribute dengan mengganti class ',
    todoItems.getAttribute('class'),
);

// set attribute melakukan override class yang ada
// tidak ideal jika dipakai karena override class
// todoItems.setAttribute('class', 'done');
// todoItems.setAttribute('class', `${todoItems.getAttribute('class')} done`);
// solusi lain agar tidak override class
// todoItems.setAttribute('class', 'todo done');

// CLASSLIST Cara untuk apply style css class ke element
// ADD REMOVE TOGGLE tersedia
console.log(todoItems.classList);
todoItems.classList.add('donelain');
// hanya bisa sekali apply
// todoItems.classList.add('done');
console.log(todoItems.classList);
// menghapus class dengan remove
// todoItems.classList.remove('todo');

if (todoItems.classList.contains('done')) {
    console.log('Ada kelas done ', todoItems.classList);
} else {
    console.log('Tidak ada kelas done', todoItems.classList);
}

// cara lain dengan toggle classlist
const isDone = true;
// const hasilHilang = todoItems.classList.toggle('done', isDone);
const hasilHilang = todoItems.classList.toggle('done');
console.log(
    'Hasil menambahkan done ',
    hasilHilang,
    todoItems.classList,
    isDone,
);
// TOGGLE mengembalikan nilai false jika ada class yang dihilangkan
// TOGGLE mengembalikan nilai true jika ada class yang ditambahkan

console.log(
    'Baris li pertama setelah set Atribute baru class ',
    todoItems.getAttribute('class'),
);

// TOGGLE BUTTON CLASSLIST
const buttonList = document.querySelectorAll('#toggletodo ul button');
const liListTodo = document.querySelectorAll('#toggletodo ul li.todo');

for (let i = 0; i < buttonList.length; i += 1) {
    buttonList[i].addEventListener('click', function() {
        // console.log(event);
        liListTodo[i].classList.toggle('done');
    });
}
