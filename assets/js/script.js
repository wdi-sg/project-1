//Show initial start page
var startPage = document.getElementById("start-page");
startPage.style.display = "block";
document.querySelector('#start-button').addEventListener('click', startGame);

//When start button is clicked, remove start page
//Add fishes that move randomly
function startGame () {
  startPage.style.display = 'none'
  setInterval(generateFish1, 3000)
  var mainFish = document.getElementById('main-fish');
  mainFish.style.display = 'block'
  mainFish()
}

//Global Variables
var allFishes =[]
setInterval(moveRandomly, 1000)

//Generate random number
function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

//Generate fishes at random position of random sizes
function generateFish1 () {
  var imgDestination = document.querySelector('html')
  var newFish = document.createElement("img")
  newFish.src = "assets/pictures/Fish1.png"
  newFish.style.height = randomizer(50, 150) + 'px'
  newFish.style.width = randomizer(50, 150) + 'px'
  newFish.style.position = "absolute"
  newFish.style.top = randomizer(0, 760) + 'px'
  newFish.style.left = randomizer(0, 1400) + 'px'
  imgDestination.appendChild(newFish)
  allFishes.push(newFish)
}

//Make each fish move randomly
function moveRandomly () {
  for (var i = 0; i < allFishes.length; i++) {
    allFishes[i].style.top = randomizer(100, 1000) + 'px'
    allFishes[i].style.left = randomizer(100, 1700) + 'px'
    allFishes[i].style.transition = 'top 2s linear, left 3s linear'
  }
}



//Create fish that follows mouse
function mainFish () {
  document.addEventListener('mousemove', function(event){
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  })
  mainFish.x = (1400 / 2) - 100
  mainFish.y = 760 - 100
  var xDistance = mouse.x - mainFish.x
  var yDistance = mouse.y - mainFish.y
  var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance)
  if (distance > 1) {
       mainFish.x += xDistance * 0.3
       mainFish.y += yDistance * 0.3
   }
}
