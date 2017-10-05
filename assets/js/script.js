document.addEventListener('DOMContentLoaded', init)

function init () {
  var loopTimer
  var newGame = document.querySelector('#newGame')
  var pacmanTitle = document.querySelector('#pacmanTitle')
  var instructions = document.querySelector('#instructions')
  var gameboard = document.querySelector('#gameboard')
  var pacman = document.querySelector('#pacman')
  var blueGhost = document.querySelector('#blueGhost')
  var orangeGhost = document.querySelector('#orangeGhost')
  var pinkGhost = document.querySelector('#pinkGhost')
  var redGhost = document.querySelector('#redGhost')
  var scoreboard = document.querySelector('#scoreboard')
  var scores = document.querySelector('#scores')
  var levelboard = document.querySelector('#levelboard')
  var level = document.querySelector('#level')
  var lifetracker = document.querySelector('#lifetracker')
  var interval = document.querySelector('#interval')
  var win = document.querySelector('#win')
  var lose = document.querySelector('#lose')
  var startButton = document.querySelector('.startButton')

  // audio files
  var pacmanStartAudio = document.createElement('audio')
  pacmanStartAudio.setAttribute('src', 'assets/images/pacman-start.wav')
  pacmanStartAudio.preload = 'auto'
  var pacmanDeathAudio = document.createElement('audio')
  pacmanDeathAudio.setAttribute('src', 'assets/images/pacman-death.wav')
  pacmanDeathAudio.preload = 'auto'
  var pacmanWinAudio = document.createElement('audio')
  pacmanWinAudio.setAttribute('src', 'assets/images/pacman-win.wav')
  pacmanWinAudio.preload = 'auto'
  var pacmanChompAudio = document.createElement('audio')
  pacmanChompAudio.setAttribute('src', 'assets/images/pacman-chomp.mp3')
  pacmanChompAudio.playbackRate = 2
  pacmanChompAudio.preload = 'auto'

  var walls = []
  var dots = []
  var lives = 3
  var scoretracker = []
  var currentLevel = 1
  var pacmanSpeed = 8
  var ghostSpeed = 9

  var upKeyDown = false
  var downKeyDown = false
  var leftKeyDown = false
  var rightKeyDown = false

  // attach click event to pacmanTitle
  pacmanTitle.addEventListener('click', function () {
    newGame.style.display = 'none'
    instructions.style.display = ''
    var instructionsTimer = function () {
      instructions.style.display = 'none'
      startGame()
    }
    setTimeout(instructionsTimer, 4500)
  })

  // attach click event to startButton
  startButton.addEventListener('click', startGame)

  instructions.style.display = 'none'
  interval.style.display = 'none'
  win.style.display = 'none'
  lose.style.display = 'none'
  scoreboard.style.display = 'none'
  levelboard.style.display = 'none'
  lifetracker.style.display = 'none'
  startButton.style.display = 'none'

  blueGhost.direction = 'left'
  orangeGhost.direction = 'right'
  pinkGhost.direction = 'up'
  redGhost.direction = 'down'

  pacman.style.top = '440px'
  pacman.style.left = '280px'
  pacman.style.height = '40px'
  pacman.style.width = '40px'

  blueGhost.style.top = '40px'
  blueGhost.style.left = '40px'
  blueGhost.style.height = '40px'
  blueGhost.style.width = '40px'

  orangeGhost.style.top = '40px'
  orangeGhost.style.left = '520px'
  orangeGhost.style.height = '40px'
  orangeGhost.style.width = '40px'

  pinkGhost.style.top = '440px'
  pinkGhost.style.left = '40px'
  pinkGhost.style.height = '40px'
  pinkGhost.style.width = '40px'

  redGhost.style.top = '440px'
  redGhost.style.left = '520px'
  redGhost.style.height = '40px'
  redGhost.style.width = '40px'

  // function to create walls for gameboard
  function createWall (left, top, width, height) {
    var wall = document.createElement('div')
    wall.className = 'wall'
    wall.style.left = left + 'px'
    wall.style.top = top + 'px'
    wall.style.width = width + 'px'
    wall.style.height = height + 'px'
    gameboard.appendChild(wall)
    walls.push(wall)
  }

  // gameboard borders
  createWall(0, 0, 600, 40)
  createWall(0, 0, 40, 280)
  createWall(0, 280, 40, 200)
  createWall(0, 480, 600, 40)
  createWall(560, 0, 40, 280)
  createWall(560, 280, 40, 240)
  // gameboard tiles
  // W
  createWall(80, 80, 40, 120)
  createWall(160, 120, 40, 80)
  createWall(240, 80, 40, 120)
  createWall(80, 200, 200, 40)
  // D
  createWall(320, 80, 40, 160)
  createWall(360, 80, 40, 40)
  createWall(360, 200, 40, 40)
  createWall(400, 120, 40, 80)
  // I
  createWall(480, 80, 40, 160)
  // 11
  createWall(240, 280, 40, 160)
  createWall(320, 280, 40, 160)
  // others
  createWall(40, 280, 160, 40)
  createWall(400, 280, 120, 40)
  createWall(80, 360, 40, 80)
  createWall(160, 360, 40, 80)
  createWall(400, 360, 40, 80)
  createWall(480, 360, 40, 80)

  // function to create dots for gameboard
  function createDot (left, top) {
    var dot = document.createElement('div')
    dot.className = 'dot'
    dot.style.left = left + 'px'
    dot.style.top = top + 'px'
    dot.style.width = 8 + 'px'
    dot.style.height = 8 + 'px'
    dot.style.borderRadius = 5 + 'px'
    gameboard.appendChild(dot)
    dots.push(dot)
  }

  // create dots
  for (var i = 40; i < 540; i += 40) {
    for (var j = 40; j < 480; j += 40) {
      createDot(i + 16, j + 16)
    }
  }

  // remove the dot at pacman's starting point and two inside 'D'
  gameboard.removeChild(dots[76])
  gameboard.removeChild(dots[90])
  gameboard.removeChild(dots[91])
  dots.splice(76, 1)

  // key down event listener
  document.addEventListener('keydown', function (event) {
    // up key
    if (event.keyCode === 38) {
      upKeyDown = true
      downKeyDown = false
      leftKeyDown = false
      rightKeyDown = false
    }
    // down key
    if (event.keyCode === 40) {
      upKeyDown = false
      downKeyDown = true
      leftKeyDown = false
      rightKeyDown = false
    }
    // left key
    if (event.keyCode === 37) {
      upKeyDown = false
      downKeyDown = false
      leftKeyDown = true
      rightKeyDown = false
    }
    // right key
    if (event.keyCode === 39) {
      upKeyDown = false
      downKeyDown = false
      leftKeyDown = false
      rightKeyDown = true
    }
  })

  // swipe up on mobile
  $("html").on( "swipeup", function () {
    upKeyDown = true
    downKeyDown = false
    leftKeyDown = false
    rightKeyDown = false
  })

  // swipe down on mobile
  $("html").on( "swipedown", function () {
    upKeyDown = false
    downKeyDown = true
    leftKeyDown = false
    rightKeyDown = false
  })

  // swipe left on mobile
  $("html").on( "swipeleft", function () {
    upKeyDown = false
    downKeyDown = false
    leftKeyDown = true
    rightKeyDown = false
  })

  // swipe right on mobile
  $("html").on( "swiperight", function () {
    upKeyDown = false
    downKeyDown = false
    leftKeyDown = false
    rightKeyDown = true
  })

  // collision condition
  function collision (a, b) {
    var ax = parseInt(a.style.left)
    var ay = parseInt(a.style.top)
    var bx = parseInt(b.style.left)
    var by = parseInt(b.style.top)

    if (ax < bx + parseInt(b.style.width) &&
    ax + parseInt(a.style.width) > bx &&
    ay < by + parseInt(b.style.height) &&
    ay + parseInt(a.style.height) > by) {
      return true
    } else {
      return false
    }
  }

  // check for collision between the wall and the character
  function hitWall (character) {
    for (var i = 0; i < walls.length; i++) {
      if (collision(walls[i], character)) {
        return true
      }
    }
  }

  // check for collision between the character and the ghost
  function hitGhost (character) {
    var ghosts = [blueGhost, orangeGhost, pinkGhost, redGhost]
    for (var i = 0; i < ghosts.length; i++) {
      if (collision(ghosts[i], character)) {
        return true
      }
    }
  }

  // pacman's movement
  function pacmanMovement () {
    var originalLeft = pacman.style.left
    var originalTop = pacman.style.top
    var pacmanX = parseInt(pacman.style.left)
    var pacmanY = parseInt(pacman.style.top)

    if (upKeyDown) {
      pacman.className = 'rotate270'
      pacman.style.left = Math.round(pacmanX / 40) * 40 + 'px'
      pacman.style.top = pacmanY - pacmanSpeed + 'px'
    }

    if (downKeyDown) {
      pacman.className = 'rotate90'
      pacman.style.left = Math.round(pacmanX / 40) * 40 + 'px'
      pacman.style.top = pacmanY + pacmanSpeed + 'px'
    }
    if (leftKeyDown) {
      pacman.className = 'mirrorImage'
      if (pacmanX < 0) pacmanX = 560
      pacman.style.top = Math.round(pacmanY / 40) * 40 + 'px'
      pacman.style.left = pacmanX - pacmanSpeed + 'px'
    }
    if (rightKeyDown) {
      pacman.className = ''
      if (pacmanX > 560) pacmanX = 0
      pacman.style.top = Math.round(pacmanY / 40) * 40 + 'px'
      pacman.style.left = pacmanX + pacmanSpeed + 'px'
    }
    // check for collision between pacman and walls
    if (hitWall(pacman)) {
      pacman.style.left = originalLeft
      pacman.style.top = originalTop
    }
    // check for collision between pacman and ghosts
    if (hitGhost(pacman)) {
      pacmanDeathAudio.play()
      clearInterval(loopTimer)
      gameOver('lose')
    }
  }

  // ghost's movement
  function ghostMovement (character) {
    var charOriginalLeft = character.style.left
    var charOriginalTop = character.style.top
    var characterX = parseInt(character.style.left)
    var characterY = parseInt(character.style.top)

    if (character.direction === 'up') {
      character.className = 'rotate270'
      character.style.left = Math.round(characterX / 40) * 40 + 'px'
      character.style.top = characterY - ghostSpeed + 'px'
    }
    if (character.direction === 'down') {
      character.className = 'rotate90'
      character.style.left = Math.round(characterX / 40) * 40 + 'px'
      character.style.top = characterY + ghostSpeed + 'px'
    }
    if (character.direction === 'left') {
      character.className = 'mirrorImage'
      if (characterX < 0) characterX = 560
      character.style.top = Math.round(characterY / 40) * 40 + 'px'
      character.style.left = characterX - ghostSpeed + 'px'
    }
    if (character.direction === 'right') {
      character.className = ''
      if (characterX > 560) characterX = 0
      character.style.top = Math.round(characterY / 40) * 40 + 'px'
      character.style.left = characterX + ghostSpeed + 'px'
    }
    if (hitWall(character)) {
      character.style.left = charOriginalLeft
      character.style.top = charOriginalTop
      ghostHitWallNewDir(character)
    }
  }

  // find new direction when ghost hit wall
  function ghostHitWallNewDir (character) {
    var oppDirection
    var newDirection
    if (character.direction === 'up') oppDirection = 'down'
    if (character.direction === 'down') oppDirection = 'up'
    if (character.direction === 'left') oppDirection = 'right'
    if (character.direction === 'right') oppDirection = 'left'
    do {
      newDirection = randomGhostDirection()
    } while (newDirection === oppDirection)
    character.direction = newDirection
  }

  // random ghost direction
  function randomGhostDirection () {
    var ghostDirection = ['up', 'down', 'left', 'right']
    var direction = ghostDirection[Math.floor(Math.random() * (4))]
    return direction
  }

  // check score
  function checkScore () {
    for (var i = 0; i < dots.length; i++) {
      if (collision(dots[i], pacman)) {
        if (!scoretracker.includes(dots[i])) {
          pacmanChompAudio.play()
          dots[i].style.display = 'none'
          scoretracker.push(dots[i])
          scores.textContent = scoretracker.length + '/92'
        }
      }
    }
    if (scoretracker.length === 92) {
      gameOver('win')
    }
  }

  function defaultPosition () {
    pacman.style.top = '440px'
    pacman.style.left = '280px'
    blueGhost.style.top = '40px'
    blueGhost.style.left = '40px'
    orangeGhost.style.top = '40px'
    orangeGhost.style.left = '520px'
    pinkGhost.style.top = '440px'
    pinkGhost.style.left = '40px'
    redGhost.style.top = '440px'
    redGhost.style.left = '520px'
  }

  function defaultSetting () {
    upKeyDown = false
    downKeyDown = false
    leftKeyDown = false
    rightKeyDown = false
    var intervalTimer = function () {
      loopTimer = setInterval(loop, 50)
      interval.style.display = 'none'
    }
    setTimeout(intervalTimer, 900)
  }

  function nextLevel () {
    pacmanSpeed++
    ghostSpeed++
    currentLevel++
    win.style.display = 'none'
    interval.style.display = ''
    interval.textContent = 'NEXT LEVEL!'
    interval.style.background = 'rgb(221, 193, 223)'
    scores.textContent = ''
    level.textContent = currentLevel
    scoretracker = []
    for (var i = 0; i < dots.length; i++) {
      dots[i].style.display = ''
    }
    defaultPosition()
    defaultSetting()
  }

  // game over
  function gameOver (result) {
    if (result === 'win') {
      pacmanWinAudio.play()
      clearInterval(loopTimer)
      win.style.display = ''
      setTimeout(nextLevel, 5000)
    } else if (result === 'lose') {
      if (lives === 1) {
        clearInterval(loopTimer)
        document.querySelector('#life1').style.display = 'none'
        lose.style.display = ''
        startButton.style.display = ''
      } else {
        document.querySelector('#life' + lives).style.display = 'none'
        lives--
        clearInterval(loopTimer)
        setTimeout(function () {
          interval.style.display = ''
          interval.textContent = 'GET READY!'
          interval.style.background = 'rgb(134, 231, 196)'
          defaultPosition()
          defaultSetting()
        }, 1550)
      }
    }
  }

  // start new game
  function startGame () {
    pacmanStartAudio.play()
    interval.style.display = ''
    interval.textContent = 'READY?'
    interval.style.background = 'rgb(153, 222, 238)'
    instructions.style.display = 'none'
    win.style.display = 'none'
    lose.style.display = 'none'
    startButton.style.display = 'none'
    scoreboard.style.display = ''
    scores.textContent = ''
    levelboard.style.display = ''
    currentLevel = 1
    level.textContent = currentLevel
    lifetracker.style.display = ''
    document.querySelector('#life1').style.display = ''
    document.querySelector('#life2').style.display = ''
    document.querySelector('#life3').style.display = ''
    for (var i = 0; i < dots.length; i++) {
      dots[i].style.display = ''
    }
    scoretracker = []
    lives = 3
    pacmanSpeed = 8
    ghostSpeed = 9
    defaultPosition()
    setTimeout(defaultSetting, 3350)
  }

  // game loop
  function loop () {
    pacmanMovement()
    checkScore()
    ghostMovement(blueGhost)
    ghostMovement(orangeGhost)
    ghostMovement(pinkGhost)
    ghostMovement(redGhost)
  }
}
