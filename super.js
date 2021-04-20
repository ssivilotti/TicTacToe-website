board = document.getElementById("board");

var board;
var playerNum;
var largeBoxID;
var giantBoard;
var turn;
var on;
var initialPlayer = 2;

//pre-play
onEvent("startBtn", "click", function () {
  reset();
  setScreen("gameScreen");
  //update player name
  if (getText("p1Name") !== "") {
    setText("player1", getText("p1Name"));
  }
  if (getText("p2Name") !== "") {
    setText("player2", getText("p2Name"));
  }
});

//After win
onEvent("againBtn", "click", function () {
  setScreen("gameScreen");
  reset();
});

//make it possible to look back at the game board w/out being able to resume the finished game
onEvent("review", "click", function () {
  setScreen("gameScreen");
  //goes back to the win screen
  showElement("button2");
});
onEvent("button2", "click", function () {
  if (getText("playerName") === "") {
    setScreen("welcomeScreen");
    hideElement("tie");
  } else {
    setScreen("winScreen");
    hideElement("button2");
  }
});

//Play game
onEvent("0:0", "click", function () {
  boxCheck(0, 0);
});
onEvent("0:1", "click", function () {
  boxCheck(0, 1);
});
onEvent("0:2", "click", function () {
  boxCheck(0, 2);
});
onEvent("0:3", "click", function () {
  boxCheck(0, 3);
});
onEvent("0:4", "click", function () {
  boxCheck(0, 4);
});
onEvent("0:5", "click", function () {
  boxCheck(0, 5);
});
onEvent("0:6", "click", function () {
  boxCheck(0, 6);
});
onEvent("0:7", "click", function () {
  boxCheck(0, 7);
});
onEvent("0:8", "click", function () {
  boxCheck(0, 8);
});
onEvent("1:0", "click", function () {
  boxCheck(1, 0);
});
onEvent("1:1", "click", function () {
  boxCheck(1, 1);
});
onEvent("1:2", "click", function () {
  boxCheck(1, 2);
});
onEvent("1:3", "click", function () {
  boxCheck(1, 3);
});
onEvent("1:4", "click", function () {
  boxCheck(1, 4);
});
onEvent("1:5", "click", function () {
  boxCheck(1, 5);
});
onEvent("1:6", "click", function () {
  boxCheck(1, 6);
});
onEvent("1:7", "click", function () {
  boxCheck(1, 7);
});
onEvent("1:8", "click", function () {
  boxCheck(1, 8);
});
onEvent("2:0", "click", function () {
  boxCheck(2, 0);
});
onEvent("2:1", "click", function () {
  boxCheck(2, 1);
});
onEvent("2:2", "click", function () {
  boxCheck(2, 2);
});
onEvent("2:3", "click", function () {
  boxCheck(2, 3);
});
onEvent("2:4", "click", function () {
  boxCheck(2, 4);
});
onEvent("2:5", "click", function () {
  boxCheck(2, 5);
});
onEvent("2:6", "click", function () {
  boxCheck(2, 6);
});
onEvent("2:7", "click", function () {
  boxCheck(2, 7);
});
onEvent("2:8", "click", function () {
  boxCheck(2, 8);
});
onEvent("3:0", "click", function () {
  boxCheck(3, 0);
});
onEvent("3:1", "click", function () {
  boxCheck(3, 1);
});
onEvent("3:2", "click", function () {
  boxCheck(3, 2);
});
onEvent("3:3", "click", function () {
  boxCheck(3, 3);
});
onEvent("3:4", "click", function () {
  boxCheck(3, 4);
});
onEvent("3:5", "click", function () {
  boxCheck(3, 5);
});
onEvent("3:6", "click", function () {
  boxCheck(3, 6);
});
onEvent("3:7", "click", function () {
  boxCheck(3, 7);
});
onEvent("3:8", "click", function () {
  boxCheck(3, 8);
});
onEvent("4:0", "click", function () {
  boxCheck(4, 0);
});
onEvent("4:1", "click", function () {
  boxCheck(4, 1);
});
onEvent("4:2", "click", function () {
  boxCheck(4, 2);
});
onEvent("4:3", "click", function () {
  boxCheck(4, 3);
});
onEvent("4:4", "click", function () {
  boxCheck(4, 4);
});
onEvent("4:5", "click", function () {
  boxCheck(4, 5);
});
onEvent("4:6", "click", function () {
  boxCheck(4, 6);
});
onEvent("4:7", "click", function () {
  boxCheck(4, 7);
});
onEvent("4:8", "click", function () {
  boxCheck(4, 8);
});
onEvent("5:0", "click", function () {
  boxCheck(5, 0);
});
onEvent("5:1", "click", function () {
  boxCheck(5, 1);
});
onEvent("5:2", "click", function () {
  boxCheck(5, 2);
});
onEvent("5:3", "click", function () {
  boxCheck(5, 3);
});
onEvent("5:4", "click", function () {
  boxCheck(5, 4);
});
onEvent("5:5", "click", function () {
  boxCheck(5, 5);
});
onEvent("5:6", "click", function () {
  boxCheck(5, 6);
});
onEvent("5:7", "click", function () {
  boxCheck(5, 7);
});
onEvent("5:8", "click", function () {
  boxCheck(5, 8);
});
onEvent("6:0", "click", function () {
  boxCheck(6, 0);
});
onEvent("6:1", "click", function () {
  boxCheck(6, 1);
});
onEvent("6:2", "click", function () {
  boxCheck(6, 2);
});
onEvent("6:3", "click", function () {
  boxCheck(6, 3);
});
onEvent("6:4", "click", function () {
  boxCheck(6, 4);
});
onEvent("6:5", "click", function () {
  boxCheck(6, 5);
});
onEvent("6:6", "click", function () {
  boxCheck(6, 6);
});
onEvent("6:7", "click", function () {
  boxCheck(6, 7);
});
onEvent("6:8", "click", function () {
  boxCheck(6, 8);
});
onEvent("7:0", "click", function () {
  boxCheck(7, 0);
});
onEvent("7:1", "click", function () {
  boxCheck(7, 1);
});
onEvent("7:2", "click", function () {
  boxCheck(7, 2);
});
onEvent("7:3", "click", function () {
  boxCheck(7, 3);
});
onEvent("7:4", "click", function () {
  boxCheck(7, 4);
});
onEvent("7:5", "click", function () {
  boxCheck(7, 5);
});
onEvent("7:6", "click", function () {
  boxCheck(7, 6);
});
onEvent("7:7", "click", function () {
  boxCheck(7, 7);
});
onEvent("7:8", "click", function () {
  boxCheck(7, 8);
});
onEvent("8:0", "click", function () {
  boxCheck(8, 0);
});
onEvent("8:1", "click", function () {
  boxCheck(8, 1);
});
onEvent("8:2", "click", function () {
  boxCheck(8, 2);
});
onEvent("8:3", "click", function () {
  boxCheck(8, 3);
});
onEvent("8:4", "click", function () {
  boxCheck(8, 4);
});
onEvent("8:5", "click", function () {
  boxCheck(8, 5);
});
onEvent("8:6", "click", function () {
  boxCheck(8, 6);
});
onEvent("8:7", "click", function () {
  boxCheck(8, 7);
});
onEvent("8:8", "click", function () {
  boxCheck(8, 8);
});

