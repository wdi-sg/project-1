

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
  'lefttop': 'end',
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
      if (Boolean(tempValue)===true){
        valueArr.push(tempValue)}
      if (Boolean(tempValue)===true){indexArr.push(tempID)}
      if (valueArr.length == 2) {
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
        var x1 = parseInt(indexArr[0].substr(0, 1))
        var y1 = parseInt(indexArr[0].substr(1))
      // to get index of second click
        var x2 = parseInt(indexArr[1].substr(0, 1))
        var y2 = parseInt(indexArr[1].substr(1))
        play[x2][y2] = valueArr[0]
        play[x1][y1] = 'space'
        valueArr = []
        indexArr = []
        moveNum += 1
      }
    }
    // populates unrecorded moves around x
    var count = 0
    var match = ''
    var state = true
    var xRight = ''
    var xLeft = ''
    var xTop = ''
    var xDown = ''
    function popUnrecordedMoves (x) {
      if (state && count <2) {
      for (var i = 0; i < start[0].length; i++) {
        for (var j = 0; j < start.length; j++) {
          if (start[i][j] == x) {
            if (j !== 3) { xRight = start[i][j + 1] }
            if (j !== 0) { xLeft = start[i][j - 1] }
            if (i !== 0) { xTop = start[i - 1][j] }
            if (i !== 3) { xDown = start[i + 1][j] }
          }
        }
      }
      // console.log(xRight)
      // console.log(xLeft)
      // console.log(xTop)
      // console.log(xDown)

    chkTile(xRight)
    chkTile(xLeft)
    chkTile(xDown)
    chkTile(xTop)

    state = false
    if (match === 'pipe match') {state = true}
    //console.log(count);
    count++
    return popUnrecordedMoves(xDown)
  }

      //recursively check next
      // if (chkTile(xDown)) {console.log('loop ran?')
      //   return popUnrecordedMoves(xDown)}
      //
      // if (chkTile(xRight)==true) {
      //   console.log('loopshouldrun')
      //   popUnrecordedMoves(xRight)}
      // if (chkTile(xLeft)==true) {
      //   console.log('loopshouldrun')
      //   popUnrecordedMoves(xLeft)}
      // if (chkTile(xTop)==true) {
      //   console.log('loopshouldrun')
      // popUnrecordedMoves(xTop)}
      // if (chkTile(xDown)==true) {console.log('loopshouldrun');popUnrecordedMoves(xDown)}

      function chkTile (t) {
        tempArr.push(t)
        if (tempArr.length == 1) {
          if (S[tempArr[0]]) {
            moveArr.push(t)
            tempArr.push(t)
            match = 'pipe match'

          }
        }
        if (tempArr.length == 2) {
          if (S[tempArr[0]][tempArr[1]]) {
            moveArr.push(t)
            tempArr.push(t)
            match = 'pipe match'

          }
        }
        if (tempArr.length == 3) {
          if (S[tempArr[0]][tempArr[1]][tempArr[2]]) {
            moveArr.push(t)
            tempArr.push(t)
            match = 'pipe match'

          }
        }
        if (tempArr.length == 4) {
          if (S[tempArr[0]][tempArr[1]][tempArr[2]][tempArr[3]]) {
            moveArr.push(t)
            tempArr.push(t)
            match = 'pipe match'
          }
        }
        else {
          tempArr.pop()
        }
      } //end checkTile

      // needs to recursively return popUnrecordedMoves(based on next coz)
    } //end popUnrecordedMoves


    function checkPipesConnect () {
      var gameState = 'won'
      var newMove = valueArr[0]
      // console.log(newMove);
      tempArr.push(newMove)
        // to cater for adding on of arr lenght TO FIX
      if (tempArr.length == 1) {
        var test = S[tempArr[0]]
      }
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
      // if true, moveArr takes it in
      if
       (test) {
        moveArr.push(newMove)
        console.log('moveArr' + moveArr);
        if (test == 'end') { alert('game won') }
      }
      // if false temp removes it
      else {
        tempArr.pop()
        console.log('pipes not aligned')
      }
    } //ends checkPipesConnect
    return {popUnrecordedMoves: popUnrecordedMoves}
  } //ends checkMoveIntoSpace

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
