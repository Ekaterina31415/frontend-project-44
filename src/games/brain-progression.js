import readlineSync from 'readline-sync';
import getRandomInt from '../utils.js';
import { userAnswerCheckString, userAnswerCheckNumber } from '../index.js';

const brainGame = (task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

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

  for (let i = 0; i < 3; i += 1) {
    const index = getRandomInt(0, 9);
    answers.push(progressions[i][index]);
    progressions[i][index] = '..';
    expressions.push(progressions[i].join(' '));
  }
  if (typeof answers[0] === 'string') {
    userAnswerCheckString(expressions, answers, name);
  } else {
    userAnswerCheckNumber(expressions, answers, name);
  }
};

export default brainGame;
