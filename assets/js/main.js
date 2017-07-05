var gameArray = []
var counter = 0
var numpad = 0
var startpad = 0
var time = 10

document.querySelector('.counter').innerHTML = '0'
document.querySelector('.time').innerHTML = '10'

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
  } else if (event.keyCode === 32) {
    startpad = 1
  }
}
// ---------------------------------------------------------
function restart () {
  gameArray = []
  counter = 0
  time = 10
  fired = false
  var allSquare = document.querySelectorAll('.square')
  for (var i = 0; i < allSquare.length; i++) {
    allSquare[i].style.background = 'white'
  }
}
// ---------------------------------------------------------
var fired = false

function timer () {
  if (time > 0) {
    time = time - 1
    // console.log(time)
    document.querySelector('.time').innerHTML = time
  } else if (time = 0) {
    alert('Time Over')
    restart()
    clearInterval(interval)
  }
}

function interval () {
  if (fired = true) {
    setInterval(timer, 1000)
  }
}

function intervalTimer () {
  if (!fired && startpad === 1) {
    fired = true
    interval()
    gameStart()
      // tiles()
    }
  }
// ---------------------------------------------------------
// gameStart()
console.log(gameArray)
// ---------------------------------------------------------
// document.addEventListener('click', function () {
//   tiles()
//   var interval = setInterval(timer, 1000)
//   function timer () {
//     if (time > 0) {
//       time = time - 1
//       console.log(time)
//       document.querySelector('.time').innerHTML = time
//     } else {
//       alert ('Time Over')
//       clearInterval(interval)
//       restart()
//       gameStart()
//       document.querySelector('.counter').innerHTML = '0'
//       document.querySelector('.time').innerHTML = '30'
//     }
//   }
// })
// ---------------------------------------------------------
// document.addEventListener('keydown', function () {
//   var squareThree = gameArray[2] + 8
//   buttons(event)
//   if (time > 0) {
//     if (numpad == squareThree) {
//       tiles()
//       counter++
//       document.querySelector('.counter').innerHTML = counter
//     } else {
//       alert('Game Over')
//       // clearInterval(interval)
//       restart()
//       gameStart()
//       document.querySelector('.counter').innerHTML = '0'
//       document.querySelector('.time').innerHTML = '30'
//       tiles()
//       }
//   }
// })
// ---------------------------------------------------------
function scoring () {
  var squareThree = gameArray[2] + 8
  if (event.keyCode === 90 || event.keyCode === 88 || event.keyCode === 78 || event.keyCode === 77) {
    if (numpad == squareThree) {
      counter++
      document.querySelector('.counter').innerHTML = counter
    }
  }
}
// ---------------------------------------------------------

document.addEventListener('keydown', function (event) {
  var squareThree = gameArray[2] + 8
  buttons(event)
  intervalTimer()
  tiles()
  scoring(event)
  console.log(numpad)
  console.log(squareThree)
  console.log(event.keyCode)
})
