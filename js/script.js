// document.addEventListener('DOMContentLoaded',init)
//
// function init(){
//
//   var topScoreRecord = document.querySelector('.score')
//   var currentScore = document.querySelector('.currentscore')
//   var timer = document.querySelector('.countdown')
//   var jack = document.querySelector('.jack')
//
//   document.addEventListener('keyup', onKeyUp)
//   function onKeyUp (event) {
//     if (checkKeyCode(event.keyCode)) {
//       if (event.keyCode === 37) {
//         moveLeft()
//       }
//       if (event.keyCode === 39) {
//         moveRight()
//       }
//       if (event.keyCode === 32) {
//         restart()
//       }
//     }
//   }
//
//   function checkKeyCode (keycode) {
//     if (keycode === 37 || keycode === 39 || keycode === 32) {
//       return true
//     }
//     return false
//   }
// }

document.addEventListener('DOMContentLoaded', init)

function init () {
  var leftArrow = document.querySelector('.leftarrow')
  leftArrow.addEventListener('click', moveLeft)

  var rightArrow = document.querySelector('.rightarrow')
  rightArrow.addEventListener('click', moveRight)

  var timer = document.querySelector('.countdown')

  var jack = document.querySelector('.jack')

  var mainAction = document.querySelector('.mainaction')

  var topScoreRecord = document.querySelector('.score')
  var currentScore = document.querySelector('.currentscore')

  document.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
      if (event.keyCode === 37) {
        moveLeft()
      }
      if (event.keyCode === 39) {
        moveRight()
      }
      if (event.keyCode === 32) {
        restart()
      }
    }
  }

  function checkKeyCode (keycode) {
    if (keycode === 37 || keycode === 39 || keycode === 32) {
      return true
    }
    return false
  }

  function randomFn (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  var gameOver = false
  var scorecounter = 0
  var startTime = false
  var timeLeft = 1000
// var isJackAlive = true

// var leftBranch = document.createElement('div')
// leftBranch.classList.add('left-branch')
// leftBranch.style.left = '17px'
// var leftBranchTop = parseInt(leftBranch.style.top)
//
// var rightBranch = document.createElement('div')
// rightBranch.classList.add('right-branch')
// rightBranch.style.left = '217px'
// var rightBranchTop = parseInt(rightBranch.style.top)

  var rightBranch = document.createElement('div')
  rightBranch.classList.add('right-branch')
  var leftBranch = document.createElement('div')
  leftBranch.classList.add('left-branch')
  function createBranch () {
    var number = randomFn(1, 2)
    if (number === 1) {
      mainAction.appendChild(rightBranch)
    // if (rightBranch.style.top === '140px') {
    //   document.addEventListener('keyup', hideRightBranch)
    // }
    }
    if (number === 2) {
      mainAction.appendChild(leftBranch)
    // if (leftBranch.style.top === '140px') {
    //   document.addEventListener('keyup', hideLeftBranch)
    // }
    }
    moveDown()
  }
  function hideRightBranch () {
    rightBranch.style.visibility = 'hidden'
  }
  function hideLeftBranch () {
    leftBranch.style.visibility = 'hidden'
  }
// console.log(rightBranch.style.top)
// function createBranch () {
//   var number = randomFn(1, 2)
//   if (number === 1) {
//     // newBranch.classList.add('moveleft')
//     mainAction.appendChild(leftBranch)
//     leftBranch.style.top = '40px'
//   }
//   if (number === 2) {
//     // newBranch.classList.add('moveright')
//     mainAction.appendChild(rightBranch)
//     rightBranch.style.top = '40px'
//   }
//   console.log(number)
//   moveDown()
// }

  function moveLeft () {
    if (gameOver === false) {
      if (startTime === false) {
        startTime = true
        startTimer()
      }
      createBranch()
      jack.style.left = '597px'
      timeLeft += 50
    }
  }

  function moveRight () {
    if (gameOver === false) {
      if (startTime === false) {
        startTime = true
        startTimer()
      }
      createBranch()
      jack.style.left = '717px'
      timeLeft += 50
    }
  }

  function moveDown () {
    var leftBranchFromClass = document.querySelector('.left-branch')
    var rightBranchFromClass = document.querySelector('.right-branch')
    scorecounter += 1
  // if (leftBranchTop === 320) {
  //   leftBranch.style.visibility = 'hidden'
  //     // mainAction.removeChild(leftBranch)
  // } else if (leftBranchTop === 40 || leftBranchTop === 180) {
  //   leftBranchTop += 140
  //   leftBranch.style.top = leftBranchTop + 'px'
  // } if (rightBranchTop === 320) {
  //   rightBranch.style.visibility = 'hidden'
  // }
  //     // mainAction.removeChild(rightBranch)
  // else if (rightBranchTop === 40 || rightBranchTop === 180) {
  //   rightBranchTop += 140
  //   rightBranch.style.top = rightBranchTop + 'px'
  // }
  // display()
    if (leftBranchFromClass) {
      console.log('leftBranchFromClass', leftBranchFromClass)
      console.log('leftBranchFromClass.style.top', leftBranchFromClass.style)
    } else {
      console.log('rightBranchFromClass', rightBranchFromClass)
      console.log('rightBranchFromClass.style.top', rightBranchFromClass.style)
    }
  // console.log(rightBranch)
  }

// d. display score
  function displayScore () {
    currentScore.innerHTML = scorecounter
  }
// GameOver upon timer = 0 or if isJackAlive = false
// Start Time
  function startTimer () {
    var elem = timer
    var timerId = setInterval(countdown, 1)

    function countdown () {
      if (timeLeft === -1) {
        clearTimeout(timerId)
        gameOver = true
      // isGameOver()
      } else {
        elem.innerHTML = timeLeft
        timeLeft--
      }
    }
  }

// function jackHitsBrunch () {
//   if (jack.style.left === '597px') {
//     gameOver = true
//     isGameOver()
//   }
//   if (jack.style.left === '717px') {
//     gameOver = true
//     isGameOver()
//   }
// }
  function isGameOver () {
    var topScore = parseInt(topScoreRecord.innerHTML)
    if (scorecounter > topScore) {
      setTimeout(function () { alert('NEW HIGH SCORE!') }, 500)
      topScoreRecord.innerHTML = scorecounter
    }
  }
// restart game
}
