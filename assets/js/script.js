
// create objects here
var player = new Object()
player.element = 'player'
player.x = 250
player.y = 450
player.w = 38
player.h = 38

var laser = new Object()
laser.element = 'laser'
laser.x = 0
laser.y = 0
laser.w = 12
laser.h = 15

var controller = new Object()

//create an enemy Array
var enemies = new Array()


// keycode of controller
var leftKey = 37
var upKey = 38
var rightKey = 39
var downKey = 40
var spaceKey = 32


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
    player.x -= 5
  }
  if (controller.up) {
    player.y -= 5
  }
  if (controller.right) {
    player.x += 5
  }
  if (controller.down) {
    player.y += 5
  }
  if (controller.space && laser.y <= 0) {
    laser.x = player.x + 15
    laser.y = player.y - laser.h
    $('#laser').css('visibility', 'visible')

  }

  ensureBounds(player)
}


// set the position of our objects
function setPosition(sprite) {
  var e = document.getElementById(sprite.element)
  e.style.left = sprite.x + 'px'
  e.style.top = sprite.y + 'px'
}

var score = 0
// load the sprites to the game
function showSprites() {
  setPosition(player)
  setPosition(laser)

  for (var i = 0; i < enemies.length; i++) {
    setPosition(enemies[i])
  }

  var scoreElement = document.getElementById('score');
  scoreElement.innerHTML = 'SCORE: ' + score;
}

// to update the position of object that player cannot control
function updatePosition() {
  // update position of enemy
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].y += getRandom(7)
    enemies[i].x += getRandom(7) - 3
    ensureBounds(enemies[i], true)
  }

  // update position for the laser
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
   if (iterations > 1500) {
     interval = 5
   } else if (iterations > 1000) {
     interval = 20
   } else if (iterations > 500) {
     interval = 40
   }

   if (getRandom(interval) == 0) {
     var elementName = 'enemy' + getRandom(10000000)
     var enemy = new Object()
     enemy.element = elementName
     enemy.x = getRandom(450)
     enemy.y = -80
     enemy.w = 40
     enemy.h = 40

     var createEnemy = document.createElement('div')
     createEnemy.id = enemy.element
     createEnemy.className = 'enemy'
     $("#background").append(createEnemy)

     enemies[enemies.length] = enemy
   }
 }

// get random number for enemies
function getRandom(max) {
 return parseInt(Math.random() * max)
}


// now to check for collision when element intersect with each other
function intersect(a,b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
}

// check for collision function
  // laser collide with enemies
  // hero collide with enemies
  // and if uncontrollable object collide with edge of game map
function checkCollision() {
    for (var i = 0; i < enemies.length; i++) {
      if (intersect(laser, enemies[i])) {
        var element = document.getElementById(enemies[i].element);
        element.style.visibility = 'hidden';
        element.parentNode.removeChild(element);
        enemies.splice(i, 1);
        i--;
        laser.y = -laser.h
        $('#laser').css('visibility', 'hidden')
        score += 100
      } else if (intersect(player, enemies[i])) {
        gameOver()
      } else if (enemies[i].y + enemies[i].h >= 495) {
        var element = document.getElementById(enemies[i].element);
        element.style.visibility = 'hidden';
        element.parentNode.removeChild(element);
        enemies.splice(i, 1);
        i--;
      }
    }
    if (laser.y + laser.h <= 0) {
    $('#laser').css('visibility', 'hidden')
    // console.log($('#laser').position())
    // console.log($('#background').position())
    }
}

// this will run the events in our game to keep the gameplay smooth
var lastLoopRun = 0

function gameLoop() {
  if (new Date().getTime() - lastLoopRun > 40) {
    updatePosition()

    handleControls()

    checkCollision()

    addEnemy()

    showSprites()

    lastLoopRun = new Date().getTime()
    iterations++
  }
   setTimeout('gameLoop()', 2)
}

gameLoop()

function gameOver() {
  var element = document.getElementById(player.element);
  element.style.visibility = 'hidden';
  element = document.getElementById('gameover');
  element.style.visibility = 'visible';


  setInterval(reload, 10000)
}


function reload() {
  location.reload()
}
