// all DOM manipulations here
document.addEventListener('DOMContentLoaded', init)

function init () {
  var alLogic = alphabetLogic()
  var interval = null
  var interval2 = null
  var randomWord = document.querySelector('.rand')
  var start = document.querySelector('#start')
  var resetto = document.querySelector('#reset')
  var input = document.querySelector('.inputField')
  var timerField = document.querySelector('.time')
  var typedWords = document.querySelector('ul')
  var scoreKeep = document.querySelector('.score')
  var music = document.querySelector('#myMusic')
  var musicCombo= document.querySelector('#myMusic2')


  var arrTime = []

  start.addEventListener('click', displayStr)
  resetto.addEventListener('click', reset)


  input.addEventListener('keydown', keyDown)

  function keyDown (event) {
      // console.log(event)
        // check if we're clicking enter
    if (event.keyCode === 13) {
      var testWord = input.value.toLowerCase()
      var testWordStr = testWord.split('')
      if (alLogic.checkInputStr(randomStr, testWordStr) && !alLogic.checkStoredArr(testWord) && alLogic.dictCheck(testWord)) {
        storedArr.push(testWord)
        var listItem = document.createElement('li')
        listItem.textContent = testWord
        typedWords.appendChild(listItem)
        input.value = ''

        // scoreAdd(testWord)
        // scoreKeep.textContent = score

        arrTime.push(timer)
        console.log(arrTime)
        var n = arrTime.length

        if((arrTime[n-2]-arrTime[n-1])<5 && arrTime[n-3]-arrTime[n-2]<5){
          pauseAudio(music)
          playAudio(musicCombo)
          scoreComboAdd(testWord)
          scoreKeep.textContent = score
          document.querySelector('.combo').textContent= 'COMBO!!!!'
          document.querySelector('.combo').style.color = 'red'
          clearInterval(interval2)
          interval2 = setInterval(changeColor,500)
        }
        else {
          clearInterval(interval2)
          pauseAudio(musicCombo)
          playAudio(music)
          scoreAdd(testWord)
          scoreKeep.textContent = score
          document.body.style.backgroundColor= 'white'
          document.querySelector('.combo').textContent= ''
        }

      } else {
        input.value = ''
        input.classList.add("shake-hard" , "shake-constant")
        setTimeout(function(){input.classList.remove("shake-hard" , "shake-constant")},200)
      }
    }
  }

  function changeColor(){
  document.body.style.backgroundColor = 'rgb(' + randomNo() + ',' + randomNo()+',' + randomNo()+')'
}

function colorWhite(){
  document.body.style.backgroundColor = 'white'
}

  function randomNo(){
    return Math.floor(Math.random()*255)
  }

  console.log(randomNo())

  function scoreAdd (testWord) {
    var wordLength = testWord.length
    var award = wordLength * wordLength * 10
    score = score + award
    return score
  }

  function scoreComboAdd (testWord) {
    var wordLength = testWord.length
    var award = wordLength * wordLength * wordLength * 10
    score = score + award
    return score
  }

  function displayStr () {
    playAudio(music)
    interval = setInterval(timerz, 1000)
    randomStr = alLogic.randStr()
    randomWord.textContent = randomStr.join(' ').toUpperCase()
    start.style.display = 'none'
  }

  function displayStr2 () {
    // interval = setInterval(timerz, 1000)
    randomStr = alLogic.randStr()
    randomWord.textContent = randomStr.join(' ').toUpperCase()
    start.style.display = 'none'
  }

  function playAudio(sound) {
    sound.play();
}

function pauseAudio(sound) {
    sound.pause();
}


  function reset () {
    if(counter>0){
    storedArr = []
    randomStr = []
    // clearInterval(interval)
    displayStr2()
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
      document.querySelector('.combo').style.color = 'rgb(220,20,60)'
      randomStr = []
      pauseAudio(music)
      pauseAudio(musicCombo)
      clearInterval(interval2)
      colorWhite()

    }
  }

}
