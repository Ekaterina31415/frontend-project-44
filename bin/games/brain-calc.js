#!/usr/bin/env nodejs

import generateFunction from '../../src/games/brain-calc.js';
import runGame from '../../src/index.js';

const task = 'What is the result of the expression?';

runGame(generateFunction, task);
