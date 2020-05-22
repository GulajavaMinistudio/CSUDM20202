let responseJson = [];

const showDataAPIs = () => {
    console.log('response data sampel ', responseJson);
};

const getDataAPIs = () => {
    // contoh ambil data dari API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(result => {
            responseJson = result;
            showDataAPIs();
        })
        .catch(err => {
            console.log(err);
        });
};

getDataAPIs();
