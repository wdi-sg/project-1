# Project Name - Connect the Pipe

https://thecodingdog.github.io/project-1/

# User stories
1. Hit the start button which starts a 60 seconds countdown.
2. Objective is to connect starting pipe (orange dot) to ending pipe (red dot).
3. Move tiles by clicking on tile and empty space
Once timer is up, tiles are randomized and you have to start all over.
4. Each move is recorded (the lesser moves made to solve, the better).
5. Levels reduce the time given to solve puzzle, and lesser space to move.

# Object
1. As every piece can only be connected to 1 - 3 valid pieces, I attempted to use a linked object to check validity of moves.
e.g. a horizontal straight pipe (leftright) can be linked to another leftright pipe or a curved lefttop which in turn can only be linked to a vertical straight pipe (topdown) and so on.
2. If checking against object returns undefined, that move should not be recorded

var S = {
  'topdown': {
    'topright': {
      'leftright': {
        'lefttop': 'end',
        'leftright': {
          'lefttop': 'end'
        }
      },
      'lefttop': 'end'
    }
  },
  'lefttop': 'end',
  'topright': {
    'leftright': {
      'lefttop': 'end',
      'leftright': {
        'lefttop': 'end'
      }
    },
    'lefttop': 'end'
  }
}

# Functions
1. DOM manipulate file
- function creates grid based on start position
- function init adds event listener to each tile, and adds event listener to start button which triggers randomize tile, start timer
- function updateGrid refreshes the tile pictures based on play grid

2. Logic file
- function checkMoveIntoSpace checks based on 2 clicks to update play grid if valid move and triggers moveTile and checkPipesConnect
- moveTile obtains the value in index of tile clicked on, and updates it in play grid
- randomize function creates 2d arrays with values from 0 to 3, then assigns pieces to their index based on combination of the arrays

3. algorithm to check win
- function checkTileSeqFromS checks whether the tiles are connected correctly from start tile (fixed at 00) till the end and alerts win.
  1. chkTile function references the object S (above) to find out if moves are valid. The main function checkTileSeqFromS will call chkTile on its left, right, top down tile.
  2. If one of the 4 tiles matches, it needs to run recurisvely to check if the second connected tile has valid connections to its 4 sides and so on until it reaches the end.
  3. The function needs to know if the connecting tile is on the left, top, botton or right of this current tile and go in that direction. Function direction does that and calls back checkTileSeqFromS and passes the direction as an argument.
  4. Function loop breaks when object S returns undefined and is triggered at every tile moved.
  5. Function also checks if object returns 'end' meaning player has won.



# Technologies used
- HTML, CSS, JS

# BUGS
1. timer should not activate upon multiple clicking of 'start'
