# Project #1: Fluppy Bird Game :

### Overview

**Click** on the screen, or use your **spacebar** to get started. Fly the bird as far as you can without hitting a poles and **score a point** each time you pass by a pole.

Challenge your patient level and let's create a whole new **high score** buddy!

---
### Flow Chart:

![Image of flowchart](/images/flowchart.png)

---

### Technical logic

The bird falls continuously, and when the user taps the screen, it 'jumps' a bit.

We use a variable called etc: **vertSpeed** to keep track of the bird's vertical speed (positive if it goes up, negative if it falls down). jumpSpeed is a positive constant, to which the speed gets reset whenever the user taps the screen. This will immediately make the bird start its ascension. fallingConstant is again a positive constant, which accelerates the bird's decrease in vertical speed on each update. This makes the bird increase in speed when falling.

![Image of flowchart](/images/verticalSpeed.png)

From here on, all you have to do is experiment with the values, to find a set that works best for you.

---

## Collisions (Player and Obstacle)

Collision take place when bird touches the poles(obstacle) while jumping pass it and also when it touches body.width(x) and body.height(y).
