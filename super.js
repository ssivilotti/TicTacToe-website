let ximg = "https://freetictactoe.com/images/mark-x.png";
let oimg = "https://www.hospitalevangelico.com/images/diabetes_imagen.png";
let boardElement = document.getElementById("board");
document.getElementById("play").addEventListener("click", createBoard);
let bigBoard;
let board;
let turn = 1;
createBoard();

//set board, initialize
function createBoard() {
  boardElement.innerHTML = "";
  //row of smaller boards
  for (let i = 0; i < 3; i++) {
    let largerow = document.createElement("div");
    largerow.id = "boardrow" + i;
    //largerow.className = "row";
    //smaller boards on the row
    for (let j = 0; j < 3; j++) {
      let smallboard = document.createElement("div");
      smallboard.id = 3 * i + j;
      smallboard.className = "superboard neutral";
      //rows on the smaller boards
      for (let k = 0; k < 3; k++) {
        let smallrow = document.createElement("div");
        smallrow.id = 3 * i + j + ":row" + k;
        //buttons in the smaller boards
        for (let l = 0; l < 3; l++) {
          let button = document.createElement("button");
          button.id = 3 * i + j + ":" + (3 * k + l);
          button.className = "supersquare";
          button.addEventListener("click", (event) => boxCheck(event));
          smallrow.append(button);
        }
        smallboard.append(smallrow);
      }
      largerow.append(smallboard);
    }
    boardElement.append(largerow);
  }
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
}

//event listener for button
function boxCheck(event) {
  let box = event.srcElement;
  let boxlocation = box.id;
  console.log(boxlocation);
  let image = document.createElement("img");
  image.className = "supersquare";
  if (board[boxlocation.substring(0, 1)][boxlocation.substring(2)] == 0) {
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
    let bigBox = document.getElementById(boxlocation.substring(0, 1));
    console.log(bigBox);
    if (win != 0) {
      console.log("someone won!2");
      bigBoard[boxlocation.substring(0, 1)] = win;
      console.log(bigBoard);
      bigBox.innerHTML = "";
      let largeImg = document.createElement("img");
      if (win == 1) {
        largeImg.src = ximg;
      } else if (win == 2) {
        largeImg.src = oimg;
      } else if (win == -1) {
        largeImg.src = "T.png";
      }
      bigBox.append(largeImg);
      let finalwin = checkWin(bigBoard);
      if (finalwin != 0) {
        announceWin(finalwin);
      }
    }
  }
}

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
        } else if (boardArray[i * 3 + 2] == -1) {
          return -1;
        }
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

// var board;
// var playerNum;
// var largeBoxID;
// var giantBoard;
// var turn;
// var on;
// var initialPlayer = 2;
// //pre-play
// onEvent("startBtn", "click", function () {
//   reset();
//   setScreen("gameScreen");
//   //update player name
//   if (getText("p1Name") !== "") {
//     setText("player1", getText("p1Name"));
//   }
//   if (getText("p2Name") !== "") {
//     setText("player2", getText("p2Name"));
//   }
// });

// //After win
// onEvent("againBtn", "click", function () {
//   setScreen("gameScreen");
//   reset();
// });

// //make it possible to look back at the game board w/out being able to resume the finished game
// onEvent("review", "click", function () {
//   setScreen("gameScreen");
//   //goes back to the win screen
//   showElement("button2");
// });
// onEvent("button2", "click", function () {
//   if (getText("playerName") === "") {
//     setScreen("welcomeScreen");
//     hideElement("tie");
//   } else {
//     setScreen("winScreen");
//     hideElement("button2");
//   }
// });

// //Play game
// onEvent("0:0", "click", function () {
//   boxCheck(0, 0);
// });

// //check to make sure the player clicked in the correct large box
// function boxCheck(boxNum, subBox) {
//   var boxClicked = "box" + boxNum;
//   if (turn === 0 || giantBoard[largeBoxID.substring(3, 4)] !== 0) {
//     hideElement(largeBoxID);
//     largeBoxID = boxClicked;
//   }
//   if (boxClicked == largeBoxID && board[boxNum * 9 + subBox] === 0 && on) {
//     showXO(subBox);
//     largeBoxID = "box" + subBox;
//     showElement(largeBoxID);
//     switchPlayers();
//   }
// }

// //change small square to player's image
// function showXO(subBox) {
//   hideElement(largeBoxID);
//   var boxID;
//   if (subBox != 9) {
//     boxID = largeBoxID.substring(3, 4) + ":" + subBox;
//   } else {
//     boxID = "box" + largeBoxID.substring(3, 4) + "XO";
//   }
//   console.log(boxID);
//   if (playerNum == 1) {
//     setProperty(
//       boxID,
//       "image",
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Not_allowed.svg/1107px-Not_allowed.svg.png"
//     );
//   } else {
//     setProperty(boxID, "image", "http://otranscribe.com/favicon.png");
//   }
//   showElement(boxID);
//   updateArray(subBox);
//   if (subBox != 9) {
//     checkWin();
//   }
// }

// //update the array of the specific box
// function updateArray(subBox) {
//   var boxNum = largeBoxID.substring(3, 4);
//   if (subBox != 9) {
//     board[9 * boxNum + subBox] = playerNum;
//     console.log(board);
//   } else {
//     giantBoard[boxNum] = playerNum;
//     console.log(giantBoard);
//   }
// }

