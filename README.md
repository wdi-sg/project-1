# On The Other Side
<!---
Read Me Contents
-->

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Introduction
[On The Other Side](https://imjustlooking.github.io/project-1/) is a platform puzzle game in which the player guides two balls into their respective 'goals'.

I created this game over a course of 6 days as part of our WDI-12 batch's first project assignment at General Assembly.

This idea came about initially as a backup plan. I was considering if my coding-beginner skills were robust enough to create something more demanding, like a resources-based survival game. The concept felt like a relatively achievable project which I could manage, and, while it was, it was also quite a satisfying run.
### Overview
This game operates in two dimensions which reflect each other in certain ways. You control the ball on the left, and **on the other side**, its ball moves in the opposite direction. Blue moves left, Red moves right.

![](/assets/img/ballmovedemo.gif)

However, the terrain **on the other side** isn't always the same.

To pass each level, the player has to move **both balls** into their respective holes.

![](/assets/img/ballGoalDemo.gif)

If the balls fall beyond the playing field, they can click the reset button below the panel.

Upon clearing each level, a button appears and allows the player to proceed after clicking.

<!-- There is a special skill the player can use, align, which lets both balls move in the same direction for a few seconds. Click 'button' to activate this each level. -->

### Basic flow

Basic flow chart which outlines the game mechanics
# ![](/assets/img/ontheothersidev1.jpg)

Tried to do another flow chart below, which was still quite basic, additional features were added subsequently.
# ![](/assets/img/Project-1 flowchart.jpg)


---
### Thoughts and progress

I did not track my progress rigorously, but had been committing and pushing major changes onto git hub. Here, I look through the update logs, and try to reconcile each day's efforts and (many) frustrations.

Firstly, as far as the game overview is concerned, the game's logic works similarly to my vision (though improvements can always be implemented). However, there was a piece of the initial idea which I had scrapped:
###### *"There is a special skill the player can use, align, which lets both balls move in the same direction for a few seconds. Click 'button' to activate this each level."*

I didn't pursue this eventually due to time restrictions and the tedious nature of my level set-ups.

#### Let's quickly get into the timeline:

**Day 0, Friday:**
Idea proposal to instructor Primaulia.
Scrappy flowchart planning (refer to pictures above), readme writeup of game description, ~~no real~~ zero coding done

**Day 1, Saturday:**
Coding begins. Created the playing field, added the balls and movement logic upon user-input keystrokes. Added functions to rectify the ball movement exceeding the border

Quite an encouraging start.

**Day 2, Sunday:**
I remember giving the project lower emphasis after being particularly productive the previous day. I played PUBG, it's a good game, and I hadn't played at all since the course began.

Since Monday approaches, at night I added winning conditions and logic. Integrated into ball movement.

**Day 3, Monday:**
Thought about the game flow, and it seemed quite daunting while coding the basics previously.

*Referred to one physics formula to add gravity to the game: (displacement = 0.5 * gravitational acceleration * time(Squared))*

Quite pleasant that it works realistically. I still am at time of writing. However, the system was still far from completion compared to my peers and I was annoyed at my pace.

Also added a jump feature which ties into gravity.

**Day 4,5 Monday,Tuesday:**
Project low point.

The gravity feature works based on a high frequency setInterval, in order to smoothen the ball drop. It also means it's possible to slip through the platforms. I created the platforms (vertical obstacles) in between day 3 and 4, but didn't log the comments.

Asked TA's for help, got some recommendations. Wasn't really what I was looking for, and my code might have been too smelly. It seems there is a stopping distance even though the console log registers triggers. Managed to find a solution to fix the ball position as well as allocate an allowance. Also increased frequency of gravity(). More stable chances of ball not slipping through. (still occurs occasionally now)

Time is short, so once I got gravity to work more reliably, started to set up a demo level. Anyway, was about to throw in the towel and create another game, when I realized after some google-fu that we can adjust CSS properties such that removed elements do not leave any 'pixel placement scrambling effects'. position: absolute was a lifesaver and morale booster. I had ALSO created walls (horizontal obstacles), which I will find on the next day to be ridiculously bugged.  

**Day 6 Wednesday:**
Yesterday. The wall additions allow for some horizontal super mario meets pipe interaction.
# ![](/assets/img/mariopipe.gif)

Except this happens horizontally, and my ball doesn't require an opening to pass through.Horrible and also funny, more horrible though. I should have recorded a gif but I wasn't thinking about documenting it.

 Spent 3-4 hours improving the collision detection models. I have also been questioned many times on why I have separate collision models set up for the left and the right side of each Wall. It's because the inequalities to check the pixel position will spill over and cause super mario ball to happen. Anyway, I fixed it for most of the part, though the ball still floats through occasionally, even now. We can thicken the Wall or make the ball land first though.

 I also went home and added a few levels. Level set up is a tedious process, trying to balance making the game slightly challenging and rewarding as much as I could. Lots of trial and error while inputting the pixel positioning. I had used constructors for the platform and Walls. Added some button functionalities to proceed to next level etc. One of the biggest improvements to my workflow was adding a skip button because I had to keep beating each level to see how the level layout would be like. I left the skip button in the game for frustrated players and also presentations.

 **Day 7 Thursday, today, 5th Sept:**

 Soft launch day. Game looks decent to me, had a few coursemates who tried it and seemed to like it a bit. Added some really basic CSS colors. Also put in more immersement such as sounds, as well as auxiliary features to toggle sounds. Included hotkeys for buttons so user can do away with the hassle of moving the mouse every few seconds to click.

 I'm an hour and thirty minutes away from the code freeze. While I feel the mechanics were quite a headache to implement, ultimately I'm happy to have chosen this project. This was what I signed up for, to learn and apply. It really let me connect the dots in a way that only I was responsible for, and I'm pleased at the outcome, though it's not that visually pleasing. Thank you for reading this portion, I hope you too have had experienced that satisfaction before.

### Improvements to be made
**Walls:** I had tried to apply a for loop on Walls to make multiple horizontal obstacles. However, it seemed it did not work on multiple Walls beyond the first. Troubleshooting it didn't really work either. In the end, I opted to work with this restriction and include just one wall in each level set up.

**Level setup:** Honestly the levels could be improved much more, but most of my project time was allocated to fine tuning the mechanics. The placement of the platforms and walls can be adjusted further to give the player a more rewarding gameplay experience, e.g. more required use of asymmetric movements between the balls.

**CSS:** Not the most enticing game to play at first glance. My h1 element has some whitespace which I unsuccessfully tried to remove. (but that's not the main point) I did try to make the display as simple as possible, summarize the instructions etc. Also, improve the 'juiciness' of the game such as bounciness of the platforms upon landing.

**Smelly code:**
I believe there are ways to be more efficient at coding, like reducing how many times an instance appears. DRY and KISS: I'm still learning!


### References
Not much here, unless online resources such as stack overflow, MDN, are to be counted, then I'd have a long list.

I used free sound files via [freesound.org](http://freesound.org) which I linked the author's profiles to at the bottom of my game.

I also used wikipedia for the gravity formula, but it seems the page no longer looks the same, or I can't find it. But [here's](http://www.school-for-champions.com/science/gravity_equations_falling_displacement.htm#.WdXiRROCzVo) another resource you can use to see the gravity displacement.

# ![](/assets/img/gravityformula.png)
