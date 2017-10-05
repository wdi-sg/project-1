# Project #1: Flappy Bird Game :

## Overview

**Click** on the screen, or use your **spacebar** to get started. Fly the bird as far as you can without hitting the obstacle(poles) and **score a point**. As the speed of the obstacles increasing everytime a new pole entered  each time you pass through it.

Challenge your patient level and let's create a whole new **high score** buddy!

### Controls Option
Mouse Left / Space Bar tap : To Fly

[*Click here to play!*](https://heyzernut.github.io/project-1/)

---
### Flow Chart:

![Image of flowchart](/images/flowchart.png)

---

### Screen:

![Image of flowchart](/images/startscreen.jpg)

![Image of flowchart](/images/playscreen.jpg)

![Image of flowchart](/images/gameoverscreen.jpg)

---

### Logic for gravity and velocity

The bird falls continuously, and when the user taps on spacebar or click on mouse, it 'jumps' a bit.

bird's vertical speed (positive if it goes up, negative if it falls down). Use $bird.stop().animate to set a positive and negative constant, to which the speed gets reset whenever the user taps the screen. This will immediately make the bird start its ascension. While setting the gravity to a bottom '0'. bird object will instant falls after falling for -= 70px on height when mouse event listener is not applied. This makes the bird increase in speed when falling.

```
function birdFlap () {
  if (gameState === 1 || gameState === 2) {
    $bird.css('transform', 'rotate(-20deg)')
    $bird.stop().animate({
      bottom: '+=40px'
    }, 200, function () {
      birdPos()
      $bird.css('transform', 'rotate(0deg)')
      $bird.stop().animate({
        bottom: '-=70px'
      }, 200, 'linear', function () {
        birdPos()
        gravity()
      })
    })
  }
}

function gravity () {
  $bird.stop().animate({
    bottom: '0'
  })
  $bird.css('transform', 'rotate(40deg)')
}
```

From here on, all you have to do is experiment with the values, to find a set that works best for you.

For reference. You can go to [link for .stop().animate](http://google.com) method explanation.

---

## Collisions (Player and Obstacle)

Collision take place when bird touches the poles(obstacle) while flying pass it and also when it touches body.height(y) top and bottom. When it do so, the game ended. A popup game over screen appear.

```
// collision with top and bottom container

function birdPos () {
  if (parseInt($bird.css('top')) <= 0 || parseInt($bird.css('top')) > $('.container').height() - $('.bird').width()) {
    gameEnd()
  }
}
```

## 2D collision detection

```
if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision detected!
}
```
Using this algorithms to detect collision between the obstacles(pole) and the bird object

---

### Work Process

1. Create basic html, flappy game screen layout.

2. Create CSS file and js file

3. Set Variable in js for each div id/class created

4. Set mouse and keydown event listener

5. Create a function to store logic to control the gravity and velocity of the bird object with vertical height and speed.

6. Detect collision when touches the top and bottom of the container

7. Create Game Over function

8. Adjust css file

9. Create pole top and bottom function, and give the pole class a negative 'right' value to move put of the screen.

10. setInterval to give pole class a speed for constant movement to the left of screen.

11. create a if statement in a function to detect collision between bird object and the pole. if collision check mean game over.

12. Create function to store a new random height for pole when it move out of the container from left and return back to the same position of the initial. Movement go on and on.

13. Increase 1 value for speed of the pole each time a new pole height is generate.

14. if statement to add score each time the bird object pass through the pole.

15. Create a gameover popup screen. And player and replay the same by clicking on the replay button.

16. Add audio for the game

17. Create a start game pop up screen

18. Add images and beautify the whole layout

---

### Future Possible Updates

* Scoring function for storing best score
* Creating more obstacles in one interval
* Difficulty Level
