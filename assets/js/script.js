$(function() {

  $start = $('.start')
  $start.on('click', () => {
    updatePlayerStats()
    countDown()
    spawnIntervalEasy()
    spawnIntervalNormal()
    spawnIntervalHard()
    // spawnIntervalAlly()
    spawnIntervalAmmo()
    // spawnIntervalHealth()
    // spawnIntervalGrenade()
    event1()
    event2()
    event3()
    event4()
    // event5()
    event6()
    event7()
  })

  // player starting stats
  var playerStats = {
    health: 5,
    ammo: 25,
    grenade: 3,
  }

// GENERAL GAME FUNCTIONS ------------------------------
  var timeCount = 120;

  function updatePlayerStats () {
    setInterval(() => {
      var $playerHealth = $('.playerHealth')
      var $playerAmmo = $('.playerAmmo')
      var $playerGrenade = $('.playerGrenade')
      $playerHealth.text('Health: ' +playerStats.health)
      $playerAmmo.text('Ammo: ' +playerStats.ammo)
      $playerGrenade.text('Grenade: ' +playerStats.grenade)
    }, 200)
  }

  function countDown() {
    document.getElementsByClassName('bgm')[0].currentTime = 3;
    document.getElementsByClassName('bgm')[0].volume = 0.6;
    document.getElementsByClassName('bgm')[0].play()
    setInterval( () => {
      var $timer = $('.timer')
      timeCount = timeCount - 1
      $timer.text('Timer: ' +timeCount+ ' seconds')
      for(var i=0;i<spawnList.length;i++){
        spawnList[i].timeToExpire = spawnList[i].timeToExpire -1
        if(spawnList[i].timeToExpire <0){
          playerStats.health = playerStats.health - spawnList[i].damageWhenExpire
          console.log(playerStats.health)
          $('div').remove('#'+spawnList[i].counterLink)
          spawnList.splice(i, 1)
        }
      }
      checkVictory()
      checkLoss()
    }
    , 1000)
  }

  function checkEnemyHealth () {
    for (var i = spawnList.length -1; i > -1; i --) {
      if(spawnList[i].life <= 0) {
        $('div').remove('#'+spawnList[i].counterLink)
        if (spawnList[i].effectHealth === -1) playerStats.health = playerStats.health -1
        if (spawnList[i].effectAmmo === +10) playerStats.ammo = playerStats.ammo +10
        if (spawnList[i].effectGrenade === +1) playerStats.grenade = playerStats.grenade +1
        spawnList.splice(i, 1)
      }
    }
  }

  function checkVictory() {
    if(timeCount <= 0 && playerStats.health > 0) {
      alert('VICTORY!')
    }
  }

  function checkLoss() {
    if (playerStats.health <= 0) {
      alert('GAME OVER! Try again!')
    }
  }

// END OF GENERAL GAME FUNCTIONS -----------------------
// SPAWN FUNCTIONS -------------------------------------

  $gameScreen = $('.gameScreen')
  var spawnList = []
  var counter = 1

  // constructor for all spawns
  function Spawn(life, damageWhenExpire, effectHealth, effectAmmo, effectGrenade, timeToExpire, counterLink){
    this.life = life;
    this.damageWhenExpire = damageWhenExpire;
    this.effectHealth = effectHealth;
    this.effectAmmo = effectAmmo;
    this.effectGrenade = effectGrenade;
    this.timeToExpire = timeToExpire;
    this.counterLink = counterLink;
    // effect on score in the future
  }

  // Spawn stats (life, damageWhenExpire, effectHealth, effectAmmo, effectGrenade, timeToExpire, counterLink)
  function spawnEnemyEasy () {
    var enemyEasy = new Spawn(1, 1, 0, 0, 0, 2.5, 's'+counter)
    spawnList.push(enemyEasy)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyEasy')
    $spawn.css({
      "left": Math.floor(Math.random() * 650),
      "top": Math.floor(Math.random() * 330)
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnEnemyNormal () {
    var enemyNormal = new Spawn(2, 1, 0, 0, 0, 2.5, 's'+counter)
    spawnList.push(enemyNormal)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyNormal')
    $spawn.css({
      "left": Math.floor(Math.random() * 650),
      "top": Math.floor(Math.random() * 330)
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnEnemyHard () {
    var enemyHard = new Spawn(3, 1, 0, 0, 0, 2.5, 's'+counter)
    spawnList.push(enemyHard)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyHard')
    $spawn.css({
      "left": Math.floor(Math.random() * 650),
      "top": Math.floor(Math.random() * 330)
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnAlly () {
    var ally = new Spawn(1, 0, -1, 0, 0, 3, 's'+counter)
    spawnList.push(ally)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn ally')
    $spawn.css({
      "left": Math.floor(Math.random() * 650),
      "top": Math.floor(Math.random() * 330)
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnHealthPack () {
    var healthPack = new Spawn(1, 0, +1, 0, 0, 3, 's'+counter)
    spawnList.push(healthPack)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn healthPack')
    $spawn.css({
      "left": Math.floor(Math.random() * 650),
      "top": Math.floor(Math.random() * 330)
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnAmmoBox () {
    var ammoBox = new Spawn(1, 0, 0, +10, 0, 3, 's'+counter)
    spawnList.push(ammoBox)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn ammoBox')
    $spawn.css({
      "left": Math.floor(Math.random() * 650),
      "top": Math.floor(Math.random() * 330)
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnGrenadeRefill () {
    var grenadeRefill = new Spawn(1, 0, 0, 0, +1, 3, 's'+counter)
    spawnList.push(grenadeRefill)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn grenadeRefill')
    $spawn.css({
      "left": Math.floor(Math.random() * 650),
      "top": Math.floor(Math.random() * 330)
    })
    $gameScreen.append($spawn)
    counter++
  }

// SPAWN INTERVALS ------------------------------------

  function spawnIntervalEasy() {
    setInterval(spawnEnemyEasy, 3000)
  }

  function spawnIntervalNormal() {
    setInterval(spawnEnemyNormal, 6000)
  }

  function spawnIntervalHard () {
    setInterval(spawnEnemyHard, 10000)
  }

  function spawnIntervalAlly () {
    setInterval(spawnAlly, 8000)
  }

  function spawnIntervalAmmo () {
    setInterval(spawnAmmoBox, 8000)
  }

  function spawnIntervalHealth () {
    setInterval(spawnHealthPack, 8000)
  }

  function spawnIntervalGrenade () {
    setInterval(spawnGrenadeRefill, 8000)
  }

// END OF SPAWN FUNCTIONS -----------------------------
// EVENTS ---------------------------------------------

  function event1() {
    setTimeout(() => {
      for(var i=0; i <2; i++){
        spawnEnemyEasy()
      }
      spawnAmmoBox()
    }, 14000)
  }

  function event2() {
    setTimeout(() => {
      for(var i=0; i <3; i++){
        spawnEnemyHard()
      }
    }, 35000)
  }

  function event3() {
    setTimeout(() => {
      for(var i=0; i <300; i++){
        spawnEnemyNormal()
      }
    }, 46000)
  }

  function event4() {
    setTimeout(() => {
      for(var i=0; i <4; i++){
        spawnEnemyHard()
      }
    }, 56000)
  }

  function event5() {
    setTimeout(() => {
      for(var i=0; i <15; i++){
        spawnEnemyEasy()
      }
    }, 66000)
  }

  function event6() {
    setTimeout(() => {
      for(var i=0; i <7; i++){
        spawnEnemyEasy()
      }
      spawnAmmoBox()
      spawnGrenadeRefill()
    }, 84000)
  }

  function event7() {
    setTimeout(() => {
      for(var i=0; i <30; i++){
        spawnEnemyNormal()
      }
      spawnEnemyHard()
    }, 116000)
  }

// END OF EVENTS --------------------------------------
// CONTROLS -------------------------------------------

  function clickCheck (element) {
    for (i = 0; i < spawnList.length; i++) {
      if (spawnList[i].counterLink === element.id) {
        if (element.className === 'spawn enemyEasy' || element.className === 'spawn enemyNormal' || element.className === 'spawn enemyHard') {
          spawnList[i].life = spawnList[i].life -1
          if(spawnList[i].life === 0) {
            $('div').remove('#'+ element.id)
            spawnList.splice(i, 1)
          }
        } else {
          $('div').remove('#'+ element.id)
          for(var key in spawnList[i]) {
            if (key === 'effectHealth') playerStats.health = playerStats.health + spawnList[i][key]
            if (key === 'effectAmmo') playerStats.ammo = playerStats.ammo + spawnList[i][key]
            if (key === 'effectGrenade') playerStats.grenade = playerStats.grenade + spawnList[i][key]
          }
          spawnList.splice(i, 1)
        }
      }
    }
  }

  // left click shooting
  $gameScreen = $('.gameScreen')
  $gameScreen.on('click', function(e) {
    if(playerStats.ammo > 0) {
      var $bang = $('.bang')
      document.getElementsByClassName('bang')[0].currentTime = 1.3
      document.getElementsByClassName('bang')[0].volume = 0.6
      document.getElementsByClassName('bang')[0].pause()
      document.getElementsByClassName('bang')[0].play()
      playerStats.ammo = playerStats.ammo - 1
      clickCheck(e.target)
      console.log('ammo left ' +playerStats.ammo)
    } else {
      console.log('Out of ammo!')
    }
  })

  // right click grenades
  $gameScreen.on('contextmenu', function(ev) {
    ev.preventDefault();
    if (playerStats.grenade > 0) {
      document.getElementsByClassName('boom')[0].currentTime = 0;
      document.getElementsByClassName('boom')[0].pause()
      document.getElementsByClassName('boom')[0].play()
      playerStats.grenade = playerStats.grenade - 1
      console.log('grenades left: ' +playerStats.grenade)
      for (i=0; i<spawnList.length;i++) {
        spawnList[i].life = spawnList[i].life -2
      }
    } else {
      console.log('Out of grenades!')
    }
    checkEnemyHealth()
    updatePlayerStats()
  })

// END OF CONTROLS ------------------------------------
})
