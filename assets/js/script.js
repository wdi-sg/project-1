$(function () {

  var grid = [] //game board
  var colorList =['#3772FF','#FED766','#FE5F55']
  var matrix = 4 //length & breadth of board
  var $cell = $('.cell')
  var score = 0 // starting score
  var time = 60 // time limit of the game
  var checker = [] //to store player matches
  var gameChecker =[] //to store whole board matches

  function generateLevel () {
    //creates a new 2Darray specified by 'matrix'
    //create rows then columns, grid can be accessed with grid[row][column]
    for (i = 0; i < matrix; i++) {
      grid.push([])
      for (j = 0; j < matrix; j++) {
        grid[i].push(generateColor())

        //populate cells in css
        var pos = i +","+ j
        $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[i][j])
      }
    }
    if (checkForMatches() < 3 ) restart() //if less than 3 available moves, regenerate level
  }

    function playerMatchCells() {
      //for player to make matches
      var index = ($(this).data('position')) //index[0], index[2]
      var index1 = parseInt(index[0])
      var index2 = parseInt(index[2])

      //check if cell and next 2 cells match, then push into checker array
      //horizontal check
     if( grid[index1][index2]===grid[index1][index2+1] && grid[index1][index2]===grid[index1][index2+2]) {
       checker.push([index1, index2,'h'])
       score +=3
     }
     //vertical check
     if(grid[index1+2]) {
       if( grid[index1][index2]===grid[index1+1][index2] && grid[index1][index2]===grid[index1+2][index2])  {
         checker.push([index1, index2,'v'])
         score +=3
       }
     }

    //future functionality to check backwards
    //  if( grid[index1][index2]===grid[index1][index2-1] && grid[index1][index2]===grid[index1][index2-2]) {
    //    checker.push([index1, index2,'h'])
    //  }
    //  if(grid[index1-2]){
    //    if( grid[index1][index2]===grid[index1-1][index2] && grid[index1][index2]===grid[index1-2][index2])  {
    //      checker.push([index1, index2,'v'])
    //    }
    //  }

    //change cells to '0' when they match
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
       //reset checker
       checker = []
     }
      replenishCells()
    }


   function checkForMatches() {
     //checks if any matches exist on the whole board
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
    return gameChecker.length
    }

  function replenishCells() {
    //replenish the empty cells where matches were found by the player
    var pos = x +","+ y

    //replenish from bottom
    for (var x = matrix - 1 ; x >= 0 ; x--) {
      for (var y = matrix - 1; y >= 0 ; y--) {
        if (grid[x-1] && grid[x][y] === 0) {
          ;[ grid[x][y],grid[x-1][y] ] = [grid[x-1][y], grid[x][y] ]
          pos = x +","+ y
          $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[x][y])
          }
      }
    }
    //run again to replenish adjacent empty
    for (var x = 0 ; x < matrix ; x++) {
      for (var y = 0; y < matrix ; y++) {
        if (grid[x-1] && grid[x][y] === 0) {
          ;[ grid[x][y],grid[x-1][y] ] = [grid[x-1][y], grid[x][y] ]
          pos = x +","+ y
          $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[x][y])
          }

      }
    }
    //replenish last adjacent empty
    for (var x = 0 ; x < matrix ; x++) {
      for (var y = 0; y < matrix ; y++) {
        if (grid[x][y] === 0) {
          grid[x][y] = generateColor()
          pos = x +","+ y
         $('.cell[data-position= "'+ pos +'"]').css('backgroundColor', grid[x][y])
        }
      }
    }

    if (checkForMatches() === 0 ) {
      //if no matches remain on the board, start a new level
      alert('Level Complete!')
      restart()
    }
  }

  function generateColor() {
    return colorList[Math.floor(Math.random() * colorList.length)]
  }

  function restart() {
    //restarts level
    grid = []
    generateLevel()
  }

  function resetAll() {
    //resets the game & starts a new game
    clearInterval(timer)
    time = 60
    score = 0
    scoreboard()
    timer = setInterval(timerFn, 1000)
    restart()
  }

  function scoreboard() {
    //display score
    $('h3').text('Score: ' + score)
  }

  function bgChanger(){
    //background color changer
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var $body = $('body')
    var bgColorArray = "rgb("+r+","+g+","+b+")"
    $body.css('backgroundColor', bgColorArray)
  }

  function timerFn () {
    //countdown timer
    if (time !==0) {
      time--
      $('h2').text('Time left: ' + time +'s')
    }
    if(time === 0) {
    alert('Time is up! Click ok to start new game.')
    clearInterval(timer)
    resetAll()
    }
  }

  generateLevel()
  $cell.on('click', playerMatchCells)
  $('body').on('click', scoreboard)
  $('button').on('click', resetAll)
  setInterval(bgChanger,4000)
  var timer = setInterval(timerFn, 1000)

})