//check to make sure the player clicked in the correct large box
function boxCheck(boxNum, subBox) {
  var boxClicked = "box" + boxNum;
  if (turn === 0 || giantBoard[largeBoxID.substring(3, 4)] !== 0) {
    hideElement(largeBoxID);
    largeBoxID = boxClicked;
  }
  if (boxClicked == largeBoxID && board[boxNum * 9 + subBox] === 0 && on) {
    showXO(subBox);
    largeBoxID = "box" + subBox;
    showElement(largeBoxID);
    switchPlayers();
  }
}

//change small square to player's image
function showXO(subBox) {
  hideElement(largeBoxID);
  var boxID;
  if (subBox != 9) {
    boxID = largeBoxID.substring(3, 4) + ":" + subBox;
  } else {
    boxID = "box" + largeBoxID.substring(3, 4) + "XO";
  }
  console.log(boxID);
  if (playerNum == 1) {
    setProperty(
      boxID,
      "image",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Not_allowed.svg/1107px-Not_allowed.svg.png"
    );
  } else {
    setProperty(boxID, "image", "http://otranscribe.com/favicon.png");
  }
  showElement(boxID);
  updateArray(subBox);
  if (subBox != 9) {
    checkWin();
  }
}

//update the array of the specific box
function updateArray(subBox) {
  var boxNum = largeBoxID.substring(3, 4);
  if (subBox != 9) {
    board[9 * boxNum + subBox] = playerNum;
    console.log(board);
  } else {
    giantBoard[boxNum] = playerNum;
    console.log(giantBoard);
  }
}

//switch who's turn it is
function switchPlayers() {
  if (playerNum == 1) {
    hideElement("p1Box");
    playerNum = 2;
    showElement("p2Box");
  } else {
    hideElement("p2Box");
    playerNum = 1;
    showElement("p1Box");
  }
  turn++;
  console.log(playerNum);
}

