// add timer, moves count
// make start and end STUCK, and all other pieces are randomized
// if timer hits 20s, restart random
// ability to go next level, restart
// add drag drop function
// animation for stars and ball
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

    console.log(valueArr)
    console.log(indexArr)
    if (valueArr.length == 2) {
        // console.log(valueArr.pop() == 'space');
      if (valueArr[valueArr.length - 1] !== 'space') {
        valueArr = []
        indexArr = []
        console.log('click on something with spaces')
      }
      if (valueArr[valueArr.length - 1] == 'space') {
        console.log('able to move')
        return moveTile()
      }
    } else if (valueArr.length == 1) { console.log('click on something else') }
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
      moveNum+=1
      console.log(moveNum)
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

  return {
    checkValid: checkValid,
    checkWin: checkWin,
  }
}// end logic
