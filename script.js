const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.getElementById("result");

rockBtn.addEventListener("click", () => play('rock'));
paperBtn.addEventListener("click", () => play('paper'));
scissorsBtn.addEventListener("click", () => play('scissors'));

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
};

const play = (userChoice) => {
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        return result.innerText = `It was a tie! Both chose ${userChoice}`
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")) {
        return result.innerText = `You won! You chose ${userChoice} and the computer chose ${computerChoice}.`
    } else {
        return result.innerText = `The computer won! The computer chose ${computerChoice} and you chose ${userChoice}.`
    }
};