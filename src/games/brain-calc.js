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
  if (typeof answers[0] === 'string') {
    userAnswerCheckString(expressions, answers, name);
  } else {
    userAnswerCheckNumber(expressions, answers, name);
  }
};

export default brainGame;
