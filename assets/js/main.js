var ingredientCounter = 0 // number of ingredients already in play
var level = 1 //determines score and number of things in order list
var playArea = document.querySelector('.playArea')
var buttons = document.querySelectorAll('.buttons div')
var serveButton = document.querySelector('.serveButton')
var score = document.querySelector('.score')
var time = document.querySelector('.time')
var possibleIngredients = ['patty', 'patty', 'tomato', 'onion', 'lettuce', 'cheese']
var order = document.querySelector('.order')
var gameStarted = false
var neededIngredients = []
var startGameOverlay = document.querySelector('.startGameOverlay')
var startGameButton = document.querySelector('.startGameButton')
var endGameOverlay = document.querySelector('.endGameOverlay')
var endGameScore = document.querySelector('.endGameScore')
var restart = document.querySelector('.restart')

// add event listeners to all buttons
buttons.forEach(function (el) {
  el.addEventListener('click', addIngredient)
})

// DOM manipulation to list out ingredients needed
function generateList () {
  var orderList = newOrder()
  orderList.forEach(function (el) {
    var newListItem = document.createElement('h3')
    if (el !== "topbun") {
      newListItem.innerText = el
    } else newListItem.innerText = 'top bun'
    order.appendChild(newListItem)
  })
}

function clearList () {
  order.innerHTML = ""
  neededIngredients = [] //reset the array for clicks to compare against
}

// serve button clears playArea, clears list, increases score, generates new orderList, reset ingredientcounter to 0.
serveButton.addEventListener('click', serve)

function serve () {
  if (gameStarted && ingredientCounter === level + 5) { //4 + 1 to account for bottombun
    clearPlayArea()
    increaseScore()
    clearList()
    generateList()
    ingredientCounter = 0
    //reset current count to zero since ingredients have been cleared off playArea
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
startGameButton.addEventListener('click', startGame)

function startGame() {
  if (!gameStarted) { // ensure event only fires once.
    setInterval(countdown, 1000)
    generateList()
    setTimeout(gameOver, 62000)
  }
   // click to start generates first order
  gameStarted = true
  startGameOverlay.style.height = "0px"
}

// callback to change timeLeft and update DOM text
function countdown () {
  timeLeft--
  if (timeLeft >= 0) {
    time.innerText = timeLeft + ' secs'
  }

}

function gameOver() {
  endGameOverlay.style.height = "768px"
  endGameScore.innerText = score.innerText
  // alert("Game over. You scored " + (level - 1)) //-1 because initial level is already 1
}

restart.addEventListener('click', function() {
  window.location.reload()
})
