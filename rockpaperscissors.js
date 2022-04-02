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

console.log("Computer chooses: ", computerPlay());