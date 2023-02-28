function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  let computerSelection;
  switch (choice) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  }
  return computerSelection;
}

let tie = 0,
  win = 0,
  lose = 0;

function playRound(playerSelection, computerSelection) {
  console.log("computer " + computerSelection);
  console.log("player " + playerSelection);

  if (playerSelection === computerSelection) {
    tie++;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    win++;
  } else {
    lose++;
  }

  // Announce winner of the game once one player reaches 5 points
  if (win === 5) {
    console.log("Congratulations! You won!");
  } else if (lose === 5) {
    console.log("Sorry, you lost");
  }
}

// function game() {
//   let playerSelection;
//   for (let i = 0; i < 5; i++) {
//     playerSelection = prompt("Input rock, paper, or scissors");
//     playerSelection = playerSelection.toLowerCase();
//     playRound(playerSelection, getComputerChoice());
//   }
//   playerSelection = prompt("Input rock, paper, or scissors");
//   playerSelection = playerSelection.toLowerCase();
//   playRound(playerSelection, getComputerChoice());
//   if ((tie > win && tie > lose) || (win == 2 && lose == 2)) {
//     console.log("It's a tie!");
//   } else if ((win > tie && win > lose) || (win == 2) & (tie == 2)) {
//     console.log("Congratulations! You won!");
//   } else {
//     console.log("Sorry, you lost");
//   }
// }

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
