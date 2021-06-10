//js for super tic tac toe

//images for players
//make this changeable?
let ximg = "X.png";
let oimg = "O.png";

let boardElement = document.getElementById("board");
//add an event listener to the play link
document.getElementById("play").addEventListener("click", createBoard);
//stores the wins on the large board
let bigBoard;
//2D array of boxes in every small board, counts rows first then columns
let board;
//says who goes first
let turn = 1;
createBoard();

//set board, initialize
function createBoard() {
  boardElement.innerHTML = "";
  //row of smaller boards (put in a container)
  for (let i = 0; i < 3; i++) {
    let largerow = document.createElement("div");
    largerow.id = "boardrow" + i;
    //largerow.className = "row";
    //smaller boards on the row
    for (let j = 0; j < 3; j++) {
      let smallboard = document.createElement("div");
      //range of ids: [0,8]
      smallboard.id = 3 * i + j;
      smallboard.className = "superboard neutral";
      //rows on the smaller boards
      for (let k = 0; k < 3; k++) {
        let smallrow = document.createElement("div");
        //smallrow.id = "smallboard.id:row[0,2]"; ex. 0:row0
        smallrow.id = 3 * i + j + ":row" + k;
        //buttons in the smaller boards
        for (let l = 0; l < 3; l++) {
          let button = document.createElement("button");
          //smallboard id [0,8] : box location on small board [0,8]
          button.id = 3 * i + j + ":" + (3 * k + l);
          button.className = "supersquare";
          //add event listener to the button
          button.addEventListener("click", (event) => boxCheck(event));
          smallrow.append(button);
        }
        smallboard.append(smallrow);
      }
      largerow.append(smallboard);
    }
    boardElement.append(largerow);
  }
  //set arrays to zeros (availible)
  bigBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  turn = 1;
  //set all playable
  setAllPlayableClass("playable");
}

//event listener for button
function boxCheck(event) {
  let box = event.srcElement;
  //smallboard id [0,8]:box location on small board [0,8]
  let boxlocation = box.id;
  console.log(boxlocation);
  //adds image to box
  let image = document.createElement("img");
  image.className = "supersquare";
  if (document.getElementById(boxlocation.substring(0, 1)).className == "superboard playable") {
    //checks that box hasn't already been played
    if (board[boxlocation.substring(0, 1)][boxlocation.substring(2)] == 0) {
      //updates board array controller
      board[boxlocation.substring(0, 1)][boxlocation.substring(2)] = turn;
      if (turn == 1) {
        image.src = ximg;
        //box.className = "square x";
        turn = 2;
      } else {
        image.src = oimg;
        turn = 1;
      }
      box.append(image);
      console.log(box);
      console.log(boardElement);

      let win = checkWin(board[boxlocation.substring(0, 1)]);
      console.log("win: " + win);
      let finalwin = 0;
      //check if someone won
      if (win != 0) {
        //main board that was just won
        let bigBox = document.getElementById(boxlocation.substring(0, 1));
        bigBox.innerHTML = "";
        //set array of large boards
        bigBoard[boxlocation.substring(0, 1)] = win;
        console.log(bigBoard);
        //set img for win
        let largeImg = document.createElement("img");
        if (win == 1) {
          largeImg.src = ximg;
        } else if (win == 2) {
          largeImg.src = oimg;
        } else if (win == -1) {
          largeImg.src = "T.png";
        }
        bigBox.append(largeImg);
        //check if whole game was won
        finalwin = checkWin(bigBoard);

      }
      if (finalwin != 0) {
        setAllPlayableClass("neutral");
        announceWin(finalwin);
      } else {
        setPlayable(boxlocation);
      }

    }
  } else {
    //changes the board just played in to red
    //can add a rule pop up here?
    document.getElementById(boxlocation.substring(0, 1)).className = "superboard unplayable";
  }
}

//checks the array of size: 9 for win
//tie in a small board is accounted for, but need to win atleast 2 smallboards for the win
function checkWin(boardArray) {
  for (let i = 0; i < 3; i++) {
    //check row win
    if (
      (boardArray[i * 3] == boardArray[i * 3 + 1] &&
        (boardArray[i * 3 + 1] == boardArray[i * 3 + 2] ||
          boardArray[i * 3 + 2] == -1)) ||
      (boardArray[i * 3] == boardArray[i * 3 + 2] &&
        boardArray[i * 3 + 1] == -1) ||
      (boardArray[i * 3 + 1] == boardArray[i * 3 + 2] &&
        boardArray[i * 3 + 1] == -1)
    ) {
      for (let j = 0; j < 3; j++) {
        if (boardArray[i * 3 + j] != 0 && boardArray[i * 3 + j] != -1) {
          return boardArray[i * 3 + j];
        }
        // } else if (j == 2 && boardArray[i * 3 + j] == -1) {
        //   winner = -1;
        // }
      }
      //column win
    } else if (
      (boardArray[i] == boardArray[i + 3] &&
        (boardArray[i + 3] == boardArray[i + 6] || boardArray[i + 6] == -1))
      || (boardArray[i] == boardArray[i + 6] && boardArray[i + 3] == -1)
      || (boardArray[i + 3] == boardArray[i + 6] && boardArray[i] == -1)
    ) {
      for (let j = 0; j < 3; j++) {
        if (boardArray[i + j * 3] != 0 && boardArray[i + j * 3] != -1) {
          return boardArray[i + j * 3];
        }
      }
    }
    //check diagonal wins
    if (
      (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
      (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6]) ||
      (boardArray[0] == -1 && boardArray[4] == boardArray[8])
      || (boardArray[8] == -1 && boardArray[0] == boardArray[4])
      || (boardArray[2] == -1 && boardArray[4] == boardArray[6])
      || (boardArray[6] == -1 && boardArray[2] == boardArray[4])
    ) {
      if (boardArray[4] != 0) {
        return boardArray[4];
      }
    }
    //check diagonal win with tie
    if (boardArray[4] == -1 &&
      boardArray[0] == boardArray[8]) {
      return boardArray[0];
    }
    else if (boardArray[4] == -1 && boardArray[2] == boardArray[6]) {
      return boardArray[2];
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

//sets the appropriate boards playable and neutral
function setPlayable(lastmove) {
  setAllPlayableClass("neutral");
  console.log(lastmove.substring(2));
  let playableBoard = document.getElementById(lastmove.substring(2));
  console.log(playableBoard);
  playableBoard.className = "superboard playable";
  if (bigBoard[lastmove.substring(2)] != 0) {
    setAllPlayableClass("playable");
  }
}

//classString options are: neutral, playable, unplayable
function setAllPlayableClass(classString) {
  for (let i = 0; i < 9; i++) {
    let playableBoard = document.getElementById(i);
    if (bigBoard[i] != 0)
      playableBoard.className = "superboard neutral";
    else {
      playableBoard.className = "superboard " + classString;
      console.log(playableBoard);
    }
  }
}