// GET ALL BOXES
var $boxes = $('.box')
var $wrapper = $('.wrapper')

//allow movement?
var clicker=true

function initGame() {
  var snd = new Audio("./audio/scary.mp3"); // buffers automatically when created
  snd.play();

  // SET THE MAP
  map.forEach(function(spotY,indexY) {
    spotY.forEach(function(spot, indexX){
    switch (spot) {
      case 1:
      case 5:
      case 6:
      case 9:
      case 11:
      case 12:
      case 14:
        $wrapper.eq(indexY).find('.box').eq(indexX).addClass('top')
        break;
      }
    switch (spot) {
      case 3:
      case 7:
      case 8:
      case 9:
      case 12:
      case 13:
      case 14:
        $wrapper.eq(indexY).find('.box').eq(indexX).addClass('bottom')
        break;
      }
    switch (spot) {
      case 4:
      case 5:
      case 7:
      case 10:
      case 11:
      case 13:
      case 14:
        $wrapper.eq(indexY).find('.box').eq(indexX).addClass('left')
        break;
      }
    switch (spot) {
      case 2:
      case 6:
      case 8:
      case 10:
      case 11:
      case 12:
      case 13:
        $wrapper.eq(indexY).find('.box').eq(indexX).addClass('right')
        break;
    }
    })
  })
  // SET THE CHAR POSITION
  $wrapper.eq(charY).find('.box').eq(charX).attr('id','playerPos')
  var player = '<div id="player"></div>';
  $('#playerPos').append(player)

  // SET THE MUMMY POSITION
  $wrapper.eq(mumY).find('.box').eq(mumX).attr('id','mummyPos')
  var mummy = '<div id="mummy"></div>';
  $('#mummyPos').append(mummy);

  //SET EXIT POSITION
  exit.forEach(function(spotY,indexY) {
    spotY.forEach(function(spot, indexX){
      switch(spot){
        case 1://top
          $wrapper.eq(indexY).find('.box').eq(indexX).addClass('exitTop')
          break;
        case 2://right
          $wrapper.eq(indexY).find('.box').eq(indexX).addClass('exitRight')
          break;
        case 3://bottom
          $wrapper.eq(indexY).find('.box').eq(indexX).addClass('exitBottom')
          break;
        case 4://left
          $wrapper.eq(indexY).find('.box').eq(indexX).addClass('exitLeft')
          break;
        }
      })
    })
  }



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

//checing relative x-position of mummy to player
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


//checking relative y-position from mummy to player
function checkYPos(mumY, charY){
  if(mumY === charY){
    return true
  }else{
    return false
  }
}

function meetMummy(){
  if(checkYPos(mumY, charY) && checkXPos(mumX, charX)){
    setTimeout(function(){
      alert('Killed by Mummy, Please Press restart.')
    },300)
    clicker = false
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

function alertWin(){
  setTimeout(function(){
    alert('You Won! Please Procced to the Next Level.')
  },300)
  $('#player').remove()
  $('#nextLevel').show()
  clicker=false
}

function restart(){
  location.reload()
}
