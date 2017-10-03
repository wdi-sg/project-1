$(function () {
  // ------------- definition of global variables ------------- //

// positionX positionY
  var badPeople =[
    { src: '/assets/img/murderer.png', score: '5'},
    { src: '/assets/img/brothel.png', score: '4'},
    { src: '/assets/img/drug-dealer.png', score: '3'},
    { src: '/assets/img/injured-cat.png', score: '2'},
    { src: '/assets/img/bike-thef.png', score: '2'}
  ]

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

  var iconRowCount = 15
  var iconColumnCount = 15

  var score = 0

  // ------------- creation of bad people icons------------- //

  function randomBadPeople () {
    var badPeopleIndex = Math.floor(Math.random() * badPeople.length)
    return badPeople[badPeopleIndex].src
  }

  function createIcon () {
    // randomize icons
    var randomIconSrc = randomBadPeople()

    // randomize position
    var maxWidth = $gameColumn.width()
    var minWidth = 0
    var maxHeight = $gameColumn.height()
    var minHeight = 0
    var x = Math.floor(Math.random() * (maxWidth - minWidth + 1))
    console.log(x)
    var y = Math.floor(Math.random() * (maxHeight - minHeight + 1))
    console.log(y)

    var $newIcon = $('<img>')
    $newIcon.attr('src', randomIconSrc)
    $newIcon.addClass('badPeople')
    $newIcon.width(60)
    $newIcon.css('left', x)
    $newIcon.css('top', y)
    $gameColumn.append($newIcon)

  }

  setInterval(createIcon, 1000)



  // ------------- move the paddle left and right ------------- //

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

  // ------------- bouncing a heart ------------- //

  function moveHeart () {
    var heartX = Number($heart.css('left').replace('px', ' '))
    var heartY = Number($heart.css('bottom').replace('px', ' '))

    var $width = $('.game-column').width()
    var $height = $('.game-column').height()

    var paddleWidth = $paddle.width()
    var paddleHeight = $paddle.height()
    var paddleLeftEdge = Number($paddle.css('left').replace('px', ' '))
    var paddleRightEdge = paddleLeftEdge + paddleWidth

    var $badPeople = $('.badPeople')
    var $badPeopleLeft = $badPeople.offsetLeft + $badPeopleWidth
    // console.log($badPeopleLeft)
    var $badPeopleBottom = $height - $badPeopleHeight + $badPeople.offsetTop
    // console.log($badPeopleBottom)
    var $badPeopleWidth = $badPeople.width()
    var $badPeopleHeight = $badPeople.height()
    // console.log($badPeopleHeight)
    var collidedWithIcon = detect(heartX, heartY, heartRad, $badPeopleLeft, $badPeopleBottom, $badPeopleWidth, $badPeopleHeight)

    if (heartX > $width - heartRad || heartX < heartRad) {
      heartSpeedX = -heartSpeedX
    } else if (heartY > $height - heartRad) {
      heartSpeedY = -heartSpeedY
    } else if (heartY < heartRad) {
      if (heartX > paddleLeftEdge && heartX < paddleRightEdge && heartY < paddleHeight + heartRad) { // check whether the center of the heart is between the left and right edges of the paddle
        heartSpeedY = Math.abs(heartSpeedY)
      } else if (heartY = $paddle.height() - heartRad) {
        console.log('Game Over')
        heartSpeedX = 0
        heartSpeedY = 0
        // restart()
      }
    }
    $heart.css('left', heartX + heartSpeedX)
    $heart.css('bottom', heartY + heartSpeedY)
    removeIcon(collidedWithIcon)
  }

  // ------------- check for collision - dissappear ------------- //

  function detect (heartX, heartY, heartRad, $badPeopleLeft, $badPeopleBottom, $badPeopleWidth, $badPeopleHeight) {
    // console.log(heartX, heartY, heartRad, $badPeopleLeft, $badPeopleBottom, $badPeopleWidth, $badPeopleHeight)
  // // for()
    if (
      heartX > $badPeopleLeft &&
      heartX < $badPeopleLeft + $badPeopleWidth &&
      heartY > $badPeopleBottom &&
      heartY < $badPeopleBottom + $badPeopleHeight
    ) {
      // console.log(true)
      return true
      heartSpeedY = -heartSpeedY
    } else {
      // console.log(false)
      return false
    }
  }

  function removeIcon (collisionCheck) {
    if (collisionCheck) {
      // remove the image
      console.log('collided')
      $gameColumn.find('.badPeople').remove()
    // } else {
    //   console.log('image remain')
    }
  }

  setInterval(moveHeart, 100) // call moveHeart every

  // ------------- score ------------- //

  // if (number of bad people >= max)
    //   gameover
    //   score = 0
    // else
    //   win
    //   score +=1

  // ------------- restart ------------- //

  function restart () {
    var $restart = $('.restart')
    var $restartBtn = $('#restartBtn')

    game_over = true
    restart.slideDown
  }

  $restartBtn.on('click', function () {

  })

  console.log(restart)
})
