// FOREACH MANIPULASI ARRAY
const bilanganNumber = [20, 21, 22, 23, 24, 25, 26, 27];

bilanganNumber.forEach((value, index, arrays) => {
    console.log('VALUE', value);
    console.log('INDEX', index);
    console.log('ARRAY', arrays);
});

function kuadratTiga(num) {
    console.log('KUADRAT TIGA', num * num * num);
}

bilanganNumber.forEach(kuadratTiga);

const koleksiBukuManipulasi = [];

const koleksiBuku = [
    {
        judul: 'Matematika',
        penulis: ['Pak Guru A', 'Pak Guru B'],
        rating: 4.25,
    },
    {
        judul: 'Bahasa Indonesia',
        penulis: ['Pak Guru AB', 'Pak Guru BC'],
        rating: 5.5,
    },
    {
        judul: 'Sejarah',
        penulis: ['Pak Guru DA', 'Pak Guru DE'],
        rating: 3.15,
    },
];

koleksiBuku.forEach((buku, indeks) => {
    console.log(buku.judul);
    const bukuCopy = JSON.parse(JSON.stringify(buku));
    const judulBuku = bukuCopy.judul.toUpperCase();
    bukuCopy.urutan = indeks + 1;
    bukuCopy.judul = judulBuku;
    koleksiBukuManipulasi.push(bukuCopy);
});

console.log('BUKU HASIL MANIPULASI ', koleksiBukuManipulasi);

// MAP ARRAY UNTUK MENGUBAH ISI ARRAY
const bilanganNumberMap = [20, 21, 22, 23, 24, 25, 26, 27];
const kataMaps = ['cepat', 'lari', 'lompat', 'berhenti', 'tidur'];

function mapArrayKaliDua() {
    const bilanganSudahDikalikan = bilanganNumberMap.map(bilangan => {
        const hasil = bilangan * 2;
        return hasil;
    });

    return bilanganSudahDikalikan;
}

function cekGenapGanjil() {
    const hasilGenapGanjil = bilanganNumberMap.map((numbers, indeks) => {
        const isGenap = numbers % 2 === 0;
        return {
            indeks: indeks,
            nilai: numbers,
            isgenap: isGenap,
        };
    });

    return hasilGenapGanjil;
}

console.log('KALI DUA', mapArrayKaliDua());
console.log('CEK GENAP GANJIL', cekGenapGanjil());

const konversiHurufBesar = () => {
    const mappedHuruf = kataMaps.map(karakter => {
        return karakter.toUpperCase();
    });
    return mappedHuruf;
};

const konversiTitikHuruf = () => {
    const mappedHuruf = kataMaps.map(katas => {
        const stringKataManip = katas.split('').join('.');
        return stringKataManip.toUpperCase();
    });
    return mappedHuruf;
};

function getJudulBuku() {
    const judulBuku = koleksiBuku.map(buku => {
        const judulbuku = buku.judul.toUpperCase();
        return judulbuku;
    });

    return judulBuku;
}

console.log('KONVERSI HURUF BESAR ', konversiHurufBesar());
console.log('KONVERSI HURUF TITIK', konversiTitikHuruf());
console.log('KONVERSI JUDUL BUKU ', getJudulBuku());

// ARROW FUNCTION
const kuadratBilangan = (nilaiX, nilaiY) => {
    return nilaiX * nilaiY;
};

const isGenapBilangan = nilaiBilangan => {
    return nilaiBilangan % 2 === 0;
};

const isGenapOneLine = nilaiBilangan => nilaiBilangan % 2 === 0;

const ganjilGenapBilangan = [20, 21, 22, 23, 24, 25, 26, 27];
const ganjilGenapFuncs = ganjilGenapBilangan.map((bilangan, indeks) => {
    const statusbilangan =
        bilangan % 2 === 0 ? 'bilangan genap' : 'bilangan ganjil';
    return {
        urutan: indeks,
        bilangan: bilangan,
        status: statusbilangan,
    };
});

console.log('KUADRAT BILANGAN', kuadratBilangan(3, 8));
console.log('KUADRAT BILANGAN', isGenapBilangan(8));
console.log('KUADRAT BILANGAN ONE LINE', isGenapOneLine(9));
console.log('KUADRAT BILANGAN ONE LINE', ganjilGenapFuncs);

