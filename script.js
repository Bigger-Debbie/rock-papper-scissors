//This is a practice rock paper scissors game
const choices = ["Rock", "Paper", "Scissors"]
const rock = false;
const paper = false;
const scissors = false;
let computerChoice;

//Gets computers random choice
function getComputerChoice(){
    var choice = choices[Math.floor(Math.random() * choices.length)];
    cpuChoice = choice;

    let computer = cpuChoice.toUpperCase();
    document.getElementById("cpuchoice").innerText = computer;

    return(cpuChoice);
}

//Play button is clicked
function onPlayClick() {
    document.getElementById("choice-area").style.display = "flex";
    document.getElementById("play-btn").disabled = 'true';
}

function rockClick() {
    let computer = getComputerChoice();
    let player = "Rock";

    console.log(computer);

    document.getElementById("rock").disabled = 'true';
    document.getElementById("paper").disabled = 'true';
    document.getElementById("scissors").disabled = 'true';
    document.getElementById("player-choice").innerText = player.toUpperCase();
    
    if (computer === player){
        console.log("tie");
    } else if (computer === "Paper"){
        console.log("you lost")
    } else if (computer === "Scissors"){
        console.log("WINNER")
    }    
}

function logic(player, compuer) {
    

}
 





