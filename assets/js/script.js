$(function() {
  $body.on('keydown', ballMove)
  // $body.on('keydown', ballJump)
  function ballMove(e) {
    var unit = 20
    if (e.key === 'd' || e.key === 'D' || e.key === "ArrowRight") {
      if (ball1Goal() === false && (borderCheck1Right()) && (blockCheck1Right())) ball1Hori(unit) //if ball1 doesn't exceed right border
      // if (ball1Goal() === false && (borderCheck1Right())) ball1Hori(unit) //if ball1 doesn't exceed right border
      if (ball2Goal() === false && (borderCheck2Left()) && (blockCheck2Left())) ball2Hori(unit) //opposite side for ball2
      // if (ball2Goal() === false && (borderCheck2Left())) ball2Hori(unit) //opposite side for ball2
    }
    if (e.key === 'a' || e.key === 'A' || e.key === "ArrowLeft") {
      if (ball1Goal() === false && (borderCheck1Left()) && (blockCheck1Left())) ball1Hori(-unit)
      // if (ball1Goal() === false && (borderCheck1Left())) ball1Hori(-unit)
      if (ball2Goal() === false && (borderCheck2Right()) && (blockCheck2Right())) ball2Hori(-unit)
      // if (ball2Goal() === false && (borderCheck2Right())) ball2Hori(-unit)
    }
    if (e.key === 'w' || e.key === 'W' || e.key === "ArrowUp") {
      if (jumpLimit) {
        if(!ball1Goal()) ball1Jump()
        if(!ball2Goal()) ball2Jump()
      }
    }
  }

  createGoal("110px","30px",$('#game1'))
  createGoal("110px","220px",$('#game2'))
  createPlatform("100px","0",$('#game1'),"300px","5px","floor")
  createPlatform("60px","190px",$('#game1'),"50px","50px","wall1")
  createPlatform("100px","0",$('#game2'),"300px","5px","floor")
  createPlatform("60px","60px",$('#game2'),"50px","50px","wall2")
  console.log($('.wall1').length)
  setInterval(ballSnap,500) //checking if border exceeds
  setInterval(gravity1, 30)
  setInterval(gravity2, 30)
})

var checkClear = setInterval(levelClear,1000)
var $ball1 = $('#ball1')
var $ball2 = $('#ball2')
var $body = $('body')
var goalLevel = 1 // to assign goal Id's for each play field
var gravity = 30 // gravity multiplier
var platformNo = 1 // to assign platform Id's
var gLock = false // toggle for gravity
var allowance = 0 // to accomodate for gravity stopping distance, i.e. hover value
var jumpLimit = true // switch for jump

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
  if (Number($ball1.css('left').replace("px","")) > 0){
    return true
  }
  else return false
}
function borderCheck2Left() {
  if (Number($ball2.css('left').replace("px","")) > 0){
    return true
  }
  else return false
}
// console.log($('.wall1').length)

function collision(i) {
  if(($ball1.position().left < $('.wall1').eq(0).position().left + $('.wall1').eq(0).width()) &&
     ($ball1.position().left + $ball1.width() > $('.wall1').eq(0).position().left) &&
     ($ball1.position().top > $('.wall1').eq(0).position().top) &&
     ($ball1.position().top + $ball1.height() < $('.wall1').eq(0).position().top + $('.wall1').eq(0).height())) {
       console.log("triggered col")
     }
  else console.log("no trigger")
}
function blockCheck1Left() {
    for (var l = 0; l < 2; l ++) {
        if(($ball1.position().left <= $('.wall1').eq(l).position().left + $('.wall1').eq(l).width()) &&
           ($ball1.position().left > $('.wall1').eq(l).position().left) &&
           ($ball1.position().top >= $('.wall1').eq(l).position().top) &&
           ($ball1.position().top + $ball1.height() <= $('.wall1').eq(l).position().top + $('.wall1').eq(l).height())){
          $ball1.css("left", ($('.wall1').eq(l).position().left + $('.wall1').eq(l).width()).toString() + "px")
          console.log("blockCheck1Left trigger")
          return false
    }
        else {//console.log("blockCheck1Left no trigger")
        return true
  }
}
}

function testcol() {
  for (var z = 0; z < 2; z++) {
    blockCheck1Left()
  }
}


function blockCheck1Right() {
    for (m = 0; m < $('.wall1').length; m ++) {
      if(($ball1.position().left + $ball1.width() >= $('.wall1').eq(m).position().left) &&
         ($ball1.position().left < $('.wall1').eq(m).position().left) &&
         ($ball1.position().top >= $('.wall1').eq(m).position().top) &&
         ($ball1.position().top + $ball1.height() <= $('.wall1').eq(m).position().top + $('.wall1').eq(m).height())){
        $ball1.css("left", ($('.wall1').eq(m).position().left - $ball1.width()).toString() + "px")
        console.log("blockCheck1Right trigger")
        return false
      }
        else //console.log("blockCheck1Right no trigger")
        return true
      }
}

