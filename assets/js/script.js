var player = true
var gameStart = true
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
var randomArray = [] // random food array
var playerFoodInput = [] // player chosen food array
var displayFoodInput = [] // generated food array
// var chosenIngredient = [] // chosen ingredient array
var timer = 0

// function for check if gameover
function isGameOver () {

}

// function for startgame
function gamePlay () {
  if (gameStart === true) {
    if (counter <= 3) {
      level1()
    }
    if (counter > 3 && counter <= 7) {
      level2()
    }
    if (counter > 7 && counter <= 11) {
      level3()
    }
    if (counter > 11) {
      level4()
    }
    counter++
  } else gameStart = false
} // closing for gamePlay

// function to create randomIngredient
function randomizeIngredient () {
  var ingredient = Math.floor(Math.random() * 5)
  if (ingredient === 0) randomArray.push('cucumber')
  if (ingredient === 1) randomArray.push('meat')
  if (ingredient === 2) randomArray.push('onion')
  if (ingredient === 3) randomArray.push('lettuce')
  if (ingredient === 4) randomArray.push('cheese')
}

function chooseIngredient (food) {
  if (food == 'cucumber') {
    playerFoodInput.push('cucumber')
    return true
  }
  if (food == 'meat') {
    playerFoodInput.push('meat')
    return true
  }
  if (food == 'onion') {
    playerFoodInput.push('food')
    return true
  }
  if (food == 'lettuce') {
    playerFoodInput.push('lettuce')
    return true
  }
  if (food == 'cheese') {
    playerFoodInput.push('cheese')
    return true
  }
}// closing for chooseIngredient

// 2 random ingredients
function level1 () {
  for (var i = 0; i < 2; i++) {
    randomizeIngredient()
    console.log(randomArray)
  } return true
}
// 3 random ingredients
function level2 () {
  for (var i = 0; i < 3; i++) {
    randomizeIngredient()
  } return true
}
// 4 random ingredients
function level3 () {
  for (var i = 0; i < 4; i++) {
    randomizeIngredient()
  } return true
}
// 5 random ingredients
function level4 () {
  for (var i = 0; i < 5; i++) {
    randomizeIngredient()
  } return true
}

// function for checking if ingredient picked is same as displayed burger
function checkIngredient () {
  // var playerInput = playerFoodInput.join('')
  // var randomInput = randomArray.join('')
  for (var i = 0; i < playerFoodInput.length; i++) {
    if (randomArray[i] == playerFoodInput[i]) {
      return true
    } return false
  }
}

// function for wrong button pressed
function wrongPress () {
  if (checkIngredient !== true) {
    resetGame ()
  }
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
  var randomArray = []
  var playerFoodInput = []
  var displayFoodInput = []
}

// // target the div id's
// var d1 = document.getElementById('d1')
// var d2 = document.getElementById('d2')
// var d3 = document.getElementById('d3')
// var d4 = document.getElementById('d4')
// var d5 = document.getElementById('d5')
// var d6 = document.getElementById('d6')
// var d7 = document.getElementById('d7')
//
// // function for creating a random displayed burger level 1
// function createBurgerLv1 () {
//   d1.classList.add('topbun')
//   d2.classList.add('randomizeIngredient()')
//   d3.classList.add('randomizeIngredient()')
//   d4.classList.add('botbun')
// }
//
// // function for creating a random displayed burger level 2
// function createBurgerLv2 () {
//   d1.classList.add('topbun')
//   d2.classList.add('randomizeIngredient()')
//   d3.classList.add('randomizeIngredient()')
//   d4.classList.add('randomizeIngredient()')
//   d5.classList.add('botbun')
// }
//
// // function for creating a random displayed burger level 3
// function createBurgerLv3 () {
//   d1.classList.add('topbun')
//   d2.classList.add('randomizeIngredient()')
//   d3.classList.add('randomizeIngredient()')
//   d4.classList.add('randomizeIngredient()')
//   d5.classList.add('randomizeIngredient()')
//   d6.classList.add('botbun')
// }
//
// // function for creating a random displayed burger level 4
// function createBurgerLv4 () {
//   d1.classList.add('topbun')
//   d2.classList.add('randomizeIngredient()')
//   d3.classList.add('randomizeIngredient()'); d4.classList.add('randomizeIngredient()')
//   d5.classList.add('randomizeIngredient()')
//   d6.classList.add('randomizeIngredient()')
//   d7.classList.add('botbun')
// }
//
// function removeIngredients () {
//   d1.className = ''
//   d2.className = ''
//   d3.className = ''
//   d4.className = ''
//   d5.className = ''
//   d6.className = ''
//   d7.className = ''
// }
