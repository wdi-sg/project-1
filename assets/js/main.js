gameArray = []
console.log(gameArray)
// var value = 0

function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function gameStart () {
  gameArray.push(randomizer(1, 4), randomizer(1, 4), randomizer(1, 4), randomizer(1, 4))
}

//Start button of the game.
gameStart()
console.log(gameArray)

function turn () {
  gameArray.pop()
  gameArray.unshift(randomizer(1, 4))
  console.log(gameArray)
}

function tiles () {
  var allSquare = document.querySelectorAll(".square")
  for (var i = 0; i < allSquare.length; i++) {
    allSquare[i].style.background = 'white'
  }
  turn()
  document.querySelector("#square" + gameArray[0]).style.background = 'black'
  var squareTwo = gameArray[1] + 4
  var squareThree = gameArray[2] + 8
  var squareFour = gameArray[2] + 12
  document.querySelector("#square" + squareTwo).style.background = 'black'
  document.querySelector("#square" + squareThree).style.background = 'black'
  document.querySelector("#square" + squareFour).style.background = 'grey'
}

//------------------------------------------------------------------

document.addEventListener ('click', tiles)

//------------------------------------------------------------------
document.addEventListener('keydown', buttons)

function buttons (event) {
  var numpad = 0
  if (event.keyCode === 90) {
    numpad = 9
  } else if (event.keyCode === 88) {
    numpad = 10
  } else if (event.keyCode === 78) {
    numpad = 11
  } else if (event.keyCode === 77) {
    numpad = 12
  }
  console.log(numpad)
}
