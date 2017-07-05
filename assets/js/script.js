// DOM MANIPULATIONS
document.addEventListener('DOMContentLoaded', init)

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
    fall(spawnWalls(), speed, spaceship.id)
  }, 1000)

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
    collision()
  })

  function collision () {
    var walls = document.querySelectorAll('.wall')
    for (var i = 0; i < walls.length; i++) {
      if ((walls[i].getBoundingClientRect().left + 300) > spaceship.getBoundingClientRect().left && (walls[i].getBoundingClientRect().bottom > (spaceship.getBoundingClientRect().top + 25))) {
        alert('ayy')
      }
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
  // console.log('top' + element.style.top)
  // console.log('bottom' + element.style.top)
  // console.log('angle' + angle)
  // console.log(YAxis)
  // console.log(angle)
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
      wallCSS.left = (XAxis - 0.1 /* speed */) + 'px'
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

// function perspective () {
//   var angle = {
//     square1: -24, // 0 to 73
//     square2: -23, // 73 to 146
//     square3: -22, // 146 to 219
//     square4: -21, // 219 to 292
//     square5: -20, // 292 to 365
//     square6: -19, // 365 to 438
//     square7: -18, // 438 to 511
//     square8: -12, // 511 to 584
//     square9: -7, // 584 to 657
//     square10: -1.93, // 657 to 730
//     square11: -1.4, // 730 to 803 //centerleft
//     square12: -1.1, // 803 to 876 //centerright
//     square13: -12, // 876 to 949
//     square14: -11, // 949 to 1022
//     square15: -10,
//     square16: -9,
//     square17: -8,
//     square18: -7,
//     square19: -6,
//     square20:
//     square21:
//     square22:
//     square23: 0, //
//     square24: -25 // 0 to 146
//   }
// // make a for loop, 73 is a prime number, so every 73
// }

  // causes walls to expand
function fall (element, speed) {
  setInterval(function () {
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
  newWall.style.left = ((Math.random()) * 800) + 1 + 'px'
  newWall.style.width = 100 + 'px'
  newWall.id = newWall.style.left
  // newWall.style.height = '1px' // uncomment after
  document.body.appendChild(newWall)
  return newWall
}

function startGame () {

}
