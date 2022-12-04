import { readFileSync } from 'node:fs';
const input = readFileSync('input.txt').toString();

const ids = input.split('\n')
    .map(ranges => ranges.split(','))
    .map(ranges => ranges.map(range => range.split('-').map(id => parseInt(id))));

let sum = 0;

ids.forEach(([elve1, elve2]) => {
    const [from1, to1] = elve1;
    const [from2, to2] = elve2;

    if (from1 < from2) {
        if (to1 >= from2) sum++;
    }
    else if (to2 >= from1) sum++;
});

console.log(sum);