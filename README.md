# Zeerowink
<!---
Read Me Contents
-->

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### The Game Play

The objective of this game is to train your concentrating skill.

1. Player has to remember a sequence of colours before starting the game.
2. Once game starts, there will be a countdown timer depending on the difficulty of the game level.
3. Player has to follow the lines according to the sequence they remembered.
4. After going through the line, press the corresponding button to lock the input.
5. Once all the button are pressed, the game will check if your input is the same as the pattern set by the game.
6. If true, process to the next level.
7. If false, retry the current level with a different sequence set by the game.
8. Player will play through 25 levels.
9. Once completed, game will restart to default page and reset to level 1.

![](images/project1-wireframe/how-to-play1.jpg)

![](images/project1-wireframe/how-to-play2.jpg)

---

### Wireframes


<img src="images/project1-wireframe/project1-wireframe-01.jpg" alt="wireframe" width="600">
![](images/project1-wireframe/project1-wireframe-01.jpg)
1. The starting page.


![](images/project1-wireframe/project1-wireframe-02.jpg)
2. Press new game button will show a popup modal to show player the colour sequence to follow.


![](images/project1-wireframe/project1-wireframe-03.jpg)
3. Press Let's Go button to start the game. Timer will start as well. Solve the puzzle and press the corresponding button below.


![](images/project1-wireframe/project1-wireframe-04.jpg)
4. If player is unable to press the correct sequence or time is up, modal will popup telling player that they fail and prompt to retry.


![](images/project1-wireframe/project1-wireframe-05.jpg)
5. If player managed to get the sequence correct, modal popup telling them they succeed. prompt player to the next level.


![](images/project1-wireframe/project1-wireframe-06.jpg)
6. Level increase then play the game with increase difficulty.


![](images/project1-wireframe/project1-wireframe-07.jpg)
7. Finish all 25 levels then modal will popup telling player they completed the game. Modal will contain code to Bonus Game.

---

### Puzzle Design

![](images/project1-9.jpg)

![](images/project1-17.jpg)

The game level difficulty increases every 3 level. From solid lines to dotted lines. From lines that are wide apart to lines that are close to each other.

---

### Functions

restart()
* when game finish, the restart button will be fired.
* reset variables and set back to game default.


randomInPlay()
* main for playing.
* get game timing, random number, get a random combination, set the sequence base on the combination and update the triangle image base on the combination, update the modal.


checkForWin(inPlay, player) {
* check to see if they are all matching and also clear the set interval.
* base on condition return true or false.

---

### Event Listeners

$('.btn-new-game').on('click', function() {});
* click new game button - image change, random sequence, show modal, remove new game button, show timer, show level and sequence to play.


$('.lets-go-btn').on('click', function() {});
* timer feature bind to the Let's Go button.
* countdown timer start till the time runs out then call for modal retry.


$('.btn').on('click', function() {});
* adding click event to the 3 button to register the player input.
* check when all three button are press in sequence.
* base on checkForWin return set the attribute to fire which modal - to retry, to next level or end game.


$('.next-or-retry').on('click', function() {});
* either you move on to the next level, retry the current level or game end.


$('#form').on('submit', function(e) {});
* add on game, on submit code, check if same as code defined. if same, form disappear and link to bonus game appear.

---

### Add On Game

# UnderLimit

### The Game Play

The objective of the game is to collect the colours in sequence within the time limit.

1. Player has to remember a sequence of colours before starting the game.
2. Once game starts, there will be a countdown timer depending on the difficulty of the game level.
3. Player has use the keyboard arrow button the navigate the maze.
4. Collecting the colours in sequence.
5. Once all the colours are collected, the game will check if your input is the same as the pattern set by the game.
6. If true, process to the next level.
7. If false, retry the current level with a different sequence set by the game.
8. Player will play through 15 levels.
9. Once completed, game will restart to default page and restart at level 1.

![](images/project1-wireframe/how-to-play3.jpg)

![](images/project1-wireframe/how-to-play4.jpg)

---

### Maze Design

![](images/project1-wireframe/game-design.jpg)

Constructed base of div. Its a 13 x 13 grid. A portion of the (x, y) axis will be block wall while the other will be paths for player to travel.

---

### Functions to setup the game board

generateGrid()
* create grids for the game board
* looping to check for particular sequence to be created with block or road


generateSequence()
* create random numbers for the game and push to sequence array
* loading the game level to set the length of the array


function generateSpots() {
* generate random spot for the colours around the 8 grids


generateSequenceColor()
* base on generateSequence(), get the number to point to the colour

---

### Functions for key directions

settingOfCoordinate(newX, newY, oldX, oldY) {
* set coordinate for old and new (x,y).
* old path becomes previous
* new path becomes active
* check if on colour spot


leftKey()
* check if move can go left
* not into block or out of border
* check if player go to restart area  


upKey()
* check if move can go up
* not into block or out of border
* check if player go to restart area


rightKey()
* if move can go right
* not into block or out of border
* check if player go to restart area


downKey()
* check if move can go down
* not into block or out of border
* check if player go to restart area

---

### functions for clear and restart

clearStage()
* prepare game for retry or next level


restart()
* restart to starting page

---

### Functions for block interval and winning condition

randomObs()
* generate obstacles block on random coordinate


checkForWin()
* passing of true or false. check if array for game and player is the same


winOrLose(winOrLose)
* depend on checkForWin(), game retry, game next level or end game for modal

---

### Event Listeners

$('.new-game').on('click', function() {
* create the game maze, show or hide certain things


$('.next-or-retry').on('click', function() {
* base on winOrLose(), player will be clicking on next level, retry or game end


$('.lets-go-btn').on('click', function(e) {
*  get timer from gameSource and set countdown timer
*  base on level set the interval for obstacles


$(document).on('keydown', function(e) {
* sense the keydown of the arrow button
* if player and game array same length, call winOrLose()
colour
