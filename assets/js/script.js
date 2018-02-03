/*
Terms used:
- Canvas, canvas length, row, column, 
- Flood, fill color, old fill color, new fill color
- Color Scheme, palette
*/

$(document).ready(function() {

	var squareLength;

	function determineLengthOfSquare() {
		let viewportWidth = $(window).width();
		let viewportHeight = $(window).height();

		let nonCanvasHeight = $("#headerContainer").height() + $("#palette").height() + $("#instruction").height() + 8;

		// console.log("Viewport width: " + viewportWidth);
		// console.log("Viewport height: " + viewportHeight);
		// console.log("Height of non-canvas elements: " + nonCanvasHeight);

		let length;

		if ((viewportWidth <= viewportHeight) && (viewportWidth <= viewportHeight - nonCanvasHeight)) {
			// Edge-to-edge canvas
			length = viewportWidth / 15;

			// // Black border on left and right side each 5% of viewport width
			// length = viewportWidth * 0.9 / 15;
		} else if ((viewportWidth <= viewportHeight) && (viewportWidth > viewportHeight - nonCanvasHeight)) {
			// Edge-to-edge canvas
			length = (viewportHeight - nonCanvasHeight) / 15;

		} else {
			// Edge-to-edge canvas
			length = (viewportHeight - nonCanvasHeight) / 15;

			// // Black border on left and right side each 5% of viewport width
			// length = viewportWidth * 0.9 / 15;
		}

		setBoxLength(length);

		squareLength = length;
	}


	function setBoxLength(length) {
		$(".box").height(length);
		$(".box").width(length);
	}

	// Event listener to detect whenever browser is sized
	$(window).resize(function(){
		determineLengthOfSquare();
	});

	// Target the options modal
	var optionsModal = document.getElementById("optionsModal");
	// When the player clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == optionsModal) {
	        optionsModal.style.display = "none";
	    }
	}


	// When the player clicks the options button, open the options modal 
	$("#options").on("click", function(){
		optionsModal.style.display = "block";
	});


	// When the player clicks on `×`, close the options modal
	$("#close").on("click", function(){
		optionsModal.style.display = "none";
	});


	// When the player clicks on `Apply`, apply the settings and close the options modal
	$("#apply").on("click", function() {
		optionsModal.style.display = "none";
	});


	const colorSchemes = [
		["#663399", "#ff3366", "#ff6600", "#ffff66", "#33cc00", "#3366ff"], // Kiddy
		["#cc0099", "#ff99cc", "#66cccc", "#99ffff", "#99cc00", "#ffffbb"], // Ice-cream
		["#663300","#654a2d","#996633","#cccc99","#999933","#336633"], // Camouflage
		["#99ffcc", "#ff3333", "#ff6600", "#ffff66", "#663300", "#194775"], // Retro 70s
		["#66ffcc", "#ff3399", "#99cc33", "#ffff33", "#ff6600", "#6600cc"], // Tubular 80s
		["#336699", "#eeeeee", "#c1a750", "#333333", "#663300", "#99ccff"], // Color-blind
	];
	const colorSchemeNames = ["Kiddy", "Ice-cream", "Camouflage", "Retro 70s", "Tubular 80s", "Color-blind"];


	// This populates the the color scheme options in the options menu
	function populateColorSchemeOptions(colorSchemes, colorSchemeNames) {
		// This checks that the node containing the color scheme options is empty before populating it
		if ($("#colorSchemes").children().length == 0) {
			for (let scheme = 0; scheme < colorSchemes.length; scheme++) {
				if (scheme == 0) {
					// The first option will be checked as the default
					$("#colorSchemes").append("<div><input type='radio' name='colorScheme' value='colorScheme-" + scheme + "' class='radioButton'checked/></div>");	
				} else {
					$("#colorSchemes").append("<div><input type='radio' name='colorScheme' value='colorScheme-" + scheme + "' class='radioButton'/></div>");
				}
				$("#colorSchemes").append("<div class='schemePreview' id='preview-" + scheme + "'></div>");
				// This creates six CSS circles and appends the six colors of every color scheme to them
				for (let color = 0; color < colorSchemes[scheme].length; color++) {
					$("#preview-" + scheme).append("<div class='optionCircle' id='previewS" + scheme + "C" + color + "' color='" + colorSchemes[scheme][color] + "'></div>");
					$("#previewS" + scheme + "C" + color).css("background-color", colorSchemes[scheme][color]);
				}
				// This appends the corresponding name of each color scheme beside the sample color palettes
				$("#colorSchemes").append("<div class='colorSchemeName radioText'>" + colorSchemeNames[scheme] + "</div>");
			}
		// If the color scheme options have been populated, do nothing and return
		} else {
			return;
		}
	}


	var colorScheme, oldFillColor, newFillColor;
	const canvasLengthArray = [10, 15, 20];
	var canvasLength, canvas;
	var movesLeft;
	const movesArray = [[30, 40, 60], [25, 35, 50], [20, 30, 40]];
	// Array at index 0 for easy, 1 for medium, 2 for difficult
	var difficultyLevel;
	// 0 for easy, 1 for medium, 2 for difficult

	// When the player clicks "Apply", the selected options are returned as an object and then parsed and applied to a new game
	$("form").submit(function(event) {
		event.preventDefault();
		let chosenOptions = $(this).serializeArray();
		let chosenDifficultyLevel = Number(chosenOptions[0].value);
		// console.log(typeof difficultyLevel);
		// console.log("Chosen difficulty: " + chosenOptions[0].value);
		let chosenCanvasLengthIndex = chosenOptions[1].value;
		// console.log("Chosen canvas length: " + chosenOptions[1].value);
		let chosenColorSchemeIndex = chosenOptions[2].value.split("").pop();
		// console.log("Chosen color scheme: " + chosenOptions[2].value.split("").pop());
		
		restartSequence(chosenColorSchemeIndex, chosenCanvasLengthIndex, chosenDifficultyLevel);
		awaitingPlayerInput();
	});


	// Initializes or reinitializes the game
	function restartGame(chosenColorSchemeIndex, chosenCanvasLengthIndex, chosenDifficulty) {
		determineLengthOfSquare();
		
		$("#title").text("Color Spill!");
		$("#title").addClass("flicker");
		$("#canvasContainer").css("opacity", "1");
		$("#palette").fadeIn(400);

		// Empties the old and new fill color to prevent triggering the moves counter upon restart
		oldFillColor = null;
		newFillColor = null;

		colorScheme = colorSchemes[chosenColorSchemeIndex];
		canvasLength = canvasLengthArray[chosenCanvasLengthIndex];
		difficultyLevel = chosenDifficulty;
		
		movesLeft = movesArray[difficultyLevel][chosenCanvasLengthIndex];
		canvas = createCanvas(canvasLength);
		drawCanvas(canvas, canvasLength);
		drawPalette(colorScheme);
		updateMoves(difficultyLevel, canvasLength);
	}


	// This creates a splash sequence which "animates" the canvas upon page load or game restart, then restarts the game
	function restartSequence(chosenColorSchemeIndex = 0, chosenCanvasLengthIndex = 1, chosenDifficulty = 1) {
		populateColorSchemeOptions(colorSchemes, colorSchemeNames);
		var splashSequence = setInterval(function() { restartGame(chosenColorSchemeIndex, chosenCanvasLengthIndex, chosenDifficulty); }, 80);
		setTimeout(function() { clearInterval(splashSequence); }, 1280);
	}


	// Creates the entire canvas according to length of canvas specified with each box given a randomly selected color from the chosen color scheme and stores it in a two-dimensional array
	function createCanvas(length) {
		// Creates an array to store arrays of rows in the canvas
		let canvasArray = [];
		for (let row = 0; row < length; row++) {
			// Creates an array to store the boxes in each row
			let rowArray = [];
			// Chooses a random color for each box and append to the row array
			for (let box = 0; box < length; box++) {
				rowArray.push(colorScheme[Math.floor(Math.random() * 6)]);
			}
			// Appends the fully iterated row array into canvas array
			canvasArray.push(rowArray);
		}
		// Returns fully generated canvas array for use
		return canvasArray;
	}

	
	// Draws the canvas from the two-dimensional array and outputs to HTML for display
	function drawCanvas(canvas, length) {
		// Removes old canvas before drawing new canvas
		$("#canvas").remove();
		// Creates canvas and appends in container
		$("#canvasContainer").append("<div id='canvas'></div>");
		// Appends rows in canvas
		for (let row = 0; row < length; row++) {
			$("#canvas").append("<div class='row' id='R" + row + "'></div>");
			// Appends boxes in every row
			for (let box = 0; box < length; box++) {
				$("#R" + row).append("<div class='box' id='R" + row + "-B" + box + "' color='" + canvas[row][box] + "'></div>");
				$("#R" + row + "-B" + box).css("background-color", canvas[row][box]);
			}
		}
		// Set the length of each square upon drawing or redrawing the canvas
		setBoxLength(squareLength);
	}


	// Appends the colors in the selected color scheme below the canvas
	function drawPalette(colorScheme) {
		// Empties the palette before appending the colors into it
		$("#palette").empty();
		// Runs a loop to append the colors into CSS circles
		for (color = 0; color < colorScheme.length; color++) {
			// Creates the circle and tags it with `id` and `color` attributes
			$("#palette").append("<div class='circle' id='color-" + color + "' color='" + colorScheme[color] + "'></div>");
			// Set the background of the circle to the iterated color in the color scheme array
			$("#color-" + color).css("background-color", colorScheme[color]);
		}
	}


	// Existing flood merges with boxes already in newly chosen fill color by changing to it, thus expanding the flood
	function expandFlood(canvas, oldFillColor, newFillColor, xCoordinate, yCoordinate) {
		/*
		Before changing those already in the flood to the new fill color, stop and exit this function if
			1. old fill color is the same as the new fill color, i.e. player clicked and selected the old fill color, or
			2. current box is not already in the old fill color, which means it is not part of the flood. This means the check has reached the boundaries of the flood
		*/
		if (oldFillColor == newFillColor || canvas[xCoordinate][yCoordinate] != oldFillColor) {
			// console.log("Box at [x: " + xCoordinate + "][y: " + yCoordinate + "] is either already in new fill color or just beyond the flooded area")
			return;
		} else {
			// The current box has been verified to be part of the flood and not already in the new flood color. Here, it is assigned to the new fill color.
			canvas[xCoordinate][yCoordinate] = newFillColor;
			// console.log("Changing box at [x: " + xCoordinate + "][y: " + yCoordinate + "] to new fill color " + canvas[xCoordinate][yCoordinate]);
			// If current box is not at the left edge, then pass the box on its left as an argument into `expandFlood(…)` to locate boxes in the flood until all have been changed to new fill color
			if (xCoordinate > 0) {
				// console.log("Now checking box on the left at [x: " + (xCoordinate - 1) + "][y: " + yCoordinate + "]");
				expandFlood(canvas, oldFillColor, newFillColor, xCoordinate - 1, yCoordinate);
			}
			// If current box is not at the right edge, then pass the box on its right as an argument into `expandFlood(…)` to locate boxes in the flood until all have been changed to new fill color
			if (xCoordinate < canvas.length - 1) {
				// console.log("Now checking box on the right at [x: " + (xCoordinate + 1) + "][y: " + yCoordinate + "]");
				expandFlood(canvas, oldFillColor, newFillColor, xCoordinate + 1, yCoordinate);
			}
			// If current box is not at the top edge, then pass the box above it as an argument into `expandFlood(…)` to locate boxes in the flood until all have been changed to new fill color
			if (yCoordinate > 0) {
				// console.log("Now checking box on top at [x: " + xCoordinate + "][y: " + (yCoordinate - 1) + "]");
				expandFlood(canvas, oldFillColor, newFillColor, xCoordinate, yCoordinate - 1);
			}
			// If current box is not at the bottom edge, then pass the box below it as an argument into `expandFlood(…)` to locate boxes in the flood until all have been changed to new fill color
			if (yCoordinate < canvas.length - 1) {
				// console.log("Now checking box below at [x: " + xCoordinate + "][y: " + (yCoordinate + 1) + "]");
				expandFlood(canvas, oldFillColor, newFillColor, xCoordinate, yCoordinate + 1);
			}
		}
	}

	// Reduces the move by one after every valid color chosen
	function updateMoves(chosenDifficulty, chosenCanvasLength) {
		// If player accidentally clicks on the old fill color, no moves will be deducted. If a valid move (i.e., choosing a different fill color) is made, moves will reduce by 1
		newFillColor != oldFillColor ? movesLeft-- : movesLeft = movesLeft;
		$("#moves").empty();
		$("#moves").text(movesLeft + " / " + movesArray[chosenDifficulty][canvasLengthArray.indexOf(chosenCanvasLength)]);
	}

	// Checks if there are moves left and returns true or false
	function anyMovesLeft() {
		if (movesLeft != 0) {
			return true;
		} else {
			return false;
		}
	}

	// Checks if whole canvas has same color, otherwise game continues.
	function checkIfWon(canvas) {
		// Iterates through every row in the canvas array
		for (let row = 0; row < canvas.length; row++) {
			// Interates through every box in each row
			for (let column = 0; column < canvas.length; column++) {
				// If color of current box is not the same to the current fill color, then the canvas still has more than one color, therefore terminate the loop and return `false`.
				if (canvas[row][column] != canvas[0][0]) {
					// console.log("Canvas has more than one color, game continues…");
					return false;
				}
			}
		}
		// After fully iterating through every row and every box without finding any box different from the current fill color, canvas is verfied to be filled with the same color. Therefore, return `true`.
		// console.log("Canvas is filled with the same color, player has won!");
		return true;
	}


	// Loads victory sequence if player has won or the defeat sequence if player has lost
	function endGameSequence(hasPlayerWon) {
		if (hasPlayerWon == true) {
			setTimeout(function(){ $("#title").text("You did it!!!"); }, 500);
		} else {
			setTimeout(function() { $("#title").text("Out of moves!"); }, 500);	
			$("#canvasContainer").css("opacity", "0.3");
		}
		$("#colorPickerZone").off("click");
		$("#palette").fadeOut(400);
		setTimeout(function(){ $("#title").addClass("flicker"); }, 500);
	}

	// Determines whether to stop or continue the game according to whether there are moves left and whether player has won the game
	function continueOrStopGame() {
		// If there are moves left and player has not won the game
		if (anyMovesLeft() == true && checkIfWon(canvas) == false) {
			// Does nothing and exits this function to continue with the game
			return;
		} else {
			/*
			The following situations will trigger the end game sequence:
			- If there are moves left but player has won the game
			- If there are no moves left but player has won the game
			- If there are no moves left and player has not won the game
			*/
			endGameSequence(checkIfWon(canvas));
		}
	}


	// This is the main game loop that will be triggered when the player clicks to select a color
	function awaitingPlayerInput() {
		// Event listener for color that the player clicks
		$("#colorPickerZone").on("click", function(event) {
			// Stops the flicker animation on game title once the game starts
			$("#title").removeClass("flicker");
			// Fades out and hides the game instruction once the game starts
			$("#instruction").fadeOut(200);
	
			// Grabs the `color` attribute whether the player clicks on the palette or a box within the canvas
			colorClicked = $(event.target).attr("color");
	
			// If player does not click on a color in the palette or a box in the canvas, then do nothing.
			if (colorClicked == undefined) {
				// console.log("No color clicked, execution stops here")
				return;
			}
	
			// Previous fill color can always be found in the top left box and thus assigned to old fill color
			oldFillColor = canvas[0][0];
			// console.log("Old fill color is " + canvas[0][0]);
	
			// What the player clicks becomes the current fill color
			newFillColor = colorClicked;
			// console.log("New fill color is " + newFillColor);
	
			// console.log("Calling expandFlood(…)");
			// Changes the flood to new fill color, thereby incorporating those already in new fill color
			expandFlood(canvas, oldFillColor, newFillColor, 0, 0);
			// console.log("Returning from expandFlood(…)");
	
			// Draws canvas with new fill color and expanded flood to HTML for display
			drawCanvas(canvas, canvasLength);
	
			// Updates moves left after a color has been clicked
			updateMoves(difficultyLevel, canvasLength);
			// console.log("Moves left: " + movesLeft);
	
			// Continues or stops the game according to the moves left and whether player has completed the game
			continueOrStopGame();
		});
	}

	// When the player clicks the restart button, the restartSequence is called to restart the game with the splash sequence
	$("#restart").on("click", function() {
		restartSequence(colorSchemes.indexOf(colorScheme), canvasLengthArray.indexOf(canvasLength), difficultyLevel);
		awaitingPlayerInput();
	});

	restartSequence();
	awaitingPlayerInput();
});