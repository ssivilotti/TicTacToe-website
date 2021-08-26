const ximg = "images/X.png";
const oimg = "images/O.png";

let board0 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let board1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let board2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let board = [board0, board1, board2];

let turn = 1;

createBoard();

function createBoard() {
  for(let i=0; i<3; i++){
    const boardElement = document.getElementById("board"+i);
    for (let j=0; j<3; j++){
      let row = document.createElement("div");
      row.id = i + "row" + j;
      for (let k=0; k<3; k++){
        let button = document.createElement("button");
        button.className = "square";
        button.id = j*3+k;
        row.appendChild(button);
      }
      boardElement.append(row);
    }
  }
  turn = 1; 
  let board0 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let board1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let board2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let board = [board0, board1, board2];
}

function boxCheck(event) {
  //box is the HTML button element
  const box = event.srcElement;
  //boxBoard is the integer of what board the box is on
  const boxBoard = box.id.boxlocation.substring(0, 1);
  //boxPosition is where on the board the box is
  const boxPostion = box.id.boxlocation.substring(2, 3);
  let boardArray = board[boxBoard];
  if (boardArray[boxPostion] === 0) {
    //sets value of checked box on board
    boardArray[boxPostion] = turn;
    let image = document.createElement("img");
    //changes which player's turn it is and sets box image
    if (turn === 1) {
      image.src = ximg;
      turn = 2;
    } else {
      image.src = oimg;
      turn = 1;
    }
    box.append(image);
  }
  const winner = checkWin();
  if (winner !== 0) {
    announceWin(winner);
    boardArray = [winner];
  }
}

function checkWin() {
  let win = 0;
  //iterates through the vertical board slices
  for (let h = 0; h < 3; h += 1) {
    const boardArray = board[h];
    for (let i = 0; i < 3; i += 1) {
      //check row win
      if (
        boardArray[i * 3] === boardArray[i * 3 + 1] &&
        boardArray[i * 3 + 1] === boardArray[i * 3 + 2]
      ) {
        if (boardArray[i * 3] !== 0) {
          win = boardArray[i * 3];
        }
      } else if (
        boardArray[i] === boardArray[i + 3] &&
        boardArray[i + 3] === boardArray[i + 6]
      ) {
        //column win
        if (boardArray[i] !== 0) {
          win = boardArray[i];
        }
      }
    }
    //check diagonal wins
    if (
      (boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) ||
      (boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6])
    ) {
      if (boardArray[4] !== 0) {
        win = boardArray[4];
      }
    }
  }
  //check vertical column wins
  for (let j = 0; j < 9; j += 1) {
    if (board0[j] === board1[j] && board1[j] === board2[j]) {
      if (board1[j] !== 0) {
        win = board1[j];
      }
    }
  }
  //check diagonals
  //if completely full, declare tie
  return win;
}

function announceWin(win) {
  //adds an announcement of who won below the board
  const header = document.createElement("h1");
  let winner = "";
  if (win === -1) {
    winner = "Tie";
  } else {
    winner = "Player " + win + " wins!";
  }
  header.innerHTML = winner;
  document.getElementById("win").append(header);
}
