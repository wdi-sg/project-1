// !!!! STOPPED AT HOW TO SPLIT THE FILES UP, AND CREATED A RIGHT MOVE ONLY, NEED TO ADD UP DOWN LEFT, AND CHECK IF VALID MOVE (0)
//
// !!! THINK ABOUT HOW TO MAKE IT AN IMAGE (can use fonts with nice curves)
//


//logic file
function logic () {
  console.log('logic loaded');
  // var grid = [
  //   [0,0,0,0]
  //   [0,0,0,0]
  //   [0,0,0,0]
  //   [0,0,0,0]
  // ]

function moveTileRight (target) {
    // what you clicked on, to be replaced by click
    targetDiv = event.currentTarget
    targetImg = event.target
    var tempValue = targetImg.alt //stores value e.g. LT
    var tempID = targetDiv.id //stores value e.g. 01
    var x = parseInt(tempID.substr(0,1))
    var y = parseInt(tempID.substr(1))
    play[x][y+1]  = tempValue
    play[x][y] = 0
    console.log(play);
    }
    return {
    moveTileRight: moveTileRight
  }


}//end logic
