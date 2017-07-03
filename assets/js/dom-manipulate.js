document.addEventListener('DOMContentLoaded', init)

//global var, accessible by both logic and dom?
var start = [
  ['S','LT',0,0],
  [0,'LR',0,0],
  [0,'TD',0,0],
  [0,'E',0,0]
]

var play = start

function createGrid () {
  var container = document.querySelector('#container')
  for (var i = 0; i < start[0].length; i++) {
    for (var j = 0; j < start.length; j++) {
      var allDiv = document.createElement('div')
        var block = document.createElement('img')
        block.src =
        'assets/images/concrete small.png'
        block.alt = '0'
        var pipe = document.createElement('img')
        pipe.src =
        'assets/images/pip.png'
        pipe.alt = 'LT'
      allDiv.id = [i] + [j] //assigning id based on natural index
      //allDiv.textContent = start[i][j] //assigning value based on start grid
      if (start[i][j] == 0) {allDiv.appendChild(block)}
      if (start[i][j] !== 0) {allDiv.appendChild(pipe)}
      allDiv.classList.add('box')
      container.appendChild(allDiv)
    }
  }
}

createGrid()

function init () {
  // create game board
  var logicFile = logic()



    //fetch logic and init
    console.log('init loaded')
    // put global variables here

    //add event listerner to each div
    var allDiv = document.querySelectorAll('.box')
    allDiv.forEach(function (e) {
      e.addEventListener('click', logicFile.moveTileRight)
      e.addEventListener('click', updateGrid)
    })

    // Update tiles

    function updateGrid () {
      //console.log(play);
      //console.log(allDiv);
    var imageInDiv2 = document.querySelector('.box:nth-child(1) img')
        var k = 1
        while (k < 2) {
          for (var i = 0; i < start[0].length; i++) {
            for (var j = 0; j < start.length; j++) {
              var query = '.box:nth-child(' + k + ')' + ' img'
              var imageInDiv = document.querySelector(query)
              if (play[i][j] == 0) {
                imageInDiv.src =
                'assets/images/concrete small.png'
              }
              if (play[i][j] !== 0) {
                imageInDiv.src =
                'assets/images/pip.png'
              }
             k++
              }
            }
          }
        }


    function imgGrid () {
      for (var k = 0; k < 16; k++) {
        //if (allDiv[k].textContent == '0') {
        }
      //}
    }

    return {
      updateGrid: updateGrid,
      imgGrid: imgGrid
    }

} // init ends here
