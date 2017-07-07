document.addEventListener('DOMContentLoaded', init)

function init () {
// setTimeout(function () {alert("DO READ INSTRUCTIONS BEFORE START")}, 1000)
  var u1 = document.getElementById('u1')
  var u2 = document.getElementById('u2')
  var u3 = document.getElementById('u3')
  var u4 = document.getElementById('u4')
  var u5 = document.getElementById('u5')
  var u6 = document.getElementById('u6')
  var u7 = document.getElementById('u7')
  var allUs = [u1, u2, u3, u4, u5, u6, u7]
  var hamItem = document.querySelectorAll('.hamItem')
// generated hamburger
  var d1 = document.getElementById('d1')
  var d2 = document.getElementById('d2')
  var d3 = document.getElementById('d3')
  var d4 = document.getElementById('d4')
  var d5 = document.getElementById('d5')
  var d6 = document.getElementById('d6')
  var d7 = document.getElementById('d7')
  var allDs = [d1, d2, d3, d4, d5, d6, d7]
  var hamObj = document.querySelectorAll('.hamObj')
  var gameStart = false
  var counter = 0
  var highScore = 0
  var timer = 60
  var timeCount = document.querySelector('.timer')
  var inputShake = document.querySelector('.userinput')
  var interval = null

  document.addEventListener('keyup', onKeyUp)
  var index = 4
  // player chooses ingredients to the userinput screen
  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
      if (event.keyCode === 81) {
        squish1()
        hamItem[index].classList.remove('hamItem')
        hamItem[index].classList.add('cucumber')
        index--
        // if (checkIngredient() === false )
      }
      if (event.keyCode === 87) {
        squish2()
        hamItem[index].classList.remove('hamItem')
        hamItem[index].classList.add('meat')
        index--
      }
      if (event.keyCode === 69) {
        squish1()
        hamItem[index].classList.add('onion')
        hamItem[index].classList.remove('hamItem')
        index--
      }
      if (event.keyCode === 82) {
        squish2()
        hamItem[index].classList.add('lettuce')
        hamItem[index].classList.remove('hamItem')
        index--
      }
      if (event.keyCode === 84) {
        squish1()
        hamItem[index].classList.add('cheese')
        hamItem[index].classList.remove('hamItem')
        index--
      }
      if (event.keyCode === 32) {
        squishb()
        u1.classList.add('topbun')
        if (checkIngredient()) {
          setTimeout(function () {
            resetNow()
            gamePlay()
          }, 1000)
          counter = counter + 10
          point()
        } else {
          erro()
          inputShake.classList.add('shake-hard', 'shake-constant')
          setTimeout(function () {
            resetNow()
            gamePlay()
            inputShake.classList.remove('shake-hard', 'shake-constant')
          }, 1000)
          counter = counter - 10
          point()
        }
      }
    }
  }// closing for onKeyUp

  function checkIngredient () {
    for (var i = allDs.length - 2; i >= 1; i--) {
      if (allDs[i].className.substr(0, 3) !== allUs[i].className.substr(0, 3)) {
        return false
      }
    } return true
  }

  function resetClassPlayer () {
    u1.classList.remove('topbun')
    u2.classList = 'hamItem'
    u3.classList = 'hamItem'
    u4.classList = 'hamItem'
    u5.classList = 'hamItem'
    u6.classList = 'hamItem'
    index = 4
  }

  // for generating the hamburger display
  var count = 4
  function randomizeIngredient () {
    var creation = Math.floor(Math.random() * 5)
  // console.log(creation)
    if (creation === 0) {
      hamObj[count].classList.add('cucumber')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'cucumber'
    }
    if (creation === 1) {
      hamObj[count].classList.add('meat')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'meat'
    }
    if (creation === 2) {
      hamObj[count].classList.add('onion')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'onion'
    }
    if (creation === 3) {
      hamObj[count].classList.add('lettuce')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'lettuce'
    }
    if (creation === 4) {
      hamObj[count].classList.add('cheese')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'cheese'
    }
  }

  function resetClassDisplay () {
    d2.classList = 'hamObj'
    d3.classList = 'hamObj'
    d4.classList = 'hamObj'
    d5.classList = 'hamObj'
    d6.classList = 'hamObj'
    count = 4
  }

  // Burger levels creation
  // 2 random ingredients
  function level1 () {
    for (var i = 0; i < 2; i++) {
      randomizeIngredient()
    } return true
  }
  // 3 random ingredients
  function level2 () {
    for (var i = 0; i < 3; i++) {
      randomizeIngredient()
    } return true
  }
  // 4 random ingredients
  function level3 () {
    for (var i = 0; i < 4; i++) {
      randomizeIngredient()
    } return true
  }
  // 5 random ingredients
  function level4 () {
    for (var i = 0; i < 5; i++) {
      randomizeIngredient()
    } return true
  }
  // end of Burger levels creation

    // function for startgame
  function gamePlay () {
    if (counter <= 30) {
      level1()
    }
    if (counter > 30 && counter <= 70) {
      level2()
    }
    if (counter > 70 && counter <= 110) {
      level3()
    }
    if (counter > 110) {
      level4()
    }
  } // end of startgame

  document.addEventListener('keyup', startGame)
  function startGame (event) {
    if (event.keyCode === 79) {
      if (gameStart === false) {
        gamePlay()
        point()
        if (interval === null) {
          interval = setInterval(time, 1000)
        } else {
          clearInterval(interval)
          interval = setInterval(time, 1000)
        }
      }
    }gameStart = true
  }

  document.addEventListener('keyup', resetGame)
  function resetNow () {
    resetClassPlayer()
    resetClassDisplay()
  }

  function resetGame () {
    if (event.keyCode === 80) {
      resetNow()
      counter = 0
      timer = 60
      timeCount.textContent = 1 + ' min'
      gameStart = false
      point()
      clearInterval(interval)
      interval = null
    }
  }

  function time () {
    if (timer > 0) {
      timer--
      timeCount.textContent = timer + 's'
    }
    if (timer === 0) {
      alert('Time\'s Up')
      updateHighScore()
      timer = 60
    }
  }

  function point () {
    document.querySelector('.current').innerHTML = counter + ' points'
  }

  function updateHighScore () {
    if (counter > highScore) {
      highScore = counter
    }
    document.querySelector('.top').innerHTML = 'High Score : ' + highScore + ' points'
  }

  var sound1 = document.querySelector('#squish1')
  var sound2 = document.querySelector('#squish2')
  var sound3 = document.querySelector('#squishb')
  var error = document.querySelector('#erro')

  function squish1 () {
    sound1.play()
  }

  function squish2 () {
    sound2.play()
  }

  function squishb () {
    sound3.play()
  }

  function erro () {
    sound1.pause()
    sound1.currentTime = 0
    sound2.pause()
    sound2.currentTime = 0
    sound3.pause()
    sound3.currentTime = 0
    error.play()
  }

  function checkKeyCode (keycode) {
    if (keycode === 81 || keycode === 87 || keycode === 69 || keycode === 82 || keycode === 84 || keycode === 32 || keycode === 79 || keycode === 80) {
      return true
    }
    return false
  }// closing for checkKeyCode
}// closing for init
