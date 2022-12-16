    let answer = prompt("Choose! Rock, Paper, or Scissors?"); 
        //prompts user to choose one of three options

    let userSelection;
    let computerSelection;
    let userScore = 0;
    let computerScore = 0;
        //create containers for users and computers choice and score

    function capitalizeAnswer(x) {
        return userSelection = x[0].toUpperCase() + x.slice(1).toLowerCase();
    };
    console.log(capitalizeAnswer(answer));
        /*function to format users response to have first letter be a capital letter 
    and assign the return to the correct variable. Logs function */
    
    function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
        return computerSelection = options[Math.floor(Math.random()*options.length)];
    };
    console.log(getComputerChoice());
        /*function to generate a random choice for the computer between Rock Paper and Scissors 
    and assign the return to the correct variable. Logs function */
    
    function playRound(user, computer) {
        if (user === "Rock" && computer === "Paper" ||
        user === "Paper" && computer === "Scissors" ||
        user === "Scissors" && computer === "Rock") {
            computerScore++;
            return "You lose!"
        } else if (user === "Paper" && computer === "Rock" ||
        user === "Scissors" && computer === "Paper" ||
        user === "Rock" && computer === "Scissors") {
            userScore++;
            return "You win!"
        } else if (user === computer) {
            return ("It's a tie!");
        } else {
            alert("Bad choice! Refresh and try again!");
        }
    };
    console.log(playRound(userSelection,computerSelection));
        /* Rock Paper Scissors game. Gives a message with the results and awards a point for
    each possible outcome. Gives an error message if user enters an improper response.
    Runs and logs one round. */
        
    let computerScoreMessage = "Computer Score: " + computerScore;
    let userScoreMessage = "Player Score: " + userScore;
    console.log(userScoreMessage);
    console.log(computerScoreMessage);
        //Creates containers combining a message with the score of the round