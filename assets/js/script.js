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
  var gameOver = false

  // all fns
  function showQuestionAndChoices (qIndex) {


    if (qIndex <= 3) {
      questionDisplay.textContent = allQuestions[qIndex].question
      ansDisplay.innerHTML = ''

      for (var i = 0; i < allQuestions[qIndex].choices.length; i++) {
        var newLi = document.createElement('li')
        newLi.textContent = allQuestions[qIndex].choices[i]
        ansDisplay.appendChild(newLi)
      }
    } else {

      if (player1Score > player2Score) {
        alert('Game Over, Player 1 Wins!')
        return gameOver = true
      } else if (player2Score > player1Score) {
        alert('Game Over, PLayer 2 Wins!')
        return gameOver = true
      } else if (player1Score === player2Score) {
        alert('its a tie!')
        return gameOver = true
      }
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
    // console.log('', currentQn.choices[currentQn.correctAns])

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
  }

  function activateChoices () {
    var allList = document.querySelectorAll('li')
    for (var i = 0; i < allList.length; i++) {
      var list = allList[i]

      list.addEventListener('click', function () {
        choicesClicker(turnKeeper(questionNum))
        questionNum++
        showQuestionAndChoices(questionNum)
        restartButton()
        turnKeeper(questionNum)
        activateChoices()
      })
    }
  }


  function restartButton() {
    // var restartSelect = document.querySelector('button')
    if (gameOver === true) {
      var restartButton = document.createElement('button')
      restartButton.innerText = 'Restart?'
      document.body.appendChild(restartButton)
      document.querySelector('button').addEventListener('click', function restartGame() {
            questionNum = 0
            gameOver = false
            player1Score = 0
            player2Score = 0
            playerTurn = 1
            showQuestionAndChoices(questionNum)
            activateChoices()
            document.body.removeChild(restartButton)




          })
    }





  }

    // To do list:
    // Create function to check when game ends + determine who wins
    // Create reset button to restart game

  // start at qn 1
  showQuestionAndChoices(questionNum)
  activateChoices()
}
