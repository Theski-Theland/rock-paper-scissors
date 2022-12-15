    let answer = prompt("Choose! Rock, Paper, or Scissors?"); //prompts use to choose one of three options
    
    function capitalizeAnswer(z) {
        return userSelection = z[0].toUpperCase() + z.slice(1).toLowerCase();
    };
    console.log(capitalizeAnswer(answer));
    //function to format users response to have first letter be a capital letter
    
    function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
        return computerSelection = options[Math.floor(Math.random()*options.length)];
    };
    console.log(getComputerChoice());
    //function to generate a random choice between Rock Paper and Scissors

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