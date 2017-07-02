var player = true
var gameStart = true
var playerInput = []
var displayInput = []
var match = false
var counter = 0
var gameOver = false
var score = {
  cucumber: 10,
  meat: 10,
  onion: 10,
  lettuce: 10,
  cheese: 10
}
var timer = 0

// function for check if gameover
function isGameOver () {

}

// function for startgame
function gameStart () {

}

function randomizeIngredient () {
  var ingredient = Math.floor(Math.random() * 5)
  if (ingredient === 0) return 'cucumber'
  if (ingredient === 1) return 'meat'
  if (ingredient === 2) return 'onion'
  if (ingredient === 3) return 'lettuce'
  if (ingredient === 4) return 'cheese'
}

// target the div id's
var d1 = document.getElementById('d1')
var d2 = document.getElementById('d2')
var d3 = document.getElementById('d3')
var d4 = document.getElementById('d4')
var d5 = document.getElementById('d5')
var d6 = document.getElementById('d6')
var d7 = document.getElementById('d7')

// function for creating a random displayed burger level 1
function createBurgerLv1 () {
  d1.classList.add('topbun')
  d2.classList.add('randomizeIngredient()')
  d3.classList.add('randomizeIngredient()')
  d4.classList.add('botbun')
}

// function for creating a random displayed burger level 2
function createBurgerLv2 () {
  d1.classList.add('topbun')
  d2.classList.add('randomizeIngredient()')
  d3.classList.add('randomizeIngredient()')
  d4.classList.add('randomizeIngredient()')
  d5.classList.add('botbun')
}

// function for creating a random displayed burger level 3
function createBurgerLv3 () {
  d1.classList.add('topbun')
  d2.classList.add('randomizeIngredient()')
  d3.classList.add('randomizeIngredient()')
  d4.classList.add('randomizeIngredient()')
  d5.classList.add('randomizeIngredient()')
  d6.classList.add('botbun')
}

// function for creating a random displayed burger level 4
function createBurgerLv4 () {
  d1.classList.add('topbun')
  d2.classList.add('randomizeIngredient()')
  d3.classList.add('randomizeIngredient()'); d4.classList.add('randomizeIngredient()')
  d5.classList.add('randomizeIngredient()')
  d6.classList.add('randomizeIngredient()')
  d7.classList.add('botbun')
}

function removeIngredients () {
  d1.className = ''
  d2.className = ''
  d3.className = ''
  d4.className = ''
  d5.className = ''
  d6.className = ''
  d7.className = ''
}

// function for checking if ingredient picked is same as displayed burger
function checkIngredient () {

}

// function for checking created burger with displayed burger
function checkIfCorrect () {

}

// function for wrong button pressed
function wrongPress () {

}

//
//
// function for timer
function timer () {

}

// function for checking timer
function checkTimer () {

}

// function for restarting game
function resetGame () {

}
