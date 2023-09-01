import getRandomInt from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = (expression) => {
  let answer = '';
  if (expression % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};

const generateFunction = () => {
  const expression = getRandomInt(1, 99);
  const answer = getAnswer(expression);
  return [expression, answer];
};

export { generateFunction, task };
