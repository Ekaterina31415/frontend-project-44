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

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(1, 99);
    expressions.push(randomNum);
    if (randomNum % 2 === 0) {
      answers.push('yes');
    } else {
      answers.push('no');
    }
  }
  if (typeof answers[0] === 'string') {
    userAnswerCheckString(expressions, answers, name);
  } else {
    userAnswerCheckNumber(expressions, answers, name);
  }
};

export default brainGame;
