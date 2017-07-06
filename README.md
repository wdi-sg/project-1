# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Pac-Man

### How to play?

#### Instructions:

* Use the **arrow keys** :arrow_up: :arrow_down: :arrow_left: :arrow_right: to move Pac-Man around the maze.
* Complete the level by eating all the dots.
* **Avoid the ghosts!** If they catch you, you will lose a life.
* You only have **3 lives**. Be careful...

#### URL:

* **[Pac-Man _(Simplified Version)_](https://shumin13.github.io/project-1/)**

---

### Wireframes

#### Draft:
<img src="assets/images/gameboard-first-draft.png" height="400">

---

### Game Logic

#### createWall (left, top, width, height)
* Create wall on the gameboard

#### createDot (left, top)
* Create dots on the gameboard

#### collision (a, b)
* Detect if there is collision between a and b

#### hitWall (character)
* Check if the character (pacman, ghost) hit the wall

#### hitGhost ()
* Check if pacman hit the ghost

#### pacmanMovement ()
* Movement direction depends on the arrow key pressed
* The keydown event is fired when a key is pressed down.

#### ghostMovement ()
* Movement direction depends on the arrow key pressed

#### ghostHitWallNewDir ()
#### randomGhostDirection ()

#### checkScore ()
#### gameOver ()
#### startGame ()
#### loop ()

---

### Unsolved Problems

---

### Built With

* HTML5
* CSS3
* Javascript

---

### Acknowledgements

* **[MDN Game Development - Collision Detection](https://developer.mozilla.org/kab/docs/Games/Techniques/2D_collision_detection)**

---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?
