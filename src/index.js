// тут логика всех игр
import readlineSync from 'readline-sync';

const runGame = (generateFunction, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const [expression, answer] = generateFunction();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
