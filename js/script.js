
function init () {
  var allDivs = document.querySelectorAll('div')

  allDivs.forEach(function (div) {
    div.addEventListener('', addMove)
  })
}

function addMove (event) {
  var elem = event.target
  elem.classList.add('move')
}
// =======================================================

// Global Variables:
var pauseButton = document.querySelector('#pause')
var restartButton = document.querySelector('#restart')
var body = document.querySelector('body')
var rabbit = document.querySelector('.rabbit')
var playArea = document.querySelector('.playarea')
var easySelected = document.querySelector('#buttonE')
var hardSelected = document.querySelector('#buttonH')

// Global Declarations:
rabbit.style.left = '150px'
rabbit.style.top = '110px'
rabbit.style.right = '230px'
rabbit.style.bottom = '190px'

// Start Game:
easySelected.addEventListener('click', initiateEasyMode)
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 69) {
    initiateEasyMode()
    initiateEasyMode = false
    initiateHardMode = false
  }
})

hardSelected.addEventListener('click', initiateHardMode)
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 72) {
    initiateHardMode()
    initiateHardMode = false
    initiateEasyMode = false
  }
})

function initiateEasyMode () {
  var start = document.querySelector('.welcome')
  start.style.display = 'none'
  pauseButton.style.display = ''
  restartButton.style.display = ''
  gameModeEasy()
}

function initiateHardMode () {
  var start = document.querySelector('.welcome')
  start.style.display = 'none'
  pauseButton.style.display = ''
  restartButton.style.display = ''
  gameModeHard()
}

// Pause Game:
pauseButton.style.display = 'none'
pauseButton.addEventListener('click', function () {
  blur()
  setTimeout(pause, 100)
})

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 80) {
    blur()
    setTimeout(pause, 100)
  }
})

function rePause () {
  pause()
}

function blur () {
  body.style.filter = 'blur(1.8px)'
}

function undoBlur () {
  body.style.filter = 'blur(0px)'
}

function pause () {
  var pause = confirm("Game Paused! Click 'OK' to continue game")

  if (pause == false) {
    rePause()
  } else {
    undoBlur()
  }
}
// Pause Game:
restartButton.style.display = 'none'
restartButton.addEventListener('click', function () {
  location.reload()
})

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 82) {
    location.reload()
  }
})
function restart () {
  location.reload()
}

//  Game Difficulty - EASY: ==============================
function gameModeEasy () {
// Obstacle Creation & Movement:
  setInterval(function () {
    moveSpikes(createSpikes())
  }, 1200)

  function createSpikes () {
    var spikes = document.createElement('div')
    spikes.className = 'spikes'
    spikes.style.backgroundImage = "url('img/spikeeasy.png')"
    spikes.style.width = 20 + 'px'
    spikes.style.height = 40 + 'px'
    playArea.appendChild(spikes)
    spikes.style.left = 950 + 'px'
    spikes.style.top = 150 + 'px'
    return spikes
  }

  function moveSpikes (elem) {
    setInterval(function () {
      if (elem.style.left === '0px') {
        playArea.removeChild(elem)
      } else {
        if (collision()) {
          playArea.removeChild(elem)
          setTimeout(alert('IMPALED!'), 1200)
        } else {
        }
        var spikesLeft = parseInt(elem.style.left)

        elem.style.left = spikesLeft - 10 + 'px'
      }
    }, 15)
  }

// Detecting Collision:
  function collision () {
    var spikes = document.querySelector('.spikes')

    var rL = parseInt(rabbit.style.left)
    var rR = parseInt(rabbit.style.left) + 80
    var rT = parseInt(rabbit.style.top)
    var rB = parseInt(rabbit.style.top) + 80

    var sL = parseInt(spikes.style.left)
    var sR = parseInt(spikes.style.left) + 20
    var sT = parseInt(spikes.style.top)
    var sB = parseInt(spikes.style.top) + 40

    if (rR > sL &&
        rB > sT &&
        rL < sR) {
      return true
    } else {
      return false
    }
  }
//  Timer:
  setInterval(Timer, 200)
  var score = 0
  function Timer () {
    ++score
    var currentScore = document.querySelector('#timer')
    currentScore.innerHTML = 'Score: ' + score
  }
}

//  Game Difficulty - MEDIUM: ==============================
function gameModeHard () {
  // Obstacle Creation & Movement:
  setInterval(function () {
    moveSpikes(createSpikes())
  }, 1400)

  function createSpikes () {
    var spikes = document.createElement('div')
    spikes.className = 'spikes'
    spikes.style.backgroundImage = "url('img/spikemedium.png')"
    spikes.style.width = 60 + 'px'
    spikes.style.height = 40 + 'px'
    playArea.appendChild(spikes)
    spikes.style.left = 950 + 'px'
    spikes.style.top = 150 + 'px'
    return spikes
  }

  function moveSpikes (elem) {
    setInterval(function () {
      if (elem.style.left === '0px') {
        playArea.removeChild(elem)
      } else {
        if (collision()) {
          playArea.removeChild(elem)
          setTimeout(alert('IMPALED!'), 1200)
        } else {
        }
        var spikesLeft = parseInt(elem.style.left)

        elem.style.left = spikesLeft - 10 + 'px'
      }
    }, 9)
  }

// Detecting Collision:
  function collision () {
    var spikes = document.querySelector('.spikes')

    var rL = parseInt(rabbit.style.left)
    var rR = parseInt(rabbit.style.left) + 80
    var rT = parseInt(rabbit.style.top)
    var rB = parseInt(rabbit.style.top) + 80

    var sL = parseInt(spikes.style.left)
    var sR = parseInt(spikes.style.left) + 60
    var sT = parseInt(spikes.style.top)
    var sB = parseInt(spikes.style.top) + 40

    if (rR > sL &&
        rB > sT &&
        rL < sR) {
      return true
    } else {
      return false
    }
  }
  //  Timer:
  setInterval(Timer, 200)
  var score = 0
  function Timer () {
    ++score
    var currentScore = document.querySelector('#timer')
    currentScore.innerHTML = 'Score: ' + score
  }
}

// Character Controls:

// 1. Limitations:
  function canJump () {
    if (parseInt(rabbit.style.top) < 110) {
      return false
    }
  }

// 2. Functions:
  function jump () {
    rabbit.style.top = 28 + 'px'
    rabbit.style.backgroundImage = "url('img/skatejump2.png')"
    canJump = false
    rabbit.style.transition = 'linear'
  }

  function drop () {
    rabbit.style.top = 110 + 'px'
    rabbit.style.backgroundImage = "url('img/skating.gif')"
    rabbit.style.transition = 'linear'
    canJump = true
  }

// 3. Keyboard Targeting:
  document.addEventListener('keydown', function (event) {
    if (event.keyCode === 38) {
      if (canJump) {
        jump()
        canJump = false
      } else if (!canJump) {
        drop()
      }
    }
  })

  document.addEventListener('keyup', function (event) {
    drop()
    canJump = true
  })
