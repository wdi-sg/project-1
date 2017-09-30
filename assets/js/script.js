//Part 1 - Shuffle array, add a random number btw 1-4 into array(for adding rounds)
var instructorMoves = [1,2,3,4]

function shuffleArray(arr) {
  var addRanNum = (Math.floor( Math.random() * 4) + 1)
  instructorMoves.push(addRanNum)

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
var toChar = String.fromCharCode(toAsc)

//Part 3 - Trying to match keypressed with instructorMoves in sequence
$(function(){
  var $body = $('body')

  $body.on('keydown', (e) => {

  var strOfKeys = String.fromCharCode(e.which)
  //  console.log(s)
   if(strOfKeys === toChar)
   console.log('yay!')
})

})
