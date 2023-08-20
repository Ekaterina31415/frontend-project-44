import getRandomInt from '../utils.js';

const generateFunction = () => {
  const gcd = (a, b) => {
    let first = a;
    let second = b;
    while ((first !== 0) && (second !== 0)) {
      if (first > second) {
        first %= second;
      } else {
        second %= first;
      }
    }
    return first + second;
  };

  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const expression = `${num1} ${num2}`;
  const answer = gcd(num1, num2);

  const result = [];
  result.push(expression);
  result.push(answer);

  return result;
};

export default generateFunction;
