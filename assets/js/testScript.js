class Mob {

  constructor (id) {
    this.id = id
    this.hitPoints = 20
    this.damage = 1
    this.bosscheck = false
    this.jTarget = $('body').find(`#${this.id}`)
    this.width = this.jTarget.css('width')
    this.height = this.jTarget.css('height')

    setInterval(() => {
      this.positionCheck()
    }, 1000)
  }

  positionCheck () {
    var speed = Math.floor(Math.random() * 20)
    var mobPosition = this.jTarget.position()
    if (mobPosition.left < 500) {
      this.jTarget.css({
        width: '180px',
        height: '170px',
        position: 'absolute',
        transition: '8s',
        top: '505px',
        left: '1460px',
        transition: `ease-out ${speed}s`,
        background: 'url(./assets/images/stoneGolemRight.png)',
        animation: 'mobPlayRight 2s steps(4) infinite'
      })
    } else if (mobPosition.left > 1400) {
      this.jTarget.css({
        left: '1px',
        transition: `ease-out ${speed}s`,
        background: 'url(./assets/images/stoneGolem.png)',
        animation: 'mobPlay 2s steps(4) infinite'
      })
    }
  }

  addChar () {
    var location = Math.floor(Math.random() * 480)
    var spawnMob = $('<div>')
    spawnMob.attr('id', this.id)

    $('.topContainer').append(spawnMob)
    this.jTarget = $('body').find(`#${this.id}`)
    this.jTarget.css({
      width: '180px',
      height: '170px',
      position: 'absolute',
      top: '505px',
      left: `${location}px`,
      transition: 'ease-out 20s',
      background: 'url(./assets/images/stoneGolemRight.png)',
      animation: 'mobPlayRight 2s steps(4) infinite'
    })
  }

}


class Boss {

  constructor (id) {
    this.id = id
    this.hitPoints = 100
    this.damage = 3
    this.bosscheck = true
    this.jTarget = $('body').find(`#${this.id}`)
    this.width = this.jTarget.css('width')
    this.height = this.jTarget.css('height')

    setInterval(() => {
      this.positionCheck()
    }, 1000)
  }

  positionCheck () {
    var speed = Math.floor(Math.random() * 30)
    var mobPosition = this.jTarget.position()
    if (mobPosition.left < 400) {
      this.jTarget.css({
        left: '1460px',
        transition: `ease-out ${speed}s`,
        background: 'url(./assets/images/bossRight.png)',
        animation: ' bossRight 1s steps(8) infinite'
      })
    } else if (mobPosition.left > 1400) {
      this.jTarget.css({
        left: '1px',
        transition: `ease-out ${speed}s`,
        background: 'url(./assets/images/boss.png)',
        animation: ' bossOne 1s steps(8) infinite'
      })
    }
  }

