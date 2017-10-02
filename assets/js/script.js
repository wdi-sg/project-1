$(function () {

//sumbit button on click
//create <h2> with the data from the input
// $(#player-1).val()
// $(#player-2).val()

var $submit1 = $('#submit-1')
var $submit2 = $('#submit-2')
var $p1Div = $('.player1Div')
var $p2Div = $('.player2Div')
var $body = $('body')
var $reveal = $('<input id = "reveal" type="submit" value="Reveal">')
var itemPrice = $('img').data("price")

var checkWinner = false

//prob, each time that someone clicks submit again, more numbers will appear.
//definitely need to remove the submit and input text. do i hide it?

$submit1.on('click', function () {
  var guess = ($('#player-1').val())
  var $printGuess = $("<h4 class = 'printGuess'>")
  $printGuess.text('$'+ guess)
  $p1Div.append($printGuess)
  // call priceDiff with guess value
  priceDiff(guess, 1)
  $("#player-1").remove();
  $submit1.remove();
  console.log(guess)

  if($('input[type="number"]').length === 0) {
    checkWinner = true
  }

  winCheck()
})

$submit2.on('click', function () {
  var guess = ($('#player-2').val())
  var $printGuess = $("<h4 class = 'printGuess'>")
  $printGuess.text('$'+ guess)
  $p2Div.append($printGuess)

  priceDiff(guess, 2)
  $("#player-2").remove();
  $submit2.remove();
  console.log(guess)

  if($('input[type="number"]').length === 0) {
    checkWinner = true
  }

  winCheck()
})

function priceDiff(guessVal, playerNumber) {
  console.log(guessVal)
  var diff = Math.abs(guessVal - itemPrice)

  if(playerNumber === 1) {
    console.log('p1 diff is', diff);
  } else {
    console.log('p2 diff is', diff);
  }
}

function winCheck() {
  if(checkWinner === true) {
    $body.append($reveal)
    // check who has the smallest diff

    console.log('check who is the winner')
  }
  // } else {
  //   console.log('dont do anything yet, cos checkWinner is still false')
  // }
}

$reveal.on('click', function() {
  console.log("hello")
  var $printPrice = $("<h2 class = 'printItemPrice'>")
  $('.item').append($printPrice)
  $printPrice.text('$'+ itemPrice)


  //reveal the price of the item
  //reveal the winner
  //reveal what was the price difference for each player

})
// priceDiff()
//right now the priceDiff function is running first
//need to run it under Reveal button
//how to put reveal button





})
