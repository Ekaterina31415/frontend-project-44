import getRandomInt from '../utils.js';

const isNumberPrime = (num) => {
  let isNumPrime = true;
  let answer = '';
  for (let j = 2; j < num / 2; j += 1) {
    if (num % j === 0) {
      isNumPrime = false;
    }
  }
  if (isNumPrime === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};

const generateFunction = () => {
  const expression = getRandomInt(5, 29);
  const answer = isNumberPrime(expression);
  return [expression, answer];
};

export default generateFunction;
