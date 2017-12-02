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

var timer = 30;
var minutes, seconds;
var sequenceInPlay = [];
var playerSequence = [];
var interval;
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



function randomInPlay() {
  var sequence = wireCoordinate[0].level1;
sequenceInPlay.push(sequence.red, sequence.green, sequence.blue);
console.log('In play ' + sequenceInPlay);
}


// click new game - img change, random sequence, show modal, remove new game button, show timer, show level and sequence to play
$('.btn-new-game').click(function() {
  $('img').attr('src', 'images/project1-01.jpg');
  $('.timer-countdown').text('00:00');
  $('.buttons').empty();
  for (var i = 1; i < 4; i++) {
    $('.buttons').append(`<button class="btn" data-id="${i}">Button ${i}</button>`);
  }
$('.modal').show();
  randomInPlay();
});


// hide for lets go
$('.close').click(function() {
  $('.modal').hide();
});

// check to see if they are all matching
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

// adding on click event to the newly created 3 button
// check when all three button are press in sequence
$('.buttons').on('click', '.btn', function() {

  var dataId = $(this).attr('data-id');
  console.log('dataId is ' + dataId);
  playerSequence.push(dataId);
  console.log('Player Seq ' + playerSequence);
  if (sequenceInPlay.length == playerSequence.length) {
    var winOrLose = checkForWin(sequenceInPlay, playerSequence);
    console.log(checkForWin(sequenceInPlay, playerSequence));

if (winOrLose) {
  $('.modal-content2 h1').text('Hooray!!');
    $('.nextOrRetry').text('Next Level');
  $('.modal2').show();
} else {
  $('.modal-content2 h1').text('Exploded!!');
    $('.nextOrRetry').text('Retry?');
  $('.modal2').show();
}
  }
});



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
    // alert('Time is up');
    clearInterval(interval);
    $('.modal-content2 h1').text('Exploded!!');
      $('.nextOrRetry').text('Retry?');
    $('.modal2').show();
}
}, 1000);
});
