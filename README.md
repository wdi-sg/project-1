# Stockbet Game

#### This game is for investing nerds. Relying only on news on different stocks, can you pick the stock that makes more money than your opponent?

---
## Gameplay

1. Set the parameters of the game: your wallet size (the amount each person has to invest), and your holding period (number of trading days before today).

2. Research stocks by entering ticker names. For now, only stocks on the Hong Kong stock exchange are available. Once you enter a valid ticker, the text area below will display recent news related to the ticker.
_(Note to game evaluator: news data not available from within browser due to cross origin issues; the data pulled instead comes from a dummy data in JSON format.)_

3. Based on your research, write up your investment thesis to help you improve over time (optional). Then, enter the ticker of the stock you want to purchase, and click Select Ticker.

4. The second player will repeat steps 2 and 3 above.

5. After both players have entered their stock picks, click Execute Trades to run the database lookup and so determine the winner.

6. Once ready, the results will show at the bottom of the page. __The player whose stock returned the most will be the winner.__
* You may email the results to yourself.
* Use the Facebook button to share the game with your friends!

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

### User Experience

* Game sections are divided into clear sections using horizontal rules.
* Optional entries are clearly indicated.
* The status bar at the top of the page displays the status at all times (i.e. not started, Player 1's turn, Player 2's turn, results available).
* When information is submitted, a confirmation message is provided, including prompts for next steps.
* The option to email game results (including their investment theses in particular) allows users to genuinely use the game as a learning tool.
* The social media share feature encourages engagement. 

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

## Data Sources and NPM Modules

1. Quandl (quandl.com), an API-enabled financial database, is used to pull price data.

2. The google-news npm package (https://www.npmjs.com/package/google-news) was used to generate the dummy data used in the news research section.
_Specifically, I used the link provided in the browser console error log to view the news data (in XML format), converted the XML into JSON, and saved the JSON file into the project directory. (Note: The original intention was to pull live news for selected stocks, but cross origin issues in the browser forced this workaround with dummy data.)_

___

#### Technologies used:
```
- HTML5
- CSS3
- Javascript
- Node (during production)
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
