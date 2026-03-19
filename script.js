let userScore=0;
let compScore=0;

const choices=document.querySelector(".choice");

const genCompChoice=() =>{
    const options=["rock","paper","scissor"];
    const randindx=Math.floor(Math.random()*3);
}

const playGame=(userchoice) =>{
}

choices.forEach(choice => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
});