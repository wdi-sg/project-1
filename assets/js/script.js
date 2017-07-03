var counter = 1 // number of ingredients already in play
var body = document.querySelector('body')
var playArea = document.querySelector('.playArea')
var buttons = document.querySelectorAll('.buttons div')

// add event listeners to all buttons
buttons.forEach(function (el) {
  el.addEventListener('click', addIngredient)
})

// callback for button click which extracts classname
function addIngredient () {
   // whichIngredient takes out the classnames 'cheese', 'patty' etc.
  whichIngredient = this.className.substring(5).toLowerCase()
  var newIngredient = document.createElement('div')
   // give the new element classname ingredients, which sets core css
  newIngredient.className = 'ingredients'
   // id sets background-image url and negative margins
  newIngredient.id = whichIngredient
   // increasing z-index for overlapping look
  newIngredient.style.zIndex = counter
  playArea.prepend(newIngredient)
  counter++
}

// need a click to start timer going.
var timeLeft = 60
var time = document.querySelector('.time')

time.addEventListener('click', function () {
  if (time.innerText === "Click to Start") {
    setInterval(countdown, 1000)
  }
})

function countdown () {
  if (timeLeft > 0) {
    time.innerText = timeLeft + ' secs'
  }
  timeLeft--
}