// FIND ARRAY FIND RETURN NILAI YANG PERTAMA KALI COCOK
const arrayFilm = [
    'Telenovela Latin',
    'Sinetron Ojek',
    'Pahlawan Kesiangan',
    'Cicak dan Buaya',
];

const film = arrayFilm.find(judulfilm => {
    // kembalikan nilai true atau false dengan includes
    const statusFilm = judulfilm.toLowerCase().includes('siang');
    return statusFilm;
});

console.log('FILM DITEMUKAN ', film);
const arrayBuku = [
    {
        judul: 'Matematika',
        penulis: ['Pak Guru A', 'Pak Guru B'],
        rating: 4.25,
    },
    {
        judul: 'Bahasa Indonesia',
        penulis: ['Pak Guru AB', 'Pak Guru BC'],
        rating: 5.5,
    },
    {
        judul: 'Sejarah',
        penulis: ['Pak Guru DA', 'Pak Guru DE'],
        rating: 3.15,
    },
];

const bukuBagus = arrayBuku.find(buku => {
    const isBukuCocok = buku.rating >= 4.5;
    return isBukuCocok;
});

const cariPenulis = arrayBuku.find(buku => {
    const isBukuPenulisCocok = buku.penulis.includes('Pak Guru DA');
    return isBukuPenulisCocok;
});

console.log('BUKU BAGUS ', bukuBagus);
console.log('CARI PENULIS', cariPenulis);

// FILTER ARRAY
// Membuat array baru berdasarkan kondisi yang telah ditentukan
const listBilangan = [34, 35, 67, 54, 109, 102, 32, 9];

const cekBilanganGanjil = (arrays = []) => {
    const arrayGanjil = arrays.filter(nums => {
        const isGanjil = nums % 2 === 1;
        return isGanjil;
    });
    return arrayGanjil;
};

const cekBilanganGenap = (arrays = []) => {
    const arrayGenap = arrays.filter(nums => {
        const isGenap = nums % 2 === 0;
        return isGenap;
    });

    return arrayGenap;
};

function cekBilanganBesar(arrays = []) {
    const bilanganBesarList = arrays.filter(nums => {
        const isBesar = nums > 50;
        return isBesar;
    });

    return bilanganBesarList;
}

console.log('HASIL FILTER GANJIL', cekBilanganGanjil(listBilangan));
console.log('HASIL FILTER GENAP', cekBilanganGenap(listBilangan));
console.log('HASIL FILTER BILANGAN BESAR', cekBilanganBesar(listBilangan));

const arrayBukuBesar = [
    {
        judul: 'Matematika',
        penulis: ['Pak Guru A', 'Pak Guru B'],
        rating: 4.25,
        genres: ['Fiksi'],
    },
    {
        judul: 'Bahasa Indonesia',
        penulis: ['Pak Guru AB', 'Pak Guru BC'],
        rating: 5.5,
        genres: ['Epic'],
    },
    {
        judul: 'Sejarah',
        penulis: ['Pak Guru DA', 'Pak Guru DE'],
        rating: 4.75,
        genres: ['Dongeng'],
    },
    {
        judul: 'Sejarah Kuno',
        penulis: ['Pak Guru DA', 'Pak Guru DE'],
        rating: 4.85,
        genres: ['Dongeng'],
    },
];

const bukuBagusBesar = arrayBukuBesar.filter(buku => {
    return buku.rating > 4.5;
});

const bukuDongengFiksi = arrayBukuBesar.filter(buku => {
    const isBukuDongeng =
        buku.genres.includes('Dongeng') || buku.genres.includes('Epic');
    return isBukuDongeng;
});

const kunciPencarian = 'seja';
const hasilPencarian = arrayBukuBesar.filter(buku => {
    const kuncilowercase = kunciPencarian.toLowerCase();
    const judulbuku = buku.judul.toLowerCase();
    const isCocokBuku = judulbuku.includes(kuncilowercase);
    return isCocokBuku;
});

console.log('BUKU BAGUS ', bukuBagusBesar);
console.log('BUKU DONGENG FIKSI', bukuDongengFiksi);
console.log('BUKU CARI', hasilPencarian);
