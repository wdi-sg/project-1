// document.addEventListener("DOMContentLoaded",function(){
//
// });

var arrayOf2Image = [
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Ace%20of%20Spades.jpg', // ace1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/02%20of%20Spades.jpg', // 2-1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/03%20of%20Spades.jpg', // 3-1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/04%20of%20Spades.jpg', // 4-1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/05%20of%20Spades.jpg', // 5-1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/06%20of%20Spades.jpg', // 6-1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/07%20of%20Spades.jpg', // 7-1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/08%20of%20Spades.jpg', // 8-1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/09%20of%20Spades.jpg', // 9-1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/10%20of%20Spades.jpg', // 10-1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Jack%20of%20Spades.jpg', // jack1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Queen%20of%20Spades.jpg', // queen1
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Spades.jpg', // king1

  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Ace%20of%20Hearts%201.jpg', // Ace2
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/02%20of%20Hearts.jpg', // 2-2
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/03%20of%20Hearts.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/04%20of%20Hearts.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/05%20of%20Hearts.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/06%20of%20Hearts.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/07%20of%20Hearts.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/08%20of%20Hearts.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/09%20of%20Hearts.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/10%20of%20Hearts%201.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Jack%20of%20Hearts%201.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Queen%20of%20Hearts%201.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Hearts%201.jpg',

  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Ace%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/02%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/03%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/04%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/05%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/06%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/07%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/08%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/09%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/10%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Jack%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Queen%20of%20Diamonds.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Diamonds.jpg',

  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Ace%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/02%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/03%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/04%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/05%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/06%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/07%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/08%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/09%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/10%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Jack%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Queen%20of%20Clubs.jpg',
  'http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Clubs.jpg'
// "https://s-media-cache-ak0.pinimg.com/originals/91/69/ef/9169ef73b3564976a7dc564d66861027.png" , //back of card
]// Total 52 elements in array
var faceDownCard = 'https://s-media-cache-ak0.pinimg.com/originals/91/69/ef/9169ef73b3564976a7dc564d66861027.png'

var whichButtonWasClicked = ''
var currentBetAmount = 0
// getRandomInt(0,2)
var arrayOfDrawnCardsToBeRemoved = []

// var link1 = "http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Spades.jpg"
var arrayOfValues = [
  11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
  11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
  11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
  11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10] // 52 total values

// var arrayOfAce = [
//   'Ace', '', '', '', '', '', '', '', '', '', '', '', '',
//   'Ace', '', '', '', '', '', '', '', '', '', '', '', '',
//   'Ace', '', '', '', '', '', '', '', '', '', '', '', '',
//   'Ace', '', '', '', '', '', '', '', '', '', '', '', ''
// ]

// global variables
var playerHandValue = 0
var playerHandCount = 2
var dealerHandCount = 2
var dealerHandValue = 0

var arrayOfPlayerCards = []
var arrayOfDealerCards = []

var image1 = document.querySelector('img')
var theRandomInt1 = getRandomInt(0, 51) //52 numbers
var playerValue1 = arrayOfValues[theRandomInt1]
arrayOfDrawnCardsToBeRemoved += arrayOf2Image[theRandomInt1]
playerHandValue += playerValue1
arrayOfPlayerCards.push(playerValue1)
arrayOfValues.splice(theRandomInt1, 1)
image1.src = arrayOf2Image[theRandomInt1]


var image2 = document.querySelector('.second')
var theRandomInt2 = getRandomInt(0, 50) //51 numbers
var playerValue2 = arrayOfValues[theRandomInt2]
var newArrayAfter1Card = arrayOf2Image.filter(function (item) {
  return arrayOfDrawnCardsToBeRemoved.indexOf(item) === -1
});
arrayOfDrawnCardsToBeRemoved += newArrayAfter1Card[theRandomInt2]
image2.src = newArrayAfter1Card[theRandomInt2]
playerHandValue += playerValue2
arrayOfPlayerCards.push(playerValue2)
arrayOfValues.splice(theRandomInt2, 1)


