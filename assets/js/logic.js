
var S = {
  'topdown': {
    'topright': {
      'leftright': {
        'lefttop': {'end': 'win'},
        'leftright': {
          'lefttop': {'end': 'win'}
        }
      },
      'lefttop': {'end': 'win'}
    }
  },
  'lefttop': 'end',
  'topright': {
    'leftright': {
      'lefttop': {'end': 'win'},
      'leftright': {
        'lefttop': {'end': 'win'}
      }
    },
    'lefttop': {'end': 'win'}
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
      if (Boolean(tempValue) === true) {
        valueArr.push(tempValue)
      }
      if (Boolean(tempValue) === true) { indexArr.push(tempID) }
      if (valueArr.length == 2) {
        if (valueArr[valueArr.length - 1] !== 'space' || valueArr[0] == 'start') {
          valueArr = []
          indexArr = []
        }
        if (valueArr[valueArr.length - 1] == 'space' && valueArr[0]!== 'start') {
          setTimeout(function(){checkTileSeqFromS('X0Y0')},1000)
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
    var state = true
    function checkTileSeqFromS (x) {
      var match = ''
      var xRightVal = ''
      var xLeftVal = ''
      var xTopVal = ''
      var xDownVal = ''
      if (state && count < 2) {
        var tempX = parseInt(x.substr(1, 2))
        var tempY = parseInt(x.substr(3, 4))
        if (tempY !== 3) { xRightVal = 'R' + start[tempX][tempY + 1] }
        if (tempY !== 0) { xLeftVal = 'L' + start[tempX][tempY - 1] }
        if (tempX !== 0) { xTopVal = 'T' + start[tempX - 1][tempY] }
        if (tempX !== 3) { xDownVal = 'D' + start[tempX + 1][tempY] }
            // index
        if (tempY !== 3) { xRightInd = 'X' + tempX + 'Y' + parseInt(tempY + 1) }
        if (tempY !== 0) { xLeftInd = 'X' + tempX + 'Y' + +parseInt(tempY - 1) }
        if (tempX !== 0) { xTopInd = 'X' + parseInt(tempX - 1) + 'Y' + tempY }
        if (tempX !== 3) { xDownInd = 'X' + parseInt(tempX + 1) + 'Y' + tempY }

        console.log('x is ' + tempX + tempY)
        console.log('right ' + xRightVal)
        console.log('left ' + xLeftVal)
        console.log('top ' + xTopVal)
        console.log('down ' + xDownVal)

        if (xRightVal) { chkTile(xRightVal) }
        if (xLeftVal) { chkTile(xLeftVal) }
        if (xDownVal) { chkTile(xDownVal) }
        if (xTopVal) { chkTile(xTopVal) }
    // console.log('checkTileRan' + x + moveArr);
    // console.log('checkTileRan' + x + tempArr);
        state = false
        console.log(match)
        var directionMatch = match.substr(0, 1)
    // match = 'pipe match'
        if (match.substr(-10) === 'pipe match') {
          state = true
          direction(directionMatch)
        }
        console.log(count)
        count++
    // recursively check for next
        function direction (d) {
          if (d == 'D') {
            return checkTileSeqFromS(xDownInd)
          }
          if (d == 'R') {
            return checkTileSeqFromS(xRightInd)
          }
          if (d == 'T') {
            return checkTileSeqFromS(xTopInd)
          }
          if (d == 'L') {
            return checkTileSeqFromS(xLeftInd)
          }
        }
    // checkTileSeqFromS(xDownInd)
    // checkTileSeqFromS(xRightInd)
      }

      function chkTile (dt) {
        var t = dt.substr(1)
        if (!t == '') { tempArr.push(t) }
        console.log('tempArr' + tempArr)

        if (tempArr.length == 1) {
          if (S[tempArr[0]]) {
            moveArr.push(t)
            if (tempArr) { tempArr.push(t) }
            match = dt + 'pipe match'
          }
        } else if (tempArr.length == 2) {
          if (S[tempArr[0]][tempArr[1]]) {
            moveArr.push(t)
            if (tempArr) { tempArr.push(t) }
            match = dt + 'pipe match'
          }
        } else if (tempArr.length == 3) {
          if (S[tempArr[0]][tempArr[1]][tempArr[2]]) {
            moveArr.push(t)
            if (tempArr) { tempArr.push(t) }
            match = dt + 'pipe match'
          }
        } else if (tempArr.length == 4) {
          if (S[tempArr[0]][tempArr[1]][tempArr[2]][tempArr[3]]) {
            moveArr.push(t)
            tempArr.push(t)
            match = dt + 'pipe match'
          }
        } else if (tempArr.length == 5) {
          if (S[tempArr[0]][tempArr[1]][tempArr[2]][tempArr[3]][tempArr[4]]) {
            moveArr.push(t)
            tempArr.push(t)
            match = dt + 'pipe match'
          }
        }
        if (tempArr.includes('end')) { alert('won') } else {
          tempArr.pop()
        }
      } // end checkTile
      console.log(moveArr)
      moveArr = []
      tempArr = []
    } // end checkTileSeqFromS

    return {checkTileSeqFromS: checkTileSeqFromS}
  }   // ends checkMoveIntoSpace

    // function checkPipesConnect () {
    //   var gameState = 'won'
    //   var newMove = valueArr[0]
    //   // console.log(newMove);
    //   tempArr.push(newMove)
    //     // to cater for adding on of arr lenght TO FIX
    //   if (tempArr.length == 1) {
    //     var test = S[tempArr[0]]
    //   }
    //   if (tempArr.length == 2) {
    //     var test = S[tempArr[0]][tempArr[1]]
    //   }
    //   if (tempArr.length == 3) {
    //     var test = S[tempArr[0]][tempArr[1]][tempArr[2]]
    //   }
    //   if (tempArr.length == 4) {
    //     var test = S[tempArr[0]][tempArr[1]][tempArr[2]][tempArr[3]]
    //   }
    //   if (tempArr.length == 5) {
    //     var test = S[tempArr[0]][tempArr[1]][tempArr[2]][tempArr[3]][tempArr[4]]
    //   }
    //   if (tempArr.length == 6) {
    //     var test = S[tempArr[0]][tempArr[1]][tempArr[2]][tempArr[3]][tempArr[4]][tempArr[5]]
    //   }
    //   // if true, moveArr takes it in
    //   if
    //    (test) {
    //     moveArr.push(newMove)
    //     console.log('moveArr' + moveArr);
    //     if (test == 'end') { alert('game won') }
    //   }
    //   // if false temp removes it
    //   else {
    //     tempArr.pop()
    //     console.log('pipes not aligned')
    //   }
    // } //ends //checkPipesConnect

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
      start[0][0] = 'start'
      start[1][3] = 'end'
      // console.log(start)
    }
    return genRandIndex()
  } // end randomize

  return {
    checkMoveIntoSpace: checkMoveIntoSpace,
    randomize: randomize
  }
}// end logic
