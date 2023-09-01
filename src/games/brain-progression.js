import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';

const getNumbers = () => {
  let element = getRandomInt(0, 99);
  const diff = getRandomInt(1, 4);
  const numbers = [];
  for (let j = 0; j < 10; j += 1) {
    numbers.push(element);
    element += diff;
  }
  return numbers;
};

const generateFunction = () => {
  const numbers = getNumbers();
  const index = getRandomInt(0, 9);
  const answer = numbers[index];
  numbers[index] = '..';
  const progression = numbers.join(' ');
  return [progression, answer];
};

export { generateFunction, task };
