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
    computerSelection = randomizeComputerChoice();
    if (computerSelection === "Rock") {
      imgComputer.src = "images/rock.jpg";
    } else if (computerSelection === "Paper") {
      imgComputer.src = "images/paper.jpg";
    } else {
      imgComputer.src = "images/scissors.png";
    }
    imgUser.src = "images/rock.jpg";
    playRound(userSelection, computerSelection)
  } else {
    gameMessageText.textContent = "Choose how many rounds first!";
    return;
  }
}

function choosePaper() {
  if (rounds == 3 || rounds == 5 || rounds == 7) {
    userSelection = document.getElementById("paper").value;
    computerSelection = randomizeComputerChoice();
    if (computerSelection === "Rock") {
      imgComputer.src = "images/rock.jpg";
    } else if (computerSelection === "Paper") {
      imgComputer.src = "images/paper.jpg";
    } else {
      imgComputer.src = "images/scissors.png";
    }
    imgUser.src = "images/paper.jpg";
    playRound(userSelection, computerSelection);
  } else {
    gameMessageText.textContent = "Choose how many rounds first!";
    return;
  }
}

function chooseScissors() {
  if (rounds == 3 || rounds == 5 || rounds == 7) {
    userSelection = document.getElementById("scissors").value;
    computerSelection = randomizeComputerChoice();
    if (computerSelection === "Rock") {
      imgComputer.src = "images/rock.jpg";
    } else if (computerSelection === "Paper") {
      imgComputer.src = "images/paper.jpg";
    } else {
      imgComputer.src = "images/scissors.png";
    }
    imgUser.src = "images/scissors.png";
    playRound(userSelection, computerSelection);
  } else {
    gameMessageText.textContent = "Choose how many rounds first!";
    return;
  }
}

function playRound(user, computer) {
  let gameMessageWin =  [
    "Good job! " + user + " beats " + computer + ".",
    "Way to go! " + user + " beats " + computer + ".",
    "Well done! " + user + " beats " + computer + ".",
  ];
  let gameMessageLose = [
    "Oh no! " + computer + " beats " + user + ".",
    "Shucks! " + computer + " beats " + user + ".",
    "Unlucky! " + computer + " beats " + user + ".",
  ];
  if (user === computer) {
    gameMessageText.textContent = "Tie! Choose again!";
  } else if (
    (user === "Rock" && computer === "Scissors") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissors" && computer === "Paper")
  ) {
    usersScoreText.textContent = ++usersScore;
    computersScoreText.textContent = computersScore;
    gameMessageText.textContent = gameMessageWin[Math.floor(Math.random() * gameMessageWin.length)];
  } else if (
    (computer === "Rock" && user === "Scissors") ||
    (computer === "Paper" && user === "Rock") ||
    (computer === "Scissors" && user === "Paper")
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
  if 
    (computer === "Rock" && user === "Scissors" || 
    user === "Rock" && computer === "Scissors") {
    rockWinSound.play();
  } else if 
    (computer === "Paper" && user === "Rock" ||
    user === "Paper" && computer === "Rock") {
    scissorsWinSound.play();
  } else if 
    (computer === "Scissors" && user === "Paper" ||
    user === "Scissors" && computer === "Paper") {
    paperWinSound.play();
  }
}