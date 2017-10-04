$(function () {

  var grid = [] //this is the game board
  var colorList = ['blue','yellow','red']
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

    grid[0][0] = "red"
    $('.cell[data-position= "0,0"]').css('backgroundColor', grid[0][0])
    grid[0][1] = "red"
    $('.cell[data-position= "0,1"]').css('backgroundColor', grid[0][1])
    grid[0][2] = "red"
    $('.cell[data-position= "0,2"]').css('backgroundColor', grid[0][2])
    grid[0][3] = "yellow"
    $('.cell[data-position= "0,3"]').css('backgroundColor', grid[0][3])
    grid[1][0] = "blue"
    $('.cell[data-position= "1,0"]').css('backgroundColor', grid[1][0])
    grid[1][1] = "blue"
    $('.cell[data-position= "1,1"]').css('backgroundColor', grid[1][1])
    grid[1][2] = "blue"
    $('.cell[data-position= "1,2"]').css('backgroundColor', grid[1][2])
    grid[1][3] = "yellow"
    $('.cell[data-position= "1,3"]').css('backgroundColor', grid[1][3])
    grid[2][0] = "yellow"
    $('.cell[data-position= "2,0"]').css('backgroundColor', grid[2][0])
    grid[2][1] = "yellow"
    $('.cell[data-position= "2,1"]').css('backgroundColor', grid[2][1])
    grid[2][2] = "yellow"
    $('.cell[data-position= "2,2"]').css('backgroundColor', grid[2][2])
    grid[3][0] = "red"
    $('.cell[data-position= "3,0"]').css('backgroundColor', grid[3][0])
    grid[3][1] = "red"
    $('.cell[data-position= "3,1"]').css('backgroundColor', grid[3][1])
    grid[3][2] = "red"
    $('.cell[data-position= "3,2"]').css('backgroundColor', grid[3][2])
    grid[3][3] = "yellow"
    $('.cell[data-position= "3,3"]').css('backgroundColor', grid[3][3])
    grid[2][3] = "yellow"
    $('.cell[data-position= "2,3"]').css('backgroundColor', grid[2][3])


    console.log(grid)
    $cell.on('click', playerMatchCells)
  }



    function playerMatchCells() {
      var index = ($(this).data('position')) //index[0], index[2]
      var index1 = parseInt(index[0])
      var index2 = parseInt(index[2])
     //  console.log(index)
     //  console.log(grid[index1][index2])

     if( grid[index1][index2]===grid[index1][index2+1] && grid[index1][index2]===grid[index1][index2+2]) {
       checker.push([index1, index2,'h'])
     }
     if(grid[index1+2]){
       if( grid[index1][index2]===grid[index1+1][index2] && grid[index1][index2]===grid[index1+2][index2])  {
         checker.push([index1, index2,'v'])
       }
     }

    //  if( grid[index1][index2]===grid[index1][index2-1] && grid[index1][index2]===grid[index1][index2-2]) {
    //    checker.push([index1, index2,'h'])
    //  }
    //  if(grid[index1-2]){
    //    if( grid[index1][index2]===grid[index1-1][index2] && grid[index1][index2]===grid[index1-2][index2])  {
    //      checker.push([index1, index2,'v'])
    //    }
    //  }

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
       checker = []
     }
     //alert(grid)

     //replenish top row first
    //  for (var x = 0 ; x < matrix; x++) {
    //    for (var y = 0; y < matrix; y++) {
     //
    //       if(x === 0 && grid[x][y] === 0) {
    //         var pos = x +","+ y
    //         grid[x][y] = generateColor()
    //         $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[x][y])
    //       }
    //     }
    //   }
     console.log(grid)

     replenishCells()
    }

   var checker = []

   function checkForMatches() {


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
      checker = []
    }


    alert(grid)
    }


  function replenishCells() {

    for (var x = matrix - 1 ; x >= 0 ; x--) {
      for (var y = matrix - 1; y >= 0 ; y--) {
        var pos = x +","+ y


        if (grid[x-1] && grid[x][y] === 0) {

          ;[ grid[x][y],grid[x-1][y] ] = [grid[x-1][y], grid[x][y] ]
          $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[x][y])

        }

          //replenish top row
         if(x === 0 && grid[x][y] === 0) {
             grid[x][y] = generateColor()
             $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[x][y])
             }

      }
  }
        }
  //     }
  //   }
  // }
    // console.log(grid)
  // }
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
