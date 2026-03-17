const board = document.getElementById("board")

// create board
for(let i=0;i<225;i++){

let cell = document.createElement("div")
cell.classList.add("cell")

board.appendChild(cell)

}

// dice button
const diceBtn = document.getElementById("diceBtn")

diceBtn.addEventListener("click", rollDice)

function rollDice(){

let dice = Math.floor(Math.random()*6)+1

document.getElementById("diceResult").innerText =
"Dice: " + dice

}
