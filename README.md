# Project 1: Crops and Robbers

### Introduction

**Bandits** are trying to steal your harvest. You and your cow are getting distressed. Luckily for you, milk isn't the only thing you deliver. Defend your crop and **deliver sweet justice**.

1. Play as a farmer, Johnny Wicklebottom.
2. Defend your farm against the OnionFace Bandit Gang.
3. Survive them all to win.

![Introduction](/assets/images/introScreen2.png)




##### Gameplay
The main challenge of this game is for the player to shoot the enemies while avoiding hit or getting his house damaged. The enemies keep spawning so defeat them fast to avoid beign overrun!


### Controls

![Instructions](/assets/images/controls.png)

---
### Game Flow

![Gameflow](/assets/images/fightPhase.png)
---

### Technical Assets

The update loop uses ```window.requestAnimationFrame()``` to update the game when not paused.

The ```Character``` class is used to create all game elements on the gameBoard.
```
class Character {
  constructor(
    type, //player, enemy, bullet, pet
    id,
    sizeX,
    sizeY,
    spdX, //movement speed
    spdY,
    hp,
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
  //Ghoots it to the aimAngle.
  //All characters can shoot. Even pets and bullets.
```

The ```generateEnemy```, ```generateBullet```, ```generateUpgrade```, ```generateCat``` functions are used to create and call the ```Character```. class

##### Levels

3 Levels with varying enemy spawn rates base on a timer.

---

Sprites from:
- opengameart.org
- spriters-resource.com
- charas-project.net
