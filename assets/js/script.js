// class Mob = new class {
//
//   constructor(id,hitPoints){
//
//     this.id = id
//     this.hitPoints = hitPoints
//   }
// }

$(function () {

  console.log('Dom is ready')

  var $container = $('.container')
  var $topContainer = $('.topContainer')
  var $mob = $('.mob')
  var $player = $('.player')
  var $bullet = $('.projectile')
  var $body = $('body')
  var $mobHP = $("#mobHP")
  var $playerHP = $("#healthPoints")
  var $hpBar = $(".hpBar")
  var fireDirection = ""
  var keys = {37: false, 32: false, 39: false}
  var playerHealth = 100
  var mobHealth = 50
  var currentMobsOnScreen = 0
  var gameEnd = false
  $bullet.hide()

  setInterval(startMob, 1000)
  setInterval(bulletCollisionCheck, 10)
  setInterval(playerMobCollisionCheck,300)
  setInterval(checkHeight,300)


  function checkHeight(){ // check player height and drop if he is floating
    var $player = $('.player')
    var $playPos = $player.position()
      if ($playPos.top !== 560) {$player.css('top', `560px`)}
  }

  $body.on('keydown', function (e) {
    var $player = $('.player')
    var $playPos = $player.position()
    keys[e.keyCode] = true;
    $player.css("webkitAnimationPlayState","running")

    if (keys[32] && keys[39] && $playPos.top === 560 && $playPos.left < 1240){ //right and up
    $player.css('top', `${$playPos.top -= 200}px`)
    $player.css('left', `${$playPos.left += 200}px`)
    $player.css("transform","scaleX(-1)")
    fireDirection = "right"
    }
    if(keys[37] && keys[32] && $playPos.top === 560 && $playPos.left >201){  //left and up
    $player.css('top', `${$playPos.top -= 200}px`)
    $player.css('left', `${$playPos.left -= 200}px`)
    $player.css("transform","scaleX(1)")
    fireDirection = "left"
    }
    if (keys[37] && $playPos.left >151) {
    $player.css('left', `${$playPos.left -= 150}px`)
    $player.css("transform","scaleX(1)")
    fireDirection = "left"
  } //left
    if (keys[32] && $playPos.top === 560) {$player.css('top', `${$playPos.top -= 300}px`)}   //up
    if (keys[39] && $playPos.left < 1480) {
    $player.css('left', `${$playPos.left += 150}px`)
    $player.css("transform","scaleX(-1)")
    fireDirection = "right"} //right
    if (keys[67]) {fireBullet()}
    e.preventDefault() // prevent the default action (scroll / move caret)
  })

  $body.on('keyup', function (e) {
    keys[e.which] = false
    var $player = $('.player')
    var $playPos = $player.position()
    $player.css("webkitAnimationPlayState","paused")
    // console.log(` current position ${$playPos.top}`)
    // if ($playPos.top !== 560) { $player.css('top', `560px`) }
  })
  var mobArray = []
  function startMob () {
    $spawnMob = $("<div class='mob'>")
    // mobArray.push($spawnMob)
    // if(currentMobsOnScreen < 3){
    //   currentMobsOnScreen ++
    //   $topContainer.append($spawnMob)
    // }
    $mobPosition = $mob.position()
    $playPos = $player.position()
    mobPosLeft = $mobPosition.left
    // if (mobPosLeft > 1510) {
      $mob.css('left', `${$playPos.left}px`)
      mobDirection()
    // } else if (mobPosLeft < 1500) {
    //   $mob.css('left', `${mobPosLeft + 900}px`)
    // }

  }

  var oldXAxis = 0       // set axis to start from
  function mobDirection(){
    $mobPosition = $mob.position()
    $playPos = $player.position()
    mobPosLeft = $mobPosition.left

    if(mobPosLeft < $playPos.left){     //if current position of mouse on the x axis of page is more than oiginal position, mouse has moved right, hence flip right

      // direction = "right"
      $mob.removeClass("mob")
      $mob.addClass("mobRight")
    }
    else if(mobPosLeft > $playPos.left){    //if current position of mouse on the x axis of page is more than oiginal position, mouse has moved left, hence flip left

      // direction = "left"
      $mob.removeClass("mobRight")
      $mob.addClass("mob")
    }
    oldXAxis = mobPosLeft//update current mouse/page X axis
  }



  function fireBullet () {
    $playPos = $player.position()
    $mobPos = $mob.position()
    $bullet.show()
    $bulletLoc = $bullet.position()
    $bulletExact = $bulletLoc.left
    $bulletTop = $playPos.top
    $bulletLeft= $playPos.left
    $bullet.css('left',$playPos.left)
    if(fireDirection === "right"){
      $bullet.css('left', `${$bulletExact + (1600-$bulletExact)}px`)
    }else if(fireDirection === "left"){
      $bullet.css('left', `${$bulletExact - (1600-$bulletExact)}px`)
    }
  if ($bulletExact <= 50 || $bulletExact >= 1400) {
      $bullet.css('left',$playPos.left)
        $bullet.hide()
        console.log('bullet', $bulletExact);
    }

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
         mobHealth -=1
         $mobHP.text(`Current MOB HP: ${mobHealth}`)
         $bullet.css('left',$playPos.left)
         $bullet.css("top","620px")
         if(mobHealth === 0) {
           setTimeout($mob.remove(), 5000)}
      console.log('CRASH')
      $bullet.hide()
    } else {
      return false
    }
  }

  function playerMobCollisionCheck () {
    var red = $player.position()
    var redX = red.left
    var blue = $mob.position()
    var blueX = blue.left
    var redY = red.top
    var blueY = blue.top

    if (blueX < redX + $player.width() &&
       blueX + $mob.width() > redX &&
       blueY < redX + $player.height() &&
       $mob.height() + blueY > redY) {
      console.log('PLAYER HEALTH REDUCED')
      playerHealth -=1
      var currentHpWidth = $(".hpBar").width()
      $(".hpBar").css("width",`${currentHpWidth-2}px`)
      $hpBar.text(`${playerHealth}/100`)
      if(playerHealth === 0){
        gameEnd = true
      }
    } else {
      return false
    }
  }

})
