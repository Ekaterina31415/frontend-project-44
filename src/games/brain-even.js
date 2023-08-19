import getRandomInt from '../utils.js';

const generateFunction = () => {

  const expression = getRandomInt(1, 99);
  let answer = '';

  if (expression % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  const result = [];
  result.push(expression);
  result.push(answer);

  return result;
};

export default generateFunction;
