// FUNCTION AMBIL KARTU SECARA ACAK
const nilaiKartu = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
];

const logoKartu = ['clubs', 'spades', 'hearts', 'diamond'];

function fungsiAcakKartu(arrayKartu) {
    const panjangArray = arrayKartu.length;
    const indexArray = Math.floor(Math.random() * panjangArray);
    return indexArray;
}

function getKartuAcak() {
    const promiseKartu = new Promise(resolve => {
        const indeksNomorKartu = fungsiAcakKartu(nilaiKartu);
        const nomorKartu = nilaiKartu[indeksNomorKartu];

        const indeksJenisLogoKartu = fungsiAcakKartu(logoKartu);
        const jenisKartuPilihan = logoKartu[indeksJenisLogoKartu];
        const objectKartu = {
            nomor_kartu: nomorKartu,
            jenis_kartu: jenisKartuPilihan,
        };

        resolve(objectKartu);
    });

    promiseKartu
        .then(resultObject => {
            console.log('HASIL ACAK KARTU ', resultObject);
        })
        .catch(err => console.log(err));
}

getKartuAcak();
getKartuAcak();
