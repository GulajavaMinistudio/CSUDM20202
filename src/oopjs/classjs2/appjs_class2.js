// CLASS OOP JAVASCRIPT
// Menggunakan class di JavaScript
class Color {
    constructor(red, green, blue, name) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.colorName = name;
    }

    greetWarna() {
        return `Halo dari kumpulan warna ${this.colorName}`;
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
}

const warnaSatu = new Color(255, 67, 89, 'Tomat');
console.log(warnaSatu, warnaSatu.greetWarna());
console.log('Get warna RGB', warnaSatu.getRgbColor());
console.log('Get warna HEX', warnaSatu.getHexColors());

const warnaHijau = new Color(33, 191, 115, 'Melon');
console.log('Warna Hex hijau', warnaHijau.getHexColors());

// Tes warna yang dibuat di dalam class
document.body.style.backgroundColor = `${warnaHijau.getHexColors()}`;
