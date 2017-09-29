# Sweet Tooth
<!---
Read Me Contents
-->

# ![](http://kidsdentistrynyc.com/wp-content/uploads/2015/03/tooth.png)



### Overview

**Sweet Tooth** is a tile matching games where player are supposed to swap tiles to make a match of three or more. Within the tile, there are different type of sweets(e.g strawberry short cake, vanilla round cake, rainbow cake)

Go ahead and join in the fun, feeding the tooth more sweet by matching the different type of sweets.

---

### Flow Chart

![](/flowchart.jpg)
Your app must:

* Once the game is started, the **countdown timer** will run. The game will end when the timer reach zero.
* After the timer is set, the grid is set.  

* Check for match of three or more. Add points if yes and remove elements.Push the elements down to fill the empty space.
* Let player moves the element if there is no match of three or more.
* Check for match of three or more after the player moves.
* End the game when timer is up.


---

### Details-Array

* For the grid, I will be using 2d Array.
* Currently, will work with 4x4 grid. If it works, will increase to 5x5, 6x6(if possible) once it is working.
* At the backend, the array will look like [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]]
* On the front, it will be
![](/arr-front.png).
* By using this method, it will allow elements (sweets) to be push down in the column.

---

### Key issues

* **Setting the grid** There is a need to randomize the elements(sweets) that is insert into the grid.
(Math.random may return lower value after a few run)
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
The elements should try to have different color. (red, white, brown etc.)

##### The image for the elements should be cute. (Personal preference).
Maybe to consider 8 bit graphics.

---

### Self Remainder

** To create a _functional_ game with even bad graphics first. **
