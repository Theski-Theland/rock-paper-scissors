let rounds;
let computerSelection;
let userSelection;
let usersScore = 0;
let computersScore = 0;
let usersScoreText = document.getElementById('player-score');
let computersScoreText = document.getElementById('computer-score');



function gameRounds(){
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
    alert("Choose rounds first");
  }
    else if (user === computer) {
      alert("tie");
    }
    else if (
      user === "Rock" && computer === "Scissors" ||
      user ===  "Paper" && computer === "Rock" ||
      user === "Scissors" && computer === "Paper"
    ) {
      usersScoreText.textContent = ++usersScore;
      computersScoreText.textContent = computersScore;
      console.log(computerSelection);
      console.log(userSelection);
      console.log(computersScore);
      console.log(usersScore);
        if (usersScore === Math.ceil(rounds / 2) || computersScore === Math.ceil(rounds / 2)) {
          alert("end game win function goes here");
          usersScore = 0;
          computersScore = 0;
          rounds = undefined;
        };
      "results game message goes here";
    }
    else if (
      computer === "Rock" && user === "Scissors" ||
      computer ===  "Paper" && user === "Rock" ||
      computer === "Scissors" && user === "Paper"
    ) {
      computersScoreText.textContent = ++computersScore;
      usersScoreText.textContent = usersScore;
      console.log(computerSelection);
      console.log(userSelection);
      console.log(computersScore);
      console.log(usersScore);
        if (usersScore === Math.ceil(rounds / 2) || computersScore === Math.ceil(rounds / 2)) {
          alert("end game win function goes here");
          usersScore = 0;
          computersScore = 0;
          rounds = undefined;
        };
      "results game message goes here";
    }
};