var image3 = document.querySelector('.third')
image3.src = 'https://i.stack.imgur.com/sOjhw.png' // blank image

var image4 = document.querySelector('.forth')
image4.src = 'https://i.stack.imgur.com/sOjhw.png'

var image5 = document.querySelector('.fifth')
image5.src = 'https://i.stack.imgur.com/sOjhw.png'

var dealerhand1 = document.querySelector('.dealer1')
dealerhand1.src = faceDownCard

var dealerhand2 = document.querySelector('.dealer2')
dealerhand2.src = faceDownCard// Face-down card
var dealerhand3 = document.querySelector('.dealer3')
dealerhand3.src = 'https://i.stack.imgur.com/sOjhw.png'
var dealerhand4 = document.querySelector('.dealer4')
dealerhand4.src = 'https://i.stack.imgur.com/sOjhw.png'
var dealerhand5 = document.querySelector('.dealer5')
dealerhand5.src = 'https://i.stack.imgur.com/sOjhw.png'

document.getElementById('drawCard').addEventListener('click', drawCard)
document.getElementById('endTurn').addEventListener('click', endTurn)
document.getElementById('endTurn').addEventListener('click', endTurn2)


function getRandomInt (min, max) {
  return Math.floor(Math.random() * 10+1)
}



function endTurn () {  // When turn ends, dealer flip over his cards
  var b1 = 51 - playerHandCount
  var dealerInt1 = getRandomInt(0, b1)
  var newDealerArrayafter0card = arrayOf2Image.filter(function (item) {
    return arrayOfDrawnCardsToBeRemoved.indexOf(item) === -1
  })  // working now
  dealerhand1.src = newDealerArrayafter0card[dealerInt1]
  var dealerCard1Value = arrayOfValues[dealerInt1]
  arrayOfDrawnCardsToBeRemoved += newDealerArrayafter0card[dealerInt1]
  dealerHandValue += dealerCard1Value
  arrayOfValues.splice(dealerInt1,1)
 // dealerhand2.src = newDealerArrayafter1card[0]
 }

 function endTurn2 () {
     var b2 = 50 - playerHandCount
     var dealerInt2 = getRandomInt(0, b2)
     var newDealerArrayafter1card = arrayOf2Image.filter(function (item) {
       return arrayOfDrawnCardsToBeRemoved.indexOf(item) === -1
     })  // working now
     var dealerCard2 = arrayOfValues[dealerInt2]
     arrayOfDrawnCardsToBeRemoved += newDealerArrayafter1card[dealerInt2]
     dealerHandValue += dealerCard2
     arrayOfValues.splice(dealerInt2,1)
     dealerhand2.src = newDealerArrayafter1card[dealerInt2]
   dealerDrawCard()
 }

function dealerDrawCard () {
  if (dealerHandCount === 2 && dealerHandValue < 17) {
    dealerHandCount += 1
    var dealerCardsLeft = 49-playerHandCount
    var dealerInt3 = getRandomInt(0, dealerCardsLeft)
var newDealerArrayAfter2Card = arrayOf2Image.filter(function (item) {
   return arrayOfDrawnCardsToBeRemoved.indexOf(item) === -1
 })  // working now
 arrayOfDrawnCardsToBeRemoved += newDealerArrayAfter2Card[dealerInt3]
 var dealerCard3 = arrayOfValues[dealerInt3]
 dealerHandValue += dealerCard3
 arrayOfValues.splice(dealerInt3,1)
    dealerhand3.src = newDealerArrayAfter2Card[dealerInt3]
    dealerDraw4thCard()
  } else {
  checkWhoWins()
}}

