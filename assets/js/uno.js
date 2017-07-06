////////////////////////
// Card Property
///////////////////////

// Color
var Red = 0
var Green = 1
var Blue = 2
var Yellow = 3
// var cWild = 4

// Value
var Zero = 0
var One = 1
var Two = 2
var Three = 3
var Four = 4
var Five = 5
var Six = 6
var Seven = 7
var Eight = 8
var Nine = 9
var DrawTwo = 10
var Skip = 11
// var DrawFour = 12
// var vWild = 13

// Card Piles
var DrawPile = [] // last element of array = top of pile
var HumanPlayerPile = []
var ComputerPlayerPile = []
var DiscardPile = []

////////////////////////
// Game Status Property
///////////////////////
var Computer = 0
var Human = 1
var Discard = 2 //refers to DiscardPile
var Draw = 3 // refers to DrawPile
var whichPlayerTurn = Human // Human (= 1) starts first; Computer = 0
var GameStarted = false

////////////////////////
// Game Play Functions
///////////////////////

// Generate unshuffled Draw Pile consisting 100 cards : An array of Card objects
function generateDrawPile () {
  var Deck = []
  var cardNo = 0

  // Generate four Zero cards (one of each color)
  for (var cardColor = Red; cardColor<=Yellow; cardColor++) {
    Deck[cardNo] = {
        label: '',
        value: Zero,
        color: cardColor,
        image: 'graphics/'+cardColor+'0.png'
      }
    cardNo += 1
  }

  // Generate One to Nine cards (2 sets of each color)
  for (var cardValue = One; cardValue<=Nine; cardValue++) {
    for (var cardColor = Red; cardColor<=Yellow; cardColor++) {
      Deck[cardNo] = {
          label: '',
          value: cardValue,
          color: cardColor,
          image: 'graphics/'+cardColor+cardValue+'.png'
        }
      cardNo += 1

      Deck[cardNo] = { // Second set of same color
          label: '',
          value: cardValue,
          color: cardColor,
          image: 'graphics/'+cardColor+cardValue+'.png'
        }
      cardNo += 1
    }
  }
  return Deck
}

function shuffle (Deck) {
  // Takes in array and randomize order of array
  // Source: Fisher-Yates Shuffle, https://bost.ocks.org/mike/shuffle/
  // Method: Recursively, swap last card with random card and then remove
  // last card from the next random pick window

    var currentIndex = Deck.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = Deck[currentIndex]
      Deck[currentIndex] = Deck[randomIndex]
      Deck[randomIndex] = temporaryValue
    }

    return Deck
}

function dealCard(noOfCards) {
  // Removes noOfCards from DrawPile and return those Cards as an array
  var dealtHand = []
  for (var i = 0; i < noOfCards; i++) {
    dealtHand.push(DrawPile.pop())
  }
  return dealtHand
}

function labelCard(inputCard) {
  // Returns a string label indicating color and value of card
  var label = ''

  if (inputCard.color === Red) label = 'Red'
  else if (inputCard.color === Green) label = 'Green'
  else if (inputCard.color === Blue) label = 'Blue'
  else if (inputCard.color === Yellow) label = 'Yellow'
  else if (inputCard.color === cWild) label = 'Wild'

  if (inputCard.value === Zero) label = label + ' ' + 'Zero'
  else if (inputCard.value === One) label = label + ' ' + 'One'
  else if (inputCard.value === Two) label = label + ' ' + 'Two'
  else if (inputCard.value === Three) label = label + ' ' + 'Three'
  else if (inputCard.value === Four) label = label + ' ' + 'Four'
  else if (inputCard.value === Five) label = label + ' ' + 'Five'
  else if (inputCard.value === Six) label = label + ' ' + 'Six'
  else if (inputCard.value === Seven) label = label + ' ' + 'Seven'
  else if (inputCard.value === Eight) label = label + ' ' + 'Eight'
  else if (inputCard.value === Nine) label = label + ' ' + 'Nine'
  else if (inputCard.value === DrawTwo) label = label + ' ' + 'Draw Two'
  else if (inputCard.value === Skip) label = label + ' ' + 'Skip'
  else if (inputCard.value === DrawFour) label = label + ' ' + 'Draw Four'
  else label = 'Wild'

  return label
}

function isPlayableCard(player, index) {
  //var test = false
  if (player === Human) {
    if ((HumanPlayerPile[index].color === DiscardPile[0].color) || (HumanPlayerPile[index].value === DiscardPile[0].value))  {
          return true
        }
  }
  return false
}

function discardCard (whichPile, whichCard) {
  if (whichPile === Human) {
    var discardedCard = HumanPlayerPile.splice(whichCard, 1)
    return discardedCard
  } else if (whichPile === Computer) {
    //return ComputerPlayerPile.splice(whichCard, 1)
    var discardedCard = ComputerPlayerPile.splice(whichCard, 1)
    return discardedCard
  } else if (whichPile === Discard) {
    var discardedCard = DiscardPile.splice(whichCard, 1)

    return // no need to return anything
  } else if (whichPile === Draw) {
    var discardedCard = []
    discardedCard[0] = DrawPile.pop()
    return discardedCard
  }
}

// Labels each card
for (var i = 0; i < DrawPile.length; i++) {
  DrawPile[i].label = labelCard(DrawPile[i])
}


function hasPlayablePile(player) {
  // checks if player has at least one card that could be played; returns true if yes
  var test = false
  if (player === Human) {
    HumanPlayerPile.forEach(function (card) {
      if ((card.color === DiscardPile[0].color) || (card.value === DiscardPile[0].value)) {test = true}
    })
  } else if (player === Computer) {
    ComputerPlayerPile.forEach(function (card) {
      if ((card.color === DiscardPile[0].color) || (card.value === DiscardPile[0].value)) {test = true}
    })
  }
  return test
}
