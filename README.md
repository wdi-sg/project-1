# Project 1: Maplestory XII
### Overview

Game is based on **Maplestory**, a Mass Multiplayer Online Role Playing Game (MMORPG)
## Controls
- Left and Right arrow keys to move horizontally
- Space to jump
- "C" to attack
- "D" for skill 1
- "X" for skill 2
- "Z" for skill 3
##### Instructions

Control your character and avoid dying to the mobs spawned, your character has a mana pool as well as a hitpoint pool. If your mana pool is depleted, you will not be able to use any skills till it regenerates. Once your hitpoint pool reaches zero, you die and the game ends.

Kill enough mobs and the boss awaits you!

### Log
Currently working on making the initial base fighting area and the main player
* 1/10/17 - Added jump capability and changed mob movement to follow player instead of preset axis
* 2/10/17 - Changed CSS styles and edit to fix axis differences
* 3/10/17 - Added health bar and player hit points
* 4/10/17 - Added mana regen and mana bar, replaced manual spawn with class based spawning and added various functions to check for game status.
* 5/10/17 - Added boss and 2 more skills to character, edited main skill and attack functions to accomodate to boss feature

### Image Log
**29/10/17 (Initial Draft Frame)**
![](/assets/images/old.gif)
**4/10/17**
![](/assets/images/v2.png)

### **BUG REPORT**
  * Jump is still choppy, unable to remove 1 sec delay from continuous button pressing.
  * Collision detection for far left side of the map working properly (0-200px)
  * Mobs occasionally not dying, pressing skill button kills them and ends bug


### Flowchart

![](/assets/images/flowchart.jpg)

---
