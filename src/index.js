// тут логика всех игр
import readlineSync from 'readline-sync';

const userAnswerCheckString = (expressions, answers, name) => {
  let levelPass = true;
  for (let i = 0; i < 3; i += 1) {
    if (levelPass === false) {
      break;
    }
    console.log(expressions[i]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answers[i]) {
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

const userAnswerCheckNumber = (expressions, answers, name) => {
  let levelPass = true;
  for (let i = 0; i < 3; i += 1) {
    if (levelPass === false) {
      break;
    }
    console.log(expressions[i]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === answers[i]) {
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

export { userAnswerCheckString, userAnswerCheckNumber };
