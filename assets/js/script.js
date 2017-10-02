$(function () {
  var $body = $('body')
  var container = $('.container')
  var $gameColumn = $('.game-column')
  var $paddle = $('.paddle')

  var leftArrow = false
  var rightArrow = false

  var renderHeart = false
  var $heart = $('.heart')
  var initialSpeedX = 5
  var initialSpeedY = -6

  // current speed
  var heartSpeedX = initialSpeedX
  var heartSpeedY = initialSpeedY

  // current location
  var heartX = 0
  var heartY = 0

  var score = 0

  // ------------- move the paddle left and right ------------- //

  $(document).keydown(function (e) {
    if (e.keyCode === 37 && leftArrow === false && parseInt($paddle.css('left')) > 10) { // left
      $paddle.css('left', parseInt($paddle.css('left')) - 40)
      // console.log($paddle.css('left'))
      leftArrow = true
    } else if (e.keyCode === 39 && rightArrow === false && parseInt($paddle.css('left')) < 890) { // right
      $paddle.css('left', parseInt($paddle.css('left')) + 40)
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

  

  // ------------- spawning of "bad people" on the map ------------- //

  // set a maximum number of "bad people" that can be spawned
  var $badPeople = $('.badPeople')
  var spawnRate = 2000
  var startTime = Date.now()
  var objects = []

  // setInterval(addBadPeople, 2000)

  function addBadPeople () {
    $badPeople.css('top', randomTop)
    $badPeople.css('left', randomLeft)
  }

  function randomTop () {
    return Math.floor(Math.random() * 650) + 'px'
  }

  function randomLeft () {
    return Math.floor(Math.random() * 580) + 'px'
  }

  // ------------- results ------------- //

  // if (number of bad people >= max)
    //   gameover
    //   score = 0
    // else
    //   win
    //   score +=1
})
