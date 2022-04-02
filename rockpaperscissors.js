function computerPlay() {
    // Create variable and assign to randomly generated number from 0 to 2
    let choice = Math.floor(Math.random() * 3);

    // Return computer choice based on variable value
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie!";
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "paper") {
            return "Tie!";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beat Paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You Win! Scissors beat Paper";
        } else if (computerSelection === "scissors") {
            return "Tie!";
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log("Computer chooses: ", computerPlay());

console.log(playRound(playerSelection, computerSelection));