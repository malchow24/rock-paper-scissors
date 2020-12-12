
let gameOptions = ['rock', 'paper', 'scissors']
let round = 0;
let playerScore = 0;
let computerScore = 0;

let computerPlay = () => {
    let randomOption = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randomOption];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === gameOptions[0]){
        if (computerSelection === gameOptions[0]) {
            return "This round is a tie";
        } else if (computerSelection === gameOptions[1]){
            computerScore++;
            return "Paper beats rock, computer wins";
        } else if (computerSelection === gameOptions[2]) {
            playerScore++;
            return "Rock beats scissors, user wins";
        }
    } else if (playerSelection === gameOptions[1]) {
        if (computerSelection === gameOptions[0]) {
            playerScore++;
            return "Paper beats rock, user wins";

        } else if (computerSelection === gameOptions[1]){
            return "This round is a tie";
        } else if (computerSelection === gameOptions[2]) {
            computerScore++;
            return "Scissors beats paper, computer wins";
        }
    } else if (playerSelection === gameOptions[2]) {
        if (computerSelection === gameOptions[0]) {
            computerScore++;
            return "Rock beats scissors, computer wins";
        } else if (computerSelection === gameOptions[1]){
            playerScore++;
            return "Scissors beats paper, user wins";
        } else if (computerSelection === gameOptions[2]) {
            return "This round is a tie";
        }
    } return computerScore, playerScore;
};

const Game = () => {
    for (let i = 0; i < 5; i++) {
        const userInput = prompt("Rock, Paper, or Scissors?");
        const compSelection = computerPlay();
        console.log(`Computer played ${compSelection}`);
        const output = playRound(userInput, compSelection);
        console.log(output);
        console.log(playerScore, computerScore);
    }
}

Game();

