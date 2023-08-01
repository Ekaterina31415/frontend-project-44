import readlineSync from 'readline-sync';
import { userAnswerCheckNumber } from '../../src/index.js';
import { getRandomInt } from '../../src/utils.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const progressions = [];
for (let i = 0; i < 3; i += 1) {
  let element = getRandomInt(0, 99);
  const diff = getRandomInt(1, 4);
  const progression = [];
  for (let j = 0; j < 10; j += 1) {
    progression.push(element);
    element += diff;
  }
  progressions.push(progression);
}

const answers = [];
const expressions = [];

for (const progression of progressions) {
  const index = getRandomInt(0, 9);
  answers.push(progression[index]);
  progression[index] = '..';
  expressions.push(progression.join(' '));
}

userAnswerCheckNumber(expressions, answers, name);
