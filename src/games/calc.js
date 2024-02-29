import { getRandomNumber } from "../utils.js";
import runGameLogic, {roundsNumber} from "../gameLogic.js";

const description = 'What is the result of the expression?'

const getRandomOperator = () => {
    const operators = ['+', '-', '*']
    const randomOperatorIndex = getRandomNumber(0, operators.length -1)
    return operators[randomOperatorIndex]
}

const calculate = (operator, firstNumber, secondNumber) => {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*':
            return firstNumber * secondNumber
        default:
            return Error('Incorrect operator')
    }
}

const genereteRound = () => {
    const firstNumber = getRandomNumber(1, 100)
    const secondNumber = getRandomNumber(1, 100)
    const operator = getRandomOperator()
    const question = `${firstNumber} ${operator} ${secondNumber}`
    const correctAnswer = String(calculate(operator,firstNumber,secondNumber))
    return [question, correctAnswer]
}

const runCalcGame = () => {
    const rounds = []
    for (let i = 0; i < roundsNumber; i += 1) {
        rounds[i] = genereteRound()
    }
    return runGameLogic(rounds,description)
}

export default runCalcGame