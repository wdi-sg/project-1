$(function () {

  // define current player. By default, player 1 goes first
  var player1 =$('.player1')
  var player2 =$('.player2')
  var currentPlayer = player1
  // define starting position of grid
  var $startPoint = $('[data-value = 0]')
  // define current Position
  var currentPosition;
  var cellValue = $startPoint.data('value')
  //define dice button
  var $dice = $('.dice')


  $dice.on('click', rollDice)

  function rollDice() {
    var diceResult = Math.floor(Math.random()*7)
    cellValue += diceResult
    if (currentPlayer === player1) {
    // currentPosition = $('[data-value = cellValue]')
    currentPosition = $(`[data-value = ${cellValue}]`)
    t
    // }
  }

// current cell value = ($('.cell').data('value')) + dice value
// current cell Pos = $('.cell').data('current Cell value')
//  $('player 1').detach().appendTo($('current Cell Pos'))

// find initial position // box cell value 1. Append Player 1 inside
// check if player 1 = 1
// roll dice
// current position = player 1 val + dice value
// update current position on grid - append to cell
// switch player
// player 2 = -1
// roll dice
// /

// html
// create 16 square boxes div.
// give each square a class of box & a value
// index of 0,1,2,3

// Before Start Game:
// 1. define a variable for current Player and set it to 1.
// 2. check if current Player is 1 before starting
// 3. check if both marker begins at Grid 1
// 1. Create a 4 by 4 grid (16 squares as MVP)
// 2. randomised the dice between 1 - 6.
// 3. when button clicked on dice, generates a random number
// 4. dice value + grid position gives current position.
// 5. current position is updated to new position
// 6. if current position has a ladder, current position is pushed up to a higher position
// 7. if current position is a snake, current position is pushed down to a lower position
// 8. turn ends. Update current player with player 2. (go to 6)

// define variable
// 1) Marker. let marker be a or b
// 2) Snakes & Ladders variables, c,d,e
// 3) dice return a value between 1 & 6.
// 4) add die value to
})

//   // create  player 1: append player 1 to cell 1
//   var $player1 = $('<div id=player1>').text('Player 1').css('border','1px solid blue')
//   var $initialPosition = $('[data-value = 0]')
//   $initialPosition.append($player1)
//
// // create player 2: append player 2 to cell 1
//   var $player2 = $('<div id=player2>').text('Player 2').css('border','1px solid blue')
//   $initialPosition.append($player2)

//check if there are 2 players at startpoint
// var checkPlayersAtStartPoint = function () {
//   if ($startPoint.children().length === 2)
//   startGame()
// }
