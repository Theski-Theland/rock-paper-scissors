function game() {
  let userScore = 0;
  let computerScore = 0;
  let userSelection;
  let computerSelection;
  let answer;
  // Containers for different variables needed for the game

  function randomizeComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    computerSelection = options[Math.floor(Math.random() * options.length)];
  }
  // Creates random choice for computer between Rock, Paper, and Scissors

  for (let i = 1; i < 6; i++) {
    // Loop to play 5 rounds of Rock, Paper, Scissors

    if (userScore == 3 || computerScore == 3) {
      break;
    }
      //Makes game end once player or computer won majority of rounds

      else {
      answer = prompt("Round " + i + " of 5! " + "Choose! Rock, Paper, or Scissors?");
      userSelection = answer[0].toUpperCase() + answer.slice(1).toLowerCase();
      /* Prompts user to choose between Rock, Paper, and Scissors then
      formats users answer to appear with first letter as a capital */
      randomizeComputerChoice();
      // Function call to generate computers choice for each round
    }
    function playRound(user, computer) {
      if (
        computer === "Paper" && user === "Rock" ||
        computer === "Scissors" && user === "Paper" ||
        computer === "Rock" && user === "Scissors"
      ) {
        computerScore++;
        if (userScore > computerScore) {
          alert(
          "You chose " + userSelection + " and " +
          "Computer chose " + computerSelection +
          "! You lost this round but you're winning " +            
          userScore + " to " + computerScore + "."
        )
      } else if (computerScore > userScore && computerScore == 3) {
        alert(
          "You chose " + userSelection + " and " +
          "Computer chose " + computerSelection +
         "! You lost this round!"
       )
      } else if (computerScore > userScore) {
        alert(
          "You chose " + userSelection + " and " +
          "Computer chose " + computerSelection +
         "! You lost this round! You're losing " +
         computerScore + " to " + userScore + "."
       )
      } else {
          alert(
          "You chose " + userSelection + " and " +
          "Computer chose " + computerSelection +
          "! You lost this round but the game is tied " + 
          computerScore + " to " + userScore + "."
        )
      }
    } else if (
        user === "Paper" && computer === "Rock" ||
        user === "Scissors" && computer === "Paper" ||
        user === "Rock" && computer === "Scissors"
      ) {
        userScore++;
        if (userScore > computerScore && userScore == 3) {
          alert(
          "You chose " + userSelection + " and " +
          "Computer chose " + computerSelection +
          "! You won this round!"
        )
      } else if (userScore > computerScore) {
        alert(
          "You chose " + userSelection + " and " +
          "Computer chose " + computerSelection +
          "! You won this round! You're winning " +
          userScore + " to " + computerScore + "."
        )
      }
        else if (computerScore > userScore) {
          alert(
          "You chose " + userSelection + " and " +
          "Computer chose " + computerSelection +
          "! You won this round but you're losing " +
          computerScore + " to " + userScore + "."
        )
      } else {
          alert(
          "You chose " + userSelection + " and " +
          "Computer chose " + computerSelection +
          "! You won this round but the game is tied " +
          computerScore + " to " + userScore + "."
        ) 
      }
    } else if (user === computer) {
      i--;
        if (userScore > computerScore) {
          alert(
          "You both chose " + userSelection +
          "! The score is still " + userScore + 
          " to " + computerScore + "."
        )
      } else if (computerScore >= userScore) {
          alert(
          "You both chose " + userSelection +
          "! The score is still " + computerScore + 
          " to " + userScore + "."
        )
      }
    } else {
        i--;
        alert(
        "Bad choice! Refresh and try again!"
      );
    }
  }
    playRound(userSelection, computerSelection);
  }
    /* Round of Rock, Paper, Scissors with results and messages 
      for each possible outcome with a score update. */

  if (userScore > computerScore) {
    alert(
    "You won the game " + userScore +
    " to " + computerScore + "!"
    );
  } else {
      alert(
      "You lost the game " + computerScore + 
      " to " + userScore + "!"
    );
  }
  // Alert message for results of the 5 round game based on the score
}

  console.log(game());