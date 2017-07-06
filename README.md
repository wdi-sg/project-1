# Simplified UNO! for 2
<!---
Read Me Contents
-->

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Overview

This is a simplified version of the classic card game UNO!. It allows only two players: a human player and the computer player. The players are dealt a deck of cards each and take turn to discard their cards one-by-one according to rules regarding card colors and values. During gameplay if none of a player's cards on hand comply with rules for discard, the player has to draw an additional card from the Draw Pile as penalty. The first player to discard her or his entire deck wins.   

---
### Overview of Game Elements

**Game Objects**

* Draw Pile: The initial deck of 76 cards.  
* Human Player's Pile: An initial deck of 7 cards dealt from shuffled Draw Pile.
* Computer Player's Pile: An initial deck of 7 cards dealt from shuffled Draw Pile.
* Discard Pile: One initial card dealt from shuffled Draw Pile. Last played card of each turn is stacked on top on Discard Pile.
* Card: Colors - red, green, blue, yellow; Values - 0 to 9

**UI Objects**

* Draw Pile: A PNG image of a covered UNO stack
* Human Player's Pile: Revealed UNO card PNG images
* Computer Player's Pile: Covered UNO card PNG images
* Discard Pile: Last played, revealed UNO card PNG image
* Start button: To begin game play
* Reset button: To stop game and clear UI objects from page
* Draw Card button: For human player to draw a card from Draw Pile
* Game Message Console: To indicate player's turn and game status (i.e. win, UNO!)

**Game Actions**

* Create a card
* Create a Draw Pile
* Shuffle the Draw Pile
* Deal X number of cards from Draw Pile to player
* Select a card to play
* Draw a card from Draw Pile
* Start a game
* Reset game
* UNO!
* Inform win or lose

**Game Decisions**

* Computer: Is card played legitimate? Card same color or number or is card wild
* Computer: who wins?
* Computer: is game over?
* Computer: is there UNO?

**Game Status**

* Has Game Started?
* Whose turn currently?
* Has a card been played by Human/Computer successfully?
* Computer Player Pile No of Cards Left
* Human Player Pile No of Cards Left


---
### Game Flow

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

**Starting Game**

1. Generate an array of card objects as Draw Pile
1. Add click listeners to buttons: Start, Reset, & Draw Card
1. IF "Start" button clicked THEN:
    1. Proceed if game not yet started
    1. Shuffle Draw Pile
    1. Deal 1 Card to Discard Pile
    1. Deal 7 Cards from Draw Pile to Human Player
    1. Deal 7 Cards from Draw Pile to Computer Player
    1. Display Human Player's cards on Game Page
    1. Add click listeners to Human Player's individual cards on Game Page
    1. Display Computer Player's cards on Game Page
    1. Display Discard Pile card on Game Page
    1. Print "Awaiting Human Player move" on Game Page
1. IF "Reset" button clicked THEN ()
1. IF "Draw Card" button clicked THEN:
    1. Proceed if game has started and turn belongs to Human Player
    1. Draw a card from Draw Pile and deal to Human Player
    1. Switch turn to Computer Player
    1. Computer Player plays
    1. Switch turn back to Human Player
1. d
1. d

2. If game started, relabel "Start" button to "Restart"
3. Computer shuffles DrawPile once for the new game
4. Computer draws topmost 7 Cards from DrawPile and deals them to ComputerPlayer
5. Computer draws topmost 7 Cards from DrawPile and deals them to HumanPlayer
6. ?? Computer draws topmost Card from DrawPile adds to top of DiscardPile
7. HumanPlayer starts new game first
8. IF PlayerTurn = HumanPlayer, ?? Human deliberates on which one Card to play and upon decision click on the Card to play (GOTO Step 10)
9. ELSE IF PlayerTurn = ComputerPlayer, Computer calculate and play card (GOTO Step XX)


### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Any number of players** will be okay, switch turns will be great
* **Design logic for winning** & **visually display which player won**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **Javascript** for **DOM manipulation**, jQuery is not compulsory
* **Deploy your game online**, where the rest of the world can access it
* Use **semantic markup** for HTML and CSS (adhere to best practices)
* **No canvas** project will be accepted, only HTML5 + CSS3 + JS please

---

### Necessary Deliverables

* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your GitHub repo
* A **git repository hosted on GitHub**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems
* Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

---

### Potential Project Ideas

##### Blackjack
Make a one player game where people down on their luck can lose all their money by guessing which card the computer will deal next!

##### Self-scoring Trivia
Test your wits & knowledge with whatever-the-heck you know about (so you can actually win). Guess answers, have the computer tell you how right you are!

---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_
* **[How to write readme - Markdown CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)** _(for editing this readme)_
* **[How to write a good readme for github repo!](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)** _(to make it better)_

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
