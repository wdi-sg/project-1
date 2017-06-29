var container = document.querySelector('.container')
var boxSelector = document.querySelector('.box')
var playerArr = []
var randomWord = ''

function randomNo (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function choosingBox () {
  var identifier = randomNo(0, 100)
  if (identifier < 21) {
    addBox('difficult')
  } else {
    addBox('easy')
  }
}

function addBox (type) {
  var boxElem = document.createElement('div')
  boxElem.style.height = '20px'
  // boxElem.style.width = '80px'
  boxElem.style.padding = '0 10px'
  if (type === 'difficult') {
    boxElem.style.backgroundColor = 'orange'
  } else {
    boxElem.style.backgroundColor = 'pink'
  }
  boxElem.style.border = '1px solid black'
  boxElem.style.top = randomNo(8, 458) + 'px'
  boxElem.style.left = randomNo(274, 872) + 'px'
  boxElem.style.position = 'absolute'
  boxElem.style.textAlign = 'center'
  boxElem.style.lineHeight = '20px'
  boxElem.setAttribute('class', 'box')
  addWord(boxElem)
  container.appendChild(boxElem)
}
function addWord (appendTo) {
  var wordArr = ['apple', 'people', 'dictionary', 'cloud', 'green', 'big bird']
  var initialWord = ''
  initialCheck()
  function initialCheck () {
    var initialCheck = false
    while (initialCheck === false) {
      initialWord = wordArr[randomNo(0, 5)]
      console.log(initialWord, randomWord)
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
  if (char === 'À'){
    playerArr.push(char)
    checkIfMatch()
  } else
  playerArr.push(char.toLowerCase())
  checkIfMatch()
  console.log(char)
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
    } else if (playerArr[i] === 'À') {
      playerArr = []
      container.removeChild(boxSelector)
    } else if (playerArr[i] !== boxSelector.textContent[i]) {
      //   if (boxSelector.style.backgroundColor === 'orange'){
      // <-------- DIFFICULT MODE -------->
      //     playerArr = []
      //     for (var i = 0; i < boxSelector.textContent.length; i++) {
      //       document.getElementById(i).style.color = 'black'
      //     }
      //   } else {
      playerArr.pop()
    }
  }
  if (playerArr.length !== 0) {
    if (playerArr.length === boxSelector.textContent.length) {
      if (boxSelector.style.backgroundColor === 'orange') {
      // <-------- DIFFICULT MODE -------->
        playerArr = []
        boxSelector.style.backgroundColor = 'pink'
        for (var i = 0; i < boxSelector.textContent.length; i++) {
          document.getElementById(i).style.color = 'black'
        }
      } else {
        playerArr = []
        container.removeChild(boxSelector)
      }
    }
  }
}

choosingBox()
setInterval(choosingBox, 2000)

document.body.addEventListener('keydown', typeLetter)
