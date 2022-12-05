    const answer = prompt("Choose! Rock, Paper, or Scissors?"); //prompts use to choose one of three options

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

    