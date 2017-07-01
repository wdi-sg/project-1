!!!! STOPPED AT HOW TO SPLIT THE FILES UP, AND CREATED A RIGHT MOVE ONLY, NEED TO ADD UP DOWN LEFT, AND CHECK IF VALID MOVE (0)

!!! THINK ABOUT HOW TO MAKE IT AN IMAGE (can use fonts with nice curves)

!!! how to make animation curved... (use a layering technique so the entire thing expands, but u only see a z-index portion?)


//logic file
function logic () {
  console.log('logic loaded');
  // var grid = [
  //   [0,0,0,0]
  //   [0,0,0,0]
  //   [0,0,0,0]
  //   [0,0,0,0]
  // ]



  //if clicked, trigger this func
  //assuming clicked


  function moveTileRight () {
    // what you clicked on, to be replaced by click
    var target = play[0][1]
    var temp = target
    console.log(temp);
    //var row = start.indexOf(target)
    //var col = start[row].indexOf(target)
    //start[row][col] or [col+1] to move
    start[0][1+1] = temp
    start[0][1] = 0
  }

  return {
    moveTileRight: moveTileRight
  }


}//end logic
