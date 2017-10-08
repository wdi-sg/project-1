$(function() {

// ---------------GENERAL GAME FUNCTIONS ---------------

  var playerStats = {
    health: 5,
    ammo: 25,
    grenade: 3,
  }
  var timeCount = 120
  var playerStatsInterval
  var countDownInterval

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

  function countDown() {
    countDownInterval = setInterval( () => {
      var $timer = $('.timer')
      timeCount = timeCount - 1
      $timer.text('Timer: ' +timeCount+ ' seconds')
      checkEnemyExpire()
      checkVictory()
      // checkLoss()
    }
    , 1000)
  }

  function updatePlayerStats () {
    var $playerHealth = $('.playerHealth')
    var $playerAmmo = $('.playerAmmo')
    var $playerGrenade = $('.playerGrenade')
    playerStatsInterval = setInterval(() => {
      $playerHealth.text('Health: ' +playerStats.health)
      $playerAmmo.text('Ammo: ' +playerStats.ammo)
      $playerGrenade.text('Grenade: ' +playerStats.grenade)
    }, 200)
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

// END OF GENERAL GAME FUNCTIONS -----------------------
// SCREEN BUTTONS

function generalStartFunctions() {
  $gameOverlay = $('.gameOverlay')
  $gameOverlay.css({
    'display': 'none'
  })
  $('.gogo')[0].volume = 0.6
  $('.gogo')[0].play()
  updatePlayerStats()
  countDown()
}

$('.easyStartBtn').on('click', () => {
  generalStartFunctions()
  //stage specific settings
  $gameScreen.css({
    'background-image': 'url("./assets/img/bgAnime.jpg")'
  })
  $('.ghoulBGM')[0].volume = 1
  $('.ghoulBGM')[0].play()
  function startNorm(time) {
    setTimeout(() => spawnIntervalNormal(6000), time)
  }
  function speedShooting(time) {
    setTimeout(() => spawnIntervalEasy(2000), time)
    setTimeout(() => spawnIntervalAmmo(10000), time)
  }
  spawnIntervalEasy(4000)
  spawnIntervalAmmo(16000)
  startNorm(28000)
  ev10Easy(28000)
  speedShooting(62000)
  ev7Easy1Ammo1Grenade(62000)
})

$('.normalStartBtn').on('click', () => {
  generalStartFunctions()
  //stage specific settings
  $gameScreen.css({
    'background-image': 'url("./assets/img/nightBG.jpg")'
  })
  $('.believerBGM')[0].volume = 1
  $('.believerBGM')[0].play()
  spawnIntervalEasy(4000)
  spawnIntervalNormal(6000)
  spawnIntervalHard(11000)
  spawnIntervalAlly(8000)
  spawnIntervalAmmo(12000)
  spawnIntervalHealth(39000)
  ev5Easy5Ally(1000)
  ev7Easy1Ammo1Grenade(15000)
  ev3Easy1Ammo(22000)
  ev3Easy1Ammo(32000)
  ev7Easy1Ammo1Grenade(45000)
  ev30Norm3Hard(54000)
  ev5Easy5Ally(94000)
  ev300Norm(100000)
})

$('.hardStartBtn').on('click', () => {
  generalStartFunctions()
  // stage specific settings
  $('.deadpoolBGM')[0].currentTime = 3
  $('.deadpoolBGM')[0].volume = 0.6
  $('.deadpoolBGM')[0].play()
  spawnIntervalEasy(3000)
  spawnIntervalNormal(6000)
  spawnIntervalHard(10000)
  spawnIntervalAmmo(8000)
  spawnIntervalHealth(50000)
  spawnIntervalGrenade(50000)
  ev3Easy1Ammo(14000)
  ev3Hard(35000)
  ev300Norm(46000)
  ev3Hard(56000)
  ev7Easy1Ammo1Grenade(84000)
  ev300Hard(93000)
  ev30Norm3Hard(105000)

})

$('.retryBtn').on('click', () => {
  location.reload()
})

// END OF SCREEN BUTTONS
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

  function spawnDivCreation(classAdded) {
    var $spawn = $('<div>')
    $gameScreen.append($spawn)
    $spawn.attr('id', "s"+counter)
    $spawn.addClass(classAdded)
    $spawn.css({
      "left": Math.floor(Math.random() * 1000),
      "top": Math.floor(Math.random() * (370 - 60)) + 60
    })
    counter++
  }

  function spawnEnemyEasy () {
    var enemy = new Spawn(1, 1, 0, 0, 0, 3, 's'+counter)
    spawnList.push(enemy)
    spawnDivCreation('spawn enemyEasy')
  }

  function spawnEnemyNormal () {
    var enemy = new Spawn(2, 1, 0, 0, 0, 3, 's'+counter)
    spawnList.push(enemy)
    spawnDivCreation('spawn enemyNormal')
  }

  function spawnEnemyHard () {
    var enemy = new Spawn(3, 1, 0, 0, 0, 3, 's'+counter)
    spawnList.push(enemy)
    spawnDivCreation('spawn enemyHard')
  }

  function spawnAlly () {
    var ally = new Spawn(1, 0, -1, 0, 0, 3, 's'+counter)
    spawnList.push(ally)
    spawnDivCreation('spawn ally')
  }

  function spawnHealthPack () {
    var health = new Spawn(1, 0, +1, 0, 0, 3, 's'+counter)
    spawnList.push(health)
    spawnDivCreation('spawn healthPack')
  }

  function spawnAmmoBox () {
    var ammoBox = new Spawn(1, 0, 0, +10, 0, 3, 's'+counter)
    spawnList.push(ammoBox)
    spawnDivCreation('spawn ammoBox')
  }

  function spawnGrenadeRefill () {
    var grenade = new Spawn(1, 0, 0, 0, +1, 3, 's'+counter)
    spawnList.push(grenade)
    spawnDivCreation('spawn grenadeRefill')
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

  function ev3Easy1Ammo(time) {
    setTimeout(() => {
      for(var i=0; i <3; i++){
        spawnEnemyEasy()
      }
      spawnAmmoBox()
    }, time)
  }

  function ev3Hard(time) {
    setTimeout(() => {
      for(var i=0; i <3; i++){
        spawnEnemyHard()
      }
    }, time)
  }

  function ev5Easy5Ally(time) {
    setTimeout(() => {
      for(var i=0; i <5; i++){
        spawnEnemyEasy()
      }
      for(var i=0; i <5; i++){
        spawnAlly()
      }
    }, time)
  }

  function ev7Easy1Ammo1Grenade(time) {
    setTimeout(() => {
      for(var i=0; i <7; i++){
        spawnEnemyEasy()
      }
      spawnAmmoBox()
      spawnGrenadeRefill()
    }, time)
  }

  function ev10Easy(time) {
    setTimeout(() => {
      for(var i=0; i <10; i++){
        spawnEnemyEasy()
      }
    }, time)
  }

  function ev30Norm3Hard(time) {
    setTimeout(() => {
      for(var i=0; i <30; i++){
        spawnEnemyNormal()
      }
      spawnEnemyHard()
      spawnEnemyHard()
      spawnEnemyHard()
    }, time)
  }

  function ev300Norm(time) {
    setTimeout(() => {
      for(var i=0; i <300; i++){
        spawnEnemyNormal()
      }
    }, time)
  }

  function ev300Hard(time) {
    setTimeout(() => {
      for(var i=0; i<300; i++) {
        spawnEnemyHard()
      }
      spawnGrenadeRefill()
    }, time)
  }

// END OF EVENTS --------------------------------------
})
