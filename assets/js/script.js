var grid = Array(100).fill(0)
//console.log(grid, grid.length)

//store snakes and ladders keys
var jumps = {
  1:5,
  3:3,
  5:1,
  10:2,
  15:8
}

function getJump(rollValue){
  //return sort.attr('selected') ? true : false;
  if (jumps[rollValue]) {
      console.log(jumps[rollValue]);
      return jumps[rollValue]
  } else return 0
}
// console.log(typeof(getJump(2)));

//random #s - to add to function
var rollDice = () => {return Math.floor(Math.random()*6)+1}
//console.log(rollDice());


var reset = () => {
  var grid = Array(100).fill(0)
  changePlayer()
}

//var defs
var player = 1  //may be 1 or 2, add more later
var move = 0
//var jump = 0
//check win
function whoWon(){
  if(grid[100]>0){
    console.log('winner',grid[100]); //winner number
    return grid[100]
  }
}

//function set grid
function setGrid(){
//  console.log('player start set grid', player);
//console.log('move',move);
  var roll = rollDice()
  console.log('rollValue',roll);
  //lookup jumps, add jump value to rollVal if, validate for negative moves?
   var jump = getJump(roll)
   console.log(jump);
  //  var newMove = jump + roll
  //  console.log(newMove);
   move =   move + roll + jump
 console.log('move', move)
   move>100?move=100:grid[move] = player
   console.log('grid[move]',grid[move]);
   grid[move] = player // keep changing player to add to grid.
   changePlayer()
}
//change player, add 4 players of diffrerent colors
function changePlayer(){
  player===1?player=2:player=1
}
//console.log(player);

//play game
// function play(){
//   whoWon()?reset():setGrid()
// }
// play()
// play()
// play()
 // setGrid()
do {
  setGrid()
} while (!whoWon());
