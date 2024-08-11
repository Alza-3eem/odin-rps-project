const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.getElementById("result");

rockBtn.addEventListener("click", () => playRound('rock'));
paperBtn.addEventListener("click", () => playRound('paper'));
scissorsBtn.addEventListener("click", () => playRound('scissors'));

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
};

let playerScore = 0
let computerScore = 0

const playRound = (userChoice) => {
    const computerChoice = getComputerChoice();

    let roundResult;

    if (userChoice === computerChoice) {
        roundResult = `It was a tie! Both chose ${userChoice}.`
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")) {
        playerScore += 1;
        roundResult = `You won the round! You chose ${userChoice} and the computer chose ${computerChoice}.`
    } else {
        computerScore += 1;
        roundResult = `The computer won the round! The computer chose ${computerChoice} and you chose ${userChoice}.`
    }

    if (playerScore === 5) {
        result.innerText = `You won the game! The final score is Player Score: ${playerScore} Computer Score: ${computerScore}.`
        playerScore = 0
        computerScore = 0
    } else if (computerScore === 5) {
        result.innerText = `The computer won the game! The final score is Player Score: ${playerScore} Computer Score: ${computerScore}.`
        playerScore = 0
        computerScore = 0
    } else {
        result.innerText = `${roundResult} Player Score: ${playerScore} Computer Score: ${computerScore}.`
    }
};