var cardRefArr = [
    "assets/img/1.jpg",
    "assets/img/1a.jpg",
    "assets/img/2.jpg",
    "assets/img/2a.jpg",
    "assets/img/3.jpg",
    "assets/img/3a.jpg",
    "assets/img/4.jpg",
    "assets/img/4a.jpg",
    "assets/img/5.jpg",
    "assets/img/5a.jpg",
    "assets/img/6.jpg",
    "assets/img/6a.jpg",
    "assets/img/7.jpg",
    "assets/img/7a.jpg",
    "assets/img/8.jpg",
    "assets/img/8a.jpg",
    "assets/img/9.jpg",
    "assets/img/9a.jpg",
    "assets/img/10.jpg",
    "assets/img/10a.jpg"
]
var score = 0;
$memoryBoard = $('#memoryBoard') // game board

$(function () {
  loadAssets()

// if(match()) score++

// functions

  function loadAssets () {
    var indexArr = []
    var myArray = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
    var indexArr = shuffle(myArray)

    for(var i = 0 ; i < 20 ; i++) {
      $card = $('<div>')
      $card.addClass("card")


      $cardUnflipped = $('<img>')
      $cardUnflipped.css('width', 70)
      $cardUnflipped.css('height', 30)
      $cardUnflipped.css('backgroundColor', 'white')
      $cardUnflipped.css('display', 'none')
      // $cardUnflipped.attr('src', "images/back.jpg");
      // $cardUnflipped.attr('data-id', i);
      // $cardUnflipped.addEventListener("click", flipCard);
      $card.append($cardUnflipped)

      $cardFlipped = $('<img>')
      $cardFlipped.attr('src', cardRefArr[indexArr.length-1])
      // $cardFlipped.attr('display', 'none')
      // $cardFlipped.attr('width', 70)
      // $cardFlipped.attr('height', 30)
      // $cardFlipped.attr('background-size', '100%')
      indexArr.pop()
      $card.append($cardFlipped)

      $memoryBoard.append($card)
    }
  }

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it

          //use temp to store last counter (20)
        let temp = array[counter];
          //console.log(temp)

          //random index replace with last counter (20)
        array[counter] = array[index];
          //console.log(array[counter])

          //push back last counter (20) into random index prev position
        array[index] = temp;
          //console.log(array[index])
    }
    return array;
}

  //
  // function matchCard() {
  //   // if click 2 cards then try to match
  //   if(cardsInPlay.length == 2) {
  //   //get data-id to pair up?rank to pair up? ASK
  //     if (cardsInPlay[0] === cardsInPlay[1]) {
  //   //if match alert true
  //       alert("You found a match!");
  //   // if no match return false
  //     } else {
  //       alert("Sorry, try again.");
  //     }
  //   }
  // }

  // function flipCard() {
  //   // get data-id attribute
  //   var cardId = this.getAttribute("data-id");
  //   // set images
  //   this.setAttribute('src',cardRefArr[cardId].cardImage); ASK
  //   //push rank ASK
  //   cardsInPlay.push(cards[cardId].rank);
  //   //matchCard function
  //   matchCard(cardId);
  // }
  //

  // function gameStart () {
  // onclick instruction pop up?
  // onclick how to set shuffle
  // }

})
