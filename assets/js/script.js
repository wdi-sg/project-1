var counter = 1
var body = document.querySelector('body')
var playArea = document.querySelector('.playArea')
var buttons = document.querySelectorAll('.buttons')

//add event listeners to all buttons
buttons.forEach(function(el) {
  el.addEventListener('click', function() {
    whichIngredient = el.className
    console.log(whichIngredient)
    var newIngredient = document.createElement('div')
    newIngredient.id =
    newIngredient.style.zIndex = counter
    playArea.prepend(newIngredient)
    counter++
  })
})

//callback for button click which extracts classname


//need a click to start timer going.
var timeLeft = 60;
var time = document.querySelector('.time')
function countdown() {
  if (timeLeft > 0)
  time.innerText = timeLeft + " secs"
  timeLeft --
}

timer = document.querySelector('.timer')
timer.addEventListener('click', function() {
  setInterval(countdown, 1000)
})
