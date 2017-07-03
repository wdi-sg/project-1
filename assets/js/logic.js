// !!!! STOPPED AT HOW TO SPLIT THE FILES UP, AND CREATED A RIGHT MOVE ONLY, NEED TO ADD UP DOWN LEFT, AND CHECK IF VALID MOVE (0)
//
// !!! THINK ABOUT HOW TO MAKE IT AN IMAGE (can use fonts with nice curves)
//


//logic file
function logic () {
  console.log('logic loaded');

function checkValid () {

}

function moveTileRight (target) {

    targetDiv = event.target
    //console.log(targetDiv);
    //targetImg = event.target
    var tempValue = targetDiv.classList[0] //stores value e.g. LT
    //console.log(tempValue)
    var tempID = targetDiv.id
    //console.log(tempID); //stores value e.g. 01
    var x = parseInt(tempID.substr(0,1))
    var y = parseInt(tempID.substr(1))
    if (play[x][y+1] == '0'){
    play[x][y+1]  = tempValue
    play[x][y] = '0'
    console.log(play);
    }
    }
  return {
    moveTileRight: moveTileRight,
  }

}//end logic
