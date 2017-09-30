$(function() {

  $body.on('keydown', ballMove)

  // var position1 = $ball1.position()
  // $body.on('click', () => {console.log($ball1.css('left'))}) //checking for position of ball1
  // $body.on('click', () => {console.log(typeof($('.half').width()))})
  // var position2 = $ball2.position()
  function ballMove(e) {
    if (e.key === 'ArrowRight') {
      if (borderCheck1Right()) ball1Hori(30) //if ball1 doesn't exceed right border
      if (borderCheck2Left()) ball2Hori(30) //opposite side for ball2
    }
    if (e.key === 'ArrowLeft') {
      if (borderCheck1Left()) ball1Hori(-30)
      if (borderCheck2Right()) ball2Hori(-30)
    }
  }

  setInterval(ballSnap,500) //checking if border exceeds
  createGoal("20px","30px",$('#game1'))
  createGoal("20px","40px",$('#game2'))

})

var $ball1 = $('#ball1')
var $ball2 = $('#ball2')
var $body = $('body')

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
  constructor (color = "black", width = "23px", height = "23px", top , left) {
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

  var $goalCreate = $('<div class = goal id = goal1>')
  $goalCreate.css({
    backgroundColor: goalCreate.color,
    width: goalCreate.width,
    height: goalCreate.height,
    top: topPixels,
    left: leftPixels,
    position: 'relative',
    display: 'inline-block'
  })
  half.append($goalCreate)
}
