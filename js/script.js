//layout for blockage
var map = [
[5,1,9,1,1,6],
[4,0,6,4,3,2],
[10,4,0,2,5,2],
[4,3,0,0,3,2],
[4,6,4,2,5,0],
[7,3,3,3,3,8]
]

//array indicating the exits
var exit = [
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,2],
[0,0,0,0,0,0],
]
//character Position
var charY = 1
var charX = 0

//mummy position
var mumX = 1
var mumY = 5

//presets for the Game
var playerMove = true;


//checking for Exit
function isExit(){
  var exitPos = exit[charY][charX]
  switch(exitPos){
    case 1:
    case 2:
    case 3:
    case 4:
      return true
    default:
      return false
  }
}

//checing x-position
function checkXPos(mumX, charX){
  if(mumX === charX){
    return true
  }else{
    return false
  }
}

//checking move left or right
function leftRight(){
  //Move Left: true
  //Move Right: false
  return (mumX > charX)
}

function upDown(){
  //move up: true
  //move down: false
  return (mumY > charY)
}


//checking y-position
function checkYPos(mumY, charY){
  if(mumY === charY){
    return true
  }else{
    return false
  }
}

//checking x-blockage
function checkXBlockLeft(x){
  switch(x){
    case 4:
    case 5:
    case 7:
    case 10:
    case 11:
    case 13:
    case 14:
      return true;
      break;
    default:
      return false;
    }
}
function checkXBlockRight(x){
  switch(x){
    case 2:
    case 6:
    case 8:
    case 10:
    case 11:
    case 12:
    case 13:
      return true;
      break;
    default:
      return false;
    }
}

//checkingYBlockage
function checkYBlockTop(x){
  switch(x){
    case 1:
    case 5:
    case 6:
    case 9:
    case 11:
    case 12:
    case 14:
      return true;
      break;
    default:
      return false;
    }
}
function checkYBlockBottom(x){
  switch(x){
    case 3:
    case 7:
    case 8:
    case 9:
    case 12:
    case 13:
    case 14:
      return true;
      break;
    default:
      return false;
    }
}

function restart(){
  // location.reload();
}
