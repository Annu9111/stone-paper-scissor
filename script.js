let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document .querySelector("#user-score");
const compScorePara=document.querySelector("comp-score");

const genCompChoice=() =>{
    const options=["rock","paper","scissor"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
}

const drawGame=() =>{
    console.log("It's a Draw")
    msg.innerText="It's a Draw"
}

const  showWinner =(userwin,userChoice,compChoice)=>{
    if (userwin){
        userScore++;
        // console.log("You win");
        msg.innerText=`🎉You Win!🎊 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        // console.log("You lose");
        msg.innerText=`You Lose!😥 ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame=(userChoice) =>{
    const compChoice=genCompChoice();
    if (userChoice===compChoice){
        drawGame();
    }else{
        let Userwin=true;
        if (userChoice==="rock"){
            Userwin =compChoice ==="paper" ? false :true;
        }else if( userChoice==="paper"){
            Userwin=compChoice==="scissor" ? false :true;
        }else{
            Userwin=compChoice==="rock"? false :true;
        }
        showWinner(Userwin ,userChoice,compChoice);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
});