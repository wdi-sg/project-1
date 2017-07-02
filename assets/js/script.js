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

// function for creating a random displayed burger level 1
function createBurgerLv1 () {
  document.getElementById('1').classList.add('topbun')
  document.getElementById('2').classList.add('randomizeIngredient()')
  document.getElementById('3').classList.add('randomizeIngredient()')
  document.getElementById('4').classList.add('botbun')
}

// function for creating a random displayed burger level 2
function createBurgerLv2 () {
  document.getElementById('1').classList.add('topbun')
  document.getElementById('2').classList.add('randomizeIngredient()')
  document.getElementById('3').classList.add('randomizeIngredient()')
  document.getElementById('4').classList.add('randomizeIngredient()')
  document.getElementById('5').classList.add('botbun')
}

// function for creating a random displayed burger level 3
function createBurgerLv3 () {
  document.getElementById('1').classList.add('topbun')
  document.getElementById('2').classList.add('randomizeIngredient()')
  document.getElementById('3').classList.add('randomizeIngredient()')
  document.getElementById('4').classList.add('randomizeIngredient()')
  document.getElementById('5').classList.add('randomizeIngredient()')
  document.getElementById('6').classList.add('botbun')
}

// function for creating a random displayed burger level 4
function createBurgerLv4 () {
  document.getElementById('1').classList.add('topbun')
  document.getElementById('2').classList.add('randomizeIngredient()')
  document.getElementById('3').classList.add('randomizeIngredient()'); document.getElementById('4').classList.add('randomizeIngredient()')
  document.getElementById('5').classList.add('randomizeIngredient()')
  document.getElementById('6').classList.add('randomizeIngredient()')
  document.getElementById('7').classList.add('botbun')
}

function removeIngredients () {
  var classes = ['cucumber', 'meat', 'onion', 'lettuce', 'cheese', 'topbun', 'botbun']
  for (var i = 0; i < 7; i++) {
    document.getElementById('i').classList.remove('classes')
  }
  // document.getElementById('1').classList.remove('classes')
  // document.getElementById('2').classList.remove('classes')
  // document.getElementById('3').classList.remove('classes')
  // document.getElementById('4').classList.remove('classes')
  // document.getElementById('5').classList.remove('classes')
  // document.getElementById('6').classList.remove('classes')
  // document.getElementById('7').classList.remove('classes')
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
