/* eslint-disable no-undef */
const promiseQuery = new Promise((resolve, reject) => {
    connection.query(
        `SELECT id_user FROM user WHERE email = '${emailPelamar}'`,
        (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        },
    );
});

async function queryUser() {
    const results = await promiseQuery;
    console.log(results);
}

async function saveDataImage(req, res) {
    const imagesFileNameTemp = [];
    const imageSavedPromise = [];
    const imagesFileNameSavedSuccess = [];

    req.files.images.forEach((file) => {
        const newFilename = `/uploads/${file.fieldname
            .split(' ')
            .join('-')}-${Date.now()}.png`;

        imagesFileNameTemp.push(newFilename);

        const promiseSave = sharp(file.buffer)
            .resize({ width: 640, height: 320 })
            .toFormat('png')
            .png({ quality: 90 })
            .toFile(`./${newFilename}`);

        imageSavedPromise.push(promiseSave);
    });

    // Parallel save
    const resultArrayPromise = await Promise.allSettled(imageSavedPromise);
    resultArrayPromise.forEach((resultStatus, index) => {
        if (resultStatus.status === 'fulfilled') {
            imagesFileNameSavedSuccess.push(imagesFileNameTemp[index]);
        }
    });

    res.status(200).json({
        message: 'Sukses',
        images: imagesFileNameSavedSuccess,
    });
}
