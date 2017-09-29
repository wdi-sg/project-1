$(function () {
  console.log('Dom is ready')

  $container = $('.container')
  $mob = $('.mob')
  $player = $('.player')
  $bullet = $('.projectile')


  setInterval(collisionCheck, 10)
  setInterval(startMob, 4000)
  $container.on('click', fireBullet)
})

function startMob () {
  $mobPosition = $mob.position()
  mobPosLeft = $mobPosition.left
  if (mobPosLeft > 1510) {
    $mob.css('left', `${mobPosLeft - 900}px`)
  } else {
    $mob.css('left', `${mobPosLeft + 900}px`)
  }
  console.log(mobPosLeft)
}
function fireBullet () {
  $bullet.css('visibility', 'visible')
  $bulletLoc = $bullet.position()
  $bulletExact = $bulletLoc.left
  $bullet.css('left', `${$bulletExact + 1500}px`)
  console.log($bulletExact)
}
function collisionCheck () {
  var red = $bullet.position()
  var redX = red.left
  var blue = $mob.position()
  var blueX = blue.left
  var redY = red.top
  var blueY = blue.top

  if (blueX < redX + $bullet.width() &&
   blueX + $mob.width() > redX &&
   blueY < redX + $bullet.height() &&
   $mob.height() + blueY > redY) {
     $bullet.css("left","150px")
     console.log("CRASH")
     $bullet.css("visibility","hidden")

  } else {
    return false
  }
}
