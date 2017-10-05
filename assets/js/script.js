$(function () {
  // global variables
  var cardRefArr = [
    '.assets/img/1.jpg',
    '.assets/img/1a.jpg',
    '.assets/img/2.jpg',
    '.assets/img/2a.jpg',
    '.assets/img/3.jpg',
    '.assets/img/3a.jpg',
    '.assets/img/4.jpg',
    '.assets/img/4a.jpg',
    '.assets/img/5.jpg',
    '.assets/img/5a.jpg',
    '.assets/img/6.jpg',
    '.assets/img/6a.jpg',
    '.assets/img/7.jpg',
    '.assets/img/7a.jpg',
    '.assets/img/8.jpg',
    '.assets/img/8a.jpg',
    '.assets/img/9.jpg',
    '.assets/img/9a.jpg',
    '.assets/img/10.jpg',
    '.assets/img/10a.jpg'
  ]

  // global game variables
  var cardsClicked = 0
  var cardsClickedArr = []
  var cardsSave = []
  var matchFound = false
  // var score = 0

  var player1Score = 0
  // var player1Turns = 0
  var player2Score = 0
  // var player2Turns = 0
  var currentPlayer = 1

  // game variables
  var timer1

  // jQuery objects
  var $memoryBoard = $('#memoryBoard') // game board div
  var $restart = $('#restart') // restart button
  var $start = $('#start') //start button
  var $timer = $('.timer') //timer

  // logic start
  loadAssets()
  instrSlider()

  $start.on('click', function () {
    $start.hide()

    $('.card').removeClass('avoid-clicks')
    timer()
    var player1Name = prompt("What's Player 1's name?")
    var player2Name = prompt("What's Player 2's name?")
    $('.player1').text(player1Name)
    $('.player2').text(player2Name)
  })

  $memoryBoard.on('click', '.card', function () {
    var cardId = $(this).data('id')
    var cardImage = $(this).find('img')

    assignCard(cardId, cardImage)

    cardsClicked++
    cardsSave.push(Number(cardId))
    cardsClickedArr.push(Number(cardId))

    if (cardsClicked === 2) {
      $('.card').addClass('avoid-clicks')
      matchFound = matchCard(cardsClickedArr[0], cardsClickedArr[1])

      if (matchFound) {
        changeScore(currentPlayer)

        // remove '.avoid-clicks' for all card except .card that's matched
        $('.card').removeClass('avoid-clicks')
        for (var i = 0; i <cardsSave.length; i++) {
          $(`.card[data-id="${cardsSave[i]}"]`).addClass('avoid-clicks')
        }
        //only cards that are currently matched will be avoid clicks, the prev matches dont avoid clicks
      } else {
        setTimeout(() => {
          // gets data id of first clicked div
          var firstClicked = cardsSave[cardsSave.length - 2]

          // Changing back non-matched card
          // set img src attribute of first clicked div
          $(`.card[data-id="${firstClicked}"]`).find('img').attr('src', './assets/img/back.jpg')
          // set img src attribute of second clicked div
          $(this).find('img').attr('src', './assets/img/back.jpg')
          cardsSave.pop()
          cardsSave.pop()
          // remove class of stopping clicks
          $('.card').removeClass('avoid-clicks')

        }, 500)
      }

      // return cardsClicked = 0 and cardsClickedArr = [] everytime
      // the program checks for matchCard()
      cardsClicked = 0
      cardsClickedArr = []

      currentPlayerTurn()
    }
  })

  $restart.on('click', function () {
    $restart.hide()
    $memoryBoard.children().remove()
    loadAssets()

    cardsClicked = 0
    cardsClickedArr = []
    cardsSave = []
    matchFound = false
    player1Score = 0
    player2Score = 0
    playerTurn = 1
    currentPlayer = 1

    $('.playerTurnNow').text("It's Player " + currentPlayer + "'s turn.")
    $('.player1-score').text('Score: ' + player1Score)
    $('.player2-score').text('Score: ' + player2Score)

    $('.card').removeClass('avoid-clicks')
    clearInterval(timer1)
    timer()
  })
  // logic end

  // functions

  // This fn initialize cards and initialize buttons that's suppose to be hidden
  // until start btn is clicked
  function loadAssets () {
    var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    var indexArr = shuffle(myArray)

    for (var i = 0; i < myArray.length; i++) {
      var $card = $('<div>')
      $card.addClass('card')

      var $cardUnflipped = $('<img>')
      $cardUnflipped.attr('src', './assets/img/back.jpg')
      $card.attr('data-id', indexArr[i])

      $card.append($cardUnflipped)
      $memoryBoard.append($card)
    }

    // avoid click if start has not been clicked yet
    $('.card').addClass('avoid-clicks')
    // hide restart button
    $restart.hide()
  }

  function shuffle (array) {
    let counter = array.length
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter)
      // Decrease counter by 1
      counter--
      // SWOP
      // use temp to store last counter (20)
      let temp = array[counter]
      // random index replace with last counter (20)
      array[counter] = array[index]
      // push back last counter (20) into random index prev position
      array[index] = temp
    }
    return array
  }

  function instrSlider () {
    var instrlink = $('#instructionslink')
    instrlink.click(function () {
      var instrtext = $('#instructionstext')
      instrtext.slideToggle(100, 'linear', function () {
      })
    })
  }

  function currentPlayerTurn () {
    currentPlayer = (currentPlayer === 1) ? 2 : 1
    $('.playerTurnNow').text("It's Player " + currentPlayer + "'s turn.")
  }

  function timer () {
    var timeleft = 50
    $('.timer').show()
    timer1 = setInterval(function () {
      --timeleft
      $timer.html(timeleft)

      if (timeleft <= 0) {
        $('.timer').hide()
        clearInterval(timer1)
        $restart.show()
        $('.card').addClass('avoid-clicks')
        flipBackAll()
        checkWinner()
      }
    }, 1000)
  }

  function assignCard (cardId, cardImage) {
    if (cardId <= 10) cardImage.attr('src', `assets/img/${cardId}.jpg`)
    else if (cardId > 10 && cardId < 20) cardImage.attr('src', `assets/img/${cardId % 10}a.jpg`)
    else cardImage.attr('src', `assets/img/${'10a'}.jpg`)
  }

  function matchCard (cardOne, cardTwo) {
    // var cardOne = cardsClickedArr[0]
    // var cardTwo = cardsClickedArr[1]
    return cardOne % 10 === cardTwo % 10
  }

  function changeScore (player) {
    if (player === 1) {
      player1Score += 2
      $('.player1-score').text('Score: ' + player1Score)
    } else {
      player2Score += 2
      $('.player2-score').text('Score: ' + player2Score)
    }
  }

  function flipBackAll () {
    $('.card').find('img').attr('src', './assets/img/back.jpg')
  }

  function checkWinner () {
      if (player1Score > player2Score) {
        alert('Player 1 wins!')
      } else if (player2Score > player1Score) {
        alert('Player 2 wins!')
      } else {
        alert("It's a draw! Play again?")
      }
  }
})
