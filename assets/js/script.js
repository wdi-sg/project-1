$(function () {
  // define current player. By default, player 1 goes first
  var player1 = $('.player1').css('backgroundColor', 'blue')
  var player2 = $('.player2').css('backgroundColor', 'red')
  var currentPlayer = player1

  // define starting position of grid
  var $startPointDiv = $('[data-value = 0]') // an object //=> [div.cell, prevObject: r.fn.init(1)]
  // console.log($('.cell[data-value = 0]'))
  // define current Position
  var cellValueP1 = $startPointDiv.data('value')
  var cellValueP2 = $startPointDiv.data('value')

  var currentPositionP1
  var currentPositionP2


  // define dice button
  var $dice = $('.dice')

  $dice.on('click', rollDice)

  function rollDice () {
    var diceResult = 1 + Math.floor(Math.random() * 6)

    if (currentPlayer === player1) {
      cellValueP1 += diceResult
      console.log(cellValueP1)
      currentPositionP1 = (`[data-value = ${cellValueP1}]`)
      // console.log(snake === currentPositionP1)
      player1.detach().appendTo(currentPositionP1)

      // Let's put some snakesssssss
      if (currentPositionP1 === ('[data-value = 8]') || currentPositionP1 === ('[data-value = 14]')) {
        currentPositionP1 = (`[data-value = 4]`)
        player1.detach().appendTo(currentPositionP1)
      // Let's put some ladders
      } else if ((currentPositionP1 === ('[data-value = 1]') || currentPositionP1 === ('[data-value = 9]'))) {
        currentPositionP1 = (`[data-value = 8]`)
        player1.detach().appendTo(currentPositionP1)
      }

      currentPlayer = player2
    } else if (currentPlayer === player2) {
      cellValueP2 += diceResult
      currentPositionP2 = $(`[data-value = ${cellValueP2}]`)
      player2.detach().appendTo(currentPositionP2)

      // Let's put some snakesssssss
      if (currentPositionP2 === ('[data-value = 8]') || currentPositionP2 === ('[data-value = 14]')) {
        currentPositionP2 = (`[data-value = 4]`)
        player2.detach().appendTo(currentPositionP1)
          // Let's put some ladders
      } else if ((currentPositionP2 === ('[data-value = 1]') || currentPositionP2 === ('[data-value = 9]'))) {
        currentPositionP2 = (`[data-value = 8]`)
        player2.detach().appendTo(currentPositionP2)
      }

      currentPlayer = player1
    }
  }

// //check if there's snakes
// if(currentPositionP1 === $('[data-value = 10]'))
// // check if there's a ladder
// if(currentPositionP1 === $('[data-value = 8]'))

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

// check if there are 2 players at startpoint
// var checkPlayersAtStartPoint = function () {
//   if ($startPoint.children().length === 2)
//   startGame()
// }
