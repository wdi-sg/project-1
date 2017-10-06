# Snakes and Ladders - Childhood game now on the web!
<!---
Read Me Contents
-->

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Overview

The classic and ancient board game of **snakes and ladders** is now available a click away. Play with a friend or play with computer.

### Link to the game
[-->Access The game here<--](https://nikitas89.github.io/project-1/) OR
https://nikitas89.github.io/project-1/

### How to play - user instructions
Easy, just:
1. Throw the dice and whoever gets the highest score starts the game.
2. Player throws dice again
3. Play turns
  1. The player's token moves across the board over the squares based on the dice value
  2. Other player gets turn
4. For snakes and ladders
  1. If  player lands on a ladder's bottom rung, whohoo! you get to climb up to the end of the ladder and fast forward many paces.
  2. If player lands on a snake head, rough luck. Move back down to the square in the snake tail.
5. Keep playing between players


---

### When to Win
Whoever reaches 100 first wins! That simple. :)

---


### FlowChart
![](/assets/images/flow.jpg)  

---

### Expansion plan in future
* add multi-player beyond 2
* leaderboard across multiple games
* points based on # of moves

---

### Project Progress by Days
1. Created a game logic including snakes and ladders position jumps. Able to simulate gameplay
2. Added grid display and buttons in HTML and CSS and  jQuery to handle dice throw to play various turns. Also refactored some codes.
3. Tried to dynamically populate grid with snakes and ladders based on the jump values. E.g ladder of length 4 for jump from 4 to 14, and snake of length 8 for 84 to 27. It was difficult to find suitable snake and ladder graphics of various lengths. Also had to set up calculations to determine start positions in the grid and angle of rotation based on end position.

  Finally decides to use a game board graphic instead. This board was the initial reference for the jump values, thus my jump values did not need to be updated.

  Introduced basic graphics to act as player tokens. Also added CSS reset to remove extra formatting and padding on elements.   
4. Started work on second game, battleship due to greater scope for logic and algorithm.

---
### Built With

* Javascript
* jQuery
* HTML
* CSS

---
