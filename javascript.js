/* getComputerChoice() will randomly return rock, paper, scissors
    playRound() plays single round of rock paper scissors
        2 parameters(playerSelection, computerSelection)
        return string that declares winner
        case sensitive
    game() calls playRound inside to play a 5 round game to keep score
    Use prompt() to get input from user
 */

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computer === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound("paper", getComputerChoice());
//   }
// }

console.log(playRound("paper", getComputerChoice()));
