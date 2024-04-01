// HTML
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const htmlPlayerPoints = document.querySelector(".playerPoints");
const htmlComputerPoints = document.querySelector(".computerPoints");
const htmlResult = document.querySelector(".result");
const htmlPlayerChoice = document.querySelector(".playerChoice");
const htmlComputerChoice = document.querySelector(".computerChoice");
const htmlFinalResult = document.querySelector(".finalResult");

// Variables
let computerChoice = "";
let computerPoints = 0;
let playerChoice = "";
let playerPoints = 0;
let result = "";


// Start Game by Selecting players Choice
function startGame() {
  rockButton.addEventListener("click", () => {
    game("rock");
  });
  paperButton.addEventListener("click", () => {
    game("paper");
  });
  scissorsButton.addEventListener("click", () => {
    game("scissors");
  });
}

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

// Give Console Output
function giveConsoleOutput() {
  console.log(playerChoice);
  console.log(computerChoice);
  if (result == "tie") {
    console.log("Result: It's a tie.");
  }
  else if (result == "player") {
    console.log(`Result: Player Wins ${playerChoice} beats ${computerChoice}`);
    playerPoints = playerPoints + 1;
  }
  else if (result == "computer") {
    console.log(`Result: Computer Wins ${computerChoice} beats ${playerChoice}`);
    computerPoints = computerPoints + 1;
  }
  console.log(`Computer Points: ${computerPoints}`);
  console.log(`Player Points: ${playerPoints}`);
  console.log("")
}

// Give Website Output
function giveWebOutput() {
  // Choices
  htmlPlayerChoice.textContent = `Player: ${playerChoice}`;
  htmlComputerChoice.textContent = `Computer: ${computerChoice}`;
  // Result
  if (result == "tie") {
    htmlResult.textContent = "Result: It's a tie.";
  }
  else if (result == "player") {
    htmlResult.textContent = `Result: Player Wins! ${playerChoice} beats ${computerChoice}`;
  }
  else if (result == "computer") {
    htmlResult.textContent = `Result: Computer Wins! ${computerChoice} beats ${playerChoice}`;
  }
  // Points
  htmlPlayerPoints.textContent = `Player Points: ${playerPoints}`;
  htmlComputerPoints.textContent = `Computer Points: ${computerPoints}`;
  // Final Result
  if (playerPoints == 5) {
    playerChoice = "";
    htmlFinalResult.textContent = "Player Wins!!!";
    playerPoints = 0;
    computerPoints = 0;
  }
  else if (computerPoints == 5) {
    playerChoice = "";
    htmlFinalResult.textContent = "Computer Wins!!!";
    playerPoints = 0;
    computerPoints = 0;
  }
}

// Main Game
function game(userChoice) {
  playerChoice = userChoice;
  computerChoice = getComputerChoice();
  checkResult(playerChoice, computerChoice);
  giveConsoleOutput();
  giveWebOutput();
  if (playerChoice != "") {
    htmlFinalResult.textContent = "";
  }
}

startGame();