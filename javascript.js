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
  console.log("player " + playerSelection);
  console.log("computer " + computerSelection);

  if (playerSelection === computerSelection) {
    return;
    // tie++;
    // tieScore.textContent = "Tie: " + tie;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    win++;
    playerScore.textContent = "Player: " + win;
  } else {
    lose++;
    computerScore.textContent = "Computer: " + lose;
  }

  // Announce winner of the game once one player reaches 5 points"
  if (win === 5) {
    results.textContent = "Congratulations! You won!";
    controller.abort();
    replay.style.cssText = "display: inline-block";
    // alert("You won");
  } else if (lose === 5) {
    results.textContent = "Sorry, you lost";
    controller.abort();
    replay.style.cssText = "display: inline-block";
    // alert("You lost");
  }
}

const buttons = Array.from(document.querySelectorAll("button"));
const controller = new AbortController();
const results = document.querySelector(".results");
const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#computer");
const body = document.querySelector("body");
const replay = document.querySelector(".replay");

// Put correct player choice in playRound
buttons.forEach((button) =>
  button.addEventListener(
    "click",
    (e) => {
      if (e.target.id === "rock") {
        playRound("rock", getComputerChoice());
      } else if (e.target.id === "paper") {
        playRound("paper", getComputerChoice());
      } else {
        playRound("scissors", getComputerChoice());
      }
    },
    { signal: controller.signal }
  )
);

// Reset game
replay.addEventListener("click", () => location.reload());

// function clickFunction(e) {
//   if (e.target.id === "rock") {
//     playRound("rock", getComputerChoice());
//   } else if (e.target.id === "paper") {
//     playRound("paper", getComputerChoice());
//   } else {
//     playRound("scissors", getComputerChoice());
//   }
// }
