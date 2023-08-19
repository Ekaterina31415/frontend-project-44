#!/usr/bin/env nodejs

import runGame from '../../src/index.js';
import generateFunction from '../../src/games/brain-prime.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

runGame(generateFunction, task);
