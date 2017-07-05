document.addEventListener('DOMContentLoaded', init)

// global var, accessible by both logic and dom?
//will be randomized when start hit start button
var start2 = [
  ['start', 'block', 'block', 'block'],
  ['topdown', 'space', 'leftright', 'end'],
  ['topright', 'block', 'space', 'space'],
  ['space', 'leftright', 'space', 'lefttop']
]

//to play with to check recursive function
var start = [
  ['start', 'block', 'block', 'block'],
  ['space', 'topdown', 'leftright', 'end'],
  ['block', 'topright', 'space', 'space'],
  ['space', 'leftright', 'space', 'lefttop']
]

//win is to know what starting pieces to take, and if needed, hardcoded winning combi
var win = [
  ['space', 'block', 'block', 'block'],
  ['block', 'topdown', 'topright', 'block'],
  ['space', 'leftright', 'leftright', 'lefttop'],
  ['space', 'space', 'space', 'space']
]

//play is updated to allow updateGrid to work
var play = start

var moveNum = 'Game not started'



function createGrid () {
  var container = document.querySelector('#container')
  for (var i = 0; i < start[0].length; i++) {
    for (var j = 0; j < start.length; j++) {
      var allDiv = document.createElement('div')
      allDiv.id = [i] + [j] // assigning id based on natural index
      // assigning value based on start grid
      if (start[i][j] == 'space') { allDiv.classList.add('space') }
      if (start[i][j] == 'block') { allDiv.classList.add('block') }
      if (start[i][j] == 'lefttop') { allDiv.classList.add('lefttop') }
      if (start[i][j] == 'topright') { allDiv.classList.add('topright') }
      if (start[i][j] == 'topdown') { allDiv.classList.add('topdown') }
      if (start[i][j] == 'leftright') { allDiv.classList.add('leftright') }
      if (start[i][j] == 'start') { allDiv.classList.add('start') }
      if (start[i][j] == 'end') { allDiv.classList.add('end') }
      // allDiv.classList.add('box')
      container.appendChild(allDiv)
    }
  }
}

createGrid()

function init () {
  // create game board
  var logicFile = logic()

  // fetch logic and init
  console.log('init loaded')
    // put global variables here

    // add event listerner to each div in game
  var aDiv = document.querySelectorAll('#container div')
  console.log(aDiv)
  aDiv.forEach(function (e) { e.addEventListener('click', logicFile.checkMoveIntoSpace) })
  aDiv.forEach(function (e) { e.addEventListener('click', updateGrid) })
  aDiv.forEach(function (e) { e.addEventListener('click', showMoves) })

  // add event listener to start
  document.getElementById('startBtn').addEventListener('click', startTimer)
  document.getElementById('startBtn').addEventListener('click', logicFile.randomize)
  //document.getElementById('startBtn').addEventListener('click', function() { logicFile.checkMoveIntoSpace().popUnrecordedMoves('X0Y0') })
  document.getElementById('startBtn').addEventListener('click', updateGrid)

  document.getElementById('testBtn').addEventListener('click', function() { logicFile.checkMoveIntoSpace().popUnrecordedMoves('X0Y0')
})

  //



    // Update tiles
  function updateGrid () {
      // console.log(allDiv);
    var k = 1
    while (k < 17) {
      for (var i = 0; i < start[0].length; i++) {
        for (var j = 0; j < start.length; j++) {
          var query = '#container div:nth-child(' + k + ')'
          var imageInDiv = document.querySelector(query)
          if (play[i][j] == 'space') {
            imageInDiv.className = 'space'
          }
          if (play[i][j] == 'block') {
            imageInDiv.className = 'block'
          }
          if (play[i][j] == 'lefttop') {
            imageInDiv.className = 'lefttop'
          }
          if (play[i][j] == 'topright') {
            imageInDiv.className = 'topright'
          }
          if (play[i][j] == 'topdown') {
            imageInDiv.className = 'topdown'
          }
          if (play[i][j] == 'leftright') {
            imageInDiv.className = 'leftright'
          }
          if (play[i][j] == 'start') {
            imageInDiv.className = 'start'
          }
          if (play[i][j] == 'end') {
            imageInDiv.className = 'end'
          }
          k++
        }
      }
    }
  }

  function startTimer () {
    moveNum = 0
    seconds = 31
    setInterval(showTimer, 1000)

    function showTimer () {
      if (seconds > -3) {
        seconds--}
      if (seconds > -1) {
        document.getElementById('timer').textContent = seconds + ' seconds'
      }
      if (seconds == -1) {
        //logicFile.randomize()
        //updateGrid()
      }
    }
  }

  function showMoves () {
    document.getElementById('moves').textContent = moveNum
  }

  return {
    updateGrid: updateGrid,
    showMoves: showMoves,
    startTimer: startTimer
  }
} // init ends here
