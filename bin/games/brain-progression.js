#!/usr/bin/env nodejs

import { generateFunction, task } from '../../src/games/brain-progression.js';
import runGame from '../../src/index.js';

runGame(generateFunction, task);
