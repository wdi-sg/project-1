$(function () {
  console.log('Dom is ready')

  var $container = $('.container')
  var $mob = $('.mob')
  var $player = $('.player')
  var $bullet = $('.projectile')
  var $body = $('body')
  var keys = {37: false, 38: false, 39: false}
  $bullet.hide()

  setInterval(startMob, 4000)
  setInterval(bulletCollisionCheck, 10)
  $container.on('click', fireBullet)
  setInterval(checkHeight,800)


  function checkHeight(){ // check player height and drop if he is floating
    var $player = $('.player')
    var $playPos = $player.position()
      if ($playPos.top !== 530) {$player.css('top', `530px`)}
  }
  $body.on('keydown', function (e) {
    var $player = $('.player')
    var $playPos = $player.position()
    keys[e.keyCode] = true;
    console.log(keys);

    if (keys[38] && keys[39] && $playPos.top === 530){ //right and up
    $player.css('left', `${$playPos.left += 250}px`)
    $player.css('top', `${$playPos.top -= 350}px`)
    }
    if(keys[37] && keys[38] && $playPos.top === 530){  //left and up
    $player.css('left', `${$playPos.left -= 250}px`)
    $player.css('top', `${$playPos.top -= 350}px`)
    }
    if (keys[37]) { $player.css('left', `${$playPos.left -= 100}px`)} //left
    if (keys[38] && $playPos.top === 530) {$player.css('top', `${$playPos.top -= 400}px`)}   //up
    if (keys[39]) { $player.css('left', `${$playPos.left += 100}px`)} //right
    // switch (e.keyCode) {
    //
    //   case 37: if ($playPos.left > 100) { $player.css('left', `${$playPos.left -= 100}px`) } // left
    //     else {
    //     return
    //   }
    //     break
    //
    //   case 38: if ($playPos.top === 530) { $player.css('top', `${$playPos.top -= 200}px`) // up
    // } else if ($playPos.top === 330) {$player.css('top', `${$playPos.top += 200}px`)}
    //     console.log($playPos.top)
    //     break
    //
    //   case 39: $player.css('left', `${$playPos.left += 100}px`)// right
    //     break
    //   //  case 40: $player.css("top",`${$playPos.top +=10}px`)// down
    //   //  break;
    //
    //   default: return // exit this handler for other keys
    // }
    e.preventDefault() // prevent the default action (scroll / move caret)
  })

  $body.on('keyup', function (e) {
    keys[e.which] = false
    var $player = $('.player')
    var $playPos = $player.position()
    // console.log(` current position ${$playPos.top}`)
    if ($playPos.top < 530) { $player.css('top', `530px`) }
  })

  function startMob () {
    $mobPosition = $mob.position()
    mobPosLeft = $mobPosition.left
    if (mobPosLeft > 1510) {
      $mob.css('left', `${mobPosLeft - 900}px`)
    } else if (mobPosLeft < 1500) {
      $mob.css('left', `${mobPosLeft + 900}px`)
    }
    console.log(mobPosLeft)
  }

  function fireBullet () {
    $bullet.show()
    $bulletLoc = $bullet.position()
    $bulletExact = $bulletLoc.left
    if ($bulletExact <= 150) {
      $bullet.css('left', `${$bulletExact + 1470}px`)
    } else if ($bulletExact >= 1642) {
      $bullet.css('left', '150px')
        // $bullet.hide()
    }
    console.log($bulletExact)
  }

  function bulletCollisionCheck () {
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
      $bullet.css('left', '150px')
      console.log('CRASH')
      $bullet.hide()
    } else {
      return false
    }
  }


})
