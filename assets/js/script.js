$(function () {

  var i = 0
  var theProduct = data[i]

function gameProduct () {
  var $productImg = $('<img class = "productImage" width= 150px/>')
  var $printProductName = $('<h3 class = "h3printProductName">')
  $printProductName.text(theProduct.productName)

  $productImg.attr(
    {'id': 'product',
    'productName': theProduct.productName,
      'src': theProduct.image,
      'data-price': theProduct.price,
    'productAdv':theProduct.productAdv})
  $('.productSpace').prepend($productImg)
  $('.productSpace').append($printProductName)

  console.log(theProduct)

}



function submitGuess() {
  $('.player1Div').append($('<input id="player-1" type="number">'), $('<input id = "submit-1" type="submit" value="Submit">'))
  $('.player2Div').append($('<input id="player-2" type="number">'), $('<input id = "submit-2" type="submit" value="Submit">'))
}


  $('#submit-name').on('click', function () {
    var player1 = $('#player-1name').val()
    var player2 = $('#player-2name').val()
    gameProduct()
    submitGuess()

    $('.player1Div').prepend($('<h2 class = "player1">').text(player1))
    $('.player2Div').prepend($('<h2 class = "player2">').text(player2))

    $('#player-1name').remove()
    $('#player-2name').remove()
    $('#submit-name').remove()

  })

  var $playerInput = $('.playerInputs')
  var $p1Div = $('.player1Div')
  var $p2Div = $('.player2Div')
  var $body = $('body')
  var $reveal = $('<input id = "reveal" type="submit" value="Reveal">')

  // var itemPrice = $('#product').data('price')

  var p1Arr = []
  var p2Arr = []

  var checkWinner = false

// prob, each time that someone clicks submit again, more numbers will appear.
// definitely need to remove the submit and input text. do i hide it?

  $playerInput.on('click', '#submit-1', function () {
    var guess = ($('#player-1').val())
    var $printGuess = $("<h4 class = 'print1Guess'>")
    $printGuess.text('$' + guess)
    $p1Div.append($printGuess)

    $('#player-1').remove()
    $('#submit-1').remove()

    if ($('input[type="number"]').length === 0) {
      checkWinner = true
    }
    priceDiff(guess, 1)
    winCheck()
  })

  $playerInput.on('click', '#submit-2', function () {
    var guess = ($('#player-2').val())
    var $printGuess = $("<h4 class = 'print2Guess'>")
    $printGuess.text('$' + guess)
    $p2Div.append($printGuess)

    $('#player-2').remove()
    $('#submit-2').remove()

    if ($('input[type="number"]').length === 0) {
      checkWinner = true
    }
    priceDiff(guess, 2)
    winCheck()
  })

  function priceDiff (guessVal, playerNumber) {
    console.log(guessVal)
    var diff = Math.abs(guessVal - $('#product').data('price'))

    if (playerNumber === 1) {
      console.log('p1 diff is', diff)
      p1Arr.push(diff)
    } else {
      console.log('p2 diff is', diff)
      p2Arr.push(diff)
    }
  }

  var $reveal = $('<input id = "reveal" type="submit" value="Reveal">')

  function winCheck () {
    if (checkWinner === true) {
      $('.result').append($reveal)
    }
  // } else {
  //   console.log('dont do anything yet, cos checkWinner is still false')
  // }
  }

  $('.result').on('click', '#reveal', function () {
    print()
    setTimeout(compare, 2000)
    console.log('reveal is clicked')
  })
  // reveal the price of the item
  // reveal the winner
  // reveal what was the price difference for each player

  // problem now is that when we run on click, it immediatesly alert.
  // i want to reveal the true price first. ok, set timeout?

  function compare () {
    var $shoppingList = $('<ul>')
    console.log($('#product').attr("productName"))

    var productName = ($('#product').attr("productName")).substring(0, 35)
    $shoppingList.append($('<li>').text(productName))

    if (p1Arr[0] > p2Arr[0]) {
      alert("YAY! "+$('.player2').text()+", you won!")
      alert($('#product').attr("productAdv"))
      // console.log(shoppingList)
      $('.player2Div').append($shoppingList)
     }
    if (p2Arr[0] > p1Arr[0]) {
      alert("YAY! "+$('.player1').text()+", you won!")
      alert($('#product').attr("productAdv"))
      $('.player1Div').append($shoppingList)
    }
    ($('.print1Guess')).remove();
    ($('.print2Guess')).remove();
    $('.result').append($('<input id = "nextProduct" type="submit" value="Next Item!">'))
    // $("ul").before(nextItem())
    // window.location.reload(true)
  }

  function print () {
    var $printPrice = $("<h2 class = 'printItemPrice'>")
    $('.result').append($printPrice)
    $printPrice.text('The price is...$' + $('#product').data('price') + '!')
  }

  function nextItem () {
    $('.productImage').remove()
    $('.h3printProductName').remove()
    $reveal.remove()
    $('.printItemPrice').remove()
    p1Arr = []
    p2Arr = []

    i += 1
    theProduct = data[i]
    gameProduct ()
    submitGuess()

    $('#nextProduct').remove()


    }


  $('.result').on('click', '#nextProduct', function (){
    if ($( "li" ).length == 10) {
      alert("THANK YOU FOR PLAYING! Hope you've enjoyed your shopping!")
      window.location.reload(true)
    }
    else {
    nextItem()
  }

  })


})
