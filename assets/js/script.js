$(function() {

  // player starting stats
  var playerStats = {
    health: 5,
    ammo: 20,
    grenade: 3
  }

  var timer = 120; // default game starts at 120 seconds

  function checkVictory() {
    if(timer <= 0 && playerStats.health > 0) {
      // alert('VICTORY!')
    }
  }

  function checkLoss() {
    if (playerStats.health <= 0) {
      alert('GAME OVER!')
    }
  }

  // every second timer -1, check victory, check loss
  function countDown() {
    setInterval( () => {
      timer = timer - 1
      // console.log(timer)
      checkVictory()
      checkLoss()
    }
    , 1000)
  }
  countDown()





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

  spawnEnemyHard()
  spawnEnemyEasy()
  spawnEnemyNormal()
  spawnAlly()
  spawnEnemyEasy()
  spawnHealthPack()


// left click hit interaction
// console.log(spawnList)
  $spawn = $('.spawn')
  $spawn.on('click', function(){
  //  console.log($(this).attr('id'))
    for (i=0; i<spawnList.length;i++) {
      if (spawnList[i].counterLink === $(this).attr('id')) {
        if ($(this).attr('class') === 'spawn enemyEasy' || $(this).attr('class') === 'spawn enemyNormal' || $(this).attr('class') === 'spawn enemyHard') {
          spawnList[i].life = spawnList[i].life -1
          if(spawnList[i].life === 0) {
            $('div').remove('#'+$(this).attr('id')) // this removes html on click, if class is spawn enemyEasy
            spawnList.splice(i, 1) // this removes array, apply this to enemies only
          }
      // PROBLEM: removes enemies immediately, doesnt take into account life // start with easy enemy first
        } else {
          $('div').remove('#'+$(this).attr('id'))
          for(var key in spawnList[i]) {
            if (key === 'effectHealth') playerStats.health = playerStats.health + spawnList[i][key]
            if (key === 'effectAmmo') playerStats.ammo = playerStats.ammo + spawnList[i][key]
            if (key === 'effectGrenade') playerStats.grenade = playerStats.grenade + spawnList[i][key]
          }
        }
      }
    }
  })

 // spawn stats (life, damageWhenExpire, effectHealth, effectAmmo, effectGrenade, timeToExpire, counterLink)

  function spawnAmmoBox () {
    var ammoBox = new Spawn(1, 0, 0, +10, 0, 3, 's'+counter)
    spawnList.push(ammoBox)
    counter++
  }
  function spawnGrenadeRefill () {
    var grenade = new Spawn(1, 0, 0, 0, +1, 3, 's'+counter)
    spawnList.push(grenade)
    counter++
  }

  function checkEnemyHealth () {
    for (var i = spawnList.length -1; i > -1; i --) {
      if(spawnList[i].life <= 0) {
        $('div').remove('#'+spawnList[i].counterLink)
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
  })

})
