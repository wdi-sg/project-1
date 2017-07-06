

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
circle.style.left = '150px'
circle.style.top = '110px'
circle.style.right = '230px'
circle.style.bottom = '190px'

function startGame () {

// =========================== Controls: ==================================
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 38) {
    if (canJump) {
      jump()
      //setTimeout(function(){}, 1000)
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
  circle.style.top = 110 + 'px'
  circle.style.backgroundImage = "url('img/skating.gif')"
}

function canJump () {
  if (circle.getBoundingClientRect().top < 110) {
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
},3200)

var area = document.querySelector('.playarea')

function createBlock () {
  var blocks = document.createElement('div')
  blocks.className = 'circle2'
  area.appendChild(blocks)
  blocks.style.left = 950 + 'px'
  blocks.style.top = 150 + 'px'
  return blocks
}



function moveBlock (elem) {
  setInterval(function(){
    if (elem.style.left === '30px') {
      area.removeChild(elem)
      console.log('REMOVEDDDDDDDDD');
    } else {
      if (collision()) {
        // area.removeChild(elem)
        alert('IMPALED!')
        // alert = function( ) {}
      } else {
        console.log(elem.style.left + 'this is it')
      }
      var blocksLeft = parseInt(elem.style.left)

      elem.style.left = blocksLeft - 10 + 'px'
    }
  }, 30)
}

// <<<<<<<<<<<<<<<<<<<<<<<<<Medium>>>>>>>>>>>>>>>>>>

// =========================== Blocks: ==================================
function collision () {
  //var rabbit = document.querySelector('.circle')
  var obstacle = document.querySelector('.circle2')


  var rL = parseInt(circle.style.left)
  var rR = parseInt(circle.style.left) + 80
  var rT = parseInt(circle.style.top)
  var rB = parseInt(circle.style.top) + 80

  var oL = parseInt(obstacle.style.left)
  var oR = parseInt(obstacle.style.left) + 20
  var oT = parseInt(obstacle.style.top)
  var oB = parseInt(obstacle.style.top) + 40

  console.log(oL + 'spikeleft')
    console.log(oT + 'spiketop')
        console.log(oR + 'spikeright')

        console.log(rB + 'rabbottom')
          console.log(rR + 'rabright')
              console.log(rL + 'rableft')

  if (rR > oL &&
      rB > oT &&
      rL < oR) {
    return true
  } else {
    return false
  }
}
// =========================== Timer: ==================================
setInterval(countTimer, 200)
var score = 0
function countTimer () {
   ++score
   var currentTime = document.querySelector('#timer')
   currentTime.innerHTML = 'Score: ' + score;
}

// ==========================


// }
//
//
}
var button = document.querySelector('.button')
button.addEventListener('click', remove)

//
function remove() {
  var start = document.querySelector('.welcome')
  start.style.display = 'none'
  startGame()
}
