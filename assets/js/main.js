var gameArray = []
console.log(gameArray)
var counter = 0
var numpad = 0
var time = 10

// ---------------------------------------------------------
function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
// ---------------------------------------------------------
function gameStart () {
  gameArray.push(randomizer(1, 4), randomizer(1, 4), randomizer(1, 4), randomizer(1, 4))
}
// ---------------------------------------------------------
function turn () {
  gameArray.pop()
  gameArray.unshift(randomizer(1, 4))
  // console.log(gameArray)
}
// ---------------------------------------------------------
function tiles () {
  var allSquare = document.querySelectorAll('.square')
  for (var i = 0; i < allSquare.length; i++) {
    allSquare[i].style.background = 'white'
  }
  turn()
  document.querySelector('#square' + gameArray[0]).style.background = 'black'
  var squareTwo = gameArray[1] + 4
  var squareThree = gameArray[2] + 8
  var squareFour = gameArray[2] + 12
  document.querySelector('#square' + squareTwo).style.background = 'black'
  document.querySelector('#square' + squareThree).style.background = 'black'
  document.querySelector('#square' + squareFour).style.background = 'grey'

  // var test = document.querySelector('#square' + squareFour)
  // test.style.backgroundImage = 'url("https://pbs.twimg.com/profile_images/604644048/sign051.gif")'
  // test.style.backgroundSize = '100%'
  // test.style.backgroundRepeat = 'no-repeat'
  // test.style.verticalAlign = 'middle'
  // test.style.width = '90px'
  // test.style.height = 'auto'
  // document.querySelector('#square' + squareFour).style.backgroundImage = 'url("https://pbs.twimg.com/profile_images/604644048/sign051.gif")'
}
// ---------------------------------------------------------
function buttons (event) {
  // var numpad = 0
  if (event.keyCode === 90) {
    numpad = 9
  } else if (event.keyCode === 88) {
    numpad = 10
  } else if (event.keyCode === 78) {
    numpad = 11
  } else if (event.keyCode === 77) {
    numpad = 12
  }
  // console.log(numpad)
}
// ---------------------------------------------------------
function restart () {
  clearInterval(interval)
  gameArray = []
  counter = 0
  time = 0
  var allSquare = document.querySelectorAll('.square')
  for (var i = 0; i < allSquare.length; i++) {
    allSquare[i].style.background = 'white'
  }
}
// ---------------------------------------------------------
function timer () {
  if (time > 0) {
    time = time - 1
    console.log(time)
    document.querySelector('.time').innerHTML = time
  } else {
    // alert ('Time Over')
  }
}


// setInterval(timer, 1000)
// ---------------------------------------------------------
gameStart()
console.log(gameArray)
document.querySelector('.counter').innerHTML = '0'

document.addEventListener('click', function () {
  tiles()
  var interval = setInterval(timer, 1000)
})

// console.log(gameArray)
// document.addEventListener('keydown', buttons)
// ---------------------------------------------------------
document.addEventListener('keydown', function () {
  var squareThree = gameArray[2] + 8
  buttons(event)
  if (time > 0) {
    if (numpad == squareThree) {
      tiles()
      counter++
      document.querySelector('.counter').innerHTML = counter
    } else {
      alert('Game Over')
      restart()
      gameStart()
      document.querySelector('.counter').innerHTML = '0'
      }
  } else {
    // alert ('Time Over')
    restart()
    gameStart()
    document.querySelector('.counter').innerHTML = '0'
    }
})
// ---------------------------------------------------------
