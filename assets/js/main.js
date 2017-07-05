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

/////////////////////////////
// Functions for game action events
/////////////////////////////

function startGame () {
  DrawPile = shuffle(DrawPile)
  while ((DrawPile[DrawPile.length-1].value === vWild) || (DrawPile[DrawPile.length-1].value === DrawFour)) {
    //ensures no Wild or Wild DrawFour for starting card in DiscardPile
    DrawPile = shuffle(DrawPile)
  }
  DiscardPile = dealCard(1)
  HumanPlayerPile = dealCard(7)
  ComputerPlayerPile = dealCard(7)


  // Presents Human Player's Pile
  HumanPlayerPile.forEach(function (card, index) {
        var listCard = document.createElement('li')
        listCard.innerHTML = '<a id="hp'+index+'" href="#">'+card.label+'</a>'  //let listed card be clickable
        listHumanPlayerPile.appendChild(listCard)
        HumanPlayerCardsArr[index] = document.querySelector('#hp'+index)
        //console.log('x '+index);
        //console.log(HumanPlayerCardsArr);
        HumanPlayerCardsArr[index].onclick = function (e) {
          playCard(Human, parseInt(e.target.id.substring(2,e.target.id.length))) //input: player & card clicked
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
} // end of startGame

function resetGame () {
  window.location.reload(true)
  GameStarted = false
}

function clearPileUX (whichPile) {
  if (whichPile === Human) {
    while (listHumanPlayerPile.hasChildNodes()) {
      listHumanPlayerPile.removeChild(listHumanPlayerPile.firstChild)
    }
  } else if (whichPile === Computer) {

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
            playCard(Human, parseInt(e.target.id.substring(2,e.target.id.length))) //input: player & card clicked
            return false
          }
        })
  } else if (whichPile === Computer) {

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

function playCard (player, index) { // player: 0=computer, 1=human; index: index of player pile
  if (whichPlayerTurn === Human) {  // ensures human player cannot play when computer still calculating moves
    if (isPlayableCard(player, index)) {
      //alert('Can play this')
      DiscardPile.push(discardCard(Human, index)[0]) // discard card from HumanPlayerPile & push it to DiscardPile
      discardCard(Discard,0) // remove old card in DiscardPile
      clearPileUX(Human)
      displayPileUX(Human)
      clearPileUX(Discard)
      displayPileUX(Discard)
      whichPlayerTurn = Computer
      // if special situation (skip, draw two, draw four, wild) {}
    } else alert ('Cannot play this card!') // to revert to no action if card not playable
  } else if (whichPlayerTurn === Computer) {

  }
}

function drawCard (player) {
  if (hasPlayablePile(player)) {
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

    }
 }
}

function clickDrawCardButton () {
  if (GameStarted === true) { // ensures no reaction if game not yet started
    drawCard(Human)
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
