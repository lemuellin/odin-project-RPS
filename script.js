// RPS Game Logic

let playerSelection;
let playerWinCount = 0;
let computerWinCount = 0;

const div = document.querySelector('#result');
const showResult1 = document.createElement('h1');
const showResult2 = document.createElement('h1');
div.appendChild(showResult1);
div.appendChild(showResult2);



// computer randomly play
function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
    case 0:
        return "Rock";
        break;
    case 1:
        return "Paper";
        break;
    case 2:
        return "Scissors";
        break;
    }
}

// read player selection and compare it with computer selection for 1 round
function playRound(playerSelection){

    if (playerSelection){
        
        /*force to make all inputs to the same format*/
        let computerSelection = computerPlay();
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        
        //console.log(playerSelection, computerSelection);

        /*assign ROCK = 1, PAPER = 2, SCISSORS = 3*/
        let pStemp, cStemp
        if (playerSelection == "ROCK"){
            pStemp = 1;
        }else if (playerSelection == "PAPER"){
            pStemp = 2;
        }else{
            pStemp = 3;
        }

        if (computerSelection == "ROCK"){
            cStemp = 1;
        }else if (computerSelection == "PAPER"){
            cStemp = 2;
        }else{
            cStemp = 3;
        }
        
        /*3>2>1, but 1>3*/
        if (pStemp == cStemp){
        return `It is a draw, you both played: ${playerSelection}. Current score: ${++playerWinCount} : ${++computerWinCount}`;
        }else if (pStemp == 1 && cStemp ==3){
        return `You win! ${playerSelection} beat ${computerSelection}. Current score: ${++playerWinCount} : ${computerWinCount}`;
        }else if (pStemp == 3 && cStemp ==1){
        return `You lose! ${computerSelection} beat ${playerSelection}. Current score: ${playerWinCount} : ${++computerWinCount}`;
        }else if (pStemp > cStemp){
        return `You win! ${playerSelection} beat ${computerSelection}. Current score: ${++playerWinCount} : ${computerWinCount}`;
        }else{
        return `You lose! ${computerSelection} beat ${playerSelection}. Current score: ${playerWinCount} : ${++computerWinCount}`;
        }

    }
    
}

// Show results
function results(string){
    showResult1.textContent = playRound(string);
    showResult2.textContent = game();
}

// play five rounds and record the winner

function game(){
    if (playerWinCount!=0 || computerWinCount!=0){
        let gameResult;
        if (playerWinCount==5 && computerWinCount ==5){
            gameResult = "It is a draw! Score: " + playerWinCount + " : " + computerWinCount;
            playerWinCount = 0;
            computerWinCount = 0;
            return gameResult;
        }else if (playerWinCount==5){
            gameResult = "YOU ARE THE ULTIMATE CHAMPION! Score: " + playerWinCount + " : " + computerWinCount;
            playerWinCount = 0;
            computerWinCount = 0;
            return gameResult;
        }else if (computerWinCount==5){
            gameResult = "LOSERRR! Score: " + playerWinCount + " : " + computerWinCount;
            playerWinCount = 0;
            computerWinCount = 0;
            return gameResult;
        }
        return "";
    }
}


// Button
const btnR = document.querySelector('.btnR');
btnR.addEventListener('click', ()=>{results("rock"); game()});

const btnP = document.querySelector('.btnP');
btnP.addEventListener('click', ()=>{results("paper")});

const btnS = document.querySelector('.btnS');
btnS.addEventListener('click', ()=>{results("scissors")});




/*
I'd probably prefer to do something like this:

playRoundHandler(event) {
  playRound(event.target.value);
}

rockButton.addEventListener('click', playRoundHandler)
and attach the value to your button itself
<button value="ROCK" />
if you do that, you can use event delegation
https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation
Stack Overflow
What is DOM Event delegation?
Can anyone please explain event delegation in JavaScript and how is it useful?
Image
and really simplify your code
One event listener to handle all your RPS buttons 
*/