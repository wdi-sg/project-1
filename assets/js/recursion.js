var colors = ["red", "blue", "green", "yellow"];
var level1 = [];
// var keyedColors = [];
function getRandomIntInclusive() {
  min = Math.ceil(0);
  max = Math.floor(level1.length);
  return Math.floor(Math.random() * (level1.length)); //The maximum is inclusive and the minimum is inclusive
}

function generateRandomSequence () {
for (i = 0; i < colors.length; i++) {
  level1.push(colors[getRandomIntInclusive()]);
}
  if (level1[0] === 'red') {
    setTimeout(changeColorRed, 0);
  } else if (level1[0] === 'green') {
    setTimeout(changeColorGreen, 0);
  } else if (level1[0] === 'blue') {
    setTimeout(changeColorBlue, 0);
  } else if (level1[0] === 'yellow') {
    setTimeout(changeColorYellow, 0);
  }

  if (level1[1] === 'red') {
    setTimeout(changeColorRed, 500);
  } else if (level1[1] === 'green') {
    setTimeout(changeColorGreen, 500);
  } else if (level1[1] === 'blue') {
    setTimeout(changeColorBlue, 500);
  } else if (level1[1] === 'yellow') {
    setTimeout(changeColorYellow, 500);
  }

  if (level1[2] === 'red') {
    setTimeout(changeColorRed, 1000);
  } else if (level1[2] === 'green') {
    setTimeout(changeColorGreen, 1000);
  } else if (level1[2] === 'blue') {
    setTimeout(changeColorBlue, 1000);
  } else if (level1[2] === 'yellow') {
    setTimeout(changeColorYellow, 1000);
  }

  if (level1[3] === 'red') {
    setTimeout(changeColorRed, 1500);
  } else if (level1[3] === 'green') {
    setTimeout(changeColorGreen, 1500);
  } else if (level1[3] === 'blue') {
    setTimeout(changeColorBlue, 1500);
  } else if (level1[3] === 'yellow') {
    setTimeout(changeColorYellow, 1500);
  }
}

function checkEqual () {
  if (keyedColors.length !== level1.length) {
    return false;
  }
  for (i = 0; i < keyedColors.length; i++) {
    if (keyedColors[i] !== level1[i]) {
      return false;
    }
    return true;
  }
}
function checkNotEqual () {
for (i = 0; i < keyedColors.length - 1; i++ ) {
  if (keyedColors[i] !== level1[i]) {
    return true;
    }
  }
}



generateRandomSequence();
console.log(keyedColors);
console.log(level1);
console.log(checkEqual());
