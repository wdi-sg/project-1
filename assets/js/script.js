document.addEventListener('DOMContentLoaded', init)

function init () {
  console.log('dom is ready')

  var questionOne = {
    question: 'Which is the fastest growing religion in the world?',
    choices: ['Islam', 'Christianity', 'Buddhism', 'Judaism'],
    correctAns: 0
  }

  var questionTwo = {
    question: 'Which is the most popular type of pet in the world?',
    choices: ['Dogs', 'Hamsters', 'Cats', 'Fish'],
    correctAns: 2
  }

  var allQuestions = [questionOne, questionTwo]

  console.log(questionOne.question)

  var questionDisplay = document.querySelector('h1')
  var ansDisplay = document.querySelector('ul')

  //
  questionDisplay.textContent = questionOne.question

  // how to create an html element
  for (var i = 0; i < questionOne.choices.length; i ++) {
    console.log('ernest')
    var newLi = document.createElement('li')
    newLi.textContent = questionOne.choices[i]
    ansDisplay.appendChild(newLi)
    // create new li element 4 times
    // change content of each li to reflect a different answer option each time
    // append each li to the ul parent
  }

  var allList = document.querySelectorAll('li')

  for (var i =0; i < allList.length; i++) {
    var addAnsListen = allList[i]
    addAnsListen.addEventListener('click', function (event) {
      console.log(event.target.textContent)
    })
  }

  function correctOrNot(ans) {
    // get a string
    // compare with choices[]
    // if string ===


  }
}















  //   console.log(allLis);

  // newLi.addEventListener('click', function (event) {


//   addAnsListen.addEventListener('click', function (event) {
//   console.log(allLis);
// })



//   newLi.addEventListener('click', function (event) {
//     var clickedLi = event.target
//     console.log(clickedLi.textContent)
// }

  //
  // })


  // how to target textContent that was being clicked

  // var newLi = document.createElement('li')
  // nexLi.textContent = questionOne.choices[0]
  // ansDisplay.appendChild(newLi)
  //










  // var newLi = document.createElement('li')
  // newLi.textContent = questionOne.choices[1]
  // ansDisplay.appendChild(newLi)
  //
  //
  // var newLi = document.createElement('li')
  // newLi.textContent = questionOne.choices[2]
  // ansDisplay.appendChild(newLi)
  //
  // var newLi = document.createElement('li')
  // newLi.textContent = questionOne.choices[3]
  // ansDisplay.appendChild(newLi)
