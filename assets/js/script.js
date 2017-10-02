// create random flower colors that falls from the top of the screen.
// set each color of flower to have different values.

  class Flower {
    constructor (color = this.colorFn()) {
      this.color = color
      this.element = $('<div class="flower">')
      setInterval(() => {
        this.fall()
      }, 100)
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
      this.element.css('top', position.top + 20 + 'px')
      if (position.top > '520') {
        this.element.remove()
      }
    }
  }

  class Player {
    constructor () {
      this.name = "player"
      this.element = $('<div class="playerOne">')


    }
  }


  $(function () {
    var $playerOne = $('.playerOne')
    var $container = $('.container')

    // $playerOne.on('click')
    setInterval(createFlower, 200)
    createFlower()
    createPlayerOne()



    function createFlower () {
      var randomFlower = new Flower()
      var $newFlower = randomFlower.element
      $newFlower.css({
        backgroundColor: randomFlower.color,
        left: (Math.floor(Math.random() * 1350) + 'px')
      })

      $container.append($newFlower)
    }

    function createPlayerOne() {
      var player = new Player()
      var $newPlayer = player.element
      $container.append($newPlayer)
    }


    $('body').on('keydown', $playerOne, function(event) {
      var $playerOne = $('.playerOne')
      var $playerPos = $playerOne.position()

        switch (event.key) {
            case 'ArrowRight': // left arrow key
              if($playerPos.left < 1300) $('.playerOne').css('left', $playerPos.left + 70);
              break;
            case 'ArrowLeft': // right arrow key
               if($playerPos.left > 0) $('.playerOne').css('left', $playerPos.left - 70);
               break;
        }
    })




    // function movePlayer() {
    //   $playerOne.on('keydown', function(e) {
    //     var playerPos = $playerOne.position()
    //      if(e.keyCode == 37) { left
    //      $('.playerOne').animate({
    //        left: "-=20" + "px"
    //      })
    //    }

        // $playerOne.css({
        //   right: `${playerOne.right + 20}px`
        // })
    //   })
    // }


    // {
    //   if(e.keyCode == 37) { // left
    //     $("#showroom").animate({
    //       left: "-=980"
    //     });
    //   }
    //   else if(e.keyCode == 39) { // right
    //     $("#showroom").animate({
    //       left: "+=980"
    //     });
    //   }
    // });


// ('left', position.left + (Math.floor(Math.random() *1400) + 'px' )

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
