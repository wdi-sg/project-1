// ==================== global variables ====================

var currentCoordinate = [6, 6];
var playerArray = [];
var combination = [];
var sequence = [];
var level = 1;
var game = false;
var interval, obstacles;
var gameSource = {
  level1: {
    timer: 10,
    spots: 2
  },
  level2: {
    timer: 10,
    spots: 2
  },
  level3: {
    timer: 10,
    spots: 2
  },
  level4: {
    timer: 10,
    spots: 3
  },
  level5: {
    timer: 10,
    spots: 3
  },
  level6: {
    timer: 10,
    spots: 4
  },
  level7: {
    timer: 10,
    spots: 4
  },
  level8: {
    timer: 10,
    spots: 5
  },
  level9: {
    timer: 10,
    spots: 5
  },
  level10: {
    timer: 15,
    spots: 6
  },
  level11: {
    timer: 15,
    spots: 6
  },
  level12: {
    timer: 15,
    spots: 7
  },
  level13: {
    timer: 15,
    spots: 7
  },
  level14: {
    timer: 15,
    spots: 8
  },
  level15: {
    timer: 15,
    spots: 8
  }
}
// the colors use
var btn = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Indigo', 'Violet', 'Cyan'];

// ==================== global variables ====================




// ==================== setting up of games ====================

// create grids for the game board
// looping to check for particular sequence to be created with block or road
function generateGrid() {
  var rowToAppend = '';
  var patternCol1 = [0, 1, 3, 4, 5, 7, 8, 9, 11, 12];
  var patternCol2 = [0, 4, 8, 12];
  var patternRow1 = [0, 4, 8, 12];
  var patternRow2 = [1, 3, 5, 7, 9, 11];
  var restartSpots = [
    [0, 2],
    [0, 6],
    [0, 10],
    [2, 0],
    [2, 12],
    [6, 0],
    [6, 12],
    [10, 0],
    [10, 12],
    [12, 2],
    [12, 6],
    [12, 10]
  ];

  for (var i = 0; i < 13; i++) {
    for (var j = 0; j < 13; j++) {

      if (patternRow1.includes(i) && patternCol1.includes(j)) {
        rowToAppend += `<div class="block" data-x="${i}" data-y="${j}"><i class="fa fa-user" aria-hidden="true"></i></div>`;
      } else if (patternRow2.includes(i) && patternCol2.includes(j)) {
        rowToAppend += `<div class="block" data-x="${i}" data-y="${j}"><i class="fa fa-user" aria-hidden="true"></i></div>`;
      } else {
        rowToAppend += `<div class="road" data-x="${i}" data-y="${j}"><i class="fa fa-user" aria-hidden="true"></i></div>`;
      }
    }
    rowToAppend += `<br>`;
  }

  // after generating, the element will append to the board
  $('.maze-board').append(rowToAppend);

  // generate the circle for restart
  for (var i = 0; i < restartSpots.length; i++) {
    $(`.road[data-x="${restartSpots[i][0]}"][data-y="${restartSpots[i][1]}"]`).html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
    $(`.road[data-x="${restartSpots[i][0]}"][data-y="${restartSpots[i][1]}"]`).addClass('quickRetry');
  }
}


// create random numbers for the game and push to sequence array
// loading the game level to set the length of the array
function generateSequence() {
  var randomSequence;
  var seqRandom = 0;
  var checker = [0, 0, 0, 0, 0, 0, 0, 0];
  sequence = [];
  playerArray = [];

  while (seqRandom < gameSource['level' + level].spots) {

    randomSequence = Math.floor(Math.random() * gameSource['level' + level].spots);

    switch (randomSequence) {
      case 0:
        if (checker[randomSequence] == 0) {
          sequence.push(randomSequence);
          seqRandom++;
          checker[randomSequence]++;
        }
        break;

      case 1:
        if (checker[randomSequence] == 0) {
          sequence.push(randomSequence);
          seqRandom++;
          checker[randomSequence]++;
        }
        break;

      case 2:
        if (checker[randomSequence] == 0) {
          sequence.push(randomSequence);
          seqRandom++;
          checker[randomSequence]++;
        }
        break;

      case 3:
        if (checker[randomSequence] == 0) {
          sequence.push(randomSequence);
          seqRandom++;
          checker[randomSequence]++;
        }
        break;

      case 4:
        if (checker[randomSequence] == 0) {
          sequence.push(randomSequence);
          seqRandom++;
          checker[randomSequence]++;
        }
        break;

      case 5:
        if (checker[randomSequence] == 0) {
          sequence.push(randomSequence);
          seqRandom++;
          checker[randomSequence]++;
        }
        break;

      case 6:
        if (checker[randomSequence] == 0) {
          sequence.push(randomSequence);
          seqRandom++;
          checker[randomSequence]++;
        }
        break;

      case 7:
        if (checker[randomSequence] == 0) {
          sequence.push(randomSequence);
          seqRandom++;
          checker[randomSequence]++;
        }
        break;
    }
  }
  console.log(sequence);
}


