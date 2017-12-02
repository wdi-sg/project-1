// objective of the game is to cut the wire according to the sequence shown
// eg. cut blue first then red then green or cut red first then blue then green
// sequence will be randomize
// player has to follow the wire of the color to know which button to press to stop the timer
// player only have one chance to press the correct button
// you cut until the third wire to see if you get it wrong
// if button press 3 times and combination fails, bomb will explode
// if bomb explode, player will get to retry. the sequence will change so player cannot random the button from preivous
// if player succeed, a popup will display moving on to next level, then player press ok and next round start
//
// starting page: game title, welcome page, description, created by who, new game Button
// when new game button press, aside of level and sequence appear
// description change to timer, welcome page change to puzzle, new game button change to 3 press Button
// popup appear say ready then click lets go
// timer will run
// if player click 3 button finish - check if the sequence is correct
// if true popup well done, button to level 2
// if false popup exploded, button to Retry
// button to level 2 the loop
var wireCoordinate = [
  {
    level1: {
      red: 1,
      green: 2,
      blue: 3,
      timing: 5
    }
  },
  {
    level2: {
      red: 1,
      green: 2,
      blue: 3,
      timing: 5
    }
  },
  {
    level3: {
      red: 2,
      green: 1,
      blue: 3,
      timing: 5
    }
  }
];
var sequenceInPlay = [];
var playerSequence = [];
var interval;
// var gameOver = false;


$('.btn-new-game').click(function() {
  $('img').attr('src', 'images/project1-01.jpg');
  $('.buttons').empty();
  for (var i = 1; i < 4; i++) {
    $('.buttons').append(`<button class="btn" data-id="${i}">Button ${i}</button>`);

  }

  var sequence = wireCoordinate[0].level1;
sequenceInPlay.push(sequence.red, sequence.green, sequence.blue);
console.log('In play ' + sequenceInPlay);
});

function checkForWin(inPlay, player) {
  for(var i = 0; i < 3; i++) {
    if (inPlay[i] != player[i]) {
        clearInterval(interval);
      console.log('Exploded');
      return false;
    }
  }
  clearInterval(interval);
  console.log('Win');
  return true;
}


$('.buttons').on('click', '.btn', function() {
  var dataId = $(this).attr('data-id');
  console.log('dataId is ' + dataId);
  playerSequence.push(dataId);
  console.log('Player Seq ' + playerSequence);
  if (sequenceInPlay.length == playerSequence.length) {
    console.log(checkForWin(sequenceInPlay, playerSequence));

  }
});


var timer = 30;
var minutes, seconds;
$('.timer').click(function() {

  interval = setInterval(function() {
    if (timer >= 60) {
    minutes = Math.floor(timer / 60);
    seconds = timer - minutes * 60;
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10 && seconds >= 0) {
      seconds = '0' + seconds;
    }

    $('.timer-countdown').text(`${minutes}:${seconds}`);
    timer--;

  } else if (timer < 60 && timer >= 0) {
    seconds = timer;

    if (seconds < 10 && seconds >= 0) {
      seconds = '0' + seconds;
    }
  $('.timer-countdown').text(`00:${seconds}`);
  timer--;
}  else {
  // gameOver = true;
    alert('Time is up');
    clearInterval(interval);
}
}, 1000);
});

// document.getElementById('timer').innerHTML =
//   03 + ":" + 00;
// startTimer();
//
// function startTimer() {
//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
//   //if(m<0){alert('timer completed')}
//
//   document.getElementById('timer').innerHTML =
//     m + ":" + s;
//   setTimeout(startTimer, 1000);
// }
//
// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
//   if (sec < 0) {sec = "59"};
//   return sec;
// }
//
//
//
// var seconds=60;
// var timer;
// function myFunction() {
//   if(seconds < 60) {
//     document.getElementById("timer").innerHTML = seconds;
//   }
//      if (seconds >0 ) {
//          seconds--;
//      } else {
//          clearInterval(timer);
//          alert("You type X WPM");
//      }
// }
// document.getElementById("textarea").onkeypress = function() {
//   if(!timer) {
//     timer = setInterval(function() {
//       myFunction();
//     }, 1000);
//   }
// }
// //When a key is pressed in the text area, update the timer using myFunction
//
//  //If seconds are equal or greater than 0, countdown until 1 minute has passed
// //Else, clear the timer and alert user of how many words they type per minute
//
// document.getElementById("timer").innerHTML="1:00";
