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

        }
        else {
          pauseAudio(musicCombo)
          playAudio(music)
          scoreAdd(testWord)
          scoreKeep.textContent = score
        }

        // pauseAudio(musicCombo)
        // playAudio(music)
        // scoreAdd(testWord)
        // combo(arrTime)
        // noCombo(arrTime)

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
      pauseAudio(music)
      pauseAudio(musicCombo)

    }
  }

//   function combo(array){
//     var n = array.length
//     if((array[n-1]-array[n-2])< 4 && array[n-2]-array[n-3]< 4){
//       pauseAudio(music)
//       playAudio(musicCombo)
//       scoreComboAdd(testWord)
//     return true}
//     scoreAdd(testWord)
//     return false
// }
//
//
//
//   function noCombo(array){
//     var n = array.length
//     if((array[n-1]-array[n-2])> 5 && array[n-2]-array[n-3]> 5){
//       pauseAudio(musicCombo)
//       playAudio(music)
//       scoreAdd(testWord)
//     }
//   }


}
