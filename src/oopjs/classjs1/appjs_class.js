// OBJECTPROTOTYPE Mengenal Prototype di JavaScript
// eslint-disable-next-line no-extend-native
// String.prototype.helloKucing = () => {
//     console.log('Hello Kucing');
// };

// Prototype adalah template object dan template fungsi
// Yang bisa dipakai di fungsi yang menurunkan atau inherit
// Object dengan prototipe tersebut

// eslint-disable-next-line no-extend-native
String.prototype.meongKucing = function() {
    console.log(this);
    const besar = this.toUpperCase();
    return `${besar}!!! Meong keras sekali`;
};

// eslint-disable-next-line no-extend-native
String.prototype.hurufKecilSemua = function() {
    return `${this.toLowerCase()}`;
};

const stringTes = 'Kucing Proto';
console.log(stringTes.meongKucing());

console.log('HURUF BESAR SEMUA JADI KECIL'.hurufKecilSemua());

// Pengenalan OOP
// const navColor = new Color('carrot', [230, 126, 34]);
const hexColors = (red, green, blue) => {
    // eslint-disable-next-line no-bitwise
    return `#${((1 << 24) + (red << 16) + (green << 8) + blue)
        .toString(16)
        .slice(1)}`;
};

function rgbs(red, green, blue) {
    return `rgb(${red}, ${green}, ${blue})`;
}

console.log(hexColors(255, 100, 25));
console.log(rgbs(255, 100, 25));

// FACTORYFUNCTION Contoh penggunaan Factory Function
function buatWarna(reds, greens, blues) {
    const color = {};

    color.red = reds;
    color.green = greens;
    color.blue = blues;

    color.rgbs = function() {
        const { red, green, blue } = this;
        return `rgb(${red}, ${green}, ${blue})`;
    };

    color.hexs = function() {
        const { red, green, blue } = this;
        // eslint-disable-next-line no-bitwise
        return `#${((1 << 24) + (red << 16) + (green << 8) + blue)
            .toString(16)
            .slice(1)}`;
    };

    return color;
}

const warnaObject = buatWarna(255, 100, 25);
console.log('Warna Object OOP', warnaObject.rgbs());
console.log('WARNA Hex', warnaObject.hexs());

const warnaUngu = buatWarna(225, 90, 30);
console.log('Warna Ungu Tes Hex', warnaUngu.hexs());

const warnaHitam = buatWarna(0, 0, 0);
console.log('Warna Hitam', warnaHitam.hexs(), warnaHitam.rgbs());

// ====================================================
// CONSTRUCTOR FUNCTION DI JAVASCRIPT
// Mengunakan Constructor function untuk membuat object
// Dengan menggunakan keyword new

// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
function Colors(red, green, blue) {
    this.reds = red;
    this.greens = green;
    this.blues = blue;

    // bukan dengan cara ini menambahkan fungsi ke dalam
    // kelas Colors
    // this.rgbs = function() {
    //     const { reds, greens, blues } = this;
    //     return `rgb(${reds}, ${greens}, ${blues})`;
    // };
}

// OBJECTPROTOTYPE FUNCTION
// Menambahkan fungsi ke dalam Object Function Colors di Atas
Colors.prototype.getRgbs = function() {
    const { reds, greens, blues } = this;
    return `rgb(${reds}, ${greens}, ${blues})`;
};

// Tidak bisa menggunakan Arrow function
Colors.prototype.getHexs = function() {
    const { reds, greens, blues } = this;
    // eslint-disable-next-line no-bitwise
    return `#${((1 << 24) + (reds << 16) + (greens << 8) + blues)
        .toString(16)
        .slice(1)}`;
};

Colors.prototype.getRgba = function(alphas = 1.0) {
    const { reds, greens, blues } = this;
    return `rgba(${reds}, ${greens}, ${blues}, ${alphas})`;
};

Colors.prototype.getKataWarna = function() {
    const { reds, greens, blues } = this;
    return `Warna yang tersedia ${reds}, ${greens}, ${blues}`;
};

Colors.prototype.tambahAngka = function(nilaiA, nilaiB) {
    return nilaiA + nilaiB;
};

const coloran = new Colors(255, 100, 25);

console.log('Constructor Function', coloran);
console.log('Constructor Methods', coloran.getRgbs());
console.log('Constructor Get Kata Warna', coloran.getKataWarna());

const warnaBaru1 = new Colors(40, 50, 60);
console.log('Fungsi di Color', warnaBaru1.tambahAngka(10, 6));
console.log('Constructor Methods', warnaBaru1.getKataWarna());

const warnaBaruHitam = new Colors(100, 0, 0);
console.log('Warna baru hitam ', warnaBaruHitam.getHexs());

console.log('Warna baru hitam rgba', warnaBaruHitam.getRgba(0.5));

const warnaBaruHijau = new Colors(40, 255, 60);
const kodeWarna = warnaBaruHijau.getRgba(0.3);

const divElement = document.querySelector('#warnademo');
divElement.style.backgroundColor = kodeWarna;
