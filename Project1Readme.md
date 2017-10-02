Mummy Maze
=========
You are trapped in a chamber with a mummy. The mummy seemed to follow around the chamber with your every single move. There are barriers within the chamber which can temporary block the mummy's moves.

 Your quest is to be able to exit the room before the mummy reaches you. Quick! Your Time is running out!


Basic Layout
------------
![Basic Layout](/img/basicLayout.jpeg "Grid Layout")

* 6X6 grid layout
* Walls as barriers
* 1 Player
* 1 Mummy
* Exit


### Sample Game Layout
![Sample Layout](/img/sampleLayout.jpeg "Sample Level")

Instructions
---------
### Goal
Reach the exit without being caught by the mummy

### Game Play
1. Player Starts First
2. Player gets to move by 1 grid in any direction
![Player Moves](/img/playerMoves.jpeg "Player Moves")
3. Each move the player makes, the mummy moves towards the player by 2 moves towards the player
![Mummy Moves](/img/mummyMoves.jpeg "Mummy Moves")
4. The walls prevents the mummy from moving towards the player while the player moves towards the exit
![blockage & exit](/img/barriermoves.jpeg "Blockage and Exit")
5. Once the player gets to the exit, the play is completed, Player proceeds to the next level.

### How does the mummy moves?

1. If the mummy can move horizontally (side to side) to get closer to the player, it will first make a horizontal move
2. Else, the mummy will make a vertical move (up or down) to get closer to the player
3. if the mummy is unable to make any move due to the barriers, it will remain at the same spot.

You can "trick" the mummy into walking into the barriers to buy you some "moves" to get to the exit.

Building the Game
-----------------
### Flow Chart of the Game Logic
![FlowChart](/img/flowChart.jpeg "Game Logic")


### Placing the Barriers on the board
##### Representation of Barriers
Error in no.14
![FlowChart](/img/tileRepresentation.jpg "Game Logic")

##### Sample Representation of the Board Layout using a 2D Array
Empty Board (no barrier)
```javascript
var map = [
[5,1,1,1,1,6],
[4,0,0,0,0,2],
[4,0,0,0,0,2],
[4,0,0,0,0,2],
[4,0,0,0,0,2],
[7,3,3,3,3,8]]
```
Sample Level Board (with Barrier)
```javascript
var map = [
[5,1,9,1,1,6],
[4,0,6,0,3,2],
[10,4,0,2,5,2],
[4,3,0,0,3,2],
[4,6,4,2,5,0],
[7,3,3,3,3,8]]
```
### Checking Movement

###### left or Right
Mummy (x-position) - Player(x-position) = positive (left)
Mummy (x-position) - Player(x-position) = negative (right)

###### Up or Down
Mummy (y-position) - Player(y-position) = positive (up)
Mummy (y-position) - Player(y-position) = negative (down)

### Checking Exit
Tiles with Exit will be given a identification class

```HTML
<div class="exit left"></div>
<div class="exit right"></div>
<div class="exit top"></div>
<div class="exit bottom"></div>
```
