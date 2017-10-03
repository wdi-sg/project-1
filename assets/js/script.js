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
var direction = 'left'

// score variable
var score = 0


$(function () {
  // write reset function

  // write ifGameOver function

  // write start function

  // load assets
  loadAssets(tileSet)

  // write countdown function

  // moving pacman
  setInterval(function () {
    switch (direction) {
      case 'left':
        moveLeft()
        break
      case 'right':
        moveRight()
        break
      case 'up':
        moveUp()
        break
      case 'down':
        moveDown()
        break
    }
  }, 700)
  // switching directions
  $body.on('keydown', (event) => { move(event) })

  // write killScreen function
})

function move (event) {
  switch (event.key) {
    case 'ArrowUp':
      direction = 'up'
      break
    case 'ArrowRight':
      direction = 'right'
      break
    case 'ArrowDown':
      direction = 'down'
      break
    case 'ArrowLeft':
      direction = 'left'
      break
  }
}

function eatAndChangeScore (tile) {
  var $score = $('#score')
  score++
  $score.text(`Score: ${score}`)
  tile.empty()
}

function moveLeft () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManLeft = $pacManTile.prev()
  // check if tile has dots
  if ($pacManLeft.has('.dots').length > 0) eatAndChangeScore($pacManLeft)
  // check if pac-man can move into tile
  if ($pacManLeft.data('attr') !== 1) $pacManLeft.append($pacMan)
}

function moveDown () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManDown = $pacManTile.nextAll().eq(18)
  // check if tile has dots
  if ($pacManDown.has('.dots').length > 0) eatAndChangeScore($pacManDown)
  // check if pac-man can move into tile
  if ($pacManDown.data('attr') !== 1) $pacManDown.append($pacMan)
}

function moveRight () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManRight = $pacManTile.next()
  // check if tile has dots
  if ($pacManRight.has('.dots').length > 0) eatAndChangeScore($pacManRight)
  // check if pac-man can move into tile
  if ($pacManRight.data('attr') !== 1) $pacManRight.append($pacMan)
}

function moveUp () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManUp = $pacManTile.prevAll().eq(18)
  // check if tile has dots
  if ($pacManUp.has('.dots').length > 0) eatAndChangeScore($pacManUp)
  // check if pac-man can move into tile
  if ($pacManUp.data('attr') !== 1) $pacManUp.append($pacMan)
}

function clearAllIntervals(left, right, up, down) {
  clearInterval(left)
  clearInterval(right)
  clearInterval(up)
  clearInterval(down)
}

function loadAssets (tileSet) {
  // creating pac-man and ghosts
  var $pacMan = $('<div class="character" id="pac-man">')
  var $ghostOne = $('<div class="character" id="ghost-one">')
  var $ghostTwo = $('<div class="character" id="ghost-two">')
  var $ghostThree = $('<div class="character" id="ghost-three">')
  var $ghostFour = $('<div class="character" id="ghost-four">')

  // objects to store css properties for tiles
  var blackTile = { 'background-color': 'black', 'height': '28px', 'width': '28px', 'border': '1px solid yellow' }
  var blueTile = { 'background-color': 'blue', 'height': '28px', 'width': '28px', 'border': '1px solid yellow' }

  // loop through tileSet array and generate map as well as load characters
  for (var i = 0; i < tileSet.length; i++) {
    // create new <div> for tiles and dots
    var $tile = $('<div class="tile">')
    var $dots = $('<div class="dots">')
    // setting tile properties
    switch (tileSet[i]) {
      case 0:
        $tile.css(blackTile).data('attr', 0).append($dots)
        break
      case 1:
        $tile.css(blueTile).data('attr', 1)
        break
      case 2:
        $tile.css(blackTile).data('attr', 2)
        break
      case 5:
        $tile.css(blackTile).data('attr', 5).append($ghostFour)
        break
      case 6:
        $tile.css(blackTile).data('attr', 6).append($ghostThree)
        break
      case 7:
        $tile.css(blackTile).data('attr', 7).append($ghostTwo)
        break
      case 8:
        $tile.css(blackTile).data('attr', 8).append($ghostOne)
        break
      case 9:
        $tile.css(blackTile).data('attr', 9).append($pacMan)
        break
    }
    $gameBoard.append($tile)
  }
}
