
// TO FIX!! current starting position of TD, TR is hardcoded!!!
// TO FIX!! take dynamic no. of moves (currenltly hardcoded at 6)
// IF FIXED, unrandomize start button random at dom62
// ability to go next level, restart
// add drag drop function
// animation for stars and ball
// scrolling background?
// if other stages needed, need to check if all combi added in code e.g. leftdown missing, downright missing
var S = {
  'topdown': {
    'topright': {
      'leftright': {
        'lefttop': 'end',
        'leftright': {
          'lefttop': 'end'
        }
      },
      'lefttop': 'end'
    }
  },
  'topright': {
    'leftright': {
      'lefttop': 'end',
      'leftright': {
        'lefttop': 'end'
      }
    },
    'lefttop': 'end'
  }
}
// logic file
function logic () {
  console.log('logic loaded')

  var valueArr = []
  var indexArr = []
  var moveArr = []
  var tempArr = []

  function checkMoveIntoSpace (target) {
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
          checkPipesConnect()
          moveTile()
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

    function popUnrecordedMoves (x) {
      var x = start
      for (var i = 0; i < start[0].length; i++) {
        for (var j = 0; j < start.length; j++) {
          if (x[i][j] == 'start') {
            if (start[i][j + 1]) { var xRight = start[i][j + 1] }
            //if (start[i][j - 1]) { var xLeft = start[i][j - 1] }
            //if (start[- 1][j]) {var xTop = start[i - 1][j]}
            if (start[i + 1][j]) {var xDown = start[i + 1][j]}
          }
        }
      }
        // if not undefined, test each one
        tempArr.push(xDown)
        if (S[tempArr[0]]) {
          moveArr.push(xDown)
        }
        else {
          tempArr = moveArr
          console.log('pipe not aligned');}

        tempArr.push(xRight)
        if (S[tempArr[0]][tempArr[1]]) {
          moveArr.push(xRight)
        }
        else {
          tempArr = moveArr
          console.log('pipe not aligned');}

      console.log(moveArr)
      console.log(tempArr);
      // needs to recursively return popUnrecordedMoves(based on next coz)
    }

    function checkPipesConnect () {
      var gameState = 'won'
      var newMove = valueArr[0]
      // console.log(newMove);
      tempArr.push(newMove)
        // to cater for adding on of arr lenght TO FIX
        console.log(tempArr);
      if (tempArr.length == 2) {
          var test = S[tempArr[0]][tempArr[1]]
        }
      if (tempArr.length == 3) {
        var test = S[tempArr[0]][tempArr[1]][tempArr[2]]
      }
      if (tempArr.length == 4) {
        var test = S[tempArr[0]][tempArr[1]][tempArr[2]][tempArr[3]]
      }
      if (tempArr.length == 5) {
        var test = S[tempArr[0]][tempArr[1]][tempArr[2]][tempArr[3]][tempArr[4]]
      }
      if (tempArr.length == 6) {
        var test = S[tempArr[0]][tempArr[1]][tempArr[2]][tempArr[3]][tempArr[4]][tempArr[5]]
      }
      //if true, moveArr takes it in
      if
       (test) {
        moveArr.push(newMove)
        if (test == 'end') { alert('game won') }
      }
      //if false temp removes it
      else {
        tempArr.pop()
        console.log('tempArr'+ tempArr);
        console.log('pipes not aligned')
      }
    }
    return {popUnrecordedMoves: popUnrecordedMoves}
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
      console.log(start)
    }
    return genRandIndex()
  } // end randomize

  return {
    checkMoveIntoSpace: checkMoveIntoSpace,
    randomize: randomize
  }
}// end logic
