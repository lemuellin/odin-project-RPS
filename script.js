let computerSelection;
let playerSelection = window.prompt("Please input your selection: ");


function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
    case 0:
        return computerSelection = "Rock";
        break;
    case 1:
        return computerSelection = "Paper";
        break;
    case 2:
        return computerSelection = "Scissors";
        break;
    }
}
/*console.log(computerPlay());*/


function playRound(playerSelection, computerSelection){
    /*force to make all inputs to the same format*/
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    /*assign ROCK = 1, PAPER = 2, SCISSORS = 3*/
    if (playerSelection == "ROCK"){
        playerSelection = 1;
    }else if (playerSelection == "PAPER"){
        playerSelection = 2;
    }else{
        playerSelection = 3;
    }

    if (computerSelection == "ROCK"){
        computerSelection = 1;
    }else if (computerSelection == "PAPER"){
        computerSelection = 2;
    }else{
        computerSelection = 3;
    }
    
    /*3>2>1, but 1>3*/
    if (playerSelection == computerSelection){
    return "It is a draw";
    }else if (playerSelection == 1 && computerSelection ==3){
    return "You win!";
    }else if (playerSelection == 3 && computerSelection ==1){
    return "You lose!";
    }else if (playerSelection > computerSelection){
    return "You win!";
    }else{
    return "You lose!";
    }
}
/*console.log(playRound(playerSelection, computerSelection));*/

function game(){
    let playerWinCount = 0;
    let computerWinCount = 0;

    
    for (let i=0; i<5; i++){
        computerPlay();
        playRound(playerSelection, computerSelection);

        if (playRound(playerSelection, computerSelection)=="You win!"){
            playerWinCount++;
            console.log("You played " + playerSelection + ", computer played " + computerSelection + ", so you win!");
        }else if (playRound(playerSelection, computerSelection)=="You lose!"){
            computerWinCount++;
            console.log("You played " + playerSelection + ", computer played " + computerSelection + ", so you lose!");
        }else{
            console.log("You played " + playerSelection + ", computer played " + computerSelection + ", so it is a draw!");
        }
    }

    if (playerWinCount>computerWinCount){
        return "You win! Score:" + playerWinCount + ":" + computerWinCount;
    }else if (playerWinCount<computerWinCount){
        return "You lose! Score:" + playerWinCount + ":" + computerWinCount;
    }else{
        return "It is a draw! Score:" + playerWinCount + ":" + computerWinCount;
    }
}

console.log(game());
