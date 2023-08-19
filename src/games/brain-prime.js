import getRandomInt from '../utils.js';

const generateFunction = () => {

  const num = getRandomInt(5, 29);
  const expression = num;
  let isNumPrime = true;
  let answer = '';
  for (let j = 2; j < num / 2; j += 1) {
    if (num % j === 0) {
      isNumPrime = false;
    }
  }
  if (isNumPrime === true) {
    answer ='yes';
  } else {
    answer ='no';
  }

  const result = [];
  result.push(expression);
  result.push(answer);

  return result;
};

export default generateFunction;
