// Dynamic Forms
const ulElement = document.querySelector('#listproduk');
const buttonAddElement = document.querySelector('#add_button');
const buttonTotalElement = document.querySelector('#total_button');
let idUrutan = 0;
const arrayUrutan = [];

const deleteFormulir = event => {
    const targetElement = event.target;
    console.log(targetElement);
};

const listenerButtonDelete = event => {
    console.log(event);
    deleteFormulir(event);
};

const addFormulir = () => {
    const liElement = document.createElement('li');
    const inputHargaElement = document.createElement('input');
    const inputNamaProdukElement = document.createElement('input');
    const buttonDeleteInput = document.createElement('button');

    inputNamaProdukElement.setAttribute('type', 'text');
    inputNamaProdukElement.setAttribute('class', 'input_dinamis');

    inputHargaElement.setAttribute('type', 'number');
    inputHargaElement.setAttribute('class', 'input_dinamis');

    buttonDeleteInput.innerText = 'Hapus';
    buttonDeleteInput.addEventListener('click', listenerButtonDelete);

    liElement.append(inputHargaElement, buttonDeleteInput);
    ulElement.append(liElement);

    idUrutan += 1;
    arrayUrutan.push(idUrutan);
};

const kalkulasiTotal = () => {};

const initListener = () => {
    buttonAddElement.addEventListener('click', () => {
        addFormulir();
    });

    buttonTotalElement.addEventListener('click', () => {
        kalkulasiTotal();
    });
};

initListener();
