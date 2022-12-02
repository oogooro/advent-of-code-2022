import { readFileSync } from 'node:fs';

/**
 * SELECTED   POINTS    LETTER
 * Rock         1        A  X
 * Paper        2        B  Y
 * Scissors     3        C  Z
 * 
 * RESULT     POINTS
 * Win          6
 * Draw         3
 * Lose         0
 * 
 * SUM = SELECTED + RESULT
 */

const input = readFileSync('input.txt').toString();

const games = input.split('\n').map(game => game.split(' '));

const pointMap = {
    'A': 1,
    'B': 2,
    'C': 3,
}

const normalMap = {
    'X': 'A',
    'Y': 'B',
    'Z': 'C',
}

const beatMap = {
    'A': 'C',
    'B': 'A',
    'C': 'B',
}

let sum = 0;

games.forEach(([oponent, me]) => {
    me = normalMap[me];
    sum += pointMap[me];
    if (oponent === me) sum += 3;
    else if (oponent === beatMap[me]) sum += 6;
    else sum += 0;
});

console.log(sum);