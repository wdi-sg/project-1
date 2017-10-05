var grid = Array(100).fill(0)
//console.log(grid, grid.length)

//store snakes and ladders keys
var jumps = {
  1: 38,  4:14,  9:31,  17:7,  21:42, 28:84, 51:67,  54:34, 62:19,  64:60,  72:91,  80:99,  87:36,
  93:73,  95:75,  98:79,
}


function getJump(rollValue) {
  if (jumps[rollValue]) {
  //  console.log(jumps[rollValue]);
    return jumps[rollValue]
  } else return 0
}

//change board for reset.
var reset = () => {
  var grid = Array(100).fill(0)
  $('div').removeClass(`player1`);
  $('div').removeClass(`player2`);
  $('div#gametext').empty()
  changePlayer()
}


var player = 1
var move = 0

function whoWon() {
  if (grid[100] > 0) {
    console.log('winner', grid[100]); //winner number
    $("#jump").text(`Winner is : ${grid[100]}`)
    //add prompt to reset/button. after delay.
    // reset()
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
  console.log('jump', getJump(nextPos));
  move = getJump(nextPos)===0?nextPos:getJump(nextPos)
  console.log('move', move)
  showTexts(lastMove,roll,nextPos,move, player)




  move > 100 ? move = 100 : grid[move] = player
  grid[move] = player

  console.log('END ROUND');
  changePlayer()
}
//change player, add 4 players of diffrerent colors
function changePlayer() {
  player === 1 ? player = 2 : player = 1
}


$(document).ready(function() {
  var $dice = $("#dice")
  $dice.on('click', runGame)
  var $reset = $('#reset')
    $reset.on('click',reset)
})

var runGame = ()=>{
$('div#gametext').show()
  if(whoWon()){
    whoWon()
  }else
  playTurn()
}

var $diceImg = $('img.dice')
var $currPos = $("#currPos")
var $newPos = $("#newPos")
var $jump = $("#jump")

function showTexts(lastMove,roll,newPos,move, player){
  $diceImg.attr('src',"./assets/images/Dice-"+roll+".png")
  $currPos.text('Last Position is: ' + lastMove )
  $newPos.text('New position is: ' + newPos)
  $jump.text("Ok, jumping to: "+ move)
  $('div').removeClass(`player${player}`);
  // $(`[data-id='${newPos}']`).addClass(`player${player}`)
  $(`[data-id='${move}']`).addClass(`player${player}`);
}
