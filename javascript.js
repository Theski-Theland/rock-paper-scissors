    const answer = prompt("Choose! Rock, Paper, or Scissors?");

    let playerSelection = (function(x) {
    let first = x.charAt(0).toUpperCase();
    let rest = x.slice(1).toLowerCase();
    return first+rest;
    })(answer);
    
    function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return choice = options[Math.floor(Math.random()*options.length)];
    };