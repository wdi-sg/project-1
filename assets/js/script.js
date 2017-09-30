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
      alert('VICTORY!')
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
  function Spawn(life, effectHealth, effectAmmo, effectGrenade, timeToRemoval){
    this.life = life;
    this.effectHealth = effectHealth;
    this.effectAmmo = effectAmmo;
    this.effectGrenade = effectGrenade;
    this.timeToRemoval = timeToRemoval;
  }

  // spawn stats (life, effectHealth, effectAmmo, effectGrenade, timeToRemoval)
  // var enemyEasy = new Spawn(1, 0, 0, 0, 5)
  // var enemyNormal = new Spawn(2, 0, 0, 0, 5)
  // var enemyHard = new Spawn (3, 0, 0, 0, 5)
  // var enemyFast = new Spawn (1, 0, 0, 0, 3)
  // var ally = new Spawn (1, -1, 0, 0, 5)
  // var healthPack = new Spawn(1, +1, 0, 0, 3)
  // var ammoBox = new Spawn(1, 0, +10, 0, 3)
  // var grenadeRefill = new Spawn(1, 0, 0, +1, 3)

  //
  // function spawnTest(){
  //   setInterval(spawnEnemy1, 2000)
  // }
  //
  // spawnTest()
})
