// TO DO LIST
/*
	Further refine CSS
	
	Find a way to shrink the cards array for 24 tiles

	DRY My Code 

	To add in additional modal functions/animations after Base Game is ready

	eg. Game/Modal Overlays and Player Name requests
*/
// END OF TO DO LIST

$(document).ready(function(){

// Core Functions
var timer;
var timerCorrector;
var modal = document.getElementById("prompt");
var cardsInPlay = [];
var playerScores = [0, 0];
var trackedCards = [];
var log = [];
var currentPlayer = 0;
var flippedCardId;
var seconds = 10;
var cards = [
{
	value: "ace",
	cardImage: "images/ace.png"
},
{
	value: "ace",
	cardImage: "images/ace.png"
},
{
	value: "two",
	cardImage: "images/two.png"
},
{
	value: "two",
	cardImage: "images/two.png"
},
{
	value: "three",
	cardImage: "images/three.png"
},
{
	value: "three",
	cardImage: "images/three.png"
},
{
	value: "four",
	cardImage: "images/four.png"
},
{
	value: "four",
	cardImage: "images/four.png"
},
{
	value: "five",
	cardImage: "images/five.png"
},
{
	value: "five",
	cardImage: "images/five.png"
},
{
	value: "six",
	cardImage: "images/six.png"
},
{
	value: "six",
	cardImage: "images/six.png"
},
{
	value: "seven",
	cardImage: "images/seven.png"
},
{
	value: "seven",
	cardImage: "images/seven.png"
},
{
	value: "eight",
	cardImage: "images/eight.png"
},
{
	value: "eight",
	cardImage: "images/eight.png"
}
];

// Basic Card Flip Functionality

function flipCard(){

	if(trackedCards.length < 2){

		$(this).addClass("flipped");
		var flippedCard = $(this).find("img")[0];
		var flippedCardId = flippedCard.id;

		if(flippedCardId != trackedCards[0]){

			trackedCards.push(flippedCardId);
			cardsInPlay.push(cards[flippedCardId].value);

			if(cardsInPlay.length == 2){
				var cardOne = cardsInPlay[0];
				var cardTwo = cardsInPlay[1];

				if(cardOne.includes(cardTwo)){

					playerScoreTracking();

					outOfPlay();
			
				} 	

				else { 

					playerSwitch();

				}
			}
		}
		whoWon();
	}

}

// End of Basic Flip Card Functionality


// Removal of matched cards from play

function outOfPlay(){

	$.each(trackedCards,function(i, card){
		$(".flipped").off("click", flipCard);});
		trackedCards = [];
		cardsInPlay = [];

}

// End of matched cards removal

// Player Switcher

function playerSwitch(){

	if(gameOver() == false){

		countDownTimer();

		if(currentPlayer == 0){
				currentPlayer = 1;
				$(".playerOne").css('color', 'black');
				$(".playerTwo").css('color', 'red');
			} 
			
		else {
				currentPlayer = 0;
				$(".playerTwo").css('color', 'black');
				$(".playerOne").css('color', 'red');
			}

		setTimeout(revert, 1000);	

		}

}

// End of Player Switcher

//Player Score tracker

function playerScoreTracking(){

	playerScores[currentPlayer]++;
	log.push(parseInt(trackedCards[0]));
	log.push(parseInt(trackedCards[1]));

	if(currentPlayer == 0){
		document.getElementById("p1").innerHTML = playerScores[currentPlayer];
	} 

	else {
		document.getElementById("p2").innerHTML = playerScores[currentPlayer];
	}
}

// End of player score tracker

// Unflipping incorrect pairs

function revert(){

	if(trackedCards.length != 0){

		$.each(trackedCards, function(i, card){
			$("#"+card).parents("div").eq(1).removeClass("flipped");
		});

	}
	trackedCards = [];
	cardsInPlay = [];
}

// End of unflipper


// Count down timer



function countDownTimer(){

	clearInterval(timer);

	clearTimeout(timerCorrector);

	seconds = 10;

	document.querySelector(".timerDisplay").innerHTML = seconds + "s";

	timerCorrector = setTimeout(function(){document.querySelector(".timerDisplay").innerHTML = seconds-- + "s";}, 1000);

	timer = setInterval(function(){

		if(gameOver() == false){document.querySelector(".timerDisplay").innerHTML = seconds-- + "s";}

		if(seconds < -1){playerSwitch();}

	}, 1000);
}

// End of Count Down timer


// Cards Shuffler

function shuffle(array) {
	
  var cardsArrayLength = array.length, cardHolder, index;

  while (cardsArrayLength) {

    index = Math.floor(Math.random() * cardsArrayLength--);

    cardHolder = array[cardsArrayLength];
    array[cardsArrayLength] = array[index];
    array[index] = cardHolder;
  }

  return array;

};

//End of Card Shuffler


//Creating of the Game Board

function gameBoardSetup(){

	shuffle(cards);
	$("#mainBoard").empty();
	$.each(cards, function(i, card){
		$("#mainBoard").append("<div class='card " + i +"'><div class='face back'><img src='" + card.cardImage + "' id='" + i + "'></div><div class='face front'><img src='images/cardBack.png'></div></div>");
	});
	$(".card").on("click", flipCard);

};


//End of Game Board Creation

// Game Over Function

function gameOver(){

	if(playerScores[0] + playerScores[1] == 8){

		document.querySelector(".timerDisplay").innerHTML = "Game ended!";
		return true;
	}

	return false;
}

// End of Game Over Function

// Who Won Announcer

function whoWon(){
	if(gameOver() == true){
		modal.style.display = "block";
		$(".modalContent").removeClass("closeModal");
		$(".modalContent").addClass("openModal");

		if(playerScores[0] > playerScores[1]){
			$(".modalBody").empty();
			$(".modalBody").append("Player 1 has won!");
		} 

		else if(playerScores[1] > playerScores[0]){
			$(".modalBody").empty();
			$(".modalBody").append("Player 2 has won!");
		} 

		else{
			$(".modalBody").empty();
			$(".modalBody").append("It's a draw...");
		}
	}
}

// End of Announcer

// Game Initialise

function restart(){
	log = [];
	cardsInPlay = [];
	currentPlayer = 0;
	playerScores = [0, 0];
 	trackedCards = [];
 	seconds = 10;
 	gameBoardSetup();
 	$(".playerScore").empty().append("0");
 	$(".playerOne").css('color', 'red');
 	$(".playerTwo").css('color', 'black');
 	countDownTimer();
}


$(".reset").click(function(){
	restart();
});

// Modal Button Reset Function

$("#modalReset").click(function(){
	$(".modalContent").removeClass("openModal");
	$(".modalContent").addClass("closeModal");
	setTimeout(function(){modal.style.display = "none";}, 1000);
});

// Testing Grounds



// End of Testing Grounds

// End of Game Initialise

});