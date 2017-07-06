document.addEventListener('DOMContentLoaded', init)

function init () {
  var questionOne = {
    question: '1st Grade Physics: A conventional round doorknob is an example of which simple machine?',
    choices: ['Lever', 'Pulley', 'Inclined Plane', 'Wheel and Axle'],
    correctAns: 0
  }
  var questionTwo = {
    question: '2nd Grade English: Which word is a compound word?',
    choices: ['Sheep', 'Pumpkins', 'Popcorn', 'Babies'],
    correctAns: 2
  }
  var questionThree = {
    question: '3rd Grade World History: Roman gladiators fought in the' ,
    choices: ['Parthenon', 'Aqueducts', 'Colosseum', 'Streets'],
    correctAns: 2
  }
  var questionFour = {
    question: '4th Grade Art: Colors opposite each other on the color wheel such as red and green are called:',
    choices: ['Neutral', 'Complementary', 'Primary', 'Analogous'],
    correctAns: 1
  }

  var questionFive = {
    question:'5th Grade Math: John\'s teacher asked him to draw a quadrilateral with all congruent sides. What could he draw?',
    choices:['A Rectangle or a Rhombus', 'A Rectangle or a Square', 'A Square or a Rhombus', 'A Trapezoid or a Kite'],
    correctAns: 3
  }

  var questionSix = {
    question:'6th Grade Literature: There was one a man from Peru,\nWho dreamed of eating his shoe,\nHe awoke one night in a fright\nIn the middle of the night,\nAnd found that his dream had come true.\n What type of poem is this?',
    choices:['Couplet', 'Limerick', 'Haiku', 'Acrostic'],
    correctAns: 1
  }

  var questionSeven = {
    question:'7th Grade Geography: Which of the following is NOT a continent?',
    choices:['Central America', 'Africa', 'North America', 'Europe'],
    correctAns: 0
  }
  var questionEight = {
    question:'8th Grade Biology: Which of the following is considered to be smallest in size?',
    choices:['1) Virus', '2) Bacterium', '3) Lymphocyte', '4) Red Blood Cell'],
    correctAns: 0
  }
  var questionNine = {
    question:'9th Grade English: If, standing alone on the back doorstep, Tom allowed himself to weep tears, they were tears of anger. - Tom\'s Midnight Garden.\nIn the quote above, what do the words "standing alone on the back doorstep" represent?',
    choices:['1) Noun Phrase', '2) Verb Phrase', '3) Infinitive Phrase', '4) Participle Phrase'],
    correctAns: 3
  }
  var questionTen = {
    question:'10th Grade World History: What is a Ziggurat?',
    choices:['A Small Animal', 'A Temple', 'A Small City', 'A Marketplace'],
    correctAns: 1
  }
  var questionEleven = {
    question:'11th Grade Chemistry: The First Law of Thermodynamics is another version of the law of what?',
    choices:['Conservation of Entrophy', 'Enthalpy', 'Conservation of Energy', 'Perpetual Motion'],
    correctAns: 2
  }
  var questionTwelve = {
    question:'12th Grade Music: Who composed the 1812 Overture?',
    choices:['Tchaikovsky', 'Bach', 'Vivaldi', 'Walton'],
    correctAns: 0
  }

  var allQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, questionEleven, questionTwelve]

  // all the dom selections
  var questionDisplay = document.querySelector('#Question')
  var ansDisplay = document.querySelector('ol')
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
    if (qIndex <= 11) {
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
        alert('It\'s a Tie!')
        return gameOver = true
      }
    }
  }

  function turnKeeper (questionNum) {
    // console.log(qIndex);
    if (questionNum % 2 === 0) {
      playerTurn = 1
      turnDisplay.innerText = 'Player 1 is Playing'
    } else {
      playerTurn = 2
      turnDisplay.innerText = 'Player 2 is Playing'
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

  function restartButton () {
    // var restartSelect = document.querySelector('button')
    if (gameOver === true) {
      var restartButton = document.createElement('button')
      restartButton.innerText = 'Restart?'
      document.body.appendChild(restartButton)
      document.querySelector('button').addEventListener('click', function restartGame () {
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


  // start at qn 1
  showQuestionAndChoices(questionNum)
  activateChoices()
}
