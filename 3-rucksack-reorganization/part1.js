import { readFileSync } from 'node:fs';
const input = readFileSync('input.txt').toString();

const rucksacks = input.split('\n').map(rs => [rs.slice(0, Math.floor(rs.length / 2)), rs.slice(Math.floor(rs.length / 2))]);

let letters = 'abcdefghijklmnopqrstuvwxyz';
letters += letters.toUpperCase();

const piorityMap = new Map();

for (let i = 0; i < letters.length; i++) {
    piorityMap.set(letters.charAt(i), i + 1);
}

let sum = 0;

rucksacks.forEach(([firstCompartment, secondCompartment]) => {
    for (let i = 0; i < firstCompartment.length; i++) {
        const char = firstCompartment.charAt(i);

        if (secondCompartment.match(char)) {
            sum += piorityMap.get(char);
            break;
        }
    }
});

console.log(sum)

//? moo goo gai pan