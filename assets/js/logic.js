//Do I still need to init if everything is in an eventListener?

document.addEventListener('keydown', function (event) {
  arrayChecker()
  //Z key
  if (event.keyCode === 90) {
    keyPad = 1
  }
  //X key
  if (event.keyCode === 88) {
    keyPad = 2
  }
  //N key
  if (event.keyCode === 78) {
    keyPad = 3
  }
  //M key
  if (event.keyCode === 77) {
    keyPad = 4
  }
  //If space-bar is triggered and the array is empty (meaning the game has not started)
  if (event.keyCode === 32 && arrayState === 1) {
    startGame()
    intervalForTimer()
    assign()
    tiles()
  //If the game buttons are triggered and the array has elements (meaning the game has started)
  } else if (arrayState === 2 && keyPad > 0) {
    //If the correct game button is triggered
    if (gameArray[2] == keyPad) {
      score ()
      gameTurn ()
      assign()
      tiles ()
      //If the wrong button is triggered
    } else {
      alert('Game Over')
      restart ()
      clearInterval(interval)
      assign()
      tiles()
    }
  }
})
