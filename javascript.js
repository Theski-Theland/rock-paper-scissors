let rounds = "#";
let computerSelection;
let userSelection;
let usersScore = 0;
let computersScore = 0;
let usersScoreText = document.getElementById("player-score");
let computersScoreText = document.getElementById("computer-score");
let imgComputer = document.getElementById("img-computer");
let imgUser = document.getElementById("img-player");
let gameMessageText = document.getElementById("game-message");
let rockWinSound = new Audio("sound-effects/rock-win.wav");
let scissorsWinSound = new Audio("sound-effects/scissors-win.wav");
let paperWinSound = new Audio("sound-effects/paper-win.wav");
let gameWinSound = new Audio("sound-effects/game-win.wav");
let gameLoseSound = new Audio("sound-effects/game-loss.wav");

function gameRounds() {
  computersScoreText.textContent = computersScore;
  usersScoreText.textContent = usersScore;
  imgUser.removeAttribute('src');
  imgComputer.removeAttribute('src');
  rounds = document.getElementById("user-input").value;
  if (rounds == "#") {
    gameMessageText.textContent = "Choose how many rounds first!";
  } else {
    gameMessageText.textContent = "Best of " + rounds + ". Good luck. Let's begin!"; 
  }
}

//Still trying to find a way to combine the three choices into one function
function chooseRock() {
  if (rounds === "#") {
    gameMessageText.textContent = "Choose how many rounds first!";
    return;
  } else {
    userSelection = "Rock";
    imgUser.src = "images/rock.jpg";
  }
  randomizeComputerChoice();
}

function choosePaper() {
  if (rounds === "#") {
    gameMessageText.textContent = "Choose how many rounds first!";
    return;
  } else {
    userSelection = "Paper";
    imgUser.src = "images/paper.jpg";
  }
  randomizeComputerChoice();
}

function chooseScissors() {
  if (rounds === "#") {
    gameMessageText.textContent = "Choose how many rounds first!";
    return;
  } else {
    userSelection = "Scissors";
    imgUser.src = "images/scissors.png";
  } 
  randomizeComputerChoice();
}

function randomizeComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  computerSelection = options[Math.floor(Math.random() * options.length)];
  getComputerImage();
}

function getComputerImage() {
  switch (computerSelection) {
    case "Rock": 
      imgComputer.src = "images/rock.jpg";
      break;
    case "Paper": 
      imgComputer.src = "images/paper.jpg";
      break;
    case "Scissors":
      imgComputer.src = "images/scissors.png";
      break;
  }
  playRound();
}

function playRound() {
  let gameMessageWin =  [
    "Good job! " + userSelection + " beats " + computerSelection + ".",
    "Way to go! " + userSelection + " beats " + computerSelection + ".",
    "Well done! " + userSelection + " beats " + computerSelection + ".",
  ];
  let gameMessageLose = [
    "Oh no! " + computerSelection + " beats " + userSelection + ".",
    "Shucks! " + computerSelection + " beats " + userSelection + ".",
    "Unlucky! " + computerSelection + " beats " + userSelection + ".",
  ];

  if (userSelection === computerSelection) {
    gameMessageText.textContent = "Tie! Choose again!";
  } else if (
    (userSelection === "Rock" && computerSelection === "Scissors") ||
    (userSelection === "Paper" && computerSelection === "Rock") ||
    (userSelection === "Scissors" && computerSelection === "Paper")
  ) {
    usersScoreText.textContent = ++usersScore;
    computersScoreText.textContent = computersScore;
    gameMessageText.textContent = gameMessageWin[Math.floor(Math.random() * gameMessageWin.length)];
  } else if (
    (computerSelection === "Rock" && userSelection === "Scissors") ||
    (computerSelection === "Paper" && userSelection === "Rock") ||
    (computerSelection === "Scissors" && userSelection === "Paper")
  ) {
    computersScoreText.textContent = ++computersScore;
    usersScoreText.textContent = usersScore;
    gameMessageText.textContent = gameMessageLose[Math.floor(Math.random() * gameMessageWin.length)];
  }
  
  if (usersScore === Math.ceil(rounds / 2)) {
    gameMessageText.textContent = "Congratulations! You won!";
    gameWinSound.play();
    usersScore = 0;
    computersScore = 0;
    rounds = "#";
    return;
  } else if (computersScore === Math.ceil(rounds / 2)) {
    gameMessageText.textContent = "You lost! Better luck next time!";
    gameLoseSound.play();
    usersScore = 0;
    computersScore = 0;
    rounds = "#";
    return;
  }

  if 
    (computerSelection === "Rock" && userSelection === "Scissors" || 
    userSelection === "Rock" && computerSelection === "Scissors") {
    rockWinSound.play();
  } else if 
    (computerSelection === "Paper" && userSelection === "Rock" ||
    userSelection === "Paper" && computerSelection === "Rock") {
    paperWinSound.play();
  } else if 
    (computerSelection === "Scissors" && userSelection === "Paper" ||
    userSelection === "Scissors" && computerSelection === "Paper") {
    scissorsWinSound.play();
  }
}