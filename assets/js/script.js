// tileSet array (for generating map)
var tileSet = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 8, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  3, 2, 2, 2, 2, 2, 2, 1, 7, 6, 5, 1, 2, 2, 2, 2, 2, 2, 3,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 1, 0, 9, 0, 1, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

// jQuery objects
var $body = $('body')
var $gameBoard = $('.game-board')
var $instructionPanel = $('.instruction-panel')
var $winPanel = $('.win-panel')
var $losePanel = $('.lose-panel')
var $scoreBoard = $('.score-board')
var $tiles = $('.tile')

// game variables
var score = 0
var isGameOver = false
// pacman variables
var direction = 'left'
var pacManSpeed = 600
var pacManMeetGhost = false
var pacManLives = 3
// ghost variables
var ghostSpeed = 350
// ghost-one variables
var prevDirOne = []
// ghost-two variables
var prevDirTwo = []
// ghost-three variables
var prevDirThree = []
// ghost-four variables
var prevDirFour = []

$(function () {
  $winPanel.hide()
  $losePanel.hide()

  // hit enter to start
  $body.on('keyup', (event) => {
    if (event.key === 'Enter') {
      $body.off()
      isGameOver = false
      // hide instructions
      $instructionPanel.hide()
      // show score-board
      $scoreBoard.css('visibility', 'visible')
      // load assets
      loadAssets(tileSet)
      // countdown to game start
      countDown()
      setTimeout(function () {
        // moving pacman
        setInterval(function () { movePacMan() }, pacManSpeed)
        // switching directions
        $body.on('keydown', (event) => { changeDirection(event) })
        // moving ghost-one
        setInterval(function () { moveGhost($('#ghost-one')) }, ghostSpeed)
      }, 3000)
      // moving ghost-two
      setTimeout(function () {
        setInterval(function () { moveGhost($('#ghost-two')) }, ghostSpeed)
      }, 6000)
      // moving ghost-three
      setTimeout(function () {
        setInterval(function () { moveGhost($('#ghost-three')) }, ghostSpeed)
      }, 9000)
      // moving ghost-four
      setTimeout(function () {
        setInterval(function () { moveGhost($('#ghost-four')) }, ghostSpeed)
      }, 12000)
      // lose condiition
      setInterval(function () {
        // checking if pac-man and ghosts occupy the same tile
        pacManMeetGhost = checkCollision()
        if (pacManMeetGhost) {
          movePacToStart()
          updateLives()
          pacManMeetGhost = false
        }
        // update loss
        if (pacManLives <= 0) showWinLossPanel('loss')
      }, 100)
      // win condition
      setInterval(function () { if (score === 119) showWinLossPanel('win') }, 300)
      // clearing game board
      var clear = setInterval(function () {
        if (isGameOver) {
          $tiles.remove()
          clearInterval(clear)
        }
      }, 300)
      // reloads window to restart game
      $body.on('keydown', (event) => { if (isGameOver && event.key === ' ') this.location.reload() })
    }
  })
})

function loadAssets (tileSet) {
  // creating pac-man and ghosts
  var $pacMan = $('<div class="character" id="pac-man">')
  var $ghostOne = $('<div class="character" id="ghost-one">')
  var $ghostTwo = $('<div class="character" id="ghost-two">')
  var $ghostThree = $('<div class="character" id="ghost-three">')
  var $ghostFour = $('<div class="character" id="ghost-four">')

  // objects to store css properties for tiles
  var blackTile = { 'background-color': 'black', 'height': '28px', 'width': '28px', 'border': '1px solid #303030' }
  var blueTile = { 'background-color': '#2D47DD', 'height': '28px', 'width': '28px', 'border': '1px solid #3366FF' }
  var yellowTile = { 'background-color': '#FFCC00', 'height': '5px', 'width': '30px' }

  // loop through tileSet array and generate map as well as load characters
  for (var i = 0; i < tileSet.length; i++) {
    // create new <div> for tiles and dots
    var $tile = $('<div class="tile">')

    // setting tile properties and adding characters
    switch (tileSet[i]) {
      case 0:
        var $dots = $('<div class="dots">') // only create dots if tile can contain one
        $tile.css(blackTile).data('attr', 0).append($dots)
        break
      case 1: $tile.css(blueTile).data('attr', 1)
        break
      case 2: $tile.css(blackTile).data('attr', 2)
        break
      case 3: $tile.css(blackTile).data('attr', 3)
        break
      case 5: $tile.css(blackTile).data('attr', 5).append($ghostFour)
        break
      case 6: $tile.css(blackTile).data('attr', 6).append($ghostThree)
        break
      case 7: $tile.css(blackTile).data('attr', 7).append($ghostTwo)
        break
      case 8: $tile.css(yellowTile).data('attr', 8).append($ghostOne)
        break
      case 9: $tile.css(blackTile).data('attr', 9).append($pacMan)
        break
    }
    $gameBoard.append($tile)
  }
}

