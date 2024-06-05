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
  const myEnum = {
    fisrt:   gameArr[0][0],
    second:  gameArr[0][1],
    third:   gameArr[0][2],
    fourth:  gameArr[1][0],
    fifth:   gameArr[1][1],
    sixth:   gameArr[1][2],
    seventh: gameArr[2][0],
    eighth:  gameArr[2][1],
    ninth:   gameArr[2][2]
  }


  const newMove = (x, y, z) => (gameArr[x][y] = z == 0 ? "x" : "o");

  const checkWin = function (isGameEnded) {
    if(!isGameEnded){
      if(gameArr[0][1]==gameArr[0][0]&&gameArr[0][1]==gameArr[0][2]&&gameArr[0][1]!="_"){
        isGameEnded=true;
        return gameArr[0][1], isGameEnded;
      }
      if(gameArr[1][0]==gameArr[0][0]&&gameArr[1][0]==gameArr[2][0]&&gameArr[1][0]!="_"){
        isGameEnded=true;
        return gameArr[1][0], isGameEnded;
      }
      if((gameArr[1][1]==gameArr[1][0]&&gameArr[1][1]==gameArr[1][2]&&gameArr[1][1]!="_")||(gameArr[1][1]==gameArr[0][1]&&gameArr[1][1]==gameArr[2][1]&&gameArr[1][1]!="_")){
        isGameEnded=true;
        return gameArr[1][1], isGameEnded;
      }
      if(gameArr[1][2]==gameArr[0][2]&&gameArr[1][2]==gameArr[2][2]&&gameArr[1][2]!="_"){
        isGameEnded=true;
        return gameArr[1][2], isGameEnded;
      }
      if(gameArr[2][1]==gameArr[2][0]&&gameArr[2][1]==gameArr[2][2]&&gameArr[2][1]!="_"){
        isGameEnded=true;
        return gameArr[2][1], isGameEnded;
      }
      else
      {
        return "no winner yet";
      }
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
gameFlow.newMove(2, 0, 1);
gameFlow.newMove(2, 2, 1);
gameFlow.newMove(2, 1, 1);


// newGame.newMove(1,1,1);
// newGame.newMove(0,1,0);
// newGame.newMove(1,2,1);
// newGame.newMove(0,2,0);

// newGame.getCurrentSate();

console.log(newGame.getCurrentSate());

console.log(gameFlow.checkWin(newGame.isGameEnded));

// console.table({
//   myBoardState: newGame.gameState
// })

