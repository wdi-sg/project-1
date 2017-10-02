$(function () {

  var grid = [] //this is the game board
  var colorList = ['#3772FF','#FED766','#FE5F55']
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
        cellColor = generateColor()
        grid[i][j] = cellColor
        var pos = i +","+ j

        $('.cell[data-position= "'+ pos +'"]').css('background-color', cellColor);

        //$('[i][j]').addclass(color)

      }
    }


    // grid[1][0] = "test"
    // grid[1][1] = "test"
    // grid[1][2] = "test"

    // grid[0][1] = "test"
    // grid[1][1] = "test"
    // grid[2][1] = "test"
    // grid[3][1] = "test"
    console.log(grid)
  }



  function generateColor() {
    return colorList[Math.floor(Math.random() * colorList.length)]
  }

//   function checkForMatch() {
//
//     for (var x = 0 ; x < matrix-2; x++) {
//       for (var y = 0; y < matrix-2; y++) {
//         // if (grid[y][x] === grid[y][x+1]) matches = 1
//
//
//         //check for horizontal matches
//         if (grid[y][x] === grid[y][x+1] && grid[y][x] === grid[y][x+2]) {
//           grid[y][x] = 0
//           grid[y][x+1] = 0
//           grid[y][x+2] = 0
//         }
//         //check for vertical matches
//         if (grid[y][x] === grid[y+1][x] && grid[y][x] === grid[y+2][x]) {
//           grid[y][x] = 0
//           grid[y+1][x] = 0
//           grid[y+2][x] = 0
//         }
//       }
//     }
//
//
//
//     console.log(grid)
//       }
//
//
//
//
//   function replenish() {
//     for (var x = matrix ; x = 0; x--) {
//       for (var y = matrix; y = 0; y--) {
//         if( y === 0 && grid[y][x] === 0) grid[y][x] = generateColor()
//         if (y !== 0 && grid[y][x] === 0) {
//           var temp = grid[y-1][x]
//           grid[y][x] = temp
//           grid[y-1][x] = 0
//           if (y !== 1)
//           grid[y-1][x] = grid[y-2][x]
//         }
//       }
//     }
//     console.log(grid)
//   }
//
//
// $('body').on('click',replenish)

  generateColor()
  generateLevel()
//  checkForMatch()




})
