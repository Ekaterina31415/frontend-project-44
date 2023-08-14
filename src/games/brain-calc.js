import readlineSync from 'readline-sync';
import getRandomInt from '../utils.js';

const generateFunction = () => {
  
  const operations = ['+', '-', '*'];
  let j = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomIndex = getRandomInt(0, 2);
    const randomNum1 = getRandomInt(0, 10);
    const randomNum2 = getRandomInt(0, 10);
    const expression = `${randomNum1} ${operations[randomIndex]} ${randomNum2}`;
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
    
      console.log(`Question: ${expression}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (Number(userAnswer) === answer) {
        console.log('Correct!');
        j += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
        break;
      }
  }

  return j;
  
};

export default generateFunction;
