var colors = ["red", "blue", "green", "yellow"];
var level = [];
var keyedColors = [];
function getRandomIntInclusive() {
  min = Math.ceil(0);
  max = Math.floor(colors.length);
  return Math.floor(Math.random() * (colors.length));
}
function removeStartButton () {
  body.removeChild(startButton);
}
function generateRandomSequence () {
for (i = 0; i < colors.length; i++) {
  level.push(colors[getRandomIntInclusive()]); //The maximum is inclusive and the minimum is inclusive
}

// console.log(keys)
// //loop this level ARRAYS
// for() {
//   var targetedColor = document.querySelector('#' + level[i])
//
// }
  if (level[0] === 'red') {
    setTimeout(changeColorRed, 500);
  } else if (level[0] === 'green') {
    setTimeout(changeColorGreen, 500);
  } else if (level[0] === 'blue') {
    setTimeout(changeColorBlue, 500);
  } else if (level[0] === 'yellow') {
    setTimeout(changeColorYellow, 500);
  }

  if (level[1] === 'red') {
    setTimeout(changeColorRed, 1000);
  } else if (level[1] === 'green') {
    setTimeout(changeColorGreen, 1000);
  } else if (level[1] === 'blue') {
    setTimeout(changeColorBlue, 1000);
  } else if (level[1] === 'yellow') {
    setTimeout(changeColorYellow, 1000);
  }

  if (level[2] === 'red') {
    setTimeout(changeColorRed, 1500);
  } else if (level[2] === 'green') {
    setTimeout(changeColorGreen, 1500);
  } else if (level[2] === 'blue') {
    setTimeout(changeColorBlue, 1500);
  } else if (level[2] === 'yellow') {
    setTimeout(changeColorYellow, 1500);
  }

  if (level[3] === 'red') {
    setTimeout(changeColorRed, 2000);
  } else if (level[3] === 'green') {
    setTimeout(changeColorGreen, 2000);
  } else if (level[3] === 'blue') {
    setTimeout(changeColorBlue, 2000);
  } else if (level[3] === 'yellow') {
    setTimeout(changeColorYellow, 2000);
  }

  if (level[4] === 'red') {
    setTimeout(changeColorRed, 2500);
  } else if (level[4] === 'green') {
    setTimeout(changeColorGreen, 2500);
  } else if (level[4] === 'blue') {
    setTimeout(changeColorBlue, 2500);
  } else if (level[4] === 'yellow') {
    setTimeout(changeColorYellow, 2500);
  }

  if (level[5] === 'red') {
    setTimeout(changeColorRed, 3000);
  } else if (level[5] === 'green') {
    setTimeout(changeColorGreen, 3000);
  } else if (level[5] === 'blue') {
    setTimeout(changeColorBlue, 3000);
  } else if (level[5] === 'yellow') {
    setTimeout(changeColorYellow, 3000);
  }

  if (level[6] === 'red') {
    setTimeout(changeColorRed, 3500);
  } else if (level[6] === 'green') {
    setTimeout(changeColorGreen, 3500);
  } else if (level[6] === 'blue') {
    setTimeout(changeColorBlue, 3500);
  } else if (level[6] === 'yellow') {
    setTimeout(changeColorYellow, 3500);
  }

  if (level[6] === 'red') {
    setTimeout(changeColorRed, 4000);
  } else if (level[6] === 'green') {
    setTimeout(changeColorGreen, 4000);
  } else if (level[6] === 'blue') {
    setTimeout(changeColorBlue, 4000);
  } else if (level[6] === 'yellow') {
    setTimeout(changeColorYellow, 4000);
  }

  if (level[7] === 'red') {
    setTimeout(changeColorRed, 4500);
  } else if (level[7] === 'green') {
    setTimeout(changeColorGreen, 4500);
  } else if (level[7] === 'blue') {
    setTimeout(changeColorBlue, 4500);
  } else if (level[7] === 'yellow') {
    setTimeout(changeColorYellow, 4500);
  }
}

function checkEqual () {
  if (keyedColors.length !== level.length) {
    return false;
  }
  for (i = 0; i < keyedColors.length; i++) {
    if (keyedColors[i] !== level[i]) {
      return false;
    }
  }
  return true;
}

function checkNotEqual () {
for (i = 0; i < keyedColors.length; i++ ) {
  if (keyedColors[i] !== level[i]) {
    return true;
    }
  }
}

// console.log(keyedColors);
// console.log(level);
// console.log(checkEqual());
