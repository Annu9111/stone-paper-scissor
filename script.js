let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const winSound = new Audio("win.mp3");
const loseSound = new Audio("lose.wav");
const drawSound = new Audio("draw.mp3");

const genCompChoice=() =>{
    const options=["rock","paper","scissor"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
}

const drawGame=() =>{
    // console.log("It's a Draw")
    msg.innerText="It's a Draw"
    msg.style.background="#6c757d"
    drawSound.play();
}

const  showWinner =(userwin,userChoice,compChoice)=>{
    if (userwin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win");
        msg.innerText=`🎉You Win!🎊 Your ${userChoice} beats ${compChoice}`;
        winSound.play();
        msg.style.background = "green";
        msg.style.color="white";
    }else{
        compScore++
        compScorePara.innerText=compScore;
        // console.log("You lose");
        msg.innerText=`You Lose!😥 ${compChoice} beats Your ${userChoice}`;
        loseSound.play();
        msg.style.background = "red";
        msg.style.color="white";
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