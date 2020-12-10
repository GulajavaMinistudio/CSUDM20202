const obj = {
    a: { name: 'a' },
    b: { name: 'b' },
    c: { name: 'c' },
};

const arrObj = [];
arrObj.push(obj);

arrObj.forEach((value) => {
    arrObj.push({ b: value.b, a: value.a });
});

console.log(arrObj);
