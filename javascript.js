let rounds;
let computerSelection;
let userSelection;
let usersScore = 0;
let computersScore = 0;
const usersScoreText = document.getElementById('player-score');
const computersScoreText = document.getElementById('computer-score');
let gameMessageText = document.getElementById('game-message');


function gameRounds(){
  computersScoreText.textContent = computersScore;
  usersScoreText.textContent = usersScore;
  gameMessageText.textContent = "Let's begin!"
  return rounds = document.getElementById('user-input').value;
};
//Function to pull users choice for how many rounds to play

function randomizeComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}
//Function to randomly select computers choice

function chooseRock() {
  userSelection = document.getElementById('rock').value;
  computerSelection = randomizeComputerChoice();
  playRound(userSelection,computerSelection);
}

function choosePaper() {
  userSelection = document.getElementById('paper').value;
  computerSelection = randomizeComputerChoice();
  playRound(userSelection,computerSelection);
}

function chooseScissors() {
  userSelection = document.getElementById('scissors').value;
  computerSelection = randomizeComputerChoice();
  playRound(userSelection,computerSelection);
}

function playRound(user,computer) {
  if (rounds === undefined) {
    gameMessageText.textContent = "Choose how many rounds before we begin!";
  }
    else if (user === computer) {
      gameMessageText.textContent = "Tie! Choose again!";
    }
    else if (
      user === "Rock" && computer === "Scissors" ||
      user ===  "Paper" && computer === "Rock" ||
      user === "Scissors" && computer === "Paper"
    ) {
      usersScoreText.textContent = ++usersScore;
      computersScoreText.textContent = computersScore;
      gameMessageText.textContent = "Nice! " + user + " beats " + computer + " !";
        if (usersScore === Math.ceil(rounds / 2) || computersScore === Math.ceil(rounds / 2)) {
          gameMessageText.textContent = "Game over! Choose how many rounds to play again.";
          usersScore = 0;
          computersScore = 0;
          rounds = undefined;
        };
    }
    else if (
      computer === "Rock" && user === "Scissors" ||
      computer ===  "Paper" && user === "Rock" ||
      computer === "Scissors" && user === "Paper"
    ) {
      computersScoreText.textContent = ++computersScore;
      usersScoreText.textContent = usersScore;
      gameMessageText.textContent = "Uh-oh! " + computer + " beats " + user + " !";
        if (usersScore === Math.ceil(rounds / 2) || computersScore === Math.ceil(rounds / 2)) {
          gameMessageText.textContent = "Game over! Choose how many rounds to play again.";
          usersScore = 0;
          computersScore = 0;
          rounds = undefined;
        };
    }
};