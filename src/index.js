// тут логика всех игр
import readlineSync from 'readline-sync';

const userAnswerCheck = (expressions, answers, name) => {
  let levelPass = true;
  for (let i = 0; i < 3; i += 1) {
    if (levelPass === false) {
      break;
    }
    console.log(expressions[i]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === Number(answers[i])) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[i]}'.`);
      console.log(`Let's try again, ${name}!`);
      levelPass = false;
    }
  }
  if (levelPass) {
    console.log(`Congratulations, ${name}!`);
  }
}

const getRandomInt = (bottom, top) => {
  const min = Math.ceil(bottom);
  const max = Math.floor(top);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {userAnswerCheck, getRandomInt};
