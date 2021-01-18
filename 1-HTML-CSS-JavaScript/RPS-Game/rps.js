let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

    

    function getComputerChoice() {
        const choices = ["rock", "scissors", "paper"];
        const selection = Math.floor(Math.random() * 3);
        return choices[selection];
    }

    function win(userChoice, computerChoice) {
        const smallUserWord = "user".fontsize(3).sub();
        const smallCompWord = "comp".fontsize(3).sub();
        const userChoice_div = document.getElementById(userChoice);
        const computerChoice_div = document.getElementById(computerChoice);
        userScore ++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}${smallUserWord} beats ${computerChoice.toLowerCase()}${smallCompWord}.  You win! 🎉`;
        userChoice_div.classList.add("green-glow");
        setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
        computerChoice_div.classList.add('red-glow');
        setTimeout( () => computerChoice_div.classList.remove('red-glow'), 500);
    }

    function lose(userChoice, computerChoice) {
        const smallUserWord = "user".fontsize(3).sub();
        const smallCompWord = "comp".fontsize(3).sub();
        const userChoice_div = document.getElementById(userChoice);
        const computerChoice_div = document.getElementById(computerChoice);
        computerScore ++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore
        result_p.innerHTML = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}${smallCompWord} beats ${userChoice.toLowerCase()}${smallUserWord}.  You lose! 😭`;
        userChoice_div.classList.add("red-glow");
        setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
        computerChoice_div.classList.add('green-glow');
        setTimeout( () => computerChoice_div.classList.remove('green-glow'), 500);
    }

    function draw(userChoice, computerChoice) {
        const smallUserWord = "user".fontsize(3).sub();
        const smallCompWord = "comp".fontsize(3).sub();
        const userChoice_div = document.getElementById(userChoice);
        result_p.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}${smallUserWord} equals ${computerChoice.toLowerCase()}${smallCompWord}.  You win! 🎉`;
        userChoice_div.classList.add("gray-glow");
        setTimeout(() => userChoice_div.classList.remove("gray-glow"), 500);
    }



    function game(userChoice) {
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                win(userChoice, computerChoice);
                break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                lose(userChoice, computerChoice);
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                draw(userChoice, computerChoice);
                break;        
        }

         if (userScore === 5) {
            alert("Congrats, you beat the computer!");
        } 
        if (computerScore === 5) {
            alert("Oh no!  The computer won.");
        }
    }

    function main() {
        rock_div.addEventListener('click', () => game("rock"));

        paper_div.addEventListener('click', () => game("paper"));

        scissors_div.addEventListener('click', () => game("scissors"));
    }

    main();