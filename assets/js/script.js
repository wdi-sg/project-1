
// create objects here
var player = new Object()
player.element = 'player'
player.x = 250
player.y = 450
player.w = 30
player.h = 30

var laser = new Object()
laser.element = 'laser'
laser.x = 0
laser.y = -200
laser.w = 2
laser.h = 20

var enemies = new Array()


var controller = new Object()

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


// set the position of our objects
function setPosition(sprite) {
  var e = document.getElementById(sprite.element)
  e.style.left = sprite.x + 'px'
  e.style.top = sprite.y + 'px'
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
  }
  ensureBounds(player)
  ensureBounds(laser)
}

// load the sprites to the game
function showSprites() {
  setPosition(player)
  setPosition(laser)

  // show the enemy
  for (var i = 0; i < enemies.length; i++) {
    setPosition(enemies[i])
  }
}

// to update the position of object that player cannot control
function updatePosition() {
  // update position of enemy
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].y += 4
    enemies[i].x += getRandom(7) - 3
    ensureBounds(enemies[i])
  }

  // update position for the laser
  laser.y -= 12
}

// add enemy to the game map
function addEnemy() {
  if (getRandom(50) == 0) {
    var summonEnemy = 'enemy' + getRandom(10000000)
    var enemy = new Object()
    enemy.element = 'enemy'
    enemy.x = getRandom(450)
    enemy.y = 0
    enemy.w = 40
    enemy.h = 40

    var createEnemy = document.createElement('div')
    createEnemy.id = enemy.element
    createEnemy.className = 'alien'
    document.children[0].appendChild(createEnemy)

    enemies[enemies.length] = enemy
  }

}

// get random number for enemies
function getRandom(max) {
  return parseInt(Math.random() * max)
}

// this will run the events in our game to keep the gameplay smooth
var lastLoopRun = 0

function gameLoop() {
  if (new Date().getTime() - lastLoopRun > 40) {
    updatePosition()
    handleControls()

    addEnemy()

    showSprites()

    lastLoopRun = new Date().getTime()
  }
  setTimeout('gameLoop()', 2)
}

document.onkeydown = function(event) {
  pressKey(event.keyCode, true)
}

document.onkeyup =  function(event) {
  pressKey(event.keyCode, false)
}

gameLoop()
