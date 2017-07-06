document.addEventListener('DOMContentLoaded', init)

function init() {

// Show initial start page
document.querySelector('#start-button').addEventListener('click', startGame)

// Global Variables
var allFishes = []
var mainFish = document.getElementById('main-fish')

// Generate random number
function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Generate fishes at random position of random sizes
function generateFish1 () {
  if (allFishes.length < 30) {
    var imgDestination = document.querySelector('body')
    var newFish = document.createElement('img')
    newFish.src = 'assets/pictures/Fish1.png'
    newFish.className = 'newFish'
    newFish.style.height = randomizer(20, 120) + 'px'
    newFish.style.position = 'absolute'
    newFish.style.top = randomizer(0, window.innerHeight) + 'px'
    newFish.style.left = randomizer(0, window.innerWidth) + 'px'
    imgDestination.appendChild(newFish)
    allFishes.push(newFish)
  }
}

// Make each fish move randomly
function moveRandomly () {
  for (var i = 0; i < allFishes.length; i++) {
    allFishes[i].style.top = randomizer(0, window.innerHeight) + 'px'
    allFishes[i].style.left = randomizer(0, window.innerWidth) + 'px'
    allFishes[i].style.transition = 'top 1.5s linear, left 1.5s linear'
  }
}

// Create fish that follows mouse
function mouseFish () {
  // Get mouse coordinates
  document.querySelector('html').addEventListener('mousemove', function (event) {
    var mouseX = event.clientX
    var mouseY = event.clientY

    // Get main fish to follow mouse at a distance of 50px
    var mainFish = document.querySelector('#main-fish')
    mainFish.style.top = (parseInt(mouseY - 50)) + 'px' // Y offset from mouse position
    mainFish.style.left = (parseInt(mouseX - 50)) + 'px' // X offset from mouse position
    mainFish.style.transition = 'top 0.05s linear, left 0.05s linear'

    // Make fish rotate to face mouse
    var fishMouth = [ mainFish.offsetLeft + mainFish.offsetWidth / 2, mainFish.offsetTop + mainFish.offsetHeight / 3 ]
    var angle = Math.atan2(mouseX - fishMouth[0], -(mouseY - fishMouth[1])) * (180 / Math.PI)

    mainFish.style.transform = 'rotate(' + angle + 'deg)'
  })
}

// Collision detection between main fish and generated fish
function collisionDetection (mainFish, eachFish) {
  if (eachFish.offsetLeft < mainFish.offsetLeft + mainFish.offsetWidth &&
      eachFish.offsetLeft + eachFish.offsetWidth > mainFish.offsetLeft &&
      eachFish.offsetTop < mainFish.offsetTop + mainFish.offsetHeight &&
      eachFish.offsetHeight + eachFish.offsetTop > mainFish.offsetTop)
    return true
  else {return false}
}

// Change size of main fish upon collision and remove other fish
function collisionResult (mainFish, eachFish) {
  if (collisionDetection(mainFish, eachFish)) {
    if ((mainFish.offsetWidth * mainFish.offsetHeight) > (eachFish.offsetWidth * eachFish.offsetHeight)) {
      mainFish.style.height = (mainFish.offsetHeight + 5) + 'px'
      mainFish.style.width = (mainFish.offsetWidth + 5) + 'px'

      allFishes.splice(allFishes.indexOf(eachFish), 1)
      eachFish.remove()
    }
    else if ((mainFish.offsetWidth * mainFish.offsetHeight) < (eachFish.offsetWidth * eachFish.offsetHeight)) {
      mainFish.style.height = (mainFish.offsetHeight - 5) + 'px'
      mainFish.style.width = (mainFish.offsetWidth - 5) + 'px'

      allFishes.splice(allFishes.indexOf(eachFish), 1)
      eachFish.remove()
    }
  }
}

//Remove the new fishes from screen after game over
function clearFish() {
  // remove allFishes from array
  allFishes = []
  // remove all fish elements from the dom
  var imgDestination = document.querySelector('body')
  var allFishDom = imgDestination.querySelectorAll('.newFish')

  allFishDom.forEach(function (image) {
    image.remove()
  })
}

// When start button is clicked, remove start page
// Add fishes that move randomly
function startGame () {
  var startPage = document.getElementById('start-page')
  startPage.style.display = 'none'
  mainFish.style.display = 'block'
  mouseFish()
  var generating = setInterval(generateFish1, 2500)
  var moving = setInterval(moveRandomly, 1500)
  var collision = setInterval(function () {
    for (var i = 0; i < allFishes.length; i++) {
      collisionResult(mainFish, allFishes[i])
    }
  }, 100)

  var over = setInterval(gameOver, 500)
  //If main fish is too small or too big, end game
  function gameOver() {
    if (mainFish.offsetHeight <= 30) {
      clearInterval(generating)
      clearInterval(moving)
      clearInterval(collision)
      clearInterval(over)
      mainFish.style.display = 'none'
      clearFish()
      var sadPage = document.getElementById('sad-page')
      sadPage.style.display = 'block'

      document.querySelector('#sreplay-button').addEventListener('click', function () {
        sadPage.style.display = 'none'
        startPage.style.display = 'block'
        mainFish.style.height = '60px'
        mainFish.style.width = '60px'
      })
    }
    else if (mainFish.offsetHeight >= 100) {
      clearInterval(generating)
      clearInterval(moving)
      clearInterval(collision)
      clearInterval(over)
      mainFish.style.display = 'none'
      clearFish()
      var happyPage = document.getElementById('happy-page')
      happyPage.style.display = 'block'

      document.querySelector('#hreplay-button').addEventListener('click', function () {
        happyPage.style.display = 'none'
        startPage.style.display = 'block'
        mainFish.style.height = '60px'
        mainFish.style.width = '60px'
      })
    }
  }
}
}
