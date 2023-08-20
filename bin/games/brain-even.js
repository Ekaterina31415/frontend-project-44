#!/usr/bin/env nodejs

import runGame from '../../src/index.js';
import generateFunction from '../../src/games/brain-even.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(generateFunction, task);