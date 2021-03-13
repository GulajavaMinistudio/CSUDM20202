// Semua fungsi callback di fs module telah menjadi Promise di Node JS 12.x LTS .
// Cocok untuk operasi baca tulis di backend berbasis Node JS
// Docs https://nodejs.org/api/fs.html
// Wes Bos Tweets https://twitter.com/wesbos/status/1233031376032739330
// ES Module
import { promises as fs } from 'fs';
// Common JS
const { promises: fsprom } = require('fs');

// Contoh penggunaan dengan async await
const prosesFileData = async (urlpath) => {
    try {
        await fs.writeFile(urlpath);
        await fsprom.mkdir(urlpath);
    } catch (err) {
        console.warn(err);
    }
};

function prosesFileDataLain(urlpath) {
    // Cara lama dengan callback
    fs.readFile(urlpath, (err, data) => {
        // proses selanjutnya
    });

    // Dengan menggunakan Promise API
    fs.promises
        .readFile(urlpath)
        .then((data) => {
            // proses data selanjutnya
        })
        .catch((err) => {
            // proses error berikutnya
        });
}
