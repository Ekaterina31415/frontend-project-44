// тут логика всех игр
import readlineSync from 'readline-sync';

const runGame = (generateFunction, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  let levelPass =  true;
  for (let i = 0; i < 3; i += 1) {
    const generateResult = generateFunction();
    console.log(`Question: ${generateResult[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (typeof(generateResult[1]) === 'number') {
      if (Number(userAnswer) === generateResult[1]) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${generateResult[1]}'.`);
        console.log(`Let's try again, ${name}!`);
        levelPass = false;
        break;
      }
    } else if (typeof(generateResult[1]) === 'string') {
      if (userAnswer === generateResult[1]) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${generateResult[1]}'.`);
        console.log(`Let's try again, ${name}!`);
        levelPass = false;
        break;
      }
    }
  }
  
  if (levelPass === true) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default runGame;
