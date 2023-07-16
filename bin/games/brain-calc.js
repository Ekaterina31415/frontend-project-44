#!/usr/bin/env nodejs

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

let levelPass = true;

for (let i = 0; i < 3; i += 1) {
  if (levelPass === false) {
    break;
  }

  const getRandomInt = (bottom, top) => {
    const min = Math.ceil(bottom);
    const max = Math.floor(top);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const mathOperations = ['+', '-', '*'];
  const operation = mathOperations[getRandomInt(0, 2)];

  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);

  const expression = `${num1} ${operation} ${num2}`;

  let answer = '';

  switch (operation) {
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

  console.log(expression);
  const userAnswer = readlineSync.question('Your answer: ');

  if (Number(userAnswer) === Number(answer)) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${name}!`);
    levelPass = false;
  }
}

if (levelPass) {
  console.log(`Congratulations, ${name}!`);
}