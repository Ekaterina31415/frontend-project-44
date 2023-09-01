import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';

const calculate = (num1, num2, index) => {
  const operations = ['+', '-', '*'];
  let answer = '';
  switch (operations[index]) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }
  return answer;
};

const generateFunction = () => {
  const operations = ['+', '-', '*'];
  const result = [];
  const randomIndex = getRandomInt(0, 2);
  const randomNum1 = getRandomInt(0, 10);
  const randomNum2 = getRandomInt(0, 10);
  const expression = `${randomNum1} ${operations[randomIndex]} ${randomNum2}`;
  result.push(expression);
  const answer = calculate(randomNum1, randomNum2, randomIndex);
  result.push(answer);

  return result;
};

export { generateFunction, task };
