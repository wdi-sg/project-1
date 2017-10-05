# Project 1: Crops and Robbers

### Introduction

1. Play as a farmer, Johnny Wicklebottom.
2. Defend your farm against the OnionFace Bandit Gang.
3. Survive them all to win.

Play the game at: https://soemn.github.io/project-1/

![Introduction](/assets/images/introScreen2.png)

##### Gameplay
Shoot the enemies while avoiding hit or getting your house damaged. The enemies keep spawning so defeat them fast and avoid being overrun! You will lose if the enemies destroy your house or kills you.


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


##### Game Design Log

###### First Idea:
Create a resource management game, where the player has to plant crops and then defend his crops from the enemies. Earning gold at the end of each level which can be used to buy seeds or defence for the next level.

###### Idea Testing:
The fighting mechanic was tested first as it was more complicated than the resource management component. While testing the fighting mechanic, it was found to be quite fun and the game was then decided to be simplified to focus only on the fighting aspect.

###### Detailed Design
Originally functions were used to create ```objects``` without the use of ```Class```. After refactoring the code to use a ```Class``` to define all characters, new entities and mechanics could be created quickly.

###### Juicing
Pets and sounds were added. Improved sprites.

###### To do:
1. Dog enemy (does not shoot, chases player and attacks)
2. Additional sounds for getting hit
3. Improvement to level design and difficulty adjustment
4. Reduce the use of `setInterval` and improve game performance


---

Sprites from:
- opengameart.org
- spriters-resource.com (Stardew Valley)
- charas-project.net
