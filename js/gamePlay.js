$(function(){
  initGame()
  $(document).keydown(function(e){
    var charPos = map[charY][charX]
    counter=0
    
    //playerMovement
  if(!isExit() && clicker){
    switch(e.keyCode){
      case 37: //left
      if(!checkXBlockLeft(charPos)){
        charMoveLeft()
        }
        mummyFollowChar()
        meetMummy()
        break;
      case 38: //up
      if(!checkYBlockTop(charPos)){
        charMoveUp()
        }
        mummyFollowChar()
        meetMummy()
        break;
      case 39: // right
      if(!checkXBlockRight(charPos)){
        charMoveRight()
        }
        mummyFollowChar()
        meetMummy()
        break;
      case 40: //down
      if(!checkYBlockBottom(charPos)){
        charMoveDown()
        }
        mummyFollowChar()
        meetMummy()
        break;
      }
    }else{
      exitPos = exit[charY][charX]
      switch(e.keyCode){
        case 37: //left
        if(exitPos===4){
          charMoveLeft()
          alertWin()
          }
          break;
        case 38: //up
        if(exitPos===1){
          charMoveUp()
          alertWin()
          }
          break;
        case 39: // right
        if(exitPos===2){
          charMoveRight()
          alertWin()
          }
          break;
        case 40: //down
        if(exitPos===3){
          charMoveDown()
          alertWin()
          }
          break;
        }
    }
  })


  $('#restart').on('click', function(){
    restart()
  })
})
