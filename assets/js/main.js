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

    DiscardPile = dealCard(1)
    HumanPlayerPile = dealCard(7)
    ComputerPlayerPile = dealCard(7)

    // Presents Human Player's Pile AS A LIST OF CLICKABLE CARD IMAGES
    HumanPlayerPile.forEach(function (card, index) {

          var img = document.createElement('img')
          img.src = card.image
          img.id = 'hp'+index
          listHumanPlayerPile.appendChild(img)

          HumanPlayerCardsArr[index] = document.querySelector('#hp'+index)
          HumanPlayerCardsArr[index].onclick = function (e) {
            if (whichPlayerTurn === Human) {
              // ensures human player's click does not activate play if computer is still calculating playing
              var humanDiscardSuccessful = playCard(Human, parseInt(e.target.id.substring(2,e.target.id.length))) //input: player & card clicked
              if (humanDiscardSuccessful) {  // let Computer play only if Human has completed discarding a valid card
                whichPlayerTurn = Computer
                var computerDiscardSuccessful = playCard(Computer,null)
                if (computerDiscardSuccessful) {
                  whichPlayerTurn = Human
                }
              }
            }
            return false // so as not to follow thru if click cancelled
          }
        })


    // Presents Computer Player's Pile AS A LIST
    ComputerPlayerPile.forEach(function (card) {
          var listCard = document.createElement('li')
          listCard.textContent = 'Card'
          listComputerPlayerPile.appendChild(listCard)
        })

    // Presents opening card from Draw Pile
    DiscardPile.forEach(function (card) {
          var listCard = document.createElement('li')
          listCard.textContent = card.label
          listDiscardPile.appendChild(listCard)
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

          var img = document.createElement('img')
          img.src = card.image
          img.id = 'hp'+index
          listHumanPlayerPile.appendChild(img)

          HumanPlayerCardsArr[index] = document.querySelector('#hp'+index)
          HumanPlayerCardsArr[index].onclick = function (e) {
            console.log('x2');
            if (whichPlayerTurn === Human) {
              // ensures human player's click does not activate play if computer is still calculating playing
              console.log('a2');
              var humanDiscardSuccessful = playCard(Human, parseInt(e.target.id.substring(2,e.target.id.length))) //input: player & card clicked
              if (humanDiscardSuccessful) {  // let Computer play only if Human has completed discarding a valid card
                whichPlayerTurn = Computer
                console.log('b2');
                var computerPlaySuccessful = playCard(Computer,null) // success if either discarded or drawn a card
                if (computerPlaySuccessful) {
                  whichPlayerTurn = Human
                  console.log('c2');
                }
              }
            }
            return false
          }
        })
  } else if (whichPile === Computer) {
    ComputerPlayerPile.forEach(function (computerPlayerCard) {
          var listCard = document.createElement('li')
          listCard.textContent = 'Card'
          console.log('commputerpile '+computerPlayerCard.label);
          listComputerPlayerPile.appendChild(listCard)
        })
  } else if (whichPile === Discard) {
    DiscardPile.forEach(function (DiscardPileCard) {
          var listCard = document.createElement('li')
          listCard.textContent = DiscardPileCard.label
          listDiscardPile.appendChild(listCard)
        })
  } else if (whichPile === Draw) { // this section is not in use; displaying only stack PNG image
    DrawPile.forEach(function (DrawPileCard) {
          var listCard = document.createElement('li')
          listCard.textContent = DrawPileCard.label
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

  if (player === Human) {

    window.setTimeout(function () {
      GameMessage.innerHTML = 'Human Player, awaiting your play...'
    }, 500)

    if (isPlayableCard(player, index)) {
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
      return played
    } else {
      alert ('Cannot play this card!') // to revert to no action if card not playable
      return !played
    }

  } else if (player === Computer) {

    window.setTimeout(function () {
      GameMessage.innerHTML = 'Awaiting Computer Player play...'
    }, 500)

    if (hasPlayablePile(Computer)) { // then search for the first playable card in array to play (a simple play strategy)

      window.setTimeout(function () {
        var card = 0
        var selectedCardIndex = 999

        for (var card = 0; card < ComputerPlayerPile.length; card++) {
          if ((ComputerPlayerPile[card].value === DiscardPile[0].value) || (ComputerPlayerPile[card].color === DiscardPile[0].color)) {
            selectedCardIndex = card
            break
          }
        }

        if (selectedCardIndex === 999) { // did not find a playable card despite hasPlayablePile = true
          alert('system error')
        } else { // found a playable card
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
          window.setTimeout(function () { // Computer completed turn so set Game Message back to message for Human player
            GameMessage.innerHTML = 'Human Player, awaiting your play...'
          }, 1000)
        }
      }, 3000)

    } else { // no playablePile

      GameMessage.innerHTML = 'Computer has no card to play...Draws one...'
      drawCard(Computer)
      window.setTimeout(function () { // Computer completed turn so set Game Message back to message for Human player
        GameMessage.innerHTML = 'Human Player, awaiting your play...'
      }, 3000)
    }
  return played
  }
}

function drawCard (player) {
  if (hasPlayablePile(player) && (player === Human)) {
    alert('You have playable card(s). No need to draw.')
  } else {
    if (player === Human) {
      HumanPlayerPile.push(discardCard(Draw, null)[0])
      clearPileUX(Human)
      displayPileUX(Human)
    } else if (player === Computer) {
      ComputerPlayerPile.push(discardCard(Draw, null)[0])
      clearPileUX(Computer)
      displayPileUX(Computer)
    }
 }
}

function clickDrawCardButton () {
  if ((GameStarted === true) && (whichPlayerTurn === Human)) { // ensures no reaction if game not yet started or not Human's turn
    drawCard(Human)
    whichPlayerTurn = Computer // switches to computer turn and activates computer play
    var computerPlaySuccessful = playCard(Computer,null)
    if (computerPlaySuccessful) {
      whichPlayerTurn = Human
    }
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

startButton.addEventListener('click', startGame)
resetButton.addEventListener('click', resetGame)
drawCardButton.addEventListener('click', clickDrawCardButton)
