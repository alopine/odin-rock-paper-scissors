// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Select buttons on page for player selection
const btn = document.querySelectorAll(".btn");
// Add event listeners
btn.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, computerPlay());
    });
});

// Select div on page for results
const results = document.querySelector("#results");

// Select divs on page for scores
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

function computerPlay() {
    // Create variable and assign to randomly generated number from 0 to 2
    let choice = Math.floor(Math.random() * 3);

    // Return computer choice based on variable value
    switch (choice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            results.textContent = "Congratulations, you win!";
        } else {
            results.textContent = "Sorry, you lose!";
        }
    } else {
        switch (true) {
            // Tie
            case (playerSelection === computerSelection):
                results.textContent = "Tie!";
                break;
            // Player wins
            case (playerSelection === "ROCK" && computerSelection === "SCISSORS"):
            case (playerSelection === "PAPER" && computerSelection === "ROCK"):
            case (playerSelection === "SCISSORS" && computerSelection === "PAPER"):
                results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
                playerScoreText.textContent = `Player: ${playerScore}`;
                break;
            // Player loses
            case (computerSelection === "ROCK" && playerSelection === "SCISSORS"):
            case (computerSelection === "PAPER" && playerSelection === "ROCK"):
            case (computerSelection === "SCISSORS" && playerSelection === "PAPER"):
                results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
                computerScoreText.textContent = `Computer: ${computerScore}`;
                break;
        }
    }
}