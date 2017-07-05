var whichButtonWasClicked = ""
var currentBetAmount = 0
// getRandomInt(0,2)

// var link1 = "http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Spades.jpg"
var arrayOfValues = [
  11,2,3,4,5,6,7,8,9,10,10,10,10,
  11,2,3,4,5,6,7,8,9,10,10,10,10,
11,2,3,4,5,6,7,8,9,10,10,10,10,
11,2,3,4,5,6,7,8,9,10,10,10,10]

var arrayOfAce = [
  "Ace","","","","","","","","","","","","",
  "Ace","","","","","","","","","","","","",
  "Ace","","","","","","","","","","","","",
  "Ace","","","","","","","","","","","","",
]

var arrayOf2Image = [
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Ace%20of%20Spades.jpg",//ace1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/02%20of%20Spades.jpg",//2-1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/03%20of%20Spades.jpg",//3-1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/04%20of%20Spades.jpg",//4-1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/05%20of%20Spades.jpg",//5-1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/06%20of%20Spades.jpg",//6-1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/07%20of%20Spades.jpg",//7-1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/08%20of%20Spades.jpg",//8-1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/09%20of%20Spades.jpg",//9-1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/10%20of%20Spades.jpg",//10-1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Jack%20of%20Spades.jpg",//jack1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Queen%20of%20Spades.jpg",//queen1
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Spades.jpg",//king1

"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Ace%20of%20Hearts%201.jpg",//Ace2
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/02%20of%20Hearts.jpg", //2-2
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/03%20of%20Hearts.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/04%20of%20Hearts.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/05%20of%20Hearts.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/06%20of%20Hearts.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/07%20of%20Hearts.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/08%20of%20Hearts.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/09%20of%20Hearts.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/10%20of%20Hearts%201.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Jack%20of%20Hearts%201.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Queen%20of%20Hearts%201.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Hearts%201.jpg",

"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Ace%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/02%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/03%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/04%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/05%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/06%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/07%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/08%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/09%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/10%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Jack%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Queen%20of%20Diamonds.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Diamonds.jpg",

"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Ace%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/02%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/03%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/04%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/05%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/06%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/07%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/08%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/09%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/10%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Jack%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/Queen%20of%20Clubs.jpg",
"http://cs.nyu.edu/courses/spring17/CSCI-UA.0061-001/newcards/images/King%20of%20Clubs.jpg",

"https://s-media-cache-ak0.pinimg.com/originals/91/69/ef/9169ef73b3564976a7dc564d66861027.png" , //back of card
]


var image1 = document.querySelector("img")
var theRandomInt1 = getRandomInt(0,52)
var playerValue1 = arrayOfValues[theRandomInt1]
image1.src = arrayOf2Image[theRandomInt1]

var image2 = document.querySelector(".second")
var theRandomInt2 = getRandomInt(0,52)
var playerValue2 = arrayOfValues[theRandomInt2]
image2.src = arrayOf2Image[theRandomInt2]

var image3 = document.querySelector(".third")
image3.src = "https://i.stack.imgur.com/sOjhw.png" //blank image

var image4 = document.querySelector(".forth")
image4.src = "https://i.stack.imgur.com/sOjhw.png"

var image5 = document.querySelector(".fifth")
image5.src = "https://i.stack.imgur.com/sOjhw.png"

var dealerhand1 = document.querySelector(".dealer1")
dealerhand1.src = arrayOf2Image[52] //Face-down card
var dealerhand2 = document.querySelector(".dealer2")
dealerhand2.src = arrayOf2Image[52]//Face-down card
var dealerhand3 = document.querySelector(".dealer3")
dealerhand3.src = "https://i.stack.imgur.com/sOjhw.png"
var dealerhand4 = document.querySelector(".dealer4")
dealerhand4.src = "https://i.stack.imgur.com/sOjhw.png"
var dealerhand5 = document.querySelector(".dealer5")
dealerhand5.src = "https://i.stack.imgur.com/sOjhw.png"



document.getElementById('drawCard').addEventListener("click",drawCard)
document.getElementById("endTurn").addEventListener("click",endTurn)

function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min)) + min
}




