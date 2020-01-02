// LOOPING NESTED
for (let i = 0; i <= 10; i += 1) {
    console.log('OUTER LOOP ', i);
    for (let j = 10; j >= 0; j -= 2) {
        console.log('  INNER LOOP ', j);
    }
}

const skorGameboard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2],
];

const panjangArrayGameboard = skorGameboard.length;
let skorGameboardTotal = 0;
for (let i = 0; i < panjangArrayGameboard; i += 1) {
    const arraySkor = skorGameboard[i];
    const panjangArrayNilaiSkor = arraySkor.length;

    for (let j = 0; j < panjangArrayNilaiSkor; j += 1) {
        const skorNilai = arraySkor[j];
        skorGameboardTotal += skorNilai;
    }
}

console.log('SKOR GAMEBOARDS ', skorGameboardTotal);
