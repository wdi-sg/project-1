// DOM MANIPULATIONS
document.addEventListener('DOMContentLoaded', init)

function init () {
  var speed = 3
  var counter = 0
  var gameOver = false
  var spaceship = document.querySelector('.ship')

// just to tell me the coordinates of the mouse
  document.addEventListener('mousemove', function () {
    console.log('X coordinate' + event.clientX + 'Y coordinate' + event.clientY)
  })

// sets rate of wall spawn
  setInterval(function () {
    fall(spawnWalls(), speed, spaceship.id)
  }, 2000)

// if keyup, then ship resets to normal position
  document.addEventListener('keyup', function () {
    spaceship.id = ''
  })

// if keydown, then ship tilts left or right. Also walls move to give a sense of turning
  document.addEventListener('keydown', function () {
    var currentWalls = document.querySelectorAll('.wall')
    if (event.keyCode === 37) {
      spaceship.id = 'spaceshipleft'
      for (var i = 0; i < currentWalls.length; i++) {
        wallsMoveX(currentWalls[i], -10)
      }
    } else if (event.keyCode === 39) {
      spaceship.id = 'spaceshipright'
      for (var i = 0; i < currentWalls.length; i++) {
        wallsMoveX(currentWalls[i], 10)
      }
    }
  })

  setInterval(function () {
    var currentWalls = document.querySelectorAll('.wall')
    for (var i = 0; i < currentWalls.length; i++) {
      if (spaceship.style.left < currentWalls[i].style.right) {

      }
    }
  }, 20)
}

// function that makes walls move. Takes a wall item and a speed as arguments
function wallsMoveX (element, direction) {
  var XAxis = element.getBoundingClientRect().left

  // TALK AT CONSULTATION: Better way to give walls perspective? Hard to move them at different rates
  // ALSO WEIRD WINDOW PROBLEM ON RIGHT SIDE

  if (XAxis > 950) {
    element.style.left = (XAxis + direction + 4) + 'px'
  } else if (element.getBoundingClientRect().right < 500) {
    element.style.left = (XAxis - direction - 4) + 'px'
  } else {
    element.style.left = (XAxis - direction) + 'px'
  }
}

// function that causes walls to move in a downwards direction
function wallsMoveDown (element, direction) {
  var YAxis = element.getBoundingClientRect().top
  element.style.top = (YAxis + direction) + 'px'
}

  // causes walls to expand
function fall (element, speed) {
  setInterval(function () {
    var adjWidth = element.offsetWidth
    var adjHeight = element.offsetHeight
    if (element.getBoundingClientRect().top < 900) {
      element.style.width = (adjWidth + 2) + 'px'
      wallsMoveDown(element, 4)
      wallsMoveX(element, 1)
      element.style.height = (adjHeight + 0.8) + 'px'
    } else {
      element.parentElement.removeChild(element)
    }
  }, 30)
}

// creates new walls
function spawnWalls () {
  var newWall = document.createElement('div')
  newWall.classList.add('wall')
  newWall.style.left = (Math.random() * 1200 + 100) + 'px'
  newWall.style.width = (Math.random() * 200 + 50) + 'px'
  newWall.style.height = '1px'
  document.body.appendChild(newWall)
  return newWall
}

function startGame () {

}
