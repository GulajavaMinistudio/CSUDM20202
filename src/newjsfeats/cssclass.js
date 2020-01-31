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

// import CSSHelper from './helper/csshelper';

// CSSHelper.toggleClass(document.querySelector('div #dialogmodal'), 'showmodal');

// const elInputReg = document.querySelectorAll('input.registrasiclass');
// const elButtonSubmit = document.querySelector('button.sendclass');
// const elButtonCancel = document.querySelector('button.cancelclass');
// CSSHelper.hide(elInputReg);
// CSSHelper.hide(elButtonSubmit, elButtonCancel);
// CSSHelper.show(elButtonSubmit, elButtonCancel);

// CSSHelper.setStyle(document.querySelector('p'), 'font-size', '20px');

// if (CSSHelper.hasClass(document.querySelector('p.special'), 'special')) {
//     console.log('Aksi jika class ada');
// }
const hitungRataRata = (...nums) => {
    const totalNilai = nums.reduce((totalVal, currentVal) => {
        return totalVal + currentVal;
    }, 0);
    return totalNilai / nums.length;
};

const arrayBilangan = [1, 2, 3];
console.log('Rata-rata 1', hitungRataRata(...arrayBilangan));
console.log('Rata-rata 2', hitungRataRata(1, 2, 3, 2));

const isHariWeekend = (date = new Date()) => {
    return date.getDay() % 6 === 0;
};

const isHariWeekday = (date = new Date()) => {
    return date.getDay() % 6 !== 0;
};

const getTanggalBesok = (dates = new Date()) => {
    dates.setDate(dates.getDate() + 1);
    return dates.toISOString().split('T')[0];
};

const getTanggalKemarin = (dates = new Date()) => {
    dates.setDate(dates.getDate() - 1);
    return dates.toISOString().split('T')[0];
};

console.log('Hari ini adalah hari Weekend? ', isHariWeekend());

console.log(
    'Tanggal 2020-01-11 adalah hari Weekend?',
    isHariWeekend(new Date('2020-01-11')),
);

console.log(
    'Tanggal 2020-01-24 adalah hari kerja? ',
    isHariWeekday(new Date('2020-01-24')),
);

console.log('Minta tanggal besok: ', getTanggalBesok());
console.log('Minta tanggal besok: ', getTanggalBesok(new Date('2020-01-30')));

console.log('Minta tanggal kemarin: ', getTanggalKemarin());

const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g, '');
    return s === [...s].reverse().join('');
};

// CONTOH;
console.log('Apakah "Taco Cat" adalah palindrome ? ', palindrome('taco cat'));

console.log(
    'Apakah "Was it a cat I saw?" adalah palindrome ? ',
    palindrome('Was it a cat I saw'),
);

const kapitalisasiHurufPertamaKata = (
    [charAwal, ...charSisa],
    lowerSisa = false,
) => {
    const charAwalUp = charAwal.toUpperCase();
    const charSisaLower = lowerSisa
        ? charSisa.join('').toLowerCase()
        : charSisa.join('');
    return `${charAwalUp}${charSisaLower}`;
};

const kapitalisasiKarakterDiKalimat = (stringKalimat, lowerSisa = false) => {
    const arrayKata = stringKalimat.split(' ');
    const arrayKataUppercased = arrayKata.map(kata =>
        kapitalisasiHurufPertamaKata(kata, lowerSisa),
    );
    return arrayKataUppercased.join(' ');
};

// CONTOH
console.log(kapitalisasiHurufPertamaKata('fooBar'));
console.log(kapitalisasiHurufPertamaKata('fooBarCat', true));
console.log(
    kapitalisasiKarakterDiKalimat('taco cat playing foobarCatWalk', true),
);

// const listTabelBodyElement = document.querySelectorAll('#tabel tbody td');

// const elementHide = [];
// for (let i = 0; i < listTabelBodyElement.length; i += 1) {
//     if (listTabelBodyElement[i].style.display === 'none') {
//         elementHide.push(listTabelBodyElement[i]);
//     }
// }

// console.log(elementHide);
