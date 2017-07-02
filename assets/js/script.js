var loopTimer = setInterval(loop, 50)
var numLoops = 0
var pacman = document.querySelector('#pacman')
var gameboard = document.querySelector('#gameboard')
var pacmanSpeed = 10
var walls = []

var upKeyDown = false
var downKeyDown = false
var leftKeyDown = false
var rightKeyDown = false

pacman.style.top = '440px'
pacman.style.left = '280px'
pacman.style.height = '40px'
pacman.style.width = '40px'

// border
createWall(0, 0, 600, 40)
createWall(0, 0, 40, 240)
createWall(0, 280, 40, 240)
createWall(0, 480, 600, 40)
createWall(560, 0, 40, 240)
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
createWall(400, 280, 160, 40)
createWall(80, 360, 40, 80)
createWall(160, 360, 40, 80)
createWall(400, 360, 40, 80)
createWall(480, 360, 40, 80)

// create wall function
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

// key down event listener
document.addEventListener('keydown', function () {
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

// game loop
function loop () {
  numLoops++
  var originalLeft = pacman.style.left
  var originalTop = pacman.style.top
  // up key
  if (upKeyDown) {
    pacman.className = 'rotate270'
    var pacmanY = parseInt(pacman.style.top) - pacmanSpeed
    if (pacmanY < 0) pacmanY = 460
    pacman.style.top = pacmanY + 'px'
  }
  // down key
  if (downKeyDown) {
    pacman.className = 'rotate90'
    var pacmanY = parseInt(pacman.style.top) + pacmanSpeed
    if (pacmanY > 460) pacmanY = 0
    pacman.style.top = pacmanY + 'px'
  }
  // left key
  if (leftKeyDown) {
    pacman.className = 'mirrorImage'
    var pacmanX = parseInt(pacman.style.left) - pacmanSpeed
    if (pacmanX < 0) pacmanX = 560
    pacman.style.left = pacmanX + 'px'
  }
  // right key
  if (rightKeyDown) {
    pacman.className = ''
    var pacmanX = parseInt(pacman.style.left) + pacmanSpeed
    if (pacmanX > 560) pacmanX = 0
    pacman.style.left = pacmanX + 'px'
  }
  // check for collision
  if (hitWall(pacman)) {
    pacman.style.left = originalLeft
    pacman.style.top = originalTop
  }
}
