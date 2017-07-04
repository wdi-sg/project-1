// Card Property

// Color
var Red = 0
var Green = 1
var Blue = 2
var Yellow = 3
var cWild = 4

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
var DrawFour = 12
var vWild = 13
  // Remove Reverse Card since same as Skip

// Card Image
var cardURL = 'URL'
// <links to .PNG to be inserted>

// Generate Draw Pile consisting 100 cards : An array of Card objects
function generateDrawPile () {
  var Deck = []
  var cardNo = 0

  // Generate four Zero cards (one of each color)
  for (var cardColor = Red; cardColor<Multi; cardColor++) {
    Deck[cardNo] = {
        label: '',
        value: Zero,
        color: cardColor,
        image: cardURL
      }
    cardNo += 1
  }

  // Generate One to DrawTwo cards (2 sets of each color)
  for (var cardValue = One; cardValue<DrawFour; cardValue++) {
    for (var cardColor = Red; cardColor<cWild; cardColor++) {
      Deck[cardNo] = {
          label: '',
          value: cardValue,
          color: cardColor,
          image: cardURL
        }
      cardNo += 1

      Deck[cardNo] = { // Second set of same color
          label: '',
          value: cardValue,
          color: cardColor,
          image: cardURL
        }
      cardNo += 1
    }
  }

//console.log('xx'+cardNo);

  // Generate 8 Wild-type cards (2 sets of DrawFour and Wild)
  for (var i = 1; i <= 2; i++) {
    for (cardValue = DrawFour; cardValue <= Wild; cardValue++) {
      Deck[cardNo] = {
          label: '',
          value: cardValue,
          color: cWild,
          image: cardURL
        }
      cardNo += 1
      Deck[cardNo] = {
          label: '',
          value: cardValue,
          color: cWild,
          image: cardURL
        }
      cardNo += 1
    }
  }
  // console.log(cardNo); // to remove
  return Deck
}

function shuffleDrawPile () {
  // Takes in array and randomize order of array
}

function dealCard(noOfCards, inputDeck, outputDeck) {
  // Removes noOfCards from inputDeck and return noOfCards in ???outputDeck
  // is it possible to return multiple results? or how to change a specified global deck
}

function labelCard(inputCard) {
  // Returns a string label indicating color and value of card
  var label = ''
  //for (var card = 0; card < inputDeck.length; card++) {
  if (inputCard.color === Red) label = 'Red'
  else if (inputCard.color === Green) label = 'Green'
  else if (inputCard.color === Blue) label = 'Blue'
  else if (inputCard.color === Yellow) label = 'Yellow'
  else (inputCard.color === cWild) label = 'Wild'

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
  else if (inputCard.value === DrawFour) label = label + ' ' + 'Draw Four'
  else if (inputCard.value === vWild) label = 'Wild'
}

var DrawPile = generateDrawPile()
//console.log(DrawPile);
// console.log('Drawlength '+DrawPile.length);
// for (var i = 0; i<100; i++) { // To list out the DrawPile just generated
//   console.log(DrawPile[i].value);
//   console.log(DrawPile[i].color);
//   console.log(DrawPile[i].image);
//   console.log(i);
// }
