import getRandomInt from '../utils.js';

const brainGame = () => {
  let element = getRandomInt(0, 99);
  const diff = getRandomInt(1, 4);
  const numbers = [];
  for (let j = 0; j < 10; j += 1) {
    numbers.push(element);
    element += diff;
  }

  const index = getRandomInt(0, 9);
  const answer = numbers[index];
  numbers[index] = '..';
  const progression = numbers.join(' ');

  const result = [];
  result.push(progression);
  result.push(answer);

  return result;
};

export default brainGame;
