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
    // grid = new Array(matrix)
    for (i = 0; i < matrix; i++) {
      grid.push([])
      // grid[i] = new Array(matrix)
      for (j = 0; j < matrix; j++) {

        //populate cells in game logic
        // grid[i][j] = generateColor()
        grid[i].push(generateColor())

        //populate cells in css
        var pos = i +","+ j
        $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[i][j])

      }
    }


    // grid[1][3] = "test"
    // grid[2][3] = "test"
    // grid[0][3] = "test"
    //
    // grid[0][3] = "test"
    // grid[0][2] = "test"
    // grid[0][1] = "test"
    // grid[0][0] = "test"
    console.log(grid)
    $cell.on('click', checkForMatch)
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

    var checker = []

    for (var x = 0 ; x < matrix; x++) {
      for (var y = 0; y < matrix; y++) {

         //check for horizontal matches
        if (grid[x][y] === grid[x][y+1] && grid[x][y] === grid[x][y+2]) {
          checker.push([x,y,'h'])
        }
        //check for vertical matches
        if (grid[x+2]) {
          if (grid[x][y] === grid[x+1][y] && grid[x][y] === grid[x+2][y]) {
            checker.push([x,y,'v'])
          }
        }
      }
    }

    if (checker.length > 0) {
      for(var i = 0; i < checker.length; i++) {
        if (checker[i][2] === 'h') {
          grid[checker[i][0]][checker[i][1]] = 0
          grid[checker[i][0]][checker[i][1] + 1] = 0
          grid[checker[i][0]][checker[i][1] + 2] = 0
        }
        if (checker[i][2] === 'v') {
          grid[checker[i][0]][checker[i][1]] = 0
          grid[checker[i][0] + 1][checker[i][1]] = 0
          grid[checker[i][0] + 2][checker[i][1]] = 0
        }
      }
    }

    console.log(checker)
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


})