function countDown () {
  var $timer = $('<div class="timer">')
  var $time = $('<h3 id="time">')
  var time = 3
  $time.text(time)
  $timer.append($time)
  $gameBoard.append($timer)

  var countdown = setInterval(function () {
    time--
    $time.text(time)
    if (time === 0) {
      $timer.remove()
      clearInterval(countdown)
    }
  }, 1000)
}

function movePacMan () {
  switch (direction) {
    case 'left': movePacLeft()
      break
    case 'right': movePacRight()
      break
    case 'up': movePacUp()
      break
    case 'down': movePacDown()
      break
  }
}

function changeDirection (event) {
  switch (event.key) {
    case 'ArrowUp': direction = 'up'
      break
    case 'ArrowRight': direction = 'right'
      break
    case 'ArrowDown': direction = 'down'
      break
    case 'ArrowLeft': direction = 'left'
      break
  }
}

function eatAndChangeScore (tile) {
  score++
  $('.score').text(`Score: ${score}`)
  tile.find('div:first').remove() // find first element (dots) and remove
}

function movePacLeft () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManLeft = $pacManTile.prev()
  // check if tile has dots
  if ($pacManLeft.has('.dots').length > 0) eatAndChangeScore($pacManLeft)
  // check if pac-man can move into tile
  if ($pacManLeft.data('attr') !== 1 && $pacManLeft.data('attr') !== 8) $pacManLeft.append($pacMan)
}

function movePacDown () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManDown = $pacManTile.nextAll().eq(18)
  // check if tile has dots
  if ($pacManDown.has('.dots').length > 0) eatAndChangeScore($pacManDown)
  // check if pac-man can move into tile
  if ($pacManDown.data('attr') !== 1 && $pacManDown.data('attr') !== 8) $pacManDown.append($pacMan)
}

function movePacRight () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManRight = $pacManTile.next()
  // check if tile has dots
  if ($pacManRight.has('.dots').length > 0) eatAndChangeScore($pacManRight)
  // check if pac-man can move into tile
  if ($pacManRight.data('attr') !== 1 && $pacManRight.data('attr') !== 8) $pacManRight.append($pacMan)
}

function movePacUp () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManUp = $pacManTile.prevAll().eq(18)
  // check if tile has dots
  if ($pacManUp.has('.dots').length > 0) eatAndChangeScore($pacManUp)
  // check if pac-man can move into tile
  if ($pacManUp.data('attr') !== 1 && $pacManUp.data('attr') !== 8) $pacManUp.append($pacMan)
}

function moveGhost ($ghost) {
  // jQuery ghost objects
  var $ghostOne = $('#ghost-one')
  var $ghostTwo = $('#ghost-two')
  var $ghostThree = $('#ghost-three')
  var $ghostFour = $('#ghost-four')

  switch (true) {
    case ($ghost.is($ghostOne)): patrolTopLeft($ghost)
      break
    case ($ghost.is($ghostTwo)): patrolTopRight($ghost)
      break
    case ($ghost.is($ghostThree)): patrolBottomRight($ghost)
      break
    case ($ghost.is($ghostFour)): patrolBottomLeft($ghost)
      break
  }
}

function patrolTopLeft ($ghost) {
  var $ghostTile = $ghost.parent()
  var $ghostUp = $ghostTile.prevAll().eq(18)
  var $ghostLeft = $ghostTile.prev()
  var $ghostRight = $ghostTile.next()
  var $ghostDown = $ghostTile.nextAll().eq(18)

  if ($ghostUp.data('attr') !== 1 && prevDirOne[0] !== 'down' && prevDirOne[1] !== 'down') {
    prevDirOne.push('up')
    $ghostUp.append($ghost)
  } else if ($ghostLeft.data('attr') !== 1 && prevDirOne[0] !== 'right' && prevDirOne[1] !== 'right') {
    prevDirOne.push('left')
    $ghostLeft.append($ghost)
  } else if ($ghostRight.data('attr') !== 1 && prevDirOne[0] !== 'left' && prevDirOne[1] !== 'left') {
    $ghostRight.append($ghost)
    prevDirOne.push('right')
  } else if ($ghostDown.data('attr') !== 1 && prevDirOne[0] !== 'up' && prevDirOne[1] !== 'up') {
    prevDirOne.push('down')
    $ghostDown.append($ghost)
  }
  // shift entire array left by one element (keeps array 2 elements long)
  if (prevDirOne.length > 2) prevDirOne.shift()
}

