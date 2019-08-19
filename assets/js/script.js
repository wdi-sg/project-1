/*
Pseudo code:
1. Computer and Player grids are drawn and appears when webpage is loaded.
2. Generate a random direction.
3. Ensure that this random direction still stays within the grid.
4. Apply this correct random direction for a specified number of iterations.
5. Add event handler for Player grid when a move is made.
6. Check for win.
7. Next stage feature.
8. Undo move feature.
9. Modal box to display instructions again when too many wrong moves are made.
*/

var stage;
var comMove = [];
var playerMove = [];

$(document).ready(function() {
  // declaring of variables
  var playerGrid = document.querySelector(".container-player");
  var comGrid = document.querySelector(".container-com");
  var currentPosition = 0;
  var gameStart = false;
  if (localStorage.getItem("level") === null) {
    stage = 1;
    comMove = [0];
    playerMove =[0];
  } else {
    stage = parseInt(localStorage.getItem("level"));
    localStorage.getItem("com").split(",").forEach(function(element) {
      comMove.push(parseInt(element));
    });
    localStorage.getItem("player").split(",").forEach(function(element) {
      playerMove.push(parseInt(element));
    });
  }

  // play button
  $("#play").on("click", function() {
    $(".instructions-slide").fadeOut(400).css("display", "none");
    $(".game-slide").fadeIn(400).css("display", "block");
    gameStart = true;

    drawGrid(playerGrid, "player");
    drawGrid(comGrid, "com");
    $(".level").empty();
    $(".level").text("Level " + stage);
    var comValue;
    if (comMove.length > 1) {
      for (var comIndex = 1; comIndex < comMove.length; comIndex++) {
        comValue = parseInt($("#com" + comMove[comIndex]).text());
        comValue++;
        $("#com" + comMove[comIndex]).text(comValue);
      }
    } else {
      comMoves(0, stage);
    }
    colourGrid("com");

    var playerValue;
    if (playerMove.length > 1) {
      for (var playerIndex = 1; playerIndex < playerMove.length; playerIndex++) {
        playerValue = parseInt($("#player" + playerMove[playerIndex]).text());
        playerValue++;
        $("#player" + playerMove[playerIndex]).text(playerValue);
      }
      currentPosition = parseInt(playerMove[playerMove.length - 1]);
    }
    colourGrid("player");
    $("#player" + currentPosition).addClass("animate");
  });

  // event listener for keyboard input
  $(document).on("keyup", function(event) {
    if (gameStart === true && gameComplete() === false) {
      currentPosition = userMoves(currentPosition, event.which);
      if (playerMove.length >= 4 * stage) {
        $(".modal").css("display", "block");
      }
    }
    if (gameStart === true && gameComplete() === true) {
      gameNext();
    }
    // save game data, needs to be last on the call stack
    setTimeout(function() {
      saveData();
      // console.log("Com1:");
      // console.log(comMove);
      // console.log("Player:");
      // console.log(playerMove);
      // console.log(gameComplete());
    }, 500);
  });

  // undo button
  $("#undo").on("click", function() {
    if (playerMove.length > 1) {
      var oldPosition = playerMove[playerMove.length - 2];
      $("#player" + currentPosition).removeClass("animate");
      var currentCount = parseInt(document.querySelector("#player" + currentPosition).textContent);
      document.querySelector("#player" + currentPosition).textContent = (currentCount - 1).toString();
      colourGrid("player");
      $("#player" + oldPosition).addClass("animate");
      currentPosition = oldPosition;
      playerMove.pop();
    }
  });

  // reset button
  $("#reset").on("click", function() {
    $(".container-player .row").remove();
    drawGrid(playerGrid, "player");
    playerMove = [0];
    $("#player0").text("1");
    colourGrid("player");
    $("#player0").addClass("animate");
    currentPosition = 0;
  });

  // new game button
  $("#new-game").on("click", function() {
    localStorage.removeItem("level");
    localStorage.removeItem("com");
    localStorage.removeItem("player");
    $(".game-slide").fadeTo(200, 0, function() {
      $(".container-player .row").remove();
      $(".container-com .row").remove();
      stage = 1;
      comMove = [0];
      playerMove =[0];
      currentPosition = 0;
      $(".level").empty();
      $(".level").text("Level " + stage);
      gameLoad();
      $(".game-slide").fadeTo(500,1);
    });
  });

  $("#code-btn").on("click", function(event) {
    event.preventDefault();
    $(".incorrect").css("display", "none");
    var string = $(".code").val();
    var stringCode = parseInt(string.slice(4));
    if (string.substring(0, 4) === "grid" && stringCode % 10 === 0 && stringCode !== 0) {
        stage = stringCode;
        $(".instructions-slide").fadeOut(400).css("display", "none");
        $(".game-slide").fadeIn(400).css("display", "block");
        $(".row").remove();
        comMove = [0];
        gameLoad();
        $(".level").empty();
        $(".level").text("Level " + stage);
        gameStart = true;
    } else {
      $(".incorrect").empty();
      $(".incorrect").text("Incorrect code");
      $(".incorrect").fadeIn(400).css("display", "block");
    }
  });

  // swipe event listener
  var swipeArea = document.querySelector(".container-player");
  var swipeConverted;
  swipeDetect(swipeArea, function(swipeDir) {
    switch (swipeDir) {
      case "left":
        swipeConverted = 37;
        break;
      case "up":
        swipeConverted = 38;
        break;
      case "right":
        swipeConverted = 39;
        break;
      case "down":
        swipeConverted = 40;
        break;
      default:
        swipeConverted = 0;
    }

    if (gameStart === true && gameComplete() === false) {
      currentPosition = userMoves(currentPosition, swipeConverted);
      if (playerMove.length >= 4 * stage) {
        $(".modal").css("display", "block");
      }
    }
    if (gameStart === true && gameComplete() === true) {
      gameNext();
    }
    // save game data, needs to be last on the call stack
    setTimeout(function() {
      saveData();
    }, 500);
  });

  // close modal box
  $(".close").on("click", function() {
    $(".modal").css("display", "none");
  });

  // functions to call when the game loads
  var gameLoad = function() {
      drawGrid(playerGrid, "player");
      drawGrid(comGrid, "com");
      comMoves(0, stage);
      colourGrid("com");
      $("#player0").text("1");
      colourGrid("player");
      $("#player0").addClass("animate");
  };

  // animations for text and grid when moving to the next level
  var gameNext = function() {
    stage++;
    comMove = [0];
    playerMove = [0];
    $(".game").fadeTo(200, 0, function() {
      $(".row").remove();
      gameLoad();
      $(".game").fadeTo(500, 1);
    });
    currentPosition = 0;
    $(".level").fadeTo(200, 0, function() {
      $(".level").empty();
      $(".level").text("Level " + stage);
      $(".level").fadeTo(500, 1);
    });
    $(".complete").empty();
    $(".complete").append("Level Complete!");
    $(".complete").fadeTo(200, 1, function() {
      setTimeout(function() {
        $(".complete").fadeTo(800, 0);
      }, 2000);
    });
    if (stage % 10 === 0) {
      var code = stage;
      $(".complete").empty();
      $(".complete").append("Level Complete! Code: grid" + code);
    }
  };

  // function to draw grid
  var drawGrid = function(container, side) {
    var gameCellCount = 0;
    for (var i = 0; i < 5; i++) {
      var gameRow = document.createElement("div");
      gameRow.setAttribute("class", "row");
      container.appendChild(gameRow);
      for (var j = 0; j < 5; j++) {
        var gameCell = document.createElement("div");
        gameCell.setAttribute("class", "cell");
        gameCell.setAttribute("id", side + gameCellCount);
        gameRow.appendChild(gameCell);
        if (gameCellCount === 0) {
          document.querySelector("#" + side + gameCellCount).textContent = "1";
        } else {
          document.querySelector("#" + side + gameCellCount).textContent = "0";
        }
        gameCellCount++;
      }
    }
  };

  // applying background color for grids
  var colourGrid = function(side) {
    for (var i = 0; i < 25; i++) {
      var gridNumberLevel = parseInt(document.querySelector("#" + side + i).textContent);
      var gridNumberMultiples = gridNumberLevel % 5;
      switch (gridNumberMultiples) {
        case 0:
          document.querySelector("#" + side + i).setAttribute("class", "cell grid-range-5");
          break;
        case 1:
          document.querySelector("#" + side + i).setAttribute("class", "cell grid-range-1");
          break;
        case 2:
          document.querySelector("#" + side + i).setAttribute("class", "cell grid-range-2");
          break;
        case 3:
          document.querySelector("#" + side + i).setAttribute("class", "cell grid-range-3");
          break;
        case 4:
          document.querySelector("#" + side + i).setAttribute("class", "cell grid-range-4");
          break;
      }
      if (gridNumberLevel === 0) {
        document.querySelector("#" + side + i).setAttribute("class", "cell grid-range-0");
      }
    }
  };

  var directionCheck = function(current, input) {
    var nextMove;
    var repeat = false;
    var leftEdge = [5, 10, 15, 20];
    var rightEdge = [4, 9, 14, 19, 24];
    var result = [];

    switch (input) {
      case 0:
        nextMove = current - 1; // move left
        break;
      case 1:
        nextMove = current - 5; // move up
        break;
      case 2:
        nextMove = current + 1; // move right
        break;
      case 3:
        nextMove = current + 5; // move down
        break;
    }

    // make sure move lies within the grid
    if (nextMove < 0 || nextMove > 24) {
      repeat = true;
    }
    for (var i = 0; i < leftEdge.length; i++) {
      if (current === leftEdge[i] && nextMove - current === -1) {
        repeat = true;
      }
    }
    for (var j = 0; j < rightEdge.length; j++) {
      if (current === rightEdge[j] && nextMove - current === 1) {
        repeat = true;
      }
    }

    result.push(nextMove);
    result.push(repeat);
    return result;
  };

  // iterate till correct direction is given
  var direction = function(current) {
    var random = Math.floor(Math.random() * 4);
    var move = directionCheck(current, random);
    var nextMove = move[0];
    var repeat = move[1];

    while (repeat) {
      random = Math.floor(Math.random() * 4);
      move = directionCheck(current, random);
      nextMove = move[0];
      repeat = move[1];
    }
    return nextMove;
  };

  var comMoves = function(current, iterations) {
    var location = current;
    for (var i = 0; i < iterations; i++) {
      var nextId = direction(location);
      location = nextId;
      comMove.push(nextId);
      var count = parseInt(document.querySelector("#com" + nextId).textContent);
      document.querySelector("#com" + nextId).textContent = (count + 1).toString();
    }
  };

  // changing styles and grid numbers when player makes moves
  var userMoves = function(current, userKey) {
    var convertedDirection;
    if (userKey === 37 || userKey === 38 || userKey === 39 || userKey === 40) {
      switch (userKey) {
        case 37:
          convertedDirection = 0;
          break;
        case 38:
          convertedDirection = 1;
          break;
        case 39:
          convertedDirection = 2;
          break;
        case 40:
          convertedDirection = 3;
          break;
      }
      var userMove = directionCheck(current, convertedDirection);
      if (userMove[1] === false) {
        $("#player" + current).removeClass("animate");
        var count = parseInt(document.querySelector("#player" + userMove[0]).textContent);
        document.querySelector("#player" + userMove[0]).textContent = (count + 1).toString();
        colourGrid("player");
        $("#player" + userMove[0]).addClass("animate");
        gameComplete();
        playerMove.push(userMove[0]);
        return userMove[0];
      } else {
        $("#player" + current).addClass("animate");
        return current;
      }
    } else {
      $("#player" + current).addClass("animate");
      return current;
    }
  };

  // check for win
  var gameComplete = function() {
    var gameStatus = true;
    for (var i = 0; i < 25; i++) {
      if ($("#player" + i).text() !== $("#com" + i).text()) {
        gameStatus = false;
      }
    }
    return gameStatus;
  };
});

// swiping feature on mobile devices
var swipeDetect = function(screen, callback) {
  var touchSurface = screen;
  var swipeDir, dist, startX, startY, startTime, distX, distY, elapsedTime;
  var allowedTime = 300;
  var thresholdX = 60;
  var thresholdY = 60;
  var restraint = 40;
  handleSwipe = callback || function(swipeDir) {}

  touchSurface.addEventListener("touchstart", function(event) {
    var touchObj = event.changedTouches[0];
    swipeDir = "none";
    dist = 0;
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    event.preventDefault();
  });

  touchSurface.addEventListener("touchend", function(event) {
    var touchObj = event.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= thresholdX && Math.abs(distY) <= restraint) {
        if (distX < 0) {
          swipeDir = "left";
        } else {
          swipeDir = "right";
        }
      } else if (Math.abs(distY) >= thresholdY && Math.abs(distX) <= restraint) {
        if (distY < 0) {
          swipeDir = "up";
        } else {
          swipeDir = "down";
        }
      }
    }
    handleSwipe(swipeDir);
    event.preventDefault();
  });
};

// save game data
var saveData = function() {
  localStorage.setItem("level", stage);
  localStorage.setItem("player", playerMove);
  localStorage.setItem("com", comMove);
};
