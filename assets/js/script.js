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

// score variable
var score = 0

// creating pac-man and ghosts
var $pacMan = $('<div class="character" id="pac-man">')
var $ghostOne = $('<div class="character" id="ghost-one">')
var $ghostTwo = $('<div class="character" id="ghost-two">')
var $ghostThree = $('<div class="character" id="ghost-three">')
var $ghostFour = $('<div class="character" id="ghost-four">')

$(function () {
  // creating map
  loadAssets(tileSet)

  // moving pacman
  $body.on('keydown', (event) => { move(event) })
})

function move (event) {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManLeft = $pacManTile.prev()
  var $pacManRight = $pacManTile.next()
  var $pacManDown = $pacManTile.nextAll().eq(18)
  var $pacManUp = $pacManTile.prevAll().eq(18)

  switch(event.key) {
    case 'ArrowUp':
      // check if tile has dots
      if ($pacManUp.has('.dots').length > 0) eatAndChangeScore($pacManUp)
      // check if pac-man can move into tile
      if ($pacManUp.data('attr') !== 1) $pacManUp.append($pacMan)
      break
    case 'ArrowRight':
      // check if tile has dots
      if ($pacManRight.has('.dots').length > 0) eatAndChangeScore($pacManRight)
      // check if pac-man can move into tile
      if ($pacManRight.data('attr') !== 1) $pacManRight.append($pacMan)
      break
    case 'ArrowDown':
      // check if tile has dots
      if ($pacManDown.has('.dots').length > 0) eatAndChangeScore($pacManDown)
      // check if pac-man can move into tile
      if ($pacManDown.data('attr') !== 1) $pacManDown.append($pacMan)
      break
    case 'ArrowLeft':
      // check if tile has dots
      if ($pacManLeft.has('.dots').length > 0) eatAndChangeScore($pacManLeft)
      // check if pac-man can move into tile
      if ($pacManLeft.data('attr') !== 1) $pacManLeft.append($pacMan)
      break
  }
}

function eatAndChangeScore(tile) {
  var $score = $('#score')
  score++
  $score.text(`Score: ${score}`)
  tile.empty()
}

function loadAssets (tileSet) {
  for (var i = 0; i < tileSet.length; i++) {
    // create new <div>
    var $tile = $('<div class="tile">')
    var $dots = $('<div class="dots">')
    var blackTile = { 'background-color': 'black', 'height': '28px', 'width': '28px', 'border': '1px solid yellow' }
    var blueTile = { 'background-color': 'blue', 'height': '28px', 'width': '28px', 'border': '1px solid yellow' }
    // setting tile properties
    switch (tileSet[i]) {
      case 0:
        $tile.css(blackTile)
        $tile.data('attr', 0)
        $tile.append($dots)
        break
      case 1:
        $tile.css(blueTile)
        $tile.data('attr', 1)
        break
      case 2:
        $tile.css(blackTile)
        $tile.data('attr', 2)
        break
      case 9:
        $tile.css(blackTile)
        $tile.data('attr', 9)
        $tile.append($pacMan)
        break
      case 8:
        $tile.css(blackTile)
        $tile.data('attr', 8)
        $tile.append($ghostOne)
        break
      case 7:
        $tile.css(blackTile)
        $tile.data('attr', 7)
        $tile.append($ghostTwo)
        break
      case 6:
        $tile.css(blackTile)
        $tile.data('attr', 6)
        $tile.append($ghostThree)
        break
      case 5:
        $tile.css(blackTile)
        $tile.data('attr', 5)
        $tile.append($ghostFour)
        break
    }
    $gameBoard.append($tile)
  }
}
