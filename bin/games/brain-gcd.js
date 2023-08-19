#!/usr/bin/env nodejs

import runGame from '../../src/index.js';
import generateFunction from '../../src/games/brain-gcd.js';

const task = 'Find the greatest common divisor of given numbers.';

runGame(generateFunction, task);