var dealerTotalValue = 0
var dealerHandCount = 2
function endTurn() {
  playerHandValue += playerValue1
  playerHandValue += playerValue2
  //When turn ends, dealer flip over his cards
  var dealerInt1 = getRandomInt(0,52)
  dealerhand1.src = arrayOf2Image[dealerInt1]
  var dealerInt2 = getRandomInt(0,52)
  dealerhand2.src = arrayOf2Image[dealerInt2]

 var dealerCard1 = arrayOfValues[dealerInt1]
 var dealerCard2 = arrayOfValues[dealerInt2]
 dealerTotalValue = dealerCard1+dealerCard2
  alert(dealerTotalValue)

  if (dealerTotalValue<16) {
    dealerDrawCard()
  } else {
    checkWhoWins()
  }
}
function dealerDrawCard() {
  if (dealerHandCount === 2 && dealerTotalValue < 16) {
    dealerHandCount += 1
  var dealerInt3 = getRandomInt(0,52)
  dealerhand3.src = arrayOf2Image[dealerInt3]
  var valueOf3 = arrayOfValues[dealerInt3]
  dealerTotalValue += valueOf3
  dealerDraw4thCard()
}
checkWhoWins()
}
function dealerDraw4thCard() {
  checkWhoWins()
  if (dealerHandCount===3 && dealerTotalValue<16) {
    dealerHandCount+=1
    var dealerInt4 = getRandomInt(0,52)
    dealerhand4.src = arrayOf2Image[dealerInt4]
    var valueOf4 = arrayOfValues[dealerInt4]
    dealerTotalValue += valueOf4
  }
  checkWhoWins()
}
function dealerDraw5thCard() {
  if (dealerHandCount===4 && dealerTotalValue<16) {
    dealerHandCount+=1
    var dealerInt5 = getRandomInt(0,52)
    dealerhand5.src = arrayOf2Image[dealerInt5]
    var valueOf5 = arrayOfValues[dealerInt5]
    dealerTotalValue += valueOf5
  }
  checkWhoWins()
}

function startNewGame() {
  dealer1.src = arrayOf2Image[52]
  dealer2.src = arrayOf2Image[52]
  prompt("new game starting")
}

function checkWhoWins() {
  if (playerHandValue<=21 && playerHandValue>dealerTotalValue) {
    alert ("player wins as he is below 21 and above dealer")
    alert ("refresh to start new game")
    startNewGame()
  } else if (playerHandValue>21 && dealerTotalValue<=21) {
    alert ("dealer win as player is over 22")
    alert ("refresh to start new game")
    startNewGame()
  }
  if (dealerTotalValue<=21 && dealerTotalValue>playerHandValue) {
    alert ("dealer wins as he is below 21 & above player")
    alert ("refresh to start new game")
    startNewGame()
  } else if (dealerHandValue>21 && playerHandValue<=21) {
    alert ("player wins as dealer is over 22")
    alert ("refresh to start new game")
    startNewGame()
  }
  if (playerHandValue===dealerTotalValue) {
    alert ("It's a draw")
    alert ("refresh to start new game")
    startNewGame()
  }
  // image3.src = ""
  // image4.src = ""
  // image5.src = ""
}



//global variables
playerHandValue = 0
playerHandCount = 2


function drawCard() {
   playerHandCount += 1
   if (playerHandCount === 3) {
     var theRandomInt3 = getRandomInt(0,52)
   image3.src = arrayOf2Image[theRandomInt3]
   var card3Value = arrayOfValues[theRandomInt3]
   playerHandValue += card3Value
 }
 if (playerHandCount === 4) {
   var theRandomInt4 = getRandomInt(0,52)
   image4.src = arrayOf2Image[theRandomInt4]
   var card4Value = arrayOfValues[theRandomInt4]
   playerHandValue += card4Value
 }
if (playerHandCount === 5) {
  var theRandomInt5 = getRandomInt(0,52)
   image5.src = arrayOf2Image[theRandomInt5]
   var card5Value = arrayOfValues[theRandomInt5]
   playerHandValue += card5Value
}




document.getElementById("box1").onclick = function() {
  whichButtonWasClicked = "box1"
}
document.getElementById("box2").onclick = function() {
  whichButtonWasClicked = "box2"
}
document.getElementById("box3").onclick = function() {
  whichButtonWasClicked = "box3"
}
document.getElementById("box4").onclick = function() {
  whichButtonWasClicked = "box4"
}
document.getElementById("box5").onclick = function() {
  whichButtonWasClicked = "box5"
}




document.getElementById('box1').addEventListener("click",nothing)
document.getElementById('box2').addEventListener("click",nothing)
document.getElementById('box3').addEventListener("click",nothing)
document.getElementById('box4').addEventListener("click",nothing)
document.getElementById('box5').addEventListener("click",nothing)



function addToTotalWagerAmt() {

}
var betAmount = 0
switch (whichButtonWasClicked) {
  case "box1":
  betAmount = 100;
  break;
  case "box2":
  betAmount = 250;
  break;
  case "box3":
  betAmount = 500;
  break;
  case "box4":
  betAmount = 1000;
  break;
  case "box5":
  betAmount = 5000;
  break;
}



currentBetAmount += betAmount
document.getElementById("box6").innerHTML = ("Your current bet is " + "$" + currentBetAmount)

}
