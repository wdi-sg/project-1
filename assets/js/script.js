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
    }, 180)
  }

  colorFn () {
    var colorSet = [{color:'black', points: -5},
                    {color:'black', points: -4},
                    {color:'#5C7ECD', points: 3},
                    {color:'#FFEF80', points: 2},
                    {color:'#63C5B7', points: 1}]

    // for (var i = 0; i < colorSet.length; i++)
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
    if (position.top > '600') {
      this.element.remove()
    }
  }

  // detect () {
  //   var $playerOne = $('.playerOne')
  //   var $playerPos = $playerOne.position()
  //   var $flower = $('.flower')
  //   var $flowerPos = $flower.position()
  //   var $score = $('.score')
  //
  //   for (key in flowerList) {
  //     if ($flowerPos.left < $playerPos.left + $playerOne.width() &&
  //     $flowerPos.left + $playerOne.width() > $playerPos.left &&
  //     $flowerPos.top < $playerPos.top + $playerOne.height() &&
  //     $flower.height() + $playerPos.top > $playerPos.top) {
  //       console.log('hit')
  //
  //     }
  //   }
  // }

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
  var score = 0
  var timer = 30

  setInterval(createFlower, 300)

  var firstFlower = new Flower()
  createPlayerOne()
  // setInterval($flower.detect, 100)
  setInterval(detect, 300)
  var flowerList =[]
  var flowerIndex = 0

  function createFlower () {
    var randomFlower = new Flower()
    var $newFlower = randomFlower.element
    $newFlower.css({
      backgroundColor: randomFlower.color,
      left: (Math.floor(Math.random() * 1350) + 'px')
    })
    flowerList[flowerIndex] = randomFlower
    // console.log(randomFlower)
    flowerIndex++
    $container.append($newFlower)
  }

  $timer = $('.timer')
  setInterval( () => {
    timer = timer - 1
    $timer.text("Time : " + timer)
  } ,1000)


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

  function detect () {
    var $playerOne = $('.playerOne')
    var $playerPos = $playerOne.position()
    var $flower = $('.flower')
    var $flowerPos = $flower.position()
    var $score = $('.score')


    for (key in flowerList) {
      // console.log(flowerList[key]['score']);
      if ($playerPos.left < $flowerPos.left + $flower.width() &&
      $playerPos.left + $flower.width() > $flowerPos.left &&
      $playerPos.top < $flowerPos.top + $flower.height() &&
      $playerOne.height() + $flowerPos.top > $flowerPos.top) {
        console.log('hit')
        // console.log($(flowerList))
        score += flowerList[key].points
        flowerList.splice(key, 1)
        $score.text(`Score: ${score}`)
      }
    }
  }

  function gameStart() {

  }

})
