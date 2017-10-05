# Project 1: Crops and Robbers

### Introduction

1. Play as a farmer, Johnny Wicklebottom.
2. Defend your farm against the OnionFace Bandit Gang.
3. Survive them all to win.

Play the game at: https://soemn.github.io/project-1/

![Introduction](/assets/images/introScreen2.png)

##### Gameplay
The main challenge of this game is for the player to shoot the enemies while avoiding hit or getting his house damaged. The enemies keep spawning so defeat them fast to avoid being overrun!


### Controls

![Instructions](/assets/images/controls.png)

---
### Game Flow

![Gameflow](/assets/images/fightPhase.png)

---

### Technical Assets

#### Content update
The update loop uses ```window.requestAnimationFrame()``` to update the game when not paused.

The ```update``` function is used to move the characters using ```element.moveChar``` and check interaction using ```checkCollision()```. Each element behave differently upon collision.


#### Element creation
The ```generateEnemy```, ```generateBullet```, ```generateUpgrade```, ```generateCat``` functions are used to create elements using the ```Character``` class.

The ```Character``` class is used to create all game elements on the gameBoard.
```
class Character {
  constructor(
    type, //player, enemy, bullet, pet
    id, //element identifier
    sizeX, //element size
    sizeY,
    spdX, //movement speed
    spdY,
    hp, /character health
    x, //location on gameBoard
    y,
    atkSpd, //attack speed
    bulletOwner, //who shot the bullet
    aniFrame, //animation counter
    aimAngle //bullet direction
  )

  addChar()
  //adds the character element to the gameBoard

  removeChar()
  //removes the character element from the gameBoard

  moveChar()
  //moves and animates the character

  shoot()
  //Generates a bullet at the character's position
  //Shoots direction base on aimAngle.
  //All characters can shoot. Even pets and bullets.
```



##### Levels

3 Levels with varying enemy spawn rates base on a timer. Past a certain point, enemies stop spawning and once all enemies are dead, the game is won.

---

Sprites from:
- opengameart.org
- spriters-resource.com (Stardew Valley)
- charas-project.net
