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
  var randomNum = 0
  document.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
      if (event.keyCode === 90) {
        moveJackOne()
      }
      if (event.keyCode === 88) {
        moveJackTwo()
      }
      if (event.keyCode === 67) {
        moveJackThree()
      }
      if (event.keyCode === 86) {
        moveJackFour()
      }
      if (event.keyCode === 190) {
        chop()
      }
    }
  }

  function checkKeyCode (keycode) {
    if (keycode === 90 || keycode === 88 || keycode === 67 || keycode === 86 || keycode === 190) {
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
    if (number !== randomNum) {
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
      randomNum = number
    } else {
      generateTrees()
    }
  }
  function checkLevel () {
    if (scorecounter <= 3) {
      levelOne()
    } else if (scorecounter <= 6) {
      levelTwo()
    } else if (scorecounter <= 9) {
      levelThree()
    } else if (scorecounter <= 12) {
      levelFour()
    } else if (scorecounter <= 15) {
      levelFive()
    } else {
      levelInfinite()
    }
  }
  function levelOne () {
    if (treeNumber === 1) {
      moveTree1Down = setInterval(move1Down, 40)
    } else if (treeNumber === 2) {
      moveTree2Down = setInterval(move2Down, 40)
    } else if (treeNumber === 3) {
      moveTree3Down = setInterval(move3Down, 40)
    } else if (treeNumber === 4) {
      moveTree4Down = setInterval(move4Down, 40)
    }
  }
  function levelTwo () {
    if (treeNumber === 1) {
      clearInterval(moveTree1Down)
      moveTree1Down = setInterval(move1Down, 30)
    } else if (treeNumber === 2) {
      clearInterval(moveTree2Down)
      moveTree2Down = setInterval(move2Down, 30)
    } else if (treeNumber === 3) {
      clearInterval(moveTree3Down)
      moveTree3Down = setInterval(move3Down, 30)
    } else if (treeNumber === 4) {
      clearInterval(moveTree4Down)
      moveTree4Down = setInterval(move4Down, 30)
    }
  }
  function levelThree () {
    if (treeNumber === 1) {
      clearInterval(moveTree1Down)
      moveTree1Down = setInterval(move1Down, 20)
    } else if (treeNumber === 2) {
      clearInterval(moveTree2Down)
      moveTree2Down = setInterval(move2Down, 20)
    } else if (treeNumber === 3) {
      clearInterval(moveTree3Down)
      moveTree3Down = setInterval(move3Down, 20)
    } else if (treeNumber === 4) {
      clearInterval(moveTree4Down)
      moveTree4Down = setInterval(move4Down, 20)
    }
  }
  function levelFour () {
    if (treeNumber === 1) {
      clearInterval(moveTree1Down)
      moveTree1Down = setInterval(move1Down, 15)
    } else if (treeNumber === 2) {
      clearInterval(moveTree2Down)
      moveTree2Down = setInterval(move2Down, 15)
    } else if (treeNumber === 3) {
      clearInterval(moveTree3Down)
      moveTree3Down = setInterval(move3Down, 15)
    } else if (treeNumber === 4) {
      clearInterval(moveTree4Down)
      moveTree4Down = setInterval(move4Down, 15)
    }
  }
  function levelFive () {
    if (treeNumber === 1) {
      clearInterval(moveTree1Down)
      moveTree1Down = setInterval(move1Down, 10)
    } else if (treeNumber === 2) {
      clearInterval(moveTree2Down)
      moveTree2Down = setInterval(move2Down, 10)
    } else if (treeNumber === 3) {
      clearInterval(moveTree3Down)
      moveTree3Down = setInterval(move3Down, 10)
    } else if (treeNumber === 4) {
      clearInterval(moveTree4Down)
      moveTree4Down = setInterval(move4Down, 10)
    }
  }
  function levelInfinite () {
    if (treeNumber === 1) {
      clearInterval(moveTree1Down)
      moveTree1Down = setInterval(move1Down, 6)
    } else if (treeNumber === 2) {
      clearInterval(moveTree2Down)
      moveTree2Down = setInterval(move2Down, 6)
    } else if (treeNumber === 3) {
      clearInterval(moveTree3Down)
      moveTree3Down = setInterval(move3Down, 6)
    } else if (treeNumber === 4) {
      clearInterval(moveTree4Down)
      moveTree4Down = setInterval(move4Down, 6)
}
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

  function moveJackOne () {
    jack.style.left = '55px'
    jackNumber = 1
  }
  function moveJackTwo () {
    jack.style.left = '215px'
    jackNumber = 2
  }
  function moveJackThree () {
    jack.style.left = '375px'
    jackNumber = 3
  }
  function moveJackFour () {
    jack.style.left = '535px'
    jackNumber = 4
  }

  function chop () {
    if ((jackNumber === 1 && firstTree.style.visibility === 'visible') || (jackNumber === 2 && secondTree.style.visibility === 'visible') || (jackNumber === 3 && thirdTree.style.visibility === 'visible') || (jackNumber === 4 && fourthTree.style.visibility === 'visible')) {
      scorecounter += 1
      if (scorecounter < 10) {
      timeLeft += 300
    } else {
      timeLeft += 200
    }
      if (jackNumber === 1) {
        refreshOne()
      } if (jackNumber === 2) {
        refreshTwo()
      } if (jackNumber === 3) {
        refreshThree()
      } if (jackNumber === 4) {
        refreshFour()
      }
    } else {
      timeLeft -= 300
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
      if (timeLeft < 0) {
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
    if (scorecounter === 3) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 2200)
    } if (scorecounter === 6) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 1500)
    } if (scorecounter === 9) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 1125)
    } if (scorecounter === 12) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 750)
    } if (scorecounter === 15) {
      clearInterval(genTree)
      genTree = setInterval(generateTrees, 450)
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
    firstTreeTop = 0
    secondTree.style.top = '0px'
    secondTreeTop = 0
    thirdTree.style.top = '0px'
    thirdTreeTop = 0
    fourthTree.style.top = '0px'
    fourthTreeTop = 0
    timeLeft = 6000
    scorecounter = 0
    currentScore.innerHTML = scorecounter
    startGame()
  }
}
