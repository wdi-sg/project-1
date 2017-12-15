$(function () {

  // -------------------------- definition of global variables -------------------------- //

  var badPeople = [
    { src: './assets/img/murderer.png', score: 5},
    { src: './assets/img/brothel.png', score: 4},
    { src: './assets/img/drug-dealer.png', score: 3},
    { src: './assets/img/injured-cat.png', score: 2},
    { src: './assets/img/bike-thef.png', score: 1}
  ]

  var $instructions = $('.instructions')

  var $paddle = $('.paddle')
  var leftArrow = false
  var rightArrow = false

  var $gameColumn = $('.gameColumn')
  var $heart = $('.heart')
  var heartRad = 10
  // current position of heart
  var heartSpeedX = 20 // speed should always be positive. only position will change
  var heartSpeedY = 20

  var $results = $('.results')
  var $score = $('.score')

  var score = 0

  var $level = $('.level')
  var $mission = $('.mission')

  var lives = 3

  $('.start-btn').click(function () {
    $('.start-screen').hide()
    $('.finish-screen').hide()
    $('.gameColumn').show()
    randomBadPeople()
    createIcon()
    setInterval(createIcon, 2000)
    moveHeart()
    setInterval(moveHeart, 100)
  })

  $('.end-btn').click(function () {
    window.location.reload()
  })

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
    // randomize position
    var maxWidth = $gameColumn.width() - 400
    var minWidth = 0
    var maxHeight = $gameColumn.height() - 200
    var minHeight = 0

    var x = Math.floor(Math.random() * (maxWidth - minWidth + 1) + 170)
    var y = Math.floor(Math.random() * (maxHeight - minHeight + 1))

    // create icon
    var $newIcon = $('<img>')
    $newIcon.attr('src', randomIconSrc)
    $newIcon.attr('data-value', randomIconScore)
    $newIcon.addClass('badPeople')
    $newIcon.attr('id', `bad${iconCounter}`)
    $newIcon.width(80)
    $newIcon.css('left', x)
    $newIcon.css('top', y)
    $gameColumn.append($newIcon)

    arrOfBad.push(`bad${iconCounter}`)
    iconCounter++
  }


  // -------------------------- move the paddle left and right -------------------------- //

  $(document).keydown(function (e) {
    if (e.keyCode === 37 && leftArrow === false && Number(($paddle.css('left')).replace('px', ' ')) > 0) { // left
      $paddle.css('left', Number(($paddle.css('left')).replace('px', ' ')) - 45)
      leftArrow = true
    } else if (e.keyCode === 39 && rightArrow === false && Number(($paddle.css('left')).replace('px', ' ')) < 900) { // right
      $paddle.css('left', Number(($paddle.css('left')).replace('px', ' ')) + 45)
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

    var $width = $('.gameColumn').width()
    var $height = $('.gameColumn').height()

    var paddleWidth = $paddle.width()
    var paddleHeight = $paddle.height()
    var paddleLeftEdge = Number($paddle.css('left').replace('px', ' '))
    var paddleRightEdge = paddleLeftEdge + paddleWidth

    // -------------------------- check for collision between heart and walls and paddle -------------------------- //

    if (heartX > $width - heartRad || heartX < heartRad) {
      heartSpeedX = -heartSpeedX
    } else if (heartY > $height - heartRad) {
      heartSpeedY = -heartSpeedY // top wall
    } else if (heartY < heartRad + paddleHeight) { // bottom wall
      if (heartX > paddleLeftEdge && heartX < paddleRightEdge && heartY < paddleHeight + heartRad) { // check whether the center of the heart is between the left and right edges of the paddle
        heartSpeedY = Math.abs(heartSpeedY)
      } else if (heartY = $paddle.height() - heartRad) {
        // heartSpeedX = 0
        heartSpeedY = Math.abs(heartSpeedY)
        lives--
        $('.lives').text(`Lives: ${lives}`)
        console.log(lives)
        heartSpeedXx = 20
        heartSpeedY = 20
        heartX = $heart.css('left', '505px')
        heartY = $heart.css('bottom', '40px')
        paddleX = ($gameColumn - paddleWidth) / 2
        if (lives === 0) {
          endGame()
        }
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
        var $badPeopleBottom = $height - $badPeopleHeight - $badPeoplePos.top
        var collidedWithIcon = detect(heartX, heartY, heartRad, $badPeopleLeft, $badPeopleBottom, $badPeopleWidth, $badPeopleHeight)

        var arrOfBadRemoved = []

        if (collidedWithIcon) {
          score += $badPeople.data('value')
          $score.text(`Score: ${score}`)
          $badPeople.remove()
          var removeBadIndex = arrOfBad.indexOf(id)
          arrOfBad.splice(removeBadIndex, 1)
          arrOfBadRemoved.push(removeBadIndex)
          nextlevel()
        }
      })
    }
  }

  // -------------------------- check for collision between heart and icons -------------------------- //

  function detect (heartX, heartY, heartRad, $badPeopleLeft, $badPeopleBottom, $badPeopleWidth, $badPeopleHeight) {
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

  // -------------------------- advance to new level -------------------------- //

  var hasHalimahLaughedlives = 0
  function nextlevel () {
    var laughing = new Audio("./assets/img/laughing.mp3")
    var level = Math.floor(score / 100) + 1
    $level.text(`Level: ${level}`)

    if (level === 2) {
      $mission.text('Mission: Obtain a score of 200')
    } else if (level === 3) {
      $mission.text('Mission: Obtain a score of 300')
    }

    if (score >= 100 && level === 2 && hasHalimahLaughed < 1) {
      laughing.play()
      alert('You won! Next Level')
      hasHalimahLaughed++
    } else if (score >= 200 && level === 3 && hasHalimahLaughed < 2) {
      laughing.play()
      alert('You won! Next Level')
      hasHalimahLaughed++
    }
  }

  // -------------------------- gaveover screen -------------------------- //

  function endGame () {
    $('.gameColumn').hide()
    $('#score').text(score)
    $('.finish-screen').show()
    var hasHalimahLaughedlives = 0
  }

  // -------------------------- END OF CODE YAYYYYYYYYY -------------------------- //

})
