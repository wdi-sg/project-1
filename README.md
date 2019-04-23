# ![](./documentation/ga_logo.svg) Project #1: Color Spill!

<!--![](./documentation/header-hd.gif)--> 
<p align="center"><img src="./documentation/header-hd.gif"/></p>

This game is inspired by the simple but yet addictive smartphone game **Flood-It!**. Along with Tetris and Minesweeper, Flood-It! is among the hardest mathematical problems to solve, being demonstrated to be “NP-hard”, i.e., *non-deterministic polynomial-time hard*. Anyone who, rather than by brute-force, finds a direct procedure to solve this game stands to win a million-dollar Millennium Prize from the Clay Mathematics Institute.

## Where to Play

Play [Color Spill!](https://limjiechao.github.io/project-1/)

## How to Play

The objective of this is to turn a canvas full of squares in multiple colors into one single color in a limited number of moves. The player chooses which adjacent squares to merge with by picking their color. By looking beyond the adjacent squares, the player can take over more squares every move and fill out the canvas with the same color before running out of moves.

## Game UI

<!--![](./documentation/click_boxes.gif "Pick the next color by clicking or tapping on a square") -->
<p align="center"><img src="./documentation/click_boxes.gif"/></p>

Pick the next fill color either by clicking or tapping on any square in the canvas with the next color.

<!--![](./documentation/click_palette.gif "Pick the next color by clicking or tapping any color in the palette")-->
<p align="center"><img src="./documentation/click_palette.gif"/></p>

Alternatively, click or tap on the next color in the palette below the canvas.

<!--![](./documentation/restart.gif "Click or tap Restart button to start a new game")-->
<p align="center"><img src="./documentation/restart.gif"/></p>

A new round can be started any time in the game by clicking or tapping on the *Restart* button at the top right corner.

<!--![](https://github.com/limjiechao/project-1/blob/master/documentation/options.gif "Click or tap Options to adjust the game")-->
<p align="center"><img src="./documentation/options.gif"/></p>

The player can also adjust the following by tapping the *Options* button at the top right corner:

- level of difficulty,
- size of the canvas, and
- the color scheme.

Upon tapping *Apply*, a new game will be generated with the selected options.

## Approach Taken

Before writing any code, I spent two days mapping out the main game processes and understanding the key algorithm well enough to lay it out in a flow chart. From a rudimentary outline, I was able to build upon it and flesh out the sequence and procedures from which I could code the Color Spill! more methodically and with greater clarity.

## User Stories

As a *casual gamer*: 

- I want to play short and simple games on my smartphone, tablet and laptop so that I can entertain myself whenever and wherever I have small pockets of free time.
- I want to be enticed into playing this game so that I do not have to make a decision whether to play this game or not.
- I want to play a game that is visually lively and appealing so that I would enjoy looking at it while playing and not feel like I am playing a web page.
- I want to start playing the game immediately after launching it so that I do not have to go through the start screen over and over again. 
- I want concise and understandable instructions on how to play and win the game so that I can start the game without cognitive overload. 
- I want to grasp the game UI immediately so that I can focus on the gameplay and not have to search high and low for things.
- I want to be able to adjust essential game settings quickly and easily so that I can quickly return to playing the game.
- I want to be able to start a new game any time so that I do not have to be forced to finish a losing round of game.

As much as possible, I implemented my game with these expectations in mind. 

## Game Overview

<!--![](./documentation/game_overview.jpg "Game overview")-->
<p align="center"><img src="./documentation/game_overview.jpg"/></p>

### Legend

- Sky blue: functions that were implemented.
- Orange: player's input is required
- Pink: check the game's progress.
- Darker yellow: possible final outcomes.
- Lighter yellow: key steps or procedures
- Green: ideas to improve the game.

## Game Logic

### `populateColorSchemeOptions(colorSchemes, colorSchemeNames)`

This populates the the color scheme options in the options menu.

### `createCanvas(length)`

This creates the entire canvas according to length of canvas passed in. A two-dimensional array consisting of an array of columns where each column is in turn an array of boxes is created. Each box given a randomly selected color from the chosen color scheme and stores.

### `drawCanvas(canvas, length)`

This draws the canvas from the two-dimensional array and outputs to HTML for display.

### `drawPalette(colorScheme)`

This appends the colors in the selected color scheme to the palette the canvas.


### `expandFlood(canvas, oldFillColor, newFillColor, xCoordinate, yCoordinate)`

![](./documentation/expandFlood.jpg "Flow chart of the expandFlood(…) algorithm")

Existing filled area merges with squares already in newly chosen fill color by changing into the new fill color, thus expanding the flood.

Starting from the square at top right corner `canvas[0][0]`, the function then performs a recursive check on all possible sides of the current square that is passed.

If the current square is situated at the side, for example, at the top left corner, the function will only check the square on the right and below.

The function will check through all the squares in the old fill color until it reaches the squares that are not in the old fill color, i.e., to the boundaries of the filled area. 

If the user accidentally clicks on the old fill color, this function will immediately exit. 

### `continueOrStopGame()`

This determines whether to stop or continue the game according to whether there are moves left and whether player has won the game

### `updateMoves(chosenDifficulty, chosenCanvasLength)`

This reduces the move by one after every valid color chosen and outputs to HTML for display.

### `anyMovesLeft()`

This checks if there are moves left and returns `true` or `false` accordingly.

### `checkIfWon(canvas)`

This checks if whole canvas has same color and returns `true`, otherwise game continues and returns `false`.

### `endGameSequence(hasPlayerWon)`

This loads victory sequence if player has won or the defeat sequence if player has lost.

### `restartSequence(chosenColorSchemeIndex = 0, chosenCanvasLengthIndex = 1, chosenDifficulty = 1)`

This creates a splash sequence which "animates" the canvas upon page load or restart. Then it proceeds to restart the game. When the game is loaded for the first time, default values stipulated in the parameters will be used.

### `restartGame(chosenColorSchemeIndex, chosenCanvasLengthIndex, chosenDifficulty)`

This initializes or reinitializes the game according to the arguments passed.

### `awaitingPlayerInput()`

This is the main game loop that will be triggered whenever the player clicks to select a color.

## Unresolved Issues

- Fine-tune the number of moves allowed for every level of difficulty and canvas size.
- Make it more responsive to tablets screen sizes.
- Further UI refinements, such as: 
  - Instead of white, use a different color for clickable/tappable elements such as *Apply*, *Restart* and *Options*; and
  - Better alignment of the radio buttons in the *Options* menu.
- Add sound effects(?).
- Implement an option where color scheme rotates after every move.

## Built Using

- HTML
- CSS
- JavaScript
- jQuery

## Acknowledgements

I would like to thank: 

- Ebere, who wisely advised me to stop fixating on figuring out an algorithm to find the shortest path to fill out the canvas and just get on with building the game.
- Shaun, for showing us the ins and outs for this project and checking in regularly during project week
- Edmund, who knows jQuery so much better and saved me hours by pointing me to `.hover(…)`, `.fadeIn(…)`, `.off()` and many more.
- Ching Tong, who navigated me through the labyrinth of Github. 
- Speed, who rightly pointed out that the game title was not truly centered due to my poor use of CSS letter-spacing.
- Darren, who suggested adding `:active`, `:hover` CSS pseudo-classes for the color palette in `media query` to fix the issue `:hover` does not work properly on touchscreen devices
- Yanjie, who suggested clarifying the description for each difficulty level in the options modal
- Jie Hao, my in-house Python guide, who sat with me as I read through the code of Ink Spill, a Python implementation of this game.
- Christabel, for identifying a glaring bug on mobile phone and proofreading this `README.md`, but most importantly, for her understanding, patience and support.

I have also drawn from the following resources:

- [Flood-It: a game with a million dollars - University of Bristol](http://www.bris.ac.uk/news/2010/6945.html)
- [P vs NP Problem | Clay Mathematics Institute](http://www.claymath.org/millennium-problems/p-vs-np-problem)
- [NP-hardness - Wikipedia](https://en.m.wikipedia.org/wiki/NP-hardness)
- [Code Comments Tutorial: Ink Spill - A "Flood It" Clone](http://inventwithpython.com/blog/2010/09/09/code-comments-tutorial-ink-spill-a-flood-it-clone/)
- [Flood–It! on the App Store](https://itunes.apple.com/sg/app/flood-it/id476943146?mt=8)
- [JavaScript: Difference between UNDEFINED and NULL](http://www.ajaymatharu.com/javascript-difference-between-undefined-and-null/)
- [How To Make a Modal Box With CSS and JavaScript](https://www.w3schools.com/howto/howto_css_modals.asp)
- [User story - Wikipedia](https://en.wikipedia.org/wiki/User_story)
- [CSS3 - Simple CSS Animation Loop – Fading In & Out "Loading" Text - Stack Overflow](https://stackoverflow.com/questions/23985018/simple-css-animation-loop-fading-in-out-loading-text)
- [A Complete Guide to Grid | CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Permanent Marker - Google Fonts](https://fonts.google.com/specimen/Permanent+Marker)
