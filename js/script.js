// objective of the game is to follow the sequence of the colour triangle and press the corresponding button according to the sequence
// eg. sequence is blue triange, red triange and green triange. go through the line of the blue triange and press the corresponding button below the black arrow. do the same for the red triangle and lastly the green triangle

// sequence will be randomize
// player has to follow the line of the triangle to know which button to press at the end
// if 3 buttons are pressed and combination fails, level fail
// if level fail, player will get to retry the current level and the sequence will change
// if player succeed, a popup will display telling player to move on to next level
// game play 25 levels


// starting page: game title, instructions, welcome page, created by who, new game button
// when new game button press, popup appear show level and sequence of triangle
// description change to timer, welcome page change to puzzle, new game button hide and 3 "open" button show
// once button press on popup, timer will run and popup disappear
// player solve the puzzle and click on the corresponding button
// once 3 button registered - check if the sequence is correct
// if correct, popup appear with button to next level
// button to next level will load the next game
// if wrong, popup appear with button to retry
// button to retry will reload the same level
// after player finish game, game will restart

var minutes, seconds, sequenceInPlay, playerSequence, interval, timer;
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
    timing: 10
  },
  level2: {
    red: 1,
    green: 2,
    blue: 3,
    timing: 10
  },
  level3: {
    red: 2,
    green: 1,
    blue: 3,
    timing: 10
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


// when game finish, the restart button will be fired
// reset variables and set back to game default
function restart() {
  sequenceInPlay = [];
  playerSequence = [];
  level = 1;

  $('.timer-countdown').hide();
  $('.instructions').show();
  $('.btn-new-game').show();
  $('.created').show();
  $('.btn').hide();
  $('img').attr('src', 'images/project1-26.jpg');
}


// main for playing
// get game timing, random number, get a random combination, set the sequence base on the combination and update the triangle image base on the combination, update the modal
function randomInPlay() {
  var random, combination, sequence, src;
  var triangleImg = '';
  sequenceInPlay = [];
  playerSequence = [];
  timer = gameSource['level' + level].timing;

  random = Math.floor(Math.random() * 6);
  combination = gameSource.seqCombination[random];
  sequence = gameSource['level' + level];
  console.log(random);
  console.log(combination);

  $('.btn').text('Open');
  $('.btn').removeClass('changeBg');
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
    triangleImg += `<img class="triangle" src="${src}">`;
  }
  $('.triangle-seq').append(triangleImg);
  triangleImg = '';
  $('.modal').show();
}


// check to see if they are all matching and also clear the set interval
// base on condition return true or false
function checkForWin(inPlay, player) {
  for (var i = 0; i < 3; i++) {
    if (inPlay[i] != player[i]) {
      clearInterval(interval);
      console.log('Fail');
      return false;
    }
  }
  clearInterval(interval);
  console.log('Win');
  return true;
}


// either you move on to the next level, retry the current level or game end
$('.next-or-retry').on('click', function() {
  var checkStatus = $('.next-or-retry').attr('data-id');
  if (checkStatus == 1) {
    console.log('Next Level');
    level++;
    $('.modal2').hide();
    randomInPlay();
  } else if (checkStatus == 2) {
    console.log('End Game');
    $('.modal2').hide();
    restart();
  } else {
    console.log('Retry');
    $('.modal2').hide();
    randomInPlay();
  }
  console.log('reset data-id');
  $('.next-or-retry').attr('data-id', 0);
});


// click new game button - image change, random sequence, show modal, remove new game button, show timer, show level and sequence to play
$('.btn-new-game').on('click', function() {
  $('.instructions').hide();
  $('.timer-countdown').show();
  $('.btn-new-game').hide();
  $('.created-by').hide();
  $('.btn').show();
  randomInPlay();
});


// adding click event to the 3 button to register the player input
// check when all three button are press in sequence
// base on checkForWin return set the attribute to fire which modal - to retry, to next level or end game
$('.btn').on('click', function() {

  var dataId = $(this).attr('data-id');
  $(this).css('background-color', '#5D6D7E');
  $(this).text('Lock');
  if (playerSequence.indexOf(dataId) == -1) {
    console.log(dataId + ' not inside array');
    playerSequence.push(dataId);
  }

  console.log('dataId is ' + dataId);
  console.log('Player Seq ' + playerSequence);
  if (sequenceInPlay.length == playerSequence.length) {
    var winOrLose = checkForWin(sequenceInPlay, playerSequence);

    if (winOrLose) {
      if (level == 25) {
        $('.modal-content2 h1').html('Congratulations!!<br>Thank you for playing!!');
        $('.next-or-retry').text('End Game');
        $('.next-or-retry').attr('data-id', 2);
      } else {
        $('.modal-content2 h1').html('Hooray!!<br>Well Done!!');
        $('.next-or-retry').text('Next Level');
        $('.next-or-retry').attr('data-id', 1);
      }
      $('.modal2').show();
    } else {
      $('.modal-content2 h1').text('Oh No!!');
      $('.next-or-retry').text('Try Again??');
      $('.modal2').show();
    }
  }
});


// timer feature bind to the Let's Go button
// countdown timer start till the time runs out then call for modal
$('.lets-go-btn').on('click', function() {
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
      clearInterval(interval);
      $('.modal-content2 h1').text('Oh No!!');
      $('.next-or-retry').text('Try Again??');
      $('.modal2').show();
    }
  }, 1000);
});
