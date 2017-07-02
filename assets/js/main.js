document.addEventListener('DOMContentLoaded', init)

function init () {
  var cucumber = document.querySelector('.cucumber')
  var meat = document.querySelector('.meat')
  var onion = document.querySelector('.onion')
  var lettuce = document.querySelector('.lettuce')
  var cheese = document.querySelector('.cheese')

  cucumber.addEventListener('click', onKeyUp)
  meat.addEventListener('keyup', onKeyUp)
  onion.addEventListener('keyup', onKeyUp)
  lettuce.addEventListener('keyup', onKeyUp)
  cheese.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    if (event.keycode == 81) return cucumber
    if (event.keycode == 87) return meat
    if (event.keycode == 69) return onion
    if (event.keycode == 82) return lettuce
    if (event.keycode == 84) return cheese
    if (event.keycode == 32) return serve
  }// closing for function onKeyUp

}// closing for init