function patrolTopRight ($ghost) {
  var $ghostTile = $ghost.parent()
  var $ghostUp = $ghostTile.prevAll().eq(18)
  var $ghostLeft = $ghostTile.prev()
  var $ghostRight = $ghostTile.next()
  var $ghostDown = $ghostTile.nextAll().eq(18)

  if ($ghostUp.data('attr') !== 1 && prevDirTwo[0] !== 'down' && prevDirTwo[1] !== 'down') {
    prevDirTwo.push('up')
    $ghostUp.append($ghost)
  } else if ($ghostRight.data('attr') !== 1 && prevDirTwo[0] !== 'left' && prevDirTwo[1] !== 'left') {
    $ghostRight.append($ghost)
    prevDirTwo.push('right')
  } else if ($ghostLeft.data('attr') !== 1 && prevDirTwo[0] !== 'right' && prevDirTwo[1] !== 'right') {
    prevDirTwo.push('left')
    $ghostLeft.append($ghost)
  } else if ($ghostDown.data('attr') !== 1 && prevDirTwo[0] !== 'up' && prevDirTwo[1] !== 'up') {
    prevDirTwo.push('down')
    $ghostDown.append($ghost)
  }
  // shift entire array left by one element (keeps array 2 elements long)
  if (prevDirTwo.length > 2) prevDirTwo.shift()
}

function patrolBottomRight ($ghost) {
  var $ghostTile = $ghost.parent()
  var $ghostUp = $ghostTile.prevAll().eq(18)
  var $ghostLeft = $ghostTile.prev()
  var $ghostRight = $ghostTile.next()
  var $ghostDown = $ghostTile.nextAll().eq(18)

  if ($ghostDown.data('attr') !== 1 && prevDirThree[0] !== 'up' && prevDirThree[1] !== 'up') {
    prevDirThree.push('down')
    $ghostDown.append($ghost)
  } else if ($ghostUp.data('attr') !== 1 && prevDirThree[0] !== 'down' && prevDirThree[1] !== 'down') {
    prevDirThree.push('up')
    $ghostUp.append($ghost)
  } else if ($ghostRight.data('attr') !== 1 && prevDirThree[0] !== 'left' && prevDirThree[1] !== 'left') {
    $ghostRight.append($ghost)
    prevDirThree.push('right')
  } else if ($ghostLeft.data('attr') !== 1 && prevDirThree[0] !== 'right' && prevDirThree[1] !== 'right') {
    prevDirThree.push('left')
    $ghostLeft.append($ghost)
  }
  // shift entire array left by one element (keeps array 2 elements long)
  if (prevDirThree.length > 2) prevDirThree.shift()
}

function patrolBottomLeft ($ghost) {
  var $ghostTile = $ghost.parent()
  var $ghostUp = $ghostTile.prevAll().eq(18)
  var $ghostLeft = $ghostTile.prev()
  var $ghostRight = $ghostTile.next()
  var $ghostDown = $ghostTile.nextAll().eq(18)

  if ($ghostDown.data('attr') !== 1 && prevDirFour[0] !== 'up' && prevDirFour[1] !== 'up') {
    prevDirFour.push('down')
    $ghostDown.append($ghost)
  } else if ($ghostUp.data('attr') !== 1 && prevDirFour[0] !== 'down' && prevDirFour[1] !== 'down') {
    prevDirFour.push('up')
    $ghostUp.append($ghost)
  } else if ($ghostLeft.data('attr') !== 1 && prevDirFour[0] !== 'right' && prevDirFour[1] !== 'right') {
    prevDirFour.push('left')
    $ghostLeft.append($ghost)
  } else if ($ghostRight.data('attr') !== 1 && prevDirFour[0] !== 'left' && prevDirFour[1] !== 'left') {
    $ghostRight.append($ghost)
    prevDirFour.push('right')
  }
  // shift entire array left by one element (keeps array 2 elements long)
  if (prevDirFour.length > 2) prevDirFour.shift()
}

function checkCollision () {
  var $pacManTile = $('#pac-man').parent()
  // return true if pacman's parent tile contains any of the ghosts
  switch (true) {
    case ($pacManTile.has('#ghost-one').length > 0):
    case ($pacManTile.has('#ghost-two').length > 0):
    case ($pacManTile.has('#ghost-three').length > 0):
    case ($pacManTile.has('#ghost-four').length > 0):
      return true
  }
}

function movePacToStart () {
  // targeting pac-man starting tile
  var $pacManStart = $('.tile').filter(function () { return $(this).data('attr') === 9 })
  // append pac-man to starting tile
  $pacManStart.append($('#pac-man'))
}

function updateLives () {
  pacManLives--
  $('.lives-container').children().last().remove()
}

function showWinLossPanel (winLoss) {
  if (winLoss === 'win') {
    $scoreBoard.css('visibility', 'hidden')
    $losePanel.hide()
    $winPanel.show()
    isGameOver = true
  } else {
    $scoreBoard.css('visibility', 'hidden')
    $winPanel.hide()
    $losePanel.show()
    isGameOver = true
  }
}
