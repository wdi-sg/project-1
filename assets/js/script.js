$(function() {

  $body.on('keydown', ballMove)

  function ballMove(e) {
    var unit = 10
    if (e.key === 'ArrowRight') {
      if (ball1Goal() === false) if (borderCheck1Right()) ball1Hori(unit) //if ball1 doesn't exceed right border
      if (ball2Goal() === false) if (borderCheck2Left()) ball2Hori(unit) //opposite side for ball2
      // ball1Goal()
    }
    if (e.key === 'ArrowLeft') {
      if (ball1Goal() === false) if (borderCheck1Left()) ball1Hori(-unit)
      if (ball2Goal() === false) if (borderCheck2Right()) ball2Hori(-unit)
    }
  }

  createGoal("20px","30px",$('#game1'))
  createGoal("20px","40px",$('#game2'))
  setInterval(ballSnap,500) //checking if border exceeds
  setInterval(levelClear,1000)
})

var $ball1 = $('#ball1')
var $ball2 = $('#ball2')
var $body = $('body')
var goalLevel = 1 // to assign goal Id's for each play field

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
  console.log('checking ball1Goal')
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
    console.log('win')
  }
}
// $body.on('click',($('.goal').eq(0).css("left",0)))
// $body.on('click',() => {($ball1.css("left","60px"))})
// $body.on('click',() => {($('.goal:first').css("left","0"))})
