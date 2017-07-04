document.addEventListener('DOMContentLoaded', init)

function init () {
  var topScoreRecord = document.querySelector('.score')
  var currentScore = document.querySelector('.currentscore')
  var timer = document.querySelector('.countdown')
  var jack = document.querySelector('.jack')
  jack.style.left = '295px'
  var startButton = document.querySelector('.startbutton')
  startButton.addEventListener('click', startGame)
  var retryButton = document.querySelector('.retrybutton')
  retryButton.addEventListener('click', restartGame)
  var jackNumber = 0
  var treeNumber = 0
  var firstTree = document.querySelector('.firsttree')
  firstTree.style.top = '115px'
  var secondTree = document.querySelector('.secondtree')
  secondTree.style.top = '115px'
  var thirdTree = document.querySelector('.thirdtree')
  thirdTree.style.top = '115px'
  var fourthTree = document.querySelector('.fourthtree')
  fourthTree.style.top = '115px'
  var scorecounter = 0
  var gameOver = true
  var timeLeft = 3000

  document.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
      if (event.keyCode === 37) {
        moveLeft()
      }
      if (event.keyCode === 39) {
        moveRight()
      }
      if (event.keyCode === 88) {
        if (gameOver === false) {
          chop()
        }
      }
    }
  }

  function checkKeyCode (keycode) {
    if (keycode === 37 || keycode === 39 || keycode === 88) {
      return true
    }
    return false
  }

  function startGame () {
    startButton.style.visibility = 'hidden'
    retryButton.style.visibility = 'hidden'
    gameOver = false
    startTimer()
  }

  function generateTrees () {
    var number = randomFn(1, 4)
    var topPosition = randomFn(10, 250)
    if (number === 1) {
      firstTree.style.visibility = 'visible'
      firstTree.style.top = topPosition + 'px'
      secondTree.style.visibility = 'hidden'
      thirdTree.style.visibility = 'hidden'
      fourthTree.style.visibility = 'hidden'
      treeNumber += 1
    }
    if (number === 2) {
      firstTree.style.visibility = 'hidden'
      secondTree.style.visibility = 'visible'
      secondTree.style.top = topPosition + 'px'
      thirdTree.style.visibility = 'hidden'
      fourthTree.style.visibility = 'hidden'
      treeNumber += 2
    }
    if (number === 3) {
      firstTree.style.visibility = 'hidden'
      secondTree.style.visibility = 'hidden'
      thirdTree.style.visibility = 'visible'
      thirdTree.style.top = topPosition + 'px'
      fourthTree.style.visibility = 'hidden'
      treeNumber += 3
    }
    if (number === 4) {
      firstTree.style.visibility = 'hidden'
      secondTree.style.visibility = 'hidden'
      thirdTree.style.visibility = 'hidden'
      fourthTree.style.visibility = 'visible'
      fourthTree.style.top = topPosition + 'px'
      treeNumber += 4
    }
  }

  var jackLeftPos = parseInt(jack.style.left)
  if (jackLeftPos === 55) {
    jackNumber = 1
  } else if (jackLeftPos === 215) {
    jackNumber = 2
  } else if (jackLeftPos === 375) {
    jackNumber = 3
  } else if (jackLeftPos === 535) {
    jackNumber = 4
  }

  function moveLeft () {
    if (jackLeftPos > 15 && jackLeftPos <= 575) {
      jackLeftPos -= 40
      jack.style.left = jackLeftPos + 'px'
    }
  }
  function moveRight () {
    if (jackLeftPos >= 15 && jackLeftPos < 575) {
      jackLeftPos += 40
      jack.style.left = jackLeftPos + 'px'
    }
  }

  function randomFn (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function chop () {
    if (jackLeftPos === 55) {
      jackNumber = 1
    } else if (jackLeftPos === 215) {
      jackNumber = 2
    } else if (jackLeftPos === 375) {
      jackNumber = 3
    } else if (jackLeftPos === 535) {
      jackNumber = 4
    }
    if (gameOver === false) {
      if (jackNumber === treeNumber) {
        scorecounter += 1
        timeLeft += 50
        refreshRound()
      } else {
        scorecounter -= 1
      }
      displayScore()
    }
  }

  function displayScore () {
    currentScore.innerHTML = scorecounter
  }
  function refreshRound () {
    treeNumber = 0
    generateTrees()
  }

  function startTimer () {
    var elem = timer
    var timerId = setInterval(countdown, 1)

    function countdown () {
      if (timeLeft === -1) {
        clearTimeout(timerId)
        gameOver = true
        isGameOver()
      } else {
        elem.innerHTML = timeLeft
        timeLeft--
      }
    }
    generateTrees()
  }
  function isGameOver () {
    var topScore = parseInt(topScoreRecord.innerHTML)
    if (scorecounter > topScore) {
      setTimeout(function () { alert('NEW HIGH SCORE!') }, 100)
      topScoreRecord.innerHTML = scorecounter
    } else {
      setTimeout(function () { alert('please try again') }, 100)
    }
    retryButton.style.visibility = 'visible'
    gameOver = true
  }

  function restartGame () {
    timeLeft = 3000
    treeNumber = 0
    jackNumber = 0
    jack.style.left = '295px'
    scorecounter = 0
    startGame()
  }
}
