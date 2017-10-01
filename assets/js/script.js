//Part 1 - Shuffle array, add a random number btw 1-4 into array(for adding rounds)
var instructorMoves = [1,2,3,4]

function shuffleArray(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
          var shuffle = Math.floor(Math.random() * (i + 1)); // <- semi-colon needed to seperate from next line
          [arr[i], arr[shuffle]] = [arr[shuffle], arr[i]]
      }
      return arr
}
// End of Part 1.

$(function(){
  var $body = $('body')
  var $instructor = $('.instructor')
  var $button = $('button')
  var counter = 0
  var rounds = 1
  var randSequence = shuffleArray(instructorMoves).join()
  console.log(randSequence)

  //add rounds
  function addRounds(arr){
    for(var e = 0; e < 15; e++){
      var addRanNum = (Math.floor( Math.random() * 4) + 1)
      if(counter === 4 & e <= 3 && arr.length < 9)
      instructorMoves.push(addRanNum)
    }
        return arr
  }

  $button.on('click' , function () {
    $instructor.text(randSequence)

  })

  //Part 2 - Convert to ascii and back to char to match with arrow key's char.
  $body.on('keydown', (e) => {
    function checkForMatch (){
        var toAsc = (randSequence.charCodeAt(0)-12)
        var toAsc1 = (randSequence.charCodeAt(2)-12)
        var toAsc2 = (randSequence.charCodeAt(4)-12)
        var toAsc3 = (randSequence.charCodeAt(6)-12)
        var toChar = String.fromCharCode(toAsc)
        var toChar1 = String.fromCharCode(toAsc1)
        var toChar2 = String.fromCharCode(toAsc2)
        var toChar3 = String.fromCharCode(toAsc3)

//Part 3 - Trying to match keypressed with instructorMoves in sequence
  var strOfKeys = String.fromCharCode(e.which)
   console.log("key pressed is: ", strOfKeys)
   if(strOfKeys === toChar && counter === 0){
   console.log('1st pattern is right')
   movesPassed = 1
   counter++
    }

   if(strOfKeys === toChar1 && counter === 1){
   console.log('2nd pattern is right')
   movesPassed = 2
   counter++
    }

   if(strOfKeys === toChar2 && counter === 2){
   console.log('3rd pattern is right')
   movesPassed = 3
   counter++
    }

    if(strOfKeys === toChar3 && counter === 3){
    alert("Round 1 completed!")
    movesPassed = 4
    counter++
    shuffleArray(instructorMoves)
    rounds = 2
  }

    if(rounds === 2){
    var randSequence2 = addRounds(instructorMoves).join()
    console.log(randSequence2);

    if(strOfKeys === toChar && counter === 4){
    console.log('1st pattern is right')
    counter++
     }

    if(strOfKeys === toChar1 && counter === 5){
    console.log('2nd pattern is right')
    counter++
     }

    if(strOfKeys === toChar2 && counter === 6){
    console.log('3rd pattern is right')
    counter++
     }

     if(strOfKeys === toChar3 && counter === 7){
     alert("Round 2 completed!")
     counter = 8
     rounds = 3
      }

    }
     }
   checkForMatch()

})

})
