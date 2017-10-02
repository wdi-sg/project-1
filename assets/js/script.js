 $(function () {

//sumbit button on click
//create <h2> with the data from the input
// $(#player-1).val()
// $(#player-2).val()

$submit1 = $('#submit-1')
$submit2 = $('#submit-2')
$p1Div = $('.player1Div')
$p2Div = $('.player2Div')

$submit1.on('click', function () {
  var guess = ($('#player-1').val())
  console.log(guess)
  var $printGuess = $("<h4 class = 'printGuess'>")
  $printGuess.text('$'+ guess)
  $p1Div.append($printGuess)
})

$submit2.on('click', function () {
  var guess = ($('#player-2').val())
  console.log(guess)
  var $printGuess = $("<h4 class = 'printGuess'>")
  $printGuess.text('$'+ guess)
  $p2Div.append($printGuess)
})

})
