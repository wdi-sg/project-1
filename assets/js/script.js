$(function() {

  document.getElementsByClassName('bgm')[0].currentTime = 3;
  document.getElementsByClassName('bgm')[0].volume = 0.6;
  document.getElementsByClassName('bgm')[0].play()

  // player starting stats
  var playerStats = {
    health: 5,
    ammo: 25,
    grenade: 3,
  }

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
  updatePlayerStats()

  var timeCount = 120; // default game starts at 120 seconds
  // every second timer -1, check victory, check loss
  function countDown() {
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
  countDown()

  function checkVictory() {
    if(timeCount <= 0 && playerStats.health > 0) {
      alert('VICTORY!')
    }
  }

  function checkLoss() {
    if (playerStats.health <= 0) {
      alert('GAME OVER! AHAHAHAHHAHAHAHAHAHAHHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHHAHAHAHAHAHHAHAHAHAHAHAHHAHAHAHA try again')
    }
  }

  // constructor for all spawns
  function Spawn(life, damageWhenExpire, effectHealth, effectAmmo, effectGrenade, timeToExpire, counterLink){
    this.life = life;
    this.damageWhenExpire = damageWhenExpire;
    this.effectHealth = effectHealth;
    this.effectAmmo = effectAmmo;
    this.effectGrenade = effectGrenade;
    this.timeToExpire = timeToExpire;
    this.counterLink = counterLink;
    // this.counterValue = counter // to match html circle to data
    // effect on score in the future
  }


  // spawnList.forEach() // iterate the spawnList and use their key/value to affect the game.
  // spawn stats (life, effectHealth, effectAmmo, effectGrenade, timeToExpire, counterLink)
  var spawnList = []
  var counter = 1
  $gameScreen = $('.gameScreen')

// Spawn stats (life, damageWhenExpire, effectHealth, effectAmmo, effectGrenade, timeToExpire, counterLink)
// Spawn functions
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

  // spawn intervals

  function spawnIntervalEasy() {
    setInterval(spawnEnemyEasy, 3000)
  }
  spawnIntervalEasy()

  function spawnIntervalNormal() {
    setInterval(spawnEnemyNormal, 6000)
  }
  spawnIntervalNormal()

  function spawnIntervalHard () {
    setInterval(spawnEnemyHard, 10000)
  }
  spawnIntervalHard()

  function spawnIntervalAlly () {
    setInterval(spawnAlly, 8000)
  }
  // spawnIntervalAlly()

  function spawnIntervalAmmo () {
    setInterval(spawnAmmoBox, 8000)
  }
  spawnIntervalAmmo()

  function spawnIntervalHealth () {
    setInterval(spawnHealthPack, 8000)
  }
  // spawnIntervalHealth()

  function spawnIntervalGrenade () {
    setInterval(spawnGrenadeRefill, 8000)
  }
  // spawnIntervalGrenade()

  function event1() {
    setTimeout(() => {
      for(var i=0; i <300; i++){
        spawnEnemyNormal()
      }
    }, 46000)
  }
  event1()

  function event2() {
    setTimeout(() => {
      for(var i=0; i <3; i++){
        spawnEnemyHard()
      }
    }, 35000)
  }
  event2()

  function event3() {
    setTimeout(() => {
      for(var i=0; i <4; i++){
        spawnEnemyHard()
      }
    }, 56000)
  }
  event3()

  function event4() {
    setTimeout(() => {
      for(var i=0; i <15; i++){
        spawnEnemyEasy()
      }
    }, 66000)
  }
  event4()

  function event5() {
    setTimeout(() => {
      for(var i=0; i <3; i++){
        spawnEnemyEasy()
      }
    }, 14000)
    spawnAmmoBox
  }
  event5()

  function event6() {
    setTimeout(() => {
      for(var i=0; i <3; i++){
        spawnEnemyEasy()
      }
    }, 84000)
    spawnAmmoBox
    spawnGrenadeRefill
  }
  event5()

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


  // left click shooting - ammo only
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


  function clickCheck (element) {
    for (i = 0; i < spawnList.length; i++) {
      if (spawnList[i].counterLink === element.id) {
        if (element.className === 'spawn enemyEasy' || element.className === 'spawn enemyNormal' || element.className === 'spawn enemyHard') {
          spawnList[i].life = spawnList[i].life -1
          if(spawnList[i].life === 0) {
            $('div').remove('#'+ element.id) // this removes html on click, if class is spawn enemyEasy
            spawnList.splice(i, 1) // this removes array, apply this to enemies only
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
    // console.log(spawnList)
    checkEnemyHealth()
    updatePlayerStats()
  })

})
