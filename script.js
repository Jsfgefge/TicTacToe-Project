function Gameboard() {
  let gameState = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
  let myState = "";
  let isGameEnded = false;

  const getCurrentSate = function () {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        myState += gameState[i][j] + " ";
      }
      myState += "\n";
    }
    return myState;
  };

  return { gameState, getCurrentSate, myState, isGameEnded };
}

function GameFlow(gameArr) {
  const newMove = (x, y, z) => (gameArr[x][y] = z == 0 ? "x" : "o");

  const checkWin = function (isGameEnded) {
    if(!isGameEnded){
      
    }
  };

  return { newMove, gameArr, checkWin };
}

function NewPlayer() {}

//testing-------------------------
const newGame = Gameboard();
const gameFlow = GameFlow(newGame.gameState);

gameFlow.newMove(1, 1, 1);
gameFlow.newMove(1, 2, 0);
gameFlow.newMove(2, 1, 0);
gameFlow.newMove(1, 0, 1);
gameFlow.newMove(0, 1, 1);

// newGame.newMove(1,1,1);
// newGame.newMove(0,1,0);
// newGame.newMove(1,2,1);
// newGame.newMove(0,2,0);

// newGame.getCurrentSate();

console.log(newGame.getCurrentSate());
// console.table({
//   myBoardState: newGame.gameState
// })

console.log(gameFlow.gameArr, "hola");
