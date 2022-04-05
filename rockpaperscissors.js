// Initialize scores and round
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

// Select round counter h2 on page
const currentRound = document.querySelector("#round");

// Select play buttons on page for player selection
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

// Select restart button on page
const restart = document.querySelector("#restart");

// Add event listener
restart.addEventListener("click", () => {
    restartGame();
});


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
    let roundResult = 0;

    switch (true) {
        // Game has been won
        case (playerScore === 5 || computerScore === 5):
            break;
        // Tie
        case (playerSelection === computerSelection):
            roundCounter++;
            break;
        // Player wins round
        case (playerSelection === "ROCK" && computerSelection === "SCISSORS"):
        case (playerSelection === "PAPER" && computerSelection === "ROCK"):
        case (playerSelection === "SCISSORS" && computerSelection === "PAPER"):
            roundCounter++;
            playerScore++;
            roundResult = 1;
            break;
        // Computer wins round
        case (computerSelection === "ROCK" && playerSelection === "SCISSORS"):
        case (computerSelection === "PAPER" && playerSelection === "ROCK"):
        case (computerSelection === "SCISSORS" && playerSelection === "PAPER"):
            roundCounter++;
            computerScore++;
            roundResult = 2;
            break;
    }

    currentRound.textContent = `Round ${roundCounter}`;

    displayResults(roundResult, playerSelection, computerSelection);
}


function displayResults(result, playerSelection, computerSelection) {

    switch(true) {
        // Player wins game
        case (playerScore === 5):
            results.textContent = "Congratulations, you win!";
            playerScoreText.textContent = `Player: ${playerScore}`;
            break;
        // Computer wins game
        case (computerScore === 5):
            results.textContent = "Sorry, you lose!";
            computerScoreText.textContent = `Computer: ${computerScore}`;
            break;
        // Player wins round
        case (result === 1):
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerScoreText.textContent = `Player: ${playerScore}`;
            break;
        // Computer wins round
        case (result === 2):
            results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerScoreText.textContent = `Computer: ${computerScore}`;
            break;
        // Tie
        case (result === 0):
            results.textContent = "Tie!";
    }
}


function restartGame() {
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;

    currentRound.textContent = `Round ${roundCounter}`;
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    results.textContent = "";
}