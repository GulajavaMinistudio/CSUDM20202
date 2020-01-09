// OBJECT PROPERTIES
// SHORTHAND OBJECT PROPERTIES
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const getStats = arrays => {
    const nilaimax = Math.max(...arrays);
    const nilaimin = Math.min(...arrays);
    const nilaitotal = arrays.reduce((accums, currents) => {
        return accums + currents;
    });
    const nilairata = nilaitotal / arrays.length;

    return { nilaimax, nilaimin, nilaitotal, nilairata };
};

const getStatsNoShorthand = arrays => {
    const nilaimax = Math.max(...arrays);
    const nilaimin = Math.min(...arrays);
    const nilaitotal = arrays.reduce((accums, currents) => {
        return accums + currents;
    });
    const nilairata = nilaitotal / arrays.length;

    const objectReturn = {
        nilaimax: nilaimax,
        nilaimin: nilaimin,
        nilaitotal: nilaitotal,
        nilairata: nilairata,
    };

    return objectReturn;
};

console.log('OBJECT PROPERTIES SHORTHAND ', getStats(reviews));
console.log('OBJECT PROPERTIES NO SHORTHAND', getStatsNoShorthand(reviews));

// OBJECTCOMPUTED PROPERTY
const hakAkses = 'bypassing';
const namaOrang = 'Will Gislason';
const hakAksesDua = 'transmitting';
const namaOrangDua = 'Claudie Murazik';
const hakAksesTiga = 'copying';
const namaOrangTiga = 'Kaycee Heathcote';

const timCom1 = {
    hakAkses: namaOrang,
};
console.log('BUKAN COMPUTED PROPERTY', timCom1);

const timComp2 = {};
timComp2[hakAkses] = namaOrang;
timComp2[hakAksesDua] = namaOrangDua;
console.log('BUKAN COMPUTED PROPERTY ASSIGNMENT', timComp2);

const timComputedProperties = {
    [hakAkses]: namaOrang,
    [hakAksesDua]: namaOrangDua,
    [hakAksesTiga]: namaOrangTiga,
    [`helloworld${1 + 1}`]: 'nama hello world',
};
console.log('COMPUTED PROPERTY ASSIGNMENT HASIL', timComputedProperties);

const sampelObject = {};

// tambah value ke javascript object
// tanpa computed property
function addProps(object, key, values) {
    const objectNew = { ...object };
    objectNew[key] = values;
    return objectNew;
}

// computed property
const addPropsComputedProperty = (object, key, values) => {
    return {
        ...object,
        [key]: values,
    };
};

const addPropsCompPropsOneLiner = (object, key, values) => ({
    ...object,
    [key]: values,
});

console.log(
    'OBJECT NO COMPUTED  PROPERTY FUNGSI',
    addProps(sampelObject, hakAkses, namaOrangDua),
);

console.log(
    'OBJECT COMPUTED PROPERTY FUNGSI',
    addPropsComputedProperty(sampelObject, hakAksesDua, namaOrangTiga),
    addPropsCompPropsOneLiner(sampelObject, hakAksesDua, namaOrangTiga),
);
