var grid = Array(20).fill(0) //chg back to 100
//console.log(grid, grid.length)

//store snakes and ladders keys
var jumps = {
  1: 5,
  3: 3,
  5: 1,
  10: -2,
  12:3,
  15: -8,
  17:4,
  97:3,
  98:-4,
  99:-20

}

function getJump(rollValue) {
  //return sort.attr('selected') ? true : false;
  if (jumps[rollValue]) {
  //  console.log(jumps[rollValue]);
    return jumps[rollValue]
  } else return 0
}
// console.log(typeof(getJump(2)));

//random #s - to add to function
var rollDice = () => {
  return Math.floor(Math.random() * 6) + 1
}
//console.log(rollDice());


var reset = () => {
  var grid = Array(20).fill(0) //chg to 100
  changePlayer()
}

//variable definitionss
var player = 1 //may be 1 or 2, add more later
var move = 0
var lastMoveOfThisPlayer

//var jump = 0

//check win
function whoWon() {
  if (grid[20] > 0) { //chg back to 100 **TO-DO***
    console.log('winner', grid[20]); //winner number
    return grid[20]
  }
}

//function set grid
function playTurn() {
  console.log('PLAYER START:', player);

  //get random value 1-6
  var roll = rollDice()
  console.log('rollValue', roll);

  //lookup jump.
  var jump = getJump(roll) //should define outside?
  console.log('jump', jump);

  //update code to get last move of this player, last index of player. Set to 1 at start of game (index will be -1). can this be refactored?
  lastMoveOfThisPlayer = grid.lastIndexOf(player)<1?1:grid.lastIndexOf(player)
  console.log('lastMoveOfThisPlayer',lastMoveOfThisPlayer);

  //set the value to move this player
  move = lastMoveOfThisPlayer + roll + jump
  console.log('move', move)

  //if player >20 (wins), set to index 20.
  move > 20 ? move = 20 : grid[move] = player
  grid[move] = player // keep changing player to add to grid.

  console.log('END ROUND');
  changePlayer()
}
//change player, add 4 players of diffrerent colors
function changePlayer() {
  player === 1 ? player = 2 : player = 1
}
//console.log(player);

//play game
// function play(){
//   whoWon()?reset():playTurn()
// }

//run a round until someone wins
do {
  playTurn()
} while (!whoWon());
console.log(grid);


// $(document).ready(function() {
//   var $dice = $('dice')
//   $dice.on('click', playTurn()) //when to put () and when not to?
//
// })
