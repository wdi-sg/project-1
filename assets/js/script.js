var ingredientCounter = 0 // number of ingredients already in play
var level = 1
var playArea = document.querySelector('.playArea')
var buttons = document.querySelectorAll('.buttons div')
var serveButton = document.querySelector('.serveButton')
var score = document.querySelector('.score')
var time = document.querySelector('.time')
var possibleIngredients = ['patty', 'tomato', 'onion', 'lettuce', 'cheese']
var order = document.querySelector('.order')
var gameStarted = false;
// add event listeners to all buttons
buttons.forEach(function (el) {
  el.addEventListener('click', addIngredient)
})

// addingredient needs to check if it is the same as in order before adding
// callback for button click which extracts classname
function addIngredient () {
  if (gameStarted) {
   // whichIngredient takes out the classnames 'cheese', 'patty' etc.
  whichIngredient = this.className.substring(5).toLowerCase()
  var newIngredient = document.createElement('div')
   // give the new element classname ingredients, which sets core css
  newIngredient.className = 'ingredients'
   // id sets background-image url and negative margins
  newIngredient.id = whichIngredient
   // increasing z-index for overlapping look
  ingredientCounter++ // counter starts at 0. increase before adding
  newIngredient.style.zIndex = ingredientCounter
  playArea.prepend(newIngredient)
  }
}

// generate random array of ingredients.
// excluding topbun which must be the last item of every order
function randomizer () {
  var randomNum = Math.floor(Math.random() * 5)
  return possibleIngredients[randomNum]
}

function newOrder () {
  var arr = []
  for (i = 0; i < level + 4; i++) { // base number of ingredients at lvl 1 is 4.
    arr.push(randomizer())
  }
  arr.push('topbun')
  return arr
}

// DOM manipulation to list out ingredients needed

function generateList () {
  var orderList = newOrder()
  orderList.forEach(function (el) {
    var newListItem = document.createElement('li')
    newListItem.innerText = el
    order.prepend(newListItem)
  })
}

function clearList () {
  order.innerHTML = ""
}

// serve button clears playArea of ingredients, increases score, calls for new order
serveButton.addEventListener('click', serve)
// need to clear the order list before adding new orders.
function serve () {
  if (gameStarted) {
    clearPlayArea()
    increaseScore()
    clearList()
    generateList()
  }
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
  gameStarted = true
  if (time.innerText === 'Click to Start') { // ensure event only fires once.
    setInterval(countdown, 1000)
  }
  generateList() // click to start and generate first order
})

// callback to change timeLeft and update DOM text
function countdown () {
  if (timeLeft > 0) {
    time.innerText = timeLeft + ' secs'
  }
  timeLeft--
}