  addBoss () {
    var location = Math.floor(Math.random() * 380)
    var spawnMob = $('<div>')
    spawnMob.attr('id', this.id)

    $('.topContainer').append(spawnMob)
    this.jTarget = $('body').find(`#${this.id}`)
    this.jTarget.css({
      width: '250px',
      height: '320px',
      position: 'absolute',
      top: '390px',
      left: `${location}px`,
      transition: 'ease-out 20s',
      background: 'url(./assets/images/boss.png)',
      animation: ' bossOne 1s steps(8) infinite'
    })
  }

}
$(function () {
  var $container = $('.container')
  var $topContainer = $('.topContainer')
  var $mob = $('.mob')
  var $player = $('.player')
  var $bullet = $('.projectile')
  var $body = $('body')
  var $mobHP = $('#mobHP')
  var $playerHP = $('#healthPoints')
  var $hpBar = $('.hpBar')
  var $startButton = $('#restart')
  var $firstSkillDiv = $('.skillOne')
  var $mpBar = $('.mpBar')
  var $bossSign = $(".levelOneGameEnd")
  var mobArray = []
  var bossArray = []
  var fireDirection = ''
  var keys = {37: false, 32: false, 39: false}
  var playerHealth = 1000
  var mobHealth = 50
  var mobsOnScreen = 0
  var levelOneMobCount = 10
  var gameEnd = false
  var bossDead =false
  var bossLevel = false
  var mana = 202
  $bullet.hide()

  setInterval(function () {
    if (gameEnd) { $('.landingScreen').show()}

  }, 1000)
  setInterval(function(){
    if (bossLevel){ $bossSign.css("visibility","visible")
    setTimeout(function () {
      $bossSign.css('visibility', 'hidden')
    }, 800)
    if(mobsOnScreen <1 && bossDead === false){generateBoss()}
  }
},1000)

  $startButton.on('click', restartGame) 

  function levelOneResultPage () {

  }

  function restartGame () {
    $('.landingScreen').hide()
    playerHealth = 1000
    $hpBar.text(`${playerHealth}/1000`)
    $hpBar.css('width', `200px`)
    mana = 202
    $mpBar.text(`${mana}/202`)
    $mpBar.css('width', `202px`)
    mobHealth = 50
    mobsOnScreen = 0
    gameEnd = false
    bossLevel = false
    levelOneMobCount = 10
    runSpawner()
    for (key in mobArray) {
      mobArray[key].jTarget.remove()
    }
    mobArray =[]
    for (key in bossArray) {
      bossArray[key].jTarget.remove()
    }
    bossArray=[]
  }

  function runSpawner () {
    var mobSpawn = setInterval(function () {
      if (mobsOnScreen < levelOneMobCount) {
        generateMob()
      }
    }, 3000)
  }

  function generateMob () {
    var id = Math.floor(Math.random() * 1000)
    mobArray[id] = new Mob(id)
    mobArray[id].addChar()
    mobsOnScreen += 1
  }
  function generateBoss () {
    var id = Math.floor(Math.random() * 1000)
    bossArray[id] = new Boss(id)
    bossArray[id].addBoss()
    mobsOnScreen +=1
  }

  var manaRegen = setInterval(function () {
    if (mana < 200) {
      mana += 1
      $mpBar.text(`${mana}/200`)
      $mpBar.css('width', `${$mpBar.width() + 1}px`)
    }
  }, 1000)

  setInterval(function () {
    for (key in mobArray) {
      bulletCollisionCheck($bullet, mobArray[key])
      playerMobCollisionCheck($player, mobArray[key])
    }
  }, 30)

  setInterval(function () {
    for (key in bossArray) {
      bulletCollisionCheck($bullet, bossArray[key])
      playerMobCollisionCheck($player, bossArray[key])
    }
  }, 30)

  $body.on('keydown', function (e) {
    var $player = $('.player')
    var $playPos = $player.position()
    keys[e.keyCode] = true
    $player.css('webkitAnimationPlayState', 'running')

    if (keys[32] && keys[39] && $playPos.top === 560 && $playPos.left < 1240) { // right and up
      $player.css('top', `${$playPos.top -= 200}px`)
      $player.css('left', `${$playPos.left += 200}px`)
      $player.css('transform', 'scaleX(-1)')
      fireDirection = 'right'
    }
    if (keys[37] && keys[32] && $playPos.top === 560 && $playPos.left > 201) {  // left and up
      $player.css('top', `${$playPos.top -= 200}px`)
      $player.css('left', `${$playPos.left -= 200}px`)
      $player.css('transform', 'scaleX(1)')
      fireDirection = 'left'
    }
    if (keys[37] && $playPos.left > 151) {
      $player.css('left', `${$playPos.left -= 150}px`)
      $player.css('transform', 'scaleX(1)')
      fireDirection = 'left'
    } // left
    if (keys[32] && $playPos.top === 560) { $player.css('top', `${$playPos.top -= 300}px`) }   // up
    if (keys[39] && $playPos.left < 1480) {
      $player.css('left', `${$playPos.left += 150}px`)
      $player.css('transform', 'scaleX(-1)')
      fireDirection = 'right'
    } // right
    if (keys[67]) { fireBullet() }
    if (keys[68]) { skillOne() }
    if (keys[90]) { skillTwo() }
    if (keys[88]) { skillThree() }
    e.preventDefault() // prevent the default action (scroll / move caret)
  })
  $body.on('keyup', function (e) {
    keys[e.which] = false
    var $player = $('.player')
    var $playPos = $player.position()
    $player.css('webkitAnimationPlayState', 'paused')
    // console.log(` current position ${$playPos.top}`)
    if ($playPos.top !== 560) { $player.css('top', `560px`) }
  })

  function bulletCollisionCheck (obj1, obj2) {
    var red = obj1.position()
    var redX = red.left
    var blue = obj2.jTarget.position()
    var blueX = blue.left
    var redY = red.top
    var blueY = blue.top
    if (blueX < redX + obj1.width() &&
        blueX + obj2.jTarget.width() > redX &&
        blueY < redX + obj1.height() &&
        obj2.jTarget.height() + blueY > redY) {
      obj2.hitPoints -= 1
      $bullet.css('left', $playPos.left)
      $bullet.css('top', '620px')
      if (obj2.hitPoints === 0) {
        obj2.jTarget.remove()
        if(obj2.bosscheck === false){
        mobArray.splice(key, 1)
        mobsOnScreen--
        levelOneMobCount--
      }else if(obj2.bosscheck){
        bossArray.splice(key, 1)
        bossDead = true
    }
      }
      if (mobsOnScreen === 0 && levelOneMobCount === 0) {
        bossLevel = true
      }
      if(bossLevel=== true && bossDead=== true){
        gameEnd = true
      }
      return true
    } else { return false }
  }

  function playerMobCollisionCheck (obj1, obj2) {
    var red = obj1.position()
    var redX = red.left
    var blue = obj2.jTarget.position()
    var blueX = blue.left
    var redY = red.top
    var blueY = blue.top

    if (blueX < redX + $player.width() &&
         blueX + obj2.jTarget.width() > redX &&
         blueY < redX + $player.height() &&
         obj2.jTarget.height() + blueY > redY) {
      console.log('PLAYER HEALTH REDUCED')
      playerHealth -= obj2.damage
      var currentHpWidth = $('.hpBar').width()
      $('.hpBar').css('width', `${currentHpWidth - obj2.damage/5}px`)
      $hpBar.text(`${playerHealth}/1000`)
      if (playerHealth === 0) {
        gameEnd = true
      }
    } else {
      return false
    }
  }

  function fireBullet () {
    $playPos = $player.position()
    $mobPos = $mob.position()
    $bullet.show()
    $bulletLoc = $bullet.position()
    $bulletExact = $bulletLoc.left
    $bulletTop = $playPos.top
    $bulletLeft = $playPos.left
    $bullet.css('left', $playPos.left)
    if (fireDirection === 'right') {
      $bullet.css('left', `${$bulletExact + (1600 - $bulletExact)}px`)
    } else if (fireDirection === 'left') {
      $bullet.css('left', `${$bulletExact - (1600 - $bulletExact)}px`)
    }
    if ($bulletExact <= 50 || $bulletExact >= 1400) {
      $bullet.css('left', $playPos.left)
      $bullet.hide()
      console.log('bullet', $bulletExact)
    }
  }
  function skillOne () {
    if (mana >= 10) {
      mana -= 10
      $mpBar.text(`${mana}/200`)
      $mpBar.css('width', `${$mpBar.width() - 10}px`)
      $firstSkillDiv.css('visibility', 'visible')
      setTimeout(function () {
        $firstSkillDiv.css('visibility', 'hidden')
      }, 800)

      for (key in mobArray) {
        mobArray[key].hitPoints -= 10
        if (mobArray[key].hitPoints < 0) {
          mobArray[key].jTarget.remove()
          mobArray.splice(key, 1)
          mobsOnScreen--
          levelOneMobCount--
        }
      }
      for (key in bossArray) {
        bossArray[key].hitPoints -= 10
        if (bossArray[key].hitPoints < 0) {
          bossArray[key].jTarget.remove()
          bossArray.splice(key, 1)
          mobsOnScreen--
          bossDead = true
        }
      }

      if (mobsOnScreen === 0 && levelOneMobCount === 0) { bossLevel = true }
      if(bossLevel=== true && bossDead=== true){gameEnd = true}
    } else {
      return false
    }
  }
  function skillTwo () {
    if (mana >= 20) {
      mana -= 20
      $mpBar.text(`${mana}/200`)
      $mpBar.css('width', `${$mpBar.width() - 20}px`)
      $(".skillTwo").css('visibility', 'visible')
      setTimeout(function () {
        $(".skillTwo").css('visibility', 'hidden')
      }, 800)
      for (key in mobArray) {
        mobArray[key].hitPoints -= 20
        if (mobArray[key].hitPoints < 0) {
          mobArray[key].jTarget.remove()
          mobArray.splice(key, 1)
          mobsOnScreen--
          levelOneMobCount--
        }
      }
      for (key in bossArray) {
        bossArray[key].hitPoints -= 20
        if (bossArray[key].hitPoints < 0) {
          bossArray[key].jTarget.remove()
          bossArray.splice(key, 1)
          mobsOnScreen--
          bossDead = true
        }
      }

      if (mobsOnScreen === 0 && levelOneMobCount === 0) { bossLevel = true }
      if(bossLevel=== true && bossDead=== true){gameEnd = true}
    } else {
      return false
    }
  }
  function skillThree () {
    if (mana >= 50) {
      mana -= 50
      $mpBar.text(`${mana}/200`)
      $mpBar.css('width', `${$mpBar.width() - 50}px`)
      $('.skillThree').css('visibility', 'visible')
      setTimeout(function () {
        $('.skillThree').css('visibility', 'hidden')
      }, 800)

      for (key in mobArray) {
        mobArray[key].hitPoints -= 50
        if (mobArray[key].hitPoints < 0) {
          mobArray[key].jTarget.remove()
          mobArray.splice(key, 1)
          mobsOnScreen--
          levelOneMobCount--
        }
      }

      for (key in bossArray) {
        bossArray[key].hitPoints -= 50
        if (bossArray[key].hitPoints < 0) {
          bossArray[key].jTarget.remove()
          bossArray.splice(key, 1)
          mobsOnScreen--
          bossDead = true
        }
      }

      if (mobsOnScreen === 0 && levelOneMobCount === 0) { bossLevel = true }
      if(bossLevel=== true && bossDead=== true){gameEnd = true}
    } else {
      return false
    }
  }
})
