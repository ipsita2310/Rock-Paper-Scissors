let userScore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];

}
const drawGame = () => {
    msg.innerText = "Game was Draw.Play Again.";
    msg.style.backgroundColor = "#061525";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `You Lose. ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =" , compChoice);

    if(userChoice === compChoice) {
        //Draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
   } else {
    //rock.paper
     userWin = compChoice === "rock" ? false : true;

   } 

   showWinner(userWin, userChoice, compChoice);
}
};

choices.forEach((choice)=> {
    choice.addEventListener("click",() =>{
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});
