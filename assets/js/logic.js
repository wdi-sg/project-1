// 1. add timer, moves count
// if timer hits 20s, restart random
// ability to go next level, restart
// 2. add drag drop function
//animation for stars and ball
//

// logic file
function logic () {
  console.log('logic loaded')

  var valueArr = []
  var indexArr = []

  function checkValid (target) {
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
        return moveTileRight()
      }
    } else if (valueArr.length == 1) { console.log('click on something else') }

    function moveTileRight () {
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
      console.log(play)
    }
  }
  return {
    checkValid: checkValid
    // moveTileRight: moveTileRight
  }
}// end logic
