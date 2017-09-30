// global variables
// var memoryArr = [
//   "Spain","Spain Ans",
//   "USA","USA Ans",
//   "China","China Ans",
//   "India","India Ans",
//   "Japan","Japan Ans",
//   "Korea","Korea Ans",
//   "Finland","Finland Ans",
//   "Maldives","Maldives Ans",
//   "Iceland","Iceland Ans",
//   "Kenya","Kenya Ans",
//   "Egypt","Egypt Ans"
// ];

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

  if(match()) score++

  // functions
  // function ready () {
  //
  // }

  function loadAssets () {
    var indexArr = []
    indexArr = getUniqueIndex()

    for(var i = 0 ; i < 20 ; i++) {
      $card = $('<div>')
      $card.addClass("card")

      $cardUnflipped = $('<div>')
      $cardUnflipped.css('height', 30)
      $cardUnflipped.css('width', 70)
      $cardUnflipped.css('backgroundColor', 'white')
      $cardUnflipped.css('display', 'none')

      $cardFlipped = $('<img>')
      $cardFlipped.attr('src', cardRefArr[indexArr.length-1])
      // $cardFlipped.attr('display', 'none')
      $cardFlipped.attr('width', 70)
      $cardFlipped.attr('height', 30)
      // $cardFlipped.attr('background-size', '100%')
      indexArr.pop()

      $card.append($cardUnflipped)
      $card.append($cardFlipped)
      $memoryBoard.append($card)
    }
  }

  function getUniqueIndex () {
    // generate first random number and push to randomArr
    var random = Math.floor(Math.random() * 20)
    var randomArr = []
    randomArr.push(random)
    random = Math.floor(Math.random() * 20) // generate next random number

    // while randomArr does not contain 20 unique numbers between 0-19, generate and store
    while(randomArr.length !== 19) {
      // loop through randomArr as many times as it takes to reach end of array
      for(var i = 0 ; i < randomArr.length ; i++) {
        // if (end of randomArr)
        if(i === randomArr.length-1) {
          // no repeated random number, store
          if(random !== randomArr[i]) {
            randomArr.push(random)
            random = Math.floor(Math.random() * 20) // generate new random number
          }
        }
      // not at end of randomArr
        else {
          // and random is not equal to current element in randomArr, continue(check next element in randomArr)
          if(random !== randomArr[i]) continue
          // if random is equal to current element in randomArr, generate new random number and exit current loop to restart
          else {
            random = Math.floor(Math.random() * 20)
            break
          }
        }
      }
      return randomArr
    }
  }

  function match() {

    // if match return true
    // if no match return false
  }

  // function gameStart () {
  //
  // }

})
