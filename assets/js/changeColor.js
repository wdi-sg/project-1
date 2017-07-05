var redKey = document.querySelector('#red');
var greenKey = document.querySelector('#green');
var blueKey = document.querySelector('#blue');
var yellowKey = document.querySelector('#yellow');


// function changeColor(color) {
//   color.style.backgroundColor = 'white'
//   color.play()
// }

function changeColorRed () {
  redKey.style.backgroundColor = 'salmon';
  // redSound.play();
  setTimeout(reutrnColorRed, 400);
}

function changeColorGreen () {
  greenKey.style.backgroundColor = 'lightgreen';
  // redSound.play();
  setTimeout(reutrnColorGreen, 400);
}

function changeColorBlue () {
  blueKey.style.backgroundColor = 'lightblue';
  // redSound.play();
  setTimeout(reutrnColorBlue, 400);
}

function changeColorYellow () {
  yellowKey.style.backgroundColor = 'khaki';
  // redSound.play();
  setTimeout(reutrnColorYellow, 400);
}

// function changeColorBlack () {
//   var blackKey = document.querySelector('#black');
//   blackKey.style.backgroundColor = 'white';
//   // redSound.play();
//   setTimeout(reutrnColorBlack, 100);
// }

function reutrnColorRed () {
  redKey.style.backgroundColor = 'red';
}

function reutrnColorGreen () {
  greenKey.style.backgroundColor = 'green';
}

function reutrnColorBlue () {
  blueKey.style.backgroundColor = 'blue';
}

function reutrnColorYellow () {
  yellowKey.style.backgroundColor = 'yellow';
}

function reutrnColorBlack () {
  var blackKey = document.querySelector('#black');
  blackKey.style.backgroundColor = 'black';
}
