//This is a practice rock paper scissors game
const choices = ["Rock", "Paper", "Scissors"];

function onClick() {
    let computerChoice = document.getElementById('cpu-choice').innerText;
    
    

    document.getElementById("choice-area").style.display = "flex";
}

//Gets computers random choice
function getComputerChoice(){
    var choice = choices[Math.floor(Math.random() * choices.length)];
    cpuChoice = choice;

    return(cpuChoice);
}

