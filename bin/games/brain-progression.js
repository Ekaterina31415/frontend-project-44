#!/usr/bin/env nodejs

import generateFunction from '../../src/games/brain-progression.js';
import runGame from '../../src/index.js';

const task = 'What number is missing in the progression?';

runGame(generateFunction, task);
