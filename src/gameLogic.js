import readlineSync from 'readline-sync';

export const roundsNumber = 3;

const runGame = (roundsGenerator, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = roundsGenerator();
  }
  
  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, answer] = rounds[i];
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
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

