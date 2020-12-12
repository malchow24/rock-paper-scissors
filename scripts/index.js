//Declare Variables
let gameOptions = ['rock', 'paper', 'scissors'];
let round = 0;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');
const refresh = document.getElementById('refresh-btn');

//Function to get the Computer's random answer from the gameOptions array
let computerPlay = () => {
    let randomOption = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randomOption];
};

// Disable buttons function
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    });
};

// Play the round
const playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    let result = "";
        if((playerSelection === gameOptions[0] && computerSelection === gameOptions[2]) ||
        (playerSelection === gameOptions[1] && computerSelection === gameOptions[0]) ||
        (playerSelection === gameOptions[2] && computerSelection === gameOptions[1])) {
            playerScore++;
            result = (`You won this round! ${playerSelection} beats ${computerSelection}.`)

            if (playerScore === 5) {
                result = (`You won the game!`)
                disableButtons();
            };   
        } else if (playerSelection === computerSelection) {
            result = (`This round was a tie, you both chose ${playerSelection}!`)
        } else {
            computerScore++;
            result = (`You lost this round! ${computerSelection} beats ${playerSelection}.`)

            if (computerScore === 5) {
                result = (`The computer wins this game!`);
                disableButtons();
            };
        };
        if (playerScore > computerScore) {
            document.getElementById('playerScore').style.color = "rgb(44, 230, 44)";
            document.getElementById('computerScore').style.color = "red";
        } else if (playerScore < computerScore) {
            document.getElementById('playerScore').style.color = "red";
            document.getElementById('computerScore').style.color = "rgb(44, 230, 44)";
        } else {
            document.getElementById('playerScore').style.color = "#EEFBFB";
            document.getElementById('computerScore').style.color = "#EEFBFB";
        };

        document.getElementById('result').innerHTML = result;
        document.getElementById('playerScore').innerHTML = (`Player Score: ${playerScore}`);
        document.getElementById('computerScore').innerHTML = (`Computer Score: ${computerScore}`)
        return
    }


buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    });
});

//Refresh the page to start a new game
refresh.addEventListener('click', function(){
    location.reload();
    return false;
});















