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
