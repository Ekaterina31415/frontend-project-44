import getRandomInt from '../utils.js';

const generateFunction = () => {
  
  const operations = ['+', '-', '*'];
  const result = [];
  
  const randomIndex = getRandomInt(0, 2);
  const randomNum1 = getRandomInt(0, 10);
  const randomNum2 = getRandomInt(0, 10);
  
  const expression = `${randomNum1} ${operations[randomIndex]} ${randomNum2}`;
  result.push(expression);
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

  result.push(answer);

  return result;
  
};

export default generateFunction;
