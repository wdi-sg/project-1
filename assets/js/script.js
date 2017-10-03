$(function () {
//randomly choose one of the data[]
//pick out the image - append that to the main div
//make img attr (data-price) as the price

var productIndex = Math.floor((Math.random() * 13))
var theProduct = data[productIndex]
var $productImg = $('<img width= 200px/>')

$productImg.attr('src', theProduct.image)
$('.productSpace').prepend($productImg)

console.log(data[productIndex])
console.log($productImg)


var $submit1 = $('#submit-1')
var $submit2 = $('#submit-2')
var $p1Div = $('.player1Div')
var $p2Div = $('.player2Div')
var $body = $('body')
var $reveal = $('<input id = "reveal" type="submit" value="Reveal">')
var itemPrice = $('#product').data("price")

var p1Arr = []
var p2Arr = []

var checkWinner = false

//prob, each time that someone clicks submit again, more numbers will appear.
//definitely need to remove the submit and input text. do i hide it?

$submit1.on('click', function () {
  var guess = ($('#player-1').val())
  var $printGuess = $("<h4 class = 'printGuess'>")
  $printGuess.text('$'+ guess)
  $p1Div.append($printGuess)

  $("#player-1").remove();
  $submit1.remove();

  if($('input[type="number"]').length === 0) {
    checkWinner = true
}
  priceDiff(guess, 1)
  winCheck()

  })

$submit2.on('click', function () {
  var guess = ($('#player-2').val())
  var $printGuess = $("<h4 class = 'printGuess'>")
  $printGuess.text('$'+ guess)
  $p2Div.append($printGuess)

  $("#player-2").remove();
  $submit2.remove();
  if($('input[type="number"]').length === 0) {
    checkWinner = true
  }
  priceDiff(guess, 2)
  winCheck()
})

function priceDiff(guessVal, playerNumber) {
  console.log(guessVal)
  var diff = Math.abs(guessVal - itemPrice)


  if(playerNumber === 1) {
    console.log('p1 diff is', diff);
    p1Arr.push(diff)
  } else {
    console.log('p2 diff is', diff);
    p2Arr.push(diff)
  }

}

function winCheck() {
  if(checkWinner === true) {
    $('.result').append($reveal)
  }
  // } else {
  //   console.log('dont do anything yet, cos checkWinner is still false')
  // }
}

$reveal.one('click', function () {
  print();
  setTimeout(compare,3000);

})
  //reveal the price of the item
  //reveal the winner
  //reveal what was the price difference for each player

  //problem now is that when we run on click, it immediatesly alert.
  //i want to reveal the true price first. ok, set timeout?

function compare () {
  if (p1Arr[0] > p2Arr[0])
  alert("winner is player 2")
  if (p2Arr[0] > p1Arr[0])
  alert("winner is player 1")
  window.location.reload(true)
}

function print() {
  console.log("hello")
  var $printPrice = $("<h2 class = 'printItemPrice'>")
  $('.result').append($printPrice)
  $printPrice.text('$'+ itemPrice)
}
//now need to have
//reset button (curently it reloads after alert "ok" is clicked)

})