function dealerDraw4thCard () {
  if (dealerHandCount === 3 && dealerHandValue < 17) {
    dealerHandCount += 1
var dealerCardsLeft2 = 48-playerHandCount
    var dealerInt4 = getRandomInt(0, dealerCardsLeft2)
    var newDealerArrayAfter3Card = arrayOf2Image.filter(function (item) {
       return arrayOfDrawnCardsToBeRemoved.indexOf(item) === -1
     })  // working now
     arrayOfDrawnCardsToBeRemoved += newDealerArrayAfter3Card[dealerInt4]
     var dealerCard4 = arrayOfValues[dealerInt4]
     dealerHandValue += dealerCard4
     arrayOfValues.splice(dealerInt4,1)
    dealerhand4.src = newDealerArrayAfter3Card[dealerInt4]
    dealerDraw5thCard()
  } else {
  checkWhoWins()
}}

function dealerDraw5thCard () {
  if (dealerHandCount === 4 && dealerHandValue < 17) {
    dealerHandCount += 1
  var dealerCardsLeft3 = 47-playerHandCount
    var dealerInt5 = getRandomInt(0, dealerCardsLeft3)
    var newDealerArrayAfter4Card = arrayOf2Image.filter(function (item) {
       return arrayOfDrawnCardsToBeRemoved.indexOf(item) === -1
     })  // working now
     arrayOfDrawnCardsToBeRemoved += newDealerArrayAfter4Card[dealerInt5]
     var dealerCard5 = arrayOfValues[dealerInt5]
     dealerHandValue += dealerCard4
     arrayOfValues.splice(dealerInt5,1)
    dealerhand4.src = newDealerArrayAfter4Card[dealerInt4]
  }
  checkWhoWins()
}


function checkWhoWins () {
  if (arrayOfPlayerCards.includes(11) && playerHandValue > 21) {
    var indexOfAce = arrayOfPlayerCards.indexOf(11)
    arrayOfPlayerCards[indexOfAce] = 1
    playerHandValue -= 10
  }
     if (arrayOfPlayerCards.includes(11) && playerHandValue > 21) {
    var indexOfAce = arrayOfPlayerCards.indexOf(11)
    arrayOfPlayerCards[indexOfAce] = 1
    playerHandValue -= 10
     }

     if (arrayOfPlayerCards.includes(11) && playerHandValue > 21) {
    var indexOfAce = arrayOfPlayerCards.indexOf(11)
    arrayOfPlayerCards[indexOfAce] = 1
    playerHandValue -= 10
     }

     if (arrayOfPlayerCards.includes(11) && playerHandValue > 21) {
    var indexOfAce = arrayOfPlayerCards.indexOf(11)
    arrayOfPlayerCards[indexOfAce] = 1
    playerHandValue -= 10
     }


  if (playerHandValue <= 21 && playerHandValue > dealerHandValue) {
    alert('player wins as he is below 21 and above dealer')
    alert('refresh to start new game')
  } else if (playerHandValue > 21 && dealerHandValue <= 21) {
    alert('dealer win as player is 22 or above')
    alert('refresh to start new game')
  } else if (dealerHandValue <= 21 && dealerHandValue > playerHandValue) {
    alert('dealer wins as he is below 21 & above player')
    alert('refresh to start new game')
    // startNewGame()
  } else if (dealerHandValue > 21 && playerHandValue <= 21) {
    alert('player wins as dealer is 22 or above')
    alert('refresh to start new game')
  } else if (playerHandValue === dealerHandValue) {
    alert("It's a draw")
    alert('refresh to start new game')
  } else if (playerHandValue === 21 && playerHandCount === 2 && dealerHandValue < 21) {
    alert("BLACKJACK, YOU WIN!")
    alert('refresh to start new game')
  } else if (dealerHandValue === 21 && dealerHandCount === 2 && playerHandValue < 21) {
    alert("BLACKJACK, DEALER WINs!")
    alert('refresh to start new game')
  } else if (dealerHandValue === 22 && dealerHandCount === 2 && playerHandValue < 21) {
    alert("Double Ace BLACKJACK, DEALER WINs!")
    alert('refresh to start new game')
  } else if (playerHandValue === 22 && playerHandCount === 2 && dealerHandValue < 21) {
    alert("Double Ace BLACKJACK, PLAYER WINs!")
    alert('refresh to start new game')
  } else {
    alert("Nobody wins, refresh to start new game")
  }
}


