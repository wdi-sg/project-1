document.addEventListener('DOMContentLoaded', init)

// global var, accessible by both logic and dom?
// will be randomized when start hit start button
// var start2 = [
//   ['start', 'block', 'block', 'block'],
//   ['topdown', 'space', 'leftright', 'end'],
//   ['topright', 'block', 'space', 'space'],
//   ['space', 'leftright', 'space', 'lefttop']
// ]

// to play with to check recursive function
var start = [
  ['start', 'block', 'block', 'block'],
  ['space', 'topdown', 'leftright', 'end'],
  ['block', 'topright', 'space', 'space'],
  ['space', 'leftright', 'space', 'lefttop']
]

// win is to know what starting pieces to take, and if needed, hardcoded winning combi
var win = [
  ['space', 'block', 'block', 'block'],
  ['block', 'topdown', 'topright', 'block'],
  ['space', 'leftright', 'leftright', 'lefttop'],
  ['space', 'space', 'space', 'space']
]

// play is updated to allow updateGrid to work
var play = start
var seconds = 0

var winNum = 0
var lifeNum = 3
var score = 0
var moveNum = 'string'

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
  //console.log(aDiv)
  aDiv.forEach(function (e) { e.addEventListener('click', logicFile.checkMoveIntoSpace) })
  aDiv.forEach(function (e) { e.addEventListener('click', updateGrid) })
  aDiv.forEach(function(e){
    e.addEventListener('click',
      function() {event.target.classList.add('glow')}
    )})

  // add event listener to start
  // var startBtn = document.getElementById('startBtn')
  // startBtn.addEventListener('click', startTimer)
  // startBtn.addEventListener('click', logicFile.randomize)
  // startBtn.addEventListener('click', updateGrid)
  // startBtn.addEventListener('click', function(){event.target.id = 'moveAfter'})

  var startBtn = document.querySelector('.moveAfter')
  startBtn.addEventListener('click', startTimer)
  startBtn.addEventListener('click', logicFile.randomize)
  startBtn.addEventListener('click', updateGrid)
  startBtn.addEventListener('click', function(){event.target.id = 'moveAfter'})

  //document.getElementById('testBtn').addEventListener('click', function() { logicFile.checkMoveIntoSpace().checkTileSeqFromS('X0Y0') })


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

  var idleInterval = null
  function startTimer () {
    seconds = 31
    moveNum = 0
    clearInterval(idleInterval)
    idleInterval=setInterval(showTimer, 1000)
  }

  function showTimer () {
      if (seconds > -3) {
        seconds--
      }
      if (seconds > -1) {
        document.getElementById('timer').textContent = seconds
      }
      if (seconds == -1) {
        logicFile.randomize()
        updateGrid()
        startTimer()
      }
    }

  // function stopTimer() {
  //     console.log('stopped at seconds?'+ seconds);
  //     document.getElementById('timer').textContent = 'won'
  //
  //     //var timer = setInterval(showTimer, 1000)
  //     //clearInterval(timer);
  //   }
  //   //return {stopTimer: stopTimer}





  function showWin () {
    //stopTimer()
    //winNum - this only works if new level accumulates your win, not relevant for 1 level
    //document.getElementById('win').textContent = winNum
    //show score based on seconds taken
    // if (seconds<10) {score = 10000}
    // else if (seconds<20) {score = 20000}
    // else if (seconds<40) {score = 30000}
    // console.log(score);
    document.getElementById('scoreNum').textContent = 'time taken ' + (30 - parseInt(seconds)) + ' seconds'
    var scoreClass = document.querySelectorAll('.score')
    scoreClass.forEach(function(e){
      e.style.left=500+'px'
      e.style.top=200+'px'
      })
    //reload page if user wants to replay
    setTimeout(reload,5000)
    //brighten border, and fade out
    aDiv.forEach(function (e) {e.classList.add('glow')})
    aDiv.forEach(function (e) {e.classList.add('background')})
  }

  function reload() {
    var playAgain = confirm('do you want to play again?')
    if (playAgain) {
      window.location.reload(true)
      logicFile.randomize()
      updateGrid()
    }
  }

  function showLives () {
    document.getElementById('life').textContent = lifeNum
  }



  return {
    updateGrid: updateGrid,
    showWin: showWin,
    showLives: showLives,
    startTimer: startTimer,
    showTimer: showTimer,
    //stopTimer: stopTimer
  }
} // init ends here
