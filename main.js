function gameInit () {
  var container = document.querySelector('.container')
  var boxSelector = document.querySelector('.box')
  var playerArr = []
  var life = 1000
  var bossLife = 5000
  var combo = 0

  function gameSetup (level) {
    createLifeCounter()
    createBossLifeCounter()
    createComboCounter()
    life = 1000
    bossLife = 5000
    combo = 0
    setLife()
    setBossLife()
    chooseBox()
  }

  function createComboCounter (){
    var comboCounter = document.createElement('div')
    comboCounter.setAttribute('class', 'comboCounter')
    comboCounter.style.top = '-50px'
    comboCounter.style.left = '0px'
    comboCounter.style.width = '800px'
    comboCounter.style.textAlign = 'center'
    comboCounter.style.fontSize = '30pt'
    comboCounter.style.position = 'absolute'
    comboCounter.style.opacity = '1'
    container.appendChild(comboCounter)
  }

  function createLifeCounter () {
    var lifeCounter = document.createElement('div')
    lifeCounter.setAttribute('class', 'lifeCounter')
    lifeCounter.style.top = '100px'
    lifeCounter.style.left = '200px'
    lifeCounter.style.position = 'absolute'
    document.body.appendChild(lifeCounter)
  }

  function createBossLifeCounter () {
    var bossLifeCounter = document.createElement('div')
    bossLifeCounter.setAttribute('class', 'bossLifeCounter')
    bossLifeCounter.style.top = '100px'
    bossLifeCounter.style.left = '1120px'
    bossLifeCounter.style.position = 'absolute'
    document.body.appendChild(bossLifeCounter)
  }

  function setLife () {
    var lifeCounter = document.querySelector('.lifeCounter')
    lifeCounter.textContent = 'You: ' + life + ' hp'
    if (life < 1) {
      alert ('You lose!')
      container.innerHTML = ''
      lifeCounter.textContent = 'You: 0 hp'
    }
  }

  function setBossLife () {
    var bossLifeCounter = document.querySelector('.bossLifeCounter')
    bossLifeCounter.textContent = 'Boss: ' + bossLife + ' hp'
    if (bossLife < 1) {
      alert ('You win!')
      container.innerHTML = ''
      bossLifeCounter.textContent = 'Boss: 0 hp'
    }
  }

  function setCombo () {
    var comboCounter = document.querySelector('.comboCounter')
    comboCounter.textContent = 'Combo ' + combo
    comboCounter.style.transition = ''
    comboCounter.style.opacity = '1'
    setTimeout(function () {
      comboCounter.style.opacity = '0'
      comboCounter.style.transition = 'opacity 1s'
    }, 300)
    if (combo % 50 === 0 && combo !== 0) {
      bossLife -= 1000
      setBossLife()
      inGameMessage('Nice!')
    }
  }

  function inGameMessage (message) {
    var inGameMessage = document.createElement('div')
    inGameMessage.textContent = message
    inGameMessage.style.fontSize = '100pt'
    inGameMessage.style.position = 'absolute'
    inGameMessage.style.height = '500px'
    inGameMessage.style.width = '800px'
    inGameMessage.style.lineHeight = '500px'
    inGameMessage.style.textAlign = 'center'
    inGameMessage.style.transition = 'opacity 1s'
    container.appendChild(inGameMessage)
    setTimeout(function () {
      inGameMessage.style.opacity = '0'
    }, 10)
  }

  function randomNo (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function chooseBox () {
    if (life > 0 && bossLife > 0) {
      var identifier = randomNo(0, 100)
      if (identifier < 21) {
        addBox('twoLayer')
      } else if (identifier < 41) {
        addBox('upsideDown')
      } else if (identifier < 51) {
        addBox('twoBox')
      } else {
        addBox('easy')
      }
      var time = randomNo(1000, 2000)
      setTimeout(chooseBox, time)
    }
  }

  function addBox (type) {
    var boxElem = document.createElement('div')
    // boxElem.style.height = '20px'
    // boxElem.style.width = '80px'
    boxElem.style.padding = '5px 10px'
    boxElem.style.transition = 'top 5s linear'
    if (type === 'twoLayer') {
      boxElem.style.backgroundColor = 'orange'
      boxElem.style.transition = 'top 4s linear'
      boxElem.isSecondLayer = false
    } else if (type === 'upsideDown') {
      boxElem.style.backgroundColor = 'cyan'
    } else {
      boxElem.style.backgroundColor = 'pink'
    }
    boxElem.style.border = '1px solid black'
    boxElem.style.top = '0px'
    boxElem.style.left = randomNo(0, 700) + 'px'
    boxElem.style.position = 'absolute'
    boxElem.style.textAlign = 'center'
    // boxElem.style.lineHeight = '20px'
    // boxElem.style.transition = 'top 5s linear'
    boxElem.style.borderRadius = '50%'
    boxElem.style.fontFamily = 'Arial'
    boxElem.setAttribute('class', 'box')
    addWord(boxElem, type)
    container.appendChild(boxElem)
    if (type === 'twoBox') {
      setTimeout(addBox, 300, 'easy')
    }
  }

  function addWord (appendTo, type) {
    var fullWordArr = words.array
    var inGameWordArr = fullWordArr.filter(function (word) {
      return word.length === 5 || word.length === 4
    })
    console.log(inGameWordArr.length)
    var randomWord = inGameWordArr[randomNo(0, inGameWordArr.length - 1)]
    var randomWordArr = randomWord.split('')
    var innerBox = document.createElement('div')
    for (var i = 0; i < randomWordArr.length; i++) {
      var span = document.createElement('span')
      span.setAttribute('id', i)
      span.textContent = randomWordArr[i]
      innerBox.appendChild(span)
    }
    if (type === 'upsideDown') {
      innerBox.style.transform = 'rotate(180deg)'
    }
    appendTo.appendChild(innerBox)
    setTimeout(moveBox, 200)
  }

  function moveBox () {
    var boxToMove = document.querySelectorAll('.box')
    boxToMove.forEach(function (elem) {
      // elem.style.transition = 'top 5s linear'
      elem.style.top = ('470px')
      elem.addEventListener('transitionend', removeBox)
    })
  }

  function removeBox () {
    var boxToRemove = document.querySelector('.box')
    container.removeChild(boxToRemove)
    playerArr = []
    if (!boxToRemove.successfulClear) {
      life -= randomNo(45, 85)
      setLife()
      combo = 0
      setCombo()
    }// if (!document.querySelector('.box')) addBox('easy')
  }

  function typeLetter (event) {
    var char = event.key
    console.log(char)
    playerArr.push(char)
    checkIfMatch()
    boxSelector = document.querySelector('.box')
    if (boxSelector) boxSelector.style.fontWeight = 'bold'
  }

  function checkIfMatch () {
    boxSelector = document.querySelector('.box')
    checkIfWordMatch()
    if (checkBoxType()) removeBox()
  }

  function checkIfWordMatch () {
    if (!boxSelector) {
      playerArr = []
    } else {
      var playerLastChar = playerArr.length - 1
      if (playerArr[playerLastChar] === boxSelector.textContent[playerLastChar]) {
        var spanId = document.getElementById(playerLastChar)
        spanId.style.color = 'red'
        combo += 1
        setCombo()
      } else if (playerArr[playerLastChar] === '`') {
        removeBox()
        life -= randomNo(45, 85)
        setLife()
        combo = 0
        setCombo()
      } else if (playerArr[playerLastChar] !== boxSelector.textContent[playerLastChar]) {
        playerArr.pop()
        combo = 0
        setCombo()
      }
    }
  }

  function checkBoxType () {
    if (playerArr.length !== 0 && playerArr.length === boxSelector.textContent.length) {
      if (boxSelector.isSecondLayer === false) {
        // <-------- DIFFICULT MODE -------->
        playerArr = []
        boxSelector.isSecondLayer = true
        for (var i = 0; i < boxSelector.textContent.length; i++) {
          document.getElementById(i).style.color = 'black'
        }
      } else {
        boxSelector.successfulClear = true
        bossLife -= randomNo(75, 115)
        setBossLife()
        return true
      }
    } else {
      return false
    }
  }

  gameSetup()

  document.body.addEventListener('keydown', typeLetter)
}

document.addEventListener('DOMContentLoaded', gameInit)
