    let answer = prompt("Choose! Rock, Paper, or Scissors?"); //prompts use to choose one of three options

    function capitalizeAnswer(x) {
    let first = x.charAt(0).toUpperCase();
    let rest = x.slice(1).toLowerCase();
    return first+rest;
    }; //function to format users response to have first letter be a capital letter
    
    function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return choice = options[Math.floor(Math.random()*options.length)];
    };//function to generate a random choice between Rock Paper and Scissors

    let computerSelection = getComputerChoice();
    let playerSelection = capitalizeAnswer(answer);
    //assigns the users choice and computers choice to separate variables

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "Rock" && computerSelection === "Paper") {
            alert("Computer chose paper! You lose!");
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            alert("Computer chose scissors! You win!");
        } else if (playerSelection === "Rock" && computerSelection === "Rock") {
            alert("Draw! Play again!");
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            alert("Computer chose scissors! You lose!");
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            alert("Computer chose rock! You win!");
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            alert("Draw! Play again!");
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            alert("Computer chose rock! You lose!");
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            alert("Computer chose paper! You win!");
        } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            alert("Draw! Play again!");
        } else {
            alert("Error! Either that's not an option or you can't spell!")
        }
    } //Rock Paper Scissors game. Gives results for each possible outcome and an error if user enters an improper response
    
    playRound(playerSelection,computerSelection);