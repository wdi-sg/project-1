# Sweet Tooth
<!---
Read Me Contents
-->

# ![](http://kidsdentistrynyc.com/wp-content/uploads/2015/03/tooth.png)



### Overview

Sweetly is a **Sweet Tooth** from the tooth kingdom. After a long duration of lack of sweets due to working, she found her health deteriorate that she has turned yellow. Help Sweetly regain her health and become stronger by feeding her more sweets. Swap sweets to make a match of three or more to feed her. Beware as she only has (100) seconds break time to eat.

Different types of sweets available for Sweetly: rainbow cake, chocolate cake, ice cream, vanilla cupcake and strawberry parfait.

---

### Flow Chart

![](/flowchart.jpg)

* Once the game is started, the **countdown timer** will run. The game will end when the timer reach zero.
* After the timer is set, the grid is set.  

* Check for match of three or more. Add points if yes and remove elements.Push the elements down to fill the empty space.
* Let player moves the element if there is no match of three or more.
* Check for match of three or more after the player moves.
* End the game when timer is up.
---

### Details-Array

* For the grid, I will be using 2d Array.
* Currently, will work with 4x4 grid. If it works, will increase to 5x5, 6x6(if possible).
* At the backend, the array will look like [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]]
* On the front, it will be
![](/arr-front.png).
* By using this method, it will allow elements (sweets) to be push down in the column.

---

### Key issues

* **Setting the grid** There is a need to randomize the elements(sweets) that is insert into the grid.

* **Checking matching system** How do I check if there is match of three?
Suggestion: to check all the possible "winning" condition.
* **Removing elements(sweets)** After there is match of three, the system should remove the matching set from the grid.
Suggestion: To set the value to be = null.
* **Push the elements**
If there is empty space below, elements(sweets) should be moved down to fill the empty space.
Suggestion: To check if the current box value is null, if yes, make it equal to the value of box above. (shift down one by one.)
* **Adding elements at the top when it is empty**
Need to create a function that will generate random elements(sweets)
* **Check if there is available moves** If no, reset the grid.
**Suggestion**: to search more online.
* **Let players move** Check whether the two elements that the player click is adjacent.(1st selection should be next to 2nd selection)
* **Changing the elements position**
**To Test:**
Whether [a,b] =[b,a] method works?
Using temporary var to store one of the values.
```
var temp = a
a = b
b = temp
```

* **Linking box values with the visual.**
Suggestion: to use addClass function.
**To Test**
```
Var boxValue = array[i][j]
array[i][j].addClass(`${boxValue}`)
```
If boxValue is string values (e.g "strawberry"), will it add class of strawberry to the box?

---

### Visual

##### Color
The elements should have different color. (red, white, brown etc.)

##### The image for the elements should be cute. (Personal preference).
Maybe to consider pixel art.

---
### Versions

version 0.2.0:(1/10/2017) added necessary function:
* Generate the different elements.
* Checking the grid for match, increase score for match, delete the 3 or more matching elements and push those elements above down, add new elements to the top.
* visual: Able to differentiate between different types of elements. Able to see the total score.

version 0.4.0:(2/10/2017) added:
* one more type of elements: cream color.
* the swapping element function.
* able to remove match of 5
* added delay to most of the function to aid player to view what is going on

version 0.6.0:(3/10/2017) added:
* check available move function
* reset grid function. (with remove class and add class 'Box' function)

version 0.8.0:(4/10/2017) added:
* working timer, grid is removed when timer reach zero.
* better visual design
* check if after swapped, there is any match, if no, should change back two elements swapped.
* able to change character image based on score
* increase grid to 5x5

current timing: checkGrid to removeElements(0)
removeElements(removing 300) to pushdown(250) to generateElements (300) to checkGrid (300)
full cycle 1,150.

yet to add
extra
* more score for match of four or five.
---

### Self Remainder

** To create a _functional_ game with even bad graphics first. **
