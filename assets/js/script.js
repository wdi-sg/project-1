 $(function () {

//sumbit button on click
//create <h2> with the data from the input
// $(#player-1).val()
// $(#player-2).val()

$submit1 = $('#submit-1')
$submit2 = $('#submit-2')
$p1Div = $('.player1Div')
$p2Div = $('.player2Div')

//prob, each time that someone clicks submit again, more numbers will appear.
//definitely need to remove the submit and input text. do i hide it?

$submit1.on('click', function () {
  var guess = ($('#player-1').val())
  var $printGuess = $("<h4 class = 'printGuess'>")
  $printGuess.text('$'+ guess)
  $p1Div.append($printGuess)
  $("#player-1").remove();
  $submit1.remove();
  console.log(guess)
  priceDiff() 
})

$submit2.on('click', function () {
  var guess = ($('#player-2').val())
  var $printGuess = $("<h4 class = 'printGuess'>")
  $printGuess.text('$'+ guess)
  $p2Div.append($printGuess)
  $("#player-2").remove();
  $submit2.remove();
  console.log(guess)
})

function priceDiff() {
  var itemPrice = $('img').data("price")
  var p1Diff = $('#player-1').val() - itemPrice
  console.log(p1Diff)
}

// priceDiff()
//right now the priceDiff function is running first
//need to run it under Reveal button
//how to put reveal button





})
