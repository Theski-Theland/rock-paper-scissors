    let answer = prompt("Choose! Rock, Paper, or Scissors?"); //prompts use to choose one of three options

    function capitalizeAnswer(x) {
    let first = x.charAt(0).toUpperCase();
    let rest = x.slice(1).toLowerCase();
    return first+rest;
    };
    console.log(capitalizeAnswer(answer));
    //function to format users response to have first letter be a capital letter
    
    function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return choice = options[Math.floor(Math.random()*options.length)];
    };
    console.log(getComputerChoice());
    //function to generate a random choice between Rock Paper and Scissors

    let userSelection = capitalizeAnswer(answer);
    console.log(userSelection);
    
    let computerSelection = choice;
    console.log(computerSelection);
    //assigns the users choice and computers choice to separate variables


    function playRound(x, y) {
        if (x === "Rock" && y === "Paper" ||
        x === "Paper" && y === "Scissors" ||
        x === "Scissors" && y === "Rock") {
            return ("You lose!");
        } else if (x === "Paper" && y === "Rock" ||
        x === "Scissors" && y === "Paper" ||
        x === "Rock" && y === "Scissors") {
            return ("You win!");
        } else if (x === y) {
            return ("It's a tie!");
        } else {
            alert("Bad choice! Refresh and try again!");

        }
    };
        /* Rock Paper Scissors game. Gives results for each possible outcome and
        an error if user enters an improper response */
        let results = playRound(userSelection,computerSelection);
        console.log(results);