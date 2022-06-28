const startGameBtn = document.getElementById("start-game-btn");
let isRunning = false;
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?`, "").toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER && 
    selection !== SCISSORS) {
    alert(`Invalid choice! We use ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  let selection;
  const randomNumber = Math.random();
  if (randomNumber < 0.34) {
    selection = ROCK;
  } else if (randomNumber < 0.66) {
    selection = PAPER;
  } else {
    selection = SCISSORS;
  }
  console.log(selection);
  return selection;
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (pChoice === cChoice) {
		return RESULT_DRAW; 
  } else if (
		pChoice === ROCK && cChoice === SCISSORS ||
		pChoice === PAPER && cChoice === ROCK ||
		pChoice === SCISSORS && cChoice === PAPER
	) {
		return RESULT_PLAYER_WINS;
	} else {
		return RESULT_COMPUTER_WINS;
	}
};

startGameBtn.addEventListener("click", () => {
	if (isRunning) {
		return;
	}
	isRunning = true;
  console.log("The game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice)
  }
  let message = `You chose ${playerChoice || DEFAULT_USER_CHOICE} and the computer chose ${computerChoice} `;
  if (winner === RESULT_DRAW) {
    message = message + "it's a draw."
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'you win!'
  } else {
    message = message + 'the computer win!'
  };
  alert(message);
  isRunning = false;
});

// not related to the game
// ES6
// rest operator => use more arguments than parameters assigned, or, make all arguments store in an array.
// We can also declare functions inside of functions! => See validateNumber in sumUp.

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = number => isNaN(number) ? 0 : number;
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
}

const showResult = result => alert('The result of the sum of all numbers is: ' + result);

sumUp(showResult,1,25,242,'hola',74,10);

// Pre ES6 and only on functions that aren't arrow functios

const subtract = function(resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) { // try to not use it
    sum -= num;
  }
  resultHandler(sum);
}

/* const subtract = function() {
  let sum = 0;
  for (const num of arguments) { // try to not use it
    sum -= num;
  }
  return sum;
} */
subtract(showResult,100,5,25,20);

