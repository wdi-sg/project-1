//Part 1 - Shuffle array, add a random number btw 1-4 into array(for adding rounds)
var instructorMoves = [1,2,3,4]

function shuffleArray(arr) {
  var addRanNum = (Math.floor( Math.random() * 4) + 1)
  // instructorMoves.push(addRanNum)

      for (var i = arr.length - 1; i > 0; i--) {
          var shuffle = Math.floor(Math.random() * (i + 1)); // <- semi-colon needed to seperate from next line
          [arr[i], arr[shuffle]] = [arr[shuffle], arr[i]]
      }
      return arr
}
  var randSequence = shuffleArray(instructorMoves).join()
  console.log(randSequence)
// End of Part 1.

//Part 2 - Convert to ascii and back to char to match with arrow key's char.
var toAsc = (randSequence.charCodeAt(0)-12)
var toAsc1 = (randSequence.charCodeAt(2)-12)
var toAsc2 = (randSequence.charCodeAt(4)-12)
var toAsc3 = (randSequence.charCodeAt(6)-12)
var toChar = String.fromCharCode(toAsc)
var toChar1 = String.fromCharCode(toAsc1)
var toChar2 = String.fromCharCode(toAsc2)
var toChar3 = String.fromCharCode(toAsc3)
console.log(toChar);
//Part 3 - Trying to match keypressed with instructorMoves in sequence
$(function(){
  var $body = $('body')

  var counter = 0
  $body.on('keydown', (e) => {
  var strOfKeys = String.fromCharCode(e.which)
   console.log(strOfKeys)
   if(strOfKeys === toChar && counter === 0){
   console.log('1st pattern is right')
   counter++
    }

   if(strOfKeys === toChar1 && counter === 1){
   console.log('2nd pattern is right')
   counter++
    }

   if(strOfKeys === toChar2 && counter === 2){
   console.log('3rd pattern is right')
   counter++
    }

    if(strOfKeys === toChar3 && counter === 3){
    alert("Round 1 completed!")
    counter++
     }
})

})
