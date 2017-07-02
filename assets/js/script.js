var loopTimer = setInterval(loop, 50)
var numLoops = 0
var pacman = document.querySelector('#pacman')
var gameboard = document.querySelector('#gameboard')
var pacmanSpeed = 10

var upKeyDown = false
var downKeyDown = false
var leftKeyDown = false
var rightKeyDown = false

pacman.style.top = '400px'
pacman.style.left = '230px'
pacman.style.height = '40px'
pacman.style.width = '40px'


// key down event listener
document.addEventListener('keydown', function(){
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

// creating wall
var wall1 = document.createElement('div')
wall1.setAttribute = ('id', 'wall1')
wall1.className = 'wall'
wall1.style.left = '200px'
wall1.style.top = '440px'
wall1.style.height = '40px'
wall1.style.width = '200px'
gameboard.appendChild(wall1)


function collision(a, b) {
  return true
}

// document.addEventListener('keyup', function() {
//   // up key
//   // if(event.keyCode === 38) upKeyDown = false
//   // down key
//   if(event.keyCode === 40) downKeyDown = false
//   // left key
//   if(event.keyCode === 37) leftKeyDown = false
//   // right key
//   if(event.keyCode === 39) rightKeyDown = false
// })

function loop () {
  numLoops++
  // up key
  if (upKeyDown) {
    pacman.className = "rotate270"
    var pacmanY = parseInt(pacman.style.top) - pacmanSpeed
    if (pacmanY < 0) pacmanY = 460
    pacman.style.top = pacmanY + 'px'
  }
  // down key
  if (downKeyDown) {
    pacman.className = "rotate90"
    var pacmanY = parseInt(pacman.style.top) + pacmanSpeed
    if (pacmanY > 460) pacmanY = 0
    pacman.style.top = pacmanY + 'px'
  }
  // left key
  if (leftKeyDown) {
    pacman.className = "mirrorImage"
    var pacmanX = parseInt(pacman.style.left) - pacmanSpeed
    if (pacmanX < 0) pacmanX = 560
    pacman.style.left = pacmanX + 'px'
  }
  // right key
  if (rightKeyDown) {
    pacman.className = ""
    var pacmanX = parseInt(pacman.style.left) + pacmanSpeed
    if (pacmanX > 560) pacmanX = 0
    pacman.style.left = pacmanX + 'px'
  }
  // check for collision
  if (collision(wall1, pacman)) output.innerHTML = 'collision'
}
