$(function () {
  console.log('Dom is ready')

  var $container = $('.container')
  var $mob = $('.mob')
  var $player = $('.player')
  var $bullet = $('.projectile')
  var $body = $('body')

  setInterval(startMob, 7000)
  setInterval(bulletCollisionCheck, 10)
  $container.on('click', fireBullet)



  $body.on("keydown",function(e) {

 // alert(e.keyCode)
 var $player = $('.player')
 var $playPos = $player.position()
   switch(e.keyCode) {
       case 37: if($playPos.left > 100){$player.css("left",`${$playPos.left -=100}px`)} // left
       else{
         return
       }
       break;

       case 38: if($playPos.top > 529){$player.css("top",`${$playPos.top -=200}px`)
        $bullet.show()} // up
       else {
         return
       }
       console.log($playPos.top);
       break;

       case 39: $player.css("left",`${$playPos.left +=100}px`)// right
       break;

       case 40: $player.css("top",`${$playPos.top +=10}px`)// down
       break;

       default: return; // exit this handler for other keys
   }
   e.preventDefault(); // prevent the default action (scroll / move caret)


    })

    $body.on("keyup", function(e){
      var $player = $('.player')
      var $playPos = $player.position()
      console.log(` current position ${$playPos.top}`);
      if ($playPos.top <530) {$player.css("top",`530px`)}
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
      $bullet.show()
      $bulletLoc = $bullet.position()
      $bulletExact = $bulletLoc.left
      if($bulletExact <=150){
      $bullet.css('left', `${$bulletExact + 1470}px`)
    } else if ($bulletExact >= 1642) {
        $bullet.css("left","150px")
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
         $bullet.css("left","150px")
         console.log("CRASH")
         $bullet.hide()

      } else {
        return false
      }
    }
})
