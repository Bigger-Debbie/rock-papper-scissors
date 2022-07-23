//This is a practice rock paper scissors game
//Variables
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

//Rock button is clicked
function rockClick() {
    let computer = getComputerChoice();
    let player = "Rock";

    console.log(computer);

    disableChoice();
    document.getElementById("player-choice").innerText = player.toUpperCase();
    
    logic(player, computer);
    document.getElementById("replay-btn").style.display = "flex";
}

//Paper button is clicked
function paperClick() {
    let computer = getComputerChoice();
    let player = "Paper";

    console.log(computer);

    disableChoice();
    document.getElementById("player-choice").innerText = player.toUpperCase();
    
    logic(player, computer);
    document.getElementById("replay-btn").style.display = "flex";
}

//Scissors button is clicked
function scissorsClick() {
    let computer = getComputerChoice();
    let player = "Scissors";

    console.log(computer);

    disableChoice();
    document.getElementById("player-choice").innerText = player.toUpperCase();
    
    logic(player, computer);
    document.getElementById("replay-btn").style.display = "flex";
}

//Game logic
function logic(player, computer) {
    if (player === computer){
        console.log("TIE");
        document.getElementById("tie").style.display = "flex";
    } else if (player === "Rock" && computer === "Paper" || player === "Paper" && computer === "Scissors" || player === "Scissors" && computer === "Rock") {
        console.log("LOOSER");
        document.getElementById("looser").style.display = "flex";
    } else if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
        console.log("WINNER");
        document.getElementById("winner").style.display = "flex";
    }
}

//Disable choice buttons
function disableChoice() {
    document.getElementById("rock").disabled = 'true';
    document.getElementById("paper").disabled = 'true';
    document.getElementById("scissors").disabled = 'true';
}

function replay() {
    location.reload();
}