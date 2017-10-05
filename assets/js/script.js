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
  2, 2, 2, 2, 2, 2, 2, 1, 7, 6, 5, 1, 2, 2, 2, 2, 2, 2, 2,
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
var pacManSpeed = 500
var pacManMeetGhost = false
var pacManLives = 3
// ghost variables
var ghostSpeed = 300
var prevDirOne = [] // ghost-one variables
var prevDirTwo = [] // ghost-two variables
var prevDirThree = [] // ghost-three variables
var prevDirFour = [] // ghost-four variables

$(function () {
  togglePanels('hide')
  // hit enter to start
  $body.on('keyup', (event) => {
    if (event.key === 'Enter') {
      // preparing game board and countdown to start
      $body.off()
      isGameOver = false
      togglePanels('starting')
      loadAssets(tileSet)
      countDown()

      // start game after 3 seconds
      setTimeout(function () {
        // moving pacman
        setInterval(function () { movePac() }, pacManSpeed)
        // switching directions
        $body.on('keydown', (event) => { direction = changeDirection(event) })
        // moving ghost-one
        setInterval(function () { patrolTopLeft($('#ghost-one')) }, ghostSpeed)
      }, 3000)
      // moving ghost-two after 6 seconds
      setTimeout(function () { setInterval(function () { patrolTopRight($('#ghost-two')) }, ghostSpeed) }, 6000)
      // moving ghost-three after 9 seconds
      setTimeout(function () { setInterval(function () { patrolBottomRight($('#ghost-three')) }, ghostSpeed) }, 9000)
      // moving ghost-four after 12 seconds
      setTimeout(function () { setInterval(function () { patrolBottomLeft($('#ghost-four')) }, ghostSpeed) }, 12000)
      // lose condition
      setInterval(function () {
        pacManMeetGhost = checkCollision()
        if (pacManMeetGhost) {
          movePacToStart()
          updateLives()
          pacManMeetGhost = false
        }
        if (pacManLives <= 0) togglePanels('loss')
      }, 100)
      // win condition
      setInterval(function () { if (score === 119) togglePanels('win') }, 300)
      // clearing game board
      var clear = setInterval(function () {
        if (isGameOver) {
          $tiles.remove()
          clearInterval(clear)
        }
      }, 100)
      // reloads window to restart game
      $body.on('keydown', (event) => { if (isGameOver && event.key === ' ') this.location.reload() })
    }
  })
})

function loadAssets (tileSet) {
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
      case 0: $tile.css(blackTile).data('attr', 0).append($('<div class="dots">'))
        break
      case 1: $tile.css(blueTile).data('attr', 1)
        break
      case 2: $tile.css(blackTile).data('attr', 2)
        break
      case 5: $tile.css(blackTile).data('attr', 5).append($('<div class="character" id="ghost-four">'))
        break
      case 6: $tile.css(blackTile).data('attr', 6).append($('<div class="character" id="ghost-three">'))
        break
      case 7: $tile.css(blackTile).data('attr', 7).append($('<div class="character" id="ghost-two">'))
        break
      case 8: $tile.css(yellowTile).data('attr', 8).append($('<div class="character" id="ghost-one">'))
        break
      case 9: $tile.css(blackTile).data('attr', 9).append($('<div class="character" id="pac-man">'))
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

function changeDirection (event) {
  switch (event.key) {
    case 'ArrowUp': return 'up'
    case 'ArrowRight': return 'right'
    case 'ArrowDown': return 'down'
    case 'ArrowLeft': return 'left'
  }
}

function eatAndChangeScore (tile) {
  score++
  $('.score').text(`Score: ${score}`)
  tile.find('div:first').remove() // find first element (dots) and remove
}

function pacTarget (direction) {
  // using direction, target tile, then move pacman into target tile if its a valid tile
  var $pacManTile = $('#pac-man').parent()
  switch (direction) {
    case 'left': return $pacManTile.prev()
    case 'right': return $pacManTile.next()
    case 'up': return $pacManTile.prevAll().eq(18)
    case 'down': return $pacManTile.nextAll().eq(18)
  }
}

function movePac () {
  var targetTile = pacTarget(direction)
  // check if tile has dots
  if ($(targetTile).has('.dots').length > 0) eatAndChangeScore($(targetTile))
  // check if pac-man can move into tile
  if ($(targetTile).data('attr') !== 1 && $(targetTile).data('attr') !== 8) $(targetTile).append($('#pac-man'))
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
  var targetTile = pacTarget(direction)
  // return true if pacman's parent tile or pacman's target tile contains any of the ghosts
  switch (true) {
    case ($pacManTile.has('#ghost-one').length > 0):
    case ($pacManTile.has('#ghost-two').length > 0):
    case ($pacManTile.has('#ghost-three').length > 0):
    case ($pacManTile.has('#ghost-four').length > 0):
    case ($(targetTile).has('#ghost-one').length > 0):
    case ($(targetTile).has('#ghost-two').length > 0):
    case ($(targetTile).has('#ghost-three').length > 0):
    case ($(targetTile).has('#ghost-four').length > 0):
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

function togglePanels (panel) {
  if (panel === 'win') {
    $scoreBoard.css('visibility', 'hidden')
    $losePanel.hide()
    $winPanel.show()
    isGameOver = true
  } else if (panel === 'loss') {
    $scoreBoard.css('visibility', 'hidden')
    $winPanel.hide()
    $losePanel.show()
    isGameOver = true
  } else if (panel === 'starting') {
    $instructionPanel.hide()
    $scoreBoard.css('visibility', 'visible')
  } else {
    $winPanel.hide()
    $losePanel.hide()
  }
}
