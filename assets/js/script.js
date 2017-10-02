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

  // left click shooting
  $gameScreen = $('.gameScreen')
  // $enemy.on(----)
  $gameScreen.on('click', function() {
    if(playerStats.ammo > 0) {
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
      playerStats.grenade = playerStats.grenade - 1
      console.log(playerStats.grenade)
      // target all enemies and deal 2 damage // maybe target all spawns?
      // check enemies alive?
    } else {
      console.log('Out of grenades!')
    }
  })

  // constructor for all spawns
  function Spawn(life, damageWhenExpire, effectHealth, effectAmmo, effectGrenade, timeToExpire, counterLink){
    this.life = life;
    this.damangeWhenExpire = damageWhenExpire;
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

// PROTOTYPE for spawn enemy
  function spawnEnemyEasy () {
    var enemyEasy = new Spawn(1, 1, 0, 0, 0, 4, 's'+counter)
    spawnList.push(enemyEasy)
    var $spawn = $('<div>')
    $spawn.attr('id', "s"+counter)
    $spawn.addClass('spawn enemyEasy')
  //different spawn points, able to randomise easier. Make into a function?
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

// END PROTOTYPE // array item has counterLink with same value as html id.
console.log(spawnList)
// left click hit interaction
// console.log(spawnList)
  $spawn = $('.spawn')
  $spawn.on('click', function(){
  //  console.log($(this).attr('id'))
    for (i=0; i<spawnList.length;i++) {
      if (spawnList[i].counterLink === $(this).attr('id')) {
        if ($(this).attr('class') === 'spawn enemyEasy' || $(this).attr('class') === 'spawn enemyNormal' || $(this).attr('class') === 'spawn enemyHard') {
          $('div').remove('#'+$(this).attr('id')) // this removes html on click, if class is spawn enemyEasy
          spawnList.splice(i, 1) // this removes array, apply this to enemies only
      // PROBLEM: removes enemies immediately, doesnt take into account life
        } else {
          $('div').remove('#'+$(this).attr('id'))
        //iterate object properties and apply to player stats
        }
      }
    }
  })



 // spawn stats (life, damageWhenExpire, effectHealth, effectAmmo, effectGrenade, timeToExpire, counterLink)
  function spawnEnemyNormal () {
    var enemyNormal = new Spawn(2, 1, 0, 0, 0, 4, 's'+counter)
    spawnList.push(enemyNormal)
    counter++
  }
  function spawnEnemyHard () {
    var enemyHard = new Spawn(3, 1, 0, 0, 0, 4, 's'+counter)
    spawnList.push(enemyHard)
    counter++
  }
  function spawnAlly () {
    var ally = new Spawn(1, 0, -1, 0, 0, 3, 's'+counter)
    spawnList.push(ally)
    counter++
  }
  function spawnHealthPack () {
    var healthPack = new Spawn(1, 0, +1, 0, 0, 3, 's'+counter)
    spawnList.push(healthPack)
    counter++
  }
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



})
