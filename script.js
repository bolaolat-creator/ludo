const board = document.getElementById("board")

// create 15x15 board
for(let i=0;i<225;i++){

let cell = document.createElement("div")
cell.classList.add("cell")

board.appendChild(cell)

}

// dice roll
function rollDice(){

let dice = Math.floor(Math.random()*6)+1

document.getElementById("diceResult").innerText =
"Dice: " + dice

}
