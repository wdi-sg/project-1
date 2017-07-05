

function init () {
  var allDivs = document.querySelectorAll('div')

  allDivs.forEach(function (div) {
    div.addEventListener('', addMove)
  })
}

function addMove (event) {
  var elem = event.target
  elem.classList.add('move')
}

var circle = document.querySelector('.circle')

// =========================== Controls: ==================================
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 38) {
    if (canJump) {
      jump()
      canJump = false
    } else if (!canJump) {
      drop()
    }
  }
})

document.addEventListener('keyup', function (event) {
  drop ()
  canJump = true
})

function jump () {
  circle.style.top = 200 + 'px'
  circle.style.backgroundImage = "url('/../assets/img/skatejump2.png')"
  canJump = false
}
function drop () {
  circle.style.top = 520 + 'px'
  circle.style.backgroundImage = "url('/../assets/img/skating.gif')"
}

function canJump () {
  if (circle.getBoundingClientRect().top < 520) {
    return false
  }
}

// =========================== Blocks: ==================================
var isGameOver = false

function lost () {
alert('bang')
}


function collision () {
  var rabbit = document.querySelector('.circle')
  var obstacle = document.querySelector('.circle2')

  var circle = rabbit.getBoundingClientRect()
  var circle2 = obstacle.getBoundingClientRect()
  // console.log(circle2.left);

  // if (rabbit.getBoundingClientRect().top > 510 ) {
  //   console.log(rabbit)
  // }

  if (circle.left > circle2.left  &&
    circle.bottom > circle2.top
    // circle.right > circle2.right ||
    // circle.top > 510
    // circle.bottom > circle2.top
    // circle.bottom < circle2.bottom ||
    // circle.right > circle2.left ||
    // circle.bottom > circle2.top
  ) {
    alert('bang')
    isGameOver = true
    alert = function() {}

  }

}
if (!isGameOver) {
  setInterval(collision, 210)

}


// <<<<<<<<<<<<<<<<<<<<<<<<<Easy>>>>>>>>>>>>>>>>>>

// setInterval(function () {
//   createBlock()
//   moveBlock()
// },1000)
setInterval(createBlock, 200)
setInterval(moveBlock, 300)
setInterval(removeBlock, 3000)


var area = document.querySelector('.playarea')

function createBlock () {
  var blocks = document.createElement('div')
  blocks.className = 'circle2'
  area.appendChild(blocks)
}

function removeBlock () {
    var elem = document.querySelector('.circle2')
    if (elem.getBoundingClientRect().left = -500 + 'px') {
    area.removeChild(elem)
  }
}

function moveBlock () {
  var elem = document.querySelector('.circle2')
  elem.style.left = -500 + 'px'
  elem.style.transition = 'left ' + 4 + 's'
}

// <<<<<<<<<<<<<<<<<<<<<<<<<Medium>>>>>>>>>>>>>>>>>>

// setInterval(createBlock, 10)
// setInterval(move, 11)
// setInterval(remove, 1500)
//
// var area = document.querySelector('.playarea')
//
// function createBlock () {
//   var blocks = document.createElement('div')
//   blocks.className = 'circle2'
//   area.appendChild(blocks)
// }
//
// function remove () {
//   var elem = document.querySelector('.circle2')
//   area.removeChild(elem)
// }
//
// function move () {
//   var elem = document.querySelector('.circle2')
//   elem.style.left = -500 +'px'
// }

// =========================== Timer: ==================================
setInterval(countTimer, 200)
var score = 0
function countTimer () {
   ++score
   var currentTime = document.querySelector('#timer')
   currentTime.innerHTML = 'Score: ' + score;

  //  if (score % 10 === 0) {
  //    createBlock ()
  //    setTimeout(moveBlock, 500)
}

// ==========================

function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
