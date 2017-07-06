
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game


### nineString.
https://merejarvis.github.io/project-1/


1.  A game where players must form as many words as they can in 90 seconds from a random string of 9 letters.

2.  Players can choose to **regenerate** the random string twice during the game.

3.  Hit **'Enter'** key to submit words.

4.  Longer words yield more points! Be fast enough and get into **COMBO!** mode where your points are endless!!!

**Current top score > 12000! (can't remember exactly!)**


---

### Conceptualization

During this phase, I thought of a few ways that the game's logic can be programmed:

1.  use 'unscrambler' websites such as http://wordunscrambler.com/ and hardcode the results based on predefined strings

2.  have an algorithm generating random 9 letter strings and a super algorithm churning all possible permutations and combinations of letters based on this string (Total generated results would be 9!+ 9C8 x 8! + 9C7 x 7! +... + 9C2 x 2! + 9 which would yield about a million results!!!) Then filter the results using a built in dictionary. More on the dictionary later....

3. generate a random string biased on the number of times letters appear in the English language. This link was highly useful (https://stackoverflow.com/questions/24986020/word-games-in-javascript).
After which, compare the user input with a built in dictionary and the generated string.

For this project, I utilised **method 3**. Method 1 would be limited (and boring!). Method 2 is ideal but I did not find an algorithm which could churn out all possible combinations and permutations of a string and test the usability on a 9 letter string during the course of this 1 week project. I did come across Heap's algorithm which provides all permutations of a string but that was it!





---

### Dictionary

* English Open Word List or the EOWL has a library of over 128000 words! Find it here: http://dreamsteep.com/projects/the-english-open-word-list.html

* A kind soul by the name of Tim Crouch also known as JackolanternIR developed a program for wordGameDevelopers to generate random words and to determine whether a word is part of the English language by integrating the EOWL. Thanks Tim/Jack! Look it up here:
https://github.com/JackolanternIR/WordList-JS

---

### Possible Improvements

Method 3 is theoretically not foolproof as the user will not know when all combinations of a certain string have been exhausted, as well as the small amount of times when they land up with all consonants (good luck with that!).

I tried to mitigate these with a 90 sec game **(BLITZ MODE ON!)** as well as a regeneration function and of course, a generous amount of letters!

* **Improved string generation algorithm** If its possible to get the algorithm as mentioned in Method 2 , we can work on it and maybe reverse engineer and write a program which will generate strings with similar maximum points, for added fairness and competition!


* **Further gamification**: more levels, increasing difficulty, a relaxed mode and a blitz mode (for different users.. and moods :) )

---



---

### Acknowledgements

**Music**: http://www.bensound.com

**Dictionary function**: Tim Crouch

UK Advanced Cryptics Dictionary Licensing Information:
Copyright © J Ross Beresford 1993-1999. All Rights Reserved. The following restriction is placed on the use of this publication: if the UK Advanced Cryptics Dictionary is used in a software package or redistributed in any form, the copyright notice must be prominently displayed and the text of this document must be included verbatim.

**Link up with me at reemza77@gmail.com!**

---
