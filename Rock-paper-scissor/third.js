let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const userscoreboard=document.querySelector("#user-score");
const compscoreboard=document.querySelector("#comp-score");


const gencompchoice=() =>{
    const options=["rock","paper","scisors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
//rock paper scisors
};
 const drawGame=()=>{
    msg.innerText="game was draw. play again";
    // console.log("game was draw");
    
 };

 const showwinner=(userwin,userchoice,compchoice)=>{
    if (userwin) {
        userScore++;
        userScore.innerText=userScore;
        // console.log("youwinn");
        msg.innerText= ` you win!  your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundcolor="green";
    } else {
        compScore++;
        compScore.innerText=compScore;
        // console.log("you lose");
        msg.innerText=` you lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundcolor="red";
        
    }
 };

const playGame=(userchoice) =>{
   console.log("user choice = ", userchoice);
   const compchoice=gencompchoice();
   console.log("computer choice = ", compchoice);
    if(userchoice===compchoice){
drawGame();
    } else{
         let userwin=true;
         if(userchoice==="rock"){
             userwin=compchoice==="paper"  ? false :true;
         } else if(userchoice==="paper"){
             userwin=compchoice==="scissor" ? false:true;
         } else{
             userwin=compchoice==="rock" ? false:true;
         }
         showwinner(userwin, userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
    const userchoice=choice.getAttribute("id"); //to access each id by this 
     console.log("choice was clicked" , userchoice);
playGame( userchoice);
    });
});
