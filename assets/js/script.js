//Show initial start page
var startPage = document.getElementById('start-page')
startPage.style.display = 'block'
document.querySelector('#start-button').addEventListener('click', startGame)

//Global Variables
var allFishes = []

var mainFish = document.getElementById('main-fish')

//Generate random number
function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

//Generate fishes at random position of random sizes
function generateFish1 () {
  if (allFishes.length < 40){
    var imgDestination = document.querySelector('html')
    var newFish = document.createElement("img")
    newFish.src = "assets/pictures/Fish1.png"
    newFish.style.height = randomizer(30, 200) + 'px'
    newFish.style.width = randomizer(30, 200) + 'px'
    newFish.style.position = "absolute"
    newFish.style.top = randomizer(0, window.innerHeight) + 'px'
    newFish.style.left = randomizer(0, window.innerWidth) + 'px'
    imgDestination.appendChild(newFish)
    allFishes.push(newFish)
  }
}

//Make each fish move randomly
function moveRandomly () {
  for (var i = 0; i < allFishes.length; i++) {
    allFishes[i].style.top = randomizer(0, window.innerHeight) + 'px'
    allFishes[i].style.left = randomizer(0, window.innerWidth) + 'px'
    allFishes[i].style.transition = 'top 2s linear, left 3s linear'
  }
}

//Create fish that follows mouse
function mouseFish () {
  document.querySelector('html').addEventListener('mousemove', function (event) {
    var mouseX = event.clientX
    var mouseY = event.clientY
    var mainFish = document.querySelector('#main-fish')
    mainFish.style.left = (parseInt(mouseX - 50)) + 'px' // X offset from mouse position
    mainFish.style.top = (parseInt(mouseY - 50)) + 'px' // Y offset from mouse position
  })
}

//When start button is clicked, remove start page
//Add fishes that move randomly
function startGame () {
  startPage.style.display = 'none'
  setInterval(generateFish1, 500)
  setInterval(moveRandomly, 1000)
  mainFish.style.display = 'block'
  mouseFish()
}
