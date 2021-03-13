// Component B isinya fetch data
import render from './querycomponents';

let responseJson = [];

const getDataAPIs = () => {
    // contoh ambil data dari API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(result => {
            responseJson = result;
            console.log(responseJson);
            // panggil render data ke html atau
            // fungsi lain untuk olah data ini
            render(responseJson);
        })
        .catch(err => {
            console.log(err);
        });

    // Klo dipanggil disini ya pasti belum dapat hasilnya
    // Karena asinkronus
    console.log(responseJson);
};

getDataAPIs();

const arrayDataAwal = [
    { storerkey: 'qwewqe', storername: '234234' },
    { storerkey: 'qweq', storername: 'qweqwe' },
    { storerkey: '234234', storername: '234234' },
];

const objectData = {};
objectData.data = arrayDataAwal;
console.log(objectData);
