var keyedColors = [];
document.addEventListener('DOMContentLoaded', init);
function init () {
  var level1 = ["red", "blue", "green", "yellow"];
  var colorClass = document.querySelector('.colors');
  var keys = document.querySelectorAll('.colors div');
  // console.log(keys[0]);
  // var edward = document.QuerySelector('#edward');
  // edward.play();
  var redSound = document.querySelector('#redSound');

  var aIcolors = [];
  // console.log(redKey)
  var startButton = document.querySelector('#button');
  startButton.addEventListener ('click', Level1);

  // if (checkEqual()) { //difference between checkEqual and checkEqual(), shouldnt if function run all the time?
  //   alert('Good  Job!');
  //   alert('Ready for next round?');
  //   console.log(this);
  //   level2();
  // }

  function Level1 () {
setTimeout(changeColorRed, 200);
setTimeout(changeColorBlue, 600);
setTimeout(changeColorGreen, 1000);
setTimeout(changeColorYellow, 1400);
  }


  keys.forEach( function (div) {
    var keyColor = div.id;
    document.addEventListener ('keydown', pushButton);
    // console.log(div.id);
  });
  function pushButton (e) {
    var keyCode = e.keyCode;
    if (keyCode === 82) {
      keyedColors.push("red");
      changeColorRed();
    } else if (keyCode === 84) {
      keyedColors.push("green");
      changeColorGreen();
    } else if (keyCode === 89) {
      keyedColors.push("blue");
      changeColorBlue();
    } else if (keyCode === 85) {
      keyedColors.push("yellow");
      changeColorYellow();
    }
    console.log(keyedColors);
    // console.log(level1);
    // if (checkEqual()) {
    //   alert('good job');
    //   var newColor = document.createElement('div');
    //   colorClass.appendChild(newColor);
    //   newColor.id = 'black';
    //   console.log(colorClass);
    //   console.log(newColor);
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
    if (keyedColors[0] === "red" && keyedColors[1] === "blue" && keyedColors[2] === "green" && keyedColors[3] === "yellow") {
      alert('Good  Job!');
      alert('Ready for next round?');
      level2();
    }

    if (keyedColors[0] === "red" && keyedColors[1] === "green" && keyedColors[2] === "blue" && keyedColors[3] === "yellow" && keyedColors[4] === "yellow") {
      alert('Good  Job!');
      alert('Ready for next round?');
      level3();
    }

    // for (i = 0; i < keyedColors.length; i++) {
    //   if (keyedColors[i] !== level1[i]) {
    //     alert('try again');
    //     keyedColors = [];
    //   }
    // }
  }
// function reutrnColorRed () {
//   redKey.style.backgroundColor = 'red';
// }



function reutrnColorGreen () {
  greenKey.style.backgroundColor = 'green';
}
function reutrnColorBlue () {
  blueKey.style.backgroundColor = 'blue';
}
function reutrnColorYellow () {
  yellowKey.style.backgroundColor = 'yellow';
}

function level2 () {
  keyedColors = [];
  level1 = ["red", "green", "blue", "yellow", "yellow"];
  console.log(keyedColors);
  console.log(level1);
  setTimeout(changeColorRed, 200);
  setTimeout(changeColorGreen, 600);
  setTimeout(changeColorBlue, 1000);
  setTimeout(changeColorYellow, 1400);
  setTimeout(changeColorYellow, 1800);

  // if (checkEqual) {
  //   alert('Good  Job!');
  //   alert('Ready for next round?');
  //   level3();
  // }
}

function level3 () {
  keyedColors = [];
  level1 = ["green", "yellow", "green", "yellow", "green", "red", "blue", "red", "blue", "green", "yellow",];
  setTimeout(changeColorGreen, 200);
  setTimeout(changeColorYellow, 600);
  setTimeout(changeColorGreen, 1000);
  setTimeout(changeColorYellow, 1200);
  setTimeout(changeColorGreen, 1400);
  setTimeout(changeColorRed, 1900);
  setTimeout(changeColorBlue, 2100);
  setTimeout(changeColorRed, 2300);
  setTimeout(changeColorBlue, 2500);
  setTimeout(changeColorGreen, 3000);
  setTimeout(changeColorYellow, 3200);

// for (i = level1.length; i > 0; i--) {
//   if (keyedColors[i] === level1[i]) {
//     alert('Good  Job!');
//     alert('Ready for next round?');
//     level3();
//   }
// }
}
// edward.play()
} // init function close
