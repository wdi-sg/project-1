document.addEventListener('DOMContentLoaded', init)

function init () {
  var cucumber = document.querySelector('.cucumber')
  var meat = document.querySelector('.meat')
  var onion = document.querySelector('.onion')
  var lettuce = document.querySelector('.lettuce')
  var cheese = document.querySelector('.cheese')
  var hamItem = document.querySelectorAll('.hamItem')
  console.log(hamItem);
  // console.log(hamItem[hamItem.length - 1]);
  // console.log(hamItem.length - 1);


  document.addEventListener('keyup', onKeyUp)

  var index = 4
  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
      if (event.keyCode === 81) {
        hamItem[index].classList.remove('hamItem')
        hamItem[index].classList.add('cucumber')
        index--
      }
      if (event.keyCode === 87) {
        hamItem[index].classList.remove('hamItem')
        hamItem[index].classList.add('meat')
        index--
        // console.log(index);
      }
      if (event.keyCode === 69) {
        hamItem[hamItem.length - 1].classList.add('onion')
        hamItem[hamItem.length - 1].classList.remove('hamItem')
      }
      if (event.keyCode === 82) {
        hamItem[hamItem.length - 1].classList.add('lettuce')
        hamItem[hamItem.length - 1].classList.remove('hamItem')
      }
      if (event.keyCode === 84) {
        hamItem[hamItem.length - 1].classList.add('cheese')
        hamItem[hamItem.length - 1].classList.remove('hamItem')
      }
      if (event.keyCode === 32) alert('serve')
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
