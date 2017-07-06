/////////////////////////////
// Declares DOM elements
/////////////////////////////

var listDrawPile = document.querySelector('.DrawPile')
var listHumanPlayerPile = document.querySelector('.HumanPlayerPile')
var listComputerPlayerPile = document.querySelector('.ComputerPlayerPile')
var listDiscardPile = document.querySelector('.DiscardPile')
var startButton = document.querySelector('.StartGame')
var resetButton = document.querySelector('.ResetGame')
var drawCardButton = document.querySelector('.DrawCard')
var HumanPlayerCardsArr = [] // Will be defined at startGame()
var GameMessage = document.querySelector('.GameMessage')

/////////////////////////////
// Functions for game action events
/////////////////////////////

function startGame () {
  if (GameStarted === false) {
    DrawPile = shuffle(DrawPile)

    // while ((DrawPile[DrawPile.length-1].value === vWild) || (DrawPile[DrawPile.length-1].value === DrawFour)) {
    //   //ensures no Wild or Wild DrawFour for starting card in DiscardPile
    //   DrawPile = shuffle(DrawPile)
    // }

    DiscardPile = dealCard(1)
    HumanPlayerPile = dealCard(7)
    ComputerPlayerPile = dealCard(7)


    // Presents Human Player's Pile
    HumanPlayerPile.forEach(function (card, index) {
          var listCard = document.createElement('li')
          listCard.innerHTML = '<a id="hp'+index+'" href="#">'+card.label+'</a>'  //let listed card be clickable
          listHumanPlayerPile.appendChild(listCard)
          HumanPlayerCardsArr[index] = document.querySelector('#hp'+index)
          HumanPlayerCardsArr[index].onclick = function (e) {
            var humanPlayed = playCard(Human, parseInt(e.target.id.substring(2,e.target.id.length))) //input: player & card clicked
            if (humanPlayed && (DoNotSwitchTurn === false)) {
              var computerPlayed = playCard(Computer,null)

            } else {
              //GameMessage.innerHTML = 'Human Player, awaiting your play...'
            }
            return false
          }
        })

    // Presents Computer Player's Pile
    ComputerPlayerPile.forEach(function (card) {
          var listCard = document.createElement('li')
          listCard.textContent = card.label
          listComputerPlayerPile.appendChild(listCard)
        })

    // Presents opening card from Draw Pile
    DiscardPile.forEach(function (card) {
          var listCard = document.createElement('li')
          listCard.textContent = card.label
          listDiscardPile.appendChild(listCard)
        })

    // unlist intial DrawPile
    while (listDrawPile.hasChildNodes()) {
      listDrawPile.removeChild(listDrawPile.firstChild);
    }

    // relist shuffled DrawPile with dealt & opening cards removed
    DrawPile.forEach(function (card) {
          var listCard = document.createElement('li')
          listCard.textContent = card.label
          listDrawPile.appendChild(listCard)
        })

    GameStarted = true

    window.setTimeout(function () {
      GameMessage.innerHTML = 'Human Player, awaiting your play...'
    }, 500)
  }
} // end of startGame

function resetGame () {
  GameStarted = false
  window.location.reload(true)
}

function clearPileUX (whichPile) {
  if (whichPile === Human) {
    while (listHumanPlayerPile.hasChildNodes()) {
      listHumanPlayerPile.removeChild(listHumanPlayerPile.firstChild)
    }
  } else if (whichPile === Computer) {
    while (listComputerPlayerPile.hasChildNodes()) {
      listComputerPlayerPile.removeChild(listComputerPlayerPile.firstChild)
    }
  } else if (whichPile === Discard) {
    while (listDiscardPile.hasChildNodes()) {
      listDiscardPile.removeChild(listDiscardPile.firstChild)
    }
  } else if (whichPile === Draw) {
    while (listDrawPile.hasChildNodes()) {
      listDrawPile.removeChild(listDrawPile.firstChild)
    }
  }
}

function displayPileUX (whichPile) {
  if (whichPile === Human) {
    HumanPlayerPile.forEach(function (card, index) {
          var listCard = document.createElement('li')
          listCard.innerHTML = '<a id="hp'+index+'" href="#">'+card.label+'</a>'  //let listed card be clickable
          listHumanPlayerPile.appendChild(listCard)
          HumanPlayerCardsArr[index] = document.querySelector('#hp'+index)
          HumanPlayerCardsArr[index].onclick = function (e) {
            var humanPlayed = playCard(Human, parseInt(e.target.id.substring(2,e.target.id.length))) //input: player & card clicked
            if (humanPlayed && (DoNotSwitchTurn === false)) {
              var computerPlayed = playCard(Computer,null)
              // if computerPlayed = true
            } else {
              //GameMessage.innerHTML = 'Human Player, awaiting your play...'
            }
            return false
          }
        })
  } else if (whichPile === Computer) {
    ComputerPlayerPile.forEach(function (card) {
          var listCard = document.createElement('li')
          listCard.textContent = card.label
          listComputerPlayerPile.appendChild(listCard)
        })
  } else if (whichPile === Discard) {
    //console.log('hello');
    DiscardPile.forEach(function (card) {
          var listCard = document.createElement('li')
          listCard.textContent = card.label
          listDiscardPile.appendChild(listCard)
        })
  } else if (whichPile === Draw) {
    DrawPile.forEach(function (card) {
          var listCard = document.createElement('li')
          listCard.textContent = card.label
          listDrawPile.appendChild(listCard)
        })
  }
}

function shoutUNO () {
  var temp = GameMessage.innerHTML
  GameMessage.innerHTML = 'UNO!'
  window.setTimeout(function () {
    GameMessage.innerHTML = temp
  }, 3000)
}

