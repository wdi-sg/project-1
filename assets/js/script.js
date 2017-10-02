$(function () {

  var grid = [] //this is the game board
  var colorList = ['cubeA','cubeB','cubeC']
  var cellColor = ""
  var matrix = 4

  // create a 2D array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Multi-dimensional_arrays
  function generateLevel () {
    //creates a new array of height & width specified by 'matrix'
    //create rows then columns, grid can be accessed with grid[row][column]
    grid = new Array(matrix)
    for (i = 0; i < matrix; i++) {
      grid[i] = new Array(matrix)
      for (j = 0; j < matrix; j++) {

        //populate cells
        grid[i][j] = generateColor()
      }
    }


    grid[1][0] = "test"
    grid[2][0] = "test"
    grid[0][0] = "test"

    grid[0][1] = "test"
    grid[0][2] = "test"
    grid[0][0] = "test"
    console.log(grid)
  }



  function generateColor() {
    return colorList[Math.floor(Math.random() * colorList.length)]
  }

  function checkForMatch() {
    //check for horizontal matches
    for (var x = 0 ; x < matrix-1; x++) {
      for (var y = 0; y < matrix-1; y++) {
        if (x !==0 && grid[y][x] === grid[y][x-1] && grid[y][x] === grid[y][x+1]) {
          grid[y][x] = 0
          grid[y][x+1] = 0
          grid[y][x-1] = 0
        }
        if (y !== 0 && grid[y][x] === grid[y-1][x] && grid[y][x] === grid[y+1][x]) {
          grid[y][x] = 0
          grid[y+1][x] = 0
          grid[y-1][x] = 0
        }
      }
    }



    console.log(grid)
      }




  // function replenish() {
  //   if (grid[y][x]) === 0) grid[y][x] === grid[y-1][x]
  // }


$('body').on('click',checkForMatch)

  generateColor()
  generateLevel()




})
