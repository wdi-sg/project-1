$(document).ready(function (){
	
	//---------- Variables ----------

	const totalRows = 6;
	const totalCols = 7;

	var board = [];

	// var board = [[0,0,0,0,0,0,0],
	// 			[0,0,0,0,0,0,0],
	// 			[0,0,0,0,0,0,0],
	// 			[0,0,0,0,0,0,0],
	// 			[0,0,0,0,0,0,0],
	// 			[0,0,0,0,0,0,0]];

	// [[1,2,3,4,5,6,7],
	// [8,9,10,11,12,13,14],
	// [15,16,17,18,19,20,21],
	// [22,23,24,25,26,27,28],
	// [29,30,31,32,33,34,35],
	// [36,37,38,39,40,41,42]]

	var currentPlayer = 1; //Player 1 = Red, Player 2 = Yellow
	
	//---------- Run on Load ----------
	newGame();

	//---------- Buttons ----------
	//New Game Button
	$("#btn-new").click(newGame);

	//---------- Functions ----------

	function drawBoard(){
		// Initialise the c4 board array
		for (var i=0; i<totalRows; i++) {
			var colArr = [];
			for (var j=0; j<totalCols; j++) {
					colArr.push(0);
				}
			board.push(colArr);
		}
		
		var table = document.createElement("div");
		table.setAttribute("class", "c4Table");
		$(".board").append(table);

		//Draw out the rows to HTML (6 rows)
		$.each(board, function(i,row){
			var tr = document.createElement("div");
			tr.setAttribute("class", "c4Tr");
			tr.setAttribute("id",i);
			$(".c4Table").append(tr);
			//Draw out the cols to HTML (7 cols)
			$.each(row, function(j,col){
				var td = document.createElement("div");
				// td.innerHTML = "&nbsp;"
				td.setAttribute("class", "c4Td");
				td.setAttribute("id",i+"-"+j);
				$("#"+i).append(td);
			}); //End of Cols
		});//End of Rows

		//Draw out the indicator cols
		for (var i=0; i<totalCols; i++) {
			var indicatorCol = document.createElement("div");
			// indicatorCol.innerHTML = "&nbsp;"
			indicatorCol.setAttribute("class", "indicatorCol");
			indicatorCol.setAttribute("id","ind"+i);
			$(".indicator").append(indicatorCol);
		}
	}//End of drawBoard

	function addListener() {
		$("div[class='c4Td'").click(function (){
			playMove($(this).attr("id"));
		});
	}

	function playMove(position) {
		// var colToPlay = position % 7; //To get the col position
		var colToPlay = getColFromPosition(position);
		//Check for Winner first before playing move
		//Check bottom of array based on col position
		var continueLoop = true;
		for (var i=board.length; i>=0; i--) { //Reverse the rows to start from the bottom
			if (continueLoop) {
				$.each(board[i], function(j,col){
					 if (j == colToPlay && col == 0) {
					 	board[i][j] = currentPlayer;
					 	updatePositionHtml(i,j);
					 	if (!checkWinner(i, j)) {
					 		togglePlayer();
					 		changeIndicatorHoverOnClick(j);
					 	}
					 	continueLoop = false;
					 	// i = -1; //Force break loop
					 }
					 else if (j == colToPlay && col != 0 && i == 0) { //Check for end of col reached
					 	continueLoop = false;
					 	// i = -1; //Force break loop
					 	// console.log("Reached end of col");
					 }
					 return continueLoop;
				});//end Col
			}//End continueLoop
			else {
				break;
			}
		}
		debugPrintBoard();
	}

	//Based on the Board[i][j], update to the same position
	function updatePositionHtml(row, col) {
		var backgroundColor;
		if (currentPlayer == 1) {
			backgroundColor = "red";
		}
		else {
			backgroundColor = "yellow";
		}
		$("#"+row+"-"+col).css("background-color",backgroundColor);
	}

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

	function checkDraw() {
		var isDraw = true;
		$.each(board, function(i,row){
			$.each(row, function(j,col){
				if (col == 0) {
					isDraw = false;
				}
			});
		});
		return isDraw;
	}

	function togglePlayer() {
		if (currentPlayer == 1) {
			currentPlayer = 2;
			setStatus("Player 2's turn");
			setIndicatorHover();
		}
		else {
			currentPlayer = 1;
			setStatus("Player 1's turn");
			setIndicatorHover();
		}
	}

	//Vertical Check
	function verticalCheck(row, col) {
		let resultArr = [];
		resultArr.push(row+"-"+col);
		//Check for at least 3 chips below this location
		if (row >= 3) {
			return false;
		}
		//Check 3 col below current position
		for (var i=row+1; i<=row+3; i++) {
			//If col value below is not the same, connecting 4 is not possible
			if (board[i][col] != currentPlayer) {
				return false;
			}
			resultArr.push(i+"-"+col);
		}
		console.log("********** VerticalCheck Found **********");
		setWinnerBlink(resultArr);
		return true;
	}

	//Horizontal Check - To take reference from row col position
	function horizontalCheck(row, col) {
		let resultArr = [];
		resultArr.push(row+"-"+col);
		var count = 1; //Includes the entered position
		//Check to left
		for (var i=col-1; i>=0; i--) {
			if (board[row][i] != currentPlayer) {
				break;
			}
			count++;
			resultArr.push(row+"-"+i);
		}
		//Check to right
		for (var i=col+1; i<totalCols; i++) {
			if (board[row][i] != currentPlayer) {
				break;
			}
			count++;
			resultArr.push(row+"-"+i);
		}
		if (count > 3) {
			console.log("********** HorizontalCheck Found **********");
			setWinnerBlink(resultArr);
			return true
		}
		else {
			return false;
		}
	}

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

	function setStatus(status) {
		$(".status").text(status);
	}
	function getRowFromPosition(position) {
		return (position.substring(0,position.indexOf("-")));
	}
	function getColFromPosition(position) {
		return (position.substring(position.indexOf("-")+1));
	}

	function setIndicatorHover() {
		var color = "";
		if (currentPlayer == 1) {
			color = "red";
		}
		else {
			color = "yellow";
		}
		for (let i=0; i<totalCols; i++) { //Cant use var, need to use let
			$("div[id$='-"+i+"'").hover(function() {
				$("div[id='ind"+i+"'").css("background-color",color);
			},
			function(){
				$("div[id='ind"+i+"'").css("background-color","");
			});
		}
	}

	function changeIndicatorHoverOnClick(col) {
		var backgroundColor;
		if (currentPlayer == 1) {
			backgroundColor = "red";
		}
		else {
			backgroundColor = "yellow";
		}
		$("#ind"+col).css("background-color",backgroundColor);
	}

	function setWinnerBlink(arr) {
		$.each(arr, function(i,result) {
			// var row = result.charAt(0);
			// var col = result.charAt(1);
			// $("#"+row+"-"+col).addClass("blink");
			$("#"+result).addClass("blink");
		});
	}

	function gameOver(){
		$(".status").addClass("blink"); //Set blink for status
		$("div[id*='-'").off('click'); //Off Click from Grids;
		$("div[id*='-'").off('mouseenter'); //Off Mouseenter from Grids;
		$("div[id*='-'").off('mouseleave'); //Off Mouseleave from Grids;
		$(".indicatorCol").css("background-color",""); //Remove the hovering tokens
	}

	function newGame() {
		board = [];
		currentPlayer = 1;
		$(".c4Table").remove();
		$(".indicatorCol").remove();
		setStatus("Player 1 Start!");
		$(".status").removeClass("blink");
		drawBoard();
		addListener();
		setIndicatorHover();
		console.log("********** New Game **********");
	}

	//Debugging Function
	function debugPrintBoard() {
		var print = "Col:  --- 0 1 2 3 4 5 6\n";
		$.each(board, function(i,row){
			print += ("Row:"+i+" --- ");
			$.each(row, function(j,col){
				print += (col+" ");
			});//End Col
			print+= ("\n");
		});//End Row
		console.log(print);
	}
});