function shoutWin (winner) {
  if (winner === Human) {
    var winPlayer = 'Human Player'
  } else {
    var winPlayer = 'Computer Player'
  }
  GameMessage.innerHTML = winPlayer+', you WIN!'
  window.setTimeout(function () {
    GameMessage.innerHTML = 'Resetting game...'
  }, 5000)
}

function playCard (player, index) { // player: 0=computer, 1=human; index: card index of player pile
  var played = true
  if (whichPlayerTurn === Human) {  // ensures human player cannot play when computer still calculating moves

    window.setTimeout(function () {
      GameMessage.innerHTML = 'Human Player, awaiting your play...'
    }, 5000)

    if (isPlayableCard(player, index)) {
      //alert('Can play this')
      DiscardPile.push(discardCard(Human, index)[0]) // discard card from HumanPlayerPile & push it to DiscardPile
      discardCard(Discard,0) // remove old card in DiscardPile
      clearPileUX(Human)
      displayPileUX(Human)
      clearPileUX(Discard)
      displayPileUX(Discard)
      if (HumanPlayerPile.length === 1) {
        shoutUNO()
      } else if (HumanPlayerPile.length === 0) {
        shoutWin(Human)
        resetGame()
      }
      if (DiscardPile[0].value === Skip) {
        DoNotSwitchTurn = true
      } else {
        whichPlayerTurn = Computer
        DoNotSwitchTurn = false
      }
      return played
    } else {
      alert ('Cannot play this card!') // to revert to no action if card not playable
      return !played
    }
  } else if (whichPlayerTurn === Computer) {

    window.setTimeout(function () {
      GameMessage.innerHTML = 'Awaiting Computer Player play...'
    }, 3000)

    if (hasPlayablePile(Computer)) {

      window.setTimeout(function () {
        // Simplified strategy for computer to play first playable card
        var card = 0
        var selectedCardIndex = 999

        for (var card = 0; card < ComputerPlayerPile.length; card++) {
          if ((ComputerPlayerPile[card].value === DiscardPile[0].value) || (ComputerPlayerPile[card].color === DiscardPile[0].color)) {
            selectedCardIndex = card
            break
          }
        }

        // while ((ComputerPlayerPile[card].value !== DiscardPile[0].value) && (ComputerPlayerPile[card].color !== DiscardPile[0].color)) {
        //   card += 1 // Search for first card with same color or value
        // }
        if (selectedCardIndex === 999) {
          alert('system error')
        } else {
          DiscardPile.push(discardCard(Computer, selectedCardIndex)[0]) // discard card from ComputerPlayerPile & push it to DiscardPile
          discardCard(Discard,0) // remove old card in DiscardPile
          clearPileUX(Computer)
          displayPileUX(Computer)
          clearPileUX(Discard)
          displayPileUX(Discard)
          if (ComputerPlayerPile.length === 1) {
            shoutUNO()
          } else if (ComputerPlayerPile.length === 0) {
            shoutWin(Computer)
            resetGame()
          }
          if (DiscardPile[0].value === Skip) {
            DoNotSwitchTurn = true
          } else {
            console.log('xxxx')
            whichPlayerTurn = Human
            DoNotSwitchTurn = false
            window.setTimeout(function () {
              GameMessage.innerHTML = 'Human Player, awaiting your play...'
              drawCard(Computer)
            }, 3000)
          }
        }
      }, 3000)
      return played
    } else {
      window.setTimeout(function () {
        GameMessage.innerHTML = 'Computer has no card to play...Draws one...'
        drawCard(Computer)
      }, 3000)
      console.log('nothing to play');

      window.setTimeout(function () {
        GameMessage.innerHTML = 'Human Player, awaiting your play...' // switches to Human turn
        whichPlayerTurn = Human
        DoNotSwitchTurn = false
      }, 6000)


      return !played
    }
  }
}

function drawCard (player) {
  //console.log('player: '+player)
  if (hasPlayablePile(player) && (player !== Computer)) {
    alert('You have playable card(s). No need to draw.')
  } else {
    if (player === Human) {
      //console.log('at drawCard '+discardCard(Draw, null).label);
      HumanPlayerPile.push(discardCard(Draw, null)[0])
      clearPileUX(Human)
      displayPileUX(Human)
      clearPileUX(Draw)
      displayPileUX(Draw)

    } else if (player === Computer) {
      ComputerPlayerPile.push(discardCard(Draw, null)[0])
      clearPileUX(Computer)
      displayPileUX(Computer)
      clearPileUX(Draw)
      displayPileUX(Draw)
    }
 }
}

function clickDrawCardButton () {
  if ((GameStarted === true) && (whichPlayerTurn === Human)) { // ensures no reaction if game not yet started or not Human's turn
    drawCard(Human)
    whichPlayerTurn = Computer // switches to computer turn and activates computer play
    DoNotSwitchTurn = false
    playCard(Computer, null)
  }
}

/////////////////////////////
// Generates and lists unshuffled DrawPile and
// await game action events
/////////////////////////////

DrawPile = generateDrawPile()
for (var i = 0; i < DrawPile.length; i++) {
  DrawPile[i].label = labelCard(DrawPile[i])
}
DrawPile.forEach(function (card) {
      var listCard = document.createElement('li')
      listCard.textContent = card.label
      listDrawPile.appendChild(listCard)
    })

startButton.addEventListener('click', startGame)
resetButton.addEventListener('click', resetGame)
drawCardButton.addEventListener('click', clickDrawCardButton)
