# Stockbet Game

#### This game is for investing nerds. Relying only on news on different stocks, can you pick the stock that makes more money than your opponent? 

---
## Gameplay


---


## Game Mechanics

Using level 1 as an example:

![Level 1](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/level1.jpg)


* each level has a 2D start array (var levelArray) and 2D solution array (var solutionArray).
* there are 6 graphic elements into two rows.
* each graphic element corresponds to a "type".
[See Game Elements below](#game-elements)
For example on the top row, starting from left, graphic is type 11, follow by type 21, type 13.
Therefore from the start array, the graphic elements are populated based on the "type".
* every click rotates the graphic element clock wise.
* each click of the graphic element updates the play Array (var playArray). For example when top left graphic element is click, the playArray[0] is updated to 12, another click would update playArray[0] to 13. play Array (var playArray) is then compared with the solution Array (var solutionArray), if all indices values match, the solution is found.
* there are two special handling for "type" 5 and "type" 0, since they are symmterical in all orientation, there is no need to update the playArray.
* the solution is then displayed (function displaySolution).

Other level designs can be found here:
* [Level 2](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/level2.jpg)
* [Level 3](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/level3.jpg)
* [Level 4](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/level4.jpg)
* [Level 5](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/level5.jpg)
* [Level 6](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/level6.jpg)
* [Level 7 start](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/level7-start.jpg)
* [Level 7 solution](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/level7-solution.jpg)

---

## Functions in the Game


#### init ()
* initialises game
* set level to 1
* clear graphic element (clearGrids function)
* show instruction text (showInstruction function)
* load first level by calling loadLevel function

#### loadLevel (levelNum)
* loads level
* initialise playArray by making a copy of the levelArray (the starting orientation of the graphic element)
* populate rows with graphic elements

#### rotate ()
* checks current graphic element orientation, then rotates graphic element by inserting a CSS animation class
* calls updatePlayArray function
* checks if there is a solution (checkSolution function)

#### updatePlayArray ()
* Updates the playArray

#### checkSolution ()
Compares playArray against solutionArray for each click of graphic element, if true, call displaySolution function
```
if (checkSolution() === true) {
    clearGrids()
    displaySolution(currentLevel)
  }
}
```
#### displaySolution (levelNum)
* displays solution for current level
* displays button to go to next level

#### displayGameOver ()
Displays "Game Over" screen

#### clearGrids ()
Clear rows of graphic elements

---
### Game Elements
Type 1 graphic element:

![Type 1](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/type1.jpg)

---
Type 2 graphic element:

![Type 2](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/type2.jpg)

---
Type 3 graphic element:

![Type 3](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/type3.jpg)

---
Type 4 graphic element:

![Type 4](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/type4.jpg)

---
Type 5 graphic element:

![Type 5](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/type5.jpg)

---
Type 0 graphic element:

![Type 0](https://github.com/wdi-sg/wdi-project-1-johnacs/raw/master/assets/readme/type0.jpg)

---

#### Technologies used:
```
- HTML5
- CSS3
- Javascript
- JQuery
```

---

### Technical Requirements

Your app must:

* **Any number of players** will be okay, switch turns will be great
* **Design logic for winning** & **visually display which player won**

---

### Unsolved Problems

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?
