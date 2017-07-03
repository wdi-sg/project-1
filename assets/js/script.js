//all DOM manipulations here

var randomWord = document.querySelector('.rand')
var start = document.querySelector('#start')
var submit = document.querySelector('#submit')
var reset = document.querySelector('#reset')
var input = document.querySelector('.inputField')

start.addEventListener('click', displayStr)
submit.addEventListener('click', getWord)

function displayStr(){
  randomStr = randStr()
  randomWord.textContent = randomStr.join(' ').toUpperCase()
  console.log(randomStr);
}

function getWord(){
  var testWord = input.value
  var testWordStr = testWord.split('')
  if(checkInputStr(randomStr, testWordStr)&& !checkStoredArr(testWord) && dictCheck(testWord)){
    storedArr.push(testWord)
    input.value = ''
  }
  else {
    console.log('input field vibrate')
  }
  console.log(storedArr)
}

// checkInputStr(input) && !checkStoredArr(input) && dictCheck(input)
