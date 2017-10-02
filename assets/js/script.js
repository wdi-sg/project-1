// class Block = {
//   constructor() {
//     width: 15
//     height: 15
//   }
// }

var tileSet = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

// global variables
var $body = $('body')
var $pacMan = $('#pac-man')
var $gameBoard = $('.game-board')

$(function () {
  // creating map
  loadAssets(tileSet)

  // moving pacman
  $body.on('keyup', (event) => { move(event) })
})

function move (event) {
  var pacManPos = $pacMan.position()

  if(event.key === 'ArrowUp' && pacManPos.top !== 0) $pacMan.css('top', `${pacManPos.top - 30}px`)
  else if(event.key === 'ArrowDown' && pacManPos.top !== 510) $pacMan.css('top', `${pacManPos.top + 30}px`)
  else if(event.key === 'ArrowLeft' && pacManPos.left !== 0) $pacMan.css('left', `${pacManPos.left - 30}px`)
  else if(event.key === 'ArrowRight' && pacManPos.left !== 570) $pacMan.css('left', `${pacManPos.left + 30}px`)
}

function loadAssets (tileSet) {
  for (var i = 0; i < tileSet.length; i++) {
    // create new <div>
    var $tile = $('<div>')
    // setting tile properties
    if (tileSet[i] === 1) {
      $tile.css({ 'background-color': 'blue', 'height': '28px', 'width': '28px', 'border': '1px solid yellow', 'display': 'inline-block' })
    } else if (tileSet[i] === 0) {
      $tile.css({ 'background-color': 'black', 'height': '28px', 'width': '28px', 'border': '1px solid yellow', 'display': 'inline-block' })
    } else if (tileSet[i] === 2) {
      $tile.css({ 'background-color': 'white', 'height': '28px', 'width': '28px', 'border': '1px solid yellow', 'display': 'inline-block' })
    }

    // append tile to .game-board
    $gameBoard.append($tile)
  }
}
