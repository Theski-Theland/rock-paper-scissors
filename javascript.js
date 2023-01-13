let rounds;
let computerSelection;
let userSelection;
let userScore = 0;
let computerScore = 0;

function gameRounds(){
  rounds = document.getElementById('user-input').value;
  return rounds;
};
//Function to pull users choice for how many rounds to play

function randomizeComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return computerSelection = options[Math.floor(Math.random() * options.length)];
}
randomizeComputerChoice();
console.log(computerSelection);
//Function to randomly select computers choice

