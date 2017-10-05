# **Basic Pac-Man**


<img src="/assets/images/flowchart.png" alt="flowchart.png" title="Project Flowchart" width="900">


## Overview

This is a simplified version of Pac Man.

The player controls Pac-Man through a maze of various dots, as well as four multi-coloured ghosts. The goal of the game is to consume all the dots. The four ghosts roam the maze, trying to kill Pac-Man. If any of the ghosts touch Pac-Man, he loses a life; when all lives have been lost, the game ends.


## Considerations

+ Grid-style layout VS open game board while actively checking for collision at set intervals.
+ Since game board is reasonably small, a grid-style layout is used to reduce the amount of resources consumed by the game
+ Constantly checking for collision against all elements VS checking if the target tile is valid at the point of movement.
+ Also makes generating the game assets easier.


## Loading Game Assets

A 19x18 array containing numbers between 0 - 9 is used to generate the game board. Each number denotes which assets to generate as well as mark out the location of the Pac-Dots, Pac Man and the four Ghosts. A loop is used to go through the array and generate the game assets.

Below is a code snippet:

``` javascript
function loadAssets (tileSet) {
  // creating pac-man and ghosts
  var $pacMan = $('<div class="character" id="pac-man">')
  var $ghostOne = $('<div class="character" id="ghost-one">')
  var $ghostTwo = $('<div class="character" id="ghost-two">')
  var $ghostThree = $('<div class="character" id="ghost-three">')
  var $ghostFour = $('<div class="character" id="ghost-four">')

  // objects to store css properties for tiles
  var blackTile = { 'background-color': 'black', 'height': '28px', 'width': '28px', 'border': '1px solid #303030' }
  var blueTile = { 'background-color': '#2D47DD', 'height': '28px', 'width': '28px', 'border': '1px solid #3366FF' }
  var yellowTile = { 'background-color': '#FFCC00', 'height': '5px', 'width': '30px' }

  // loop through tileSet array and generate map as well as load characters
  for (var i = 0; i < tileSet.length; i++) {
    // create new <div> for tiles and dots
    var $tile = $('<div class="tile">')

    // setting tile properties and adding characters
    switch (tileSet[i]) {
      case 0:
        var $dots = $('<div class="dots">') // only create dots if tile can contain one
        $tile.css(blackTile).data('attr', 0).append($dots)
        break
      case 1: $tile.css(blueTile).data('attr', 1)
        break
      case 2: $tile.css(blackTile).data('attr', 2)
        break
      case 3: $tile.css(blackTile).data('attr', 3)
        break
      case 5: $tile.css(blackTile).data('attr', 5).append($ghostFour)
        break
      case 6: $tile.css(blackTile).data('attr', 6).append($ghostThree)
        break
      case 7: $tile.css(blackTile).data('attr', 7).append($ghostTwo)
        break
      case 8: $tile.css(yellowTile).data('attr', 8).append($ghostOne)
        break
      case 9: $tile.css(blackTile).data('attr', 9).append($pacMan)
        break
    }
    $gameBoard.append($tile)
  }
}
```


## Collision Logic

Basic Pac Man is created with a grid-style layout. No collision algorithms are used. Each individual tile has it's own data attribute, denoting whether it is a tile which the 5 characters can enter. Checking whether Pac Man touches any of the four Ghosts or the Pac-Dots is a simple check for whether any of other elements inhabit the same tile as Pac Man.

Below is a code snippet:

``` javascript
function checkCollision () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()

  // return true if pacman's parent tile contains any of the ghosts
  switch (true) {
    case ($pacManTile.has('#ghost-one').length > 0):
    case ($pacManTile.has('#ghost-two').length > 0):
    case ($pacManTile.has('#ghost-three').length > 0):
    case ($pacManTile.has('#ghost-four').length > 0):
      return true
  }
}
```


## Moving Pac-Man

To move Pac Man through the grid, the game first gets the tile which Pac-Man is inhabiting. Depending on which tile Pac Man is trying to move into, the game then gets the target tile and checks it's data attribute to determine if the tile selected is a valid tile. Event handlers are used to change Pac Man's direction depending on which ArrowKey is hit.

Below are some code snippet:

