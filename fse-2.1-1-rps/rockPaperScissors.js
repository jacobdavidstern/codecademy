const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(['rock','paper','scissors','bomb'].includes(userInput)) return userInput;
  else console.log('Error, please enter rock, paper, or scissors');
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    return 'rock';
  } if (randomNumber === 1) {
    return 'paper';
  } if (randomNumber === 2) {
    return 'scissors';
  }
};

const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === 'bomb') {
    return('Terrorists win!'); // cheat code: bomb, terrorists win 
  }
  if (getUserChoice === getComputerChoice) {
    return('The game was a tie!'); // tie
  } 
    if (getUserChoice === 'rock' && getComputerChoice === 'scissors') {
    return('Congratulations, you won!');// won with rock
  } 
  if (getUserChoice === 'paper' && getComputerChoice === 'rock') { 
    return('Congratulations, you won!'); // won with paper
  } 
  if (getUserChoice === 'scissors' && getComputerChoice === 'paper') { 
    return('Congratulations, you won!'); // won with scissors
  }
  else return 'Sorry, computer won!'  // computer won
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice} \nComputer threw: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();