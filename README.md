# <img src="/assets/img/lives.png" width="100"> Help Halimah Make Yishun Great Again
<!---
Read Me Contents
-->

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

* <a href="https://charlimxm.github.io/project-1/">
Try playing here</a>

### Overview
In the recent spate of bad news, Yishun was named home to one of Singapore's most dystopian societies. Not all is bad when it was revealed that newly elected President, Mdm Halimah Yacob is a Yishunite (short for people who resides in Yishun).

Can you help Halimah help to reclaim Yishun’s disastrous reputation?

### Game Mechanics and Logic

Inspired by Brick Breaker, "Help Halimah Make Yishun Great Again" requires the player to clear the "bad people" who have been plaguing Yishun by deflecting a bouncing heart.

<img src="/assets/img/game-ss.png" width="1200">

Below is a flowchart showing the game's instructions.

<img src="/assets/img/game-flowchart.png" width="1100">

In order to create the game, the following depicts the main functions/ logics used:

* Spawning of random bad people icons
  - create an array of objects with the bad people's images and their respectively scores
  - randomised its sequence using Math.random()
  - randomised its position using Math.random() and setting the maximum and minimum width and height so that the icons will only spawn within the map

* Moving of paddle
  - create an event to identify the keys pressed by tracking their keyCodes
  - the keyCodes to be tracked here are 37 and 39 for the left and right arrow respectively
  - when the left arrow key is pressed, the paddle will move to the right by 45px
  - when the right arrow key is pressed, the paddle will move to the left by 45px
  - create a similar event to track when the keys are released so that the paddle would stop moving

* Moving of heart and collision detections between the following pairs by checking if the positions of the two objects/ elements overlap.
  - heart and paddle
  - heart and walls (top, left and right)
  - heart and bottom walls
  - heart and "bad people"

### Built With
* HTML
* CSS
* JavaScript
* Jquery

### Challenges
* Due to time and knowledge constraints, the author's had to abandon her initial plan of spawning the "bad people" only within the boundary of the Yishun map

<img src="/assets/img/challenges-1.png" width="1100">

### Acknowledgments
* <a href="https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript">
MDN web docs - 2D breakout game using pure JavaScript</a>
