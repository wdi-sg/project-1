$(function() {
  $body.on('keydown', ballMove)
  // $body.on('keydown', ballJump)
  function ballMove(e) {
    var unit = 30
    if (e.key === 'd' || e.key === 'D' || e.key === "ArrowLeft") {
      if (ball1Goal() === false) if (borderCheck1Right()) ball1Hori(unit) //if ball1 doesn't exceed right border
      if (ball2Goal() === false) if (borderCheck2Left()) ball2Hori(unit) //opposite side for ball2
    }
    if (e.key === 'a' || e.key === 'A' || e.key === "ArrowRight") {
      if (ball1Goal() === false) if (borderCheck1Left()) ball1Hori(-unit)
      if (ball2Goal() === false) if (borderCheck2Right()) ball2Hori(-unit)
    }
    if (e.key === 'w' || e.key === 'W' || e.key === "ArrowUp") {
      if (jumpLimit === true) ballJump()
    }
  }

  createGoal("110px","30px",$('#game1'))
  createGoal("110px","220px",$('#game2'))
  setInterval(ballSnap,500) //checking if border exceeds
  setInterval(levelClear,1000)
  setInterval(gravity1, 10)
  setInterval(gravity2, 10)
  createPlatform("100px","0",$('#game1'),"300px","5px")
  createPlatform("100px","0",$('#game2'),"300px","5px")
  // console.log('number of platform',$('.platform').length)
})

var $ball1 = $('#ball1')
var $ball2 = $('#ball2')
var $body = $('body')
var goalLevel = 1 // to assign goal Id's for each play field
var gravity = 70
var platformNo = 1
var gLock = false
var allowance = 0.5
var jumpLimit = true

//this controls horizontal ball movement
function ball1Hori(a) {
  document.getElementById("ball1").style.left = (Number($ball1.css('left').replace('px',''))+a).toString()+"px"
}
function ball2Hori(a) {
  document.getElementById("ball2").style.left = (Number($ball2.css('left').replace('px',''))-a).toString()+"px"
}

//these are checks on the game border to see if hori movement can proceed
function borderCheck1Right() {
  if (Number($ball1.css('left').replace("px","")) < $('.half').width() - $ball1.width()){
    return true // condition to keep ball1 within right border
  }
  else return false
}
function borderCheck2Right() {
  if (Number($ball2.css('left').replace("px","")) < $('.half').width() - $ball2.width()){
    return true
  }
  else return false
}
function borderCheck1Left() {
  if (Number($ball1.css('left').replace("px","")) >= 0){
    return true
  }
  else return false
}
function borderCheck2Left() {
  if (Number($ball2.css('left').replace("px","")) >= 0){
    return true
  }
  else return false
}

function ballJump() {
  jumpLimit = false
    console.log(jumpLimit)
    gLock = true
    for (j = 0; j < $('.balls').length; j ++) {
    $('.balls').eq(j).css("top", (Number($('.balls').eq(j).css("top").replace("px","")) - 9*$('.balls').height()).toString() + "px")
    }
  setTimeout( () => {jumpLimit = true}, 1000)
  setTimeout( () => {gLock = false},100)
}

// snap ball back to edge of frame if it is out of play field
function ballSnap() {
  if (borderCheck1Right() !== true) {
    $ball1.css('left',($('.half').width()-$ball1.width()).toString()+"px")
  }
  if (borderCheck2Right() !== true) {
    $ball2.css('left',($('.half').width()-$ball2.width()).toString()+"px")
  }
  if (borderCheck1Left() !== true) {
    $ball1.css('left',"0px")
  }
  if (borderCheck2Left() !== true) {
    $ball2.css('left',"0px")
  }
}

//goal creation constructor to customize goals in different levels
class goal {
  constructor (color = "black", width = "23px", height = "23px", top, left, id) {
    this.color = color
    this.width = width
    this.height = height
    this.top = top
    this.left = left
  }
}
  function createGoal(topPixels,leftPixels, half) {

    var goalCreate = new goal()
    console.log(goalCreate)

    var $goalCreate = $('<div class = goal>')
    $goalCreate.css({
      backgroundColor: goalCreate.color,
      width: goalCreate.width,
      height: goalCreate.height,
      top: topPixels,
      left: leftPixels,
      position: 'relative',
      display: 'inline-block',
      opacity: 0.5,
      // float: 'left'
    })
    $goalCreate.attr('id',goalLevel.toString())
    goalLevel ++
    half.append($goalCreate)
  }

