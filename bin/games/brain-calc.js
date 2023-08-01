#!/usr/bin/env nodejs

import readlineSync from 'readline-sync';
import { userAnswerCheckNumber } from '../../src/index.js';
import { getRandomInt } from '../../src/utils.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const expressions = [];
const answers = [];
const operations = ['+', '-', '*'];

for (let i = 0; i < 3; i += 1) {
  const randomIndex = getRandomInt(0, 2);
  const randomNum1 = getRandomInt(0, 10);
  const randomNum2 = getRandomInt(0, 10);
  expressions.push(`${randomNum1} ${operations[randomIndex]} ${randomNum2}`);
  let answer = '';
  switch (operations[randomIndex]) {
    case '+':
      answer = randomNum1 + randomNum2;
      break;
    case '-':
      answer = randomNum1 - randomNum2;
      break;
    case '*':
      answer = randomNum1 * randomNum2;
      break;
    default:
      break;
  }
  answers.push(answer);
}

userAnswerCheckNumber(expressions, answers, name);