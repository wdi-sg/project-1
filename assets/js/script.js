

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
  circle.style.backgroundImage = "url('skatejump2.png')"
  canJump = false
}
function drop () {
  circle.style.top = 520 + 'px'
  circle.style.backgroundImage = "url('skating.gif')"
}

function canJump () {
  if (circle.getBoundingClientRect().top < 520) {
    return false
  }
}

// =========================== Blocks: ==================================
var isGameOver = false

function collision () {
  var rabbit = document.querySelector('.circle')
  var obstacle = document.querySelector('.circle2')

  var circle = rabbit.getBoundingClientRect()
  var circle2 = obstacle.getBoundingClientRect()

  if (circle.right > circle2.left
    && circle.bottom > circle2.top
    && circle.left < circle2.right) {
    return true
  } else {
    return false
  }
}


// <<<<<<<<<<<<<<<<<<<<<<<<<Easy>>>>>>>>>>>>>>>>>>
// function churnColors () {
//   return random(9, arrColors.length - 1)
// }

setInterval(function () {
  moveBlock(createBlock())
},1800)

var area = document.querySelector('.playarea')

function createBlock () {
  var blocks = document.createElement('div')
  blocks.className = 'circle2'
  // blocks.style.display = 'none'
  area.appendChild(blocks)
  blocks.style.left = 1200 + 'px'
  return blocks
}



function moveBlock (elem) {
  setInterval(function(){
    if (elem.getBoundingClientRect().left-315 === -10) {
      area.removeChild(elem)
    } else {
      if(collision()) {
        area.removeChild(elem)
        alert('IMPALED!')
        // alert = function( ) {}
      } else {
        console.log('jumped over')
      }
      elem.style.display = ''
        elem.style.left = (elem.getBoundingClientRect().left-315) - 10 + 'px'}
    },20)
}

// <<<<<<<<<<<<<<<<<<<<<<<<<Medium>>>>>>>>>>>>>>>>>>


// =========================== Timer: ==================================
setInterval(countTimer, 200)
var score = 0
function countTimer () {
   ++score
   var currentTime = document.querySelector('#timer')
   currentTime.innerHTML = 'Score: ' + score;
}

// ==========================

function random (min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min)*100
}
