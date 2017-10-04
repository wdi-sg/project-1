// start the game
function start() {
  init()
  $('#start').css('visibility', 'hidden')
}

function init() {

// create objects here
var player = new Object()
player.element = 'player'
player.x = 250
player.y = 450
player.w = 38
player.h = 38
$('#player').css('visibility', 'visible')

var laser = new Object()
laser.element = 'laser'
laser.x = 0
laser.y = 0
laser.w = 12
laser.h = 15

// create an object for the controls
var controller = new Object()

//create an enemy Array
var enemies = new Array()


// keycode of controller
var leftKey = 37
var upKey = 38
var rightKey = 39
var downKey = 40
var spaceKey = 32

// player movement speed
var playerMovement = 10


// set up our control keys
function pressKey(keyCode, isPressed) {
  // console.log(keyCode)
  if (keyCode == leftKey) {
    controller.left = isPressed
  }
  if (keyCode == upKey) {
    controller.up = isPressed
  }
  if (keyCode == rightKey) {
    controller.right = isPressed
  }
  if (keyCode == downKey) {
    controller.down = isPressed
  }
  if (keyCode == spaceKey) {
    controller.space = isPressed
  }
}

document.onkeydown = function(event) {
  pressKey(event.keyCode, true)
}

document.onkeyup =  function(event) {
  pressKey(event.keyCode, false)
}

// input controls to player
function handleControls() {

  if (controller.left) {
    player.x -= playerMovement
  }
  if (controller.up) {
    player.y -= playerMovement
  }
  if (controller.right) {
    player.x += playerMovement
  }
  if (controller.down) {
    player.y += playerMovement
  }
  if (controller.space && laser.y <= 0) {
    laser.x = player.x + 15
    laser.y = player.y - laser.h
    $('#laser').css('visibility', 'visible')
    laserSound()
  }
// it ensures that my character will not go out of the game map
  ensureBounds(player)
}

// set the position of our objects
function setPosition(sprite) {
  var e = document.getElementById(sprite.element)
  e.style.left = sprite.x + 'px'
  e.style.top = sprite.y + 'px'
}

var score = 0

var highscore = localStorage.getItem("highscore")

// to reset highscore
// localStorage.setItem("highscore", score);

// load the sprites to the game
function showSprites() {
  setPosition(player)
  setPosition(laser)

  for (var i = 0; i < enemies.length; i++) {
    setPosition(enemies[i])
  }

  var scoreElement = document.getElementById('score');
  scoreElement.innerHTML = 'SCORE: ' + score;

  // create a highscore function to keep track player highest score
  var highScoreElement = document.getElementById('highscore');
  highScoreElement.innerHTML = 'HIGH SCORE: ' + localStorage.getItem("highscore");

    if (score > localStorage.getItem("highscore")) {
     localStorage.setItem("highscore", score);
    }
}

// to update the position of object that player cannot control
function updatePosition() {
  // update position of enemy
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].y += getRandom(8)
    enemies[i].x += getRandom(7) - 3
    ensureBounds(enemies[i])
  }
  // adjust for the rate of speed of laser
  laser.y -= 15
}

// to keep the objects inside of the game map
function ensureBounds(sprite) {
  if (sprite.x < 5) {
    sprite.x = 5
  }
  if (sprite.y < 5) {
    sprite.y = 5
  }
  if (sprite.x + sprite.w > 495) {
    sprite.x = 495 - sprite.w
  }
  if (sprite.y + sprite.h > 495) {
    sprite.y = 495 - sprite.h
  }
}

var iterations = 0
// add enemy to the game map
function addEnemy() {
   // how to add more enemy when time passes by
   var interval = 50
  for (var i = 0; i < enemies.length; i++) {
   if (iterations > 2000) {
     interval = 5
     enemies[i].y += getRandom(50)
     enemies[i].x += getRandom(7) - 3
   } else if (iterations > 1500) {
     interval = 5
     enemies[i].y += getRandom(25)
     enemies[i].x += getRandom(7) - 3
   } else if (iterations > 1000) {
     interval = 15
     enemies[i].y += getRandom(18)
     enemies[i].x += getRandom(7) - 3
   } else if (iterations > 500) {
     interval = 35
     enemies[i].y += getRandom(12)
     enemies[i].x += getRandom(7) - 3
   }
  //  console.log(iterations)
}
  // this will create the random enemies that will be placed in an array
   if (getRandom(interval) == 0) {
     var elementName = 'enemy' + getRandom(100000000)
     var enemy = new Object()
     enemy.element = elementName
     enemy.x = getRandom(480)
     enemy.y = 0
     enemy.w = 40
     enemy.h = 40

     var createEnemy = document.createElement('div')
     createEnemy.id = enemy.element
     createEnemy.className = 'enemy'
     document.getElementById('background').appendChild(createEnemy)
     //  $("#background").append(createEnemy)
     enemies[enemies.length] = enemy
   }
 }


