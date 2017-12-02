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
var minutes, seconds, sequenceInPlay, playerSequence, interval;
var timer;
var level = 1;
var gameSource = {
  images: {
    red: 'images/project1-triangle-red.png',
    green: 'images/project1-triangle-green.png',
    blue: 'images/project1-triangle-blue.png'
  },
  seqCombination: [
    ['red', 'green', 'blue'],
    ['red', 'blue', 'green'],
    ['green', 'red', 'blue'],
    ['green', 'blue', 'red'],
    ['blue', 'red', 'green'],
    ['blue', 'green', 'red'],
  ],
  level1: {
    red: 1,
    green: 2,
    blue: 3,
    timing: 5
  },
  level2: {
    red: 1,
    green: 2,
    blue: 3,
    timing: 5
  },
  level3: {
    red: 2,
    green: 1,
    blue: 3,
    timing: 5
  },
  level4: {
    red: 3,
    green: 1,
    blue: 2,
    timing: 10
  },
  level5: {
    red: 3,
    green: 1,
    blue: 2,
    timing: 10
  },
  level6: {
    red: 2,
    green: 1,
    blue: 3,
    timing: 10
  },
  level7: {
    red: 3,
    green: 1,
    blue: 2,
    timing: 15
  },
  level8: {
    red: 3,
    green: 1,
    blue: 2,
    timing: 15
  },
  level9: {
    red: 2,
    green: 3,
    blue: 1,
    timing: 15
  },
  level10: {
    red: 2,
    green: 1,
    blue: 3,
    timing: 20
  },
  level11: {
    red: 3,
    green: 2,
    blue: 1,
    timing: 20
  },
  level12: {
    red: 1,
    green: 2,
    blue: 3,
    timing: 20
  },
  level13: {
    red: 2,
    green: 1,
    blue: 3,
    timing: 30
  },
  level14: {
    red: 1,
    green: 3,
    blue: 2,
    timing: 30
  },
  level15: {
    red: 2,
    green: 1,
    blue: 3,
    timing: 30
  },
  level16: {
    red: 3,
    green: 2,
    blue: 1,
    timing: 40
  },
  level17: {
    red: 2,
    green: 3,
    blue: 1,
    timing: 40
  },
  level18: {
    red: 1,
    green: 3,
    blue: 2,
    timing: 40
  },
  level19: {
    red: 3,
    green: 2,
    blue: 1,
    timing: 50
  },
  level20: {
    red: 3,
    green: 1,
    blue: 2,
    timing: 50
  },
  level21: {
    red: 2,
    green: 3,
    blue: 1,
    timing: 50
  },
  level22: {
    red: 3,
    green: 2,
    blue: 1,
    timing: 60
  },
  level23: {
    red: 2,
    green: 1,
    blue: 3,
    timing: 60
  },
  level24: {
    red: 3,
    green: 1,
    blue: 2,
    timing: 60
  },
  level25: {
    red: 1,
    green: 2,
    blue: 3,
    timing: 60
  },
};


function switchPlaySequence() {
  var random = Math.floor(Math.random * 6);


}


function restart() {
  sequenceInPlay = [];
  playerSequence = [];
  level = 1;
  $('.timer-countdown').text('Focus your way through the lines and press the button according to the sequence');
  $('.timer-countdown').css('font-size', '1rem');
  $('.buttons').empty();
  $('.buttons').append('<button class="btn-new-game">New Game</button>');
  $('img').attr('src', 'images/project1-26.jpg');
}




function randomInPlay() {
  sequenceInPlay = [];
  playerSequence = [];
  timer = gameSource['level' + level].timing;
  var random = Math.floor(Math.random() * 6);
  console.log(random);
  var combination = gameSource.seqCombination[random];
  console.log(combination);
  var sequence = gameSource['level' + level];
  var src;

  $('.btn').text('Open');
  $('.triangle-seq').empty();
  $('.btn').css('background-color', 'grey');
  $('.timer-countdown').text('00:00');
  $('img').attr('src', 'images/project1-' + level + '.jpg');
  $('.modal-content h1').text('Level ' + level);

  for (var i of combination) {
    sequenceInPlay.push(sequence[i]);
  }
  console.log('In play ' + sequenceInPlay);

  for (var i of combination) {
    src = gameSource.images[i];
    console.log(src);
    $('.triangle-seq').append(`<img class="triangle" src="${src}">`);
  }

  $('.modal').show();
}




$('.nextOrRetry').click(function() {
  var checkStatus = $('.nextOrRetry').attr('data-id');
  if (checkStatus == 1) {
    // next level
    console.log('Next Level');
    level++;
    $('.modal2').hide();
    randomInPlay();
  } else if (checkStatus == 2) {
    console.log('End Game');
    $('.modal2').hide();
    restart();
  } else {
    // retry
    console.log('Retry');
    $('.modal2').hide();
    randomInPlay();
  }
  console.log('reset data-id');
  $('.nextOrRetry').attr('data-id', 0);
});





// click new game - img change, random sequence, show modal, remove new game button, show timer, show level and sequence to play

$('.buttons').on('click', '.btn-new-game', function() {
  $('.timer-countdown').text('00:00');
  $('.timer-countdown').css('font-size', '2rem');
  $('.buttons').empty();
  for (var i = 1; i < 4; i++) {
    $('.buttons').append(`<button class="btn" data-id="${i}">Open</button>`);
  }
  randomInPlay();
});




// hide for lets go
// $('.close').click(function() {
//   $('.modal').hide();
// });




// check to see if they are all matching
function checkForWin(inPlay, player) {
  for (var i = 0; i < 3; i++) {
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
  $(this).css('background-color', '#5D6D7E');
  var dataId = $(this).attr('data-id');
  $(this).text('Lock');
  console.log('dataId is ' + dataId);
  playerSequence.push(dataId);
  console.log('Player Seq ' + playerSequence);
  if (sequenceInPlay.length == playerSequence.length) {
    var winOrLose = checkForWin(sequenceInPlay, playerSequence);

    if (winOrLose) {

        $('.modal-content2 h1').html('Hooray!!<br>Well Done!!');
      $('.nextOrRetry').text('Next Level');
      $('.nextOrRetry').attr('data-id', 1);
      if (level == 25){
        $('.modal-content2 h1').html('Congratulations!!<br>Thank you for playing!!');
      $('.nextOrRetry').text('End Game');
      $('.nextOrRetry').attr('data-id', 2);
      }
      $('.modal2').show();
    } else {
      $('.modal-content2 h1').text('Oh No!!');
      $('.nextOrRetry').text('Try Again??');
      $('.modal2').show();
    }
  }
});



$('.timer').click(function() {
$('.modal').hide();
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
    } else {
      // gameOver = true;
      // alert('Time is up');
      clearInterval(interval);
      $('.modal-content2 h1').text('Oh No!!');
      $('.nextOrRetry').text('Try Again??');
      $('.modal2').show();
    }
  }, 1000);
});