``` javascript
setTimeout(function () {
  // Moving Pac Man
  setInterval(function () { movePacMan() }, pacManSpeed)
  // switching directions
  $body.on('keydown', (event) => { changeDirection(event) })
  // moving ghost-one
  setInterval(function () { moveGhost($('#ghost-one')) }, ghostSpeed)
}, 3000)

// Moving Pac Man
function movePacMan () {
  switch (direction) {
    case 'left': movePacLeft()
      break
    case 'right': movePacRight()
      break
    case 'up': movePacUp()
      break
    case 'down': movePacDown()
      break
  }
}

// Move Left
function movePacLeft () {
  var $pacMan = $('#pac-man')
  var $pacManTile = $pacMan.parent()
  var $pacManLeft = $pacManTile.prev()
  // check if tile has dots
  if ($pacManLeft.has('.dots').length > 0) eatAndChangeScore($pacManLeft)
  // check if pac-man can move into tile
  if ($pacManLeft.data('attr') !== 1 && $pacManLeft.data('attr') !== 8) $pacManLeft.append($pacMan)
}

// Switching Directions
function changeDirection (event) {
  switch (event.key) {
    case 'ArrowUp': direction = 'up'
      break
    case 'ArrowRight': direction = 'right'
      break
    case 'ArrowDown': direction = 'down'
      break
    case 'ArrowLeft': direction = 'left'
      break
  }
}
```


## Ghosts Movement

Ghosts movement use the same logic as Pac Man. Initial parent tile of the ghost is captured, then the target tile is evaluated if it is a viable tile.

However, ghosts movement has to be automated. Four separate patrol functions were created and assigned to each of the four ghosts.

Below are some code snippets:

``` javascript
// Ghost Variables
var ghostSpeed = 400

setTimeout(function () {
  // Moving Pac Man
  setInterval(function () { movePacMan() }, pacManSpeed)
  // Switching Directions
  $body.on('keydown', (event) => { changeDirection(event) })
  // Moving Ghost One
  setInterval(function () { moveGhost($('#ghost-one')) }, ghostSpeed)
}, 3000)

// Assigning Patrol Function
function moveGhost ($ghost) {
  // jQuery ghost objects
  var $ghostOne = $('#ghost-one')
  var $ghostTwo = $('#ghost-two')
  var $ghostThree = $('#ghost-three')
  var $ghostFour = $('#ghost-four')

  switch (true) {
    case ($ghost.is($ghostOne)): patrolTopLeft($ghost)
      break
    case ($ghost.is($ghostTwo)): patrolTopRight($ghost)
      break
    case ($ghost.is($ghostThree)): patrolBottomRight($ghost)
      break
    case ($ghost.is($ghostFour)): patrolBottomLeft($ghost)
      break
  }
}

// ghost-one variables
var prevDirOne = []

// Patrol Top Left Corner Function Assigned to Ghost One
function patrolTopLeft ($ghost) {
  var $ghostTile = $ghost.parent()
  var $ghostUp = $ghostTile.prevAll().eq(18)
  var $ghostLeft = $ghostTile.prev()
  var $ghostRight = $ghostTile.next()
  var $ghostDown = $ghostTile.nextAll().eq(18)

  if ($ghostUp.data('attr') !== 1 && prevDirOne[0] !== 'down' && prevDirOne[1] !== 'down') {
    prevDirOne.push('up')
    $ghostUp.append($ghost)
  } else if ($ghostLeft.data('attr') !== 1 && prevDirOne[0] !== 'right' && prevDirOne[1] !== 'right') {
    prevDirOne.push('left')
    $ghostLeft.append($ghost)
  } else if ($ghostRight.data('attr') !== 1 && prevDirOne[0] !== 'left' && prevDirOne[1] !== 'left') {
    $ghostRight.append($ghost)
    prevDirOne.push('right')
  } else if ($ghostDown.data('attr') !== 1 && prevDirOne[0] !== 'up' && prevDirOne[1] !== 'up') {
    prevDirOne.push('down')
    $ghostDown.append($ghost)
  }
  // shift entire array left by one element (keeps array 2 elements long)
  if (prevDirOne.length > 2) prevDirOne.shift()
}
```

## Reflections

+ Creating a character class which stores the position of the character's parent tile as well as a method to get and store the 4 adjacent tiles will reduce the amount of code repetition.
+ Refactor the function to change Pac Man's directions and move Pac Man into one function.
+ Instead of having four separate functions to move Pac Man (one for each direction), refactor into one function which takes a direction argument.
+ Instead of having four separate patrol functions for the ghosts (one for each ghost), refactor into one function (if possible).
+ Ghosts movement is overly simple. Two movement modes were originally planned: Scatter and Chase. Scatter is the current patrol mode, while chase will cause the ghosts to actively track and chase Pac Man. The Ghosts were to switch between the two modes at every fixed interval.
+ Plan further ahead. Some features were not implemented due to time constraints (Restart, Ghosts Chase mode, Power Pellets).


## Resources

+ [Get dynamically added element by data attribute using jQuery](https://stackoverflow.com/questions/31402103/how-to-find-dynamically-added-element-by-data-attribute-using-jquery)
+ [Ghost Behaviour](http://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior)
+ [Font](https://fonts.googleapis.com/css?family=Bungee)
