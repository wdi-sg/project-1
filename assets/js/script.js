$(function() {

// SCREEN BUTTONS
  function generalStartFunctions() {
    $gameOverlay = $('.gameOverlay')
    $gameOverlay.css({
      'display': 'none'
    })
    document.getElementsByClassName('gogo')[0].volume = 0.6;
    document.getElementsByClassName('gogo')[0].play()
    updatePlayerStats()
    countDown()
  }

  $('.easyStartBtn').on('click', () => {
    generalStartFunctions()
    //stage specific settings
    $gameScreen.css({
      'background-image': 'url("./assets/img/bgAnime.jpg")'
    })
    document.getElementsByClassName('ghoulBGM')[0].volume = 1
    document.getElementsByClassName('ghoulBGM')[0].play()
    spawnIntervalEasy(4000)
    spawnIntervalAmmo(16000)
    startNorm(28000)
    event5(28000)
    speedShooting(62000)
    event6(62000)
    function startNorm(time) {
      setTimeout(() => spawnIntervalNormal(6000), time)
    }
    function speedShooting(time) {
      setTimeout(() => spawnIntervalEasy(2000), time)
      setTimeout(() => spawnIntervalAmmo(10000), time)
    }
  })

  $('.normalStartBtn').on('click', () => {
    generalStartFunctions()
    //stage specific settings
    $gameScreen.css({
      'background-image': 'url("./assets/img/nightBG.jpg")'
    })
    document.getElementsByClassName('believerBGM')[0].volume = 1
    document.getElementsByClassName('believerBGM')[0].play()
    spawnIntervalEasy(4000)
    spawnIntervalNormal(6000)
    spawnIntervalHard(11000)
    spawnIntervalAlly(8000)
    spawnIntervalAmmo(12000)
    spawnIntervalHealth(39000)
    event4(1000)
    event6(15000)
    event1(22000)
    event1(32000)
    event6(45000)
    event7(54000)
    event4(94000)
    event3(100000)
  })

  $('.hardStartBtn').on('click', () => {
    generalStartFunctions()
    // stage specific settings
    document.getElementsByClassName('deadpoolBGM')[0].currentTime = 3
    document.getElementsByClassName('deadpoolBGM')[0].volume = 0.6
    document.getElementsByClassName('deadpoolBGM')[0].play()
    spawnIntervalEasy(3000)
    spawnIntervalNormal(6000)
    spawnIntervalHard(10000)
    spawnIntervalAmmo(8000)
    spawnIntervalHealth(50000)
    spawnIntervalGrenade(50000)
    event1(14000) //14
    event2(35000) //35
    event3(46000) //46
    event2(56000) //56
    event6(84000) //84
    event7(116000) //116
  })

  $('.retryBtn').on('click', () => {
    location.reload()
  })

// END OF SCREEN BUTTONS
// GENERAL GAME FUNCTIONS ------------------------------

  var playerStats = {
    health: 5,
    ammo: 25,
    grenade: 3,
  }
  var timeCount = 120
  var playerStatsInterval
  var countDownInterval

  function updatePlayerStats () {
    playerStatsInterval = setInterval(() => {
      var $playerHealth = $('.playerHealth')
      var $playerAmmo = $('.playerAmmo')
      var $playerGrenade = $('.playerGrenade')
      $playerHealth.text('Health: ' +playerStats.health)
      $playerAmmo.text('Ammo: ' +playerStats.ammo)
      $playerGrenade.text('Grenade: ' +playerStats.grenade)
    }, 200)
  }

  function countDown() {
    countDownInterval = setInterval( () => {
      var $timer = $('.timer')
      timeCount = timeCount - 1
      $timer.text('Timer: ' +timeCount+ ' seconds')
      checkEnemyExpire()
      checkVictory()
      checkLoss()
    }
    , 1000)
  }

  function checkEnemyExpire() {
    for(var i = spawnList.length -1; i > -1; i --){
      spawnList[i].timeToExpire = spawnList[i].timeToExpire -1
      if(spawnList[i].timeToExpire <0){
        if(spawnList[i].damageWhenExpire > 0){
          playerStats.health = playerStats.health - spawnList[i].damageWhenExpire
          document.getElementsByClassName('playerDamage')[0].volume = 0.8
          document.getElementsByClassName('playerDamage')[0].pause()
          document.getElementsByClassName('playerDamage')[0].play()
        }
        $('div').remove('#'+spawnList[i].counterLink)
        spawnList.splice(i, 1)
      }
    }
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

  function generalGameEndFunctions() {
    clearInterval(playerStatsInterval)
    clearInterval(countDownInterval)
    $gameOverlay = $('.gameOverlay')
    $gameOverlay.css({
      'display': 'block'
    })
    $('.retryBtn').css({
      'display': 'block'
    })
    $('.overlayText').css({
      'display': 'block'
    })
    $('.easyStartBtn').css({
      'display': 'none'
    })
    $('.normalStartBtn').css({
      'display': 'none'
    })
    $('.hardStartBtn').css({
      'display': 'none'
    })
  }

  function checkVictory() {
    if(timeCount <= 0 && playerStats.health > 0) {
      document.getElementsByClassName('victory')[0].play()
      $('.overlayText').text("VICTORY! TERRORISTS WIN!")
      $('.retryBtn').text('TRY A DIFFERENT LEVEL')
      generalGameEndFunctions()
    }
  }

  function checkLoss() {
    if (playerStats.health <= 0) {
      $('.playerHealth').text('Health: 0')
      $('.overlayText').text("GAME OVER")
      $('.hint').text("Hint: Manage your inventory")
      document.getElementsByClassName('deadpoolBGM')[0].pause()
      document.getElementsByClassName('ghoulBGM')[0].pause()
      document.getElementsByClassName('believerBGM')[0].pause()
      document.getElementsByClassName('death')[0].play()
      generalGameEndFunctions()
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
  }

  // Spawn stats (life, damageWhenExpire, effectHealth, effectAmmo, effectGrenade, timeToExpire, counterLink)
  function spawnEnemyEasy () {
    var enemyEasy = new Spawn(1, 1, 0, 0, 0, 3, 's'+counter)
    spawnList.push(enemyEasy)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyEasy')
    $spawn.css({
      "left": Math.floor(Math.random() * 1000),
      "top": Math.floor(Math.random() * (370 - 60)) + 60
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnEnemyNormal () {
    var enemyNormal = new Spawn(2, 1, 0, 0, 0, 3, 's'+counter)
    spawnList.push(enemyNormal)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyNormal')
    $spawn.css({
      "left": Math.floor(Math.random() * 1000),
      "top": Math.floor(Math.random() * (370 - 60)) + 60
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnEnemyHard () {
    var enemyHard = new Spawn(3, 1, 0, 0, 0, 3, 's'+counter)
    spawnList.push(enemyHard)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyHard')
    $spawn.css({
      "left": Math.floor(Math.random() * 1000),
      "top": Math.floor(Math.random() * (370 - 60)) + 60
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
      "left": Math.floor(Math.random() * 1000),
      "top": Math.floor(Math.random() * (370 - 60)) + 60
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
      "left": Math.floor(Math.random() * 1000),
      "top": Math.floor(Math.random() * (370 - 60)) + 60
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
      "left": Math.floor(Math.random() * 1000),
      "top": Math.floor(Math.random() * (370 - 60)) + 60
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
      "left": Math.floor(Math.random() * 1000),
      "top": Math.floor(Math.random() * (370 - 60)) + 60
    })
    $gameScreen.append($spawn)
    counter++
  }

// SPAWN INTERVALS ------------------------------------

  function spawnIntervalEasy(interval) {
    setInterval(spawnEnemyEasy, interval)
  }

  function spawnIntervalNormal(interval) {
    setInterval(spawnEnemyNormal, interval)
  }

  function spawnIntervalHard (interval) {
    setInterval(spawnEnemyHard, interval)
  }

  function spawnIntervalAlly (interval) {
    setInterval(spawnAlly, interval)
  }

  function spawnIntervalAmmo (interval) {
    setInterval(spawnAmmoBox, interval)
  }

  function spawnIntervalHealth (interval) {
    setInterval(spawnHealthPack, interval)
  }

  function spawnIntervalGrenade (interval) {
    setInterval(spawnGrenadeRefill, interval)
  }

// END OF SPAWN FUNCTIONS -----------------------------
// EVENTS ---------------------------------------------

// 3 easy, ammo refill
  function event1(time) {
    setTimeout(() => {
      for(var i=0; i <2; i++){
        spawnEnemyEasy()
      }
      spawnAmmoBox()
    }, time)
  }

// 3 hard
  function event2(time) {
    setTimeout(() => {
      for(var i=0; i <3; i++){
        spawnEnemyHard()
      }
    }, time)
  }

// full screen grenade 300 norm
  function event3(time) {
    setTimeout(() => {
      for(var i=0; i <300; i++){
        spawnEnemyNormal()
      }
    }, time)
  } // 46 secs after

// 5 easy 5 allies
  function event4(time) {
    setTimeout(() => {
      for(var i=0; i <5; i++){
        spawnEnemyEasy()
      }
      for(var i=0; i <5; i++){
        spawnAlly()
      }
    }, time)
  }

// 10 easy
  function event5(time) {
    setTimeout(() => {
      for(var i=0; i <10; i++){
        spawnEnemyEasy()
      }
    }, time)
  }

// 7 easy, grenade and ammo refill
  function event6(time) {
    setTimeout(() => {
      for(var i=0; i <7; i++){
        spawnEnemyEasy()
      }
      spawnAmmoBox()
      spawnGrenadeRefill()
    }, time)
  }

// full screen grenade + 3 hards
  function event7(time) {
    setTimeout(() => {
      for(var i=0; i <30; i++){
        spawnEnemyNormal()
      }
      spawnEnemyHard()
      spawnEnemyHard()
      spawnEnemyHard()
    }, time)
  }

// END OF EVENTS --------------------------------------
// CONTROLS -------------------------------------------

  function clickCheck (element) {
    for (i = 0; i < spawnList.length; i++) {
      if (spawnList[i].counterLink === element.id) {
        if (spawnList[i].damageWhenExpire > 0) { // referring to enemies
          spawnList[i].life = spawnList[i].life -1
          if(spawnList[i].life === 0) {
            $('div').remove('#'+ element.id)
            spawnList.splice(i, 1)
          }
        } else { // referring to utilities
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
      document.getElementsByClassName('bang')[0].currentTime = 1.3
      document.getElementsByClassName('bang')[0].volume = 0.6
      document.getElementsByClassName('bang')[0].pause()
      document.getElementsByClassName('bang')[0].play()
      playerStats.ammo = playerStats.ammo - 1
      clickCheck(e.target)
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
      for (i=0; i<spawnList.length;i++) {
        spawnList[i].life = spawnList[i].life -2
      }
    }
    checkEnemyHealth()
  })

// END OF CONTROLS ------------------------------------
})
