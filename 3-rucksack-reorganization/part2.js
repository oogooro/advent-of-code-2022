import { readFileSync } from 'node:fs';
const input = readFileSync('input.txt').toString();

const rucksacks = input.split('\n');

const groups = [];

rucksacks.forEach((rucksack, index) => {
    const groupIndex = Math.floor(index / 3);

    if (!Array.isArray(groups[groupIndex])) groups[groupIndex] = [rucksack];
    else groups[groupIndex].push(rucksack);
});

let letters = 'abcdefghijklmnopqrstuvwxyz';
letters += letters.toUpperCase();

const piorityMap = new Map();

for (let i = 0; i < letters.length; i++) {
    piorityMap.set(letters.charAt(i), i + 1);
}

let sum = 0;

groups.forEach((group) => {
    const letterStats = new Map();
    group.forEach((groupRucksack) => {
        let uniqeLetters = '';

        for (let i = 0; i < groupRucksack.length; i++) {
            const char = groupRucksack.charAt(i);
            if (uniqeLetters.includes(char)) continue;
            uniqeLetters += char;
            if (!letterStats.has(char)) letterStats.set(char, 1);
            else letterStats.set(char, letterStats.get(char) + 1);
        }
    });

    letterStats.forEach((v, k) => { if (v === 3) sum += piorityMap.get(k) });
});

console.log(sum);