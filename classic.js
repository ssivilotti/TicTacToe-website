let playbutton = document.getElementById("play");
playbutton.addEventListener("click", resetBoard);
let board = document.getElementById("board");
let turn = 1;
let boxArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//add event listener to each button
for (let i = 0; i < 9; i++) {
  let box = document.getElementById(i);
  box.addEventListener("click", (event) => boxCheck(event));
}

//event listener for button
function boxCheck(event) {
  let box = event.srcElement;
  let boxNum = box.id;
  console.log(boxNum);
  let image = document.createElement("img");
  image.className = "square";
  if (boxArray[boxNum] == 0) {
    boxArray[boxNum] = turn;
    if (turn === 1) {
      image.src = "https://freetictactoe.com/images/mark-x.png";
      //box.className = "square x";
      turn = 2;
    } else {
      image.src =
        "https://www.hospitalevangelico.com/images/diabetes_imagen.png";
      turn = 1;
    }
    box.append(image);
    console.log(box);
    console.log(boxArray);
  }
  let win = checkWin();
  console.log("win: " + win);
  if (win != 0) {
    announceWin(win);
  }
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      boxArray[i * 3] == boxArray[i * 3 + 1] &&
      boxArray[i * 3 + 1] == boxArray[i * 3 + 2]
    ) {
      //check row win
      if (boxArray[i * 3] != 0) {
        return boxArray[i * 3];
      }
    } else if (
      boxArray[i] == boxArray[i + 3] &&
      boxArray[i + 3] == boxArray[i + 6]
    ) {
      //column win
      if (boxArray[i] != 0) {
        return boxArray[i];
      }
    }
    //check diagonal wins
    if (
      (boxArray[0] == boxArray[4] && boxArray[4] == boxArray[8]) ||
      (boxArray[2] == boxArray[4] && boxArray[4] == boxArray[6])
    ) {
      if (boxArray[4] != 0) {
        return boxArray[4];
      }
    }
  }
  if (boxArray.includes(0)) {
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
  boxArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.getElementById("win").innerHTML = "";
}
