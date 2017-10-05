# Project 1: Maplestory XII
### Overview

Game is based on **Maplestory**, a Mass Multiplayer Online Role Playing Game (MMORPG)

[Online Version](https://josephpung.github.io/project-1/)
## Controls
- Left and Right arrow keys to move horizontally
- Space to jump
- "C" to attack
- "D" for skill 1
- "X" for skill 2
- "Z" for skill 3

### Instructions

Control your character and avoid dying to the mobs spawned, your character has a mana pool as well as a hitpoint pool. If your mana pool is depleted, you will not be able to use any skills till it regenerates. Once your hitpoint pool reaches zero, you die and the game ends.

Kill enough mobs and the boss awaits you!


### Idea Path
Drafting of idea and concept came about as I wanted to try and challenge myself to duplicate the play area and game code of Maplestory. I wanted to recreate a single map with all platforms as well as logical functions ( projectiles, knock-back, jump)

###### Phase 1
Drafted a playing field and added the necessary main elements of the game. Tested linking of movement to key presses and automation of Mob path.

##### Phase 2
Testing and added the projectile logic, idea starts to seem a bit far fetched due to the fact that it will be difficult to control so many mobs and bullets at the same time since the mobs are continuously moving and had individual hit points.

###### Phase 3
Reduced idea to just spawning mobs on a single map and using one bullet to minimize coding load. Decided to add hitpoints and mana tracking for the player to make things more interactive.

Recoded the spawning function with help from soe min and solved the issue surrounding the different mob's with different and varying hit points.

Added player skills as well.

###### Final Phase
Added CSS styling as well as boss functions and restart functions. Game is stable but still buggy.

## Game Logic
Mob and Boss spawns are controlled by classes pre set to contain the necessary information like their damage and hit points. Boss is spawned and linked to the DOM via a jquery target. That on its own allows me to control the object that is spawned to the smallest of changes.
```
class Boss {  // Class to spawn boss

  constructor (id) {
    this.id = id
    this.hitPoints = 500
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
      ***
      })
    }
  }

  addBoss () {
    var location = Math.floor(Math.random() * 380)
    var spawnMob = $('<div>')
    spawnMob.attr('id', this.id)

    $('.topContainer').append(spawnMob)
    this.jTarget = $('body').find(`#${this.id}`)
    ****
    })
  }

}
```

- The bullet is set to travel across the screen and check for collisions along the way and reduce the mob's hitpoints if a collision is detected, any changes in the amount of mobs is also registered and the game is ended/ moved on to the next level as necessary.
```

  function bulletCollisionCheck (obj1, obj2) { //bullet collision check
    if (blueX < redX + obj1.width() &&
        blueX + obj2.jTarget.width() > redX &&
        blueY < redX + obj1.height() &&
        obj2.jTarget.height() + blueY > redY) {
      obj2.hitPoints -= 1
      $bullet.css('left', $playPos.left)
      $bullet.css('top', '620px')
      if (obj2.hitPoints === 0) {
        obj2.jTarget.remove()
        //////
        }
      }
      if (mobsOnScreen === 0 && levelOneMobCount === 0) { //if mobs are dead, spawn boss
        bossLevel = true
      }
      if (bossLevel === true && bossDead === true) {   //if boss is dead, end game
        gameEnd = true
      }
      return true
    } else { return false }
  }
```
- Skills are also added to add variety to the playstyle as per the original game. Each skills has different damage results as well as mana costs. The mama required to cast each skill is set to regenerate automatically.
```
function skillOne () {    // small damage skill
  if (mana >= 10) {
    mana -= 10
    $mpBar.text(`${mana}/200`)
    $mpBar.css('width', `${$mpBar.width() - 10}px`)
    $firstSkillDiv.css('visibility', 'visible') // show skill animation and hide after 800 ms
    setTimeout(function () {
      $firstSkillDiv.css('visibility', 'hidden')
    }, 800)

    for (key in mobArray) {     // test for mobs
///////////////-
      }
    }
    for (key in bossArray) {      // test for boss
      bossArray[key].hitPoints -= 10
      if (bossArray[key].hitPoints < 0) {
      //////////
      }
    }
//////////
  }
}
```

The game ends when either the player dies or all the mobs are killed as well as the boss.

### Log
Currently working on making the initial base fighting area and the main player
* 1/10/17 - Added jump capability and changed mob movement to follow player instead of preset axis
* 2/10/17 - Changed CSS styles and edit to fix axis differences
* 3/10/17 - Added health bar and player hit points
* 4/10/17 - Added mana regen and mana bar, replaced manual spawn with class based spawning and added various functions to check for game status.
* 5/10/17 - Added boss and 2 more skills to character, edited main skill and attack functions to accomodate to boss feature

### Image Log
**29/10/17 (Initial Draft Frame)**
![](/assets/images/old.gif)
**4/10/17**
![](/assets/images/v2.png)

### **BUG REPORT**
  * Jump is still choppy, unable to remove 1 sec delay from continuous button pressing.
  * Collision detection for far left side of the map working properly (0-200px)
  * Mobs occasionally not dying, pressing skill button kills them and ends bug


### Flowchart

![](/assets/images/flowchart.jpg)

## Features To Be Added
1) Proper Jump function
2) More bosses with damage on impact, allowing them to jump to do the damage when they land
3) Adding platforms and ladders for players to climb onto
4) Multi level spawning once platform is available.
5) Improve accuracy and recode collision detection

---
## References
* Stackoverflow
* Logo and Text Images - https://textcraft.net/
* Sprites - Google Images
* Many thanks to the TA's for debugging and Soe Min for his explanation on linking the dom to my object
