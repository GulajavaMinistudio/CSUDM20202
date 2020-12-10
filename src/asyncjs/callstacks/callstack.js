console.log(1);
console.log(2);

setTimeout(() => {
    // Contoh simulasi kode yang dieksekusi secara asinkronus
    console.log(3);
}, 2000);

console.log(4);
console.log(5);

// Hasilnya adalah 1,2,4,5,3

let resultData = [];

function setDataTodo() {
    if (resultData) {
        // Hasil result pasti tersedia, dan bukan undefined
        // setel hasil eksekusi data ke DOM HTML...
    }
}

function getDataTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((result) => {
            // Salah satu solusi kode asinkronus, panggil fungsi lain
            // Setelah selesai eksekusi
            resultData = result;
            setDataTodo();
        })
        .catch((error) => {
            console.log(error);
            setDataTodo([]);
        });

    // Kesalahan yang sering ditemui pemula adalah ini
    // Hasil pasti selalu [], karena eksekusi Fetch di atas belum selesai
    // Fetch bersifat asinkronus, sehingga kode di bawah ini pasti jalan duluan
    console.log(resultData);
}

getDataTodo();
