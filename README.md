# Project Name - Connect the Pipe

https://thecodingdog.github.io/project-1/

# User stories
1. Hit the start button which starts a 60 seconds countdown.
2. Objective is to connect starting pipe to ending pipe.
3. Move tiles by clicking on tile and empty space
Once timer is up, tiles are randomized and you have to start all over.

![alt text](assets/images/start.png?raw=true)

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
#. DOM manipulate file
# createGrid()
- creates 16 div and fetches images based on random start position
# init()
- adds event listener to each tile
- adds event listener to start button to randomize tile
- adds event listener to start button to start timer
- updateGrid() refreshes the tile pictures based on randomized play grid

# Logic file
# checkMoveIntoSpace()
- checks based on 2 clicks to update play grid if valid move
- if valid, triggers moveTile() and checkTileSeqFromS()

# moveTile()
- obtains the value of tile clicked on, and updates it in play grid

# checkTileSeqFromS()
- checks whether the tiles are connected correctly from start tile (fixed at 00) till the end
- starting from start tile, collect index and values of 4 connecting tiles
- trigger chkTile () on all 4 tiles to its left, right, above, and below to check if they are able to join

#chkTile()
- references the object S (above) to find out if tiles are a valid join.
- if chkTile is true, go back to checkTileSeqFromS
- recursive check based on the second connected tile and so on until chkTile is false
- checks if object returns 'end' meaning player has won.

#direction()
- to find out if the connecting tile is on the left, top, botton or right of this current tile - use this to call back checkTileSeqFromS and pass the direction as an argument.

#randomize()
- creates 2d arrays with values from 0 to 3, then assigns pieces to their index based on combination of the arrays e.g. start[0][0]

# Technologies used
- HTML, CSS, JS

# Problems to resolve
1. sometimes false winners appear
2. should allow drag and drop usage
3. shouldn't be able to fly thru blocks
