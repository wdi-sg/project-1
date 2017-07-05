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
  var jackNumber = -1
  var treeNumber = 0
  var firstTree = document.querySelector('.firsttree')
  firstTree.style.top = '0px'
  var firstTreeTop = parseInt(firstTree.style.top)
  var secondTree = document.querySelector('.secondtree')
  secondTree.style.top = '0px'
  var secondTreeTop = parseInt(secondTree.style.top)
  var thirdTree = document.querySelector('.thirdtree')
  thirdTree.style.top = '0px'
  var thirdTreeTop = parseInt(thirdTree.style.top)
  var fourthTree = document.querySelector('.fourthtree')
  fourthTree.style.top = '0px'
  var fourthTreeTop = parseInt(fourthTree.style.top)
  var scorecounter = 0
  var gameOver = true
  var timeLeft = 6000
  var genTree
  var moveTree1Down
  var moveTree2Down
  var moveTree3Down
  var moveTree4Down
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
    firstTree.style.visibility = 'hidden'
    secondTree.style.visibility = 'hidden'
    thirdTree.style.visibility = 'hidden'
    fourthTree.style.visibility = 'hidden'
    startTimer()
  }

  function randomFn (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function generateTrees () {
    var number = randomFn(1, 4)
    console.log('random number is ' + number)
    if (number === 1) {
      firstTree.style.visibility = 'visible'
      treeNumber = 1
      checkLevel()
    }
    if (number === 2) {
      secondTree.style.visibility = 'visible'
      treeNumber = 2
      checkLevel()
    }
    if (number === 3) {
      thirdTree.style.visibility = 'visible'
      treeNumber = 3
      checkLevel()
    }
    if (number === 4) {
      fourthTree.style.visibility = 'visible'
      treeNumber = 4
      checkLevel()
    }
  }
  function checkLevel () {
    if (scorecounter <= 3) {
      levelOne()
    } else if (scorecounter <= 7) {
      levelTwo()
    } else if (scorecounter <= 11) {
      levelThree()
    } else if (scorecounter <= 13) {
      levelFour()
    } else if (scorecounter <= 17) {
      levelFive()
    } else {
      levelInfinite()
    }
  }
  function levelOne () {
    moveTree1Down = setInterval(move1Down, 22)
    moveTree2Down = setInterval(move2Down, 22)
    moveTree3Down = setInterval(move3Down, 22)
    moveTree4Down = setInterval(move4Down, 22)
  }
  function levelTwo () {
    clearInterval(moveTree1Down)
    moveTree1Down = setInterval(move1Down, 18)
    clearInterval(moveTree2Down)
    moveTree2Down = setInterval(move2Down, 18)
    clearInterval(moveTree3Down)
    moveTree3Down = setInterval(move3Down, 18)
    clearInterval(moveTree4Down)
    moveTree4Down = setInterval(move4Down, 18)
  }
  function levelThree () {
    clearInterval(moveTree1Down)
    moveTree1Down = setInterval(move1Down, 14)
    clearInterval(moveTree2Down)
    moveTree2Down = setInterval(move2Down, 14)
    clearInterval(moveTree3Down)
    moveTree3Down = setInterval(move3Down, 14)
    clearInterval(moveTree4Down)
    moveTree4Down = setInterval(move4Down, 14)
  }
  function levelFour () {
    clearInterval(moveTree1Down)
    moveTree1Down = setInterval(move1Down, 11)
    clearInterval(moveTree2Down)
    moveTree2Down = setInterval(move2Down, 11)
    clearInterval(moveTree3Down)
    moveTree3Down = setInterval(move3Down, 11)
    clearInterval(moveTree4Down)
    moveTree4Down = setInterval(move4Down, 11)
  }
  function levelFive () {
    clearInterval(moveTree1Down)
    moveTree1Down = setInterval(move1Down, 7)
    clearInterval(moveTree2Down)
    moveTree2Down = setInterval(move2Down, 7)
    clearInterval(moveTree3Down)
    moveTree3Down = setInterval(move3Down, 7)
    clearInterval(moveTree4Down)
    moveTree4Down = setInterval(move4Down, 7)
  }
  function levelInfinite () {
    clearInterval(moveTree1Down)
    moveTree1Down = setInterval(move1Down, 3)
    clearInterval(moveTree2Down)
    moveTree2Down = setInterval(move2Down, 3)
    clearInterval(moveTree3Down)
    moveTree3Down = setInterval(move3Down, 3)
    clearInterval(moveTree4Down)
    moveTree4Down = setInterval(move4Down, 3)
  }
  function move1Down () {
    if (firstTreeTop < 270) {
      firstTreeTop += 2
      firstTree.style.top = firstTreeTop + 'px'
    } else {
      firstTree.style.visibility = 'hidden'
      firstTreeTop = 0
      firstTree.style.top = '0px'
      clearInterval(moveTree1Down)
    }
  }
  function move2Down () {
    if (secondTreeTop < 270) {
      secondTreeTop += 2
      secondTree.style.top = secondTreeTop + 'px'
    } else {
      secondTree.style.visibility = 'hidden'
      secondTreeTop = 0
      secondTree.style.top = '0px'
      clearInterval(moveTree2Down)
    }
  }
  function move3Down () {
    if (thirdTreeTop < 270) {
      thirdTreeTop += 2
      thirdTree.style.top = thirdTreeTop + 'px'
    } else {
      thirdTree.style.visibility = 'hidden'
      thirdTreeTop = 0
      thirdTree.style.top = '0px'
      clearInterval(moveTree3Down)
    }
  }
  function move4Down () {
    if (fourthTreeTop < 270) {
      fourthTreeTop += 2
      fourthTree.style.top = fourthTreeTop + 'px'
    } else {
      fourthTree.style.visibility = 'hidden'
      fourthTreeTop = 0
      fourthTree.style.top = '0px'
      clearInterval(moveTree4Down)
    }
  }

  var jackLeftPos = parseInt(jack.style.left)

  function moveLeft () {
    if (jackLeftPos > 55 && jackLeftPos <= 535) {
      jackLeftPos -= 80
      jack.style.left = jackLeftPos + 'px'
      checkJackPos()
    }
  }

  function moveRight () {
    if (jackLeftPos >= 55 && jackLeftPos < 535) {
      jackLeftPos += 80
      jack.style.left = jackLeftPos + 'px'
      checkJackPos()
    }
  }

  function checkJackPos () {
    if (jackLeftPos === 55) {
      jackNumber = 1
    } else if (jackLeftPos === 215) {
      jackNumber = 2
    } else if (jackLeftPos === 375) {
      jackNumber = 3
    } else if (jackLeftPos === 535) {
      jackNumber = 4
    } else {
      jackNumber = -1
    }
    console.log(jackNumber)
  }
  function chop () {
    if (jackNumber === treeNumber) {
      scorecounter += 1
      timeLeft += 500
      if (jackNumber === 1) {
        refreshOne()
      } if (jackNumber === 2) {
        refreshTwo()
      } if (jackNumber === 3) {
        refreshThree()
      } if (jackNumber === 4) {
        refreshFour()
      }
    }
    setTimeout(colorChanger, 1000)
    displayScore()
  }
  function colorChanger () {
    jack.style.backgroundColor = 'orange'
  }
  function refreshOne () {
    firstTree.style.visibility = 'hidden'
    firstTreeTop = 0
    firstTree.style.top = '0px'
    clearInterval(moveTree1Down)
    treeNumber = 0
  }
  function refreshTwo () {
    secondTree.style.visibility = 'hidden'
    secondTreeTop = 0
    secondTree.style.top = '0px'
    clearInterval(moveTree2Down)
    treeNumber = 0
  }
  function refreshThree () {
    thirdTree.style.visibility = 'hidden'
    thirdTreeTop = 0
    thirdTree.style.top = '0px'
    clearInterval(moveTree3Down)
    treeNumber = 0
  }
  function refreshFour () {
    fourthTree.style.visibility = 'hidden'
    fourthTreeTop = 0
    fourthTree.style.top = '0px'
    clearInterval(moveTree4Down)
    treeNumber = 0
  }

  function startTimer () {
    var elem = timer
    var timerId = setInterval(countdown, 1)

    function countdown () {
      if (timeLeft === -1) {
        clearTimeout(timerId)
        gameOver = true
        clearInterval(genTree)
        clearInterval(moveTree1Down)
        clearInterval(moveTree2Down)
        clearInterval(moveTree3Down)
        clearInterval(moveTree4Down)
        isGameOver()
      } else {
        elem.innerHTML = timeLeft
        timeLeft--
      }
    }
    genTree = setInterval(generateTrees, 3000)
  }
  function displayScore () {
    currentScore.innerHTML = scorecounter
    if (scorecounter === 6) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 2500)
    } if (scorecounter === 10) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 2000)
    } if (scorecounter === 14) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 1500)
    } if (scorecounter === 18) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 1000)
    } if (scorecounter === 22) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 500)
    }
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
  }

  function restartGame () {
    jack.style.left = '295px'
    jackNumber = -1
    treeNumber = 0
    firstTree.style.top = '0px'
    secondTree.style.top = '0px'
    thirdTree.style.top = '0px'
    fourthTree.style.top = '0px'
    timeLeft = 6000
    scorecounter = 0
    startGame()
  }
}
