$(function(){
  $(document).keydown(function(e){
    var charPos = map[charY][charX]

    counter=0
    //playerMovement

  if(!isExit()){
    switch(e.keyCode){
      case 37: //left
      if(!checkXBlockLeft(charPos)){
        charMoveLeft()
        }
        mummyFollowChar()
        break;
      case 38: //up
      if(!checkYBlockTop(charPos)){
        charMoveUp()
        }
        mummyFollowChar()
        break;
      case 39: // right
      if(!checkXBlockRight(charPos)){
        charMoveRight()
        }
        mummyFollowChar()
        break;
      case 40: //down
      if(!checkYBlockBottom(charPos)){
        charMoveDown()
        }
        mummyFollowChar()
        break;
      }
    }else{
      exitPos = exit[charY][charX]
      switch(e.keyCode){
        case 37: //left
        if(exitPos===4){
          charMoveLeft()
          alert('win')
          }
          break;
        case 38: //up
        if(exitPos===1){
          charMoveUp()
          alert('win')
          }
          break;
        case 39: // right
        if(exitPos===2){
          charMoveRight()
          alert('win')
          }
          break;
        case 40: //down
        if(exitPos===3){
          charMoveDown()
          }
          alert('win')
          break;
        }
    }
  })
})
