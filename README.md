# **Eat This**

## **Table of Contents**
1. Overview
2. Flowchart
3. Instructions
4. Interesting Logic I Learnt
5. Motivation
6. Potential Improvements
7. Time Management
8. External Libraries/Frameworks
9. References

### **Overview**
Memory has long been a favourite game for all ages. Test your memory with Eat This - a matching card game for all those who have a strong desire to eat. This game requires a good knowledge of observation, concentration and a good memory to win. The objective of the game is to collect the most matching pairs. The game is designed so two players can play against each other and win by scoring higher than the other player.

### **Flowchart**
<img src="/assets/img/gameflowchart.png" border = 2px solid black>

### **Instructions**
<img src="/assets/img/gamescreenshot.png" border = 2px solid black>

**How To Play:**
+ Each player clicks on two cards to try and match them
+ Every successful match gives the player two points
+ The player with the highest score wins

### **Interesting Logic I Learnt**
+ Shuffle Function
  + Generate random numbers and replace numbers in an array with a while loop
  ```
  function shuffle (array) {
      let counter = array.length
      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter)
        // Decrease counter by 1
        counter--
        // SWOP
        // use temp to store last counter (20)
        let temp = array[counter]
        // random index replace with last counter (20)
        array[counter] = array[index]
        // push back last counter (20) into random index prev position
        array[index] = temp
      }
      return array
    }
    ```

+ Using for loops to add classes and assign `div`s

+ How to call functions and use multiple parameters and pass in additional arguments


+ How to use 'this' to find last clicked div
  + ```$(this).find('img').attr('src', './assets/img/back.jpg')
  cardsSave.pop()```


+ How to find values without the use of 'this' to find second last clicked div
  + ```$(`.card[data-id="${firstClicked}"]`).find('img').attr('src', './assets/img/back.jpg')```

### **Motivation**
I like food, I thought this would be relatively simple, but as I added more functions, I soon realised the many problems one function could cause.

For example, adding the ```avoid clicks class``` causes the program to lag at times as the player does not realise the code is still checking for matches and continues to click frantically which in turn causes more confusion with the checking.

Fortunately, there are a lot of helpful resources in this course and online, which helped me to overcome these problems.

### **Potential Improvements**
+ CSS reorganisation, reduce/increase the number of cards to fit well within one frame without scrolling
+ Animate card flips
+ Think of a way to get around the clicking bug
+ Reduce the need for myArray by renaming images

### **Time Management**
+ 29 September 2017: Thought about flow of game and pseudocode, started writing some shuffle functions and understand them
+ 2 October 2017: Fixed shuffle, flipback and match functions with help from Prima
+ 3 October 2017: Added timer, score, start and restart buttons, reorganised code
+ 4 October 2017: Made the game two players, added instructions, used css to style the game and got help from Prima to learn how to refactor code
+ 5 October 2017: Fixed issues with flipback of matched pairs and winning logic

### **External Libraries / Frameworks**

[JQuery] (https://jquery.com/)

### **References**
+ Shuffle Function: https://bost.ocks.org/mike/shuffle/
+ Images:
  1. https://www.instagram.com/naturally.jo/?hl=en
  2. http://www.godiva.com.sg/sgen/self-treats/ice-cream-chocolate-soft-serve.html
  3. https://keioaboutchocolate.wordpress.com/about/
+ Everyone who helped me
