$(function () {

  var grid = [] //this is the game board
  var colorList = ['#3772FF','#FED766','#FE5F55']
  var cellColor = ""
  var matrix = 4
  var $cell = $('.cell')


  function generateLevel () {
    // create a 2D array
    //creates a new array of height & width specified by 'matrix'
    //create rows then columns, grid can be accessed with grid[row][column]
    grid = new Array(matrix)
    for (i = 0; i < matrix; i++) {
      grid[i] = new Array(matrix)
      for (j = 0; j < matrix; j++) {

        //populate cells in game logic
        grid[i][j] = generateColor()

        //populate cells in css
        var pos = i +","+ j
        $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[i][j])

      }
    }


    grid[2][1] = "test"
    grid[2][2] = "test"
    grid[2][3] = "test"

    grid[0][1] = "test"
    grid[1][1] = "test"
    grid[2][1] = "test"
    grid[3][1] = "test"
    console.log(grid)
  }





   function checkForMatch() {
    //  var index = ($(this).data('position')) //index[0], index[2]
    //  var index1 = parseInt(index[0])
    //  var index2 = parseInt(index[2])
    // //  console.log(index)
    // //  console.log(grid[index1][index2])
    //
    //  if( grid[index1][index2]===grid[index1+1][index2] && grid[index1][index2]===grid[index1+2][index2] || grid[index1-1][index2] )  {
    //    console.log('match found')
    //  }
    //  if( grid[index1][index2]===grid[index1][index2+1] && grid[index1][index2]===grid[index1][index2+2]) {
    //    console.log('match found')
    //  }

    // var copiedArr = grid.slice();
    // var temp = copiedArr[x][y];
    var tempArr = grid.slice()
    for (var x = 0 ; x < matrix; x++) {
      for (var y = 0; y < matrix; y++) {
//         // if (grid[y][x] === grid[y][x+1]) matches = 1
//

//
         //check for horizontal matches
        if (grid[x][y] === grid[x][y+1] && grid[x][y] === grid[x][y+2]) {
          //var horizontal = [ [x, y] ,[x, y+1], [x, y+2] ]

          tempArr[x][y] = 0
          tempArr[x][y+1] = 0
          tempArr[x][y+2] = 0
        }
//         //check for vertical matches
        // if (grid[x+2]) {
        //   if (grid[x][y] === grid[x+1][y] && grid[x][y] === grid[x+2][y]) {
        //     //var vertical = [ [x, y] ,[x+1, y], [x+2, y] ]
        //     //console.log(vertical);
        //     tempArr[x][y] = 0
        //     tempArr[x+1][y] = 0
        //     tempArr[x+2][y] = 0
        //   }
        // }


        }
      }
      //grid = tempGrid

//
//
//
     console.log(grid)
    }
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
  // function highlight(){
  //   $(this).css('border', '0.5px solid red')
  // }

  function generateColor() {
    return colorList[Math.floor(Math.random() * colorList.length)]
  }
  generateLevel()
  //checkForMatch()

  //$cell.on('mouseover', highlight)
  $cell.on('click', checkForMatch)

})
