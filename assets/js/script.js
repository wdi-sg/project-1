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
  var timeLeft = 60
  var noOfRows = 2
  var ranGrid
  var isGameOver = false
  var wholeGrid = document.querySelectorAll('.container')
  var palette = [
    ['rgb(20, 153, 105)',
      'rgb(20, 140, 95)'],
    ['rgb(235, 152, 20)',
      'rgb(235, 135, 20)'],
    ['rgb(255, 237, 0)',
      'rgb(255, 225, 0)'],
    ['rgb(50, 150, 255)',
      'rgb(40, 160, 235)'],
    ['rgb(40, 40, 40)',
      'rgb(0, 0, 0)'],
    ['rgb(150, 255, 0)',
      'rgb(130, 255, 90)'],
    ['rgb(252, 76, 76)',
      'rgb(255, 59, 59)'],
    ['rgb(255, 105, 208)',
      'rgb(255, 101, 230)'],
    ['rgb(160, 249, 232)',
      'rgb(180, 240, 232)'],
    ['rgb(136, 15, 244)',
      'rgb(140, 58, 218)'],
    ['rgb(140, 170, 204)',
      'rgb(150, 170, 214)'],
    ['rgb(126, 16, 71)',
      'rgb(106, 16, 60)'],
    ['rgb(255, 250, 129)',
      'rgb(255, 240, 115)']
  ]
  // console.log(palette[3][0])

// initialize the game
  function init () {
  // if start button is pressed, game start
    wholeGrid.innerHTML = ' '
  // start the timer
    gameTimer()
  // put level 1 into empty container
    gridCreate()
    isGameOver = false
  // remove start button and add restart button
    startButtonTgt.textContent = 'Restart'
  // disable init() on clicking start button
    startButtonTgt.removeEventListener('click', init)
    startButtonTgt.addEventListener('click', function () {
      location.reload()
    })
  }

// check for game over
  function gameOver () {
    isGameOver = true
  // clear the grid if game is over
    document.querySelector('.container').innerHTML = ' '
    document.querySelector('.container').style.backgroundColor = ''
    var endMsg = document.createElement('h3')
    document.querySelector('.container').appendChild(endMsg)
    endMsg.textContent = 'Thanks for playing!' + '\n' + 'You scored ' + score + '/10 in ' + (60 - timeLeft - 1) + ' seconds.'
    endGameSound()
    endGameImage()
    // document.querySelector('.container').style.textAlign = 'center'
  }

// game timer
  function gameTimer () {
    // target timer node
    var timer = document.querySelector('.timer')
    var timerId = setInterval(countdown, 1000)

    function countdown () {
      if (timeLeft < 0 || isGameOver === true) {
        clearTimeout(timerId)
        gameOver()
      } else {
        timer.innerHTML = timeLeft
        timeLeft--
      }
    }
  }

// ##### grid creator; change level #####
  function gridCreate () {
    document.querySelector('.container').style.backgroundColor = 'white'
    var gridId = 0
    for (var i = 0; i < noOfRows; i++) {
      document.querySelector('.container').innerHTML += '<div class = "row">'

      for (var k = 0; k < noOfRows; k++) {
        document.querySelector('.container').innerHTML += '<div class = "L' + noOfRows + 'Grid" id = ' + gridId + '>' + '</div>'
        gridId++
      }
      document.querySelector('.container').innerHTML += '</div>'
    }

    // color the grid
    wholeGrid = document.querySelectorAll('.L' + noOfRows + 'Grid')

    // randomly choose color and remove from palette array
    var ranChosenCol = palette.splice(ranNum(0, palette.length - 1), 1)
    // console.log(ranChosenCol)

    // console.log(wholeGrid)
    for (var p = 0; p < noOfRows - 1; p++) {
      for (var j = 0; j < gridId; j++) {
        wholeGrid[j].style.backgroundColor = ranChosenCol[0][0]
      }
    }
    // add event listener to each element created
    wholeGrid.forEach(function (elem) {
      elem.addEventListener('click', isMatch)
    })
    // randomize one tile to make odd
    ranGrid = document.querySelectorAll('.L' + noOfRows + 'Grid')[ranNum(0, gridId - 1)]
    // console.log(ranGrid)
    // console.log(gridId)
    ranGrid.style.backgroundColor = ranChosenCol[0][1]
  }
// ##### End of gridCreate() #####

// random number btw max & min
  function ranNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function isMatch (elem) {
    // console.log('isMatch is working')
    // console.log(this)
    // console.log(ranGrid)
    if (this === ranGrid) {
      // console.log('matched!')

      // target the score node
      var scoreTgt = document.querySelector('.score')
      // update score to score node
      scoreTgt.innerHTML = score + 1
      score += 1

      // increase the grid size
      if (noOfRows < 11) {
        noOfRows += 1
      } else {
        isGameOver = true
        return
      }
      // empty out previous grid squares
      document.querySelector('.container').innerHTML = ' '
      // create the new grid
      gridCreate()
    } else {
      wrongSound()
    }
  } // ##### END of isMatch() #####

// audio:
  function wrongSound () {
    var audio = document.createElement('audio')
    audio.src = 'audio/error2.mp3'
    audio.autoplay = true
    document.querySelector('.container').appendChild(audio)
    audio.volume = 0.4
  }

  function endGameSound () {
    var audio = document.createElement('audio')
    audio.src = 'audio/finale1.mp3'
    audio.autoplay = true
    document.querySelector('.container').appendChild(audio)
    audio.volume = 0.4
  }

  function endGameImage (){
    var elem = document.createElement('img')
    elem.setAttribute('src', 'images/fireworks2.gif')
    elem.setAttribute("width", "600")
    document.querySelector('.container').appendChild(elem)
  }

  // target the start node
  var startButtonTgt = document.querySelector('.startButton')
  // add event listener to start button
  startButtonTgt.addEventListener('click', init)
}) // ##### END of DOMContentLoaded #####
