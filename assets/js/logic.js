// when game ends, timer should stop, points should count
// make start and end STUCK, and all other pieces are randomized
// if timer hits 20s, restart random
// ability to go next level, restart
// add drag drop function
// animation for stars and ball
// scrolling background?
// if other stages needed, need to check if all combi added in code e.g. leftdown missing, downright missing

// logic file
function logic () {
  console.log('logic loaded')

  var valueArr = []
  var indexArr = []

  function checkValid (target) {
    if (!isNaN(moveNum)) {
      targetDiv = event.target
      var tempValue = targetDiv.classList[0]
      var tempID = targetDiv.id
      valueArr.push(tempValue)
      indexArr.push(tempID)

      if (valueArr.length == 2) {
        // console.log(valueArr.pop() == 'space');
        if (valueArr[valueArr.length - 1] !== 'space') {
          valueArr = []
          indexArr = []
        }
        if (valueArr[valueArr.length - 1] == 'space') {
          return moveTile()
        }
      }

      function moveTile () {
      // to get index of first click
        var x = parseInt(indexArr[0].substr(0, 1))
        var y = parseInt(indexArr[0].substr(1))
      // to get index of second click
        var x2 = parseInt(indexArr[1].substr(0, 1))
        var y2 = parseInt(indexArr[1].substr(1))
        play[x2][y2] = valueArr[0]
        play[x][y] = 'space'
        valueArr = []
        indexArr = []
        moveNum += 1
      }
    }
  }

  function checkWin () {
    var gameState = 'won'
    for (var i = 0; i < start[0].length; i++) {
      for (var j = 0; j < start[0].length; j++) {
        if (play[i][j] !== win[i][j]) {
          gameState = 'lost'
        }
      }
    }
    if (gameState == 'won') alert('won')
  }

  function randomize () {
    // Recursive function to create random array
    function rand (min, max, arr) {
      min = Math.ceil(min)
      max = Math.floor(max)
      randomNo = Math.floor(Math.random() * (max - min))

      if (arr.length == max - min) {
        return arr
      } else {
        if (!arr.includes(randomNo)) {
          arr.push(randomNo)
        }
        return rand(min, max, arr)
      }
    }

    function genRandIndex () {
      var ndArr = []
      for (var i = 0; i < 4; i++) {
        ndArr.push(rand(0, 4, []))
      }
      var l = 0
      while (l < 16) {
        for (var j = 0; j < 4; j++) {
          for (var k = 0; k < 4; k++) {
            start[j][ndArr[j][k]] = win[j][k]
          }
        }
        l++
      }
      console.log (start)
    }
    return genRandIndex()
  } // end randomize

  return {
    checkValid: checkValid,
    checkWin: checkWin,
    randomize: randomize
  }
}// end logic