// to check if respective balls have reached their target
function ball1Goal() {
  // console.log('checking ball1Goal')
  if (($ball1.position().left < $('.goal:first').position().left + $('.goal:first').width()) &&
      ($ball1.position().top < $('.goal:first').position().top + $('.goal:first').height()) &&
      ($ball1.position().left + $ball1.width() > $('.goal:first').position().left) &&
      ($ball1.position().top + $ball1.height() > $('.goal:first').position().top)){
    $('.goal:first').css("backgroundColor","white")
    return true
  }
  else return false
}

function ball2Goal() {
  // console.log('checking ball2Goal')
  if (($ball2.position().left < $('.goal:last').position().left + $('.goal:last').width()) &&
      ($ball2.position().top < $('.goal:last').position().top + $('.goal:last').height()) &&
      ($ball2.position().left + $ball2.width() > $('.goal:last').position().left) &&
      ($ball2.position().top + $ball2.height() > $('.goal:last').position().top)){
    $('.goal:last').css("backgroundColor","white")
    return true
  }
  else return false
}

function levelClear() {
  if (ball1Goal() === true && ball2Goal() === true){
    // $('#p1').remove()
    // $('#p2').remove()
    console.log('win')
  }
}
//these cause the balls to fall downward
var seconds1 = 0 //TODO: need to adjust such that it only starts counting when ball is floating
function gravity1() {
  if (!gLock) {
    var $ball1Height = $ball1.css("top")
    for (i = 0; i < $('.platform').length; i ++){
      if(($ball1.position().left < $('.platform').eq(i).position().left + $('.platform').eq(i).width()) &&
      ($ball1.position().left + $ball1.width() >= $('.platform').eq(i).position().left) &&
      ($ball1.position().top + $ball1.height() >= $('.platform').eq(i).position().top - allowance) &&
      ($ball1.position().top + $ball1.height() <= $('.platform').eq(i).position().top + $('.platform').height())){
        $ball1.css("top", $ball1.css("top"))
        seconds1 = 0
        // console.log('hit')
        return
      }
      else {
        seconds1 += 0.02 //to tally against the gravity setInterval
        $ball1.css("top",(Number($ball1Height.replace("px",""))+(0.5*gravity*seconds1^2)).toString() + "px")
        // console.log("ball1 descent time",seconds1)
        // console.log("ball1 height",$ball1Height)
      }
    }
  }
}

var seconds2 = 0
function gravity2() {
  if (!gLock) {
    var $ball2Height = $ball2.css("top")
    for (i = 0; i < $('.platform').length; i ++){
    if(($ball2.position().left < $('.platform').eq(i).position().left + $('.platform').eq(i).width()) &&
    ($ball2.position().left + $ball2.width() >= $('.platform').eq(i).position().left) &&
    ($ball2.position().top + $ball2.height() >= $('.platform').eq(i).position().top - allowance) &&
    ($ball2.position().top + $ball2.height() <= $('.platform').eq(i).position().top + $('.platform').eq(i).height())){
      $ball2.css("top", $ball2.css("top"))
      seconds2 = 0
      // console.log('hit')
      return
    }
    // console.log("ball2 descent time",seconds2)
    // console.log("ball2 height",$ball2Height)
    else {
    seconds2 +=0.02 //independent gravity timer counter so that their vertical acceleration is independent
    $ball2.css("top",(Number($ball2Height.replace("px",""))+(0.5*gravity*seconds2^2)).toString() + "px")
      }
    }
  }
}

//platform creation constructor to customize layout in different levels
class platform {
  constructor (color = "black", width = "100px", height = "5px", top, left, id) {
    this.color = color
    this.width = width
    this.height = height
    this.top = top
    this.left = left
  }
}
  function createPlatform(topPixels,leftPixels, half, width, height) {

    var platformCreate = new platform()
    // console.log(platformCreate)

    var $platformCreate = $('<div class = platform>')
    $platformCreate.css({
      backgroundColor: platformCreate.color,
      width: width,
      height: height,
      top: topPixels,
      left: leftPixels,
      position: 'relative',
      display: 'inline-block',
      // float: 'left'
    })
    $platformCreate.attr('id','p'+platformNo.toString())
    platformNo ++
    half.append($platformCreate)
  }
