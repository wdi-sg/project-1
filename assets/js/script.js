$(function() {

  // player starting stats
  var playerStats = {
    health: 5,
    ammo: 20,
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
    }, 100)
  }
  updatePlayerStats()

  var timeCount = 120; // default game starts at 120 seconds
  // every second timer -1, check victory, check loss
  function countDown() {
    setInterval( () => {
      var $timer = $('.timer')
      timeCount = timeCount - 1
      $timer.text('Timer: ' +timeCount+ ' seconds')
      checkVictory()
      checkLoss()
    }
    , 1000)
  }
  countDown()

  function checkVictory() {
    if(timeCount <= 0 && playerStats.health > 0) {
      // alert('VICTORY!')
    }
  }

  function checkLoss() {
    if (playerStats.health <= 0) {
      alert('GAME OVER!')
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
    var enemyEasy = new Spawn(1, 1, 0, 0, 0, 4, 's'+counter)
    spawnList.push(enemyEasy)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyEasy')
    $spawn.css({
      "left": Math.floor(Math.random() * 400),
      "top": Math.floor(Math.random() * 300)
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnEnemyNormal () {
    var enemyNormal = new Spawn(2, 1, 0, 0, 0, 4, 's'+counter)
    spawnList.push(enemyNormal)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyNormal')
    $spawn.css({
      "left": Math.floor(Math.random() * 400),
      "top": Math.floor(Math.random() * 300)
    })
    $gameScreen.append($spawn)
    counter++
  }

  function spawnEnemyHard () {
    var enemyHard = new Spawn(3, 1, 0, 0, 0, 4, 's'+counter)
    spawnList.push(enemyHard)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyHard')
    $spawn.css({
      "left": Math.floor(Math.random() * 400),
      "top": Math.floor(Math.random() * 300)
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
      "left": Math.floor(Math.random() * 400),
      "top": Math.floor(Math.random() * 300)
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
      "left": Math.floor(Math.random() * 400),
      "top": Math.floor(Math.random() * 300)
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
      "left": Math.floor(Math.random() * 400),
      "top": Math.floor(Math.random() * 300)
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
      "left": Math.floor(Math.random() * 400),
      "top": Math.floor(Math.random() * 300)
    })
    $gameScreen.append($spawn)
    counter++
  }

  spawnEnemyHard()
  spawnEnemyEasy()
  spawnEnemyNormal()
  spawnAlly()
  spawnEnemyEasy()
  spawnHealthPack()
  spawnGrenadeRefill()
  spawnAmmoBox()
  spawnAlly()
  spawnAlly()
  spawnAlly()
  spawnAlly()



// left click hit interaction
// console.log(spawnList)
  $spawn = $('.spawn')
  $spawn.on('click', function(){
  //  console.log($(this).attr('id'))
    for (i = 0; i < spawnList.length; i++) {
      if (spawnList[i].counterLink === $(this).attr('id')) {
        if ($(this).attr('class') === 'spawn enemyEasy' || $(this).attr('class') === 'spawn enemyNormal' || $(this).attr('class') === 'spawn enemyHard') {
          spawnList[i].life = spawnList[i].life -1
          if(spawnList[i].life === 0) {
            $('div').remove('#'+$(this).attr('id')) // this removes html on click, if class is spawn enemyEasy
            spawnList.splice(i, 1) // this removes array, apply this to enemies only
          }
        } else {
          $('div').remove('#'+$(this).attr('id'))
          for(var key in spawnList[i]) {
            if (key === 'effectHealth') playerStats.health = playerStats.health + spawnList[i][key]
            if (key === 'effectAmmo') playerStats.ammo = playerStats.ammo + spawnList[i][key]
            if (key === 'effectGrenade') playerStats.grenade = playerStats.grenade + spawnList[i][key]
          }
          spawnList.splice(i, 1)
          console.log(spawnList)
        }
      }
    }
  })

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

  // left click shooting
  $gameScreen = $('.gameScreen')
  // $enemy.on(----)
  $gameScreen.on('click', function() {
    if(playerStats.ammo > 0) {
      var $bang = $('.bang')
      document.getElementsByClassName('bang')[0].currentTime = 1.3;
      document.getElementsByClassName('bang')[0].pause()
      document.getElementsByClassName('bang')[0].play()
      playerStats.ammo = playerStats.ammo - 1
      console.log('ammo left ' +playerStats.ammo)
      // then check for hit
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
    console.log(spawnList)
    checkEnemyHealth()
    updatePlayerStats()
  })

})
