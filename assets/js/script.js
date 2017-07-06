// all DOM manipulations here
document.addEventListener('DOMContentLoaded', init)

function init () {
  var alLogic = alphabetLogic()
  var interval = null
  var randomWord = document.querySelector('.rand')
  var start = document.querySelector('#start')
  var resetto = document.querySelector('#reset')
  var input = document.querySelector('.inputField')
  var timerField = document.querySelector('.time')
  var typedWords = document.querySelector('ul')
  var scoreKeep = document.querySelector('.score')
  var music = document.querySelector('#myMusic')
  var arrTime = []

  start.addEventListener('click', displayStr)
  resetto.addEventListener('click', reset)
  // submit.addEventListener('click', getWord)

  input.addEventListener('keydown', keyDown)

  function keyDown (event) {
      // console.log(event)
        // check if we're clicking enter
    if (event.keyCode === 13) {
      var testWord = input.value.toLowerCase()
      // console.log(typeof(testWord))
      var testWordStr = testWord.split('')
      if (alLogic.checkInputStr(randomStr, testWordStr) && !alLogic.checkStoredArr(testWord) && alLogic.dictCheck(testWord)) {
        storedArr.push(testWord)
        var listItem = document.createElement('li')
        listItem.textContent = testWord
        typedWords.appendChild(listItem)
        input.value = ''
        scoreAdd(testWord)
        scoreKeep.textContent = score
      } else {
        input.value = ''
        input.classList.add("shake-hard" , "shake-constant")
        setTimeout(function(){input.classList.remove("shake-hard" , "shake-constant")},200)
      }
    }
  }

  function scoreAdd (testWord) {
    var wordLength = testWord.length
    var award = wordLength * wordLength * 10
    score = score + award
    return score
  }

  function displayStr () {
    playAudio()
    interval = setInterval(timerz, 1000)
    randomStr = alLogic.randStr()
    randomWord.textContent = randomStr.join(' ').toUpperCase()
    start.style.display = 'none'
  }

  function playAudio() {
    music.play();
}

function pauseAudio() {
    music.pause();
}


  function reset () {
    if(counter>0){
    storedArr = []
    randomStr = []
    clearInterval(interval)
    displayStr()
    counter = counter - 1
    document.querySelector('#lives').textContent = counter
  }
  }


  function timerz () {
    if (timer > 0) {
      timer = timer - 1
      document.querySelector('.time').textContent = timer + ' s'
    } else {
      document.querySelector('.combo').textContent = 'GAME OVER!'
      document.querySelector('.combo').style.color = 'red'
      randomStr = []
      music.pause()
    }
  }


}
