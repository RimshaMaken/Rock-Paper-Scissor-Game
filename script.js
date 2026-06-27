let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    //rock, paper, scisssor
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Draw!";
      msg.style.backgroundColor = "rgb(2, 2, 21)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }else{
         compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
          msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
     if(userChoice == compChoice){
        drawGame();
     }else{
        let userWin = true;
        if(userChoice == "rock"){
           userWin =  compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
             userWin =  compChoice === "scissor" ? false : true;
        }else{
             userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
     }
    
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked" , userChoice);
        playGame(userChoice)
    });
    
});