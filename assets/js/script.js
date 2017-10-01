$(document).ready(function() {

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

  // shooting
  $gameScreen = $('.gameScreen')
  $gameScreen.on('click', () => {
    if(playerStats.ammo > 0) {
      playerStats.ammo = playerStats.ammo - 1
      console.log(playerStats.ammo)
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
      // target all enemies and deal 2 damage
      // check enemies alive?
    } else {
      console.log('Out of grenades!')
    }
  })

  // constructor for all spawns
  function Spawn(life, effectHealth, effectAmmo, effectGrenade, timeToRemoval){
    this.life = life;
    this.effectHealth = effectHealth;
    this.effectAmmo = effectAmmo;
    this.effectGrenade = effectGrenade;
    this.timeToRemoval = timeToRemoval;
    // effect on score in the future
  }

  // testing enemy spawn
  var enemyList = []
  // enemyList.forEach() // iterate the enemyList and use their key/value to affect the game.

  // spawn stats (life, effectHealth, effectAmmo, effectGrenade, timeToRemoval)
  function spawnEnemyEasy () {
    var enemyEasy = new Spawn(1, 0, 0, 0, 4)
    enemyList.push(enemyEasy)
  }
  function spawnEnemyNormal () {
    var enemyNormal = new Spawn(2, 0, 0, 0, 4)
    enemyList.push(enemyNormal)
  }
  function spawnEnemyHard () {
    var enemyHard = new Spawn(3, 0, 0, 0, 4)
    enemyList.push(enemyHard)
  }
  function spawnAlly () {
    var ally = new Spawn(1, -1, 0, 0, 3)
    enemyList.push(ally)
  }
  function spawnHealthPack () {
    var healthPack = new Spawn(1, +1, 0, 0, 3)
    enemyList.push(healthPack)
  }
  function spawnAmmoBox () {
    var ammoBox = new Spawn(1, 0, +10, 0, 3)
    enemyList.push(ammoBox)
  }
  function spawnGrenadeRefill () {
    var grenade = new Spawn(1, 0, 0, +1, 3)
    enemyList.push(grenade)
  }

  //testing spawn
  spawnEnemyEasy()
  spawnEnemyNormal()
  spawnAlly()
  spawnHealthPack()
  console.log(enemyList)
  console.log(typeof(enemyList[2].effectHealth)) // able to pull stats from spawn

  //test creating html and css using jquery for each spawn
  $gameScreen = $('.gameScreen')
  var $enemyEasy = $('<div class="enemy">')
  $enemyEasy.css({
    "height": "18px",
    "width": "18px",
    "background-color": "white",
    "border": "3.5px solid red",
    "border-radius": "999px",
    "position": "relative",
    "left": "200px", //spawn location
    "top": "200px"
  })

  $gameScreen.append($enemyEasy) //think about location of spawn? random or fixed first?

})
