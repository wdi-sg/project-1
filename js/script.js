// 1. target all the elements essential for the gameplay
// a. left arrow (jack to move when user press or click left key)
var leftArrow = document.querySelector('.leftarrow')
leftArrow.addEventListener('click', moveLeft)
// b. right arrow (jack to move when user press or click right key)
var rightArrow = document.querySelector('.rightarrow')
rightArrow.addEventListener('click', moveRight)
// c. timer (to show countdown of 30000ms)
var timer = document.querySelector('.countdown')
// d. jack (for moving left and right)
var jack = document.querySelector('.jack')
// e. tree trunk (moving down)
var trunk = document.querySelector('.trunk')
// f. scoreboard (to update score)
var topScore = document.querySelector('.score')
var currentScore = document.querySelector('.currentscore')
// 2. check if key is space key, left and right key
// a. space for start game
document.addEventListener('keyup', onKeyUp)

function onKeyUp (event) {
  if (checkKeyCode(event.keyCode)) {
    if (event.keyCode === 37) {
      moveLeft()
    }
    if (event.keyCode === 39) {
      moveRight()
    }
    // if (event.keyCode === 32) {
    //   pauseGame()
    // }
  }
}

function checkKeyCode (keycode) {
  if (keycode === 37 || keycode === 39 || keycode === 32) {
    return true
  }
  return false
}

// 3. isGameOver
// a. if yes
// i. prompt for restart
// ii. check if score is higher than previous high score
var gameOver = false
// b. if no (pause game)
// 4. randomise number from 1 to 2
function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
// 5. create branches (1 will be left branch, 2 will be right branch)
function createBranch () {
  number = randomFn(1, 2)
  if (number === 1) {

  } else if (number === 2) {

  }
}
// 6. gameover criteria
// a. when timer = 0
// b. jack hits branch

function isGameOver () {
  if (timer.value === 0 || jackhitsbrunch) {
    gameOver = true
    if (currentScore.value > topScore.value) {
      alert('NEW HIGH SCORE!')
      topScore.value = currentScore.value
    }
  }
}
// 7. restart game
function restart () {
  scorecounter = 0
}
// 8. gameplay
// a. add score
var scorecounter = 0
function displayScore () {
  currentScore.value = scorecounter
}
// b. moveLeft
var startTime = false
function moveLeft () {
  if (gameOver === false) {
    if (startTime === false) {
      startTime === true
      startTimer()
    }
    moveDown()
  }
}
// c. moveRight
function moveRight () {
  if (gameOver === false) {
    if (startTime === false) {
      startTime === true
      startTimer()
    }
    moveDown()
  }
}
// d. movedown
function moveDown () {
  if (gameOver === false) {
    scorecounter += 1
    displayScore()
  }
}
// e. timer running down
function startTimer () {
  var timeLeft = 3000
  var elem = document.querySelector('.countdown')

  var timerId = setInterval(countdown, 1)

  function countdown () {
    if (timeLeft == 0) {
      clearTimeout(timerId)
      // doSomething()
    } else {
      elem.innerHTML = timeLeft + 'ms'
      timeLeft--
    }
  }
}
