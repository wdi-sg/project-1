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
      if (currentPositionP1 === ('[data-value = 8]') || currentPositionP1 === ('[data-value = 14]') || currentPositionP1 === ('[data-value = 15]')) {
        currentPositionP1 = (`[data-value = 4]`)
        console.log(currentPositionP1)
        player1.detach().appendTo(currentPositionP1)
        cellValueP1 = 4
      // Let's put some ladders
      } else if ((currentPositionP1 === ('[data-value = 1]') || currentPositionP1 === ('[data-value = 9]'))) {
        currentPositionP1 = (`[data-value = 8]`)
        player1.detach().appendTo(currentPositionP1)
        console.log(currentPositionP1)
        cellValueP1 = 8
      }

      currentPlayer = player2
    } else if (currentPlayer === player2) {
      cellValueP2 += diceResult
      console.log(cellValueP2)
      currentPositionP2 = $(`[data-value = ${cellValueP2}]`)
      player2.detach().appendTo(currentPositionP2)

      // Let's put some snakesssssss
      if (currentPositionP2 === ('[data-value = 8]') || currentPositionP2 === ('[data-value = 14]') || currentPositionP2 === ('[data-value = 15]')) {
        currentPositionP2 = (`[data-value = 4]`)
        console.log(currentPositionP2)
        player2.detach().appendTo(currentPositionP1)
        cellValueP2 = 4
          // Let's put some ladders
      } else if ((currentPositionP2 === ('[data-value = 1]') || currentPositionP2 === ('[data-value = 9]'))) {
        currentPositionP2 = (`[data-value = 8]`)
        player2.detach().appendTo(currentPositionP2)
        console.log(currentPositionP2)
        cellValueP2 = 8
      }

      currentPlayer = player1
    }
    gameOver()
  }

  function gameOver () {
    if (cellValueP1 >= 16 || cellValueP2 >= 16) {
      whoWon()
    }
  }

  function whoWon () {
    if ((cellValueP1 >= 16)) {
      alert('Player 1 has won!')
      reset()
    } else if ((cellValueP2 >= 16)) {
      alert('Player 2 has won!')
      reset()
    }
  }

  function reset () {
    cellValueP1 = $startPointDiv.data('value')
    cellValueP2 = $startPointDiv.data('value')
    player1.detach().appendTo($startPointDiv)
    player2.detach().appendTo($startPointDiv)

  }
})
