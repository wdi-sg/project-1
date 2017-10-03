// create random flower colors that falls from the top of the screen.
// set each color of flower to have different values.

// global
class Flower {
  constructor (color = this.colorFn()) {
    this.color = color
    this.element = $('<div class="flower">')

    setInterval(() => {
      this.fall()
    }, 100)
  }

  colorFn () {
    var colorSet = ['#DB5461', '#6D1135', '#5C7ECD', '#FFEF80', '#63C5B7']
    var colorIndex = Math.floor(Math.random() * colorSet.length)
    return colorSet[colorIndex]
  }
  fall () {
    // console.log("flower is falling")
    // get the element of the flower &
    // move in by 10px down.
    // console.log(this.element)
    var position = this.element.position()

    this.element.css('top', position.top + 30 + 'px')
    if (position.top > '520') {
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
  var $flower = $('.flower')
  var $playerPos = $playerOne.position()
  var $flowerPos = $flower.position()

  setInterval(createFlower, 140)
  createFlower()
  createPlayerOne()
  setInterval(detect, 140)

  function createFlower () {
    var randomFlower = new Flower()
    var $newFlower = randomFlower.element
    $newFlower.css({
      backgroundColor: randomFlower.color,
      left: (Math.floor(Math.random() * 1350) + 'px')
    })

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
        if ($playerPos.left < 1300) $('.playerOne').css('left', $playerPos.left + 35)
        break
      case 'ArrowLeft': // right arrow key
        if ($playerPos.left > 0) $('.playerOne').css('left', $playerPos.left - 35)
        break
    }
  })

  function score () {
    var scoreBoard = $('.score')
  }

  function detect () {
    var $playerOne = $('.playerOne')
    var $playerPos = $playerOne.position()
    var $flower = $('.flower')
    var $flowerPos = $flower.position()

    if ($playerPos.left < $flowerPos.left + $flower.width() &&
        $playerPos.left + $flower.width() > $flowerPos.left &&
        $playerPos.top < $flowerPos.top + $flower.height() &&
        $playerOne.height() + $flowerPos.top > $flowerPos.top) console.log('hit')
  // collision detected!
  }
})
