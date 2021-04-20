let playbutton = document.getElementById("play");
//playbutton.addEventListener("click", createBoard);
let board = document.getElementById("board");

for (let i = 0; i < 9; i++) {
  let box = document.getElementById(i);
  box.addEventListener("click", boxCheck(this.id));
}

function boxCheck(id) {
  console.log(id);
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

//function createBoard() {
//for (i = 0; i < 9; i++) {
//square = document.createElement("button");
//square.id = i;
//square.class = "square";
//document.append(square);
//if (i % 3 == 2) {
//document.append(document.createElement("p"));
//}
//}
//}
