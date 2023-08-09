import readlineSync from 'readline-sync';
import getRandomInt from '../utils.js';
import { userAnswerCheckString, userAnswerCheckNumber } from '../index.js';

const brainGame = (task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  const expressions = [];
  const answers = [];

  const gcd = (a, b) => {
    let first = a;
    let second = b;
    while ((first !== 0) && (second !== 0)) {
      if (first > second) {
        first %= second;
      } else {
        second %= first;
      }
    }
    return first + second;
  };

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    expressions.push(`${num1} ${num2}`);
    answers.push(gcd(num1, num2));
  }
  if (typeof answers[0] === 'string') {
    userAnswerCheckString(expressions, answers, name);
  } else {
    userAnswerCheckNumber(expressions, answers, name);
  }
};

export default brainGame;
