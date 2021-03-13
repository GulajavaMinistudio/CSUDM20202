// CALLBACK DI JAVASCRIPT DAN PROMISE

const repeat = (str, times) => {
    let result = '';
    for (let i = 0; i < times; i += 1) {
        result += str;
    }
    return result;
};

const scream = str => {
    return `${str.toUpperCase()}!!!`;
};

const getRantText = phrase => {
    const text = scream(phrase);
    const rant = repeat(text, 8);
    return rant;
};

const makeRant = (phrase, el) => {
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
};
console.log('HELLO!');

makeRant('I hate mayonnaise', document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);
