//Part 1 - Shuffle array, add a random number btw 1-4 into array(for adding rounds)
var instructorMoves = [37,38,39,40]

function shuffleArray(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
          var shuffle = Math.floor(Math.random() * (i + 1)) // <- semi-colon needed to seperate from next line
          ;[arr[i], arr[shuffle]] = [arr[shuffle], arr[i]]
      }
      return arr
      }

$(function(){
  var $body = $('body')
  var $instructor = $('.instructor')
  var $button = $('button')
  var $playerOne = $('.playerOne')
  var $playerTwo = $('.playerTwo')
  var scoreP1 = 0
  var scoreP2 = 0
  var counter = 0
  var rounds = 1
  var randSequence = shuffleArray(instructorMoves)

  function addTurn(){
    instructorMoves = instructorMoves.concat(instructorMoves)
    randSequence = shuffleArray(instructorMoves)
    return randSequence;
  }

  function convertValue (){
    var test = randSequence.map( function(value) {
    return value - 36;
    })
    $instructor.text(test)
  }

  $button.on('click' , function () {
    convertValue()

  $body.on('keydown', (e) => {
//Part 3 - Trying to match keypressed with instructorMoves in sequence
  function checkForMatch (){
    var strOfKeys = e.which - 12
    var strOfKeys1 = e.which

    console.log("key pressed is: ", strOfKeys)
    console.log("key pressed is: ", strOfKeys1)
  //Check Player 1's match with pattern
  if(strOfKeys === randSequence[counter]) {
    console.log('correct')
    counter++
    if(counter === 4 && rounds === 1){
      alert(`Player 1 passed round ${rounds}`)
      counter = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      addTurn()
      convertValue()
    }
    if(counter === 8 && rounds === 2){
      alert(`Player 1 passed round ${rounds}`)
      counter = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      addTurn()
      convertValue()
    }
    if(counter === 16 && rounds === 3){
      alert(`Player 1 passed round ${rounds}`)
      counter = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      addTurn()
      convertValue()
    }
    if(counter === 32 && rounds === 4){
      alert(`Player 1 passed round ${rounds}`)
      counter = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      addTurn()
      convertValue()
    }
    if(counter === 64 && rounds === 5){
      alert(`Player 1 passed round ${rounds}`)
      counter = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      if(scoreP1 >= 3){
        $playerOne.text(`Score: ${scoreP1}, Player 1 won!`)
      }
    }
   }
   else {
     console.log('Invalid move!')
 }

 //Check Player 2's match with pattern
 if(strOfKeys1 === randSequence[counter]) {
   console.log('correct')
   counter++
   if(counter === 4 && rounds === 1){
     alert(`Player 2 passed round ${rounds}`)
     counter = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     addTurn()
     convertValue()
   }
   if(counter === 8 && rounds === 2){
     alert(`Player 2 passed round ${rounds}`)
     counter = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     addTurn()
     convertValue()
   }
   if(counter === 16 && rounds === 3){
     alert(`Player 2 passed round ${rounds}`)
     counter = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     addTurn()
     convertValue()
   }
   if(counter === 32 && rounds === 4){
     alert(`Player 2 passed round ${rounds}`)
     counter = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     addTurn()
     convertValue()
   }
   if(counter === 64 && rounds === 5){
     alert(`Player 2 passed round ${rounds}`)
     counter = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     if(scoreP2 >= 3){
       $playerTwo.text(`Score: ${scoreP2}, Player 2 won!`)
     }
   }
  }
  else {
    console.log('Invalid move!')
}
}
checkForMatch()

})

})

})
