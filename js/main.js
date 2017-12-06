$(document).ready(function(){
/* There are 3 player slots available & one main "copycat" that they have to follow. After the main copycat does an action, the players have to do the same action within a certain time or lose. Actions can be a few things (typing in a string, solving a math equation, pressing certain buttons etc)

Win variable: last one standing 
Players: 2 (for now)
one main copy for players to follow
input box for all player to input their answers into

----P S E U D O C O D E----

1.) Player clicks start game button
2.) There is a 3.. 2.. 1.. countdown
3.) Game initialises
4.) copycat will show a math problem, random text or something. A timer will appear 
5.) players will answer within a time limit. if the answer is incorrect, 0 point and the player loses. 
6.) game goes on indefinitely until player loses
7.) when current player loses, record the score on the side bar
8.) set current player to next player
9.) there is a 3.. 2.. 1.. countdown
10.) Repeat from step 4
*/


//~~~ G A M E  L O G I C ~~~//

// ---------------------Start variables & functions--------------------- //

//Creating required variables//
var copycatAnswer = "";
var playerInput = "";
var difficultyLevel = 5; 
var currentPlayerScore = 0;
var timeLeft = difficultyLevel;
var gameRunning = true;
var timer;

// var copycatAnswer, playerInput, difficultyLevel, currentPlayerScore;


var saveScore = function(){
	if(currentPlayer == 1){
		player1Score += currentPlayerScore
		$("#player1FinalScore").text("YOUR SCORE TO BEAT: " + player1Score);
	}
	else{
		player2Score += currentPlayerScore;
	}
}

//Every time difficulty level increases,
// Length of text string increases, random numbers generated have a lower minimum and higher maximum
// Maxmimum numbers in open-ended questions increase. 
var increaseDifficulty = function(){
	difficultyLevel ++;
}


var generateOpenEnded = function(){
	var oefirstNumber = Math.floor(Math.random() * Math.pow(difficultyLevel, 3) + 500);
	var oesecondNumber = Math.floor(Math.random() * Math.pow(difficultyLevel, 3) + 1);
	console.log(oefirstNumber);
	console.log(oesecondNumber);
	var oethirdNumber = oefirstNumber + oesecondNumber;
	var oefourthNumber = 0;
	var oegenerateFunction = Math.floor(Math.random() * 3); // makes 3 situations, if oegenfunc = 0, 1, 2

	if(oegenerateFunction === 0){
		//for positive
		var oegenerateFunctionNested = Math.floor(Math.random() * 3);
		if(oegenerateFunctionNested == 0){
			oefourthNumber = oethirdNumber + 10;
			$("#questionBoxText").text("is " + oefirstNumber + " plus " + oesecondNumber + " equal to " + oefourthNumber + "?");
			copycatAnswer = "no";
		}
		else if(oegenerateFunctionNested == 1){
			oefourthNumber = oethirdNumber + 100;
			$("#questionBoxText").text("is " + oefirstNumber + " plus " + oesecondNumber + " equal to " + oefourthNumber + "?");	
			copycatAnswer = "no";
		}
		else if(oegenerateFunctionNested == 2){
			oefourthNumber = oethirdNumber + 1000;	
			$("#questionBoxText").text("is " + oefirstNumber + " plus " + oesecondNumber + " equal to " + oefourthNumber + "?");
			copycatAnswer = "no";
		}
	}
	else if(oegenerateFunction === 1){
		//for negative
		var oegenerateFunctionNested = Math.floor(Math.random() * 3);
		if(oegenerateFunctionNested == 0){
			oefourthNumber = oethirdNumber - 10;
			$("#questionBoxText").text("Is " + oefirstNumber + " minus " + oesecondNumber + " equal to " + oefourthNumber + "?");
			copycatAnswer = "no";
		}
		else if(oegenerateFunctionNested == 1){
			oefourthNumber = oethirdNumber - 100;
			$("#questionBoxText").text("Is " + oefirstNumber + " minus " + oesecondNumber + " equal to " + oefourthNumber + "?");	
			copycatAnswer = "no";
		}
		else if(oegenerateFunctionNested == 2){
			oefourthNumber = oethirdNumber - 1000;	
			$("#questionBoxText").text("Is " + oefirstNumber + " minus " + oesecondNumber + " equal to " + oefourthNumber + "?");
			copycatAnswer = "no";
		}
	}
	else {
		oefourthNumber = oethirdNumber;
		$("#questionBoxText").text("Is " + oefirstNumber + " minus " + oesecondNumber + " equal to " + oefourthNumber + "?");
		copycatAnswer = "yes";
	}
//is oefourth = oe2 + oe1? 
//only 1/3 times is correct.
}


//generates the math equation
var generateMathEquation = function(){
	//To generate the numbers used in the question
	var firstNumber = Math.floor(Math.random() * Math.pow(difficultyLevel, 3) + 500);
	var secondNumber = Math.floor(Math.random() * Math.pow(difficultyLevel, 3) + 1);
	var answerNumber = 0;

	//To decide if it's plus or minus
	var generateFunction = Math.floor(Math.random() * 2);
	if(generateFunction === 0){
		answerNumber = firstNumber + secondNumber;
		$("#questionBoxText").text(firstNumber + " + " + secondNumber + " = ?");
		console.log(answerNumber);
	}
	else{
		answerNumber = firstNumber - secondNumber;
		$("#questionBoxText").text(firstNumber + " - " + secondNumber + " = ?");
		console.log(answerNumber);
	}
	copycatAnswer = answerNumber;
}

//to create the main string
var generateString = function() {
  var answer = "";
  var letters = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

  for (var i = 0; i < (difficultyLevel + 2); i++)
    answer += letters.charAt(Math.floor(Math.random() * letters.length));

	$("#questionBoxText").text("Type '" + answer + "'");
	copycatAnswer = answer;
}


//randomly generates one new problem for the player
var generateNewProb = function(){
	
	if(gameRunning == true){
		var questionType = Math.floor(Math.random() * 5); // This returns a number from 0 - 5 (incusive)
		$("#countDownTimer").text(timeLeft + "s remaining");
	
			if(questionType === 0 || questionType === 1){
				generateMathEquation();
			}
			else if (questionType === 2 || questionType === 3){
				generateString();
			}
			else{
				generateOpenEnded();
			}
	}
	else{
		//if game is NOT running, put click on new game to start in questionbox text
		$("#questionBoxText").text("Click on New Game to start!");
	}
}


var allowInput = function(){
	$("#timerDiv").show();
	$("#curPlayerNScore").show(200);
		$("#playerInputForm").show(200);
}


var runTimer = function(){
	timeLeft = difficultyLevel; 
	timer = setInterval(function(){
		timeLeft--;
		$("#countDownTimer").text(timeLeft + "s remaining");
		if(timeLeft <= 0){
			clearTimeout(timer);
			timerTimesOut();
		}

	}, 1000);
}

var stopTimer = function(){
	clearInterval(timer);
}


//checks the final score of players. highest wins
var checkScore = function(){
	$("#timerDiv").hide();
	if(player1Score > player2Score){
		$("#scoreToBeatDiv").hide(200);
		$("#playerHalf").hide(200);		
		$("#questionBoxText").text("Player 1 has won!");

	} else if(player1Score < player2Score){
		$("#scoreToBeatDiv").hide(200);
		$("#playerHalf").hide(200);
		$("#questionBoxText").text("Player 2 has won!");
	}
	else if(player1Score == player2Score){
		$("#scoreToBeatDiv").hide(200);
		$("#playerHalf").hide(200);
		$("#questionBoxText").text("It's a tie! Well played.");
	}
}


var newGame = function(){
	stopTimer();
	currentPlayer = 1;
	player1Score = 0;
	player2Score = 0;
	currentPlayerScore = 0;
	difficultyLevel = 5;
	timeLeft = difficultyLevel;
	gameRunning = true;
	runTimer();
	$("#playerHalf").show();
	$("#playerInputBox").val("");
	$("#displayCurrentScore").text("CURRENT SCORE: " + currentPlayerScore);
	$("#displayCurrentPlayer").text("PLAYER: 1");
	// $("#countDownTimer").text(timeLeft);
	generateNewProb();
	allowInput();
	//initiate countdown function
}


var resetGame = function(){
	stopTimer();
	difficultyLevel = 5;
	runTimer();
	currentPlayer = 2;
	currentPlayerScore = 0;
	$("#scoreToBeatDiv").show(200);
	$("#displayCurrentScore").text("CURRENT SCORE: " + currentPlayerScore);
	$("#displayCurrentPlayer").text("PLAYER: 2");
	//run a timer that counts down to player 2's turn
	generateNewProb();
}


var timerTimesOut = function(){
	if(currentPlayer == 1){
		saveScore();
		console.log("It is now player 2's turn");
		resetGame();
	} 
	else if(currentPlayer == 2){
		saveScore();
		checkScore();
	}
}
// newGame(); //launches new Game


// ---------------------End of variables & functions, start of logic---------------------//


//create Countdown

$("#newGameButton").click(function(){
	newGame();
});


$("#playerInputForm").on("submit", function(e){
	e.preventDefault();
	$("#answerBox").show(200);
	var playerInputArray = $("#playerInputForm").serializeArray();
	playerInput = playerInputArray[0].value;
	$("#playerInputBox").val("");
	$("#answerBoxText").text(playerInput); // appends into cool looking box

	if(playerInput == copycatAnswer){
		currentPlayerScore ++
		$("#displayCurrentScore").text("CURRENT SCORE: " + currentPlayerScore);
		increaseDifficulty();
		stopTimer();
		runTimer();
		generateNewProb(); // 
	} 
	else if(currentPlayer == 1){
		saveScore();
		console.log("It is now player 2's turn");
		resetGame();
	} 
	else if(currentPlayer == 2){
		saveScore();
		checkScore();
	}

});



}); //end jQuery





/*
when timer reaches 0, run function that checks if current player is player 1or 2. if player 1, resetGame();
if player2, saveScore(); checkScore();

*/





