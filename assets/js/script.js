var counter = 1
var pixels  = 30

var container = document.querySelector('.container')
var body = document.querySelector('body')

body.addEventListener('click', function () {
  var newIngredient = document.createElement('div')
  newIngredient.style.bottom = "30px"
  newIngredient.style.zIndex = counter
  container.prepend(newIngredient)
})
