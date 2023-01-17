let rounds;
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
  imgComputer.src = "";
  imgUser.src = "";
  rounds = document.getElementById("user-input").value;
  if (rounds == 3 || rounds == 5 || rounds == 7) {
  gameMessageText.textContent =
    "Best of " + rounds + ". Good luck. Let's begin!";
  } else {
    gameMessageText.textContent = "Choose how many rounds first!";  
  }
}
//Function to pull users choice for how many rounds to play

function randomizeComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}
//Function to randomly select computers choice

function chooseRock() {
  if (rounds == 3 || rounds == 5 || rounds == 7) {
    userSelection = document.getElementById("rock").value;
    imgUser.src = "images/rock.jpg";
    computerSelection = randomizeComputerChoice();
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
  } else {
    gameMessageText.textContent = "Choose how many rounds first!";
    return;
  }
  playRound();
}

function choosePaper() {
  if (rounds == 3 || rounds == 5 || rounds == 7) {
    userSelection = document.getElementById("paper").value;
    imgUser.src = "images/paper.jpg";
    computerSelection = randomizeComputerChoice();
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
  } else {
    gameMessageText.textContent = "Choose how many rounds first!";
    return;
  }
  playRound();
}

function chooseScissors() {
  if (rounds == 3 || rounds == 5 || rounds == 7) {
    userSelection = document.getElementById("scissors").value;
    imgUser.src = "images/scissors.png";
    computerSelection = randomizeComputerChoice();
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
  } else {
    gameMessageText.textContent = "Choose how many rounds first!";
    return;
  } 
  playRound();
}

function playRound() {
  //Containers for game messages to receive based off each round outcome
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
  
  //Round of RPS with score increments and random game messages
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

  //Results once predetermined score is reached. Game reset
  if (usersScore === Math.ceil(rounds / 2)) {
    gameMessageText.textContent = "Congratulations! You won!";
    gameWinSound.play();
    usersScore = 0;
    computersScore = 0;
    rounds = undefined;
    return;
  } else if (computersScore === Math.ceil(rounds / 2)) {
    gameMessageText.textContent = "You lost! Better luck next time!";
    gameLoseSound.play();
    usersScore = 0;
    computersScore = 0;
    rounds = undefined;
    return;
  }

  //Sound effect to play based on if user won or lost
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