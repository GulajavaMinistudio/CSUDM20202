// LATIHAN VALIDASI PASSWORD
// password harus panjang lebih dari 8,
// tidak boleh ada spasi
// tidak ada nama username di password
// function isValidasiPassword(username = '', password = '') {
//     if (password.length < 8) {
//         return false;
//     }
//     if (password.indexOf(' ') !== -1) {
//         return false;
//     }
//     if (password.indexOf(username) !== -1) {
//         return false;
//     }
//     return true;
// }

// const hasilValidasiPassword = isValidasiPassword('kucingmeong', 'kucingloncat');
// const hasilValidasiPassword2 = isValidasiPassword('katak', 'katakloncat');
// console.log('VALIDASI PASSWORD ', hasilValidasiPassword);
// console.log('VALIDASI PASSWORD 2 ', hasilValidasiPassword2);

const validasiPasswordShorts = (username = '', password = '') => {
    const isPendekPass = password.length < 8;
    const isAdaSpasi = password.indexOf(' ') !== -1;
    const isAdaUsernameDiPassword = password.indexOf(username) !== -1;

    console.log('Password pendek ', isPendekPass);
    console.log('Password ada Spasi ', isAdaSpasi);
    console.log('Ada kata username di password ', isAdaUsernameDiPassword);

    if (isPendekPass || isAdaSpasi || isAdaUsernameDiPassword) {
        return false;
    }
    return true;
};

const hasilValidasiPendek1 = validasiPasswordShorts(
    'kodoki',
    'kodokiloncattinggi',
);
const hasilValidasiPendek2 = validasiPasswordShorts(
    'kucinglompat',
    'meongloncat',
);
console.log('Hasil validasi pendek satu ', hasilValidasiPendek1);
console.log('Hasil validasi pendek dua ', hasilValidasiPendek2);

function validasiPasswordTrue(username = '', password = '') {
    const isPasswordPendek = password.length < 8;
    const isPasswordAdaSpasi = password.indexOf(' ') !== -1;
    const isPasswordAdaUsername = password.indexOf(username) !== -1;

    if (!isPasswordPendek && !isPasswordAdaSpasi && !isPasswordAdaUsername) {
        return true;
    }
    return false;
}

console.log(
    'PASSWORD TES TRUE ',
    validasiPasswordTrue('katakloncat', 'kecebongbutek'),
);

function rataRataNilai(arrayNilai = []) {
    const panjangNilai = arrayNilai.length;
    let totalNilai = 0;
    for (let i = 0; i < panjangNilai; i += 1) {
        const nilai = arrayNilai[i];
        totalNilai += nilai;
    }

    return totalNilai / panjangNilai;
}

const nilaiRataBulat = rataRataNilai([10, 6, 7, 8.5, 6.4, 8.6, 9.8]).toFixed(3);
console.log('NILAI RATA-RATA ', nilaiRataBulat);

// CEK KATA PANGRAM
// a quick brown fox jumps over the lazy dog
function pangramChecker(stringKata = '') {
    const stringAlphabet = 'qwertyuiopasdfghjklzxcvbnm';
    const stringKataPangram = stringKata.toLowerCase();

    const panjangAlphab = stringAlphabet.length;

    // jika ada karakter tidak ditemukan, kembalikan nilai -1
    for (let i = 0; i < panjangAlphab; i += 1) {
        const charAlpha = stringAlphabet[i];
        if (stringKataPangram.indexOf(charAlpha) === -1) {
            return false;
        }
    }
    return true;
}

// FUNGSI LAIN DENGAN INCLUDES
const pangramCheckerInclude = (stringKata = '') => {
    const stringAlphabet = 'qwertyuiopasdfghjklzxcvbnm';
    const stringKataPangram = stringKata.toLowerCase();

    const panjangAlphab = stringAlphabet.length;

    // return true jika ada karakter yang ada di dalam kalimat pangram
    for (let i = 0; i < panjangAlphab; i += 1) {
        const charKata = stringAlphabet[i];

        if (!stringKataPangram.includes(charKata)) {
            return false;
        }
    }
    return true;
};

console.log(
    'CEK PANGRAM ',
    pangramChecker('a quick brown fox jumps over the lazy dog'),
);

console.log(
    'CEK PANGRAM INCLUDES ',
    pangramCheckerInclude('a uick brown fox jumps over the lazy dog'),
);