// //switch who's turn it is
// function switchPlayers() {
//   if (playerNum == 1) {
//     hideElement("p1Box");
//     playerNum = 2;
//     showElement("p2Box");
//   } else {
//     hideElement("p2Box");
//     playerNum = 1;
//     showElement("p1Box");
//   }
//   turn++;
//   console.log(playerNum);
// }

// //check if a board is won
// function checkWin() {
//   var Box = largeBoxID.substring(3, 4) * 9;
//   if (
//     (board[Box + 0] == playerNum &&
//       ((board[Box + 1] == playerNum && board[Box + 2] == playerNum) ||
//         (board[Box + 3] == playerNum && board[Box + 6] == playerNum) ||
//         (board[Box + 4] == playerNum && board[Box + 8] == playerNum))) ||
//     (board[Box + 1] == playerNum &&
//       board[Box + 4] == playerNum &&
//       board[Box + 7] == playerNum) ||
//     (board[Box + 3] == playerNum &&
//       board[Box + 4] == playerNum &&
//       board[Box + 5] == playerNum) ||
//     (board[Box + 2] == playerNum &&
//       ((board[Box + 4] == playerNum && board[Box + 6] == playerNum) ||
//         (board[Box + 5] == playerNum && board[Box + 8] == playerNum))) ||
//     (board[Box + 3] == playerNum &&
//       board[Box + 4] == playerNum &&
//       board[Box + 5] == playerNum) ||
//     (board[Box + 6] == playerNum &&
//       board[Box + 7] == playerNum &&
//       board[Box + 8] == playerNum)
//   ) {
//     showXO(9);
//     console.log("win box " + largeBoxID.substring(3, 4));
//     if (
//       (giantBoard[0] == playerNum &&
//         ((giantBoard[1] == playerNum && giantBoard[2] == playerNum) ||
//           (giantBoard[3] == playerNum && giantBoard[6] == playerNum) ||
//           (giantBoard[4] == playerNum && giantBoard[8] == playerNum))) ||
//       (board[Box + 1] == playerNum &&
//         giantBoard[4] == playerNum &&
//         giantBoard[7] == playerNum) ||
//       (giantBoard[3] == playerNum &&
//         giantBoard[4] == playerNum &&
//         giantBoard[5] == playerNum) ||
//       (giantBoard[2] == playerNum &&
//         ((giantBoard[4] == playerNum && giantBoard[6] == playerNum) ||
//           (giantBoard[5] == playerNum && giantBoard[8] == playerNum))) ||
//       (giantBoard[3] == playerNum &&
//         giantBoard[4] == playerNum &&
//         giantBoard[5] == playerNum) ||
//       (giantBoard[6] == playerNum &&
//         giantBoard[7] == playerNum &&
//         giantBoard[8] == playerNum)
//     ) {
//       console.log("win!");
//       setScreen("winScreen");
//       setText("playerName", getText("player" + playerNum));
//       on = false;
//     }
//     //makes sure it isn't a tie
//   } else if (
//     board[Box] !== 0 &&
//     board[Box + 1] !== 0 &&
//     board[Box + 2] !== 0 &&
//     board[Box + 3] !== 0 &&
//     board[Box + 4] !== 0 &&
//     board[Box + 5] !== 0 &&
//     board[Box + 6] !== 0 &&
//     board[Box + 7] !== 0 &&
//     board[Box + 8] !== 0
//   ) {
//     giantBoard[largeBoxID.substring(3, 4)] = 3;
//     var boxID = "box" + largeBoxID.substring(3, 4) + "XO";
//     setProperty(
//       boxID,
//       "image",
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/LetterT.svg/2000px-LetterT.svg.png"
//     );
//     showElement(boxID);
//   }
//   if (
//     giantBoard[0] !== 0 &&
//     giantBoard[1] !== 0 &&
//     giantBoard[2] !== 0 &&
//     giantBoard[3] !== 0 &&
//     giantBoard[4] !== 0 &&
//     giantBoard[5] !== 0 &&
//     giantBoard[6] !== 0 &&
//     giantBoard[7] !== 0 &&
//     giantBoard[8] !== 0 &&
//     on
//   ) {
//     console.log("tie");
//     on = false;
//     showElement("tie");
//     showElement("button2");
//   }
// }

// //prepare for new game
// function reset() {
//   board = [
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//   ];
//   playerNum = initialPlayer;
//   switchPlayers();
//   initialPlayer = playerNum;
//   largeBoxID = "box1";
//   giantBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//   turn = 0;
//   clearAll();
//   on = true;
// }

// //clear board
// function clearAll() {
//   var boxID;
//   for (var i = 0; i < 9; i++) {
//     //hide boxes that show large XOs
//     boxID = "box" + i + "XO";
//     hideElement(boxID);
//     //hide green boxes
//     boxID = "box" + i;
//     hideElement(boxID);
//     //remove images from sub boxes
//     for (var p = 0; p < 9; p++) {
//       boxID = i + ":" + p;
//       setProperty(boxID, "image", "");
//     }
//   }
//   setText("playerName", "");
// }
