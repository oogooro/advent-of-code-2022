import { readFileSync } from 'node:fs';

/**
 * SELECTED   POINTS    LETTER
 * Rock         1         A
 * Paper        2         B
 * Scissors     3         C
 * 
 * RESULT     POINTS    LETTER
 * Lose         0         X
 * Draw         3         Y
 * Win          6         Z
 * 
 * SUM = SELECTED + RESULT
 */

const input = readFileSync('input.txt').toString();

const games = input.split('\n').map(game => game.split(' '));

const pointMap = {
    outcome: {
        'X': 0,
        'Y': 3,
        'Z': 6,
    },
    selected: {
        'A': 1,
        'B': 2,
        'C': 3,
    }
}

const beatMap = {
    'X': { // Lose
        'A': 'C',
        'B': 'A',
        'C': 'B',
    },
    'Y': { // Draw
        'A': 'A',
        'B': 'B',
        'C': 'C',
    },
    'Z': { // WIN
        'A': 'B',
        'B': 'C',
        'C': 'A',
    },
}

let sum = 0;

games.forEach(([oponent, outcome]) => {
    const myChoice = beatMap[outcome][oponent];
    sum += pointMap.outcome[outcome] + pointMap.selected[myChoice];
    console.log( oponent, myChoice, outcome, sum );
});

console.log(sum);