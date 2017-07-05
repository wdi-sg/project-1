// DOM MANIPULATIONS
document.addEventListener('DOMContentLoaded', init)

// create element object. This will hold all the properties including a function that can detect ratio of change required. To get speed, all you have to do is access the property
// var element = {
//   position: '',
//   width: '',
//   classname: '',
//   speed: '',
//   increaseSpeed: function() {
//     return this.speed + 100
//   },
//   factor:
// }

function init () {
  var speed = 1.02
  var counter = 0
  var gameOver = false
  var spaceship = document.querySelector('.ship')

// just to tell me the coordinates of the mouse
  // document.addEventListener('mousemove', function () {
  //   console.log('X coordinate' + event.clientX + 'Y coordinate' + event.clientY)
  // })

// sets rate of wall spawn
  setInterval(function () {
    fall(spawnWalls(), speed, collision)
  }, 4000)

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
        wallsMove(currentWalls[i], -30)
      }
    } else if (event.keyCode === 39) {
      spaceship.id = 'spaceshipright'
      for (var i = 0; i < currentWalls.length; i++) {
        wallsMove(currentWalls[i], 30)
      }
    }
  })

  function collision () {
    var walls = document.querySelectorAll('.wall')
    for (var i = 0; i < walls.length; i++) {
      if (spaceship.getBoundingClientRect().left < (walls[i].getBoundingClientRect().left + walls[i].offsetWidth) &&
         (spaceship.getBoundingClientRect().left + spaceship.offsetWidth) > walls[i].getBoundingClientRect().left &&
     (spaceship.getBoundingClientRect().bottom) < walls[i].getBoundingClientRect().bottom + walls[i].offsetHeight &&
   spaceship.offsetHeight + (spaceship.getBoundingClientRect().bottom) > walls[i].getBoundingClientRect().bottom) {
        console.log('dead')
        return true
      }
      return false
    }
  }
}

// function that makes walls move. Takes a wall item and a speed as arguments
function wallsMove (element, speed) {
  // coordinate 0,0 is at (875, 381)
  var XAxis = element.getBoundingClientRect().left
  var YAxis = element.getBoundingClientRect().top
  var angle = findAngles(element)
  var id = parseInt(element.id)
  var wallCSS = element.style

  if (angle > 0) {
    if (id < 1021 && (id + 100) > 1021) {
      wallCSS.left = (XAxis + 0.7 /* speed */) + 'px'
      wallCSS.top = ((XAxis - id) * angle) + 500 + 'px'
    } else if (id < 948 && (id + 146) > 948) {
      wallCSS.left = (XAxis + 0.3 /* speed */) + 'px'
      wallCSS.top = ((XAxis - id) * angle) + 500 + 'px'
    } else {
      wallCSS.left = (XAxis + 3 /* speed */) + 'px'
      wallCSS.top = ((XAxis - id) * angle) + 500 + 'px'
    }
  } else {
    if (id > 800) {
      wallCSS.left = (XAxis - 1 /* speed */) + 'px'
      wallCSS.top = ((XAxis - id) * angle) + 500 + 'px'
    } else if (id > 656 && (id - 100) < 656) {
      wallCSS.left = (XAxis - 1 /* speed */) + 'px'
      wallCSS.top = ((XAxis - id) * angle) + 500 + 'px'
    } else {
      wallCSS.left = ((XAxis - 5) /* speed */) + 'px'
      wallCSS.top = ((XAxis - id) * angle) + 500 /* speed */ + 'px'
    }
  }
}

function findAngles (element) {
  return 120 / (parseInt(element.id) - 875)
}

  // causes walls to expand
function fall (element, speed, afunction) {
  setInterval(function () {
    if (afunction()) {
      console.log('dead')
    }
    var adjWidth = element.offsetWidth
    var adjHeight = element.offsetHeight
    if (element.getBoundingClientRect().top < 900) {
      element.style.width = (adjWidth + 2.2) + 'px'
      element.style.height = (adjHeight + 0.47) + 'px'
      wallsMove(element, speed)
    } else {
      element.parentElement.removeChild(element)
    }
  }, 30)
}

// creates new walls
function spawnWalls () {
  var newWall = document.createElement('div')
  newWall.classList.add('wall')
  // newWall.style.left = (Math.random() * 1200 + 100) + 'px'
  // newWall.style.width = (Math.random() * 200 + 50) + 'px'
  newWall.style.left = ((Math.random()) * 1700) + 1 + 'px'
  newWall.style.width = 100 + 'px'
  newWall.id = newWall.style.left
  // newWall.style.height = '1px' // uncomment after
  document.body.appendChild(newWall)
  return newWall
}

function startGame () {

}
