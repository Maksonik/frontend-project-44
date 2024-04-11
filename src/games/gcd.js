import getRandomNumber from '../utils.js';
import runGame from '../gameLogic.js';

const description = 'Find the greatest common divisor of given numbers.';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

const genereteRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(NOD(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const runGcdGame = () => {
  runGame(genereteRound, description);
};

export default runGcdGame;
