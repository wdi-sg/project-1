// all DOM manipulations here
document.addEventListener('DOMContentLoaded', init)

function init() {
  var alLogic = alphabetLogic()

  var randomWord = document.querySelector('.rand')
  var start = document.querySelector('#start')
  var submit = document.querySelector('#submit')
  var resetto = document.querySelector('#reset')
  var input = document.querySelector('.inputField')

  start.addEventListener('click', displayStr)
  resetto.addEventListener('click', reset)
  // submit.addEventListener('click', getWord)

  input.addEventListener('keydown', keyDown)

  function keyDown (event) {
      // console.log(event)
        // check if we're clicking enter
    if (event.keyCode === 13) {
      var testWord = input.value
      //console.log(typeof(testWord))
      var testWordStr = testWord.split('')
      if (alLogic.checkInputStr(randomStr, testWordStr) && !alLogic.checkStoredArr(testWord) && alLogic.dictCheck(testWord)) {
        storedArr.push(testWord)
        input.value = ''
        console.log(storedArr)
      } else {
        input.value = ''
        console.log('input field vibrate')
      }
    }
  }

  function displayStr () {
    randomStr = alLogic.randStr()
    randomWord.textContent = randomStr.join(' ').toUpperCase()
    console.log(randomStr)
  }

  // function getWord () {
  //   var testWord = input.value
  //   var testWordStr = testWord.split('')
  //   if (checkInputStr(randomStr, testWordStr) && !checkStoredArr(testWord) && dictCheck(testWord)) {
  //     storedArr.push(testWord)
  //     input.value = ''
  //   } else {
  //     console.log('input field vibrate')
  //   }
  //   console.log(storedArr)
  // }

  function reset () {
    storedArr = []
    randomStr = []
    displayStr()
  }
}




// checkInputStr(input) && !checkStoredArr(input) && dictCheck(input)
