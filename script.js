// LUDO GAME SCRIPT

// get board element
const board = document.getElementById("board");

// create board grid
for (let row = 0; row < 15; row++) {
  for (let col = 0; col < 15; col++) {

    const cell = document.createElement("div");
    cell.classList.add("cell");

    // color home areas
    if (row < 6 && col < 6) {
      cell.classList.add("red");
    }

    if (row < 6 && col > 8) {
      cell.classList.add("blue");
    }

    if (row > 8 && col < 6) {
      cell.classList.add("green");
    }

    if (row > 8 && col > 8) {
      cell.classList.add("yellow");
    }

    board.appendChild(cell);
  }
}


// dice elements
const diceBtn = document.getElementById("diceBtn");
const diceResult = document.getElementById("diceResult");

// dice faces
const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];


// roll dice
function rollDice(){

  diceResult.innerHTML = "Rolling...";

  // dice animation
  let rolls = 10;
  let animation = setInterval(() => {

    let randomFace = Math.floor(Math.random()*6);
    diceResult.innerHTML = "Dice: " + diceFaces[randomFace];

    rolls--;

    if(rolls === 0){

      clearInterval(animation);

      let finalRoll = Math.floor(Math.random()*6);

      diceResult.innerHTML =
      "Dice: " + diceFaces[finalRoll] +
      " (" + (finalRoll+1) + ")";

    }

  },100);
}


// button click
diceBtn.addEventListener("click", rollDice);
