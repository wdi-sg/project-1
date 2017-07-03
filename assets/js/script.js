//Show start page initially
var startPage = document.getElementById("start-page");
startPage.style.display = "block";
document.querySelector('#start-button').addEventListener('click', startGame);

//When start button is clicked, remove start page
//Add fishes that move randomly
function startGame () {
  startPage.style.display = "none"
  setInterval(generateFish1, 3000)
}

//Generate random number
function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

//Generate Fishes at random position
function generateFish1() {
    var imgDestination = document.querySelector('html');
    var newFish = document.createElement("img");
    newFish.src = "assets/pictures/Fish1.png";
    newFish.style.height = randomizer(50, 150) + 'px'
    newFish.style.width = randomizer(50, 150) + 'px'
    newFish.style.position = "absolute";
    newFish.style.top = randomizer(0, 760) + 'px'
    newFish.style.left = randomizer(0, 1440) + 'px'
    imgDestination.appendChild(newFish);
}
