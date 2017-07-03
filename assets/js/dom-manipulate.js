document.addEventListener('DOMContentLoaded', init)

// global var, accessible by both logic and dom?
var start = [
  ['start', 'block', 'block', 'block'],
  ['topdown', 'space', 'leftright', 'end'],
  ['topright', 'space', 'space', 'block'],
  ['space', 'leftright', 'space', 'lefttop']
]

var play = start

function createGrid () {
  var container = document.querySelector('#container')
  for (var i = 0; i < start[0].length; i++) {
    for (var j = 0; j < start.length; j++) {
      var allDiv = document.createElement('div')
      allDiv.id = [i] + [j] // assigning id based on natural index
      //assigning value based on start grid
      if (start[i][j] == 'space') { allDiv.classList.add('space') }
      if (start[i][j] == 'block') { allDiv.classList.add('block') }
      if (start[i][j] == 'lefttop') { allDiv.classList.add('lefttop') }
      if (start[i][j] == 'topright') { allDiv.classList.add('topright') }
      if (start[i][j] == 'topdown') { allDiv.classList.add('topdown') }
      if (start[i][j] == 'leftright') { allDiv.classList.add('leftright') }
      if (start[i][j] == 'start') { allDiv.classList.add('start') }
      if (start[i][j] == 'end') { allDiv.classList.add('end') }
      //allDiv.classList.add('box')
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

    // add event listerner to each div
  //var allDiv = document.querySelectorAll('div')
  var aDiv = document.querySelector('div')
  aDiv.addEventListener('click', logicFile.checkValid)
  aDiv.addEventListener('click', updateGrid)
  // })

    // Update tiles
  function updateGrid () {
      // console.log(play);
      // console.log(allDiv);
    var k = 1
    while (k < 17) {
      for (var i = 0; i < start[0].length; i++) {
        for (var j = 0; j < start.length; j++) {
          var query = 'div:nth-child(' + k + ')'
          var imageInDiv = document.querySelector(query)
          //console.log(imageInDiv);
          if (play[i][j] == 'space') {
            imageInDiv.className = 'space'
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


  return {
    updateGrid: updateGrid,
  }
} // init ends here
