var box = document.querySelector('.box')
var playerArr = []

function randomNo (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function addWord () {
  box.textContent = ''
  var wordArr = ['apple', 'people', 'dictionary', 'cloud', 'green']
  var randomWord = wordArr[randomNo(0, 4)]
  var randomWordArr = randomWord.split('')
  for (var i = 0; i < randomWordArr.length; i++) {
    var span = document.createElement('span')
    span.setAttribute('id', i)
    span.textContent = randomWordArr[i]
    box.appendChild(span)
  }
  console.log(randomWordArr)
  console.log(box.textContent)
}

function typeLetter (event) {
  var char = String.fromCharCode(event.which)
  playerArr.push(char.toLowerCase())
  checkIfMatch()
  console.log(playerArr)
}

function checkIfMatch () {
  for (var i = 0; i < playerArr.length; i++) {
    if (playerArr[i] === box.textContent[i]) {
      var spanId = document.getElementById(i)
      if (i === playerArr.length - 1) {
        spanId.style.color = 'red'
      }
    } else if (playerArr[i] !== box.textContent[i]) {
      playerArr.pop()
    }
    if (playerArr.length === box.textContent.length) {
      addWord()
      playerArr = []
    }
  }
}

addWord()

document.body.addEventListener('keydown', typeLetter)
