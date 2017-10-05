// create random flower colors that falls from the top of the screen.
// set each color of flower to have different values.

// global

class Flower {
  constructor () {
    this.index = this.colorFn()
    this.color = this.index.color
    this.points = this.index.points
    this.element = $(`<div class="flower" data-score=${this.points}>`)
    setInterval(() => {
      this.fall()
    }, 100)
  }


  colorFn () {
    var colorSet = [
                    {
                      points: -3,
                      speed: 50,
                      sec: -1,
                      img: 'url(/assets/images/catGhost.gif)'
                    },
                    {
                      points: 1,
                      speed: 55,
                      sec: 0,
                      img: 'url(/assets/images/star6.gif)'
                    },
                    {
                      points: 2,
                      speed:60,
                      sec: 0,
                      img: 'url(/assets/images/star3.gif)'
                    },
                    {
                      points: 3,
                      speed: 70,
                      sec: 0,
                      img: 'url(/assets/images/star2.gif)'
                    },
                    {
                      points: 4,
                      speed: 80,
                      sec: 1,
                      img: 'url(/assets/images/bottleStar.gif)'
                    }
                   ]


    var colorIndex = Math.floor(Math.random() * colorSet.length)

    this.sec = colorSet[colorIndex].sec
    this.speed = colorSet[colorIndex].speed
    this.img = colorSet[colorIndex].img
    return colorSet[colorIndex]
  }

  fall () {
    // console.log("flower is falling")
    // get the element of the flower &
    // move in by 10px down.
    // console.log(this.element)
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
  var timer = 30

  var create
  var play = createPlayerOne()
  var over = setInterval(gameOver, 50)
  var find = setInterval(detect, 50)
  var flowerList = []
  var flowerIndex = 0


startGame()

function startGame () {
  var $startbtn = $('#startbtn')
  var $startGame = $('.startgame')

    $startbtn.one('click', ()=>{
      $startGame.css('display', 'none')
      create = setInterval(createFlower, 50)
      $timer = $('.timer')
      setInterval(() => {
        timer = timer - 1
        $timer.text('Time: ' + timer)
      }, 1000)
    })
  }


    var $restartbtn = $('#restartbtn')
    $restartbtn.one('click', () => {this.location.reload()})


  function createFlower () {
    var randomFlower = new Flower()
    var $newFlower = randomFlower.element
    $newFlower.css({
      backgroundImage: randomFlower.img,
      backgroundColor: randomFlower.color,
      left: (Math.floor(Math.random() * 1330) + 'px')
    })
    // flowerList[flowerIndex] = randomFlower //
    flowerList.push(randomFlower)
    // console.log(flowerList)
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
      case 'ArrowRight': // left arrow key
        if ($playerPos.left < 1250) $('.playerOne').css('left', $playerPos.left + 50)
        break
      case 'ArrowLeft': // right arrow key
        if ($playerPos.left > 0) $('.playerOne').css('left', $playerPos.left - 50)
        break
    }
  })

  function detect () {
    var $playerOne = $('.playerOne')
    var $playerPos = $playerOne.position()
    // var $flower = $('.flower')
    // var $flowerPos = $flower.position()
    var $score = $('.score')

    for (var key in flowerList) {
        // console.log(flowerList[key])
      //
      var $flower = flowerList[key].element
      var $flowerPos = $flower.position()

      // console.log($flowerPos)
      //
      // console.log(flowerList[key]['score']);
      if ($playerPos.left <= $flowerPos.left + $flower.width() &&
      $playerPos.left + $playerOne.width() >= $flowerPos.left &&
      $playerPos.top <= $flowerPos.top + $flower.height()) {


        var indiFlower = flowerList.splice(key, 1)
        // console.log(indiFlower[0].element)
        score += indiFlower[0].points
        timer += indiFlower[0].sec
        $score.text(`Score: ${score}`)
        // console.log(indiFlower[0].sec)


        indiFlower[0].element.remove()
        // console.log(score)
      }
    }
  }

  function gameOver () {
    var $allFlowers = $('.flower')
    var $gameOverScreen = $('.gameover')
    var $gameStart = $('.gamestart')
    if (timer <= 0) {
      $allFlowers.remove()
      clearInterval(create)
      clearInterval(find)
      timer = 1
      $gameStart.css('display', 'block')
      $gameOverScreen.css('display', 'block')
      $gameOverScreen.text(`Score: ${score}`)
      $('.playerOne').css('backgroundImage', 'url(/assets/images/superPink2.gif)')
    }
  }
})
