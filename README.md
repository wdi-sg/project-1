# Stockbet Game

#### This game is for investing nerds. Relying only on news on different stocks, can you pick the stock that makes more money than your opponent?

---
## Gameplay

![screencap](https://github.com/mmmlll/p1_stockbet/blob/master/images/screencapture.png?raw=true)

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

#### init
* initialises game
* set player to 1
* clears variables

#### initiateParams
* Create an object that stores the parameters submitted by players.
* Activated when player clicks on Submit button in the Game Parameters section.

#### displayNews
* Pick out desired data based on large JSON file (fakenews.json used as json source).
* Display selected information within the news area.
* Activated when player clicks on Go button in the Players' sections.

#### createPlayerData
* Create an object that stores the data submitted by players: investment thesis and stock to buy.
* Push the object into a playersDataArr array (one object per player).
* Display text to confirm data submission, and prompt for next step. Next step differs depending on which player is playing.
* When both players have played, summarize their data in the section titled "Ready to Make Your Bets?"
* Activated when user clicks on Select Ticker button in the Players' sections.

#### getPrice
* Opens an XMLHttpRequest to Quandl database for the specified stock ticker. The URL format is roughly: "https://www.quandl.com/api/v3/datasets/HKEX/TICKER.json?kky".
* Returns an object with voluminous amounts of data (e.g. daily price going back as far as 2014).
* Called back by determineWinner (see below).

#### determineWinner
* Callsback getPrice and manipulates the data object returned ('dataObj').
* Using data from dataObj, populates playersDataArr array with information on the start and end price, start and end dates, return on investment, and wallet size.
* Winner is determined as the player with the larger wallet.
* Results are displayed in the Results section at the bottom of the page.
* Activated when user clicks on Execute Trades button in the "Ready to Make Your Bets?" section.

---

### User Experience

* The status bar at the top of the page displays the status at all times (i.e. not started, Player 1's turn, Player 2's turn, results available).
* Game sections are divided into clear sections using horizontal rules. Optional entries are clearly indicated.
* When information is submitted, a confirmation message is provided, including prompts for next steps.
* The option to email game results (including their investment theses in particular) allows users to genuinely use the game as a learning tool.
* The Facebook share feature encourages engagement.

---

## Data Sources and NPM Packages

1. Quandl (quandl.com), an API-enabled financial database, is used to pull price data.

2. The google-news npm package (https://www.npmjs.com/package/google-news) was used to generate the dummy data used in the news research section.
_Specifically, I used the link provided in the browser console error log to view the news data (in XML format), converted the XML into JSON, and saved the JSON file into the project directory. (Note: The original intention was to pull live news for selected stocks, but cross origin issues in the browser forced this workaround with dummy data.)_

3. The browserify npm package was used to allow Node.JS's "require" to be interpreted in the browser. I wanted to use "require" in order to test more quickly in Node during production.

__Please refer to the PowerPoint presentation for more information on how the above tools were used.__

___

#### Technologies used:
```
- Javascript
- Node (during production)
- HTML5
- CSS3
```

---

### Known Issues and Areas for Improvement

1. News mechanism currently does not work. It works inside of Node.JS, but not within the browser.
2. Rarely, but sometimes, the _parameters_ object does not seem to render appropriately, and this error is encountered: _"Uncaught TypeError: Cannot read property 1 of undefined at ...determineWinner."_ Closing and re-opening the browser gets rid of the error.
3. Ideally, the news area is cleared and then re-populated when a new ticker is entered. Currently, the new set of news is added on below the results of the previous news search.
4. Default email info needs to be rectified.
5. Testing a full set of entries requires many clicks. Build a function that automatically populates the inputs in order to run tests whenever code is updated.

---

### Project Workflow

__Please see PowerPoint in presentations directory for detailed representations of the below.__
1. Specifications Document
2. User Stories
3. Wireframes
4. Time Planning (Trello)
