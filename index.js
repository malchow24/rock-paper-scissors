
let gameOptions = ['rock', 'paper', 'scissors']
let round = 0;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');
const refresh = document.getElementById('refresh-btn');


let computerPlay = () => {
    let randomOption = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randomOption];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

const playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    let result = "";
        if((playerSelection === gameOptions[0] && computerSelection === gameOptions[2]) ||
        (playerSelection === gameOptions[1] && computerSelection === gameOptions[0]) ||
        (playerSelection === gameOptions[2] && computerSelection === gameOptions[1])) {
            playerScore++;
            result = (`You won this round! ${playerSelection} beats ${computerSelection}. Your score: ${playerScore}. Computer Score: ${computerScore}`)

            if (playerScore === 5) {
                result = (`You won the game!`)
                disableButtons();
            }   
        } else if (playerSelection === computerSelection) {
            result = (`This round was a tie, you both chose ${playerSelection}. Your score: ${playerScore}. Computer Score: ${computerScore}`)
        } else {
            computerScore++;
            result = (`You lost this round! ${computerSelection} beats ${playerSelection}. Your score: ${playerScore}. Computer Score: ${computerScore}`)

            if (computerScore === 5) {
                result = (`The computer wins this game`);
                disableButtons();
            }
        }
        if (playerScore > computerScore) {
            document.getElementById('playerScore').style.color = "green";
            document.getElementById('computerScore').style.color = "red";
        } else if (playerScore < computerScore) {
            document.getElementById('playerScore').style.color = "red";
            document.getElementById('computerScore').style.color = "green";
        } else {
            document.getElementById('playerScore').style.color = "black";
            document.getElementById('computerScore').style.color = "black";
        }



        document.getElementById('result').innerHTML = result;
        document.getElementById('playerScore').innerHTML = (`Player Score: ${playerScore}`);
        document.getElementById('computerScore').innerHTML = (`Computer Score: ${computerScore}`)
        return
    }


buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

//Refresh the page to start a new game
refresh.addEventListener('click', function(){
    location.reload();
    return false;
});



