// generate random spot for the colors around the 8 grids
function generateSpots() {
  var randomNumber;
  var count = 0;
  var countCheck = [0, 0, 0, 0, 0, 0, 0, 0];
  combination = [];
  currentCoordinate = [6, 6];

  $('.road[data-x="6"][data-y="6"]').addClass('active');

  // get the number of spots base on the level
  while (count < gameSource['level' + level].spots) {

    // random for different section
    randomNumber = Math.floor(Math.random() * 8);
    switch (randomNumber) {
      case 0:
        while (countCheck[randomNumber] == 0) {
          $(`.road[data-x="2"][data-y="2"]`).addClass('btn' + btn[count]);
          $(`.road[data-x="2"][data-y="2"]`).attr('data-btn', count);
          combination.push([2, 2]);
          console.log(count + ' color is ' + btn[count]);
          count++;
          countCheck[randomNumber]++;
        }
        break;

      case 1:
        while (countCheck[randomNumber] == 0) {
          $(`.road[data-x="2"][data-y="6"]`).addClass('btn' + btn[count]);
          $(`.road[data-x="2"][data-y="6"]`).attr('data-btn', count);
          combination.push([2, 6]);
          console.log(count + ' color is ' + btn[count]);
          count++;
          countCheck[randomNumber]++;
        }
        break;

      case 2:
        while (countCheck[randomNumber] == 0) {
          $(`.road[data-x="2"][data-y="10"]`).addClass('btn' + btn[count]);
          $(`.road[data-x="2"][data-y="10"]`).attr('data-btn', count);
          combination.push([2, 10]);
          console.log(count + ' color is ' + btn[count]);
          count++;
          countCheck[randomNumber]++;
        }
        break;

      case 3:
        while (countCheck[randomNumber] == 0) {
          $(`.road[data-x="6"][data-y="2"]`).addClass('btn' + btn[count]);
          $(`.road[data-x="6"][data-y="2"]`).attr('data-btn', count);
          combination.push([6, 2]);
          console.log(count + ' color is ' + btn[count]);
          count++;
          countCheck[randomNumber]++;
        }
        break;

      case 4:
        while (countCheck[randomNumber] == 0) {
          $(`.road[data-x="6"][data-y="10"]`).addClass('btn' + btn[count]);
          $(`.road[data-x="6"][data-y="10"]`).attr('data-btn', count);
          combination.push([6, 10]);
          console.log(count + ' color is ' + btn[count]);
          count++;
          countCheck[randomNumber]++;
        }
        break;

      case 5:
        while (countCheck[randomNumber] == 0) {
          $(`.road[data-x="10"][data-y="2"]`).addClass('btn' + btn[count]);
          $(`.road[data-x="10"][data-y="2"]`).attr('data-btn', count);
          combination.push([10, 2]);
          console.log(count + ' color is ' + btn[count]);
          count++;
          countCheck[randomNumber]++;
        }
        break;

      case 6:
        while (countCheck[randomNumber] == 0) {
          $(`.road[data-x="10"][data-y="6"]`).addClass('btn' + btn[count]);
          $(`.road[data-x="10"][data-y="6"]`).attr('data-btn', count);
          combination.push([10, 6]);
          console.log(count + ' color is ' + btn[count]);
          count++;
          countCheck[randomNumber]++;
        }
        break;

      case 7:
        while (countCheck[randomNumber] == 0) {
          $(`.road[data-x="10"][data-y="10"]`).addClass('btn' + btn[count]);
          $(`.road[data-x="10"][data-y="10"]`).attr('data-btn', count);
          combination.push([10, 10]);
          console.log(count + ' color is ' + btn[count]);
          count++;
          countCheck[randomNumber]++;
        }
        break;
    }
  }
}


// base on generateSequence(), get the number to point to the color
function generateSequenceColor() {
  var colorNum;
  var colorOfSeq = '';
  var develop = [];

  for (var i = 0; i < sequence.length; i++) {
    colorNum = sequence[i];
    // set the class to btn followed by color from he array btn
    colorOfSeq += `<div class="btn${btn[colorNum]} colorSeq">${i + 1}</div>`;
    // for reference
    develop.push(btn[colorNum]);
  }

  console.log(develop.join(', '));
  $('.modal-content h1').text('Level ' + level);
  $('.sequence').append(colorOfSeq);
  $('.modal').show();
}

// ================== setting up of games ==================




