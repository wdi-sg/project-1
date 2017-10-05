// star catching//

class Flower {
  constructor () {
    this.index = this.colorFn()
    this.color = this.index.color
    this.points = this.index.points
    this.element = $(`<div class="flower" data-score=${this.points}>`)
    setInterval(() => {
      this.fall()
    }, 90)
  }

  colorFn () {
    var colorSet = [
      {
        points: -3,
        speed: 55,
        sec: -1.5,
        img: 'url(./assets/images/catGhost.gif)'
      },
      {
        points: 1,
        speed: 60,
        sec: 0,
        img: 'url(./assets/images/star2.gif)'
      },
      {
        points: 2,
        speed: 65,
        sec: 0,
        img: 'url(./assets/images/star3.gif)'
      },
      {
        points: 3,
        speed: 75,
        sec: 0,
        img: 'url(./assets/images/star6.gif)'
      },
      {
        points: 4,
        speed: 85,
        sec: 1,
        img: 'url(./assets/images/bottleStar.gif)'
      }
    ]

    var colorIndex = Math.floor(Math.random() * colorSet.length)

    this.sec = colorSet[colorIndex].sec
    this.speed = colorSet[colorIndex].speed
    this.img = colorSet[colorIndex].img
    return colorSet[colorIndex]
  }

  fall () {
    var position = this.element.position()
    this.element.css('top', position.top + this.speed)
    if (position.top > '600') {
      this.element.remove()
    }
  }
}

class Player {
  constructor () {
    this.name = 'player'
    this.element = $('<div class="playerOne">')
  }
}

$(function () {

  var $playerOne = $('.playerOne')
  var $container = $('.container')
  var $playerPos = $playerOne.position()
  var $flower = $('.flower')
  var $flowerPos = $flower.position()
  var score = 0
  var highScoreArr = JSON.parse(localStorage.getItem('HighScore'))
    highScoreArr.sort((a, b) => b - a)
  var storage = window.localStorage
  var timer = 30
  var create
  var play = createPlayerOne()
  var find = setInterval(detect, 50)
  var flowerList = []
  var flowerIndex = 0
  var timerInt

  leaderBoard()
  startGame()

  function startGame () {
    var $startbtn = $('#startbtn')
    var $clickme = $('.clickme')

    $startbtn.one('click', () => {
      $clickme.css('display', 'none')
      create = setInterval(createFlower, 50)
      $timer = $('.timer')
      timerInt = setInterval(() => {
        timer = timer - 1
        $timer.text('Time: ' + timer)

        if (timer <= 0) {
          gameOver()
        }
      }, 1000)
    })
  }

  var $restartbtn = $('#restartbtn')
  $restartbtn.one('click', () => { this.location.reload() })

  function createFlower () {
    var randomFlower = new Flower()
    var $newFlower = randomFlower.element
    $newFlower.css({
      backgroundImage: randomFlower.img,
      backgroundColor: randomFlower.color,
      left: (Math.floor(Math.random() * 1150) + 'px')
    })
    flowerList.push(randomFlower)
    flowerIndex++
    $container.append($newFlower)
  }

  function createPlayerOne () {
    var player = new Player()
    var $newPlayer = player.element
    $container.append($newPlayer)
  }

  $('body').on('keydown', $playerOne, function (event) {
    var $playerOne = $('.playerOne')
    var $playerPos = $playerOne.position()

    switch (event.key) {
      case 'ArrowRight':
        if ($playerPos.left < 1050) $('.playerOne').css('left', $playerPos.left + 50)
        break
      case 'ArrowLeft':
        if ($playerPos.left > 0) $('.playerOne').css('left', $playerPos.left - 50)
        break
    }
  })

  function detect () {
    var $playerOne = $('.playerOne')
    var $playerPos = $playerOne.position()
    var $score = $('.score')

    for (var key in flowerList) {
      var $flower = flowerList[key].element
      var $flowerPos = $flower.position()

      if ($playerPos.left <= $flowerPos.left + $flower.width() &&
      $playerPos.left + $playerOne.width() >= $flowerPos.left &&
      $playerPos.top <= $flowerPos.top + $flower.height()) {
        var indiFlower = flowerList.splice(key, 1)

        score += indiFlower[0].points
        timer += indiFlower[0].sec
        $score.text(`Score: ${score}`)

        indiFlower[0].element.remove()
      }
    }
  }

  function gameOver () {
    var $allFlowers = $('.flower')
    var $gameOverScreen = $('.gameover')
    var $gameStart = $('.gamestart')
    var $highscore = $('.highscore')

    $allFlowers.remove()
    clearInterval(create)
    clearInterval(find)
    clearInterval(timerInt)

    $gameStart.css('display', 'block')
    $highscore.css('display', 'block')
    $gameOverScreen.text(`Score: ${score}`)
    $highscore.text(`HighScore: ${highScoreArr[0]}
                     HighScore: ${highScoreArr[1]}
                     HighScore: ${highScoreArr[2]}`)

    $('.playerOne').css('backgroundImage', 'url(./assets/images/superPink2.gif)')

    if (!highScoreArr.includes(score)) {
      highScoreArr.push(score)
      localStorage.setItem('HighScore', JSON.stringify(highScoreArr))
      $gameOverScreen.css('display', 'block')

      console.log(storage)
    }
  }
  function leaderBoard () {
    var $leaderBoard = $('.leaderBoard')
    $leaderBoard.text(`HighScore: ${highScoreArr[0]}
                   HighScore: ${highScoreArr[1]}
                   HighScore: ${highScoreArr[2]}`)
  }
})
