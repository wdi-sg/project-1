document.addEventListener('DOMContentLoaded', init)

function init () {
  var u1 = document.getElementById('u1')
  var u2 = document.getElementById('u2')
  var u3 = document.getElementById('u3')
  var u4 = document.getElementById('u4')
  var u5 = document.getElementById('u5')
  var u6 = document.getElementById('u6')
  var u7 = document.getElementById('u7')
  var hamItem = document.querySelectorAll('.hamItem')
  // var index = hamItem.length -1
  console.log(index);
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
        console.log(index)
      }
      if (event.keyCode === 87) {
        hamItem[index].classList.remove('hamItem')
        hamItem[index].classList.add('meat')
        index--
        // console.log(index);
      }
      if (event.keyCode === 69) {
        hamItem[index].classList.add('onion')
        hamItem[index].classList.remove('hamItem')
        index--
      }
      if (event.keyCode === 82) {
        hamItem[index].classList.add('lettuce')
        hamItem[index].classList.remove('hamItem')
        index--
      }
      if (event.keyCode === 84) {
        hamItem[index].classList.add('cheese')
        hamItem[index].classList.remove('hamItem')
        index--
      }
      if (event.keyCode === 32) {
        document.getElementById('u1').classList.add('topbun')
        setTimeout(function(){resetClass()},500);
      }
    } else {
      alert('wrong button pressed')
    }
  }// closing for onKeyUp

  function resetClass () {
    u1.classList.remove('topbun')
    u2.classList = 'hamItem'
    u3.classList = 'hamItem'
    u4.classList = 'hamItem'
    u5.classList = 'hamItem'
    u6.classList = 'hamItem'
    index = 4
  }

  // for generating hamburger display
  var d1 = document.getElementById('d1')
  var d2 = document.getElementById('d2')
  var d3 = document.getElementById('d3')
  var d4 = document.getElementById('d4')
  var d5 = document.getElementById('d5')
  var d6 = document.getElementById('d6')
  var d7 = document.getElementById('d7')



  function checkKeyCode (keycode) {
    if (keycode === 81 || keycode === 87 || keycode === 69 || keycode === 82 || keycode === 84 || keycode === 32) {
      return true
    }
    return false
  }//closing for checkKeyCode

}// closing for init
