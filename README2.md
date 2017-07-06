# Project Name (Start editing here)
<!---
Read Me Contents
-->

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Cat-Tile Game

### Overview

A spin-off of the Piano-Tile Game on iOS and Android

Concepts of the game are the same as the original, clear as many tiles within a period of 30s to get the highest score possible.

---
### How it Works

The whole game is based on an array. Before the game starts, the array (gameArray) contains no elements in it.

```
var gameArray = []
```

 A keydown event will trigger the first set of random numbers. This is achieved through a function called gameStart() which incorporates a function called ranzomier() that radomizes numbers.

 ```
 function gameStart () {
   gameArray.push(randomizer(1, 4), randomizer(1, 4), randomizer(1, 4))
 }
 ```

The gameArray will look something like this in the console:

 ```
[2, 1, 3, 4]
```

Now subsequent keydown events will trigger a function that removes the last element and at the same time adding a new random element in array[0]. The function is as follows:

```
function turn () {
  gameArray.pop()
  gameArray.unshift(randomizer(1, 4))
}
```

Now if we repeat turn () multiple times with each keyDown event, our array will look something like this:

```
[3, 2, 1, 3]
[3, 3, 2, 1]
[2, 3, 3, 2]
[4, 2, 3, 3]
[1, 4, 2, 3]
[1, 1, 4, 2]
```
Can you see the pattern? It is as if the first number of the array is traveling from left to right with each new array.

Now we introduce the event checker. The game only allows you to proceed if the variable assigned to the keydown is the equal to array[3]. For example if

```
var A = 1
var B = 2
var C = 3
var D = 4

//where A is the variable created when key A is pressed etc.
```
then for the above arrays we created with each keydown, it must pass the following checker in order to proceed with the game:

```
function () {
  gameArray[3] === X
}

// where X is either A, B, C or D
```
---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Total__: Your instructors will give you a total score on your project between:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectations, good job!_
    **3** | _Exceeds expectations, you wonderful creature, you!_

 This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!
