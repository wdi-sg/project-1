# Follow the Trail!
<!---
Read Me Contents
-->

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Getting Started

**Link to Game:**

<https://chongct.github.io/project-1/>

**Instructions**

A move on a grid will increase its value by 1.

Move up, down, left or right onto neighbouring grids to match the given Computer Grid.

The starting grid is shown below and the player will control the Player Grid on the **left** to match the given Computer Grid on the **right**.

![alt text](https://github.com/chongct/project-1/blob/master/images/instructions-1.png "Starting Grid")

![alt text](https://github.com/chongct/project-1/blob/master/images/instructions-animate.gif "Demo")

---

### Game Play

A 5 by 5 grid on the **left** is generated for the Player. Another 5 by 5 grid on the **right** is computer generated with random numbers generated at random positions on the grid. The Player is required to match this computer generated grid to proceed to the next level.

Level of difficulty will increase as the player completes each level. The random numbers generated will increase with the level of difficulty.

For example, at level 4, 4 moves are needed to complete the game while at level 100, 100 moves are needed to complete the game.

---

### Code Structure

1. Computer and Player grids are drawn and appears when webpage is loaded.

Function `drawGrid(container, side)` generates a 5 by 5 grid to display either the Computer or Player grid.

Function `colourGrid(side)` applies a conditional formatting with different colour codes for different numbers contained within the grids.

**Code to Generate Computer Grid**

2. Generate a random direction.

Function `directionCheck(current, input)` assigns numbers 0 to 3 to a specific direction. A formula is used to calculate the next grid's ID for a specific direction. The function takes the current grid's ID and random generated number as arguments for the function.

3. Ensure that the moves made stay within the grid.

Function `directionCheck(current, input)` validates that the moves made stay within the grid as well.

4. Apply the random direction for a specified number of iterations.

Function `comMoves(current, iterations)` takes the current grid's ID as an argument and iterates for a number of times as specified as an argument. A `for` loop is used to achieve this.

**Code needed for Player Grid**

5. Add event handler for Player Grid when a move is made.

Function `userMoves(current, userKey)` takes the current grid's ID as an argument and based on the user key entered, make a move on the Player grid.

6. Check for win.

Function `gameComplete()` matches all 25 grids of the Player grid with the given Computer grid to check if the game is complete, before proceeding to the next level.

**Additional Game Features**

7. Next stage feature.

Global variable `stage` is used to keep track of the stage which the Player is at and is used as an argument in the `comMoves(current, iterations)` function.

8. Undo move feature.

Global array `playerMove` is used to keep track of the moves which the Player has made to easily backtrack.

---

### Built With

* HTML, CSS and JavaScript
* jQuery

---

### Areas to Improve on

* Mobile interface swiping feature

---

### Acknowledgments

* JavaScript Kit
* Family and friends for the inspirations and game testing
