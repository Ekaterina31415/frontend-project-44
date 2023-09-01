#!/usr/bin/env nodejs

import runGame from '../../src/index.js';
import { generateFunction, task } from '../../src/games/brain-even.js';

runGame(generateFunction, task);
