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
    switch (true) {
        // Tie
        case (playerSelection === computerSelection):
            console.log("Tie!");
            return 0;
        // Player wins
        case (playerSelection === "ROCK" && computerSelection === "SCISSORS"):
        case (playerSelection === "PAPER" && computerSelection === "ROCK"):
        case (playerSelection === "SCISSORS" && computerSelection === "PAPER"):
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 1;
        // Player loses
        case (computerSelection === "ROCK" && playerSelection === "SCISSORS"):
        case (computerSelection === "PAPER" && playerSelection === "ROCK"):
        case (computerSelection === "SCISSORS" && playerSelection === "PAPER"):
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return 2;
    }
}


function game() {
    // Initialize selections
    let playerSelection;
    let computerSelection;

    // Initialize scores
    let playerScore = 0;
    let computerScore = 0;

    // Initialize round result
    let roundResult;

    // Main game loop
    for (let i = 0; i < 5; i++) {
        // Prompt player for selection, re-prompting if invalid
        while (true) {
            playerSelection = prompt("Choose ROCK, PAPER, or SCISSORS");
            playerSelection = playerSelection.toUpperCase();

            if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
                break;
            }
        }

        // Play a round and store the returned value
        computerSelection = computerPlay();
        roundResult = playRound(playerSelection, computerSelection);

        // Update score based on roundResult value
        if (roundResult === 1) {
            playerScore++;
        } else if (roundResult === 2) {
            computerScore++;
        }
    }

    // Log results based on score
    if (playerScore > computerScore) {
        console.log(`Congratulations, you win ${playerScore} to ${computerScore}!`);
    } else if (computerScore > playerScore) {
        console.log(`Sorry, you lose ${playerScore} to ${computerScore}!`);
    } else {
        console.log(`It's a tie! Both of you got ${computerScore}`);
    }
}

game();