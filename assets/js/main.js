var gameArray = []
var counter = 0
var numpad = 0
var startpad = 0
var time = 30

document.querySelector('.counter').innerHTML = '0'
document.querySelector('.time').innerHTML = '30'
// ---------------------------------------------------------
function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
// ---------------------------------------------------------
function gameStart () {
  gameArray.push(randomizer(1, 4), randomizer(1, 4), randomizer(1, 4))
}
// ---------------------------------------------------------
function turn () {
  gameArray.pop()
  gameArray.unshift(randomizer(1, 4))
}
// ---------------------------------------------------------
function tiles () {
  var allSquare = document.querySelectorAll('.square')
  for (var i = 0; i < allSquare.length; i++) {
    allSquare[i].style.background = ''
  }
  turn()
  var squareTwo = gameArray[1] + 4
  var squareThree = gameArray[2] + 8
  var squareFour = gameArray[2] + 12

  var squareOneStyle = document.querySelector('#square' + gameArray[0])
  squareOneStyle.style.backgroundImage = 'url("http://orig04.deviantart.net/7d15/f/2016/366/c/0/cat_head_png__by_madcatmd-datnw9e.png")'
  squareOneStyle.style.backgroundSize = '100%'
  squareOneStyle.style.backgroundRepeat = 'no-repeat'
  squareOneStyle.style.backgroundPosition = 'center'

  var squareTwoStyle = document.querySelector('#square' + squareTwo)
  squareTwoStyle.style.backgroundImage = 'url("http://orig04.deviantart.net/7d15/f/2016/366/c/0/cat_head_png__by_madcatmd-datnw9e.png")'
  squareTwoStyle.style.backgroundSize = '100%'
  squareTwoStyle.style.backgroundRepeat = 'no-repeat'
  squareTwoStyle.style.backgroundPosition = 'center'

  var squareThreeStyle = document.querySelector('#square' + squareThree)
  squareThreeStyle.style.backgroundImage = 'url("http://orig04.deviantart.net/7d15/f/2016/366/c/0/cat_head_png__by_madcatmd-datnw9e.png")'
  squareThreeStyle.style.backgroundSize = '100%'
  squareThreeStyle.style.backgroundRepeat = 'no-repeat'
  squareThreeStyle.style.backgroundPosition = 'center'

  var squareFourStyle = document.querySelector('#square' + squareFour)
  squareFourStyle.style.backgroundImage = 'url(http://i.imgur.com/VdsltIo.png?1)'
  squareFourStyle.style.backgroundSize = '100%'
  squareFourStyle.style.backgroundRepeat = 'no-repeat'
  squareFourStyle.style.backgroundPosition = 'center'
}
// ---------------------------------------------------------
function buttons (event) {
  if (event.keyCode === 90) {
    numpad = 9
  } else if (event.keyCode === 88) {
    numpad = 10
  } else if (event.keyCode === 78) {
    numpad = 11
  } else if (event.keyCode === 77) {
    numpad = 12
  } else if (event.keyCode === 32) {
    startpad = 1
  }
}
// ---------------------------------------------------------
function restart () {
  gameArray = []
  counter = 0
  time = 30
  fired = false
  var allSquare = document.querySelectorAll('.square')
  for (var i = 0; i < allSquare.length; i++) {
    allSquare[i].style.background = ''
    document.querySelector('.counter').innerHTML = '0'
    document.querySelector('.time').innerHTML = '30'
  }
}
// ---------------------------------------------------------
var fired = false

function timer () {
  if (time > 0) {
    time = time - 1
    document.querySelector('.time').innerHTML = time
  } else if (time === 0) {
    alert('Time Over')
    restart()
    clearInterval(test)
    tiles()
  }
}

var test = ''

function interval () {
  if (fired = true) {
    test = setInterval(timer, 1000)
  }
}

function intervalTimer () {
  if (!fired && startpad === 1) {
    fired = true
    interval()
    gameStart()
    tiles()
  }
}
// ---------------------------------------------------------
function scoring (event) {
  var squareThree = gameArray[2] + 8
  if (event.keyCode === 90 || event.keyCode === 88 || event.keyCode === 78 || event.keyCode === 77) {
    if (numpad == squareThree) {
      counter++
      document.querySelector('.counter').innerHTML = counter
    } else {
      alert('Game Over')
      restart()
      clearInterval(test)
      tiles()
    }
  }
}
// ---------------------------------------------------------
document.addEventListener('keydown', function (event) {
  buttons(event)
  intervalTimer()
  scoring(event)
  tiles()
  console.log(numpad)
  console.log(event.keyCode)
  console.log(gameArray)
})
