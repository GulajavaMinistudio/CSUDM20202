function helloWorlds() {
    console.log('halo fungsi hello world');
}

const helloArrows = () => {
    console.log('fungsi dengan panah cepat', 'hello kata'.toUpperCase());
};

const fungsiPanahan = (kunci = '') => {
    const kataBesar = 'panah yang huruf kecil';
    console.log('kata besar', kataBesar.toUpperCase(), kunci);
};

helloWorlds();
helloArrows();

fungsiPanahan('kunci gembok aja');

const rollDadu = () => {
    const hasilRoll = Math.floor(Math.random() * 6);
    return hasilRoll;
};

function jalankanRollDadu(jumlahRoll = 10) {
    for (let i = 0; i < jumlahRoll; i += 1) {
        const hasilRolls = rollDadu();
        console.log(hasilRolls);
    }
}

jalankanRollDadu();

function rataRata(valueA = 0, valueB = 0) {
    return (valueA + valueB) / 2;
}
console.log('RATA-RATA ', rataRata(8.4, 17));

const isUnguWarna = (colors = '') => {
    // if (colors.toLowerCase() === 'ungu') {
    //     return true;
    // }
    // return false;
    return colors.toLowerCase() === 'ungu';
};

console.log('hasil warna ', isUnguWarna('biru'));

function cariWarna(arraysWarna = []) {
    for (let i = 0; i < arraysWarna.length; i += 1) {
        const warna = arraysWarna[i];
        console.log('WARNA DICARI', warna);
        if (warna === 'coklat' || warna === 'ungu') {
            return true;
        }
    }
    return false;
}

const hasil = cariWarna(['biru', 'hijau', 'coklat']);
console.log('HASIL PENCARIAN', hasil);
