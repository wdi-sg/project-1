var counter = 1
var body = document.querySelector('body')
var anchor = document.querySelector('.anchor')

body.addEventListener('click', function () {
  var newIngredient = document.createElement('div')
  newIngredient.className = 'patty'
  newIngredient.style.marginBottom = "-70px"
  newIngredient.style.zIndex = counter
  anchor.prepend(newIngredient)
  counter ++
})
