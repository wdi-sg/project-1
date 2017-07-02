var counter = 1
var body = document.querySelector('body')
var playArea = document.querySelector('.playArea')

body.addEventListener('click', function () {
  var newIngredient = document.createElement('div')
  newIngredient.className = 'ingredients'
  newIngredient.id = 'tomato'
  newIngredient.style.zIndex = counter //increasing z index to make them overlap
  playArea.prepend(newIngredient) //add before the anchor bottom bun
  counter ++
})

//need a click to start timer going.
var timeLeft = 60;
var time = document.querySelector('.time')
function countdown() {
  if (timeLeft > 0) timeLeft --
  time.innerText = timeLeft + " secs"
}

setInterval(countdown, 1000)
