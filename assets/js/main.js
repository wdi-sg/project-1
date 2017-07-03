function gameInit () {
  var container = document.querySelector('.container')
  var innerContainer = document.querySelector('.innercontainer')
  var boxSelector = document.querySelector('.box')
  var playerArr = []
  var lives = 5
  var score = 0
  var combo = 0
  var level = 1

  function gameSetup () {
    setBackground()
    createLifeCounter()
    createScoreCounter()
    createComboCounter()
    createLevelCounter()
    createScoreToProgress()
    createInGameMessage()
    lives = 5
    score = 0
    combo = 0
    setLife()
    setScore()
    chooseBox()
  }

  function setLevel () {
    level = level + 1
    var levelCounter = document.querySelector('.levelCounter')
    levelCounter.textContent = 'Level: ' + level
    setScore()
  }

  function setBackground () {
    document.body.background = 'assets/images/levelOneBackground.jpg'
  }

  function createLevelCounter () {
    var levelCounter = document.createElement('div')
    levelCounter.setAttribute('class', 'levelCounter')
    levelCounter.style.position = 'absolute'
    levelCounter.style.textAlign = 'center'
    levelCounter.style.top = '-50px'
    levelCounter.style.left = '500px'
    levelCounter.style.width = '300px'
    levelCounter.style.fontSize = '15pt'
    levelCounter.textContent = 'Level: ' + level
    container.appendChild(levelCounter)
  }

  function createScoreToProgress () {
    var scoreToProgress = document.createElement('div')
    scoreToProgress.setAttribute('class', 'scoreToProgress')
    scoreToProgress.style.top = '-30px'
    scoreToProgress.style.width = '300px'
    scoreToProgress.style.left = '500px'
    scoreToProgress.style.fontSize = '15pt'
    // scoreToProgress.style.border = '1px solid black'
    scoreToProgress.style.position = 'absolute'
    scoreToProgress.style.textAlign = 'center'
    container.appendChild(scoreToProgress)
  }

  function createComboCounter () {
    var comboCounter = document.createElement('div')
    comboCounter.setAttribute('class', 'comboCounter')
    comboCounter.style.left = '0px'
    comboCounter.style.width = '800px'
    comboCounter.style.textAlign = 'center'
    comboCounter.style.fontSize = '30pt'
    comboCounter.style.position = 'absolute'
    comboCounter.style.opacity = '1'
    comboCounter.style.color = 'white'
    container.appendChild(comboCounter)
  }

  function createLifeCounter () {
    var lifeCounter = document.createElement('div')
    lifeCounter.setAttribute('class', 'lifeCounter')
    lifeCounter.style.top = '0px'
    lifeCounter.style.left = '-100px'
    lifeCounter.style.position = 'absolute'
    lifeCounter.style.height = '500px'
    lifeCounter.style.width = '60px'
    lifeCounter.style.textAlign = 'center'
    // lifeCounter.style.border = '1px solid black'
    lifeCounter.style.fontSize = '20pt'
    lifeCounter.textContent = 'Lives'
    for (var i = 1; i <= 5; i++) {
      var heart = document.createElement('img')
      heart.src = 'assets/images/redheart.png'
      heart.setAttribute('class', 'heart')
      heart.style.height = '40px'
      heart.style.width = '40px'
      heart.style.margin = '1px'
      lifeCounter.appendChild(heart)
    }
    container.appendChild(lifeCounter)
  }

  function createScoreCounter () {
    var scoreCounter = document.createElement('div')
    scoreCounter.setAttribute('class', 'scoreCounter')
    scoreCounter.style.top = '-50px'
    scoreCounter.style.left = '0px'
    scoreCounter.style.width = '600px'
    scoreCounter.style.fontSize = '30pt'
    scoreCounter.style.textAlign = 'center'
    scoreCounter.style.position = 'absolute'
    container.appendChild(scoreCounter)
  }

  function setLife () {
    var lifeCounter = document.querySelector('.lifeCounter')
    if (lives < 1) {
      innerContainer.innerHTML = ''
      inGameMessage('Game Over!', 1000)
    }
  }

  function setScore () {
    var scoreCounter = document.querySelector('.scoreCounter')
    scoreCounter.textContent = 'Score: ' + score
    var scoreToProgress = document.querySelector('.scoreToProgress')
    var pointsToProgress = 5000 * level - score
    scoreToProgress.textContent = pointsToProgress + ' points to next level'
    if (score >= 5000 * level) {
      if (combo % 50 !== 0) inGameMessage('Level up!', 500)
      else {
        setTimeout(inGameMessage, 1010, 'Level up!', 500)
      }
      setLevel()
    }
  }

  function setCombo () {
    if (combo >= 10) {
      var comboCounter = document.querySelector('.comboCounter')
      comboCounter.textContent = 'Combo ' + combo
      comboCounter.style.top = '50px'
      comboCounter.style.transition = ''
      comboCounter.style.opacity = '1'
      setTimeout(function () {
        comboCounter.style.opacity = '0'
        comboCounter.style.transition = 'opacity 1s, top 0.1s'
        comboCounter.style.top = '45px'
      }, 10)
      if (combo % 50 === 0 && combo !== 0) {
        score += 1000
        inGameMessage('Nice!', 10)
        setScore()
      }
    }
  }

  function createInGameMessage () {
    var inGameMessage = document.createElement('div')
    inGameMessage.setAttribute('class', 'inGameMessage')
    inGameMessage.style.color = 'white'
    inGameMessage.style.fontSize = '100pt'
    inGameMessage.style.position = 'absolute'
    inGameMessage.style.height = '500px'
    inGameMessage.style.width = '800px'
    inGameMessage.style.lineHeight = '500px'
    inGameMessage.style.textAlign = 'center'
    container.appendChild(inGameMessage)
  }

  function inGameMessage (message, durationInMs) {
    var inGameMessage = document.querySelector('.inGameMessage')
    inGameMessage.textContent = message
    inGameMessage.style.opacity = '1'
    inGameMessage.style.transition = ''
    setTimeout(function () {
      inGameMessage.style.opacity = '0'
      inGameMessage.style.transition = 'opacity 1s'
    }, durationInMs)
  }

  function randomNo (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function randomNoRounded (min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  function setLevelAdjustedParameter (level, initialnum, magnitude) {
    var num = initialnum
    for (var i = 2; i <= level; i++) {
      num = num - magnitude / (i - 1)
    }
    return num
  }

  function chooseBox () {
    if (lives > 0) {
      var identifier = randomNo(0, 100)
      if (identifier < 0) {
        addBox('twoLayer')
      } else if (identifier < 11) {
        addBox('upsideDown')
      } else if (identifier < 21) {
        addBox('twoBox')
      } else {
        addBox('easy')
      }
      var time = randomNo(setLevelAdjustedParameter(level, 1000, 150), setLevelAdjustedParameter(level, 1000, 150) + 1000)
      setTimeout(chooseBox, time)
    }
  }

  // function setBoxSpawnIntervalMin (level) {
  //   var boxSpawnIntervalMin = 1000
  //   for (var i = 2; i <= level; i++) {
  //     boxSpawnIntervalMin = boxSpawnIntervalMin - 200 / (i - 1)
  //   }
  //   return boxSpawnIntervalMin
  // }

  function addBox (type) {
    var boxElem = document.createElement('div')
    // boxElem.style.height = '20px'
    // boxElem.style.width = '80px'
    boxElem.style.padding = '5px 10px'
    var boxFallTime = setLevelAdjustedParameter(level, 5, 0.8)
    console.log('top ' + boxFallTime.toString() + 's linear')
    boxElem.style.transition = 'top ' + boxFallTime + 's linear, transform ' + boxFallTime + 's linear'
    console.log(boxElem.style.transition)
    if (type === 'twoLayer') {
      boxElem.style.backgroundColor = 'orange'
      boxElem.isSecondLayer = false
    } else if (type === 'upsideDown') {
      boxElem.style.backgroundColor = 'cyan'
      boxElem.style.transform = 'rotate(0deg)'
      setTimeout(function () {
        boxElem.style.transform = 'rotate(360deg)'
      }, 100)
    } else {
      boxElem.style.backgroundColor = 'pink'
    }
    // boxElem.style.border = '1px solid white'
    boxElem.style.top = '0px'
    boxElem.style.left = randomNo(0, 700) + 'px'
    boxElem.style.position = 'absolute'
    boxElem.style.textAlign = 'center'
    // boxElem.style.lineHeight = '20px'
    // boxElem.style.transition = 'top 5s linear'
    boxElem.style.borderRadius = '50%'
    boxElem.style.fontFamily = 'Arial'
    boxElem.style.fontSize = '15pt'
    boxElem.setAttribute('class', 'box')
    boxElem.type = type
    addWord(boxElem, type)
    innerContainer.appendChild(boxElem)
    if (type === 'twoBox') {
      setTimeout(addBox, 300, 'easy')
    }
  }

  function addWord (appendTo, type) {
    var fullWordArr = words.array
    var inGameWordArr = fullWordArr.filter(function (word) {
      console.log(randomNoRounded(3 + level / 3, 4 + level / 3))
      return word.length === randomNoRounded(3 + level / 3, 4 + level / 3)
    })
    console.log(inGameWordArr.length)
    var randomWord = inGameWordArr[randomNo(0, inGameWordArr.length - 1)]
    console.log(randomWord.length)
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
      elem.style.top = ('465px')
      elem.addEventListener('transitionend', removeBox)
    })
  }

  function removeBox () {
    var boxToRemove = document.querySelector('.box')
    innerContainer.removeChild(boxToRemove)
    playerArr = []
    if (!boxToRemove.successfulClear) {
      loseLife()
      combo = 0
    }
  }

  function loseLife () {
    lives -= 1
    var heartToRemove = document.querySelector('.heart')
    var lifeCounter = document.querySelector('.lifeCounter')
    lifeCounter.removeChild(heartToRemove)
    var redBackground = document.createElement('div')
    redBackground.style.height = '5000px'
    redBackground.style.width = '5000px'
    redBackground.style.top = '-1000px'
    redBackground.style.left = '-1000px'
    redBackground.style.backgroundColor = 'red'
    redBackground.style.opacity = '0.5'
    redBackground.style.transition = 'opacity 0.5s'
    redBackground.style.position = 'absolute'
    setTimeout(function () {
      redBackground.style.opacity = '0'
    }, 10)
    setTimeout(function () {
      innerContainer.removeChild(redBackground)
    }, 1000)
    innerContainer.appendChild(redBackground)
    setLife()
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
        if (boxSelector.type === 'easy') score += 20 * playerArr.length
        if (boxSelector.type === 'upsideDown') score += 30 * playerArr.length
        if (level < 4) score += 50
        setScore()
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
