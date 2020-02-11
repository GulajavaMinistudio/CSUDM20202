/* eslint-disable max-classes-per-file */
// SUBCLASS EXTENDS SUPER
// Menggunakan subclass inheritance di JavaScript
class HewanPeliharaan {
    constructor(nama, umur) {
        console.log('Di constructor hewan peliharan');
        this.stringNama = nama;
        this.stringUmur = umur;
    }

    fungsiMakan() {
        return `Hewan ini ${this.stringNama} sedang makan`;
    }
}

class Kucing extends HewanPeliharaan {
    constructor(nama, umur, hobi = 'tidur') {
        // this.stringNama = nama;
        // this.stringUmur = umur;
        // this.stringHobi = hobi;
        console.log('Di constructor kucing');

        // Panggil super untuk mengirim ke kelas utama
        super(nama, umur);
        this.stringHobi = hobi;
    }

    fungsiBersuara() {
        return `Meonggg....`;
    }
}

class Ikan extends HewanPeliharaan {
    fungsiBersuara() {
        return `Blubuk blubuk blubuk`;
    }

    // Jika ada nama kelas yang sama, maka isinya akan diganti
    // dengan fungsi dari kelas yang menurunkannya
    fungsiMakan() {
        return `Blubuk kelas parent di ambil alih blubuk ini`;
    }
}

const kucingLiar = new Kucing('Norang', 2);
console.log(kucingLiar);

// Dapat mengakses parameter dan fungsi kelas yang diturunkan
const ikanMas = new Ikan('Lohan', 4);
console.log(ikanMas.fungsiMakan());

class NilaiUjian {
    constructor(stringNilaiUTS, stringNilaiUAS) {
        this.stringNilaiUTS = stringNilaiUTS;
        this.stringNilaiUAS = stringNilaiUAS;
        this.nilaiFinal = 0.0;

        this.kalkulasiNilaiSekolah();
    }

    get numericNilaiUTS() {
        return parseFloat(this.stringNilaiUTS);
    }

    get numericNilaiUAS() {
        return parseFloat(this.stringNilaiUAS);
    }

    set numericRataRata(nilaiRata) {
        this.nilaiFinal = nilaiRata;
    }

    get numericRataRata() {
        return this.nilaiFinal;
    }

    kalkulasiNilaiSekolah() {
        this.numericRataRata =
            (this.numericNilaiUAS + this.numericNilaiUTS) / 2;
    }
}

const nilaiSaya = new NilaiUjian(70, 80);
const nilaiMataKuliah = nilaiSaya.numericRataRata;
console.log('Nilai ujian saya', nilaiMataKuliah);
