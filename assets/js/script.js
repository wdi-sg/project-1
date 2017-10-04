$(function () {
  // Create P1 & P2 divs & give them a color.
  var $player1 = $('<div class="player1 lupid">')
  var $player2 = $('<div class="player2 pig">')

  var $circle = $('.circle') // to indicate which player's turn

  var currentPlayer = $player1

  var cellValueP1 = 1 // track where player is supposed to be at.
  var cellValueP2 = 1

  function startPosition () {
    $('#1').append($player1) // grid 1
    $('#1').append($player2) // grid 1
  }

    // Create dice event
  var $dice = $('.dice')
  $dice.on('click', rollDice)

  var $autoPlay = $('.auto-play')
  $autoPlay.on('click', autoPlay)
  var clear;

  // Create reset event
  var $reset = $('.reset')
  $reset.on('click', reset)

  function rollDice () {
    var randomDiceResult = 1 + Math.floor(Math.random() * 6)
    console.log(randomDiceResult)

    if (currentPlayer === $player1) {
      cellValueP1 += randomDiceResult
      $player1.detach().appendTo(`#${cellValueP1}`) // move player 1 + dice value
      $circle.css("left", "17px")
      painOrPleasureP1()

      if (randomDiceResult === 6) {
        currentPlayer = $player1 // if dice is 6 go again
      } else {
        currentPlayer = $player2
      }
    } else if (currentPlayer === $player2) {
      cellValueP2 += randomDiceResult
      $player2.detach().appendTo(`#${cellValueP2}`) // move player 1 + dice value
      painOrPleasureP2()
      $circle.css("left", "127px")

      if (randomDiceResult === 6) {
        currentPlayer = $player2
      } else {
        currentPlayer = $player1
      }
    }
    gameOver()
  }

  function gameOver () {
    if (cellValueP1 >= 100 || cellValueP2 >= 100) { whoWon() }
  }

  function whoWon () {
    if ((cellValueP1 >= 100)) {
      alert('Player 1 has won!')
      reset()
    } else if ((cellValueP2 >= 100)) {
      alert('Player 2 has won!')
      reset()
    }
  }

  function reset () {
    cellValueP1 = 1
    cellValueP2 = 1
    $player1.detach().appendTo(`#${cellValueP1}`)
    $player2.detach().appendTo(`#${cellValueP2}`)
    clearInterval(clear)
  }

  function autoPlay() {
    clear = setInterval(rollDice, 1000)
  }

  function createTable () {
    var $tbl = $('#tbl')
    var id = 100
    var rowClass = 10
    // nested loop to create rows and columsn
    for (var r = 0; r < 10; r++) {
      var $row = $('<tr>') // create rows
      $row.attr('class', rowClass--) // give rows an individual class

      for (var c = 0; c < 10; c++) {
        var $column = $('<td>') // create column
        $column.css({ 'width': '50px', 'height': '50px'})
        $column.attr('id', id--) // give each individual column a number

        if(Number($column.attr('id')) % 2 === 0) {
          $column.css('backgroundColor', '#ffff00')
        } else {
          $column.css('backgroundColor', 'white')

        }

        // reverse the numbering for even or odd rows.
        $row.each(function () {
          if (Number(($(this).attr('class'))) % 2 === 0) {
            ($row.append($column))
          } else {
            ($row.prepend($column))
          }
        })
        $column.html(id + 1).addClass('cell')
      }
      $tbl.append($row)
    }
    // console.log(typeof Number(($('tr.9')).attr('class')))
  }
  createTable()
  startPosition()


  // Using Array to input Snakes & Ladders
  var painAndPleasureArray = [0,'ladder0',0,'ladder1',0,0,'snake0',0,'ladder2',0,
                            'snake1',0,'ladder3','ladder1',0,0,'snake0','ladder0','snake3','ladder4',
                            0,0,0,'snake5',0,0,'ladder3','ladder5','snake1',0
                            ,'ladder2',0,0,'snake2',0,0,0,'ladder4',0,'ladder6'
                            ,0,0,'snake4',0,0,0,0,0,0,0
                            ,'ladder7',0,0,'snake2',0,0,0,0,'ladder6',0
                            ,0,'snake3','ladder8','snake4',0,0,'ladder7',0,0,0
                            ,'ladder9',0,'snake6',0,'snake7',0,0,'snake8',0,0
                            ,'ladder8',0,0,'ladder5',0,0,'snake5',0,0,0
                            ,'ladder9',0,'snake6',0,'snake7',0,0,0,'snake8',0]


// Player 1 Snakes & Ladders
  function painOrPleasureP1 () {
    var currentP1Index = cellValueP1 - 1
    painAndPleasureArray.forEach(function (element) {
      if (painAndPleasureArray[currentP1Index] === element && element.length === 7) { // this method is bad because if they step on the strings it would activate too
        cellValueP1 = (painAndPleasureArray.indexOf(element, painAndPleasureArray.indexOf(element) + 1)) + 1
        $player1.detach().appendTo(`#${cellValueP1}`)
        console.log('player1 ladder', cellValueP1)
      } else if (painAndPleasureArray[currentP1Index] === element && element.length === 6) {
        cellValueP1 = (painAndPleasureArray.indexOf(element, painAndPleasureArray.indexOf(element) - 1)) + 1
        $player1.detach().appendTo(`#${cellValueP1}`)
        console.log('player1 snake', cellValueP1)
      } else { return cellValueP1 }
    })
  }

// Player 2 Snakes & Ladders
  function painOrPleasureP2 () {
    var currentP2Index = cellValueP2 - 1
    painAndPleasureArray.forEach(function (element) {
      if (painAndPleasureArray[currentP2Index] === element && element.length === 7) {
        cellValueP2 = (painAndPleasureArray.indexOf(element, painAndPleasureArray.indexOf(element) + 1)) + 1
        $player2.detach().appendTo(`#${cellValueP2}`)
        console.log('player2 ladder', cellValueP1)
      } else if (painAndPleasureArray[currentP2Index] === element && element.length === 6) {
        cellValueP2 = (painAndPleasureArray.indexOf(element, painAndPleasureArray.indexOf(element) - 1)) + 1
        $player2.detach().appendTo(`#${cellValueP2}`)
        console.log('player2 snake', cellValueP1)
      } else { return cellValueP2 }
    })
  }
})

// cellValue = 8.
// ID. = 7 too.
// if ID = index of danger + 1 = curIndex = 7
// painAndPleasureArray.forEach(function(el, idx) {
      // if ele === 0, skip(return)
//   if (painAndPleasureArray[curIndex] === el && curIndex !== idx) {
//      // do something
//      // idx means the index of what we want to know
//    }
// })
