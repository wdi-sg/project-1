var gameArray = []
//Used in arrayChecker
var arrayState = 0
//Used in the logic to determine if gameArray[i] is equal to keyPad)
var keyPad = 0
//Used for timer function
var fired = false
var time = 30
var interval = ''
//Used in assign function
var rowOneSquare = 0
var rowTwoSquare = 0
var rowThreeSquare = 0
var rowFourSquare = 0
var counter = 0
var timeSelector = document.querySelector('.time')
var scoreSelector = document.querySelector('.score')

//To determine if it's an empty array.
function arrayChecker () {
  if (gameArray.toString() == false) {
    arrayState = 1
  } else {
    arrayState = 2
  }
}

function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function startGame () {
  gameArray.push(randomizer(1, 4), randomizer(1, 4), randomizer(1, 4))
  console.log(gameArray)
}

function timer () {
  if (time > 0) {
    time = time - 1
    document.querySelector('.time').innerHTML = time
  } else if (time === 0) {
    alert('Time Over')
    //I used already declared functions in this function. Is this acceptable?
    restart ()
    clearInterval(interval)
    assign()
    tiles()
  }
}

function intervalForTimer () {
  if (fired = true) {
    interval = setInterval(timer, 1000)
  }
}

function gameTurn () {
  gameArray.pop()
  gameArray.unshift(randomizer(1, 4))
  console.log(gameArray)
}

function restart () {
  gameArray = []
  fired = false
  time = 30
  counter = 0
  timeSelector.innerHTML = 30
  scoreSelector.innerHTML = 0
}

//Unable to think of a function that will avoid all the DOM manipulation.
function tiles () {
  var allSquares = document.querySelectorAll('.square')
  for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].style.background = ''
  }
  document.querySelector('#square' + rowOneSquare).style.backgroundImage = 'url("http://orig04.deviantart.net/7d15/f/2016/366/c/0/cat_head_png__by_madcatmd-datnw9e.png")'
  document.querySelector('#square' + rowOneSquare).style.backgroundSize = '100%'
  document.querySelector('#square' + rowOneSquare).style.backgroundRepeat = 'no-repeat'
  document.querySelector('#square' + rowOneSquare).style.backgroundPosition = 'center'
  document.querySelector('#square' + rowTwoSquare).style.backgroundImage = 'url("http://orig04.deviantart.net/7d15/f/2016/366/c/0/cat_head_png__by_madcatmd-datnw9e.png")'
  document.querySelector('#square' + rowTwoSquare).style.backgroundSize = '100%'
  document.querySelector('#square' + rowTwoSquare).style.backgroundRepeat = 'no-repeat'
  document.querySelector('#square' + rowTwoSquare).style.backgroundPosition = 'center'
  document.querySelector('#square' + rowThreeSquare).style.backgroundImage = 'url("http://orig04.deviantart.net/7d15/f/2016/366/c/0/cat_head_png__by_madcatmd-datnw9e.png")'
  document.querySelector('#square' + rowThreeSquare).style.backgroundSize = '100%'
  document.querySelector('#square' + rowThreeSquare).style.backgroundRepeat = 'no-repeat'
  document.querySelector('#square' + rowThreeSquare).style.backgroundPosition = 'center'
  document.querySelector('#square' + rowFourSquare).style.backgroundImage = 'url(http://i.imgur.com/VdsltIo.png?1)'
  document.querySelector('#square' + rowFourSquare).style.backgroundSize = '100%'
  document.querySelector('#square' + rowFourSquare).style.backgroundRepeat = 'no-repeat'
  document.querySelector('#square' + rowFourSquare).style.backgroundPosition = 'center'
}

//This function is required otherwise tiles and gameTurn will not work
function assign () {
  rowOneSquare = gameArray[0]
  rowTwoSquare = gameArray[1] + 4
  rowThreeSquare = gameArray[2] + 8
  rowFourSquare = gameArray[2] + 12
}

function score () {
  counter ++
  document.querySelector('.score').innerHTML = counter
}
