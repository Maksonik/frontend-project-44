import getRandomNumber from '../utils.js';
import runGameLogic, { roundsNumber } from '../gameLogic.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const hideElement = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = '..';
  return hiddenProgression.join(' ');
};

const genereteRound = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(start, step, lengthProgression);
  const hiddenIndex = getRandomNumber(0, lengthProgression - 1);
  const question = hideElement(progression, hiddenIndex);
  const answer = String(start + step * hiddenIndex);
  return [question, answer];
};

const runProgressionGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = genereteRound();
  }
  return runGameLogic(rounds, description);
};

export default runProgressionGame;
