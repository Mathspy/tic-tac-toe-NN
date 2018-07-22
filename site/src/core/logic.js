import { loadModel, tensor } from "@tensorflow/tfjs"

let model

async function startLoadingModel() {
  model = await loadModel("./model/model.json")
}

function networkPlay(board) {
  return model.predict(byteifyBoard(board)).argMax(1).data();
}

function byteifyBoard(board) {
  return tensor([].concat(board.map(cell => cell === "X" ? 1 : 0), board.map(cell => cell === "O" ? 1 : 0)), [1, 18])
}

function reverseTurn(currentTurn) { //This function is just here to reverses turns in an elegant format instead of me having to add all this to every line where I want it to be used
  if (currentTurn === "O") {
    return "X";
  } else if (currentTurn === "X") {
    return "O";
  } else {
    throw Error("Something is not right!");
  }

}

function isGameOver(board) {
  for (let x = 0; x < 3; x++){
    let y = x * 3
    if (board[y] !== "?" && board[y] === board[y + 1] && board[y] === board[y + 2])
        return board[y]
    if (board[x] !== "?" && board[x] === board[x + 3] && board[x] === board[x + 6])
        return board[x]
  }


  if (board[0] !== "?" && board[0] === board[4] && board[0] === board[8])
      return board[0]
  if (board[2] !== "?" && board[2] === board[4] && board[4] === board[6])
      return board[2]

  return false
}

//Checks for draws
function noMoreMovesLeft(board) {
  return board.filter(cell => cell === "?").length ? false : true
}

//Exporting the AI for use in Store, same as gameOver and noMoreMovesLeft for checking in case player is the one to end it.
//Exporting reverseTurn for the reset function in Reactify.js
export { networkPlay, isGameOver, noMoreMovesLeft, reverseTurn, startLoadingModel };