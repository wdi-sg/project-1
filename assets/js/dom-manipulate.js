document.addEventListener('DOMContentLoaded', init)

// global var, accessible by both logic and dom?
var start = [
  ['start', 'block', 'block', 'block'],
  ['topdown', '0', 'leftright', 'end'],
  ['topright', '0', '0', 'block'],
  ['0', 'leftright', '0', 'lefttop']
]

var play = start

function createGrid () {
  var container = document.querySelector('#container')
  for (var i = 0; i < start[0].length; i++) {
    for (var j = 0; j < start.length; j++) {
      var allDiv = document.createElement('div')
      allDiv.id = [i] + [j] // assigning id based on natural index
      //assigning value based on start grid
      if (start[i][j] == '0') { allDiv.classList.add('space') }
      if (start[i][j] == 'block') { allDiv.classList.add('block') }
      else if (start[i][j] !== '0' && start[i][j] !== 'block') { allDiv.classList.add('topleft') }
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
  var allDiv = document.querySelectorAll('div')
  allDiv.forEach(function (e) {
    e.addEventListener('click', logicFile.moveTileRight)
    e.addEventListener('click', updateGrid)
  })

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
          if (play[i][j] == '0') {
            imageInDiv.className = 'space'
          }
          if (play[i][j] == 'block') {
            imageInDiv.className = 'block'
          }
          else if (start[i][j] !== '0' && start[i][j] !== 'block') { imageInDiv.className = 'topleft' }
          k++
        }
      }
    }
  }


  return {
    updateGrid: updateGrid,
  }
} // init ends here
