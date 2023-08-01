#!/usr/bin/env nodejs

import readlineSync from 'readline-sync';
import { userAnswerCheckString } from '../../src/index.js';
import { getRandomInt } from '../../src/utils.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const expressions = [];
const answers = [];

for (let i = 0; i < 3; i += 1) {
  const randomNum = getRandomInt(1, 99);
  expressions.push(randomNum);
  if (randomNum % 2 === 0) {
    answers.push('yes');
  } else {
    answers.push('no');
  }
}

userAnswerCheckString(expressions, answers, name);