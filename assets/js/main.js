function gameInit () {
  var container = document.querySelector('.container')
  var innerContainer = document.querySelector('.innercontainer')
  var boxSelector = document.querySelector('.box')
  var mainMenu = document.querySelector('.mainmenu')
  var startButton = document.querySelector('.newgame')
  var instructions = document.querySelector('.instructions')
  var playerArr = []
  var lives = 5
  var score = 0
  var combo = 0
  var maxCombo = 0
  var level = 1

  function gameSetup () {
    // container.style.opacity = '1'
    innerContainer.style.border = '1px solid white'
    // startButton.style.display = 'none'
    // instructions.style.display = 'none'
    mainMenu.style.display = 'none'
    createLifeCounter()
    createScoreCounter()
    createComboCounter()
    createLevelCounter()
    createScoreToProgress()
    createInGameMessage()
    lives = 5
    score = 0
    combo = 0
    maxCombo = 0
    level = 1
    setLife()
    setScore()
    setTimeout(chooseBox, 1000)
  }

  function addTitle () {
    var titleBox = document.createElement('div')
    titleBox.setAttribute('id','title')
    var title = ['T','Y','P','I','N','G',' ','M','A','D','N','E','S','S']
    mainMenu.appendChild(titleBox)
    function typeTitle () {
      var letter = document.createElement('span')
      letter.textContent = title[0]
      title.shift()
      titleBox.appendChild(letter)
      setTimeout(typeTitle, 200)
    }
    setTimeout(typeTitle, 100)
  }

  function showInstructions () {
    var instructions = document.createElement('div')
    instructions.setAttribute('id', 'instructionsWindow')
    instructions.innerHTML = '<br>WDI 11 proudly presents to you Typing Madness!<br><br>The goal of the game is very simple: Type the words as they appear on the screen contained in oval bubbles, before the oval bubbles land on the bottom of the window! Lose all your lives and you lose the game! Try to achieve as high a score as possible!<br><br>The game gets harder and harder as you progress and only ends when you die. During the game you may encounter <span id="instructionsSpan">red</span> hearts. These give extra lives to help you survive longer through the madness at the higher levels. However the words inside them are longer!<br><br>Go ahead and challenge yourself! How much of this madness can you handle??<br><br>Hint: Try to minimise your mistakes! Mistakes do not cause you to lose life but breaks your combo. Accumulating your combo increases your score faster!<br>You may also press the  `  button to skip the current box to get to the next higher box, but doing so costs you a life!'
    createButton(instructions, close, 'closeButton', 'X')
    createButton(instructions, areYouSureButton, 'areYouSureButton', 'I am ready!')
    function areYouSureButton () {
      createButton(instructions, closeWindowAndStartGame, 'closeInstructionsButton', 'Are you sure?')
    }
    function closeWindowAndStartGame () {
      close(instructions)
      gameSetup()
    }
    setTimeout(function () {
      instructions.style.opacity = '1'
    }, 10)
    container.appendChild(instructions)
  }

  function setLevel () {
    level = level + 1
    var levelCounter = document.querySelector('#levelCounter')
    levelCounter.textContent = 'Level: ' + level
    setScore()
  }

  function createLevelCounter () {
    var levelCounter = document.createElement('div')
    levelCounter.setAttribute('id', 'levelCounter')
    levelCounter.textContent = 'Level: ' + level
    innerContainer.appendChild(levelCounter)
  }

  function createScoreToProgress () {
    var scoreToProgress = document.createElement('div')
    scoreToProgress.setAttribute('id', 'scoreToProgress')
    innerContainer.appendChild(scoreToProgress)
  }

  function createComboCounter () {
    var comboCounter = document.createElement('div')
    comboCounter.setAttribute('id', 'comboCounter')
    innerContainer.appendChild(comboCounter)
  }

  function createLifeCounter () {
    var lifeCounter = document.createElement('div')
    lifeCounter.setAttribute('id', 'lifeCounter')
    lifeCounter.textContent = 'Lives'
    for (var i = 1; i <= 5; i++) {
      addHeart(lifeCounter)
    }
    innerContainer.appendChild(lifeCounter)
  }

  function createScoreCounter () {
    var scoreCounter = document.createElement('div')
    scoreCounter.setAttribute('id', 'scoreCounter')
    innerContainer.appendChild(scoreCounter)
  }

  function createGameoverWindow () {
    var gameoverWindow = document.createElement('div')
    gameoverWindow.setAttribute('id', 'gameoverWindow')
    gameoverWindow.innerHTML = 'Score: ' + score + '<br> Level: ' + level + '<br> Max Combo: ' + maxCombo
    createButton(gameoverWindow, restart, 'restartButton', 'Restart')
    createButton(gameoverWindow, toMainMenu, 'toGameMenuButton', 'Back to Main Menu')
    innerContainer.innerHTML = ''
    container.appendChild(gameoverWindow)
  }

  function createButton (appendTo, callback, id, content) {
    var button = document.createElement('button')
    button.setAttribute('class', 'gameoverButton')
    button.setAttribute('id', id)
    button.textContent = content
    button.addEventListener('click', function () {
      callback(appendTo)
    })
    appendTo.appendChild(button)
  }

  function toMainMenu (windowToClose) {
    close(windowToClose)
    mainMenu.style.display = ''
    innerContainer.style.border = ''
  }

  function restart (windowToClose) {
    close(windowToClose)
    gameSetup()
  }

  function close (windowToClose) {
    container.removeChild(windowToClose)
  }

  function setLife () {
    if (lives === 0) {
      innerContainer.innerHTML = ''
      var audio = document.createElement('audio')
      audio.src = 'assets/audio/gameover.wav'
      audio.autoplay = true
      container.appendChild(audio)
      inGameMessage('Game Over!', 1000)
      setTimeout(createGameoverWindow, 2000)
    }
  }

  function addHeart (appendTo) {
    var heart = document.createElement('img')
    heart.src = 'assets/images/redheart.png'
    heart.setAttribute('class', 'heart')
    appendTo.appendChild(heart)
  }

  function setScore () {
    var scoreCounter = document.querySelector('#scoreCounter')
    scoreCounter.textContent = 'Score: ' + score
    var scoreToProgress = document.querySelector('#scoreToProgress')
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
    if (combo > maxCombo) maxCombo = combo
    if (combo >= 10) {
      var comboCounter = document.querySelector('#comboCounter')
      comboCounter.textContent = 'Combo ' + combo
      comboCounter.style.top = '50px'
      comboCounter.style.transition = ''
      comboCounter.style.opacity = '1'
      setTimeout(function () {
        comboCounter.style.opacity = '0'
        comboCounter.style.transition = 'opacity 1s, top 0.1s'
        comboCounter.style.top = '45px'
      }, 10)
      if (combo % 50 === 0) {
        score += 1000
        inGameMessage('Nice!', 10)
        setScore()
      }
    }
  }

  function createInGameMessage () {
    var inGameMessage = document.createElement('div')
    inGameMessage.setAttribute('id', 'inGameMessage')
    container.appendChild(inGameMessage)
  }

  function inGameMessage (message, durationInMs) {
    var inGameMessage = document.querySelector('#inGameMessage')
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
      var identifier = randomNo(1, 100)
      if (identifier <= -4 + level && identifier <= 5) {
        addBox('heartBox')
      } else if (identifier <= 3 + level * 2) {
        addBox('twoBox')
      } else if (identifier <= 13 + level * 2) {
        addBox('upsideDown')
      } else {
        addBox('easy')
      }
      var timeInterval = randomNo(setLevelAdjustedParameter(level, 1000, 150), setLevelAdjustedParameter(level, 1000, 150) + 1000)
      setTimeout(chooseBox, timeInterval)
    }
  }

  function addBox (type) {
    var boxElem = document.createElement('div')
    var boxFallTime = setLevelAdjustedParameter(level, 5, 0.8)
    boxElem.style.transition = 'top ' + boxFallTime + 's linear, transform ' + boxFallTime + 's linear'
    boxElem.type = type
    boxElem.setAttribute('id', type)
    boxElem.setAttribute('class', 'box')
    boxElem.style.left = randomNo(0, 700) + 'px'
    if (type === 'upsideDown') {
      boxElem.style.transform = 'rotate(0deg)'
      setTimeout(function () {
        boxElem.style.transform = 'rotate(360deg)'
      }, 100)
    }
    addWord(boxElem, type)
    innerContainer.appendChild(boxElem)
    if (type === 'twoBox') {
      setTimeout(addBox, 300, 'easy')
    }
  }

  function addWord (appendTo, type) {
    var fullWordArr = words.array
    var inGameWordArr = fullWordArr.filter(function (word) {
      if (type === 'heartBox' && level >= 15) {
        return word.length === 11
      } else if (type === 'heartBox') {
        return word.length === randomNoRounded(6 + level / 3, 6 + level / 3)
      } else if (level >= 21) {
        return word.length === 11
      } else {
        return word.length === randomNoRounded(3 + level / 3, 4 + level / 3)
      }
    })
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
    } else if (type === 'heartBox') {
      innerBox.style.margin = '15px 0 0 0'
    }
    appendTo.appendChild(innerBox)
    setTimeout(moveBox, 200)
  }

  function moveBox () {
    var boxToMove = document.querySelectorAll('.box')
    boxToMove.forEach(function (elem) {
      // elem.style.transition = 'top 5s linear'
      elem.style.top = ('465px')
      if (elem.type === 'heartBox') elem.style.top = ('425px')
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
    var lifeCounter = document.querySelector('#lifeCounter')
    lifeCounter.removeChild(heartToRemove)
    var redBackground = document.createElement('div')
    redBackground.setAttribute('id', 'redBackground')
    setTimeout(function () {
      redBackground.style.opacity = '0'
    }, 10)
    setTimeout(function () {
      document.body.removeChild(redBackground)
    }, 1000)
    document.body.appendChild(redBackground)
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
        if (boxSelector.type === 'heartBox') spanId.style.color = 'white'
        combo += 1
        setCombo()
      } else if (playerArr[playerLastChar] === '`') {
        removeBox()
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
      boxSelector.successfulClear = true
      if (boxSelector.type === 'easy' || boxSelector.type === 'twoBox') score += 20 * playerArr.length
      if (boxSelector.type === 'upsideDown') score += 30 * playerArr.length
      if (boxSelector.type === 'heartBox') {
        var lifeCounter = document.querySelector('#lifeCounter')
        lives += 1
        addHeart(lifeCounter)
        inGameMessage('Extra Life!', 10)
        var audio = document.createElement('audio')
        audio.src = 'assets/audio/extralife.wav'
        audio.autoplay = true
        container.appendChild(audio)
      }
      if (level < 4) score += 50
      setScore()
      return true
    } else {
      return false
    }
  }

  addTitle()
  startButton.addEventListener('click', gameSetup)
  instructions.addEventListener('click', showInstructions)
  document.body.addEventListener('keydown', typeLetter)
}

document.addEventListener('DOMContentLoaded', gameInit)
