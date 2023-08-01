import readlineSync from 'readline-sync';
import { userAnswerCheckString } from '../../src/index.js';
import { getRandomInt } from '../../src/utils.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

const expressions = [];
const answers = [];

for (let i = 0; i < 3; i += 1) {
  const num = getRandomInt(3, 29);
  expressions.push(num);
  let isNumPrime = true;
  for (let j = 2; j < num / 2; j += 1) {
    if (num % j === 0) {
      isNumPrime = false;
    }
  }
  if (isNumPrime === true) {
    answers.push('yes');
  } else {
    answers.push('no');
  }
}

userAnswerCheckString(expressions, answers, name);