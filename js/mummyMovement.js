function mummyMoveX(){
  var mumPosition = $('#mummy').position()
  var mumPos = map[mumY][mumX]
  if(!checkXPos(mumX, charX)){
    if(leftRight() && !checkXBlockLeft(mumPos)){//move left
      $('#mummy').css('left', mumPosition.left - 100 +'px')
      mumX--
      counter++
    }else if(!leftRight() && !checkXBlockRight(mumPos)){//move right
      $('#mummy').css('left', mumPosition.left + 100 +'px')
      mumX++
      counter++
    }
  }
}

function mummyMoveY(){
  var mumPosition = $('#mummy').position()
  var mumPos = map[mumY][mumX]
  if (!checkYPos(mumY, charY)){
    if(upDown() && !checkYBlockTop(mumPos)){//move up
      $('#mummy').css('top', mumPosition.top -100 +'px')
      mumY--
      counter++
    }else if(!upDown()&&!checkYBlockBottom(mumPos)){//move down
      $('#mummy').css('top', mumPosition.top + 100 +'px')
      mumY++
      counter++
    }
  }
}

function mummyFollowChar(){
  counter = 0
  mumPos = map[mumY][mumX]
  if(counter <2){
    mummyMoveX()
  }
  if(counter <2){
    mummyMoveX()
  }
  if(counter <2){
    mummyMoveY()
  }
  if(counter <2){
    mummyMoveY()
  }
}
