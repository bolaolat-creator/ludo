// ===== CREATE BOARD =====

const board = document.getElementById("board")
const cells = []

// build 15x15 board
for (let i = 0; i < 225; i++) {

    const cell = document.createElement("div")
    cell.classList.add("cell")

    board.appendChild(cell)

    cells.push(cell)
}


// ===== CREATE PATH AROUND BOARD =====

const path = []

// top row
for (let i = 0; i < 15; i++) path.push(i)

// right column
for (let i = 29; i <= 209; i += 15) path.push(i)

// bottom row
for (let i = 224; i >= 210; i--) path.push(i)

// left column
for (let i = 195; i >= 15; i -= 15) path.push(i)



// ===== CREATE PLAYER TOKEN =====

let playerPosition = 0

const player = document.createElement("div")

player.style.width = "20px"
player.style.height = "20px"
player.style.background = "black"
player.style.borderRadius = "50%"
player.style.margin = "auto"

cells[path[playerPosition]].appendChild(player)



// ===== DICE SYSTEM =====

const diceBtn = document.getElementById("diceBtn")
const diceResult = document.getElementById("diceResult")

const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"]



// ===== ROLL DICE FUNCTION =====

function rollDice(){

    let rolls = 10

    let animation = setInterval(() => {

        let temp = Math.floor(Math.random()*6)
        diceResult.innerHTML = "Dice: " + diceFaces[temp]

        rolls--

        if(rolls === 0){

            clearInterval(animation)

            let dice = Math.floor(Math.random()*6)+1

            diceResult.innerHTML =
            "Dice: " + diceFaces[dice-1] + " (" + dice + ")"

            movePlayer(dice)

        }

    },100)

}



// ===== MOVE PLAYER =====

function movePlayer(steps){

    playerPosition += steps

    if(playerPosition >= path.length){
        playerPosition = path.length - 1
    }

    cells[path[playerPosition]].appendChild(player)

}



// ===== BUTTON EVENT =====

diceBtn.addEventListener("click", rollDice)
