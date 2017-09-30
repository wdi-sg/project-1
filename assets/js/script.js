var lastLoopRun = 0
var score = 0
var iterations = 0

// create objects here
var hero = createSprite('hero', 250, 450, 20, 20)
var laser = createSprite('laser', 0, -250, 2, 50)


var controller = new Object()
var enemies = new Array()

// create the sprites of the game
function createSprite(element, x, y, w, h) {
  var sprite = new Object()
  sprite.element = element
  sprite.x = x
  sprite.y = y
  sprite.w = w
  sprite.h = h
  return sprite
}

// set position of objects
function setPosition(sprite) {
  var e = document.getElementById(sprite.element)
  e.style.left = sprite.x + 'px'
  e.style.top = sprite.y + 'px'
}

// create function when elements intersect with each other
function intersects(a,b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
}

// check if elements will collide with each other
function checkCollision() {
  for (var i = 0; i < enemies.length; i++) {
    if (intersects(laser, enemies[i])) {
      var element = document.getElementById(enemies[i].element)
      element.style.visibility = 'hidden'
      element.parentNode.removeChild(element)
      enemies.splice(i, 1)
      i--
      laser.y = -laser.h
      score += 100
    } else if (intersects(hero, enemies[i])) {
      var element = document.getElementById(hero.element)
      gameOver()
    } else if (enemies[i].y + enemies[i].h >= 500) {
      var element = document.getElementById(enemies[i].element)
      element.style.visibility = 'hidden'
      element.parentNode.removeChild(element)
      enemies.splice(i, 1)
      i--
    }
  }
}


// assign movement key to the controller
function toggleKey(keyCode, isPressed) {
  // console.log(keyCode) // left = 37 up = 38 right = 39 down = 40 space = 32
  if (keyCode === 37) {
    controller.left = isPressed
  }
  if (keyCode === 39) {
    controller.right = isPressed
  }
  if (keyCode === 38) {
    controller.up = isPressed
  }
  if (keyCode === 40) {
    controller.down = isPressed
  }
  if (keyCode === 32) {
    controller.space = isPressed
  }
}


// movement of player
function handleControls() {
  if (controller.left) {
    hero.x -= 3
  }
  if (controller.right) {
    hero.x += 3
  }
  if (controller.up) {
    hero.y -= 3
  }
  if (controller.down) {
    hero.y += 3
  }
  if (controller.space && laser.y <= -100) { // this is the rate of the firing of laser
    laser.x = hero.x + 10
    laser.y = hero.y - laser.h
  }

  ensureBounds(hero)

}

// this will ensure that the sprites will not go over the game map
function ensureBounds(sprite) {
  if (sprite.x < 20) {
    sprite.x = 20
  }
  if (sprite.y < 20) {
    sprite.y = 20
  }
  if (sprite.x + sprite.w > 480) {
    sprite.x = 480 - sprite.w
  }
  if (sprite.y + sprite.h > 480) {
    sprite.y = 480 - sprite.h
  }
}

function gameOver() {
  var element = document.getElementById(hero.element)
  element.style.visibility = 'hidden'
  element = document.getElementById('gameover')
  element.style.visibility = 'visible'
  // alert('Game Over')
  document.location.reload()
}

// to display the sprites in the game
function showSprites() {
  setPosition(hero)
  setPosition(laser)

  for (var i = 0; i < enemies.length; i++) {
    setPosition(enemies[i])
  }
  var scoreElement = document.getElementById('score')
  scoreElement.innerHTML = 'SCORE: ' + score
}

function updatePosition() {
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].y += 4;
    enemies[i].x += getRandom(7) - 3
    // ensureBounds(enemies[i])
  }
  laser.y -= 10 // this will update where the laser will spawn
}

// create the enemy
function addEnemy() {
  var interval = 50

  if (getRandom(interval) == 0) {
    var elementName = 'enemy' + getRandom(1000000)
    var enemy = createSprite(elementName, getRandom(500), -40, 35, 35)

    var element = document.createElement('div')
    element.id = enemy.element
    element.className = 'enemy'
    document.children[0].appendChild(element)

    enemies[enemies.length] = enemy
  }
}

// how many enemy to spawn
function getRandom(maxSize) {
  return parseInt(Math.random() * maxSize)
}

