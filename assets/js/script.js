$(function() {
  var $ball1 = $('#ball1')
  var $ball2 = $('#ball2')
  var $body = $('body')

  $body.on('keydown', ballMove)

  var position1 = $ball1.position()
  console.log(typeof($ball1.css('left')))
  // console.log(position1)
  // var position2 = $ball2.position()
  function ballMove(e) {
    if (e.key === 'ArrowRight') {
      ballTravel1(2) // ball1 moves 1px left
      ballTravel2(2) // ball2 moves 1px right
    }
    if (e.key === 'ArrowLeft') {
      ballTravel1(-2) // ball1 moves 1px right
      ballTravel2(-2) // ball2 moves 1px left
    }
  }
  function ballTravel1(a) {
    document.getElementById("ball1").style.left = (Number($ball1.css('left').replace('px',''))+a).toString()+"px"
  }
  function ballTravel2(a) {
    document.getElementById("ball2").style.left = (Number($ball2.css('left').replace('px',''))-a).toString()+"px"
  }
})
