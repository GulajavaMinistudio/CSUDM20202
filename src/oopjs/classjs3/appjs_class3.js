/* eslint-disable max-classes-per-file */
// CLASS JS latihan menggunakan class di JavaScript

class Color {
    constructor(red, green, blue, name) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.colorName = name;

        this.calcHSL();
    }

    greetWarna() {
        return `Halo dari kumpulan warna ${this.colorName}`;
    }

    static greetStaticWarna() {
        console.log('Warna static halo');
    }

    getHslColor() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    getHslColorOpposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }

    fullSaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    getInnerRgb() {
        const { red, green, blue } = this;
        return `${red}, ${green}, ${blue}`;
    }

    getRgbColor() {
        return `rgb(${this.getInnerRgb()})`;
    }

    getHexColors() {
        const { red, green, blue } = this;
        // eslint-disable-next-line no-bitwise
        return `#${((1 << 24) + (red << 16) + (green << 8) + blue)
            .toString(16)
            .slice(1)}`;
    }

    getRgba(alpha = 1.0) {
        return `rgba(${this.getInnerRgb()}, ${alpha})`;
    }

    calcHSL() {
        let { red: r, green: g, blue: b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        const cmin = Math.min(r, g, b);
        const cmax = Math.max(r, g, b);
        const delta = cmax - cmin;
        let h = 0;
        let s = 0;
        let l = 0;
        if (delta === 0) {
            h = 0;
        } else if (cmax === r) {
            // Red is max
            h = ((g - b) / delta) % 6;
        } else if (cmax === g) {
            // Green is max
            h = (b - r) / delta + 2;
        } else {
            // Blue is max
            h = (r - g) / delta + 4;
            h = Math.round(h * 60);
        }
        // Make negative hues positive behind 360°
        if (h < 0) {
            h += 360;
        }
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const warnaHijau = new Color(33, 191, 115, 'Melon');
console.log(warnaHijau, warnaHijau.getHslColor());

// warnaElement.style.backgroundColor = warnaHijau.getHslColor();

const warnaMerah = new Color(230, 126, 34, 'Carrot');
const warnaElement = document.querySelector('#class_warna');
warnaElement.style.backgroundColor = warnaMerah.getHslColor();

const warnaElementBalik = document.querySelector('#class_warna_balik');
warnaElementBalik.style.backgroundColor = warnaMerah.fullSaturated();

Color.greetStaticWarna();

// EXTENDS CLASS
// SUPER CLASS
// SUBCLASS CLASS

// Menggunakan subclass inheritance di JavaScript
class HewanPeliharaan {
    constructor(nama, umur) {
        this.stringNama = nama;
        this.stringUmur = umur;
    }

    fungsiMakan() {
        return `Hewan ini ${this.stringNama} sedang makan`;
    }
}

class Kucing extends HewanPeliharaan {
    /**
     * @description Kelas kucing peliharaan
     * @param {string} nama nama kucing peliharaan
     * @param {string} umur umur dari peliharaan
     * @param {string} hobi hobi main hewan peliharaan
     */
    constructor(nama, umur, hobi = 'tidur') {
        // Panggil super untuk mengirim ke kelas utama
        // atau parent class
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
        return `Fungsi makan diambil alih oleh fungsi di Ikan`;
    }
}

const kucingLiar = new Kucing('Norang', 2);
console.log(kucingLiar);

// Dapat mengakses parameter dan fungsi kelas yang diturunkan
const ikanMas = new Ikan('Lohan', 4);
console.log(ikanMas.fungsiMakan());
