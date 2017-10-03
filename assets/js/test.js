var cardRefArr = [
  'assets/img/1.jpg',
  'assets/img/1a.jpg',
  'assets/img/2.jpg',
  'assets/img/2a.jpg',
  'assets/img/3.jpg',
  'assets/img/3a.jpg',
  'assets/img/4.jpg',
  'assets/img/4a.jpg',
  'assets/img/5.jpg',
  'assets/img/5a.jpg',
  'assets/img/6.jpg',
  'assets/img/6a.jpg',
  'assets/img/7.jpg',
  'assets/img/7a.jpg',
  'assets/img/8.jpg',
  'assets/img/8a.jpg',
  'assets/img/9.jpg',
  'assets/img/9a.jpg',
  'assets/img/10.jpg',
  'assets/img/10a.jpg'
]

var cardsClicked = 0
var cardsClickedArr = []
var cardsSave = []
var matchFound = false

$(function () {
  var $memoryBoard = $('#memoryBoard') // game board

  loadAssets()

  $memoryBoard.on('click', '.card', function () {
    // how to get the data-id

    var cardId = $(this).data('id')
    var cardImage = $(this).find('img')

    if (cardId <= 10) cardImage.attr('src', `assets/img/${cardId}.jpg`)
    else if (cardId > 10 && cardId < 20) cardImage.attr('src', `assets/img/${cardId % 10}a.jpg`)
    else cardImage.attr('src', `assets/img/${'10a'}.jpg`)

    cardsClicked++
    cardsSave.push(Number(cardId))
    cardsClickedArr.push(Number(cardId))

    $(this).addClass('avoid-clicks')

    if (cardsClicked === 2) {
      matchFound = matchCard()

      if (matchFound) {
        console.log(this)
        // $memoryBoard.addClass('avoid-clicks')
      } else {
        console.log('cardsClickedArr', cardsClickedArr)
        setTimeout(() => {
          var firstClicked = cardsSave[cardsSave.length - 2]
          $('[data-id="' + firstClicked + '"]').find('img').attr('src', '/assets/img/back.jpg')

          var cardImage = $(this).find('img')
          cardImage.attr('src', '/assets/img/back.jpg')
          matchFound = false
          // remove class of stopping clicks
          $('.card').removeClass('avoid-clicks')
        }, 500)
      }

      // return cardsClicked = 0 and cardsClickedArr = [] everytime
      // the program checks for matchCard()

      cardsClicked = 0
      cardsClickedArr = []
    }

    // else $memoryBoard.removeClass("avoid-clicks");
  })

// functions

  function loadAssets () {
    var indexArr = []
    var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    var indexArr = shuffle(myArray)

    for (var i = 0; i < 20; i++) {
      // console.log(`indexArr[${i}]`, indexArr[i])

      var $card = $('<div>')
      $card.addClass('card')

      var $cardUnflipped = $('<img>')
      $cardUnflipped.attr('src', '/assets/img/back.jpg')
      $card.attr('data-id', indexArr[i])

      $card.append($cardUnflipped)
      $memoryBoard.append($card)
    }
  }

  function shuffle (array) {
    let counter = array.length

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
      let index = Math.floor(Math.random() * counter)

        // Decrease counter by 1
      counter--

        // And swap the last element with it

          // use temp to store last counter (20)
      let temp = array[counter]
          // console.log(temp)

          // random index replace with last counter (20)
      array[counter] = array[index]
          // console.log(array[counter])

          // push back last counter (20) into random index prev position
      array[index] = temp
          // console.log(array[index])
    }
    return array
  }

  function matchCard () {
    var cardOne = cardsClickedArr[0]
    var cardTwo = cardsClickedArr[1]

    // if (cardOne % 10 === cardTwo % 10) {
    //   // console.log('match found')
    //   return true
    // } else if (cardOne % 10 === cardTwo % 10) {
    //   // console.log('match found')
    //   return true
    // } else {
    //   // console.log('no match')
    //   return false
    // }
    return cardOne % 10 === cardTwo % 10
  }
})
