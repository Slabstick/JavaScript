let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 9);
}

function compareGuesses(playerGuess, comGuess, target) {
    let comDist = Math.abs(target - comGuess);
    let playerDist = Math.abs(target - playerGuess);

    if (playerDist <= comDist) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    }

    if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}