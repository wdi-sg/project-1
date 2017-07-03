// ######PSEUDO CODE######
/*
start game button and instructions
- initialize game -
produce grid with one abnormal tile
set timer of 10 seconds
if player clicks the abnormal tile, level is passed
proceed to next level
if player clicks the wrong tile, will not proceed to next level
if timer runs out level fails
- end game -
produce final score
*/
// #######################

var tile
var score = 0
var timeLeft = 30

// initialize the game
function init () {
  // if start button is pressed, game start
  alert('game is started')
  // start the timer
  gameTimer()
  // put level 1 into empty container
  
}

// restart function
function restart () {
  // clear out the grid
  // change text of start button to Restart
}

// checks for game over
function isGameOver () {
  // if timer runs out, returns true
  return false
}

// game timer
function gameTimer () {
// target timer node
  var timer = document.querySelector('.timer')
  var timerId = setInterval(countdown, 1000)

  function countdown () {
    if (timeLeft == 0) {
      clearTimeout(timerId)
      alert('Game Over')
      // isGameOver === true
    } else {
      timer.innerHTML = timeLeft
      timeLeft--
    }
  }
}

// change level
function changeLevel () {
  // if tile clicked is correct

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

// target the start node
var startButtonTgt = document.querySelector('.startButton')

// add event listener to start button
startButtonTgt.addEventListener('click', function (elem) {
  // init function
  init()
})

// target the whole grid space
var wholeGrid = document.querySelectorAll('.grid')

// target single random grid
// add event listener
wholeGrid.forEach(function (elem) {
  elem.addEventListener('click', function () {
    if (elem.id === tile.id) {
      elem.style.backgroundColor = 'red'
      ranPosition()
      score += 1
      console.log(score)
      // target the score node
      var scoreTgt = document.querySelector('.score')
      // update score to score node
      scoreTgt.innerHTML = score
    }
  })
})

// delay timer for color to appear

// check if correct grid is clicked