// ===================== keys function ======================

// set coordinate for old and new (x,y).
// old path becomes previous
// new path becomes active
// check if on colour spot
function settingOfCoordinate(newX, newY, oldX, oldY) {
  currentCoordinate = [newX, newY];
  $(`.road[data-x="${oldX}"][data-y="${oldY}"]`).removeClass('active');
  $(`.road[data-x="${oldX}"][data-y="${oldY}"]`).addClass('previous');
  $(`.road[data-x="${newX}"][data-y="${newY}"]`).addClass('active');

  // combination from generated random section
  for (var i = 0; i < combination.length; i++) {
    var combinationX = combination[i][0];
    var combinationY = combination[i][1];
    var dataBtn = $(`.road[data-x="${newX}"][data-y="${newY}"]`).attr('data-btn');

    if (newX == combinationX && newY == combinationY && dataBtn) {
      playerArray.push(dataBtn);
      $('.collected-colors').append(`<div class="btn${btn[dataBtn]} collected"></div>`);
      $(`.road[data-x="${newX}"][data-y="${newY}"]`).removeAttr('data-btn');
      $(`.road[data-x="${newX}"][data-y="${newY}"]`).css('background', 'white');
    }
  }
}


// check if move can go left
// not into block or out of border
// check if player go to restart area
function leftKey() {
  // set for the borders of the left side
  if (currentCoordinate[1] > 0) {
    var oldX = currentCoordinate[0];
    var oldY = currentCoordinate[1];

    // check if the left side is not a block
    if (!$(`[data-x="${oldX}"][data-y="${oldY - 1}"]`).hasClass("block")) {
      var newX = currentCoordinate[0];
      var newY = currentCoordinate[1] - 1;
      settingOfCoordinate(newX, newY, oldX, oldY);
    }

    if ($(`[data-x="${oldX}"][data-y="${oldY - 1}"]`).hasClass('quickRetry')) {
      clearStage();
      $('.modal').show();
    }
  }
}


//check if move can go up
// not into block or out of border
// check if player go to restart area
function upKey() {
  if (currentCoordinate[0] > 0) {
    var oldX = currentCoordinate[0];
    var oldY = currentCoordinate[1];

    if (!$(`[data-x="${oldX - 1}"][data-y="${oldY}"]`).hasClass("block")) {
      var newX = currentCoordinate[0] - 1;
      var newY = currentCoordinate[1];
      settingOfCoordinate(newX, newY, oldX, oldY);
    }

    if ($(`[data-x="${oldX - 1}"][data-y="${oldY}"]`).hasClass('quickRetry')) {
      clearStage();
      $('.modal').show();
    }
  }
}


// check if move can go right
// not into block or out of border
// check if player go to restart area
function rightKey() {
  if (currentCoordinate[1] < 12) {
    var oldX = currentCoordinate[0];
    var oldY = currentCoordinate[1];

    if (!$(`[data-x="${oldX}"][data-y="${oldY + 1}"]`).hasClass("block")) {
      var newX = currentCoordinate[0];
      var newY = currentCoordinate[1] + 1;
      settingOfCoordinate(newX, newY, oldX, oldY);
    }

    if ($(`[data-x="${oldX}"][data-y="${oldY + 1}"]`).hasClass('quickRetry')) {
      clearStage();
      $('.modal').show();
    }
  }
}


// check if move can go down
// not into block or out of border
// check if player go to restart area
function downKey() {
  if (currentCoordinate[0] < 12) {
    var oldX = currentCoordinate[0];
    var oldY = currentCoordinate[1];

    if (!$(`[data-x="${oldX + 1}"][data-y="${oldY}"]`).hasClass("block")) {
      var newX = currentCoordinate[0] + 1;
      var newY = currentCoordinate[1];
      settingOfCoordinate(newX, newY, oldX, oldY);
    }

    if ($(`[data-x="${oldX + 1}"][data-y="${oldY}"]`).hasClass('quickRetry')) {
      clearStage();
      $('.modal').show();
    }
  }
}

// ===================== keys function ======================




// ================ restart and clear stage ================

// prepare game for retry or next level
function clearStage() {
  clearInterval(interval);
  clearInterval(obstacles);
  $('.modal2').hide();
  $('.sequence').empty();
  $('.maze-board').empty();
  $('.collected-colors').empty();
  generateGrid();
  generateSequence();
  generateSpots();
  generateSequenceColor();
  game = false;
  $('.timer-countdown').text('00:00');
}


// restart to starting page
function restart() {
  $('.modal2').hide();
  $('.sequence').empty();
  $('.maze-board').empty();
  $('.collected-colors').empty();
  $('.new-game').show();
  $('.instructions').show();
  $('.timer-countdown').hide();
  $('.currentSequence').hide();
  $('.img').show();
  $('.timer-countdown').text('00:00');
  game = false;
  level = 1;
}

