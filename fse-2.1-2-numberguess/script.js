// this is the student generated file for the number guessing game project
// after reviewing other solutions, most students used traditional (not arrow) functions
// because arrow functions are one-liners, curly braces can be removed, but this looks more readable
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// generate a number 0-9
const generateTarget = () => {
  return Math.floor(Math.random()*10);
};

// arrow functions must be declared before being used, as only traditional functions are hoisted
const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number2-number1);
};

const updateScore = winner => {
  winner === human ? humanScore++ : computerScore++ ;
};

// return closest, human (true), or computer (false)
// assume ties are won by humans
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  return getAbsoluteDistance(humanGuess, secretTarget) <= getAbsoluteDistance(computerGuess, secretTarget) ? true : false;
};

const advanceRound = () => {
  currentRoundNumber++;
};