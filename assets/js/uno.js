// Card Property

// Color
var Red = 0
var Green = 1
var Blue = 2
var Yellow = 3
var Multi = 4

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
var Wild = 13
  // Remove Reverse Card since same as Skip

// Card Image
var cardURL = 'URL'
// <links to .PNG to be inserted>

// Generate Draw Pile consisting 100 cards : An array of Card objects
function GenerateDrawPile () {
  var Deck = []
  var cardNo = 0

  // Generate four Zero cards (one of each color)
  for (var cardColor = Red; cardColor<Multi; cardColor++) {
    Deck[cardNo] = {
        value: Zero,
        color: cardColor,
        image: cardURL
      }
    cardNo += 1
  }

  // Generate One to DrawTwo cards (2 sets of each color)
  for (var cardValue = One; cardValue<DrawFour; cardValue++) {
    for (var cardColor = Red; cardColor<Multi; cardColor++) {
      Deck[cardNo] = {
          value: cardValue,
          color: cardColor,
          image: cardURL
        }
      cardNo += 1

      Deck[cardNo] = { // Second set of same color
          value: cardValue,
          color: cardColor,
          image: cardURL
        }
      cardNo += 1
    }
  }

console.log('xx'+cardNo);

  // Generate 8 Multicolor cards (2 sets of DrawFour and Wild)
  for (var i = 1; i <= 2; i++) {
    for (cardValue = DrawFour; cardValue <= Wild; cardValue++) {
      Deck[cardNo] = {
          value: cardValue,
          color: Multi,
          image: cardURL
        }
      cardNo += 1
      Deck[cardNo] = {
          value: cardValue,
          color: Multi,
          image: cardURL
        }
      cardNo += 1
    }
  }
  // console.log(cardNo); // to remove
  return Deck
}

var DrawPile = GenerateDrawPile()
//console.log(DrawPile);
console.log('Drawlength '+DrawPile.length);
for (var i = 0; i<101; i++) {
  console.log(DrawPile[i].value);
  console.log(DrawPile[i].color);
  console.log(DrawPile[i].cardURL);
}

// console.log(Deck[cardNo].value)
// console.log(Deck[cardNo].color)
// console.log(Deck[cardNo].image)
