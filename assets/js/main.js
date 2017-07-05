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
    // instructions.style.top = '-500px'
    instructions.style.height = '500px'
    instructions.style.width = '800px'
    instructions.style.border = '1px solid white'
    instructions.style.backgroundColor = 'black'
    instructions.style.zIndex = '3'
    instructions.style.padding = '10px'
    instructions.style.fontSize = '15pt'
    instructions.style.textAlign = 'justify'
    instructions.style.transition = 'opacity 0.5s'
    instructions.style.opacity = '0'
    // instructions.setAttribute('class', 'instructionsWindow')
    instructions.innerHTML = '<br>WDI 11 proudly presents to you Typing Madness!<br><br>The goal of the game is very simple: Type the words as they appear on the screen contained in oval bubbles, before the oval bubbles land on the bottom of the window! Lose all your lives and you lose the game! Try to achieve as high a score as possible!<br><br>The game gets harder and harder as you progress and only ends when you die. During the game you may encounter <span id="instructionsSpan">red</span> colored bubbles. These give extra lives to help you survive longer through the madness at the higher levels. However the words inside them are longer!<br><br>Go ahead and challenge yourself! How much of this madness can you handle??<br><br>Hint: Try to minimise your mistakes! Mistakes do not cause you to lose life but breaks your combo. Accumulating your combo increases your score faster!<br>You may also press the  `  button to skip the current box to get to the next higher box, but doing so costs you a life!'
    instructions.style.position = 'absolute'
    createButton(instructions, close, 0, 0, 'X', '12pt', '25px')
    createButton(instructions, areYouSureButton, '425px', '335px', 'I am ready!', '15pt', '150px')
    function areYouSureButton () {
      createButton(instructions, closeWindowAndStartGame, '425px', '335px', 'Are you sure?', '15pt', '150px')
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
    var levelCounter = document.querySelector('.levelCounter')
    levelCounter.textContent = 'Level: ' + level
    setScore()
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
    innerContainer.appendChild(levelCounter)
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
    innerContainer.appendChild(scoreToProgress)
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
    innerContainer.appendChild(comboCounter)
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
      addHeart(lifeCounter)
    }
    innerContainer.appendChild(lifeCounter)
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
    innerContainer.appendChild(scoreCounter)
  }

  function createGameoverWindow () {
    var gameoverWindow = document.createElement('div')
    gameoverWindow.setAttribute('class', 'gameoverWindow')
    gameoverWindow.style.height = '200px'
    gameoverWindow.style.width = '400px'
    gameoverWindow.style.top = '150px'
    gameoverWindow.style.left = '200px'
    // gameoverWindow.style.border = '1px solid white'
    gameoverWindow.style.position = 'absolute'
    gameoverWindow.style.textAlign = 'center'
    gameoverWindow.style.color = 'white'
    gameoverWindow.style.backgroundColor = 'black'
    gameoverWindow.style.fontSize = '20pt'
    gameoverWindow.innerHTML = 'Score: ' + score + '<br> Level: ' + level + '<br> Max Combo: ' + maxCombo
    createButton(gameoverWindow, restart, '115px', '150px', 'Restart', '15pt', '100px')
    createButton(gameoverWindow, toMainMenu, '150px', '100px', 'Back to Main Menu', '15pt', '200px')
    innerContainer.innerHTML = ''
    container.appendChild(gameoverWindow)
  }

  function createButton (appendTo, callback, top, right, content, fontsize, width) {
    var button = document.createElement('button')
    button.style.top = top
    button.style.right = right
    button.style.width = width
    button.style.position = 'absolute'
    button.style.margin = 'auto'
    button.style.textAlign = 'center'
    button.style.fontSize = fontsize
    button.style.padding = '0px'
    button.style.backgroundColor = 'black'
    // button.style.border = '1px solid black'
    button.textContent = content
    button.addEventListener('click', function () {
      callback(appendTo)
    })
    appendTo.appendChild(button)
  }

  function toMainMenu () {
    var gameoverWindow = document.querySelector('.gameoverWindow')
    container.removeChild(gameoverWindow)
    mainMenu.style.display = ''
    innerContainer.style.border = ''
  }

  function restart () {
    var gameoverWindow = document.querySelector('.gameoverWindow')
    container.removeChild(gameoverWindow)
    gameSetup()
  }

  function close (windowToClose) {
    container.removeChild(windowToClose)
  }

  function setLife () {
    if (lives === 0) {
      innerContainer.innerHTML = ''
      var audio = document.createElement('audio')
      audio.src = '/assets/audio/gameover.wav'
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
    heart.style.height = '40px'
    heart.style.width = '40px'
    heart.style.margin = '1px'
    appendTo.appendChild(heart)
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
    if (combo > maxCombo) maxCombo = combo
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
      if (combo % 50 === 0) {
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
    // boxElem.style.height = '20px'
    // boxElem.style.width = '80px'
    boxElem.style.padding = '5px 10px'
    var boxFallTime = setLevelAdjustedParameter(level, 5, 0.8)
    console.log('top ' + boxFallTime.toString() + 's linear')
    boxElem.style.transition = 'top ' + boxFallTime + 's linear, transform ' + boxFallTime + 's linear'
    console.log(boxElem.style.transition)
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
    if (type === 'upsideDown') {
      boxElem.style.backgroundColor = 'cyan'
      boxElem.style.transform = 'rotate(0deg)'
      setTimeout(function () {
        boxElem.style.transform = 'rotate(360deg)'
      }, 100)
    } else if (type === 'heartBox') {
      boxElem.id = 'heartBox'
      boxElem.style.background = 'url(\'assets/images/redheart.png\''
      boxElem.style.borderRadius = ''
      boxElem.style.backgroundSize = 'cover'
      // boxElem.style.backgroundSize = '100%'
      boxElem.style.width = '75px'
      boxElem.style.height = '71px'
      boxElem.style.backgroundRepeat = 'no-repeat'
      boxElem.style.backgroundPosition = 'center center'
      boxElem.style.fontSize = '12pt'
    } else {
      boxElem.style.backgroundColor = 'pink'
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
      console.log(randomNoRounded(3 + level / 3, 4 + level / 3))
      if (type === 'heartBox') {
        return word.length === randomNoRounded(6 + level / 3, 6 + level / 3)
      } else {
        return word.length === randomNoRounded(3 + level / 3, 4 + level / 3)
      }
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
    var lifeCounter = document.querySelector('.lifeCounter')
    lifeCounter.removeChild(heartToRemove)
    var redBackground = document.createElement('div')
    redBackground.style.height = '100%'
    redBackground.style.width = '100%'
    redBackground.style.top = '0px'
    redBackground.style.left = '0px'
    redBackground.style.backgroundColor = 'red'
    redBackground.style.opacity = '0.5'
    redBackground.style.transition = 'opacity 0.5s'
    redBackground.style.position = 'absolute'
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
        var lifeCounter = document.querySelector('.lifeCounter')
        lives += 1
        addHeart(lifeCounter)
        inGameMessage('Extra Life!', 10)
        var audio = document.createElement('audio')
        audio.src = '/assets/audio/extralife.wav'
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
