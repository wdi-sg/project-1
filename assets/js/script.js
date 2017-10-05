// $(document).ready(function() {
// })

// Thing to consider is that the program uses 3 states -
// 2 - not running
// 1 - play mode
// 0 - die mode - no input is accepted.


$(function () {

    // saving dom objects to variables
  var $container = $('.container')
  var $bird = $('.bird')
  var pole = $('.pole')
  var poleTop = $('#pole_1')
  var poleBottom = $('#pole_2')
  var score = $('#score')
  var restartBtn = $('#restart-btn')
  var $birdHeight = parseInt($bird.height())
  var conWidth = parseInt($container.width())
  var conHeight = parseInt($container.height())
  var polePos = parseInt(pole.css('right'))
  var pole_initial_height = parseInt(pole.css('height'))
  var $birdLeft = parseInt($bird.css('left'))

  var gameState = 2
  var speed = 0
  var scoreAdd = false
  var stopKeyDown = false;

  function start () {
    birdFlap()
  }

  // audio
  function spop() {
    document.getElementsByClassName('startpop')[0].play()
  }

  function flapsound() {
    // document.getElementsByClassName('birdFlapping')[0].currentTime = 1.3
    document.getElementsByClassName('birdFlapping')[0].pause()
    document.getElementsByClassName('birdFlapping')[0].play()
  }

  function playBgSound() {
    document.getElementsByClassName('play_bgsound')[0].volume = 0.8
    document.getElementsByClassName('play_bgsound')[0].play()
  }

  function hitOver() {
    document.getElementsByClassName('hit')[0].play()
  }
  // audio

  spop()

  // start instruction popup
  $startBtn = $('.start')
  $startBtn.on('click', () => {
    document.getElementsByClassName('startpop')[0].pause()
    stopKeyDown = true;
    $('.start_pop').hide()
    playBgSound ()
    speed = 20
  })

	$container.on('mousedown', function () {
    start()
    birdFlap ()
    flapsound()
	})

	$(this).on('keydown', function (e) {
    if (stopKeyDown) {
      start()
      birdFlap ()
      flapsound()
      if (e.keyCode === 32) {
        if (gameState > 1) return
        if (gameState === 2) gameState = 1
      }
    }
  })


  var polePosInterval = setInterval(poleMove, 50)

  var birdPosInterval = setInterval(function () {
    collisionDetection()
  }, 50)

  // collision session

  // collision with pole
  function collisionDetection () {
    if ($bird.position().left < poleTop.position().left + poleTop.width() && $bird.position().left + $bird.width() > poleTop.position().left && $bird.position().top < poleTop.position().top + poleTop.height() && $bird.height() + $bird.position().top > poleTop.position().top) {
      gameEnd()
    }
    if ($bird.position().left < poleBottom.position().left + poleBottom.width() && $bird.position().left + $bird.width() > poleBottom.position().left && $bird.position().top < poleBottom.position().top + poleBottom.height() && $bird.height() + $bird.position().top > poleBottom.position().top) {
      gameEnd()
    }
  }

  // collision with top and bottom container
  function birdPos () {
    if (parseInt($bird.css('top')) <= 0 || parseInt($bird.css('top')) > $('.container').height() - $('.bird').width()) {
      gameEnd()
    }
  }
  // End collision session

  function poleMove () {
    var cPolePos = parseInt(pole.css('right'))
    // update the score when the poles have passed the $bird successfully
    if (cPolePos > conWidth - $birdLeft) {
      if (scoreAdd === false) {
        score.text(parseInt(score.text()) + 1)
        scoreAdd = true
      }
    }
    // check whether the poles went out of the $container
    if (cPolePos > conWidth) {
      var newHeight = parseInt(Math.floor(Math.random() * 300))
      // change the pole's height
      poleTop.css('height', pole_initial_height + newHeight)
      poleBottom.css('height', pole_initial_height - newHeight)
      //speed increase +1 every time a new pole enter
      speed = speed + 1;
      scoreAdd = false
      // move pole back to right
      cPolePos = polePos
    }
    // move the poles
    pole.css('right', cPolePos + speed)
  }

  function birdFlap () {
    if (gameState === 1 || gameState === 2) {
      $bird.css('transform', 'rotate(-20deg)')
      $bird.stop().animate({
        bottom: '+=40px'
      }, 200, function () {
        birdPos()
        $bird.css('transform', 'rotate(0deg)')
        $bird.stop().animate({
          bottom: '-=70px'
        }, 200, 'linear', function () {
          birdPos()
          gravity()
        })
      })
    }
  }

  function gravity () {
    $bird.stop().animate({
      bottom: '0'
    })
    $bird.css('transform', 'rotate(40deg)')
  }

  function gameEnd () {
    gameState = 0
    document.getElementsByClassName('play_bgsound')[0].pause()
    clearInterval(birdPosInterval)
    clearInterval(polePosInterval)
    $('.gameover_pop').show()
    hitOver()
    // restartBtn.slideDown()
  }

  restartBtn.click(function () {
    location.reload()
  })

})
