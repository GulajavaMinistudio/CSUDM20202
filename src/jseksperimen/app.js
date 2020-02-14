/* eslint-disable no-restricted-syntax */
// DATALIST HTML Element dengan data dinamis
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
const gantiDataHewan = listhewan => {
    const listOptions = [];
    for (const hewan of listhewan) {
        const optionEl = document.createElement('option');
        optionEl.value = hewan;
        listOptions.push(optionEl);
    }

    // hapus element options yang lama
    const dataListHewanEl = document.querySelector('#list-nama');
    const childOptionsDelete = dataListHewanEl.querySelectorAll('option');

    childOptionsDelete.forEach(el => {
        dataListHewanEl.removeChild(el);
    });

    // tambah yang baru
    dataListHewanEl.append(...listOptions);
};

// Ganti setelah 5 detik
setTimeout(() => {
    gantiDataHewan(['Katak', 'Kecebong', 'Kijang']);
}, 5000);
