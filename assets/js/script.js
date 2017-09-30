$(function () {

  var grid=[] //this is the game board
  var colorList = ['cubeA','cubeB','cubeC']
  var cellColor =""

  // create a 2D array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Multi-dimensional_arrays
  function generateLevel (matrix) {
    //creates a new array of height $ width specified by 'matrix'
    grid = new Array(matrix)

    //create rows X then columns Y, grid can be accessed with grid[x][y]
    for (x = 0; x < matrix; x++) {
      grid[x] = new Array(matrix)
      for (y = 0; y < matrix; y++) {
        grid[x][y] = '[' + x + ', ' + y + ']'
      }
    }

    //populate cells randomly



    console.log(grid)
  }
  function generateColor() {
    cellColor = colorList[Math.floor(Math.random() * colorList.length)]
  }

  generateLevel(4)
  generateColor()

  console.log(grid)
  console.log(cellColor)

})
