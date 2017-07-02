document.addEventListener('DOMContentLoaded', init)

function init () {
  var cucumber = document.querySelector('.cucumber')
  var meat = document.querySelector('.meat')
  var onion = document.querySelector('.onion')
  var lettuce = document.querySelector('.lettuce')
  var cheese = document.querySelector('.cheese')

  document.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
      if (event.keyCode == 81) alert('cucumber')
      if (event.keyCode == 87) alert('meat')
      if (event.keyCode == 69) alert('onion')
      if (event.keyCode == 82) alert('lettuce')
      if (event.keyCode == 84) alert('cheese')
      if (event.keyCode == 32) alert('serve')
    } else {
      alert('wrong button pressed')
    }
  }// closing for onKeyUp

  function checkKeyCode (keycode) {
    if (keycode === 81 || keycode === 87 || keycode === 69 || keycode === 82 || keycode === 84 || keycode === 32) {
      return true
    }
    return false
  }//closing for checkKeyCode

}// closing for init
