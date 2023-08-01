#!/usr/bin/env nodejs

import readlineSync from 'readline-sync';
import { userAnswerCheckNumber } from '../../src/index.js';
import { getRandomInt } from '../../src/utils.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const expressions = [];
const answers = [];

const gcd = (a, b) => {
  while ((a !== 0) && (b !== 0)) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
}

for (let i = 0; i < 3; i += 1) {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  expressions.push(`Question: ${num1} ${num2}`);
  answers.push(gcd(num1, num2));
}

userAnswerCheckNumber(expressions, answers, name);