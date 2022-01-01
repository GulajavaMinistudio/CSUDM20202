// Auto generate new year
const getTahunCopyright = (strMessage) => {
    const year = new Date().getFullYear();
    return `${strMessage} @ ${year}`;
};

console.log(getTahunCopyright('Kucingmeong'));
// Kucingmeong @ 2022
