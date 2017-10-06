var grid = Array(100).fill(0)

//store snakes and ladders keys. jump refers to change of position
var jumps = {
  1: 38,
  4: 14,
  9: 31,
  17: 7,
  21: 42,
  28: 84,
  51: 67,
  54: 34,
  62: 19,
  64: 60,
  72: 91,
  80: 99,
  87: 36,
  93: 73,
  95: 75,
  98: 79,
}

function getJump(rollValue) {
  if (jumps[rollValue]) {
    //  console.log(jumps[rollValue]);
    return jumps[rollValue]
  } else return 0

}

var player = 1
var move = 0

function whoWon() {
  if (grid[100] > 0) {
    $("#winner").text(`Winner is : ${grid[100]}`)
    return grid[100]
  }
}

//function set grid
function playTurn() {
  // console.log('PLAYER START:', player);
  //get last move of this player, last index of player. Set to 1 at start of game (index will be -1).
  var lastMove = grid.lastIndexOf(player) < 1 ? 0 : grid.lastIndexOf(player)
  //get random value 1-6
  var roll = Math.floor(Math.random() * 6) + 1
  // console.log('rollValue', roll);
  var nextPos = lastMove + roll
  // console.log('jump', getJump(nextPos));
  move = getJump(nextPos) === 0 ? nextPos : getJump(nextPos)
  // console.log('move', move)
  showTexts(lastMove, roll, nextPos, move, player)
  move > 100 ? move = 100 : grid[move] = player
  grid[move] = player
  changePlayer()
}

function changePlayer() {
  player === 1 ? player = 2 : player = 1
}

$(document).ready(function() {
  var $dice = $("#dice")
  $dice.on('click', runGame)
})

var runGame = () => {
  $('div#gametext').show()
  if (whoWon()) {
    whoWon()
  } else
    playTurn()
}

var $diceImg = $('img.dice')
var $playerNo = $('#playerNo')
var $currPos = $("#currPos")
var $newPos = $("#newPos")
var $jump = $("#jump")

function showTexts(lastMove, roll, newPos, move, player) {
  $diceImg.attr('src', "./assets/images/Dice-" + roll + ".png")
  $playerNo.text('Current Player: ' + player)
  $currPos.text('Last Position is: ' + lastMove)
  $newPos.text('New position is: ' + newPos)
  $jump.text("Ok, jumping to: " + move)
  $('div').removeClass(`player${player}`);
  // $(`[data-id='${newPos}']`).addClass(`player${player}`)
  $(`[data-id='${move}']`).addClass(`player${player}`);
}
