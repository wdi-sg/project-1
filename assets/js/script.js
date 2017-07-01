var counter = 1
var pixels  = 30

var body = document.querySelector('body')
var div = document.querySelector('div')

body.addEventListener('click', function () {
  var newIngredient = document.createElement('div')
  newIngredient.style.bottom = "30px"
  newIngredient.style.zIndex = counter
  div.prepend(newIngredient)
})
