import readlineSync from 'readline-sync';
import { userAnswerCheck } from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const expressions = [];
const answers = [];

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

for (let i = 0; i < 3; i += 1) {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  expressions.push(`${num1} ${num2}`);
  answers.push(gcd(num1, num2));
}

userAnswerCheck(expressions, answers, name);