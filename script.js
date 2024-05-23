function Gameboard() {
  let gameState = [['_','_','_'],
                   ['_','_','_'],
                   ['_','_','_']];
  let myState = "";
  const newMove = (x,y,z) => gameState[x][y]= (z==0)?"x":"o";
  const getCurrentSate = function() {for (let i= 0; i< 3; i++) {
    for (let j= 0; j < 3; j++) {
      myState+=gameState[i][j]+" ";
    }
    myState+="\n";
  }
    console.log(myState);
  };
  return {newMove, gameState, getCurrentSate, myState};
}

function NewPlayer(){

}

const newGame = Gameboard();
newGame.newMove(1,1,1);
newGame.newMove(0,1,0);
newGame.newMove(1,2,1);
newGame.newMove(0,2,0);

newGame.getCurrentSate();
console.table({
  myBoardState: newGame.gameState
})


console.log(newGame.myState);