//PLAYER TURN
function drawCard () {
  playerHandCount += 1
  if (playerHandCount === 3) {
    var theRandomInt3 = getRandomInt(0, 49)  //chnage to 48 as 3 cards ald presented
    var newArrayAfter2Cards = arrayOf2Image.filter(function (item) {
      return arrayOfDrawnCardsToBeRemoved.indexOf(item) === -1
    })  // working now
    arrayOfDrawnCardsToBeRemoved += newArrayAfter2Cards[theRandomInt3]

    image3.src = newArrayAfter2Cards[theRandomInt3]
    var card3Value = arrayOfValues[theRandomInt3]
    playerHandValue += card3Value
    arrayOfPlayerCards.push(card3Value)
    arrayOfValues.splice(theRandomInt3, 1) // done last

  }
  if (playerHandCount === 4) {
    var theRandomInt4 = getRandomInt(0, 48) //change to 47
   // arrayOfDrawncards have to be above the newarray function
   var newArrayAfter3Cards = arrayOf2Image.filter(function (item) {
     return arrayOfDrawnCardsToBeRemoved.indexOf(item) === -1
   })  // working now
   arrayOfDrawnCardsToBeRemoved += newArrayAfter3Cards[theRandomInt4]

    image4.src = newArrayAfter3Cards[theRandomInt4]
    var card4Value = arrayOfValues[theRandomInt4]
    playerHandValue += card4Value
    arrayOfPlayerCards.push(card4Value)
    arrayOfValues.splice(theRandomInt4, 1)
  }

  if (playerHandCount === 5) {
    var theRandomInt5 = getRandomInt(0, 47) //change to 46
    var newArrayAfter4Cards = arrayOf2Image.filter(function (item) {
      return arrayOfDrawnCardsToBeRemoved.indexOf(item) === -1
    })  // working now
    arrayOfDrawnCardsToBeRemoved += newArrayAfter4Cards[theRandomInt5]
    image5.src = newArrayAfter4Cards[theRandomInt5]
    var card5Value = arrayOfValues[theRandomInt5]
    playerHandValue += card5Value
    arrayOfPlayerCards.push(card5Value)
    arrayOfValues.splice(theRandomInt5, 1)
  }


  function startNewGame () {
    dealer1.src = faceDownCard
    dealer2.src = faceDownCard
  }



// All tokens are here, main code above
  document.getElementById('box1').onclick = function () {
    whichButtonWasClicked = 'box1'
  }
  document.getElementById('box2').onclick = function () {
    whichButtonWasClicked = 'box2'
  }
  document.getElementById('box3').onclick = function () {
    whichButtonWasClicked = 'box3'
  }
  document.getElementById('box4').onclick = function () {
    whichButtonWasClicked = 'box4'
  }
  document.getElementById('box5').onclick = function () {
    whichButtonWasClicked = 'box5'
  }

  document.getElementById('box1').addEventListener('click', nothing)
  document.getElementById('box2').addEventListener('click', nothing)
  document.getElementById('box3').addEventListener('click', nothing)
  document.getElementById('box4').addEventListener('click', nothing)
  document.getElementById('box5').addEventListener('click', nothing)

  function nothing () {
    console.log('nothing here just yet')
  }

  function addToTotalWagerAmt () {

  }
  var betAmount = 0
  switch (whichButtonWasClicked) {
    case 'box1':
      betAmount = 100
      break
    case 'box2':
      betAmount = 250
      break
    case 'box3':
      betAmount = 500
      break
    case 'box4':
      betAmount = 1000
      break
    case 'box5':
      betAmount = 5000
      break
  }

  currentBetAmount += betAmount
  document.getElementById('box6').innerHTML = ('Your current bet is ' + '$' + currentBetAmount)
}
