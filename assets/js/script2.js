//experimental file - not in use

$(function () {

  var grid = [] //this is the game board

  //var colorList = ['blue','yellow','red']  //for testing
  var colorList =['#3772FF','#FED766','#FE5F55']
  var cellColor = ""
  var matrix = 4
  var $cell = $('.cell')
  var score = 0
  var $divCell = $('<div class="cell">')




    //create cells
  for (var counter = 0; counter < matrix ** 2 ; counter++) {
  $('.wrapper').append($divCell.clone())
  }


  for (i = 0; i < matrix; i++) {
    grid.push([])
    // grid[i] = new Array(matrix)
    for (j = 0; j < matrix; j++) {
       grid[i][j] = '[' + i + ', ' + j + ']'
     }
  }


  for (var x = 0 ; x < matrix; x++) {
    for (var y = 0; y < matrix; y++) {
      $.each($('.cell'), function() {
      $('.cell').attr('data-position', grid[x][y])
      })
    }
  }



  function generateLevel () {

    // create a 2D array
    //creates a new array of height & width specified by var 'matrix'
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

    //for testing
    // grid[0][0] = "red"
    // $('.cell[data-position= "0,0"]').css('backgroundColor', grid[0][0])
    // grid[0][1] = "red"
    // $('.cell[data-position= "0,1"]').css('backgroundColor', grid[0][1])
    // grid[0][2] = "red"
    // $('.cell[data-position= "0,2"]').css('backgroundColor', grid[0][2])
    // grid[0][3] = "blue"
    // $('.cell[data-position= "0,3"]').css('backgroundColor', grid[0][3])
    // grid[1][0] = "blue"
    // $('.cell[data-position= "1,0"]').css('backgroundColor', grid[1][0])
    // grid[1][1] = "blue"
    // $('.cell[data-position= "1,1"]').css('backgroundColor', grid[1][1])
    // grid[1][2] = "blue"
    // $('.cell[data-position= "1,2"]').css('backgroundColor', grid[1][2])
    // grid[1][3] = "yellow"
    // $('.cell[data-position= "1,3"]').css('backgroundColor', grid[1][3])
    // grid[2][0] = "yellow"
    // $('.cell[data-position= "2,0"]').css('backgroundColor', grid[2][0])
    // grid[2][1] = "yellow"
    // $('.cell[data-position= "2,1"]').css('backgroundColor', grid[2][1])
    // grid[2][2] = "yellow"
    // $('.cell[data-position= "2,2"]').css('backgroundColor', grid[2][2])
    // grid[3][0] = "red"
    // $('.cell[data-position= "3,0"]').css('backgroundColor', grid[3][0])
    // grid[3][1] = "red"
    // $('.cell[data-position= "3,1"]').css('backgroundColor', grid[3][1])
    // grid[3][2] = "red"
    // $('.cell[data-position= "3,2"]').css('backgroundColor', grid[3][2])
    // grid[3][3] = "yellow"
    // $('.cell[data-position= "3,3"]').css('backgroundColor', grid[3][3])
    // grid[2][3] = "yellow"
    // $('.cell[data-position= "2,3"]').css('backgroundColor', grid[2][3])
    // console.log(grid)
    if (checkForMatches() < 3 ) restart()
  }

  $cell.on('click', playerMatchCells)


    function playerMatchCells() {
      var index = ($(this).data('position')) //index[0], index[2]
      var index1 = parseInt(index[0])
      var index2 = parseInt(index[2])


     if( grid[index1][index2]===grid[index1][index2+1] && grid[index1][index2]===grid[index1][index2+2]) {
       checker.push([index1, index2,'h'])
       score +=3
     }
     if(grid[index1+2]) {
       if( grid[index1][index2]===grid[index1+1][index2] && grid[index1][index2]===grid[index1+2][index2])  {
         checker.push([index1, index2,'v'])
         score +=3
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

     console.log(grid)
      replenishCells()

    }

   var checker = []
   var gameChecker =[]

   function checkForMatches() {

    gameChecker = []
    for (var x = 0 ; x < matrix; x++) {
      for (var y = 0; y < matrix; y++) {

         //check for horizontal matches
        if (grid[x][y] === grid[x][y+1] && grid[x][y] === grid[x][y+2]) {
          gameChecker.push([x,y,'h'])
        }
        //check for vertical matches
        if (grid[x+2]) {
          if (grid[x][y] === grid[x+1][y] && grid[x][y] === grid[x+2][y]) {
            gameChecker.push([x,y,'v'])
          }
        }
      }
    }

    // if (checker.length > 0) {
    //   return true
    // }

    //console.log (gameChecker.length)
    return gameChecker.length


    }


  function replenishCells() {
    var pos;

    for (var x = matrix - 1 ; x >= 0 ; x--) {
      for (var y = matrix - 1; y >= 0 ; y--) {
    // for (var x = 0 ; x < matrix ; x++) {
    //   for (var y = 0; y < matrix ; y++) {
        pos = x +","+ y

        if (grid[x-1] && grid[x][y] === 0) {
          ;[ grid[x][y],grid[x-1][y] ] = [grid[x-1][y], grid[x][y] ]
          $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[x][y])
          }
      }
    }

    for (var x = 0 ; x < matrix ; x++) {
      for (var y = 0; y < matrix ; y++) {
        pos = x +","+ y

        if (grid[x-1] && grid[x][y] === 0) {
          ;[ grid[x][y],grid[x-1][y] ] = [grid[x-1][y], grid[x][y] ]
          $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[x][y])
          }

      }
    }

    for (var x = 0 ; x < matrix ; x++) {
      for (var y = 0; y < matrix ; y++) {

        if (grid[x][y] === 0) {
          pos = x +","+ y
          grid[x][y] = generateColor()
         $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[x][y])
        }
      }
    }

    if (checkForMatches() === 0 ) {

      alert('Level Complete!')
      restart()
    //console.log(grid)
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

  function restart() {
    grid = []
    generateLevel()
  }

  function resetAll() {
    score = 0
    restart()
  }

  function scoreboard() {
    console.log(score)
    $('h3').text('Score: ' + score)
  }

  function bgChanger(){

    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var $body = $('body')
    var bgColorArray = "rgb("+r+","+g+","+b+")"
    console.log(bgColorArray)

    $body.css('backgroundColor', bgColorArray)
    //simple assignment => create random color within rbg
    //2nd assignment => changing gradually
  }


  //generateLevel()
  $('body').on('click', scoreboard)
  $('button').on('click', resetAll)
  setInterval(bgChanger,4000)


  //$cell.on('mouseover', highlight)


})
