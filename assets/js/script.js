var counter = 1
var body = document.querySelector('body')
var playArea = document.querySelector('.playArea')

body.addEventListener('click', function () {
  var newIngredient = document.createElement('div')
  newIngredient.className = 'ingredients'
  newIngredient.id = 'tomato'
  newIngredient.style.zIndex = counter
  playArea.prepend(newIngredient)
  counter ++
})
