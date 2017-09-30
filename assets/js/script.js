$(function() {

  $body.on('keydown', ballMove)

  // var position1 = $ball1.position()
  // $body.on('click', () => {console.log($ball1.css('left'))}) //checking for position of ball1
  // $body.on('click', () => {console.log(typeof($('.half').width()))})
  // var position2 = $ball2.position()
  function ballMove(e) {
    if (e.key === 'ArrowRight') {
      if (borderCheck1Right()) ball1Travel(30) //if ball1 doesn't exceed right border
      if (borderCheck2Left()) ball2Travel(30) //opposite side for ball2
    }
    if (e.key === 'ArrowLeft') {
      if (borderCheck1Left()) ball1Travel(-30)
      if (borderCheck2Right()) ball2Travel(-30)
    }
  }

  setInterval(ballSnap,500) //checking if border exceeds
})

var $ball1 = $('#ball1')
var $ball2 = $('#ball2')
var $body = $('body')

function borderCheck1Right() {
  if (Number($ball1.css('left').replace("px","")) < $('.half').width() - $ball1.width()){
    return true // condition to keep ball within right border
  }
  else {
    return false
  }
}

function borderCheck2Right() {
  if (Number($ball2.css('left').replace("px","")) < $('.half').width() - $ball2.width()){
    return true
  }
  else {
    // $ball2.css('left',($('.half').width()-$ball2.width()).toString()+"px")
    return false
  }
}

function borderCheck1Left() {
  if (Number($ball1.css('left').replace("px","")) >= 0){
    return true
  }
  else {
    // $ball1.css('left',"0px")
    return false
  }
}

function borderCheck2Left() {
  if (Number($ball2.css('left').replace("px","")) >= 0){
    return true
  }
  else {
    // $ball2.css('left',"0px")
    return false
  }
}
function ball1Travel(a) {
  document.getElementById("ball1").style.left = (Number($ball1.css('left').replace('px',''))+a).toString()+"px"
}
function ball2Travel(a) {
  document.getElementById("ball2").style.left = (Number($ball2.css('left').replace('px',''))-a).toString()+"px"
}

function ballSnap() {
  // snap ball back to maximum allowable distance within border
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
