// var keyedColors = [];
document.addEventListener('DOMContentLoaded', init);
var startButton = document.querySelector('#button');
var body = document.querySelector('body');
var allButtons = document.querySelectorAll('button');
var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');
var h3 = document.querySelector('h3');
var levelNumber = 1;
function init () {
  var keys = document.querySelectorAll('.colors div');
  // var level1 = ["red", "blue", "green", "yellow"];
  var colorClass = document.querySelector('.colors');
  // console.log(keys[0]);
  // var edward = document.QuerySelector('#edward');
  // edward.play();
  var redSound = document.querySelector('#redSound');

  // var aIcolors = [];
  // console.log(redKey)
  var startButton = document.querySelector('#button');
  startButton.addEventListener ('click', function () {
    setTimeout(generateRandomSequence, 2000);
    removeStartButton();
    h2.innerHTML="Level";
    h3.innerHTML="1";
  });

  function returnTrue () {
    return true;
  }

  keys.forEach( function (div) {
    var keyColor = div.id;
    document.addEventListener ('keydown', pushButton);
    // console.log(div.id);
  });


  function pushButton (e) {
    var keyCode = e.keyCode;
    if(keyCode === 71 || keyCode === 74 || keyCode === 72 || keyCode === 75) {
    if (keyCode === 75) {
      changeColorRed();
      keyedColors.push("red");
    } else if (keyCode === 71) {
      changeColorGreen();
      keyedColors.push("green");
    } else if (keyCode === 72) {
      changeColorBlue();
      keyedColors.push("blue");
    } else if (keyCode === 74) {
      changeColorYellow();
      keyedColors.push("yellow");
    }
    // } else if (keyCode === 73) {
    //   keyedColors.push("black");
    //   changeColorBlack();
    // }
    console.log(keyedColors);
    console.log(level);
    // for(var i = 0; i < keyedColors.length; i++ )
    if (checkNotEqual()) {
      // alert('try again');
      h1.innerHTML = "GAME OVAH!";
      // generateRandomSequence();
      keyedColors = [];
      level = [];
      colors = ["red", "blue", "green", "yellow"];
      levelNumber = 1;
      h2.innerHTML = "";
      h3.innerHTML = "";
      //
      allButtons = document.querySelectorAll('button');
      console.log(allButtons.length);
      if (allButtons.length === 1) {
        h1.innerHTML = 'CMON, YOU HAVENT EVEN PRESSED THE START BUTTON YET';
        h2.innerHTML = '';
        h3.innerHTML = '';
      }
      if (allButtons.length === 0) {
      var restart = document.createElement('button');

      var restartText = document.createTextNode("Restart");
      restart.appendChild(restartText);
      document.body.appendChild(restart);
      restart.addEventListener('click', function () {
        generateRandomSequence();
        // removeStartButton();
        body.removeChild(restart);
        h1.innerHTML = "";
        h2.innerHTML = "Level";
        h3.innerHTML = "1";
      });}
return; //why did it work after writing this?
    }
    // console.log(level1);
    if (checkEqual()) {
      levelNumber += 1;
      var levelNumberString = levelNumber.toString();
      console.log(levelNumber);
      // alert('good job');
      h1.innerHTML = 'Good Job!';
      h2.innerHTML = 'Level';
      h3.innerHTML = levelNumberString;
      h1.style.fontcolor = "yellow";
      // var newColor = document.createElement('div');
      // colorClass.appendChild(newColor);
      // newColor.id = 'black';
      // console.log(colorClass);
      // console.log(newColor);
      colors.push(colors[getRandomIntInclusive()]);
      // console.log(colors);
      // console.log(level);
      level = [];
      keyedColors = [];
      setTimeout(generateRandomSequence, 2000);
      console.log(level.length);
    }
  }

  // if (checkEqual()) { //difference between checkEqual and checkEqual(), shouldnt if function run all the time?
  //   alert('Good  Job!');
  //   alert('Ready for next round?');
  //   console.log(this);
  //   level2();
  // }
//   function replayLevel1 () {
//     setTimeout(changeColorRed, 200);
//     setTimeout(changeColorBlue, 600);
//     setTimeout(changeColorGreen, 1000);
//     setTimeout(changeColorYellow, 1400);
//   }
//
//   function startLevel2 () {
//     level2();
//   }
//
//   function startLevel3 () {
//     level3();
//   }
//
//   function Level1 () {
// setTimeout(changeColorRed, 200);
// setTimeout(changeColorBlue, 600);
// setTimeout(changeColorGreen, 1000);
// setTimeout(changeColorYellow, 1400);
// var allButtons = document.querySelectorAll('button');
//
// console.log(allButtons);
// if (allButtons.length === 1) {
//   var playAgain = document.createElement('button');
//   var replayText = document.createTextNode("Replay Song");
//
//   playAgain.appendChild(replayText);
//   document.body.appendChild(playAgain);
//   playAgain.addEventListener('click', replayLevel1);
// }
// function removeStartButton () {
//   if (allButtons.length === 1) {
//     body.removeChild(startButton);
//   }
// }
// removeStartButton();
//
// }


    // console.log(checkEqual());


    // if (checkEqual()) { //difference between checkEqual and checkEqual(), shouldnt if function run all the time?
    //   alert('Good  Job!');
    //   alert('Ready for next round?');
    // } WHY IS THIS TRUE EVEN WHEN THE ORDER IN THE ARRAYS ARE NOT THE SAME BUT THE FIRST INDEX IS THE SAME?!!!
    // console.log(keyedColors === level1); //WHY ISNT THIS TRUE? HAHAHA learning point 1
    // if (keyedColors[0] !== level1[0] || keyedColors[1] !== level1[1] || keyedColors[2] !== level1[2] || keyedColors[3] !== level1[3]) {
    //   alert('Please try again');
    //   keyedColors = [];
    // }
    // if (keyedColors[0] === "red" && keyedColors[1] === "blue" && keyedColors[2] === "green" && keyedColors[3] === "yellow") {
    //   alert('Good  Job!');
    //   alert('Ready for next round?');
    //   level2();
    // }

    // if (keyedColors[0] === "red" && keyedColors[1] === "green" && keyedColors[2] === "blue" && keyedColors[3] === "yellow" && keyedColors[4] === "yellow") {
    //   alert('Good  Job!');
    //   alert('Ready for next round?');
    //   level3();
    // }

    // if (keyedColors[0] === "green" && keyedColors[1] === "yellow" && keyedColors[2] === "green" && keyedColors[3] === "yellow" && keyedColors[4] === "green" && keyedColors[5] === "red" && keyedColors[6] === "blue" && keyedColors[7] === "red" && keyedColors[8] === "blue" && keyedColors[9] === "green" && keyedColors[10] === "yellow") {
    //   alert('Good  Job!');
    //   alert('Ready for next round?');
    //   level3();
    // }
    //
    // if (keyedColors[0] === "red" && keyedColors[1] === "green" && keyedColors[2] === "blue" && keyedColors[3] === "green" && keyedColors[4] === "blue" && keyedColors[5] === "green" && keyedColors[6] === "blue" && keyedColors[7] === "green" && keyedColors[8] === "blue" && keyedColors[9] === "red" && keyedColors[10] === "blue" && keyedColors[11] === "red" && keyedColors[12] === "blue" && keyedColors[13] === "red" && keyedColors[14] === "blue" && keyedColors[15] === "red" && keyedColors[16] === "yellow") {
    //   alert('CONGRATS!');
    // }
    }
    // console.log(level1)
  // }
// function reutrnColorRed () {
//   redKey.style.backgroundColor = 'red';
// }



// function reutrnColorGreen () {
//   greenKey.style.backgroundColor = 'green';
// }
// function reutrnColorBlue () {
//   blueKey.style.backgroundColor = 'blue';
// }
// function reutrnColorYellow () {
//   yellowKey.style.backgroundColor = 'yellow';
// }

// function level2 () {
//   keyedColors = [];
//   level1 = ["red", "green", "blue", "yellow", "yellow"];
//   console.log(keyedColors);
//   console.log(level1);
//   setTimeout(changeColorRed, 200);
//   setTimeout(changeColorGreen, 600);
//   setTimeout(changeColorBlue, 1000);
//   setTimeout(changeColorYellow, 1400);
//   setTimeout(changeColorYellow, 1800);

  // if (checkEqual) {
  //   alert('Good  Job!');
  //   alert('Ready for next round?');
  //   level3();
  // }
// }

// function level2 () {
//   keyedColors = [];
//   level1 = ["green", "yellow", "green", "yellow", "green", "red", "blue", "red", "blue", "green", "yellow",];
//   setTimeout(changeColorGreen, 200);
//   setTimeout(changeColorYellow, 600);
//   setTimeout(changeColorGreen, 1000);
//   setTimeout(changeColorYellow, 1200);
//   setTimeout(changeColorGreen, 1400);
//   setTimeout(changeColorRed, 1900);
//   setTimeout(changeColorBlue, 2100);
//   setTimeout(changeColorRed, 2300);
//   setTimeout(changeColorBlue, 2500);
//   setTimeout(changeColorGreen, 3000);
//   setTimeout(changeColorYellow, 3200);
//   var playAgain = document.querySelector('button');
//
//     playAgain.addEventListener('click', startLevel2);

// for (i = level1.length; i > 0; i--) {
//   if (keyedColors[i] === level1[i]) {
//     alert('Good  Job!');
//     alert('Ready for next round?');
//     level3();
//   }
// }
// }

// function level3 () {
//   function play() {
//     edward.play();
//   keyedColors = [];
//   level1 = ["red", "green", "blue", "green", "blue", "green", "blue", "green", "blue", "red", "blue", "red", "blue", "red", "blue", "red", "yellow"];
//   setTimeout(changeColorRed, 0);
//   setTimeout(changeColorGreen, 450);
//   setTimeout(changeColorBlue, 600);
//   setTimeout(changeColorGreen, 950);
//   setTimeout(changeColorBlue, 1250);
//   setTimeout(changeColorGreen, 1500);
//   setTimeout(changeColorBlue, 1600);
//   setTimeout(changeColorGreen, 1900);
//   setTimeout(changeColorBlue, 2100);
//   setTimeout(changeColorRed, 2400);
//   setTimeout(changeColorBlue, 2650);
//   setTimeout(changeColorRed, 2900);
//   setTimeout(changeColorBlue, 3150);
//   setTimeout(changeColorRed, 3400);
//   setTimeout(changeColorBlue, 3500);
//   setTimeout(changeColorRed, 3700);
//   setTimeout(changeColorYellow, 3900);
//
//   // console.log(playAgain);
//
// // var allButtons = document.querySelectorAll('button');
// // console.log(allButtons);
// // if (allButtons.length === 1) {
// //   var playAgain = document.createElement('button');
// //   var replayText = document.createTextNode("Replay Sequence");
// //   // playAgain.value = "Replay Song";
// //   playAgain.appendChild(replayText);
// //   document.body.appendChild(playAgain);
// //   playAgain.addEventListener('click', level4);
// // }
// var playAgain = document.querySelector('button');
//
//   playAgain.addEventListener('click', startLevel3);
//
//   // var replaySong = document.createTextNode("Replay Song");
//   // replaySong.appendChild(playAgain);
// }
//
// play();
// }

// level4()
} // init function close