// it will loop all the actions of the game
function loop() {
  if (new Date().getTime() - lastLoopRun > 40) {
    updatePosition()
    handleControls()
    checkCollision()

    addEnemy()

    showSprites()

    lastLoopRun = new Date().getTime()
    iterations++
  }
  setTimeout('loop()', 2)
}

document.onkeydown =  function(evt) {
  toggleKey(evt.keyCode, true)
}

document.onkeyup = function(evt) {
  toggleKey(evt.keyCode, false)
}

loop()




// var lastLoopRun = 0
//
// var hero = new Object()
// hero.element = 'hero'
// hero.x = 250
// hero.y = 450
// hero.w = 20
// hero.h = 20
//
// function setPosition(sprite) {
//   var spritePos = document.getElementById(sprite.element)
//   spritePos.style.left = sprite.x + 'px'
//   spritePos.style.top = sprite.y + 'px'
// }
// setPosition(hero)
//
// function ensureBounds(sprite) {
//   if (sprite.x < 20) {
//     sprite.x = 20
//   }
//   if (sprite.y < 20) {
//     sprite.y = 20
//   }
//   if (sprite.x + sprite.w > 400) {
//     sprite.x = 400 - sprite.w
//   }
//   if (sprite.y + sprite.h > 400) {
//     sprite.y = 400 - sprite.h
//   }
// }
// ensureBounds(hero)
//
//   function loop() {
//     if (new Date().getTime() - lastLoopRun > 40) {
//
//       lastLoopRun = new Date().getTime();
//
//     }
//     setTimeout('loop()', 2)
//   }
// loop()
//
// $(function() {
//   var background = $('#background')
//   var hero = $('#hero')
//   // var laser = $('#laser')
//
//   // // set position of player
//   // function setPosition() {
//   //   hero.css('left', 250 + 'px')
//   //   hero.css('top', 450 + 'px')
//   // }
//   // setPosition()
//   //
//   // function fireLaser() {
//   //   var heroPos = hero.position()
//   //   var laser_x = laser.css('left', `${heroPos + 9}px`)
//   //   var lasr_y = laser.css('top', `${heroPos - 30}px`)
//   //   hero.append(laser)
//   // }
//
//   // movement of player
//   $(document).on('keydown', function (e) {
//     var key = e.keyCode
//     var heroPos = hero.position()
//     if (key === 37) {
//       hero.css('left', `${heroPos.left - 10}px`)
//     }
//     if (key === 38) {
//       hero.css('top', `${heroPos.top - 10}px`)
//     }
//     if (key === 39) {
//       hero.css('left', `${heroPos.left + 10}px`)
//     }
//     if (key === 40) {
//       hero.css('top', `${heroPos.top + 10}px`)
//     }
//     // if (key === 32) {
//     //   fireLaser()
//     // }
//   })



  // // keyCode for keyboard Reference: https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
  // var leftKey = 37;
  // var upKey = 38;
  // var rightKey = 39;
  // var downKey = 40;
  // var spaceKey = 32;
  // var heroMovement = 5;
  //
  // var controller = new Object()
  // $hero.element = 'hero';
  // $hero.x = 250;
  // $hero.y = 450;
  //
  // function setPosition(sprite) {
  //   var pos = document.getElementById(sprite.element)
  //   pos.style.left = sprite.x + 'px'
  //   pos.style.top = sprite.y + 'px'
  //
  // }
  //
  // function toggleKey(keyCode, isPressed) {
  //   if (keyCode == leftKey) {
  //     controller.left = isPressed
  //   }
  //   if (keyCode == rightKey) {
  //     controller.right = isPressed
  //   }
  //   if (keyCode == upKey) {
  //     controller.up = isPressed
  //   }
  //   if (keyCode == downKey) {
  //     controller.down = isPressed
  //   }
  // }
  //
  // function handleControls() {
  //   if (controller.up) {
  //     hero.y -= heroMovement;
  //   }
  //   if (contoller.down) {
  //     hero.y += heroMovement;
  //   }
  //   if (controller.left) {
  //     hero.x -= heroMovement;
  //   }
  //   if (controller.right) {
  //     hero.x += heroMovement;
  //   }
  // }
  //
  //
  // $hero.on('keydown', function(evt) {
  //   toggleKey(evt.keyCode, true)
  //
  //   $hero.css({
  //     left: `${controller.left + 10}px`
  //   })
  // })
  //
  // $hero.on('keyup', function(evt) {
  //   toggleKey(evt.ketCode, false)
  // })





// })
