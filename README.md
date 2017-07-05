<!---
Read Me Contents
-->
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Build-A-Burger

Live Site
---
https://rebeccatay92.github.io/project-1/

Concept & Game Mechanics
---
Attempting to clone a Burger Maker game (http://demonisblack.com/code/burgermaker/game/) using vanilla JS.

Players are given a 90 sec time limit to create burgers according to a list.

Players will click on the correct ingredients to add them to the burger.

The game ends when time runs out.

Layout
---
!["Game Layout"](https://github.com/rebeccatay92/project-1/blob/master/screenshot.png)
!["Start Game Overlay"](https://github.com/rebeccatay92/project-1/blob/master/startGameOverlay.png)
!["End Game Overlay"](https://github.com/rebeccatay92/project-1/blob/master/endGameOverlay.png)

Functions
---
**startGame ()**
* Starts countdown()
* Starts timeout for gameOver()
* Sets value for gameStarted to true

**countdown ()**
* Counts down from timeLeft of 90
* Updates text in timer

**gameOver ()**
* Expands initially hidden endGameOverlay
* Allows for restart by reloading page

**randomizer ()**
* Picks a random ingredient out of an array of possible ingredients

**newOrder ()**
* Uses the randomizer to create an array of random ingredients
* Length of array increases as level increases
* Adds the top bun to the last position

**generateList ()**
* Calls newOrder() to create a new array of ingredients
* Generates text in orderList matching that of newOrder()

**checkForMatch ()**
* Checks if clicked ingredient matches the current ingredient needed

**serve ()**
* Clears the playArea of ingredients
* Clears the orderList of text
* Increase score by 1, increases level by 1
* Reset ingredientCounter
* Call generateList() to generate a new level

**clearPlayArea ()**
* Removes all ingredients from playArea

**clearList ()**
* Removes text from orderList

**increaseScore ()**
* Increases text of scoreBox by 1
* Increases level by 1

Extensions / Unsolved Issues
---
1. Randomizing ingredients sometimes causes 3/4 of the same to stack together. Replace array[el] fs element is repeated too many times?
2. Maximum length of order is 16 ingredients. Enable automatic scrolling downward if order exceeds height of the order list?
3. Switch from fixed pixel values for width/height to % to allow resizing of window
4. Use opacity % instead of height:0px to collapse/expand overlay panels.
5. Onion does not stack as nicely compared to other ingredients. Tweak positioning or negative margins.

Coded With
---
HTML
CSS
Javascript

Sources
---
Vector art obtained from FreePik (www.freepik.com)
