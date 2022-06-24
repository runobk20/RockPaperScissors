const startGameBtn = document.getElementById("start-game-btn");
let isRunning = false;
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS} ?`, "").toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER && 
    selection !== SCISSORS) {
    alert(`Invalid choice! We use ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
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

const getWinner = function (pChoice, cChoice) {
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

startGameBtn.addEventListener("click", function () {
	if (isRunning) {
		return;
	}
	isRunning = true;
  console.log("The game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
	const winner = getWinner(playerChoice, computerChoice);
	console.log(winner);
});

