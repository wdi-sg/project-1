$(document).ready(function(){
var memoryArr = [
      "Spain","Spain Ans",
      "USA","USA Ans",
      "China","China Ans",
      "India","India Ans",
      "Japan","Japan Ans",
      "Korea","Korea Ans",
      "Finland","Finland Ans",
      "Maldives","Maldives Ans",
      "Iceland","Iceland Ans",
      "Kenya","Kenya Ans",
      "Egypt","Egypt Ans"
];
var memoryValues = [];
var memoryCardsIds = [];
var cardsFlipped = 0;

Array.prototype.shuffleCards = function () {
  var i = this.length, j, temp;
  while(--i > 0) {
    j = Math.floor(Math.random()* (i+1));
    temp = this[j];
    this[j] = this [i];
    this[i] = temp;
  }
}

function createBoard() {
  cardsFlipped = 0;
  var output = '';
  memoryArr.shuffleCards();
  for (var i = 0; i < memoryArr.length; i++) {
    output +='<div id="card'+i+'" onclick="memoryFlipCard(this,\''+memoryArr[i]+'\')"></div>';
  }
  document.getElementById('memoryBoard').innerHTML = output;
}
createBoard()

function memoryFlipCard(card,val){
  if(card.innerHTML == "" && memoryValues.length < 2) {
    card.style.background = '#FFF';
    card.innerHTML = val;
    if(memoryValues.length == 0) {
      memoryValues.push(val);
      memoryCardsIds.push(cards.id);
    } else if (memoryValues.length == 1) {
      memoryValues.push(val);
      memoryCardsIds.push(cards.id);
      if(memoryValues[0] == memoryValues[1]) {
        cardsFlipped += 2;
        //clear arrays for new turn
        memoryValues = [];
        memoryCardsIds = [];
        //check to see if all cards is flipped or not
        if(cardsFlipped == memoryArr.length) {
          alert("Shuffling cards...generating new board");
          document.getElementById('memoryArr').innerHTML = "";
          newBoard();
        }
      } else {
        function flipBack() {
          //flip the 2 different tiles back over
          var card1 = document.getElementById(memoryCardsIds[0]);
          var card2 = document.getElementById(memoryCardsIds[1]);
          card1.style.background = 'ur(cardbg.jpg) no-repeat';
          card1.innerHTML = "";
          card2.style.background = 'ur(cardbg.jpg) no-repeat';
          card2.innerHTML = "";
          //clear arrays for next player
          memoryValues = [];
          memoryCardsIds = [];
        }
        setTimeout(flipBack, 2000)
      }
    }
  }
}
})
