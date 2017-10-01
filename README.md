#  My Space Invader
![Space Invader Logo](https://nebula.wsimg.com/obj/QzRGNkYxNkJERTM0M0M0MDdCMzM6YWYxNzQ2ZGRmMmVkZWFiMmY2ZDVlZjQwMzgwNTY4ZTU6Ojo6OjA=)


![Space Invader Flowchart](/assets/img/spaceinvaderflowchart.jpg)


## Assets

1. background

  ![My Background](/assets/img/starsbackground.jpg "SpaceInvaderLogo")


## Reference

1.[Space Invader Tutorial](www.google.com)

## Code Snippet

```
var code =

```
* I used a lot of `console.log`


My Space Invader Game

// Start

// Load Game Map, Enemies, Player and Missile Sprite

// Enemy Sprite spawns and flows from top to bottom of the page
// I will make use of the functions I learned from the Factory of Balls Exercise to create a number of enemies that will be spawning from the game

// Game/Win or Lose Logic
1.	Player will be able to move around using “keydown” that will target the up, down, left, right, keys and spacebar of the keyboard. (spacebar will be for player to shoot missiles to the enemies)
2.	Does the missile hit/touch an enemy sprite if (Yes) destroy the enemy sprite that collides with the missile/projectile else finish missile sprite until it reaches the top of the page or the top of axis-y
3.	For each destroyed enemy sprite game will check if all enemy sprite has been destroyed if it reaches the maximum spawn number of enemy sprite and player is not dead then player wins if not continue spawning until it reaches maximum or until player is dead.
-	Player is dead/lose when enemy sprite collides with player sprite this will result in a game over and player will have to restart game.

// Game Over restart game if player wins or if player loses

*Additional Ideas
1. To create additional levels with a variety of difficulty such as faster enemy sprite or enemy with different sizes/radius or higher speed of spawns
2. Add hit point value to both enemy sprites and player sprites for scoring purposes this will allow a 2 player mode where which player can get the higher score in a particular round
