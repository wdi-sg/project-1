// ###### PSEUDO CODE ######
/*
start game button and instructions
- initialize game -
create new grid (bigger grid each level)
color grid - one tile with abnormal color (increase color difficulty each lvl)
set timer of 10 seconds
if player clicks the abnormal tile, level is passed
proceed to next level
if player clicks the wrong tile, will not proceed to next level
if timer runs out game over
- end game -
produce final score
*/
// #########################

document.addEventListener('DOMContentLoaded', function () {
  var tile
  var score = 0
  var timeLeft = 30
  var palette = [
    ['rgb(20, 153, 105)',
      'rgb(25, 168, 131)'],
    ['rgb(235, 152, 20)',
      'rgb(220, 160, 40)'],
    ['rgb(0, 117, 255)',
      'rgb(30, 117, 220)'],
    ['rgb(255, 237, 0)',
      'rgb(255, 230, 40)']
  ]

  console.log(palette[3][0])

// initialize the game
  function init () {
  // if start button is pressed, game start
    alert('game is started')
  // start the timer
    gameTimer()
  // put level 1 into empty container
    gridCreate()
  }

// restart function
  function restart () {
    timeLeft = 30
    init()
    score = 0
  // clear out the grid
  // change text of start button to Restart
  }

// checks for game over
  function isGameOver () {
  // if timer runs out, returns true
    if (timeLeft == 0) {
      alert('Game Over')
    // display score
    // restart ()
    } else {
      return false
    }
  }

// game timer
  function gameTimer () {
    // target timer node
    var timer = document.querySelector('.timer')
    var timerId = setInterval(countdown, 1000)

    function countdown () {
      if (timeLeft == 0) {
        clearTimeout(timerId)
        isGameOver()
      } else {
        timer.innerHTML = timeLeft
        timeLeft--
      }
    }
  }

  var noOfRows = 2

// grid creator; change level
  function gridCreate () {
    var gridId = 0
    for (var i = 0; i < noOfRows; i++) {
      document.querySelector('.container').innerHTML += '<div class = "row">'

      for (var k = 0; k < noOfRows; k++) {
        document.querySelector('.container').innerHTML += '<div class = "L' + noOfRows + 'Grid" id = ' + gridId + '>' + (gridId++) + '</div>'
      }
      document.querySelector('.container').innerHTML += '</div>'
    }
    // grid color
    // '.L' + noOfRows + 'Grid'
    var allGrids = document.querySelectorAll('.L' + noOfRows + 'Grid')
    for (var p = 0; p < noOfRows-1; p++){
      for (var j = 0; j < gridId; j++)
      allGrids[j].style.backgroundColor = palette[p][0]
      // randomize one tile to make odd
    }
  }

// random number btw max & min
  function ranNum (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

// randomize a tile position
  // function ranTile () {
  //   var ranNum = Math.floor(Math.random() * 9)
  //   tile = document.getElementById(ranNum)
  //   console.log(ranNum)
  //   console.log(tile.id)
  //   return tile
  // }
  //
  // function ranPosition () {
  //   ranTile().style.backgroundColor = 'rgb(233, 110, 139)'
  // }
  //
  // ranPosition()

// target the start node
  var startButtonTgt = document.querySelector('.startButton')
// add event listener to start button
  startButtonTgt.addEventListener('click', function () {
    init()
  })

// target the whole grid space
  var wholeGrid = document.querySelectorAll('.container')

// target single random grid
// add event listener
  wholeGrid.forEach(function (elem) {
    elem.addEventListener('click', function () {
      // empty out previous grid squares
      document.querySelector('.container').innerHTML = ' '
      // increase the grid size if < 5x5
      if (noOfRows < 5) {
        noOfRows += 1
        console.log(noOfRows)
      }
      // create the new grid
      gridCreate()

      // if (elem.id === tile.id) {
      //   elem.style.backgroundColor = 'red'
        // ranPosition()

        // score += 1
      // target the score node
      var scoreTgt = document.querySelector('.score')
      // update score to score node
      scoreTgt.innerHTML = score
      // console.log(score)
      // }
    })
  })
})

// check if correct grid is clicked