// ================ restart and clear stage ================




// =============== interval for obstacles ===============

// generate obstacles block on random coordinate
function randomObs() {
  var obs = [
    [2, 4],
    [2, 8],
    [4, 2],
    [4, 6],
    [4, 10],
    [6, 4],
    [6, 8],
    [8, 2],
    [8, 6],
    [8, 10],
    [10, 4],
    [10, 8]
  ];
  var random = Math.floor(Math.random() * 12);

  $(`.road[data-x="${obs[random][0]}"][data-y="${obs[random][1]}"]`).removeClass('previous');
  $(`.road[data-x="${obs[random][0]}"][data-y="${obs[random][1]}"]`).addClass('block');
}

// =============== interval for obstacles ===============




// ================ winning condition ==================

// passing of true or false. check if array for game and player is the same
function checkForWin() {
  clearInterval(interval);
  clearInterval(obstacles);
  for (var i = 0; i < gameSource['level' + level].spots; i++) {
    console.log('player ' + playerArray[i]);
    console.log('sequence ' + sequence[i]);
    if (playerArray[i] != sequence[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}


// depend on checkForWin(), game retry, game next level or end game for modal
function winOrLose(winOrLose) {
  if (winOrLose) {
    if (level == 15) {
      $('.modal-content2 h1').html('Congratulations!!<br>Your focus has reached 100%!!');
      $('.next-or-retry').text('End Game');
      $('.next-or-retry').attr('data-id', 2);
    } else {
      $('.modal-content2 h1').html('Hooray!!<br>Well Done!!');
      $('.next-or-retry').text('Next Level');
      $('.next-or-retry').attr('data-id', 1);
    }
    $('.modal2').show();
    game = false;
  } else {
    $('.modal-content2 h1').text('Oh No!!');
    $('.next-or-retry').text('Try Again??');
    $('.modal2').show();
    game = false;
  }
}

// ================ winning condition ==================




// ============== on click buttons ==================

// create the game maze, show or hide certain things
$('.new-game').on('click', function() {
  generateGrid();
  generateSequence();
  generateSpots();
  generateSequenceColor();
  $('.new-game').hide();
  $('.instructions').hide();
  $('.timer-countdown').show();
  $('.currentSequence').show();
  $('.img').hide();
});


// base on winOrLose(), player will be clicking on next level, retry or game end
$('.next-or-retry').on('click', function() {
  var checkStatus = $('.next-or-retry').attr('data-id');
  if (checkStatus == 1) {
    console.log('Next Level');
    level++;
    clearStage();
  } else if (checkStatus == 2) {
    console.log('End Game');
    restart();
  } else {
    console.log('Retry');
    clearStage();
  }
  console.log('reset data-id');
  $('.next-or-retry').attr('data-id', 0);
});


// get timer from gameSource and set countdown timer
// base on level set the interval for obstacles
$('.lets-go-btn').on('click', function(e) {
  game = true;
  timer = gameSource['level' + level].timer;
  $('.modal').hide();

  // for level 4 to 9 obstacles
  if (level > 3 && level < 10) {
    obstacles = setInterval(function() {
      randomObs()
    }, 2500);
  }

  // for level 10 - 15 obstacles
  if (level > 9) {
    obstacles = setInterval(function() {
      randomObs()
    }, 3750);
  }

  // for countdown timer
  interval = setInterval(function() {
    if (timer < 60 && timer >= 0) {
      seconds = timer;
      if (seconds < 10 && seconds >= 0) {
        seconds = '0' + seconds;
      }
      $('.timer-countdown').text(`00:${seconds}`);
      timer--;

    } else {
      clearInterval(interval);
      clearInterval(obstacles);
      game = false;
      $('.modal-content2 h1').text('Oh No!!');
      $('.next-or-retry').text('Try Again??');
      $('.modal2').show();
    }
  }, 1000);
});


// sense the keydown of the arrow button
// if player and game array same length, call winOrLose()
$(document).on('keydown', function(e) {
  if (game) {
    var key = e.keyCode;
    switch (key) {
      case 37:
        // y - 1
        leftKey();
        // console.log('left key');
        break;
      case 38:
        // x -1
        upKey();
        // console.log('up key');
        break;
      case 39:
        // y + 1
        rightKey();
        // console.log('right key');
        break;
      case 40:
        // x + 1
        downKey();
        // console.log('down key');
        break;
      default:
        console.log('unknown');
    }
  }

  if (playerArray.length == sequence.length) {
    winOrLose(checkForWin());
  }
});

// ============== on click buttons ==================
