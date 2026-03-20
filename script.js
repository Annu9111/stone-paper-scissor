let userScore=0;
let compScore=0;

const choices=document.querySelector(".choice");

const genCompChoice=() =>{
    const options=["rock","paper","scissor"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
}

const drawGame=() =>{
    console.log("It's a Draw")
}

const  showWinner =(userwin)=>{
    if (userwin){
        console.log("You win");
    }else{
        console.log("You lose");
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
        showWinner(Userwin);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
});