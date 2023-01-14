let rounds;
let computerSelection;
let userSelection;
let usersScore = 0;
let computersScore = 0;
let usersScoreText = document.getElementById('player-score');
let computersScoreText = document.getElementById('computer-score');
let imgComputer = document.getElementById('img-computer');
let imgUser = document.getElementById('img-player');
let gameMessageText = document.getElementById('game-message');


function gameRounds(){
  computersScoreText.textContent = computersScore;
  usersScoreText.textContent = usersScore;
  rounds = document.getElementById('user-input').value;
  gameMessageText.textContent = "Best of " + rounds + ". Good luck. Let's begin!"
};
//Function to pull users choice for how many rounds to play

function randomizeComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}
//Function to randomly select computers choice

function chooseRock() {
  if (rounds !== undefined) {
  userSelection = document.getElementById('rock').value;
  computerSelection = randomizeComputerChoice();
  if (computerSelection === "Rock") {
    imgComputer.src="images/rock.jpg";
  } else if (computerSelection === "Paper") {
    imgComputer.src="images/paper.jpg";
  } else {
    imgComputer.src="images/scissors.png";
  };
  imgUser.src="images/rock.jpg";
  playRound(userSelection,computerSelection);
  }
}

function choosePaper() {
  if (rounds !== undefined) {
  userSelection = document.getElementById('paper').value;
  computerSelection = randomizeComputerChoice();
  if (computerSelection === "Rock") {
    imgComputer.src="images/rock.jpg";
  } else if (computerSelection === "Paper") {
    imgComputer.src="images/paper.jpg";
  } else {
    imgComputer.src="images/scissors.png";
  };
  imgUser.src="images/paper.jpg";
  playRound(userSelection,computerSelection);
  }
}

function chooseScissors() {
  if (rounds !== undefined) {
  userSelection = document.getElementById('scissors').value;
  computerSelection = randomizeComputerChoice();
  if (computerSelection === "Rock") {
    imgComputer.src="images/rock.jpg";
  } else if (computerSelection === "Paper") {
    imgComputer.src="images/paper.jpg";
  } else {
    imgComputer.src="images/scissors.png";
  };
  imgUser.src="images/scissors.png";
  playRound(userSelection,computerSelection);
  }
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
      } if (usersScore === Math.ceil(rounds / 2)) {
          gameMessageText.textContent = "Congratulations! You won!";
          usersScore = 0;
          computersScore = 0;
          rounds = undefined;
        } else if (computersScore ===Math.ceil(rounds / 2)) {
          gameMessageText.textContent = "You lost! Better luck next time!";
          usersScore = 0;
          computersScore = 0;
          rounds = undefined;
        }
    else if (
      computer === "Rock" && user === "Scissors" ||
      computer ===  "Paper" && user === "Rock" ||
      computer === "Scissors" && user === "Paper"
    ) {
      computersScoreText.textContent = ++computersScore;
      usersScoreText.textContent = usersScore;
      gameMessageText.textContent = "Uh-oh! " + computer + " beats " + user + " !";
        if (usersScore === Math.ceil(rounds / 2)) {
        gameMessageText.textContent = "Congratulations! You won!";
        usersScore = 0;
        computersScore = 0;
        rounds = undefined;
        } else if (computersScore ===Math.ceil(rounds / 2)) {
          gameMessageText.textContent = "You lost! Better luck next time!";
          usersScore = 0;
          computersScore = 0;
          rounds = undefined;
        }
    }
}