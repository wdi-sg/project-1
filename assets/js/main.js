// Declares (?initial) DOM elements
var listDrawPile = document.querySelector('.DrawPile')
var listHumanPlayerPile = document.querySelector('.HumanPlayerPile')
var listComputerPlayerPile = document.querySelector('.ComputerPlayerPile')
var listDiscardPile = document.querySelector('.DiscardPile')
var startButton = document.querySelector('.StartGame')
var restartButton = document.querySelector('.RestartGame')

// Generates and lists unshuffled DrawPile and await game start
DrawPile = generateDrawPile()
for (var i = 0; i < DrawPile.length; i++) {
  DrawPile[i].label = labelCard(DrawPile[i])
}
DrawPile.forEach(function (card) {
      var listCard = document.createElement('li')
      listCard.textContent = card.label
      listDrawPile.appendChild(listCard)
    })

function startGame () {
  DrawPile = shuffle(DrawPile)
  HumanPlayerPile = dealCard(7)
  ComputerPlayerPile = dealCard(7)
  DiscardPile = dealCard(1)
  HumanPlayerPile.forEach(function (card) {
        var listCard = document.createElement('li')
        listCard.textContent = card.label
        listHumanPlayerPile.appendChild(listCard)
      })
  ComputerPlayerPile.forEach(function (card) {
        var listCard = document.createElement('li')
        listCard.textContent = card.label
        listComputerPlayerPile.appendChild(listCard)
      })
  DiscardPile.forEach(function (card) {
        var listCard = document.createElement('li')
        listCard.textContent = card.label
        listDiscardPile.appendChild(listCard)
      })

  // unlist intial DrawPile
  while (listDrawPile.hasChildNodes()) {
    listDrawPile.removeChild(listDrawPile.firstChild);
  }

  // relist shuffled DrawPile with dealt & discarded cards removed
  DrawPile.forEach(function (card) {
        var listCard = document.createElement('li')
        listCard.textContent = card.label
        listDrawPile.appendChild(listCard)
      })
  console.log(listHumanPlayerPile);
  // Relabel start button to restart
  // set start button event listener to restart event listener
}

function restartGame () {
  // regenerate and list Deck
  // remove Computer and Human players' deck
}

//console.log(startButton);
startButton.addEventListener('click', startGame)
