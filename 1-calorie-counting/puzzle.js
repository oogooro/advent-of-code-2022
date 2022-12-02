import { readFileSync } from 'node:fs';

const calories = readFileSync('./calories.txt').toString();

const elves = calories.split('\n\n').map(c => c.split('\n').map(ec => parseInt(ec)));

const sums = [];
elves.forEach(e => {
    const sum = e.reduce((acc, current) => acc + current, 0);
    sums.push(sum);
});

sums.sort((a, b) => b - a);

console.log(sums[0]);
console.log(sums.splice(0, 3).reduce((acc, current) => acc + current, 0));