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

}// closing for init
