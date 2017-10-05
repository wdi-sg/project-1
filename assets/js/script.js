$(function () {

  $(".start-Button").click(function () {
      $(".start-screen").hide()
      $(".finish-screen").hide()
      $(".gamecolumn").show()
      // startGame();
  })

  // -------------------------- definition of global variables -------------------------- //

  var badPeople = [
    { src: '/assets/img/murderer.png', score: 5},
    { src: '/assets/img/brothel.png', score: 4},
    { src: '/assets/img/drug-dealer.png', score: 3},
    { src: '/assets/img/injured-cat.png', score: 2},
    { src: '/assets/img/bike-thef.png', score: 1}
  ]
  // console.log(badPeople)

  var $instructions = $('.instructions')

  var $paddle = $('.paddle')
  var leftArrow = false
  var rightArrow = false

  var $gameColumn = $('.game-column')
  var $heart = $('.heart')
  var heartRad = 10
  // current position of heart
  var heartSpeedX = 20 // speed should always be positive. only position will change
  var heartSpeedY = 20

  var $results = $('.results')
  var $score = $('.score')

  var score = 0

  // -------------------------- creation of bad people icons -------------------------- //

  function randomBadPeople () {
    var badPeopleIndex = Math.floor(Math.random() * badPeople.length)
    return badPeople[badPeopleIndex]
  }

  var iconCounter = 1
  var arrOfBad = []

  function createIcon () {
    // randomize icons
    var randomIndex = randomBadPeople()
    var randomIconSrc = randomIndex.src
    var randomIconScore = randomIndex.score
    console.log(randomIconScore)
    // randomize position
    var maxWidth = $gameColumn.width() - 400
    var minWidth = 0
    var maxHeight = $gameColumn.height() - 200
    var minHeight = 0

    var x = Math.floor(Math.random() * (maxWidth - minWidth + 1) + 170)
    // console.log(x)
    var y = Math.floor(Math.random() * (maxHeight - minHeight + 1))
    // console.log(y)

    var totalIcon = 80

    // create icon
    var $newIcon = $('<img>')
    $newIcon.attr('src', randomIconSrc)
    $newIcon.attr('data-value', randomIconScore)
    $newIcon.addClass('badPeople')
    $newIcon.attr('id', `bad${iconCounter}`)
    $newIcon.width(80)
    $newIcon.css('left', x) // x)
    $newIcon.css('top', y) // y)
    $gameColumn.append($newIcon)

    arrOfBad.push(`bad${iconCounter}`)
    iconCounter++
    console.log(arrOfBad)
    console.log('newIcon', $newIcon)
  }

  // createIcon()
  setInterval(createIcon, 2000)

  // -------------------------- move the paddle left and right -------------------------- //

  $(document).keydown(function (e) {
    if (e.keyCode === 37 && leftArrow === false && Number(($paddle.css('left')).replace('px', ' ')) > 0) { // left
      $paddle.css('left', Number(($paddle.css('left')).replace('px', ' ')) - 45)
      // console.log($paddle.css('left'))
      leftArrow = true
    } else if (e.keyCode === 39 && rightArrow === false && Number(($paddle.css('left')).replace('px', ' ')) < 900) { // right
      $paddle.css('left', Number(($paddle.css('left')).replace('px', ' ')) + 45)
      // console.log($paddle.css('left'))
      rightArrow = true
    }
  })

  $(document).keyup(function (e) {
    if (e.keyCode === 37) {
      leftArrow = false
    } else if (e.keyCode === 39) {
      rightArrow = false
    }
  })

  // -------------------------- bouncing a heart -------------------------- //
  var $windowHeight = $(window).height()

  function moveHeart () {
    var heartX = Number($heart.css('left').replace('px', ' '))
    var heartY = Number($heart.css('bottom').replace('px', ' '))

    var $width = $('.game-column').width()
    var $height = $('.game-column').height()

    var paddleWidth = $paddle.width()
    var paddleHeight = $paddle.height()
    var paddleLeftEdge = Number($paddle.css('left').replace('px', ' '))
    var paddleRightEdge = paddleLeftEdge + paddleWidth

    // -------------------------- check for collision between heart and walls and paddle -------------------------- //

    if (heartX > $width - heartRad || heartX < heartRad) {
      heartSpeedX = -heartSpeedX
    } else if (heartY > $height - heartRad) {
      heartSpeedY = -heartSpeedY
    } else if (heartY < heartRad + paddleHeight) {
      if (heartX > paddleLeftEdge && heartX < paddleRightEdge && heartY < paddleHeight + heartRad) { // check whether the center of the heart is between the left and right edges of the paddle
        heartSpeedY = Math.abs(heartSpeedY)
      } else if (heartY = $paddle.height() - heartRad) {
        heartSpeedX = 0
        heartSpeedY = 0
        checkLives()
        deductLives()
      }
    }
    $heart.css('left', heartX + heartSpeedX)
    $heart.css('bottom', heartY + heartSpeedY)

    // -------------------------- remove collided icons and add score -------------------------- //

    if (arrOfBad.length) {
      // console.log(`currently there're ${arrOfBad.length} in the map`)
      arrOfBad.forEach((id) => {
        var $badPeople = $(`#${id}`)
        var $badPeopleWidth = $badPeople.width()
        var $badPeopleHeight = $badPeople.height()
        var $badPeoplePos = $badPeople.position()
        var $badPeopleLeft = $badPeoplePos.left
        // console.log($badPeopleLeft)
        var $badPeopleBottom = $height - $badPeopleHeight - $badPeoplePos.top
        // console.log($badPeopleBottom)
        var collidedWithIcon = detect(heartX, heartY, heartRad, $badPeopleLeft, $badPeopleBottom, $badPeopleWidth, $badPeopleHeight)

        var arrOfBadRemoved = []

        if (collidedWithIcon) {
          // console.log('$badPeople', $badPeople)
          // console.log('$badPeople Data', $badPeople.data('value'))
          score += $badPeople.data('value')
          // console.log('score', score)
          $score.text(`Score: ${score}`)
          $badPeople.remove()
          var removeBadIndex = arrOfBad.indexOf(id)
          arrOfBad.splice(removeBadIndex, 1)
          arrOfBadRemoved.push(removeBadIndex)
          console.log(arrOfBadRemoved[arrOfBadRemoved.length - 1])
          nextlevel()
        }
      })
    }
  }

  // -------------------------- check for collision between heart and icons -------------------------- //

  function detect (heartX, heartY, heartRad, $badPeopleLeft, $badPeopleBottom, $badPeopleWidth, $badPeopleHeight) {
    // console.log(heartX, heartY, heartRad, $badPeopleLeft, $badPeopleBottom, $badPeopleWidth, $badPeopleHeight)
    if (
      heartX > $badPeopleLeft &&
      heartX + (2 * heartRad) < $badPeopleLeft + $badPeopleWidth &&
      heartY > $badPeopleBottom &&
      heartY + (2 * heartRad) < $badPeopleBottom + $badPeopleHeight
    ) {
      console.log('colission detected')
      return true

      heartSpeedY = -heartSpeedY
    } else {
      console.log('nope')
      return false
    }
  }

  setInterval(moveHeart, 100) // call moveHeart every 0.1s

  // -------------------------- check for lives -------------------------- //

  function checkLives () {
    var $halimahLives = $('.halimah-lives')

    if($halimahLives.length === 3) {
      return 3
    } else if ($halimahLives.length === 2) {
      return 2
    } else if ($halimahLives.length === 1) {
      return 1
    // } else if ($halimahLives.length === 0) {
    //   return endGame()
    }
  }

  // -------------------------- deduct lives -------------------------- //

  function deductLives () {
    var $halimahLives1 = $('#halimah-lives-1')
    var $halimahLives2 = $('#halimah-lives-2')
    var $halimahLives3 = $('#halimah-lives-3')

    if(checkLives () === 3) {
      $halimahLives1.hide()
    } else if (checkLives () === 2) {
      $halimahLives2.hide()
    } else if (checkLives () === 1) {
      $halimahLives3.hide()
      endGame()
    }
  }

  // -------------------------- advance to new level -------------------------- //

  var $level = $('.level')
  var $mission = $('.mission')

  function nextlevel () {
    var level = Math.floor(score / 100) + 1
      $level.text(`Level: ${level}`)
      // console.log("level", level);

      if (level === 2) {
        $mission.text("Mission: Obtain a score of 200")
      } else if (level === 3) {
        $mission.text("Mission: Obtain a score of 300")
      }
  }

  // -------------------------- restart level -------------------------- //

  // var $level = $('.level')
  //
  // function restartLevel () {
  //
  //
  // }

  // -------------------------- gaveover screen -------------------------- //

  function endGame() {
      $(".gameColumn").hide();
      $("#score").text(score);
      $(".finish-screen").show();
  }

  // -------------------------- END OF CODE YAYYYYYYYYY -------------------------- //

})
