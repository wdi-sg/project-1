#  My Space Invader
![Space Invader Logo](https://nebula.wsimg.com/obj/QzRGNkYxNkJERTM0M0M0MDdCMzM6YWYxNzQ2ZGRmMmVkZWFiMmY2ZDVlZjQwMzgwNTY4ZTU6Ojo6OjA=)

### Instructions How To Play

  My Space Invader Game is designed for players who likes to play a never ending game where you rack up points until the player dies. The key to the game is to survive as long as possible while getting points by shooting enemies the the longer you survive more enemies will spawn. It's game over if one of the enemy sprite touches the player sprite. You win by beating your previous score.

![Space Invader Flowchart](/assets/img/spaceinvaderflowchart.jpg)


## Assets

1. background

  ![My Background](/assets/img/bg2.png)

2. my sprites

  ![My Player](/assets/img/ship.png)

  ![My Laser](/assets/img/bullet.png)

  ![Enemy](/assets/img/enemy1.png)


## Reference

1.[Space Invader Tutorial](https://sites.google.com/site/wecanprogramcom/html-and-javascript/web-development-level2/lesson-1-setting-up-the-first-sprite)

## Code Snippet

1. Create my gameLoop function to run my game smoothly

```
var lastLoopRun = 0

function gameLoop() {
  if (new Date().getTime() - lastLoopRun > 40) {
      lastLoopRun = new Date().getTime()
    }
gameLoop()
```
* I used a lot of `console.log`


#### My Space Invader Game Pseudocode

1. Start

2. Load Game Map, Enemies, Player and Missile Sprite

3. Enemy Sprite spawns and flows from top to bottom of the page


** Game/Win or Lose Logic
1.	Player will be able to move around using “keydown” that will target the up, down, left, right, keys and spacebar of the keyboard. (spacebar will be for player to shoot missiles to the enemies)
2.	Does the missile hit/touch an enemy sprite if (Yes) destroy the enemy sprite that collides with the missile/projectile else finish missile sprite until it reaches the top of the page or the top of axis-y
3.	For each destroyed enemy sprite game will check if all enemy sprite has been destroyed if it reaches the maximum spawn number of enemy sprite and player is not dead then player wins if not continue spawning until it reaches maximum or until player is dead.
4.	Player is dead/lose when enemy sprite collides with player sprite this will result in a game over and player will have to restart game.



*Additional Ideas
1. To create additional levels with a variety of difficulty such as faster enemy sprite or enemy with different sizes/radius or higher speed of spawns
2. Add hit point value to both enemy sprites and player sprites for scoring purposes this will allow a 2 player mode where which player can get the higher score in a particular round
