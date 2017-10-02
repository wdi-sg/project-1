// create random flower colors that falls from the top of the screen.
// set each color of flower to have different values.

  class Flower {
    constructor (color = this.colorFn(), width, height) {
      this.color = color
      this.element = $('<div class="flower">')
      setInterval(() => {
        this.fall()
      }, 200)
    }

    colorFn () {
      var colorSet = ['#DB5461', '#6D1135', '#C226C9', '#FFEF80', '#63C5B7']
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
        console.log(position)
        if (position.top > '520') {
          this.element.remove()
        }
      }

  }

  $(function () {
    var $container = $('.container')

    setInterval(createFlower, 1000)
    createFlower()

    function createFlower () {
      var randomFlower = new Flower()
      var $newFlower = randomFlower.element
      console.log(randomFlower)
      $newFlower.css({
        backgroundColor: randomFlower.color
      })
      $container.append($newFlower)
      console.log('createFlower')
    }

      // var $playerOne = $('.playerone')

        // function moveLeft(){
        //   $playerOne.on('keydown', function () {
        //     $playerOne.css ({
        //       left: `${playerone.left +10}`px
        //     })
        //   })
            // }
  })

// window.addEventListener("keydown", function (event) {
//   if (event.defaultPrevented) {
//     return; // Should do nothing if the default action has been cancelled
//   }

// var rect1 = {x: 5, y: 5, width: 50, height: 50}
// var rect2 = {x: 20, y: 10, width: 10, height: 10}
//
// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.height + rect1.y > rect2.y) {
//     // collision detected!
// }
//
// // filling in the values =>
//
// if (5 < 30 &&
//     55 > 20 &&
//     5 < 20 &&
//     55 > 10) {
//     // collision detected!
// }
