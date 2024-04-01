// HTML



// Variables

let computerChoice;
let playerChoice;
let result;

// Computer Choice Random Selection

function getComputerChoice() {
  let randomChoice = Math.floor((Math.random() * 3) + 1);
  if (randomChoice === 1) {
    return "rock";
  }
  else if (randomChoice === 2) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

// Player Choice Selector

function getPlayerChoice() {
  let userPrompt = prompt("Rock Paper Scissors");
  playerChoice = userPrompt.toLowerCase();
}

// Checking Result of The Game

function checkResult(playerSelection, computerSelection) {
  if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
    result = "computer";
  }
  else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
    result = "player";
  }
  else {
    result = "tie"
  }
}

// Output of The Round

function playRound() {
  getComputerChoice();
  computerChoice = getComputerChoice();
  console.log(`Computer: ${computerChoice}`);
  getPlayerChoice();
  console.log(`Player: ${playerChoice}`);
  checkResult(playerChoice, computerChoice);
  if (result == "tie") {
    console.log("Result: It's a tie.");
  }
  else if (result == "player") {
    console.log(`Result: Player Wins ${playerChoice} beats ${computerChoice}`);
  }
  else if (result == "computer") {
    console.log(`Result: Computer Wins ${computerChoice} beats ${playerChoice}`);
  }
  console.log("")
}

// Main Game - 5 Rounds

for (let i = 0; i < 5; i++ ){
  playRound();
}
