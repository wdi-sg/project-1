# Simplified UNO! for 2
<!---
Read Me Contents
-->

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Overview

This is a simplified version of the classic card game UNO!. It allows only two players: a human player and the computer player. The players are dealt a deck of cards each and take turn to discard their cards one-by-one according to rules regarding card colors and values. During gameplay if none of a player's cards on hand comply with rules for discard, the player has to draw an additional card from the Draw Pile as penalty. The first player to discard her or his entire deck wins. The game is hosted on GitHub: https://kepler62f.github.io/project-1/assets/    

---
### Overview of Game Elements

**Game Objects**

* Draw Pile: The initial deck of 76 cards.  
* Human Player's Pile: An initial deck of 7 cards dealt from shuffled Draw Pile.
* Computer Player's Pile: An initial deck of 7 cards dealt from shuffled Draw Pile.
* Discard Pile: One initial card dealt from shuffled Draw Pile. Last played card of each turn is stacked on top on Discard Pile.
* Card: Colors - red, green, blue, yellow; Values - 0 to 9

**UI Objects**

* Draw Pile: A PNG image of a covered UNO stack
* Human Player's Pile: Revealed UNO card PNG images
* Computer Player's Pile: Covered UNO card PNG images
* Discard Pile: Last played, revealed UNO card PNG image
* Start button: To begin game play
* Reset button: To stop game and clear UI objects from page
* Draw Card button: For human player to draw a card from Draw Pile
* Game Message Console: To indicate player's turn and game status (i.e. win, UNO!)

**Game Actions**

* Create a card
* Create a Draw Pile
* Shuffle the Draw Pile
* Deal X number of cards from Draw Pile to player
* Select a card to play
* Draw a card from Draw Pile
* Start a game
* Reset game
* UNO!
* Inform win or lose

**Game Decisions**

* Computer: Is card played legitimate? Card same color or number or is card wild
* Computer: who wins?
* Computer: is game over?
* Computer: is there UNO?

**Game Status**

* Has Game Started?
* Whose turn currently?
* Has a card been played by Human/Computer successfully?
* Computer Player Pile No of Cards Left
* Human Player Pile No of Cards Left


---
### Game Flow

**Starting Game**

1. Generate an array of card objects as Draw Pile
1. Add click listeners to buttons: Start, Reset, & Draw Card
1. IF "Start" button clicked THEN:
    1. Proceed if Game Started = False
    1. Shuffle Draw Pile
    1. Deal 1 Card to Discard Pile
    1. Deal 7 Cards from Draw Pile to Human Player
    1. Deal 7 Cards from Draw Pile to Computer Player
    1. Display Human Player's cards on Game Page
    1. Add click listeners to Human Player's individual cards on Game Page
    1. Display Computer Player's cards on Game Page
    1. Display Discard Pile card on Game Page
    1. Set Game Stared = True
    1. PRINT "Awaiting Human Player move" on Game Page
1. IF "Reset" button clicked THEN:
    1. Set Game Started = False
    1. Reload Game Page from server
1. IF "Draw Card" button clicked THEN:
    1. Proceed if Game Started = True && Player Turn = Human Player
    1. Proceed if Human Player's pile has NO playable card
        1. Draw a card from Draw Pile and deal to Human Player
        1. Set Player Turn = Computer Player
        1. Computer Player plays
        1. Set Player Turn = Human Player
    1. IF Human Player's pile has playable card
        1. PRINT: No need to draw

**Playing Game (Human)**

1. IF a Card in Human Player's Pile is clicked THEN:
    1. Proceed if Player Turn = Human Player
      1. Print "Awaiting Human Player move" on Game Page
      1. Proceed if clicked Card is a playable card
          1. Remove clicked card from Human Player's pile
          1. Replace Discard Pile card with clicked card
          1. Refresh Game Page with latest list of Human Player's card
          1. Refresh Game Page with latest Discard Pile
          1. IF Human Player's pile balance = 1, PRINT: UNO!
          1. IF Human Player's pile balance = 0, PRINT: Human Player Wins!
          1. RETURN: Successful Played = True
      1. IF clicked Card is NOT a playable card THEN:
          1. PRINT: Card not playable
          1. REUTRN: Successful Played = False
    1. IF Successful Played = True THEN:
      1. Set Player Turn = Computer Player
      1. Computer Player plays
      1. Set Player Turn = Human Player

**Playing Game (Computer)**

1. Print "Awaiting Human Player move" on Game Page
1. IF Computer Player's Pile has playable cards THEN:
  1. Select first playable card in Computer Player's pile
  1. Play selected card as per Human Player
1. IF Computer Player's Pile has NO playable cards THEN:
  1. PRINT: Computer has no playable card. Drawing one...
  1. Draw a card from Draw Pile


### Open issues

1. To include "document.addEventListener('DOMContentLoaded', init)" to ensure document fully loaded before script Returns
1. README.me to document functions in scripts
1. Camelcase some variables in scripts as standard practice
1. Intermittent unstable turn switching after prolonged plays
