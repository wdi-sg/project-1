// DOM MANIPULATIONS
document.addEventListener('DOMContentLoaded', init)

function init () {
  var body = document.querySelector('body')
  var monitor = document.querySelector('.monitor')
  var leftMargin = monitor.getBoundingClientRect().left - body.getBoundingClientRect().left
  var speed = 2
  var spawnRate = 2000
  var score = 0
  var spaceship = document.querySelector('.ship')
  var sideDivRight = document.querySelector('.sideDivRight')
  var sideDivLeft = document.querySelector('.sideDivLeft')
  var submitButton = document.querySelector('#submitButton')
  var searchField = document.querySelector('#searchField')
  var playAgain = document.querySelector('.playAgain')
  var scoreDiv = document.querySelector('.score')
  var highscore = document.querySelector('.highScores')
  var gameOver = document.querySelector('.gameOver')

  function beginning () {
    var start = document.createElement('div')
    var audio = document.querySelector('audio')
    audio.play()
    start.classList.add('start')
    monitor.appendChild(start)
    start.textContent = 'Welcome to Collision! Use the left and right arrow keys to navigate your ship, avoiding the blocks and getting as many points as possible. This box will disappear in ten seconds. Good luck!'
  }
  beginning()

  submitButton.addEventListener('click', function () {
    var li = document.createElement('li')
    var ul = document.querySelector('ul')
    li.textContent = searchField.value + ': ' + (score - 1) + ' points'
    ul.appendChild(li)
  })

  sideDivRight.style.left = leftMargin + monitor.offsetWidth + 'px'
  sideDivRight.style.width = leftMargin + 'px'
  sideDivRight.style.height = '100%'

  sideDivLeft.style.left = 0
  sideDivLeft.style.width = leftMargin + 'px'
  sideDivLeft.style.height = '100%'

  setTimeout(function () {
    var startDiv = document.querySelector('.start')
    startDiv.classList.add('startLeave')
// sets rate of wall spawn
    function loop () {
      if ((score > 1) && (score % 10 === 0)) {
        // clearInterval(myTimer)
        spawnRate = spawnRate * 0.8
        // myTimer = setInterval(loop, spawnRate)
        speed += 1
      }
      if (spaceship.style.display !== 'none') {
        var scoreDiv = document.querySelector('.score')
        scoreDiv.setAttribute('style', 'white-space: pre;')
        scoreDiv.textContent = 'Score' + '\r\n' + score
        ++score
      }
      fall(spawnWalls(leftMargin), speed, collision, displayGameOver)
    }

    var myTimer = setInterval(loop, spawnRate)

// if keyup, then ship resets to normal position
    document.addEventListener('keyup', function () {
      spaceship.id = ''
    })

    playAgain.addEventListener('click', function () {
      var walls = document.querySelectorAll('.wall')
      for (var i = 0; i < walls.length; i++) {
        walls[i].parentNode.removeChild(walls[i])
      }
      gameOver.style.visibility = 'hidden'
      highscore.style.visibility = 'hidden'
      spaceship.style.display = ''
      playAgain.style.visibility = 'hidden'
      clearInterval(myTimer)
      spawnRate = 2000
      myTimer = setInterval(loop, spawnRate)
      score = 0
      speed = 2
      var audio = document.querySelector('audio')
      audio.pause()
      audio.currentTime = 0
      audio.play()
      scoreDiv.setAttribute('style', 'white-space: pre;')
      scoreDiv.textContent = 'Score' + '\r\n' + score
    })

// if keydown, then ship tilts left or right. Also walls move to give a sense of turning
    document.addEventListener('keydown', function (e) {
      var currentWalls = document.querySelectorAll('.wall')
      if (event.keyCode === 37) {
        e.preventDefault()
        spaceship.id = 'spaceshipleft'
        for (var i = 0; i < currentWalls.length; i++) {
          wallsX(currentWalls[i], -7)
        }
      } else if (event.keyCode === 39) {
        e.preventDefault()
        spaceship.id = 'spaceshipright'
        for (var i = 0; i < currentWalls.length; i++) {
          wallsX(currentWalls[i], 5)
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
          return true
        }
        return false
      }
    }
  }, 10000)

  // GAME MECHANICS--------------------------------------------------------

  function displayGameOver () {
    spaceship.style.display = 'none'
    gameOver.style.visibility = 'visible'
    highscore.style.visibility = 'visible'
    playAgain.style.visibility = 'visible'
  }
}

// creates new walls--------------------------------------------------------
function spawnWalls (leftMargin) {
  var newWall = document.createElement('div')
  var monitor = document.querySelector('.monitor')
  var right = monitor.getBoundingClientRect().right
  var ground = document.querySelector('.ground')
  newWall.classList.add('wall')
  newWall.style.width = (Math.random() * 73) + 'px'
  newWall.style.height = '1px'
  // (Math.random() * (max-min) + min) + 'px'. Adjusts spawn when dimensiosn adjust
  newWall.style.left = (Math.random() * right - leftMargin) + leftMargin + 'px'
  ground.appendChild(newWall)
  return newWall
}

// causes walls to expand
function fall (element, speed, collision, displayGameOver) {
  setInterval(function () {
    var monitor = document.querySelector('.monitor')
    if (collision()) {
      displayGameOver()
    }
    if (element.getBoundingClientRect().bottom < monitor.getBoundingClientRect().bottom) {
      var adjWidth = element.offsetWidth
      var adjHeight = element.offsetHeight
      element.style.width = (adjWidth + 2) + 'px'
      element.style.height = (adjHeight + 1) + 'px'
      wallsMove(element, speed)
    } else {
      element.parentElement.removeChild(element)
    }
  }, 30)
}

// function that makes walls move. Takes a wall item and a speed as arguments
function wallsMove (element, speed) {
  var ground = document.querySelector('.ground')
  var boundingClientTop = element.getBoundingClientRect().top
  var boundingClientTopGround = ground.getBoundingClientRect().top
  var top = (boundingClientTop - boundingClientTopGround)
  element.style.top = (top + speed) + 'px'
  wallsX(element, 0)
}

function wallsX (element, speed) {
  var monitor = document.querySelector('.monitor')
  var leftMargin = monitor.getBoundingClientRect().left
  var center = element.getBoundingClientRect().left - leftMargin
  element.style.left = (center - 1 - speed) + 'px'
}
