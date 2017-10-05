<!-- [How to write readme - Markdown CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  
[How to write a good readme for github repo!](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) -->


<!---
Read Me Contents

1. Title of Game
2. Basically what the game is about and how to play
3. Flowchart
4. Code snippet for the custom logic part.
5. Mini Journal - to show progress
5. References

-->

# The PRICE is RIGHT!

### Introduction
I used to watch this show almost everyday growing up and it's still fun to play at parties! The show itself has A LOT of games but I'll be going for the classic - guess the price of the items and win them!

### Game Concept/Flow

Here, my basic target will be to create a game for 2 players.
An item will be shown in the screen (with the price hidden) and the players will be prompted to give an `input` number.

Once each player `submits`, the input number of each player will be displayed and input fields will disabled, and the Reveal button will show.

(Not sure about the part on disabling input fields yet. May want it not to be disabled so that players can change their minds before clicking on the reveal button)

Once the `reveal` button is clicked, the price of the item will be revealed and at the same time the player inputs will be compared with the price of the item.

<!-- The player that has the lower price difference, either higher or lower from the item actual price, will win. Player number will be displayed `Congratulations! Player 1, you have won.. a NEW CARRRR!!!!` -->

And the game will restart with a new item and the player that has the most items in the shopping cart can bring it home!


![Flowchart](https://www.lucidchart.com/publicSegments/view/e82f8629-795a-43fe-b5ef-3d832464ed3f/image.jpeg)



 ### My plan
 I forsee that I would be able to handle doing just one game for now. If I manage to reach the basic logic and skeleton of the game, I'd add in these features (to make it as close to the real game as possible!)
 1. 'ting' sound when players input their guess (nope)
 2. Color scheme - muted pink, blue, yellow, green. (nope)
 3. Allow for players to add their names and the winner name to use the players' actual name. (done!)
 4. Allow for 4 players

Additional stuff that is really extra
 1. "audience" pple giving random guesses to help the players.

### TO be added soon
 4. Code snippet for the custom logic part.
 5. Mini Journal - to show progress
 5. References


 ### Links
In progress: [Flowchart](https://www.lucidchart.com/documents/view/62c11fc6-3e69-4b2e-97be-ce66f73d84a1)

Plan
1. Monday: JS Logic
2. Tuesday: JS Clean up (gonna be lots of repeats)
3. Wed: CSS and Extra features


###Progress
1. Monday: Managed to make the skeleton of the game. Game can be played with 1 item
2. Tuesday: Explored using JSON, but used JS instead to generate new products. Game is considered stable but had no Player Name, and no Scoreboard
3. Wednesday: Remade the game in another repo. This time added features: Player Name and Shopping Cart("scoreboard")
4. Thursday: Added multiple levels and stabilized functions and jquery.

####Reference
1. Did own code. But to see history/progress/commits of the new repo, please see - https://github.com/noobnur/project01-copy
2. Link to game: https://noobnur.github.io/project-1/
