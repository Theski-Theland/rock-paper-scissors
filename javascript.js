function game() {

    function computerChoice() {
        let options = ["Rock", "Paper", "Scissors"];
        let computerRandom = options[Math.floor(Math.random()*3)];
        return computerRandom;
    }
    //Creates random choice for computer between Rock, Paper, and Scissors

    let userScore = 0;
    let computerScore = 0;
    let userSelection;
    let computerSelection = computerChoice();
    let answer;

    //Containers for different variables needed for the game
    
    for (i=0;i<5;i++){
        answer = prompt("Choose! Rock, Paper, or Scissors?");
        userSelection = answer[0].toUpperCase() + answer.slice(1).toLowerCase();
        /* Prompts user to choose between Rock, Paper, and Scissors then formats 
        users answer to appear with first letter as a capital */

        computerChoice();
        // Function call to generate computers choice for each round

        console.log(userSelection);
        console.log(computerSelection);

        function playRound(user, computer) {
            if (computer === "Paper" && user === "Rock" ||
            computer === "Scissors" && user === "Paper" ||
            computer === "Rock" && user === "Scissors")  {
                computerScore++;
                alert ("Computer chose " + computerSelection + "! You lost this round! The score is " + userScore + " to " + computerScore + ".");
                return userScore + " to " + computerScore;
            } else if (user === "Paper" && computer === "Rock" ||
            user === "Scissors" && computer === "Paper" ||
            user === "Rock" && computer === "Scissors") {
                userScore++;
                alert ("Computer chose " + computerSelection + "! You won this round! The score is "  + userScore + " to " + computerScore + ".");
                return userScore + " to " + computerScore;
            } else if (user === computer) {
                alert ("Computer chose " + computerSelection + "! It's a tie! The score is " + userScore + " to " + computerScore + ".");
                return userScore + " to " + computerScore;
            } else {
                alert("Bad choice! Refresh and try again!");
            }
        };
        //Round of Rock, Paper, Scissors with results and messages for each possible outcome

        console.log(playRound(userSelection,computerSelection));
    }

    if (userScore > computerScore) {
        alert ("You won the game " + userScore + " to " + computerScore + "!");
    } else if (computerScore > userScore) {
        alert ("You lost the game " + computerScore + " to " + userScore + "!")
    } else {
        alert (userScore + " to " + computerScore + "! The game is a tie!")
    };
}

console.log(game());

