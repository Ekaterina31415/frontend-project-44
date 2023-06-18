#!/usr/bin/env nodejs

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let levelPass = true;

for (let i = 0; i < 3; i += 1) {
  if (levelPass === true) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (num % 2 === 0) {
      const rightAnswer = 'yes';
      if (userAnswer === rightAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        levelPass = false;
      }
    } else {
      const rightAnswer = 'no';
      if (userAnswer === rightAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        levelPass = false;
      }
    }
  } else {
    break;
  }
}

if (levelPass === true) {
  console.log(`Congratulations, ${name}!`);
}