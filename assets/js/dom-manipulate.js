document.addEventListener('DOMContentLoaded', init)

var start = [
  ['S','LT',0,0],
  [0,'LR',0,0],
  [0,'TD',0,0],
  [0,'E',0,0]
]

var play = start


function init () {
  // create game board
  var logicFile = logic()

  createGrid()

  console.log(logic.start);

  function createGrid () {
    var container = document.querySelector('#container')
    for (var i = 0; i < start[0].length; i++) {
      for (var j = 0; j < start.length; j++) {
        var allDiv = document.createElement('div')
        allDiv.id = [i] + [j] //assigning id based on natural index
        allDiv.textContent = start[i][j] //assigning value based on start grid
        allDiv.classList.add('box')
        container.appendChild(allDiv)
      }
    }
  }


    //fetch logic and init
    console.log('init loaded')
    // put global variables here

    //add event listerner to each div
    var allDiv = document.querySelectorAll('.box')
    allDiv.forEach(function (e) {
      e.addEventListener('click', logicFile.moveTileRight)
      e.addEventListener('click', updateGrid)
    })

    // move tile

    function updateGrid () {
      console.log(play);
      var k = 0
      while (k < 16) {
        for (var i = 0; i < start[0].length; i++) {
          for (var j = 0; j < start.length; j++) {
          allDiv[k].textContent = play[i][j]
          k++
            }
          }
        }
      }

    return {
      updateGrid: updateGrid
    }

} // init ends here

//logic file
function logic () {
  console.log('logic loaded');
  // var grid = [
  //   [0,0,0,0]
  //   [0,0,0,0]
  //   [0,0,0,0]
  //   [0,0,0,0]
  // ]



  //if clicked, trigger this func
  //assuming clicked


function moveTileRight (target) {
    // what you clicked on, to be replaced by click
    target = event.target
    var tempValue = target.textContent //stores value e.g. LT
    var tempID = target.id //stores value e.g. 01
    var x = parseInt(tempID.substr(0,1))
    var y = parseInt(tempID.substr(1))
    play[x][y+1]  = tempValue
    play[x][y] = 0
    console.log(play);
  }

  return {
    moveTileRight: moveTileRight
  }


}//end logic
