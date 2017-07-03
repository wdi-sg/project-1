var ingredientCounter = 1 // number of ingredients already in play
var level = 1
var body = document.querySelector('body')
var playArea = document.querySelector('.playArea')
var buttons = document.querySelectorAll('.buttons div')
serveButton = document.querySelector('.serveButton')
score = document.querySelector('.score')
var time = document.querySelector('.time')

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
  newIngredient.style.zIndex = ingredientCounter
  playArea.prepend(newIngredient)
  ingredientCounter++
}

// serve button clears playArea of ingredients, increases score, calls for new order
serveButton.addEventListener('click', serve)
function serve () {
  clearPlayArea()
  increaseScore()
}

function clearPlayArea () {
  // queryselect only after the divs have been added. else it only consists of bottombun
  ingredients = document.querySelectorAll('.ingredients')
  ingredients.forEach(function (el) {
    if (el.id !== 'bottombun') { // remove everything leaving bottom div
      el.parentNode.removeChild(el)
    }
  })
}

function increaseScore () {
  score.innerText = level
  level++
}

// click to start timer
var timeLeft = 60
time.addEventListener('click', function () {
  if (time.innerText === 'Click to Start') { // ensure event only fires once.
    setInterval(countdown, 1000)
  }
})

// callback to change timeLeft and update DOM text
function countdown () {
  if (timeLeft > 0) {
    time.innerText = timeLeft + ' secs'
  }
  timeLeft--
}
