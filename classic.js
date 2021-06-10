let ximg = "X.png";
let oimg = "O.png";
let playbutton = document.getElementById("play");
playbutton.addEventListener("click", resetBoard);
let board = document.getElementById("board");
let turn = 1;
let boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//add event listener to each button
for (let i = 0; i < 9; i++) {
  let box = document.getElementById(i);
  box.addEventListener("click", (event) => boxCheck(event));
}

//event listener for button
function boxCheck(event) {
  if (boardArray.length > 1) {
    let box = event.srcElement;
    let boxNum = box.id;
    console.log(boxNum);
    let image = document.createElement("img");
    image.className = "square";
    if (boardArray[boxNum] == 0) {
      boardArray[boxNum] = turn;
      if (turn === 1) {
        image.src = ximg;
        //box.className = "square x";
        turn = 2;
      } else {
        image.src = oimg;
        turn = 1;
      }
      box.append(image);
      console.log(box);
      console.log(boardArray);
    }
    let win = checkWin();
    console.log("win: " + win);
    if (win != 0) {
      announceWin(win);
      boardArray = [win];
    }
  }
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      boardArray[i * 3] == boardArray[i * 3 + 1] &&
      boardArray[i * 3 + 1] == boardArray[i * 3 + 2]
    ) {
      //check row win
      if (boardArray[i * 3] != 0) {
        return boardArray[i * 3];
      }
    } else if (
      boardArray[i] == boardArray[i + 3] &&
      boardArray[i + 3] == boardArray[i + 6]
    ) {
      //column win
      if (boardArray[i] != 0) {
        return boardArray[i];
      }
    }
    //check diagonal wins
    if (
      (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
      (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6])
    ) {
      if (boardArray[4] != 0) {
        return boardArray[4];
      }
    }
  }
  if (boardArray.includes(0)) {
    return 0;
  }
  return -1;
}

function announceWin(win) {
  //adds an announcement of who won below the board
  let header = document.createElement("h1");
  let winner = "";
  if (win == -1) {
    winner = "Tie";
  } else {
    winner = "Player " + win + " wins!";
  }
  header.innerHTML = winner;
  document.getElementById("win").append(header);
}

function resetBoard() {
  //clears images from buttons
  for (let i = 0; i < 9; i++) {
    let button = document.getElementById(i);
    button.innerHTML = "";
  }
  //resets play conditions
  turn = 1;
  boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.getElementById("win").innerHTML = "";
}
