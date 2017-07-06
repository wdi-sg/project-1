document.addEventListener('DOMContentLoaded', init)

function init () {
  var topScoreRecord = document.querySelector('.score')
  var currentScore = document.querySelector('.currentscore')
  var timer = document.querySelector('.countdown')
  var tony = document.querySelector('.tony')
  tony.style.left = '295px'
  var startButton = document.querySelector('.startbutton')
  startButton.addEventListener('click', startGame)
  var retryButton = document.querySelector('.retrybutton')
  retryButton.addEventListener('click', restartGame)
  var tonyNumber = -1
  var asteroidNumber = 0
  var firstAsteroid = document.querySelector('.firstasteroid')
  firstAsteroid.style.top = '0px'
  var firstAsteroidTop = parseInt(firstAsteroid.style.top)
  var secondAsteroid = document.querySelector('.secondasteroid')
  secondAsteroid.style.top = '0px'
  var secondAsteroidTop = parseInt(secondAsteroid.style.top)
  var thirdAsteroid = document.querySelector('.thirdasteroid')
  thirdAsteroid.style.top = '0px'
  var thirdAsteroidTop = parseInt(thirdAsteroid.style.top)
  var fourthAsteroid = document.querySelector('.fourthasteroid')
  fourthAsteroid.style.top = '0px'
  var fourthAsteroidTop = parseInt(fourthAsteroid.style.top)
  var scorecounter = 0
  var gameOver = true
  var timeLeft = 6000
  var genAsteroid
  var moveAsteroid1Down
  var moveAsteroid2Down
  var moveAsteroid3Down
  var moveAsteroid4Down
  var randomNum = 0
  var firstFire = document.querySelector('.firstfire')
  var secondFire = document.querySelector('.secondfire')
  var thirdFire = document.querySelector('.thirdfire')
  var fourthFire = document.querySelector('.fourthfire')
  var hit = document.querySelector('.hit')
  var miss = document.querySelector('.miss')
  document.addEventListener('keyup', onKeyUp)
  var audio = document.createElement('audio')
  audio.src = 'audio/Ironmantheme.mp3'
  audio.autoplay = true
  tony.appendChild(audio)
  audio.volume=0.4
  audio.loop=true

  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
      if (event.keyCode === 90) {
        moveTonyOne()
      }
      if (event.keyCode === 88) {
        moveTonyTwo()
      }
      if (event.keyCode === 67) {
        moveTonyThree()
      }
      if (event.keyCode === 86) {
        moveTonyFour()
      }
      if (event.keyCode === 190) {
        chop()
      }
    }
  }

  function checkKeyCode (keycode) {
    if (keycode === 90 || keycode === 88 || keycode === 67 || keycode === 86 || keycode === 190) {
      return true
    }
    return false
  }

  function startGame () {
    var audio = document.createElement('audio')
    audio.src = 'audio/start.wav'
    audio.autoplay = true
    audio.volume =0.6
    tony.appendChild(audio)
    startButton.style.visibility = 'hidden'
    retryButton.style.visibility = 'hidden'
    gameOver = false
    firstAsteroid.style.visibility = 'hidden'
    secondAsteroid.style.visibility = 'hidden'
    thirdAsteroid.style.visibility = 'hidden'
    fourthAsteroid.style.visibility = 'hidden'
    timeLeft = 6000
    startTimer()
  }

  function randomFn (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function generateAsteroids () {
    var number = randomFn(1, 4)
    if (number !== randomNum) {
      if (number === 1) {
        firstAsteroid.style.visibility = 'visible'
        asteroidNumber = 1
        checkLevel()
      }
      if (number === 2) {
        secondAsteroid.style.visibility = 'visible'
        asteroidNumber = 2
        checkLevel()
      }
      if (number === 3) {
        thirdAsteroid.style.visibility = 'visible'
        asteroidNumber = 3
        checkLevel()
      }
      if (number === 4) {
        fourthAsteroid.style.visibility = 'visible'
        asteroidNumber = 4
        checkLevel()
      }
      randomNum = number
    } else {
      generateAsteroids()
    }
  }
  function checkLevel () {
    if (scorecounter <= 3) {
      levelOne()
    } else if (scorecounter <= 6) {
      levelTwo()
    } else if (scorecounter <= 9) {
      levelThree()
    } else if (scorecounter <= 12) {
      levelFour()
    } else if (scorecounter <= 15) {
      levelFive()
    } else {
      levelInfinite()
    }
  }
  function levelOne () {
    if (asteroidNumber === 1) {
      moveAsteroid1Down = setInterval(move1Down, 40)
    } else if (asteroidNumber === 2) {
      moveAsteroid2Down = setInterval(move2Down, 40)
    } else if (asteroidNumber === 3) {
      moveAsteroid3Down = setInterval(move3Down, 40)
    } else if (asteroidNumber === 4) {
      moveAsteroid4Down = setInterval(move4Down, 40)
    }
  }
  function levelTwo () {
    if (asteroidNumber === 1) {
      clearInterval(moveAsteroid1Down)
      moveAsteroid1Down = setInterval(move1Down, 30)
    } else if (asteroidNumber === 2) {
      clearInterval(moveAsteroid2Down)
      moveAsteroid2Down = setInterval(move2Down, 30)
    } else if (asteroidNumber === 3) {
      clearInterval(moveAsteroid3Down)
      moveAsteroid3Down = setInterval(move3Down, 30)
    } else if (asteroidNumber === 4) {
      clearInterval(moveAsteroid4Down)
      moveAsteroid4Down = setInterval(move4Down, 30)
    }
  }
  function levelThree () {
    if (asteroidNumber === 1) {
      clearInterval(moveAsteroid1Down)
      moveAsteroid1Down = setInterval(move1Down, 20)
    } else if (asteroidNumber === 2) {
      clearInterval(moveAsteroid2Down)
      moveAsteroid2Down = setInterval(move2Down, 20)
    } else if (asteroidNumber === 3) {
      clearInterval(moveAsteroid3Down)
      moveAsteroid3Down = setInterval(move3Down, 20)
    } else if (asteroidNumber === 4) {
      clearInterval(moveAsteroid4Down)
      moveAsteroid4Down = setInterval(move4Down, 20)
    }
  }
  function levelFour () {
    if (asteroidNumber === 1) {
      clearInterval(moveAsteroid1Down)
      moveAsteroid1Down = setInterval(move1Down, 15)
    } else if (asteroidNumber === 2) {
      clearInterval(moveAsteroid2Down)
      moveAsteroid2Down = setInterval(move2Down, 15)
    } else if (asteroidNumber === 3) {
      clearInterval(moveAsteroid3Down)
      moveAsteroid3Down = setInterval(move3Down, 15)
    } else if (asteroidNumber === 4) {
      clearInterval(moveAsteroid4Down)
      moveAsteroid4Down = setInterval(move4Down, 15)
    }
  }
  function levelFive () {
    if (asteroidNumber === 1) {
      clearInterval(moveAsteroid1Down)
      moveAsteroid1Down = setInterval(move1Down, 10)
    } else if (asteroidNumber === 2) {
      clearInterval(moveAsteroid2Down)
      moveAsteroid2Down = setInterval(move2Down, 10)
    } else if (asteroidNumber === 3) {
      clearInterval(moveAsteroid3Down)
      moveAsteroid3Down = setInterval(move3Down, 10)
    } else if (asteroidNumber === 4) {
      clearInterval(moveAsteroid4Down)
      moveAsteroid4Down = setInterval(move4Down, 10)
    }
  }
  function levelInfinite () {
    if (asteroidNumber === 1) {
      clearInterval(moveAsteroid1Down)
      moveAsteroid1Down = setInterval(move1Down, 6)
    } else if (asteroidNumber === 2) {
      clearInterval(moveAsteroid2Down)
      moveAsteroid2Down = setInterval(move2Down, 6)
    } else if (asteroidNumber === 3) {
      clearInterval(moveAsteroid3Down)
      moveAsteroid3Down = setInterval(move3Down, 6)
    } else if (asteroidNumber === 4) {
      clearInterval(moveAsteroid4Down)
      moveAsteroid4Down = setInterval(move4Down, 6)
    }
  }
  function move1Down () {
    if (firstAsteroidTop < 270) {
      firstAsteroidTop += 2
      firstAsteroid.style.top = firstAsteroidTop + 'px'
    } else {
      firstAsteroid.style.visibility = 'hidden'
      firstAsteroidTop = 0
      firstAsteroid.style.top = '0px'
      clearInterval(moveAsteroid1Down)
    }
  }
  function move2Down () {
    if (secondAsteroidTop < 270) {
      secondAsteroidTop += 2
      secondAsteroid.style.top = secondAsteroidTop + 'px'
    } else {
      secondAsteroid.style.visibility = 'hidden'
      secondAsteroidTop = 0
      secondAsteroid.style.top = '0px'
      clearInterval(moveAsteroid2Down)
    }
  }
  function move3Down () {
    if (thirdAsteroidTop < 270) {
      thirdAsteroidTop += 2
      thirdAsteroid.style.top = thirdAsteroidTop + 'px'
    } else {
      thirdAsteroid.style.visibility = 'hidden'
      thirdAsteroidTop = 0
      thirdAsteroid.style.top = '0px'
      clearInterval(moveAsteroid3Down)
    }
  }
  function move4Down () {
    if (fourthAsteroidTop < 270) {
      fourthAsteroidTop += 2
      fourthAsteroid.style.top = fourthAsteroidTop + 'px'
    } else {
      fourthAsteroid.style.visibility = 'hidden'
      fourthAsteroidTop = 0
      fourthAsteroid.style.top = '0px'
      clearInterval(moveAsteroid4Down)
    }
  }

  function playSound(){
    var audio = document.createElement('audio')
    audio.src = 'audio/Fly.wav'
    audio.autoplay = true
    tony.appendChild(audio)
    audio.volume = 0.1
  }
  function moveTonyOne () {
    tony.style.backgroundImage = "url('images/Iron-Man.png')"
    tony.style.left = '55px'
    tonyNumber = 1
    playSound()
  }
  function moveTonyTwo () {
    tony.style.backgroundImage = "url('images/Iron-Man.png')"
    tony.style.left = '215px'
    tonyNumber = 2
    playSound()
  }
  function moveTonyThree () {
    tony.style.backgroundImage = "url('images/Iron-Man.png')"
    tony.style.left = '375px'
    tonyNumber = 3
    playSound()
  }
  function moveTonyFour () {
    tony.style.backgroundImage = "url('images/Iron-Man.png')"
    tony.style.left = '535px'
    tonyNumber = 4
    playSound()
  }

  function chop () {
    var audio = document.createElement('audio')
    audio.src = 'audio/shoot.wav'
    audio.autoplay = true
    tony.appendChild(audio)
    audio.volume = 0.3
    if ((tonyNumber === 1 && firstAsteroid.style.visibility === 'visible') || (tonyNumber === 2 && secondAsteroid.style.visibility === 'visible') || (tonyNumber === 3 && thirdAsteroid.style.visibility === 'visible') || (tonyNumber === 4 && fourthAsteroid.style.visibility === 'visible')) {
      scorecounter += 1
      if (scorecounter < 10) {
        timeLeft += 300
      } else {
        timeLeft += 200
      }
      if (tonyNumber === 1) {
        refreshOne()
      } if (tonyNumber === 2) {
        refreshTwo()
      } if (tonyNumber === 3) {
        refreshThree()
      } if (tonyNumber === 4) {
        refreshFour()
      }
      hit.style.opacity = '1.0'
      miss.style.opacity='0'
    } else {
      timeLeft -= 300
      hit.style.opacity = '0'
      miss.style.opacity = '1.0'
    }
    if (tonyNumber === 1) {
      firstFire.style.opacity = '1.0'
    } if (tonyNumber === 2) {
      secondFire.style.opacity = '1.0'
    } if (tonyNumber === 3) {
      thirdFire.style.opacity = '1.0'
    } if (tonyNumber === 4) {
      fourthFire.style.opacity = '1.0'
    }
    tony.style.backgroundImage = "url('images/ironmanshooting.png')"
    setTimeout(colorChanger, 100)
    displayScore()
    setTimeout(disappearHitMiss,500)
  }
  function disappearHitMiss() {
    miss.style.opacity='0'
    hit.style.opacity = '0'
  }
  function colorChanger () {
    firstFire.style.opacity = '0'
    secondFire.style.opacity = '0'
    thirdFire.style.opacity = '0'
    fourthFire.style.opacity = '0'
  }
  function refreshOne () {
    firstAsteroid.style.visibility = 'hidden'
    firstAsteroidTop = 0
    firstAsteroid.style.top = '0px'
    clearInterval(moveAsteroid1Down)
    asteroidNumber = 0
  }
  function refreshTwo () {
    secondAsteroid.style.visibility = 'hidden'
    secondAsteroidTop = 0
    secondAsteroid.style.top = '0px'
    clearInterval(moveAsteroid2Down)
    asteroidNumber = 0
  }
  function refreshThree () {
    thirdAsteroid.style.visibility = 'hidden'
    thirdAsteroidTop = 0
    thirdAsteroid.style.top = '0px'
    clearInterval(moveAsteroid3Down)
    asteroidNumber = 0
  }
  function refreshFour () {
    fourthAsteroid.style.visibility = 'hidden'
    fourthAsteroidTop = 0
    fourthAsteroid.style.top = '0px'
    clearInterval(moveAsteroid4Down)
    asteroidNumber = 0
  }

  function startTimer () {
    var elem = timer
    var timerId = setInterval(countdown, 1)

    function countdown () {
      if (timeLeft < 0) {
        clearTimeout(timerId)
        gameOver = true
        clearInterval(genAsteroid)
        clearInterval(moveAsteroid1Down)
        clearInterval(moveAsteroid2Down)
        clearInterval(moveAsteroid3Down)
        clearInterval(moveAsteroid4Down)
        isGameOver()
      } else {
        elem.innerHTML = timeLeft
        timeLeft--
      }
    }
    genAsteroid = setInterval(generateAsteroids, 3000)
  }
  function displayScore () {
    currentScore.innerHTML = scorecounter
    if (scorecounter === 3) {
      clearInterval(genAsteroid)
      genAsteroid = setInterval(generateAsteroids, 2200)
    } if (scorecounter === 6) {
      clearInterval(genAsteroid)
      genAsteroid = setInterval(generateAsteroids, 1500)
    } if (scorecounter === 9) {
      clearInterval(genAsteroid)
      genAsteroid = setInterval(generateAsteroids, 1125)
    } if (scorecounter === 12) {
      clearInterval(genAsteroid)
      genAsteroid = setInterval(generateAsteroids, 750)
    } if (scorecounter === 15) {
      clearInterval(genAsteroid)
      genAsteroid = setInterval(generateAsteroids, 450)
    }
  }
  function isGameOver () {
    var topScore = parseInt(topScoreRecord.innerHTML)
    if (scorecounter > topScore) {
      setTimeout(function () { alert('NEW HIGH SCORE!') }, 100)
      topScoreRecord.innerHTML = scorecounter
    } else {
      setTimeout(function () { alert('please try again') }, 100)
    }
    retryButton.style.visibility = 'visible'
    timer.innerHTML = '0'
    var audio = document.createElement('audio')
    audio.src = 'audio/gameend.wav'
    audio.autoplay = true
    tony.appendChild(audio)
    audio.volume=0.5
  }

  function restartGame () {
    tony.style.left = '295px'
    tonyNumber = -1
    asteroidNumber = 0
    firstAsteroid.style.top = '0px'
    firstAsteroidTop = 0
    secondAsteroid.style.top = '0px'
    secondAsteroidTop = 0
    thirdAsteroid.style.top = '0px'
    thirdAsteroidTop = 0
    fourthAsteroid.style.top = '0px'
    fourthAsteroidTop = 0
    scorecounter = 0
    currentScore.innerHTML = scorecounter
    tony.style.backgroundImage = "url('images/Iron-Man.png')"
    startGame()
  }
}
