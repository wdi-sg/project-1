# Project #1: Flappy Bird Game :

### Overview

**Click** on the screen, or use your **spacebar** to get started. Fly the bird as far as you can without hitting the obstacle(poles) and **score a point** each time you pass through it.

Challenge your patient level and let's create a whole new **high score** buddy!

---
### Flow Chart:

![Image of flowchart](/images/flowchart.png)

---

### Technical logic

The bird falls continuously, and when the user taps on spacebar or click on mouse, it 'jumps' a bit.

I use a variable called etc: **vertSpeed** to keep track of the bird's vertical speed (positive if it goes up, negative if it falls down). jumpSpeed is a positive constant, to which the speed gets reset whenever the user taps the screen. This will immediately make the bird start its ascension. fallingConstant is again a positive constant, which accelerates the bird's decrease in vertical speed on each update. This makes the bird increase in speed when falling.

![Image of flowchart](/images/verticalSpeed.png)

From here on, all you have to do is experiment with the values, to find a set that works best for you.

---

## Collisions (Player and Obstacle)

Collision take place when bird touches the poles(obstacle) while jumping pass it and also when it touches body.height(y) top and bottom. When it do so, the game ended. A popup game over screen appear.