function blockCheck2Left() {
    for (n = 0; n < $('.wall2').length; n ++) {
        if(($ball2.position().left <= $('.wall2').eq(n).position().left + $('.wall2').eq(n).width()) &&
           ($ball2.position().left > $('.wall2').eq(n).position().left) &&
           ($ball2.position().top >= $('.wall2').eq(n).position().top) &&
           ($ball2.position().top + $ball2.height() <= $('.wall2').eq(n).position().top + $('.wall2').eq(n).height())){
          $ball2.css("left", ($('.wall2').eq(n).position().left + $('.wall2').eq(n).width()).toString() + "px")
          // console.log("blockCheck2Left trigger")
          return false
    }
        else //console.log("blockCheck2Left no trigger")
        return true
  }
}

function blockCheck2Right() {
    for (o = 0; o < $('.wall2').length; o ++) {
      if(($ball2.position().left + $ball2.width() >= $('.wall2').eq(o).position().left) &&
         ($ball2.position().left < $('.wall2').eq(o).position().left) &&
         ($ball2.position().top >= $('.wall2').eq(o).position().top) &&
         ($ball2.position().top + $ball2.height() <= $('.wall2').eq(o).position().top + $('.wall2').eq(o).height())){
        $ball2.css("left", ($('.wall2').eq(o).position().left - $ball2.width()).toString() + "px")
        // console.log("blockCheck2Right trigger")
        return false
      }
        else //console.log("blockCheck2Right no trigger")
        return true
      }
}

function ball1Jump() {
    jumpLimit = false
    gLock = true
    $ball1.css("top", (Number($ball1.css("top").replace("px","")) - 9*$ball1.height()).toString() + "px")
  setTimeout( () => {jumpLimit = true}, 1000)
  setTimeout( () => {gLock = false},100)
}

function ball2Jump() {
    jumpLimit = false
    gLock = true
    $ball2.css("top", (Number($ball2.css("top").replace("px","")) - 9*$ball2.height()).toString() + "px")
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
    clearInterval(checkClear) // stop interval checking for win condition
    // setTimeout( () => $('.floor').remove(), 1000)
    return  $('.container').append('<button class ="highlight" onclick="secondFunction()">Next Level</button>')

    // console.log('win')
  }
}

function secondFunction() {
  $('.goal').remove()
  $('.platform').remove()
  console.log("top",$('#ball1').css('top'))
  $('#ball1').css('top', (Number($('#ball1').css('top').replace("px","")) - 80).toString() + "px")
  $('#ball2').css('top', (Number($('#ball2').css('top').replace("px","")) - 80).toString() + "px")
  return  $('.highlight').remove()
  // $('#game2').slice(1).remove()
}
//these cause the balls to fall downward
var seconds1 = 0 //TODO: need to adjust such that it only starts counting when ball is floating
function gravity1() {
  if (!gLock) {
    var $ball1Height = $ball1.css("top")
    for (i = 0; i < $('#game1').find('.platform').length; i ++){
      if(($ball1.position().left < $('#game1').find('.platform').eq(i).position().left + $('#game1').find('.platform').eq(i).width()) &&
      ($ball1.position().left + $ball1.width() >= $('#game1').find('.platform').eq(i).position().left) &&
      ($ball1.position().top + $ball1.height() >= $('#game1').find('.platform').eq(i).position().top - allowance) &&
      ($ball1.position().top + $ball1.height() <= $('#game1').find('.platform').eq(i).position().top + $('#game1').find('.platform').eq(i).height())){
        $ball1.css("top", $ball1.css("top"))
        seconds1 = 0
        // console.log($('#game1').find('.platform').eq(i))
        return
      }
      else {
        seconds1 += 0.03 //to tally against the gravity setInterval
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
    for (i = 0; i < $('#game2').find('.platform').length; i ++){
    if(($ball2.position().left < $('#game2').find('.platform').eq(i).position().left + $('#game2').find('.platform').eq(i).width()) &&
    ($ball2.position().left + $ball2.width() >= $('#game2').find('.platform').eq(i).position().left) &&
    ($ball2.position().top + $ball2.height() >= $('#game2').find('.platform').eq(i).position().top - allowance) &&
    ($ball2.position().top + $ball2.height() <= $('#game2').find('.platform').eq(i).position().top + $('#game2').find('.platform').eq(i).height())){
      $ball2.css("top", $ball2.css("top"))
      seconds2 = 0
      // console.log('hit')
      return
    }
    // console.log("ball2 descent time",seconds2)
    // console.log("ball2 height",$ball2Height)
    else {
    seconds2 +=0.03 //independent gravity timer counter so that their vertical acceleration is independent
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
  function createPlatform(topPixels,leftPixels, half, width, height, type) {

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
    $platformCreate.addClass(type)
    $platformCreate.attr('id','p'+platformNo.toString())
    platformNo ++
    half.append($platformCreate)
  }
