# Star Power !

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Star Power !


### Overview



![star girl](/assets/images/PinkStarGirl.gif "star girl")

Simple side scroller game

It's that time of the year again, special **Stars** are falling through the skies. littering precious stars of sorts over the lands. Collect these special stars to auction them off at the upcoming **MEGA STAR BAZZAR**. The more stars collected, the more gold can be gained. Think about the children at the orphanage.

**Player** will be moving across screen collecting stars fallen from the sky, each star has a different score. Collect as much stars as humanly possible to earn points! But watch out for the pesky **7 month cat ghost**, they are here to steal your stars away, they can't resist shiny stuff.

**TL;DR** Collect stars and avoid cat ghost.

---

---

### Technical Codes
```

                        ."      _.---_
                       / |     /___--"     
                       |/           
           __--=======-+"..-..
         //           /\  "-__\
       //  __         \/
     //   //\\        
_-==//==-.|| || _---_    .     -      .-==-.   .-._
./   //     ||// //   \\   ||   | \    //    || //   \\
  //     .||  ||     |\./\\  /|^\\  ||-===-" //     ||
 //        \=//\=___=//^  \\//   \-/ \\=...="/       \==-.
//                 
.
```

###### Codes:

* **Flower**

Here I created a constructor with the purpose to create flowers of different properties. Each time a flower is create, it will have a particular set of properties that is unique to one of the 5 classes created. In here I use (this) to bind the values needed to each flower created at the interval.

* **fall**
```
fall () {
  var position = this.element.position()
  this.element.css('top', position.top + this.speed)
  if (position.top > '600') {
    this.element.remove()
  }
}
```
Here I am making the fall effect, coming from the top of the game screen, then removing them when they hit a certain height. This will stop them from falling all the way down the page.

* **leaderBoard**
```
var highScoreArr = JSON.parse(localStorage.getItem('HighScore'))
  highScoreArr.sort((a, b) => b - a)
var storage = window.localStorage
```
Creating a localstorage to hold highscores. scores in the array are taken out as a string, JSON.parse will change it to an object. Then only can the sorting from High to low scores be done.
```
if (!highScoreArr.includes(score)) {
  highScoreArr.push(score)
  localStorage.setItem('HighScore', JSON.stringify(highScoreArr))
  ```
If highScoreArr does !NOT is the same as in the array, it will be pushed into it.
Using JSON.stringify to make highScoreArr a string so it can be stored in the local storage. local storage does not accept objects, just strings.

  ```
  $highscore.text(`HighScore: ${highScoreArr[0]}
                   HighScore: ${highScoreArr[1]}
                   HighScore: ${highScoreArr[2]}`)
```
Scores are updated each time the game is played, showing only index[0,1,2] means only the top 3 scores will be shown.
---

---
### Necessary Deliverables

* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your GitHub repo
* A **git repository hosted on GitHub**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
---

---

### Gameplay Flowchart
![flowchart](https://raw.githubusercontent.com/sillyadventures/project-1/master/assets/images/flowchart.png "flow chart")

![gameplay](https://raw.githubusercontent.com/sillyadventures/project-1/master/assets/images/gameplay.png "gamplay")

![legend](https://raw.githubusercontent.com/sillyadventures/project-1/master/assets/images/legend.png "legend")

---

---

### Potential Advancements

##### Player 2 option
Create a Player 2 option for friends to join in the fun!

Hit box collision for both players, able to push the other one away, a Jump ability.

##### Different level layouts & player avatar
Create different levels with obstacles.

Have different avatars for players to choose from.

---

---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_
* **[How to write readme - Markdown CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)** _(for editing this readme)_
* **[How to write a good readme for github repo!](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)** _(to make it better)_
# Powered By : [![N|GitHub](https://cdn1.iconfinder.com/data/icons/logotypes/32/github-128.png "Git Hub")](https://github.com/)

---

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
