var container = document.querySelector('.container')
var boxSelector = document.querySelector('.box')
var playerArr = []
var randomWord = ''

function randomNo (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function addBox () {
  var boxElem = document.createElement('div')
  boxElem.style.height = '50px'
  boxElem.style.width = '80px'
  boxElem.style.backgroundColor = 'pink'
  boxElem.style.border = '1px solid black'
  boxElem.style.top = randomNo(0,400) + 'px'
  boxElem.style.left = randomNo(76,676) + 'px'
  boxElem.style.position = 'absolute'
  boxElem.style.textAlign = 'center'
  boxElem.style.lineHeight = '50px'
  boxElem.setAttribute('class', 'box')
  addWord(boxElem)
  container.appendChild(boxElem)
}
function addWord (appendTo) {
  boxSelector = document.querySelector('.box')
  var wordArr = ['apple', 'people', 'dictionary', 'cloud', 'green']
  var initialWord = ''
  initialCheck()
  function initialCheck () {
    var initialCheck = false
    while (initialCheck === false) {
      initialWord = wordArr[randomNo(0, 4)]
      console.log (initialWord, randomWord)
      if (initialWord !== randomWord) {
        initialCheck = true
      }
    }
  }
  randomWord = initialWord
  var randomWordArr = randomWord.split('')
  for (var i = 0; i < randomWordArr.length; i++) {
    var span = document.createElement('span')
    span.setAttribute('id', i)
    span.textContent = randomWordArr[i]
    appendTo.appendChild(span)
  }
  console.log(randomWordArr)
  // console.log(boxSelector.textContent)
}

function typeLetter (event) {
  var char = String.fromCharCode(event.which)
  playerArr.push(char.toLowerCase())
  checkIfMatch()
  console.log(playerArr)
}

function checkIfMatch () {
  boxSelector = document.querySelector('.box')
  for (var i = 0; i < playerArr.length; i++) {
    if (playerArr[i] === boxSelector.textContent[i]) {
      var spanId = document.getElementById(i)
      if (i === playerArr.length - 1) {
        spanId.style.color = 'red'
      }
    } else if (playerArr[i] !== boxSelector.textContent[i]) {
      playerArr.pop()
    }
    if (playerArr.length === boxSelector.textContent.length) {
      // addWord()
      playerArr = []
      container.removeChild(boxSelector)
    }
  }
}

addBox()
setInterval(addBox, 2000)

document.body.addEventListener('keydown', typeLetter)