// get random number for enemies function
function getRandom(max) {
 return parseInt(Math.random() * max)
}


// now to check for collision when element intersect with each other
function intersect(a,b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
}

// check for collision function
function checkCollision() {
    // laser collide with enemies
    for (var i = 0; i < enemies.length; i++) {
      if (intersect(laser, enemies[i])) {
        var element = document.getElementById(enemies[i].element);
        element.style.visibility = 'hidden';
        element.parentNode.removeChild(element);
        enemies.splice(i, 1);
        i--;
        laser.y = -laser.h // this ensures that it also gets deleted after hitting an enemy
        $('#laser').css('visibility', 'hidden')
        collideSound()
        score += 100

        // hero collide with enemies
      } else if (intersect(player, enemies[i])) {
        collideSound()
        gameOver()

        // and if uncontrollable object collide with edge of game map
      } else if (enemies[i].y + enemies[i].h >= 495) {
        var element = document.getElementById(enemies[i].element);
        element.style.visibility = 'hidden';
        element.parentNode.removeChild(element);
        enemies.splice(i, 1);
        i--;
      }
    }
    if (laser.y + laser.h <= 5) {
    $('#laser').css('visibility', 'hidden')
    // console.log($('#laser').position())
    // console.log($('#background').position())
    }

}

// this will run the events in our game to keep the gameplay smooth
// var lastLoopRun = 0
// if (new Date().getTime() - lastLoopRun > 40) {}
// lastLoopRun = new Date().getTime()
function gameLoop() {

    updatePosition()

    handleControls()

    checkCollision()

    addEnemy()

    showSprites()

    iterations++ // it creates the difficulty component by increasing speed & number of enemies as it increases
    console.log(iterations)
}

var game = setInterval(function() {
  gameLoop()
}, 40) // can also put 40 milliseconds to run the same without if statement in gameLoop



function gameOver() {
  // var element = document.getElementById(player.element);
  // element.style.visibility = 'hidden';
  // element = document.getElementById('gameover');
  // element.style.visibility = 'visible';
  $('#gameover').css('visibility', 'visible')
  $('#player').css('visibility', 'hidden')
  $('.enemy').css('visibility', 'hidden')
  $('#laser').css('visibility', 'hidden')

  gameOverSound()

  // stop game music to let game over music play
  stop()

  // this stops all functions in the gameLoop
  clearInterval(game)

// alert player if he gets new High Score
  // if (score > highscore)
  //   alert("Good Job!!!!! NEW HIGH SCORE!!!")
  // else
  //   alert("Try Again!")
}




// Add sounds to the game

var gameAudio = document.createElement('audio')
  gameAudio.src = '/assets/sounds/kick_shock.wav'
  gameAudio.autoplay = true
  gameAudio.loop = true
  gameAudio.volume = 0.3
  document.body.appendChild(gameAudio)

function play() {
  gameAudio.play()
}
play()

function stop() {
  gameAudio.pause()
}

function laserSound() {
  var audio = document.createElement('audio')
  audio.src = '/assets/sounds/shot.mp3'
  audio.autoplay = true
  audio.play()
  audio.volume = 0.3
}

function collideSound() {
  var audio = document.createElement('audio')
  audio.src = '/assets/sounds/explo.mp3'
  audio.autoplay = true
  audio.play()
  audio.volume = 0.3
}

function gameOverSound() {
  var audio = document.createElement('audio')
  audio.src = '/assets/sounds/game_over.wav'
  audio.autoplay = true
  audio.loop = true
  audio.play()
  audio.volume = 0.5
}


}

// reload the game
function reload() {
  location.reload()
}
