/* eslint-disable no-restricted-syntax */
// OBJECTMETHODS LATIHAN MEMAKAI OBJECT METHODS
const buttonGetSatuKartu = document.getElementById('get_kartu');
const buttonGetBanyakKartu = document.getElementById('get_banyak_kartu');
const buttonBuatDeck = document.getElementById('buat_kartu');
const buttonAcakKartu = document.getElementById('acak_kartu');
const resultElement = document.getElementById('result');
const deckElement = document.getElementById('deck_kartu');
const deckDiambilElement = document.getElementById('deck_diambil');

const deckKartuApps = {
    deckKartuHasil: [],
    deckKartuDiambil: [],
    jenisKartu: ['Hati', 'Wajik', 'Sekop', 'Keriting'],
    nomorKartu: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    createDeckKartu() {
        this.deckKartuHasil = [];
        const { jenisKartu, nomorKartu, deckKartuHasil } = this;
        const valueSplit = nomorKartu.split(',');

        for (const nokartu of valueSplit) {
            for (const jeniskartu of jenisKartu) {
                const deckKartuItem = { nokartu, jeniskartu };
                deckKartuHasil.push(deckKartuItem);
            }
        }

        this.deckKartuDiambil = [];
        this.deckKartuHasil = deckKartuHasil;
    },
    drawSatuKartuDeck() {
        // ambil kartu dari deck tersedia
        const kartuDiambil = this.deckKartuHasil.pop();
        this.deckKartuDiambil.push(kartuDiambil);
        return kartuDiambil;
    },
    drawBanyakKartuDeck(jumlahKartu) {
        const kartuDeckAmbil = [];
        for (let i = 0; i < jumlahKartu; i += 1) {
            const drawnCard = this.drawSatuKartuDeck();
            kartuDeckAmbil.push(drawnCard);
        }
        return kartuDeckAmbil;
    },
    shuffleAcakKartu(arrays) {
        const arraykartu = arrays;
        // acak kartu di deck
        const panjangArray = arraykartu.length;
        for (let i = panjangArray - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [arraykartu[i], arraykartu[j]] = [arraykartu[j], arraykartu[i]];
        }

        this.deckKartuHasil = arraykartu;
    },
    shuffleKartu(arrays) {
        // Fisher yates shuffle
        const arraykartu = arrays;
        let panjangArray = arraykartu.length;
        while (panjangArray) {
            const i = Math.floor(Math.random() * (panjangArray -= 1));
            [arraykartu[panjangArray], arraykartu[i]] = [
                arraykartu[i],
                arraykartu[panjangArray],
            ];
        }
        return arraykartu;
    },
};

// AKSI TOMBOL UNTUK PENGAMBILAN KARTU DAN LAIN LAIN
buttonBuatDeck.addEventListener('click', () => {
    deckKartuApps.createDeckKartu();
    const deckKartu = deckKartuApps.deckKartuHasil;
    deckElement.textContent = JSON.stringify(deckKartu);

    deckDiambilElement.textContent = '';
    resultElement.textContent = '';
});

buttonGetSatuKartu.addEventListener('click', () => {
    const kartu = deckKartuApps.drawSatuKartuDeck();
    const stringHasil = JSON.stringify(kartu);
    resultElement.textContent = stringHasil;

    const deckDiambil = deckKartuApps.deckKartuDiambil;
    deckDiambilElement.textContent = JSON.stringify(deckDiambil);

    const deckKartuSekarang = deckKartuApps.deckKartuHasil;
    deckElement.textContent = JSON.stringify(deckKartuSekarang);
});

buttonGetBanyakKartu.addEventListener('click', () => {
    const kartuBanyak = deckKartuApps.drawBanyakKartuDeck(4);
    const stringHasil = JSON.stringify(kartuBanyak);
    resultElement.innerHTML = stringHasil;

    const deckDiambil = deckKartuApps.deckKartuDiambil;
    deckDiambilElement.textContent = JSON.stringify(deckDiambil);

    const deckKartuSekarang = deckKartuApps.deckKartuHasil;
    deckElement.textContent = JSON.stringify(deckKartuSekarang);
});

buttonAcakKartu.addEventListener('click', () => {
    deckKartuApps.shuffleAcakKartu(deckKartuApps.deckKartuHasil);
    const deckAcakKartu = deckKartuApps.deckKartuHasil;
    deckElement.textContent = JSON.stringify(deckAcakKartu);
});

// JIKA INGIN DIBUAT MODULAR DENGAN BANYAK PLAYER DECK
const createDeckKartuPlayer = () => {
    return {
        deckKartuHasil: [],
        deckKartuDiambil: [],
        jenisKartu: ['Hati', 'Wajik', 'Sekop', 'Keriting'],
        nomorKartu: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        createDeckKartu() {
            this.deckKartuHasil = [];
            const { jenisKartu, nomorKartu, deckKartuHasil } = this;
            const valueSplit = nomorKartu.split(',');

            for (const nokartu of valueSplit) {
                for (const jeniskartu of jenisKartu) {
                    const deckKartuItem = { nokartu, jeniskartu };
                    deckKartuHasil.push(deckKartuItem);
                }
            }

            this.deckKartuDiambil = [];
            this.deckKartuHasil = deckKartuHasil;
        },
        drawSatuKartuDeck() {
            // ambil kartu dari deck tersedia
            const kartuDiambil = this.deckKartuHasil.pop();
            this.deckKartuDiambil.push(kartuDiambil);
            return kartuDiambil;
        },
        drawBanyakKartuDeck(jumlahKartu) {
            const kartuDeckAmbil = [];
            for (let i = 0; i < jumlahKartu; i += 1) {
                const drawnCard = this.drawSatuKartuDeck();
                kartuDeckAmbil.push(drawnCard);
            }
            return kartuDeckAmbil;
        },
        shuffleAcakKartu(arrays) {
            const arraykartu = arrays;
            // acak kartu di deck
            const panjangArray = arraykartu.length;
            for (let i = panjangArray - 1; i > 0; i -= 1) {
                const j = Math.floor(Math.random() * (i + 1));
                [arraykartu[i], arraykartu[j]] = [arraykartu[j], arraykartu[i]];
            }

            this.deckKartuHasil = arraykartu;
        },
        shuffleKartu(arrays) {
            // Fisher yates shuffle
            const arraykartu = arrays;
            let panjangArray = arraykartu.length;
            while (panjangArray) {
                const i = Math.floor(Math.random() * (panjangArray -= 1));
                [arraykartu[panjangArray], arraykartu[i]] = [
                    arraykartu[i],
                    arraykartu[panjangArray],
                ];
            }
            return arraykartu;
        },
    };
};

const deckKartuPlayerA = createDeckKartuPlayer();
deckKartuPlayerA.createDeckKartu();
console.log(deckKartuPlayerA);
