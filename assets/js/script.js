document.addEventListener('DOMContentLoaded', init)

function init () {
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
  var questionThree = {
    question: 'What is the term for a decorative image drawn on the skin with a needle?',
    choices: ['Freckle', 'Fresco', 'Tattoo', 'Regrettable'],
    correctAns: 2
  }
  var questionFour = {
    question: ' This is question four',
    choices: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    correctAns: 1
  }
  var allQuestions = [questionOne, questionTwo, questionThree, questionFour]

  // all the dom selections
  var questionDisplay = document.querySelector('h1')
  var ansDisplay = document.querySelector('ul')
  var turnDisplay = document.querySelector('h2')
  var p1ScoreDisplay = document.querySelector('#player1Score')
  var p2ScoreDisplay = document.querySelector('#player2Score')

  // global vars - init environment
  var questionNum = 0
  var player1Score = 0
  var player2Score = 0
  var playerTurn = 1

  // all fns
  function showQuestionAndChoices (qIndex) {
    questionDisplay.textContent = allQuestions[qIndex].question
    ansDisplay.innerHTML = ''

    for (var i = 0; i < allQuestions[qIndex].choices.length; i++) {
      var newLi = document.createElement('li')
      newLi.textContent = allQuestions[qIndex].choices[i]
      ansDisplay.appendChild(newLi)
    }
  }

  function turnKeeper (questionNum) {
    // console.log(qIndex);
    if (questionNum % 2 === 0) {
      playerTurn = 1
      turnDisplay.innerText = 'Player 1 is playing'
    } else {
      playerTurn = 2
      turnDisplay.innerText = 'Player 2 is playing'
    }

    return playerTurn
  }

  function choicesClicker (currentPlayer) {
    var currentQn = allQuestions[questionNum]
    // console.log(currentPlayer)
    // console.log('check answer')
    // console.log('current qn', currentQn)
    console.log('', currentQn.choices[currentQn.correctAns])
    if (currentPlayer === 1 && event.target.textContent === currentQn.choices[currentQn.correctAns]) {
      player1Score += 1
      p1ScoreDisplay.textContent = 'Player 1\'s score is' + ' ' + player1Score
      console.log(player1Score)
    } else {
      if (currentPlayer === 2 && event.target.textContent === currentQn.choices[currentQn.correctAns]) {
        player2Score += 1
        p2ScoreDisplay.textContent = 'Player 2\'s score is' + ' ' + player2Score
        console.log(player2Score)
      }

    }

  //   for (var i = 0; i < allList.length; i++) {
  //     var addAnsListen = allList[i]
  // //
  //     console.log(allList[i])
  //     addAnsListen.addEventListener('click', function (event) {
  //       console.log(event.target.textContent)
  //       console.log(currentQn.choices[currentQn.correctAns])
  // //
  //
  // //
  //
  // //       // update div id player1Score to reflect change
  //       }
  //     }
  }

  function activateChoices () {
    var allList = document.querySelectorAll('li')
    for (var i = 0; i < allList.length; i++) {
      var list = allList[i]

      list.addEventListener('click', function () {
        choicesClicker(turnKeeper(questionNum))
        questionNum++
        showQuestionAndChoices(questionNum)
        turnKeeper(questionNum)
        activateChoices()
      })
    }
  }

  // start at qn 1
  showQuestionAndChoices(questionNum)
  activateChoices()

  // for (var i = 0; i < allList.length; i++) {
  // input: q index
  // output: nothing
  // side effect: write questions and choices

    // function showQuestionAndChoices (qIndex) {
      // questionDisplay.textContent = allQuestions[qIndex].question
      // ansDisplay.innerHTML = ''

    // console.log(ansDisplay);

      // for (var i = 0; i < allQuestions[qIndex].choices.length; i++) {
      //   var newLi = document.createElement('li')
      //   newLi.textContent = allQuestions[qIndex].choices[i]
      //   ansDisplay.appendChild(newLi)
      // }
    // console.log(allQuestions[qIndex].question)
    // display question asked & q choices
    // }

//     function choicesClicker () {
//       for (var i = 0; i < allList.length; i++) {
//         var addAnsListen = allList[i]
//
//         console.log(allList[i])
//         addAnsListen.addEventListener('click', function (event) {
//           console.log(event.target.textContent)
//           console.log(currentQn.choices[currentQn.correctAns])
//
//           if (event.target.textContent === currentQn.choices[currentQn.correctAns]) {
//             var p1ScoreDisplay = document.querySelector('#player1Score')
//
//             player1Score += 1
//             p1ScoreDisplay.textContent = player1Score
//             console.log(player1Score)
//           // update div id player1Score to reflect change
//           } else {
//             console.log('wrong, do sth else, change next qn')
//           }
//         })
//
// // Add more questions to quiz
// // Program switching between P1 and P2
// // Ensure scoring works for P1 and P2
//
//         questionNum++
//         showQuestionAndChoices(questionNum)
//
//
//       // change to q2
//       }
//     }

  // function correctOrNot (ans) {
  //   if (questionOneAns() == allQuestions[0].choices[0]) {
  //     console.log('Correct!')
  //   }
  //
  //   // get a string
  //   // compare with choices[]
  //   // if string ===
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
