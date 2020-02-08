// Contoh CSS Helper sederhana untuk membantu manipulasi DOM
// Dengan JavaScript Modern ES2015+
// export default class CSSHelper {
//     show(...arrayElement) {
//         [...arrayElement].forEach(e => {
//             e.style.display = '';
//         });
//     }

//     hide(...arrayElement) {
//         [...arrayElement].forEach(e => {
//             e.style.display = 'none';
//         });
//     }

//     toggleClass(el, className) {
//         el.classList.toggle(className);
//     }

//     setStyle(el, ruleName, val) {
//         const element = el;
//         element.style[ruleName] = val;
//     }

//     hasClass(el, className) {
//         el.classList.contains(className);
//     }
// }

// // Import di component atau file JS yang membutuhkan
// import CSSHelper from './helper/csshelper';

// CSSHelper.toggleClass(document.querySelector('div #dialogmodal'), 'showmodal');

// const elInputReg = document.querySelectorAll('input.registrasiclass');
// const elButtonSubmit = document.querySelector('button.sendclass');
// const elButtonCancel = document.querySelector('button.cancelclass');

// CSSHelper.hide(...elInputReg);
// CSSHelper.hide(elButtonSubmit, elButtonCancel);
// CSSHelper.show(elButtonSubmit, elButtonCancel);

// CSSHelper.setStyle(document.querySelector('p'), 'fontSize', '20px');

// if (CSSHelper.hasClass(document.querySelector('p'), 'special')) {
//     console.log('Aksi jika class ada');
// }

// Nilai this di dalam arrow func sama dengan nilai this di luar arrow func
console.log(this);
const fungsiThis = () => {
    console.log(this);
};

fungsiThis();

// Nilai this adalah object parameter yang dikirim ke dalamnya
// Hanya untuk bind call dan apply
const fungsiThisCall = function() {
    console.log(this);
};

const fungsiThisApply = function() {
    console.log(this);
};

fungsiThisCall.call({ color: 'red' });
fungsiThisApply.apply({ color: 'hijau' });

// this akan mengikuti context ruang lingkup object
// fungsi this itu dipanggil
const warnaObject = {
    apem: 'tes',
    cekWarna() {
        console.log(this);
    },
};

// warnaObject.cekWarna();

// this akan berpindah ke object kedua yang memanggilnya
// dimana object kedua ini ada di sebelah titik sebelum pemanggilan fungsi
const objectKeduaLagi = {
    ikan: 'koi',
};
objectKeduaLagi.cekWarna = warnaObject.cekWarna;
objectKeduaLagi.cekWarna();
