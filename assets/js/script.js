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

  var currentPosition;
  // var currentPositionP2;

  // define dice button
  var $dice = $('.dice')

  $dice.on('click', rollDice)

  function rollDice () {
    var diceResult = 1 + Math.floor(Math.random() * 6)

    if (currentPlayer === player1) {
      cellValueP1 += diceResult
      console.log(cellValueP1)
      currentPosition = (`[data-value = ${cellValueP1}]`)
      player1.detach().appendTo(currentPosition)

      // Let's put some snakesssssss
      if (currentPosition === ('[data-value = 8]') || currentPosition === ('[data-value = 14]') || currentPosition === ('[data-value = 15]')) {
        currentPosition = (`[data-value = 4]`)
        console.log(currentPosition)
        player1.detach().appendTo(currentPosition)
        cellValueP1 = 4
      // Let's put some ladders
      } else if ((currentPosition === ('[data-value = 1]') || currentPosition === ('[data-value = 9]'))) {
        currentPosition = (`[data-value = 8]`)
        player1.detach().appendTo(currentPosition)
        console.log(currentPosition)
        cellValueP1 = 8
      }

      currentPlayer = player2
    } else if (currentPlayer === player2) {
      cellValueP2 += diceResult
      console.log(cellValueP2)
      currentPosition = $(`[data-value = ${cellValueP2}]`)
      player2.detach().appendTo(currentPosition)

      // Let's put some snakesssssss
      if (currentPosition === ('[data-value = 8]') || currentPosition === ('[data-value = 14]') || currentPosition === ('[data-value = 15]')) {
        currentPosition = (`[data-value = 4]`)
        console.log(currentPosition)
        player2.detach().appendTo(currentPosition)
        cellValueP2 = 4
          // Let's put some ladders
      } else if ((currentPosition === ('[data-value = 1]') || currentPosition === ('[data-value = 9]'))) {
        currentPosition = (`[data-value = 8]`)
        player2.detach().appendTo(currentPosition)
        console.log(currentPosition)
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
