// Show initial start page
var startPage = document.getElementById('start-page')
startPage.style.display = 'block'
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
    newFish.style.height = randomizer(10, 120) + 'px'
    newFish.style.width = randomizer(10, 120) + 'px'
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
    allFishes[i].style.transition = 'top 2s linear, left 3s linear'

    collisionResult(mainFish, allFishes[i])
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
    mainFish.style.transition = 'top 0.2s linear, left 0.2s linear'

    // Make fish rotate to face mouse
    var fishMouth = [ mainFish.offsetLeft, mainFish.offsetTop + mainFish.style.height / 3 ]
    var angle = Math.atan2(mouseX - fishMouth[0], -(mouseY - fishMouth[1])) * (360 / Math.PI)

    mainFish.style.transform = 'rotate(' + angle + 'deg)'

    collisionResult(mainFish, allFishes[0])
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



// Increase size of main fish upon collision and remove other fish
function collisionResult (mainFish, eachFish) {
  if (collisionDetection(mainFish, eachFish)) {
    console.log(mainFish.offsetWidth * mainFish.offsetHeight)
    console.log(eachFish.offsetWidth * eachFish.offsetHeight)
    if ((mainFish.offsetWidth * mainFish.offsetHeight) > (eachFish.offsetWidth * eachFish.offsetHeight)) {
      mainFish.style.top += '5px'
      mainFish.style.left += '5px'
      // allFishes.splice(eachFish)
      console.log(mainFish.style.top)
    } else if ((mainFish.offsetWidth * mainFish.offsetHeight) < (eachFish.offsetWidth * eachFish.offsetHeight)) {
      mainFish.style.top -= '5px'
      mainFish.style.left -= '5px'
      // allFishes.splice(eachFish)
    }
  }
}

// When start button is clicked, remove start page
// Add fishes that move randomly
function startGame () {
  startPage.style.display = 'none'
  generateFish1()
  // setInterval(generateFish1, 3000)
  // setInterval(moveRandomly, 1000)
  mainFish.style.display = 'block'
  mouseFish()
}
