# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Simple Pac-Man

**This game is inspired by the iconic video game, PAC-MAN.**

## How to play?

#### Instructions:

* Use the **arrow keys** :arrow_up: :arrow_down: :arrow_left: :arrow_right: or **swipe** to move Pac-Man around the maze.
* Complete the level by eating all the dots.
* **Avoid the ghosts!** If they catch you, you will lose a life.
* You only have **3 lives**. Be careful!

#### URL:

* **[Simple Pac-Man](https://shumin13.github.io/project-1/)**


## Gameboard

#### Draft:
<img src="assets/images/gameboard-first-draft.png" height="400">

#### Final:
<img src="assets/images/gameboard-final.png" height="400">


## Game Logic

#### createWall (left, top, width, height)
* Create walls on the gameboard

#### createDot (left, top)
* Create dots on the gameboard

#### hitWall (character)
* Check if the character (Pac-Man, ghost) hits the wall _(collision function)_

#### hitGhost ()
* Check if Pac-Man hits the ghost _(collision function)_

#### pacmanMovement ()
* Pac-Man will change direction when the arrow key is pressed or when a swipe is detected
* Pac-Man's position is rounded to the nearest multiple of 40 (size of each 'grid') at every turn
* If Pac-Man hits a wall, he will stop
* If Pac-Man hits a ghost, check for game over

#### ghostMovement ()
* Ghost will move in a default direction
* If ghost hits a wall, he will move in a new random direction _(ghostHitWallNewDir function) (randomGhostDirection function)_

#### checkScore ()
* Keep track of the score based on the number of dots eaten by Pac-Man
* If all the dots have been eaten, check for game over

#### gameOver ()
* Display screen depends on the result (win, lose, lives > 1)

#### nextLevel ()
* The speed of Pac-Man and ghosts will increase by 1

#### startGame ()
* Start new game
* Reset all variables


## To Be Implemented/ To Be Resolved

* Ghost AI
* Audio on Mobile
* Better User Interface for Device in Landscape Mode


## Built With

* HTML5
* CSS3
* Javascript
* jQuery Mobile


## Acknowledgements

* [MDN Game Development - Collision Detection](https://developer.mozilla.org/kab/docs/Games/Techniques/2D_collision_detection)
* [Pac-Man Sounds](http://www.classicgaming.cc/classics/pac-man/sounds)
* [Pacman Waka Waka Sound Effect](http://soundfxcenter.com/download-sound/pacman-waka-waka-sound-effect/)
