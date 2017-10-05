#  Yuki Tsuboniwa: "Project #1"
![Space Invader Logo](https://nebula.wsimg.com/obj/QzRGNkYxNkJERTM0M0M0MDdCMzM6YWYxNzQ2ZGRmMmVkZWFiMmY2ZDVlZjQwMzgwNTY4ZTU6Ojo6OjA=)

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: My Space Invader

https://yukitsuboniwa.github.io/project-1/

### Overview

  My Space Invader Game is designed for players who likes to play a never ending game where you rack up points until the player dies. The key to the game is to survive as long as possible while getting points by shooting enemies. The longer you survive more enemies will spawn and the faster they will get. It's game over if one of the enemy sprite touches the player sprite. Player wins by beating the high score. It is a game that is inspired by the classic Space Invader game with a slight difference in gameplay.

### Game Instructions

Move Player = Arrow keys (← ↑ ↓ →)

Fire Laser = Spacebar

Click the "Instructions" to view the instructions of the game once your ready click Start to begin playing!

### Game Flowchart

![Space Invader Flowchart](/assets/img/spaceinvaderflowchartupdated.png)


### Assets

1. Game Layout

  ![My Background](/assets/img/gamemap.png)

2. Characters

  ![My Player](/assets/img/ship.png) = PLAYER

  ![My Laser](/assets/img/bullet.png) = LASER

  ![Enemy](/assets/img/enemy1.png) = ENEMY


### Code Snippets

* For the player's movement/control I used the keyCodes of the keyboard to move by pressing the arrow keys and fire lasers when pressing the Spacebar

```
var leftKey = 37
var upKey = 38
var rightKey = 39
var downKey = 40
var spaceKey = 32

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

var controller = new Object()
var playerMovement = 10

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
    laserSound()
  }
}
```
* To create and spawn my enemies I created an array to place all my enemies and I also created a random number function to add some randomness to how the enemy will behave and spawn the iteration is where the difficulty of the game is changed over time

```
var enemies = new Array()
var iterations = 0
function addEnemy() {
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
    iterations++
 }
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
      enemies[enemies.length] = enemy
    }
}

function getRandom(max) {
   return parseInt(Math.random() * max)
}
 ```

* My collision function is how my characters interacts with each other and other elements of the game I used an intersect function by using the dimension and axis of the objects that when a > b and b > a the collision happens.

```
function intersect(a,b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
}

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
        collideSound()
        score += 100

      } else if (intersect(player, enemies[i])) {
        collideSound()
        gameOver()

      } else if (enemies[i].y + enemies[i].h >= 495) {
        var element = document.getElementById(enemies[i].element);
        element.style.visibility = 'hidden';
        element.parentNode.removeChild(element);
        enemies.splice(i, 1);
        i--;

      } else if (laser.y + laser.h <= 5) {
        $('#laser').css('visibility', 'hidden')
      }    
}
```

### Reference

1.[Space Invader Tutorial](https://sites.google.com/site/wecanprogramcom/html-and-javascript/web-development-level2/lesson-1-setting-up-the-first-sprite)

2.[Additional Infos and Sources "Copyright (C) 2012 Steven Lambert"](https://github.com/straker/galaxian-canvas-game)
