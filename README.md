# Food Memory Game

<img src="/assets/img/gameflowchart.png" border = 2px solid black>

## Project #1: The Game

### **Overview**
Memory has long been a favourite game for all generations. Test your memory with Food Memory Game - a memory card game for all those who have a strong desire to eat. This game requires a good knowledge of observation, concentration and a good memory to win. The objective of the game is to match all the pairs.

### **Instructions**

### **Challenges**
+ How to make shuffle function
+ How to make card flip transition, rise up to center of the screen

### **Logic**
+ Shuffle/Restart Function
  + Activated after winner is declared and to restart game
  + Store image refs in an array variable
  + Use Math random to randomise the index
  + Store the generated indexes in an array and check through the array while generating the random indexes to ensure that there are no repeated indexes
  + Make 20 div
  + Assign images to each of the 20 div using the randomly generated index
  + Give each image a data-attribute, with pairs having the same data-attribute (number)
  + Preparing game for restart


+ MatchCard Function
  + Current player flips two cards
  + If data-attribute is same, return true, leave cards upturned and return match, add 2 points
  + If data-attribute is different, return false, use setInterval to turn down cards
  + Turns of player automatically switched

+ FlipCard Function

+ GameOver Function
  + Return true or false if game is over

+

### **Daily Progress**

### **Tech**

This game was written with: jQuery

<!-- ### **Resources** -->
