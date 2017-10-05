//Part 1 - Shuffle array, add a random number btw 1-4 into array(for adding rounds)
var instructorMoves = [37,38,39,40]
var whichPlayer = 0
var playerTest = 0


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
  $('.playerOneDiv').addClass("player1")
  $('.playerTwoDiv').addClass("player2")
  $('.instructorDiv').addClass("instructorPic")
  var $resetButton = $('<button class = "resetBtn">Reset</button>')
  var scoreP1 = 0
  var scoreP2 = 0
  var counter1 = 0
  var counter2 = 0
  var rounds = 1
  var randSequence = shuffleArray(instructorMoves)


  //Part 2a - Add turns after round 1
  function addTurn(){
    instructorMoves = instructorMoves.concat(instructorMoves)
    randSequence = shuffleArray(instructorMoves)
    return randSequence;
  }

  function instructorDance () {
    var instructorMovesPic = [
      { number: 37, image: 'url("./assets/images/instructor_1.png")' },
      { number: 38, image: 'url("./assets/images/instructor_2.png")' },
      { number: 39, image: 'url("./assets/images/instructor_3.png")' },
      { number: 40, image: 'url("./assets/images/instructor_4.png")' }
    ];
    $('.instructorDiv').addClass("move");
    var timeoutInterval = 1000
    // console.log(randSequence);
    let test = randSequence.map(function(value) {
      return (value - 36);
    })

    for(let e = 0; e <= randSequence.length; e++){
      for(let i = 0; i < instructorMovesPic.length; i++) {
        // console.log(i);
        if(instructorMovesPic[i].number === randSequence[e]){
          setTimeout(function() {
            console.log(e)
            $('.instructorDiv').css('backgroundImage', instructorMovesPic[i].image);
            $instructor.text(test.slice(0,e+1))
          }, timeoutInterval * (e*0.4))
        }
      }
    }
  }

  function timerWithAddRounds (){
    var timer = 6;
    var timerInverval = setInterval(function() {
      timer--;
      if(timer >= 0){
        return $instructor.text(timer)
      } else {
        clearInterval(timerInverval)
        if (rounds > 1) addTurn()
        instructorDance()
        return  instructorDance()
      }
    }, 1000);
  }

  $('.btn2').on('click', function(){
  document.location.reload(true);
  })

  myAudio = new Audio('./assets/audio/bgm.mp3')
  myAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
  }, false);

  $button.on('click' , function () {
    myAudio.play();
    timerWithAddRounds()
    $(".btn1").hide()
    $(".btn2").show()

  $body.on('keydown', (e) => {

    if(e.which === 49 || e.which === 50|| e.which === 51|| e.which === 52){
      whichPlayer = 1
    }
    if(e.which === 37 || e.which === 38|| e.which === 39|| e.which === 40){
      whichPlayer = 2
    }

    //Part 3 - Matching keypressed with instructorMoves in sequence
    var strOfKeys = e.which - 12 //Player one's key stroke
    var strOfKeys1 = e.which    //Player two's key stroke

    // Bind keys with different images for player 1
    if(strOfKeys === 37) {
    $('.playerOneDiv').addClass("move");
    $('.playerOneDiv').css('backgroundImage', `url("./assets/images/player1_1.png")`);
    new Audio('./assets/audio/sound1.mp3').play()
    }
    if(strOfKeys === 38) {
    $('.playerOneDiv').addClass("move");
    $('.playerOneDiv').css('backgroundImage', `url("./assets/images/player1_2.png")`);
    new Audio('./assets/audio/sound2.mp3').play()
    }
    if(strOfKeys === 39) {
    $('.playerOneDiv').addClass("move");
    $('.playerOneDiv').css('backgroundImage', `url("./assets/images/player1_3.png")`);
    new Audio('./assets/audio/sound3.mp3').play()
    }
    if(strOfKeys === 40) {
    $('.playerOneDiv').addClass("move");
    $('.playerOneDiv').css('backgroundImage', `url("./assets/images/player1_4.png")`);
    new Audio('./assets/audio/sound4.mp3').play()
    }

    // Bind keys with different images for player 2
    if(strOfKeys === 25) {
    $('.playerTwoDiv').addClass("move");
    $('.playerTwoDiv').css('backgroundImage', `url("./assets/images/player1_1.png")`);
    new Audio('../audio/sound1.mp3').play()
    }
    if(strOfKeys === 26) {
    $('.playerTwoDiv').addClass("move");
    $('.playerTwoDiv').css('backgroundImage', `url("./assets/images/player1_2.png")`);
    new Audio('../audio/sound2.mp3').play()
    }
    if(strOfKeys === 27) {
    $('.playerTwoDiv').addClass("move");
    $('.playerTwoDiv').css('backgroundImage', `url("./assets/images/player1_3.png")`);
    new Audio('../audio/sound3.mp3').play()
    }
    if(strOfKeys === 28) {
    $('.playerTwoDiv').addClass("move");
    $('.playerTwoDiv').css('backgroundImage', `url("./assets/images/player1_4.png")`);
    new Audio('../audio/sound4.mp3').play()
    }

  //Check Player 1's match with randomized array

  if(strOfKeys === randSequence[counter1]) {
    console.log('correct P1')
    counter1++
    if(counter1 === 4 && rounds === 1) {
      // alert(`Player 1 passed round ${rounds}`)
      $(".playerOneAlert2").html("O").show().delay(2000).fadeOut(1000)
      $(".playerOneAlert2").css({"color" : "green", "font-size" : "50px"})
      counter1 = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      new Audio('../audio/cheer.mp3').play()
      timerWithAddRounds()
    }
    if(counter1 === 8 && rounds === 2) {
      // alert(`Player 1 passed round ${rounds}`)
      $(".playerOneAlert2").html("O").show().delay(2000).fadeOut(1000)
      $(".playerOneAlert2").css({"color" : "green", "font-size" : "50px"})
      counter1 = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      new Audio('../audio/cheer.mp3').play()
      timerWithAddRounds()
    }
    if(counter1 === 16 && rounds === 3) {
      // alert(`Player 1 passed round ${rounds}`)
      $(".playerOneAlert2").html("O").show().delay(2000).fadeOut(1000)
      $(".playerOneAlert2").css({"color" : "green", "font-size" : "50px"})
      counter1 = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      new Audio('../audio/cheer.mp3').play()
      timerWithAddRounds()
    }
    if(counter1 === 32 && rounds === 4) {
      // alert(`Player 1 passed round ${rounds}`)
      $(".playerOneAlert2").html("O").show().delay(2000).fadeOut(1000)
      $(".playerOneAlert2").css({"color" : "green", "font-size" : "50px"})
      counter1 = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      new Audio('../audio/cheer.mp3').play()
      timerWithAddRounds()
    }
    if(counter1 === 64 && rounds === 5) {
      // alert(`Player 1 passed round ${rounds}`)
      $(".playerOneAlert2").html("X").show().delay(2000).fadeOut(1000)
      $(".playerOneAlert2").css({"color" : "green", "font-size" : "50px"})
      counter1 = 0
      rounds++
      scoreP1++
      $playerOne.text(`Score: ${scoreP1}`)
      new Audio('../audio/cheer.mp3').play()
      if(scoreP1 >= 3){
        $playerOne.text(`Score: ${scoreP1}, Player 1 won!`)
        $(".playerOneAlert2").html("Winner!").show().delay(5000).fadeOut(400)
        $(".playerOneAlert2").css({"color" : "blue", "font-size" : "50px"})
      }
    }
  } else if (strOfKeys !== randSequence[counter1] && whichPlayer === 1) {
     console.log('Invalid move! P1')
     $(".playerOneAlert2").html("X").show().delay(400).fadeOut(400)
     $(".playerOneAlert2").css({"color" : "red", "font-size" : "50px"})
     new Audio('../audio/boo.mp3').play()
     counter1 = 0
  }

 //Check Player 2's match with randomized array
 if(strOfKeys1 === randSequence[counter2]) {
   console.log('correct P2')
   counter2++
   if(counter2 === 4 && rounds === 1) {
     $(".playerTwoAlert2").html("O").show().delay(2000).fadeOut(1000)
     $(".playerTwoAlert2").css({"color" : "green", "font-size" : "50px"})
     counter2 = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     new Audio('../audio/cheer.mp3').play()
     timerWithAddRounds()
   }
   if(counter2 === 8 && rounds === 2) {
     $(".playerTwoAlert2").html("O").show().delay(2000).fadeOut(1000)
     $(".playerTwoAlert2").css({"color" : "green", "font-size" : "50px"})
     counter2 = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     new Audio('../audio/cheer.mp3').play()
     timerWithAddRounds()
   }
   if(counter2 === 16 && rounds === 3) {
     $(".playerTwoAlert2").html("O").show().delay(2000).fadeOut(1000)
     $(".playerTwoAlert2").css({"color" : "green", "font-size" : "50px"})
     counter2 = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     new Audio('../audio/cheer.mp3').play()
     timerWithAddRounds()
   }
   if(counter2 === 32 && rounds === 4) {
     $(".playerTwoAlert2").html("O").show().delay(2000).fadeOut(1000)
     $(".playerTwoAlert2").css({"color" : "green", "font-size" : "50px"})
     counter2 = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     new Audio('../audio/cheer.mp3').play()
     timerWithAddRounds()
   }
   if(counter2 === 64 && rounds === 5) {
     $(".playerTwoAlert2").html("O").show().delay(2000).fadeOut(1000)
     $(".playerTwoAlert2").css({"color" : "green", "font-size" : "50px"})
     counter2 = 0
     rounds++
     scoreP2++
     $playerTwo.text(`Score: ${scoreP2}`)
     new Audio('../audio/cheer.mp3').play()
     if(scoreP2 >= 3){
       $playerTwo.text(`Score: ${scoreP2}, Player 2 won!`)
       $(".playerTwoAlert2").html("Winner!").show().delay(5000).fadeOut(400)
       $(".playerTwoAlert2").css({"color" : "blue", "font-size" : "50px"})
     }
   }
  }
  else if (strOfKeys !== randSequence[counter1] && whichPlayer === 2) {
    console.log('Invalid move! P2')
    $(".playerTwoAlert2").html("X").show().delay(400).fadeOut(400)
    $(".playerTwoAlert2").css({"color" : "red", "font-size" : "50px"})
    new Audio('../audio/boo.mp3').play()
    counter2 = 0
}


})

})

})
