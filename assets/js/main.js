// add event listeners to all ingredients
buttons.forEach(function (el) {
  el.addEventListener('click', addIngredient)
})

// addingredient needs to check if it is the same as in order before adding
// callback for button click which extracts classname
function addIngredient () {
  if (gameStarted) {
   // whichIngredient takes out the classnames 'cheese', 'patty' etc.
    whichIngredient = this.className.substring(5).toLowerCase()
    if (checkForMatch()) {
      // add strikethrough to list item
      var h3 = document.querySelectorAll('h3')
      h3[ingredientCounter].style.textDecoration = 'line-through'
      var newIngredient = document.createElement('div')
     // give the new element classname ingredients, which sets core css
      newIngredient.className = 'ingredients'
     // id sets background-image url and negative margins
      newIngredient.id = whichIngredient
      newIngredient.style.bottom = (60 + ingredientCounter * 20) + 'px'
      ingredientCounter++ // counts num of added ingredients so far
      // increasing z-index for overlapping look
      newIngredient.style.zIndex = ingredientCounter
      playArea.prepend(newIngredient)
    }
  }
}

// DOM manipulation to list out ingredients needed
function generateList () {
  var orderList = newOrder()
  orderList.forEach(function (el) {
    var newListItem = document.createElement('h3')
    if (el !== 'topbun') {
      newListItem.innerText = el
    } else newListItem.innerText = 'top bun'
    order.appendChild(newListItem)
  })
}

function clearList () {
  order.innerHTML = ''
  neededIngredients = [] // reset the array for clicks to compare against
}

// serve button clears playArea, clears list, increases score
// generates new orderList, reset ingredientcounter to 0.
serveButton.addEventListener('click', serve)

function serve () {
  if (gameStarted && ingredientCounter === level + 5) { // 4 + 1 to account for bottombun
    clearPlayArea()
    increaseScore()
    clearList()
    generateList()
    ingredientCounter = 0
    // reset current count to zero since ingredients have been cleared off playArea
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
var timeLeft = 90
startGameButton.addEventListener('click', startGame)

function startGame () {
  if (!gameStarted) { // ensure setInterval only fires once
    setInterval(countdown, 1000)
    generateList() // click to start generates first order
    setTimeout(gameOver, 90000) // cause endGameOverlay to appear
  }
  gameStarted = true
  startGameOverlay.style.height = '0px' // collapse overlay
}

// callback to change timeLeft and update DOM text
function countdown () {
  timeLeft--
  if (timeLeft >= 0) {
    time.innerText = timeLeft + ' secs'
  }
}

function gameOver () {
  endGameOverlay.style.height = '768px' // expand originally collapsed overlay
  endGameScore.innerText = score.innerText
  endGameScore.style.fontSize = '300px'
  endGameScore.style.marginTop = '100px'
}

restart.addEventListener('click', function () {
  window.location.reload()
})
