

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
      setTimeout(function(){}, 1000)
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
  circle.style.top = 20 + 'px'
  circle.style.backgroundImage = "url('img/skatejump2.png')"
  canJump = false
}
function drop () {
  circle.style.top = 210 + 'px'
  circle.style.backgroundImage = "url('img/skating.gif')"
}

function canJump () {
  if (circle.getBoundingClientRect().top < 210) {
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

// function random (min, max) {
//   return (Math.floor(Math.random() * (max - min + 1)) + min)
// }
//
// var array = [800,1400,1800,2000,3000,2500]
// var rand = array[Math.floor(Math.random() * array.length-1)]

setInterval(function () {
  moveBlock(createBlock())
},2000)

var area = document.querySelector('.playarea')

function createBlock () {
  var blocks = document.createElement('div')
  blocks.className = 'circle2'
  area.appendChild(blocks)
  blocks.style.left = 1200 + 'px'
  return blocks
}



function moveBlock (elem) {
  setInterval(function(){
    if (elem.getBoundingClientRect().left-259 === 1000) {
      area.removeChild(elem)
    } else {
      if(collision()) {
        // area.removeChild(elem)
        alert('IMPALED!')
        // alert = function( ) {}
      } else {
        console.log('jumped over')
      }
        elem.style.left = (elem.getBoundingClientRect().left-259) - 10 + 'px'}
    },200)
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
