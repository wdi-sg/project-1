var ingredientCounter = 0 // number of ingredients already in play
var level = 1 // determines score and number of things in order list
var gameStarted = false // prevents clicking before timer starts
var neededIngredients = []
var possibleIngredients = ['patty', 'patty', 'tomato', 'onion', 'lettuce', 'cheese']

var playArea = document.querySelector('.playArea')
var buttons = document.querySelectorAll('.buttons div')
var serveButton = document.querySelector('.serveButton')
var score = document.querySelector('.score')
var time = document.querySelector('.time')
var order = document.querySelector('.order')
var startGameOverlay = document.querySelector('.startGameOverlay')
var startGameButton = document.querySelector('.startGameButton')
var endGameOverlay = document.querySelector('.endGameOverlay')
var endGameScore = document.querySelector('.endGameScore')
var restart = document.querySelector('.restart')


// generate random array of ingredients.
// excluding topbun which must be the last item of every order
function randomizer () {
  var randomNum = Math.floor(Math.random() * 6)
  return possibleIngredients[randomNum]
}

function newOrder () {
  for (i = 0; i < level + 4; i++) { // base number of ingredients at lvl 1 is 4.
    neededIngredients.push(randomizer())
  }
  neededIngredients.push('topbun')
  return neededIngredients
}

function checkForMatch() {
  return (whichIngredient === neededIngredients[ingredientCounter])
}
