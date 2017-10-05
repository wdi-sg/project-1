# **Basic Pac-Man**

<img src="/assets/images/flowchart.png" alt="flowchart.png" title="Project Flowchart" width="900">

## Overview

This is a simplified version of Pac Man.

The player controls Pac-Man through a maze of various dots, as well as four multi-coloured ghosts. The goal of the game is to consume all the dots. The four ghosts roam the maze, trying to kill Pac-Man. If any of the ghosts touch Pac-Man, he loses a life; when all lives have been lost, the game ends.

## Instructions

+ Arrow-Left '◀' : Move 'Left'
+ Arrow-Right '▶' : Move 'Right'
+ Arrow-Up '▲' : Move 'Up'
+ Arrow-Down '▼' : Move 'Down'

## [▶ Click Here to Play Game ◀](https://koozy0.github.io/project-1/)

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
      case 0: $tile.css(blackTile).data('attr', 0).append($('<div class="dots">'))
        break
      case 1: $tile.css(blueTile).data('attr', 1)
        break
      case 2: $tile.css(blackTile).data('attr', 2)
        break
      case 5: $tile.css(blackTile).data('attr', 5).append($('<div class="character" id="ghost-four">'))
        break
      case 6: $tile.css(blackTile).data('attr', 6).append($('<div class="character" id="ghost-three">'))
        break
      case 7: $tile.css(blackTile).data('attr', 7).append($('<div class="character" id="ghost-two">'))
        break
      case 8: $tile.css(yellowTile).data('attr', 8).append($('<div class="character" id="ghost-one">'))
        break
      case 9: $tile.css(blackTile).data('attr', 9).append($('<div class="character" id="pac-man">'))
        break
    }
    $gameBoard.append($tile)
  }
}
```

## Collision Logic

Basic Pac Man is created with a grid-style layout. No collision algorithms are used. Each individual tile has it's own data attribute, denoting whether it is a tile which the 5 characters can enter. Checking whether Pac Man touches any of the four Ghosts is a simple check for whether any of other elements inhabit the same tile as Pac Man or his target tile. Checking whether Pac Man touches any of the Pac-Dots is a check for whether Pac Man inhabits the same tile as the Pac-Dots.

Below is a code snippet:

``` javascript
function checkCollision () {
  var $pacManTile = $('#pac-man').parent()
  var targetTile = pacTarget(direction)
  // return true if pacman's parent tile or pacman's target tile contains any of the ghosts
  switch (true) {
    case ($pacManTile.has('#ghost-one, #ghost-two, #ghost-three, #ghost-four').length > 0):
    case ($(targetTile).has('#ghost-one, #ghost-two, #ghost-three, #ghost-four').length > 0):
      return true
  }
}
```

## Moving Pac-Man

To move Pac Man through the grid, the game first gets the tile which Pac-Man is inhabiting. Depending on which tile Pac Man is trying to move into, the game then gets the target tile and checks it's data attribute to determine if the tile selected is a valid tile. Event handlers are used to change Pac Man's direction depending on which ArrowKey is hit.

Below are some code snippets:

``` javascript
// start game after 3 seconds
setTimeout(function () {
  // moving pacman
  setInterval(function () { movePac() }, pacManSpeed)
  // switching directions
  $body.on('keydown', (event) => { direction = changeDirection(event) })
  // moving ghost-one
  setInterval(function () { patrolTopLeft($('#ghost-one')) }, ghostSpeed)
}, 3000)

function pacTarget (direction) {
  // using direction, target tile
  var $pacManTile = $('#pac-man').parent()

  switch (direction) {
    case 'left': return $pacManTile.prev()
    case 'right': return $pacManTile.next()
    case 'up': return $pacManTile.prevAll().eq(18)
    case 'down': return $pacManTile.nextAll().eq(18)
  }
}

function movePac () {
  var targetTile = pacTarget(direction)
  // check if tile has dots
  if ($(targetTile).has('.dots').length > 0) eatAndChangeScore($(targetTile))
  // check if pac-man can move into tile
  if ($(targetTile).data('attr') !== 1 && $(targetTile).data('attr') !== 8) $(targetTile).append($('#pac-man'))
}

function changeDirection (event) {
  switch (event.key) {
    case 'ArrowUp': return 'up'
    case 'ArrowRight': return 'right'
    case 'ArrowDown': return 'down'
    case 'ArrowLeft': return 'left'
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

// moving ghost-two after 6 seconds
setTimeout(function () { setInterval(function () { patrolTopRight($('#ghost-two')) }, ghostSpeed) }, 6000)

// ghost-two variables
var prevDirTwo = []

function patrolTopRight ($ghost) {
  var $ghostTile = $ghost.parent()
  var $ghostUp = $ghostTile.prevAll().eq(18)
  var $ghostLeft = $ghostTile.prev()
  var $ghostRight = $ghostTile.next()
  var $ghostDown = $ghostTile.nextAll().eq(18)

  if ($ghostUp.data('attr') !== 1 && prevDirTwo[0] !== 'down' && prevDirTwo[1] !== 'down') {
    prevDirTwo.push('up')
    $ghostUp.append($ghost)
  } else if ($ghostRight.data('attr') !== 1 && prevDirTwo[0] !== 'left' && prevDirTwo[1] !== 'left') {
    $ghostRight.append($ghost)
    prevDirTwo.push('right')
  } else if ($ghostLeft.data('attr') !== 1 && prevDirTwo[0] !== 'right' && prevDirTwo[1] !== 'right') {
    prevDirTwo.push('left')
    $ghostLeft.append($ghost)
  } else if ($ghostDown.data('attr') !== 1 && prevDirTwo[0] !== 'up' && prevDirTwo[1] !== 'up') {
    prevDirTwo.push('down')
    $ghostDown.append($ghost)
  }
  // shift entire array left by one element (keeps array 2 elements long)
  if (prevDirTwo.length > 2) prevDirTwo.shift()
}
```

## Reflections

+ Creating a character class which stores the position of the character's parent tile, a method to get and store the four adjacent tiles and an array variable to store the ghosts' last two moves will reduce the amount of code repetition and global variables.
+ Ghosts movement is overly simple. Two movement modes were originally planned: Scatter and Chase. Scatter is the current patrol mode, while chase will cause the ghosts to actively track and chase Pac Man. The Ghosts were to switch between the two modes at every fixed interval.
+ Plan further ahead. Some features were not implemented due to time constraints (Proper restart function, Ghosts Chase mode, Power Pellets).

## Resources

+ [Get dynamically added element by data attribute using jQuery](https://stackoverflow.com/questions/31402103/how-to-find-dynamically-added-element-by-data-attribute-using-jquery)
+ [Ghost Behaviour](http://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior)
+ [Font](https://fonts.googleapis.com/css?family=Bungee)
