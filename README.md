#Project#1:  Sweet Tooth
<!---
Read Me Contents
-->

# ![](/assets/css/img/whiteteeth.png)



### Overview

Sweetly is a **Sweet Tooth** from the tooth kingdom. After a long duration of lack of sweets due to working, she found her health deteriorate that she has turned yellow. Help Sweetly regain her health and become stronger by feeding her more sweets.

![](/assets/css/img/sweettoothcharacter.png)

Swap sweets to make a match of three or more to feed her. Beware as she has only 100 seconds break time to eat.

![](/assets/css/img/gameplay.png)


Different types of sweets available for Sweetly: rainbow cake, vanilla cupcake, ice cream, chocolate cake and strawberry parfait.

![](/assets/css/img/sweetstype.png)

---

### Flow Chart

![](/flowchart.jpg)

* Once the game is started, the **countdown timer** will run. The game will end when the timer reach zero.
* After the timer is set, the grid is set.  

* Check for match of three or more. Add points if yes and remove elements. Push the elements down to fill the empty space.
* Let player moves the element if there is no match of three or more.
* Check for match of three or more after the player moves.
* End the game when timer is up.
---

### The Grid : Using 2d Array for this game

#### Setting the grid
* As it is 2d array, the game require 2 for loop to create the individual elements for the grid.

#### Checking the grid
* The game uses 2 for loop to check through the rows and another 2 for loop to check through the column.
* When checking, the game push the id of elements with the match of three or more to an array, this is so that it can be remove later on.
* The removal and calculation of score will be at another function.

### Checking available moves
* checking through this few possible move.
If value in the red box match, check if the value at the blue cross is same as the value in red box. For each combination, the game run 2 for loop to check.

![](/assets/css/img/combi1.png)
![](/assets/css/img/combi2.png)

---


### Key issues (before start coding)

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
### Key points (after coding)

* **Removing elements(sweets)** Let the elements value be equal to undefined. Undefined is chosen as during the push down function, if there is no value for the function to push down, it will generate undefined in the array.

* **Linking box values with the visual.**
Using the addClass method. Tried using string value ie('strawberry') but it affect the undefined value in some of the function. (undefined become "undefined" instead)

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
* check when after swapping the elements if there is no match, it should change back.
* able to change character image based on score
* increase grid to 5x5

version 0.9.0: (5/10/2017) added:
* end game screen
* check through the code and removing all the comments etc.

Current timing: checkGrid to removeElements(0)
removeElements(removing 300) to pushdown(250) to generateElements (300) to checkGrid (300)
full cycle 1,150.

---

### Potential Improvement

* Use Javascript to build the box(the grid) instead of coding into the html. Allow for the game to be scalable. Instead of having 5x5 grid, it can be 6x6 grid or 6x4 grid.

* Consider using 1d array.

* Adding sound effect to the game.

* Adding instruction page.
