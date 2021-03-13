/* eslint-disable max-classes-per-file */
class Bangun {
    constructor(panjang = 0, lebar = 0, alas = 0, tinggi = 0) {
        this.panjang = panjang;
        this.lebar = lebar;
        this.alas = alas;
        this.tinggi = tinggi;
    }
}

class Segitiga extends Bangun {
    constructor(alas, tinggi) {
        super(0, 0, alas, tinggi);
    }

    hitungLuas() {
        return (this.alas * this.tinggi) / 2;
    }
}

const segitiga = new Segitiga(4, 5);
console.log(segitiga.hitungLuas());
