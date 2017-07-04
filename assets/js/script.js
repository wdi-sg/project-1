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
  var score = 0
  var timeLeft = 30
  var noOfRows = 2
  var ranGrid
  var wholeGrid = document.querySelectorAll('.container')
  var palette = [
    ['rgb(20, 153, 105)',
      'rgb(0, 0, 0)'],
    ['rgb(235, 152, 20)',
      'rgb(255, 255, 255)'],
    ['rgb(0, 117, 255)',
      'rgb(0, 0, 0)'],
    ['rgb(255, 237, 0)',
      'rgb(255, 255, 255)']
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
  } if (noOfRows > 5){
      alert('Game Over')
    }
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
        isGameOver()
      } else {
        timer.innerHTML = timeLeft
        timeLeft--
      }
    }
  }



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
    wholeGrid = document.querySelectorAll('.L' + noOfRows + 'Grid')
    console.log(wholeGrid)
    for (var p = 0; p < noOfRows - 1; p++) {
      for (var j = 0; j < gridId; j++) {
        wholeGrid[j].style.backgroundColor = palette[p][0]
      }
      // allGrids[ranNum(0, gridId)].style.backgroundColor = palette[p][1]
    }

    // add event listener to each element created
    wholeGrid.forEach(function (elem) {
      elem.addEventListener('click', isMatch)
    })

    // randomize one tile to make odd
    ranGrid = document.querySelectorAll('.L' + noOfRows + 'Grid')[ranNum(0, gridId - 1)]
    console.log(ranGrid)
    console.log(gridId)
    ranGrid.style.backgroundColor = palette[p - 1][1]
  }
// end of gridCreate ()

// random number btw max & min
  function ranNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

// target the start node
  var startButtonTgt = document.querySelector('.startButton')
// add event listener to start button
  startButtonTgt.addEventListener('click', function () {
    init()
  })


// console.log(wholeGrid)
// // add event listener
//   wholeGrid.forEach(function (elem) {
//     elem.addEventListener('click', function () {
//       alert(this)
//       console.log(wholeGrid)
//       console.log(elem)

    function isMatch(elem) {
      console.log('isMatch is working')

      console.log(this)
      console.log(ranGrid)
      if (this === ranGrid) {
        console.log('matched!')

        // target the score node
        var scoreTgt = document.querySelector('.score')
        // update score to score node
        scoreTgt.innerHTML = score + 1
        score += 1

        // empty out previous grid squares
        document.querySelector('.container').innerHTML = ' '

        // console.log(score)

        // increase the grid size if < 5x5
        if (noOfRows < 5) {
          noOfRows += 1
        }

        // create the new grid
        gridCreate()

    //   }
    // })

      }
    // })
  // })
  }
})
