# Star Power !

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Star Catching


### Overview



![star girl](/assets/images/PinkStarGirl.gif "star girl")

Simple side scroller game

Once a year, on a special day, special **Cloud Flowers** breeze through the skies. littering precious flowers of sorts over the lands. Collect those flowers to auction them off at the upcoming **MEGA FLOWER BAZZAR**. The more flowers collected, the more gold can be gained. Think about the children at the orphanage.

**Player** will be moving across screen collecting flowers fallen from the sky, each flower has a different value. Collect as much flowers as humanly possible to earn points! But watch out for the pesky **humming bird**, they are here to steal your flowers away!

**TL;DR** Collect flowers and avoid birds.

---

---

### Technical Codes

###### Codes:

* **collision**

```
var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}
```

* to calculate **score** when flowers collides with player HitBox.
* Flower falls downwards in a straight line.
* < more to come >
*
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
* **Deploy your game online**, where the rest of the world can access it
* Use **Javascript** for **DOM manipulation**, jQuery is not compulsory
*

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
