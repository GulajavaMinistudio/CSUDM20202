const fibonacci = (n) => {
    const result = Array.from({ length: n }).reduce(
        (acc, _val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        [],
    );

    return result;
};

console.log(fibonacci(128));
console.log(new Date().getMilliseconds());
