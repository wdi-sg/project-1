$(function () {

  var grid = [] //this is the game board
  var colorList = ['blue','yellow','red']
  var cellColor = ""
  var matrix = 4
  var $cell = $('.cell')
  var chosenColors = ""

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
    chosenColors = shuffle(colorList);

    //console.log(chosenColors)
    $('h2').text(chosenColors[0])
    setInterval($('h2').text(chosenColors[1]), 2000)
    //$('h2').text(chosenColors[2])
    //$cell.on('click', )
  }




  function generateColor() {
    return colorList[Math.floor(Math.random() * colorList.length)]
  }

  function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

  generateLevel()
  //checkForMatch()

  //$cell.on('mouseover', highlight)


})
