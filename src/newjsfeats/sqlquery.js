const promiseQuery = new Promise((resolve, reject) => {
    connection.query(`SELECT id_user FROM user WHERE email = '${email_pelamar}'`, (err,results) => {
        if (err){
            reject(err);
        }
        resolve(results);
    });
});

async function queryUser() {
    const results = await promiseQuery;
    console.log(results);
}