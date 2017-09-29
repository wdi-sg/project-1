# Project Name Cubix : The Matching Game
<!---
Read Me Contents
-->
![Temp Logo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") (Placeholder logo)

#  Project #1: Cubix : The Matching Game

### Overview

The player is presented with a game board which is a 4 x 4 grid of squares. The goal of this game is to find matching sequences of 3 squares. Once all possible matches have been found, the game will progress to the next level. Once all levels are complete, the player wins and the game will end.

### How to play

Click on a cell in a row or column where 3 cells are of the same colour. Each 3 cells in a row will score a point.

To progress to the next level when all possible matches on the grid are found.  

Once all levels are complete, you win!

---

### Pseudo codes

* Declare a variable “grid” which is an array with 16 null values to represent a 4 x 4 grid of cells.

* Function gameStart: Generate random numbers between 1 to 3 to populate the array. 1,2,3 will represent “Red”,”Yellow”, “Blue” cells respectively. 
Function Scoring: a function to check scoring condition
		check row: 2 adjacent cells on left or right are the same as active cell -> score 1
		check column : 2 adjacent cells on top or bottom are the same as active cell - > score 1	 		change values of cells which met scoring to 0
		call function isLevelOver

* On click on a cell, run check scoring function

* Function newCells () : Loop: Check the array for any cells with value 0. Populate these with the value of the cell above it then change the value of the cell above it to 0.
If there is no cells above i.e top row, generate random numbers to populate cell

* Function isLevelOver: check if there are any matching 3s left on the grid. If yes return false else return true. Add 1 to level counter. If level counter = 7, game ends.

* Function nextLevel: Clears all values in the grid then calls function gameStart.





---

### Flowchart
![Temp Logo](/assets/flowchart.png)