//check if a board is won
function checkWin() {
  var Box = largeBoxID.substring(3, 4) * 9;
  if (
    (board[Box + 0] == playerNum &&
      ((board[Box + 1] == playerNum && board[Box + 2] == playerNum) ||
        (board[Box + 3] == playerNum && board[Box + 6] == playerNum) ||
        (board[Box + 4] == playerNum && board[Box + 8] == playerNum))) ||
    (board[Box + 1] == playerNum &&
      board[Box + 4] == playerNum &&
      board[Box + 7] == playerNum) ||
    (board[Box + 3] == playerNum &&
      board[Box + 4] == playerNum &&
      board[Box + 5] == playerNum) ||
    (board[Box + 2] == playerNum &&
      ((board[Box + 4] == playerNum && board[Box + 6] == playerNum) ||
        (board[Box + 5] == playerNum && board[Box + 8] == playerNum))) ||
    (board[Box + 3] == playerNum &&
      board[Box + 4] == playerNum &&
      board[Box + 5] == playerNum) ||
    (board[Box + 6] == playerNum &&
      board[Box + 7] == playerNum &&
      board[Box + 8] == playerNum)
  ) {
    showXO(9);
    console.log("win box " + largeBoxID.substring(3, 4));
    if (
      (giantBoard[0] == playerNum &&
        ((giantBoard[1] == playerNum && giantBoard[2] == playerNum) ||
          (giantBoard[3] == playerNum && giantBoard[6] == playerNum) ||
          (giantBoard[4] == playerNum && giantBoard[8] == playerNum))) ||
      (board[Box + 1] == playerNum &&
        giantBoard[4] == playerNum &&
        giantBoard[7] == playerNum) ||
      (giantBoard[3] == playerNum &&
        giantBoard[4] == playerNum &&
        giantBoard[5] == playerNum) ||
      (giantBoard[2] == playerNum &&
        ((giantBoard[4] == playerNum && giantBoard[6] == playerNum) ||
          (giantBoard[5] == playerNum && giantBoard[8] == playerNum))) ||
      (giantBoard[3] == playerNum &&
        giantBoard[4] == playerNum &&
        giantBoard[5] == playerNum) ||
      (giantBoard[6] == playerNum &&
        giantBoard[7] == playerNum &&
        giantBoard[8] == playerNum)
    ) {
      console.log("win!");
      setScreen("winScreen");
      setText("playerName", getText("player" + playerNum));
      on = false;
    }
    //makes sure it isn't a tie
  } else if (
    board[Box] !== 0 &&
    board[Box + 1] !== 0 &&
    board[Box + 2] !== 0 &&
    board[Box + 3] !== 0 &&
    board[Box + 4] !== 0 &&
    board[Box + 5] !== 0 &&
    board[Box + 6] !== 0 &&
    board[Box + 7] !== 0 &&
    board[Box + 8] !== 0
  ) {
    giantBoard[largeBoxID.substring(3, 4)] = 3;
    var boxID = "box" + largeBoxID.substring(3, 4) + "XO";
    setProperty(
      boxID,
      "image",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/LetterT.svg/2000px-LetterT.svg.png"
    );
    showElement(boxID);
  }
  if (
    giantBoard[0] !== 0 &&
    giantBoard[1] !== 0 &&
    giantBoard[2] !== 0 &&
    giantBoard[3] !== 0 &&
    giantBoard[4] !== 0 &&
    giantBoard[5] !== 0 &&
    giantBoard[6] !== 0 &&
    giantBoard[7] !== 0 &&
    giantBoard[8] !== 0 &&
    on
  ) {
    console.log("tie");
    on = false;
    showElement("tie");
    showElement("button2");
  }
}

//prepare for new game
function reset() {
  board = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  playerNum = initialPlayer;
  switchPlayers();
  initialPlayer = playerNum;
  largeBoxID = "box1";
  giantBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  turn = 0;
  clearAll();
  on = true;
}

//clear board
function clearAll() {
  var boxID;
  for (var i = 0; i < 9; i++) {
    //hide boxes that show large XOs
    boxID = "box" + i + "XO";
    hideElement(boxID);
    //hide green boxes
    boxID = "box" + i;
    hideElement(boxID);
    //remove images from sub boxes
    for (var p = 0; p < 9; p++) {
      boxID = i + ":" + p;
      setProperty(boxID, "image", "");
    }
  }
  setText("playerName", "");
}
