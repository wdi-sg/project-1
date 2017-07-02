document.addEventListener("DOMContentLoaded", init)

function (init) {
  var cucumber = document.querySelector('.cucumber')
  var meat = document.querySelector('.meat')
  var onion = document.querySelector('.onion')
  var lettuce = document.querySelector('.lettuce')
  var cheese =document.querySelector('.cheese')

  cucumber.addEventListener('keyup', onKeyUp)
  meat.addEventListener('keyup', onKeyUp)
  onion.addEventListener('keyup', onKeyUp)
  lettuce.addEventListener('keyup', onKeyUp)
  cheese.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
    }

  }// closing for function onKeyUp

  function checkKeyCode (keycode) {
    if (keycode === 81) return cucumber
    if (keycode === 87) return meat
    if (keycode === 69) return onion
    if (keycode === 82) return lettuce
    if (keycode === 84) return cheese
    if (keycode === 32) return serve
  }// closing for function checkKeyCode

}// closing for init
