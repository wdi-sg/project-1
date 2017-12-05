/*
Terms used:
- Canvas, Colomn, Row
- Flood
- Fill color, old fill color, new fill color
- Color Scheme
- Palette
*/
$(document).ready(function() {
	var colorSchemes = [
		["#663399", "#ff3366", "#ff6600", "#ffff66", "#33cc00", "#3366ff"], // Kiddy
		["#990066", "#cc66cc", "#66cccc", "#99ffff", "#99cc00", "#ffffcc"], // Ice-cream
		["#663300","#663333","#996633","#cccc99","#999933","#336633"], // Camouflage
		["#99ffcc", "#ff3333", "#ff6600", "#ffff66", "#663300", "#003366"], // Retro 70s
		["#66ffcc", "#ff3399", "#99cc33", "#ffff33", "#ff6600", "#6600cc"], // Tubular 80s
		["#336699", "#cccccc", "#cc9933", "#333333", "#663300", "#99ccff"], // Colorblind
	];
	var colorScheme;
	var canvasLength, canvas;
	var oldFillColor, newFillColor;
	var movesLeft;

	// Initialize or reinitialize the game
	function restartGame() {
		colorScheme = colorSchemes[0];
		canvasLength = 15;
		movesLeft = 30;
		canvas = createCanvas(canvasLength);
		drawCanvas(canvas, canvasLength);
		drawPalette(colorScheme);
	}


	function createCanvas(length) {
		// Creates an array to store arrays of columns in the canvas
		var canvasArray = [];
		for (var column = 0; column < length; column++) {
			// Create an array to store the boxes in each column
			var columnArray = [];
			// Choose a random color for each box and append to the column array
			for (var box = 0; box < length; box++) {
				columnArray.push(colorScheme[Math.floor(Math.random() * 6)]);
			}
			// Appends the fully iterated column array into canvas array
			canvasArray.push(columnArray);
		}
		// Returns fully generated canvas array for use
		return canvasArray;
	}

		
	// Create the entire game canvas according to length of canvas specified
	function drawCanvas(canvas, length) {
		// Remove old canvas before drawing new canvas
		$("#canvas").remove();
		// Creates canvas and appends in container
		$("#canvasContainer").append("<div id=\"canvas\"></div>");
		// Appends columns in canvas
		for (var column = 0; column < length; column++) {
			$("#canvas").append("<div class=\"column\" id=\"C" + column + "\"></div>");
			// Appends boxes in every column
			for (var box = 0; box < length; box++) {
				$("#C" + column).append("<div class=\"box\" id=\"C" + column + "-B" + box + "\" color=\"" + canvas[column][box] + "\"></div>");
				$("#C" + column + "-B" + box).css("background-color", canvas[column][box]);
			}
		}
	}


	// Append the colors in the selected color scheme below the canvas
	function drawPalette(colorScheme) {
		// Run a loop to append the colors into CSS circles
		for (color = 0; color < colorScheme.length; color++) {
			// Creates the circle and tags it with `id` and `color` attributes
			$("#palette").append("<div class=\"circle\" id=\"color-" + color + "\" color=\"" + colorScheme[color] + "\"></div>")
			// Set the background of the circle to the iterated color in the color scheme array
			$("#color-" + color).css("background-color", colorScheme[color]);
		}
	}


	// Existing flood will merge in with boxes in the newly choosen fill color
	function expandFlood(canvas, oldFillColor, newFillColor, xCoordinate, yCoordinate) {
		/*
		Before changing those already in the flood to the new fill color, stop and exit this function if
			1. old fill color is the same as the new fill color, i.e. player clicked on old fill color, or
			2. current box is not already in the old fill color, then it is not part of the flood. This means the check has reached the boundary of the flood
		*/
		if (oldFillColor == newFillColor || canvas[xCoordinate][yCoordinate] != oldFillColor) {
			console.log("Box at [x: " + xCoordinate + "][y: " + yCoordinate + "] is either already in new fill color or just beyond the flooded area")
			return;
		} else {
			// The current box has been verified to be part of the flood and not already in the new flood color. Hence, it is now changed to the new fill color.
			canvas[xCoordinate][yCoordinate] = newFillColor;
			console.log("Changing box at [x: " + xCoordinate + "][y: " + yCoordinate + "] to new fill color " + canvas[xCoordinate][yCoordinate]);
			// If current box is not at the left edge, then pass the box on its left as an argument into `expandFlood(…)` to locate boxes in the flood until all have been changed to new fill color
			if (xCoordinate > 0) {
				console.log("Now checking box on the left at [x: " + (xCoordinate - 1) + "][y: " + yCoordinate + "]");
				expandFlood(canvas, oldFillColor, newFillColor, xCoordinate - 1, yCoordinate);
			}
			// If current box is not at the right edge, then pass the box on its right as an argument into `expandFlood(…)` to locate boxes in the flood until all have been changed to new fill color
			if (xCoordinate < canvas.length - 1) {
				console.log("Now checking box on the right at [x: " + (xCoordinate + 1) + "][y: " + yCoordinate + "]");
				expandFlood(canvas, oldFillColor, newFillColor, xCoordinate + 1, yCoordinate);
			}
			// If current box is not at the top edge, then pass the box above it as an argument into `expandFlood(…)` to locate boxes in the flood until all have been changed to new fill color
			if (yCoordinate > 0) {
				console.log("Now checking box on top at [x: " + xCoordinate + "][y: " + (yCoordinate - 1) + "]");
				expandFlood(canvas, oldFillColor, newFillColor, xCoordinate, yCoordinate - 1);
			}
			// If current box is not at the bottom edge, then pass the box below it as an argument into `expandFlood(…)` to locate boxes in the flood until all have been changed to new fill color
			if (yCoordinate < canvas.length - 1) {
				console.log("Now checking box below at [x: " + xCoordinate + "][y: " + (yCoordinate + 1) + "]");
				expandFlood(canvas, oldFillColor, newFillColor, xCoordinate, yCoordinate + 1);
			}
		}
	}


	function updateMoves() {
		// If player accidentally clicks on the old fill color, no moves will be deducted. If a valid move (i.e., choosing a different fill color) is made, moves will reduce by 1
		newFillColor != oldFillColor ? movesLeft-- : movesLeft = movesLeft;
	}


	function anyMovesLeft() {
		// If there are no more moves left, game will be terminated
		if (movesLeft != 0) {
			return true;
		} else {
			return false;
		}
	}

	// Checks if whole canvas has same color, otherwise game continues.
	function checkIfWon(canvas) {
		// Iterate through every column in the canvas array
		for (var column = 0; column < canvas.length; column++) {
			// Interate through every box in each column
			for (var row = 0; row < canvas.length; row++) {
				// If color of current box is not the same to the current fill color, canvas still has more than one color, therefore terminate the loop and return false.
				if (canvas[column][row] != canvas[0][0]) {
					console.log("Canvas has more than one color, game continues…");
					return false;
				}
			}
		}
		// After fully iterating through every column and every box without finding any box different from the current fill color, canvas is verfied to be filled with the same color. Therefore, return true.
		console.log("Canvas is filled with the same color, player has won!");
		return true;
	}


	// Loads victory sequence if player has won and defeat sequence if player has lost
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

	// Determines whether to stop or continue game according to whether there are moves left and whether player has won the game
	function continueOrStopGame() {
		// If there are moves left and player has not won the game
		if (anyMovesLeft() == true && checkIfWon(canvas) == false) {
			// Do nothing and exit this function to continue with the game
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


	
	$("#colorPickerZone").on("click", function(event) {
		// Stop the flicker animation on game title once game starts
		$("#title").removeClass("flicker");
		// Fade out and hide the game instruction onde game starts
		$("#instruction").fadeOut(200);

		// Grab the `color` attribute whether player clicks on the palette or a box within the canvas
		colorClicked = $(event.target).attr("color");

		// If player did not click on a color in the palette or a box in the canvas, do nothing.
		if (colorClicked == undefined) {
			console.log("No color clicked, execution stops here")
			return;
		}

		// Previous fill color can always be found in the top left box
		oldFillColor = canvas[0][0];
		console.log("Old fill color is " + canvas[0][0]);

		// What the player clicks becomes the current fill color
		newFillColor = colorClicked;
		console.log("New fill color is " + newFillColor);

		console.log("Calling expandFlood(…)");
		// Change the flood to new fill color and incorporate those already in new fill color
		expandFlood(canvas, oldFillColor, newFillColor, 0, 0);
		console.log("Returning from expandFlood(…)");

		// Draw canvas with new fill color and expanded flood
		drawCanvas(canvas, canvasLength);

		// Update moves left after a color has been clicked and check if moves are all used up
		updateMoves();
		console.log("Moves left: " + movesLeft);

		// Continue or stop the game according to moves left and whether player has completed the game
		continueOrStopGame();
	});

	restartGame();
});