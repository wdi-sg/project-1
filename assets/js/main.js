var randomRowOne = randomizer (0, 3)
var randomRowTwo = randomizer (4, 7)
var randomRowThree = randomizer (8, 11)
var randomRowFour = randomizer (12, 15)
var rowOne = [randomRowOne]
var rowTwo = [randomRowTwo]
var rowThree = [randomRowThree]
var rowFour = [randomRowFour]


function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function testing() {
  var gameRowOne = rowOne.splice(0, 1, randomizer (0, 3))
}

addEventListener('click', testing)

// function startingTiles () {
  document.querySelector(".square" + rowOne[0]).style.background = 'black'
  document.querySelector(".square" + rowTwo[0]).style.background = 'black'
  document.querySelector(".square" + rowThree[0]).style.background = 'black'
  document.querySelector(".square" + rowFour[0]).style.background = 'grey'
// }

rowOne = [3]
console.log(rowOne)
console.log(rowTwo)
console.log(rowThree)
console.log(rowFour)

// startingTiles()
