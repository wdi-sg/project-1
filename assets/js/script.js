var tile

// initializes the game
function init () {

}

// checks for game over
function isGameOver () {
  // if timer runs out, returns true
  return false
}

// game timer
function timer () {
   setTimeout(function () { alert('Game Over') }, 3000)
}

// randomize a tile position
function ranTile () {
  var ranNum = Math.floor(Math.random() * 9)
  tile = document.getElementById(ranNum)
  console.log(ranNum)
  console.log(tile.id)
  return tile
}

function ranPosition () {
  ranTile().style.backgroundColor = 'rgb(233, 110, 139)'
}

ranPosition()

// target the whole grid space
var wholeGrid = document.querySelectorAll('.grid')

// target single random grid
// add event listener
wholeGrid.forEach(function (elem) {
  elem.addEventListener('click', function () {
    if (elem.id === tile.id) {
      elem.style.backgroundColor = 'red'
      ranPosition()
    }
  })
})

// delay timer for color to appear

// check if correct grid is clicked

// ******PSEUDO CODE******
/*
start game button and instructions
- initialize game -
produce grid with one abnormal tile
set timer of 10 seconds
if player clicks the abnormal tile, level is passed
proceed to next level
if player clicks the wrong tile, 3 seconds is deducted
if timer runs out level fails
- end game -
produce final score
*/
