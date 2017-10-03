var grid = Array(100).fill(0) //chg back to 100
//console.log(grid, grid.length)

//store snakes and ladders keys
var jumps = {
//if has jump, move player to that value itself;
  1: 38,  4:14,  9:31,  17:7,  21:42, 28:84, 51:67,  54:34, 62:19,  64:60,  72:91,  80:99,  87:36,
  93:73,  95:75,  98:79,
}


function getJump(rollValue) {
  if (jumps[rollValue]) {
  //  console.log(jumps[rollValue]);
    return jumps[rollValue]
  } else return 0
}
// console.log(typeof(getJump(2)));

//change board for reset.
var reset = () => {
  var grid = Array(100).fill(0) //chg to 100
  changePlayer()
}

//variable definitionss
var player = 1 //may be 1 or 2, add more later
var move = 0

//check win
function whoWon() {
  if (grid[100] > 0) {
    console.log('winner', grid[100]); //winner number
    $("#jump").text(`Winner is : ${grid[100]}`)
    //add prompt to reset/button. after delay.
    reset()
    return grid[100]
  }
}

//function set grid
function playTurn() {
  console.log('PLAYER START:', player);

  //update code to get last move of this player, last index of player. Set to 1 at start of game (index will be -1). can this be refactored?
  var lastMove = grid.lastIndexOf(player)<1?0:grid.lastIndexOf(player)

  console.log('lastMove',lastMove);

  //get random value 1-6
  var roll = Math.floor(Math.random() * 6) + 1
  console.log('rollValue', roll);
  var nextPos = lastMove+roll
//add codes to show pplayer at roll+ position first, before jump.

  //lookup jump based on new player position .
  // var jump = getJump(roll+lastMove) //should define outside?
  // console.log('jump', jump);
  //
  // //set the value to move this player to new position plus the jump
  // move = lastMove + roll + jump
  // console.log('move', move)
console.log('jump', getJump(nextPos));
move = getJump(nextPos)===0?nextPos:getJump(nextPos)
console.log('move', move)
showTexts(lastMove,roll,nextPos,move, player)

//just
//add animation between nextPos and move.

  //if player >100 (wins), set to index 100.
  move > 100 ? move = 100 : grid[move] = player
  grid[move] = player // keep changing player to add to grid.

  console.log('END ROUND');
  changePlayer()
}
//change player, add 4 players of diffrerent colors
function changePlayer() {
  player === 1 ? player = 2 : player = 1
}

//run a round until someone wins
// do {
//   playTurn()
// } while (!whoWon());

// console.log(grid);

$(document).ready(function() {
  var $dice = $("#dice")
  $dice.on('click', runGame) //when to put () and when not to? if put () it will run auto. it w/o (), will run when clicked
})

var runGame = ()=>{
  if(whoWon()){
    whoWon()
  }else
  playTurn()
}


function showTexts(lastMove,roll,newPos,move, player){
  var $diceImg = $('img.dice')
  $diceImg.attr('src',"../assets/images/Dice-"+roll+".png")

  var $currPos = $("#currPos")
  $currPos.text('Last Position is: ' + lastMove )

  var $newPos = $("#newPos")
  $newPos.text('New position is: ' + newPos)

  var $jump = $("#jump")
  $jump.text("Ok, jumping to: "+ move)
//add first to newPos, then delay and change to move
$('div').removeClass(`player${player}`);
  $(`[data-id='${newPos}']`).addClass(`player${player}`);
  $(`[data-id='${move}']`).addClass(`player${player}`);
}
