# Under the sea

### Gameplay

> Move your mouse around to bump into other fishes.
> Eating smaller fish will make you bigger,
> and bumping into bigger fish will make you smaller.
> Make yourself the biggest fish in the sea!

Link: http://dreamz89.github.io/project-1

---

### Approach

Step-by-Step Process

* Create cover page that will disappear upon clicking start button
* Generate fishes at intervals [Stop generating fishes after the 25th fish]
* Fishes must be of different sizes, different initial position, and move randomly [Flipping either left or right]
* Create main fish that follows mouse [And flips left or right]
* Detect collision of main fish with blue fishes
* Increase/Decrease size of main fish when colliding, and make other fish disappear
* Win if bigger than 100x100px, because the biggest blue fish is 110x110px
* Lose if less than 30x30px, because the smallest blue fish is 20x20px

---

### Functions

**generateFish1()**
* Generate fish of random height (the width will follow proportionately)
* Place new fish at random position (top & left)
* Push new fish to allFishes array

**moveRandomly()**
* For each new fish, have it move to a random new position in a linear transition
* Flip the fish if it is swimming a different direction
* Set 3 different speeds to the fishes

**mouseFish()**
* When the mouse moves, find its new position and have the main fish follow with 0.05 transition
* Flip fish to follow mouse

**collisionDetection()**

>if (rect1.x < rect2.x + rect2.width &&
>   rect1.x + rect1.width > rect2.x &&
>   rect1.y < rect2.y + rect2.height &&
>   rect1.height + rect1.y > rect2.y)
>    // collision detected!

**collisionResult**

* When collision is detected (true)
* If area of main fish > area of other fish, increase size of main fish
* If area of main fish < area of other fish, decrease size of main fish
* Remove other fish both from the array and the DOM.

**clearFish()**
* Reset fish array to null
* Clear blue fishes from DOM screen

**startGame()**

* When start button is clicked, remove start items and call the functions to generate new fishes.
* Call collision result every 500ms.
* Includes gameOver function, where if mainFish reaches 30x30px, clear fish generation and show game over page. If mainFish reaches 100x100px, clear fish generation and show winning page.
* Click replay button to go back to start page

---

### Roadblocks

**Fishes tend to congregate towards the center after awhile.**

Fixed by increasing interval of calling fish movement, and changing the fish transition instead.

**Fishes are not a regular shape (rectangle or circle), so collision detection is not precise.**

For more accuracy, SAT (Separating Axis Theorem) can be used between convex polygons,
but for simplicity purposes, the fishes are assumed to be rectangles.
>Collision detection was improved by setting the interval to detect every 100ms.

---

### References

* **Generating Fishes**

https://stackoverflow.com/questions/35198786/javascript-create-image-element-and-randomly-place-within-div-in-html5
* **Getting fish to follow mouse pointer**

https://stackoverflow.com/questions/7143806/make-an-image-follow-mouse-pointer
* **Rotating Fish to follow mouse pointer**

https://stackoverflow.com/questions/15653801/rotating-object-to-face-mouse-pointer-on-mousemove
* **Collision Detection**

https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
