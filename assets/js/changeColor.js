var redKey = document.querySelector('#red');
var greenKey = document.querySelector('#green');
var blueKey = document.querySelector('#blue');
var yellowKey = document.querySelector('#yellow');


function changeColorRed () {
  redKey.style.backgroundColor = 'salmon';
  redSound.play();
  setTimeout(reutrnColorRed, 100);
}

function changeColorGreen () {
  greenKey.style.backgroundColor = 'lightgreen';
  redSound.play();
  setTimeout(reutrnColorGreen, 100);
}

function changeColorBlue () {
  blueKey.style.backgroundColor = 'lightblue';
  redSound.play();
  setTimeout(reutrnColorBlue, 100);
}

function changeColorYellow () {
  yellowKey.style.backgroundColor = 'khaki';
  redSound.play();
  setTimeout(reutrnColorYellow, 100);
}

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
