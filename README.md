![](/assets/images/Connect_4_Board_and_Box.jpg)

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Connect4!

### Overview

Connect4 is a game like tic tac toe. Simply just connect4 to win! However, unlike tic tac toe, the players coin fall straight down
from the top. Played in a board of seven columns and six rows, the total number of game combinations is a staggering 4,531,985,219,092!
That's four trillion, five hundred thirty one billion, nine hundred eighty five million, two hundred nineteen thousand, ninety two.

[View the game here!](https://keed.github.io/project-1/)

---

### Gameplay

![](/assets/images/Connect_Four_Gameplay.gif)

The 2 player game starts out with player 1 making the first move. Click on any column to place the coin. Once a player has connected 4 horizontally, vertically or diagonally, the player wins!

<img src="/assets/images/c4-1.gif" width="500px">

---

### Outcomes

<img src="/assets/images/c4-2.gif" width="500px">

Either Player 1 or 2 Wins or...

<img src="/assets/images/c4-3.gif" width="500px">

Draw!

---

### Mobile Optimised

<img src="/assets/images/c4-3.gif" height="700px">

---

### Possible Future Updates

* Improve styling of game board and coins
* Implement AI (Minimax & Alpha–beta pruning Algorithms)

---

### References

* https://en.wikipedia.org/wiki/Connect_Four

* https://oeis.org/A212693

---

### Program Flow

1. The program initialises _begin()_. Within _begin()_, the status is set to inform the user to click on "New Game". The board is drawn with a dark background.

2. Once the user clicks on the "New Game" button, _newGame()_ is called and action listeners are added to allow the user to start the game. As the user hovers over the coin grids, a coin of their colour appears so as to represent the coin dropping from the top of the board.

3. As the user decides and clicks on the column to place the coin, a coin fills to the bottom of the board.
The user can click on any column but the coin will always fill to the bottom, as per Connect 4 rules.
For each move, _playMove(position)_ is called.

   playMove function loops through each row and column to update the coin position from the bottom of the board. It also checks if there are any 4 coins that suit the winning condition.

The winning condition check is _checkWinner(row, col)_.
```javascript
function checkWinner(row, col) {
	console.log("Row = "+row+" - Col = "+col);
	if (verticalCheck(row, col) || horizontalCheck(row, col) || 
		leftDiagonalCheck(row, col) || rightDiagonalCheck(row, col)) {
		console.log("********** Game Over **********");
		setStatus("Player "+currentPlayer+" wins!");
		gameOver();
		return true;
	}
	else if (checkDraw()) {
		console.log("********** Draw **********");
		setStatus("Draw!");
		gameOver();
		return true;
	}
	return false;
}
```

It does vertical, horizontal and diagonal checks for the 4 coins.
```javascript
//Left Diagonal Check
// Col:  --- 0 1 2 3 4 5 6
// Row:0 --- 0 0 0 0 0 0 0
// Row:1 --- 0 0 0 0 0 0 0
// Row:2 --- 0 0 X 0 0 0 0
// Row:3 --- 0 0 0 X 0 0 0
// Row:4 --- 0 0 0 0 X 0 0
// Row:5 --- 0 0 0 0 0 X 0

function leftDiagonalCheck(row, col) {
	let resultArr = [];
	resultArr.push(row+"-"+col);
	var count = 1; //Includes the entered position
	//Start counting towards 0, left up
	var tempRow = row - 1;
	var tempCol = col - 1;
	while (tempRow >= 0 && tempCol >= 0) {
		if (board[tempRow][tempCol] == currentPlayer) {
			count++;
			resultArr.push(tempRow+"-"+tempCol);
			//Shift to next position
			tempRow--;
			tempCol--;
		}
		else { break; }
	}
	//Count downwards
	tempRow = row + 1;
	tempCol = col + 1;
	while (tempRow < totalRows && tempCol < totalCols) {
		if (board[tempRow][tempCol] == currentPlayer) {
			count++;
			resultArr.push(tempRow+"-"+tempCol);
			//Shift to next position
			tempRow++;
			tempCol++;
		}
		else { break; }
	}
	if (count > 3) {
		console.log("********** LeftDiagonalCheck Found **********");
		setWinnerBlink(resultArr);
		return true
	}
	else {
		return false;
	}
}

//Right Diagonal Check
// Col:  --- 0 1 2 3 4 5 6
// Row:0 --- 0 0 0 0 0 0 0
// Row:1 --- 0 0 0 0 0 0 0
// Row:2 --- 0 0 0 0 X 0 0
// Row:3 --- 0 0 0 X 0 0 0
// Row:4 --- 0 0 X 0 0 0 0
// Row:5 --- 0 X 0 0 0 0 0

function rightDiagonalCheck(row, col) {
	let resultArr = [];
	resultArr.push(row+"-"+col);
	var count = 1; //Includes the entered position

	//Start counting towards 0, right up
	var tempRow = row - 1;
	var tempCol = col + 1;

	while (tempRow >= 0 && tempCol < totalCols) {
		if (board[tempRow][tempCol] == currentPlayer) {
			count++;
			resultArr.push(tempRow+"-"+tempCol);
			//Shift to next position
			tempRow--;
			tempCol++;
		}
		else { break; }
	}
	//Start counting towards 0, right down
	tempRow = row + 1;
	tempCol = col - 1;

	while (tempRow < totalRows && tempCol >= 0) {
		if (board[tempRow][tempCol] == currentPlayer) {
			count++;
			resultArr.push(tempRow+"-"+tempCol);
			//Shift to next position
			tempRow++;
			tempCol--;
		}
		else { break; }
	}
	if (count > 3) {
		console.log("********** RightDiagonalCheck Found **********");
		setWinnerBlink(resultArr);
		return true
	}
	else {
		return false;
	}
}
```

4. If a winner is found, _gameOver()_ is called. The function turns off action listeners from the board and activates the animation for the winning combination of coins as well as displaying to the user who has won. However, if no winner is found and the game ends in a draw, _gameOver()_ will be called too and an appropriate message will be displayed.

## Interesting Observations

I figured a way to set the indicator coin (the coin at the top of the board to indicate which column it will drop from)

```javascript
function setIndicatorHover() {
	var color = "";
	if (currentPlayer == 1) {
		color = "red";
	}
	else {
		color = "yellow";
	}
	for (let i=0; i<totalCols; i++) { //Cant use var, need to use let
		$("div[id$='-"+i+"']").hover(function() {
			$("div[id='ind"+i+"']").css("background-color",color);
		},
		function(){
			$("div[id='ind"+i+"']").css("background-color","");
		});
	}
}
```

The point of interest is not how I figured to assign the hover function in a loop but that the _let_ variable is important. The issue was that the variable _i_ was bound to the same variable outside of this function! That function is _togglePlayer()_ which is called by _playMove(position)_.

It's good to learn something every day :)