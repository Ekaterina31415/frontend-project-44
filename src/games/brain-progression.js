import getRandomInt from '../utils.js';

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

const brainGame = () => {
  const numbers = getNumbers();
  const index = getRandomInt(0, 9);
  const answer = numbers[index];
  numbers[index] = '..';
  const progression = numbers.join(' ');
  return [progression, answer];
};

export default brainGame;
